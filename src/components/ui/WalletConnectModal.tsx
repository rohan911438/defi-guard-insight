import React from 'react';
import { Wallet, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletType: string) => void;
  isConnecting: boolean;
  error: string | null;
}

const walletProviders = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    description: 'Connect using browser wallet',
    installed: typeof window !== 'undefined' && window.ethereum?.isMetaMask,
    downloadUrl: 'https://metamask.io/download/',
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Connect using mobile wallet',
    installed: true, // WalletConnect is always available
    downloadUrl: 'https://walletconnect.com/',
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Connect using Coinbase Wallet',
    installed: typeof window !== 'undefined' && window.ethereum?.isCoinbaseWallet,
    downloadUrl: 'https://www.coinbase.com/wallet',
  },
];

export const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  isOpen,
  onClose,
  onConnect,
  isConnecting,
  error,
}) => {
  const handleWalletConnect = (walletId: string) => {
    onConnect(walletId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect Your Wallet
          </DialogTitle>
          <DialogDescription>
            Choose a wallet to connect to GuardianAI and start monitoring DeFi security.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              <CheckCircle className="h-3 w-3 mr-1" />
              U2U Network Ready
            </Badge>
            <p className="text-sm text-muted-foreground">
              This application is optimized for U2U Nebulas Testnet. The network will be added automatically.
            </p>
          </div>

          {walletProviders.map((wallet) => (
            <div key={wallet.id} className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-between h-auto p-4"
                onClick={() => handleWalletConnect(wallet.id)}
                disabled={isConnecting || !wallet.installed}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{wallet.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{wallet.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {wallet.description}
                    </div>
                  </div>
                </div>
                {wallet.installed ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
              </Button>

              {!wallet.installed && (
                <div className="pl-4">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-xs"
                    onClick={() => window.open(wallet.downloadUrl, '_blank')}
                  >
                    Install {wallet.name} →
                  </Button>
                </div>
              )}
            </div>
          ))}

          {isConnecting && (
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                Connecting wallet...
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4">
          <p className="text-xs text-muted-foreground text-center">
            By connecting your wallet, you agree to our{' '}
            <Button variant="link" className="h-auto p-0 text-xs">
              Terms of Service
            </Button>{' '}
            and{' '}
            <Button variant="link" className="h-auto p-0 text-xs">
              Privacy Policy
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Trigger component for easy use
interface WalletConnectButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={className}
          onClick={() => setIsOpen(true)}
        >
          {children || (
            <>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </>
          )}
        </Button>
      </DialogTrigger>
    </>
  );
};