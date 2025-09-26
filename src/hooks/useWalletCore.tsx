import { useState, useEffect, useCallback, createContext, useContext } from 'react';

export interface WalletState {
  isConnected: boolean;
  account: string | null;
  chainId: number | null;
  balance: string | null;
  isConnecting: boolean;
  error: string | null;
}

export interface WalletConnectorMeta {
  name: string;
  icon: string;
  connector: () => Promise<any>;
  installed: boolean;
}

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const SUPPORTED_NETWORKS = {
  U2U_TESTNET: {
    chainId: '0x9f9', // 2553 in hex
    chainName: 'U2U Nebulas Testnet',
    rpcUrls: ['https://rpc-nebulas-testnet.uniultra.xyz'],
    nativeCurrency: {
      name: 'U2U',
      symbol: 'U2U',
      decimals: 18,
    },
    blockExplorerUrls: ['https://u2uscan.xyz'],
  },
};

export const useWalletInternal = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    account: null,
    chainId: null,
    balance: null,
    isConnecting: false,
    error: null,
  });

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            const balance = await window.ethereum.request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest'],
            });
            setWalletState({
              isConnected: true,
              account: accounts[0],
              chainId: parseInt(chainId, 16),
              balance: (parseInt(balance, 16) / 10 ** 18).toFixed(4),
              isConnecting: false,
              error: null,
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };
    checkConnection();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          setWalletState({
            isConnected: false,
            account: null,
            chainId: null,
            balance: null,
            isConnecting: false,
            error: null,
          });
        } else {
          setWalletState(prev => ({ ...prev, account: accounts[0] }));
        }
      };
      const handleChainChanged = (chainId: string) => {
        setWalletState(prev => ({ ...prev, chainId: parseInt(chainId, 16) }));
      };
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, []);

  const connectWallet = useCallback(async (walletType: string = 'metamask') => {
    if (!window.ethereum) {
      setWalletState(prev => ({ ...prev, error: 'No Web3 wallet detected. Please install MetaMask or another Web3 wallet.' }));
      return;
    }
    setWalletState(prev => ({ ...prev, isConnecting: true, error: null }));
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length === 0) throw new Error('No accounts returned from wallet');
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
      const currentChainId = parseInt(chainId, 16);
      if (currentChainId !== parseInt(SUPPORTED_NETWORKS.U2U_TESTNET.chainId, 16)) {
        try {
          await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: SUPPORTED_NETWORKS.U2U_TESTNET.chainId }] });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [SUPPORTED_NETWORKS.U2U_TESTNET] });
          } else {
            throw switchError;
          }
        }
      }
      setWalletState({
        isConnected: true,
        account: accounts[0],
        chainId: currentChainId,
        balance: (parseInt(balance, 16) / 10 ** 18).toFixed(4),
        isConnecting: false,
        error: null,
      });
      localStorage.setItem('wallet_connected', 'true');
      localStorage.setItem('wallet_type', walletType);
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      setWalletState(prev => ({ ...prev, isConnecting: false, error: error.message || 'Failed to connect wallet' }));
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletState({ isConnected: false, account: null, chainId: null, balance: null, isConnecting: false, error: null });
    localStorage.removeItem('wallet_connected');
    localStorage.removeItem('wallet_type');
  }, []);

  const switchNetwork = useCallback(async (networkKey: keyof typeof SUPPORTED_NETWORKS) => {
    if (!window.ethereum) return;
    const network = SUPPORTED_NETWORKS[networkKey];
    try {
      await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: network.chainId }] });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [network] });
      } else {
        throw switchError;
      }
    }
  }, []);

  const formatAddress = useCallback((address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  return { ...walletState, connectWallet, disconnectWallet, switchNetwork, formatAddress, isU2UNetwork: walletState.chainId === parseInt(SUPPORTED_NETWORKS.U2U_TESTNET.chainId, 16) };
};

const WalletContext = createContext<ReturnType<typeof useWalletInternal> | null>(null);
export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const wallet = useWalletInternal();
  return <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>;
};
export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWalletContext must be used within a WalletProvider');
  return context;
};
