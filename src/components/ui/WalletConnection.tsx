import React, { useState } from 'react';
import { useWalletContext } from '@/hooks/useWallet';
import { WalletConnectModal } from '@/components/ui/WalletConnectModal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Wallet, 
  ChevronDown, 
  Copy, 
  ExternalLink, 
  LogOut, 
  Settings,
  AlertTriangle 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WalletConnectionProps {
  showBalance?: boolean;
  showNetwork?: boolean;
  variant?: 'default' | 'compact' | 'header';
}

export const WalletConnection: React.FC<WalletConnectionProps> = ({
  showBalance = true,
  showNetwork = true,
  variant = 'default'
}) => {
  const {
    isConnected,
    account,
    balance,
    chainId,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    formatAddress,
    isU2UNetwork,
  } = useWalletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleConnect = async (walletType: string) => {
    await connectWallet(walletType);
    setIsModalOpen(false);
  };

  const copyAddress = async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      toast({
        title: "Address copied!",
        description: "Wallet address has been copied to clipboard.",
      });
    }
  };

  const openExplorer = () => {
    if (account && isU2UNetwork) {
      window.open(`https://u2uscan.xyz/address/${account}`, '_blank');
    }
  };

  if (!isConnected) {
    return (
      <>
        <Button
          onClick={() => setIsModalOpen(true)}
          disabled={isConnecting}
          variant={variant === 'header' ? 'outline' : 'default'}
          size={variant === 'compact' ? 'sm' : 'default'}
        >
          {isConnecting ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          ) : (
            <Wallet className="mr-2 h-4 w-4" />
          )}
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>

        <WalletConnectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConnect={handleConnect}
          isConnecting={isConnecting}
          error={error}
        />
      </>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        <Badge variant={isU2UNetwork ? 'default' : 'destructive'}>
          {isU2UNetwork ? 'U2U' : 'Wrong Network'}
        </Badge>
        <span className="text-sm font-mono">{formatAddress(account!)}</span>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant === 'header' ? 'outline' : 'default'}
          className="flex items-center gap-2"
        >
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">
              {account?.slice(2, 4).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col items-start">
            <span className="text-sm font-mono">{formatAddress(account!)}</span>
            {showBalance && balance && (
              <span className="text-xs text-muted-foreground">
                {balance} U2U
              </span>
            )}
          </div>
          
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <div className="px-3 py-2 border-b">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Connected Wallet</span>
            {!isU2UNetwork && (
              <Badge variant="destructive" className="text-xs">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Wrong Network
              </Badge>
            )}
          </div>
          
          <div className="mt-2 space-y-1">
            <div className="font-mono text-sm break-all">{account}</div>
            {showBalance && (
              <div className="text-sm text-muted-foreground">
                Balance: {balance} U2U
              </div>
            )}
            {showNetwork && (
              <div className="text-sm text-muted-foreground">
                Chain ID: {chainId}
              </div>
            )}
          </div>
        </div>

        <DropdownMenuItem onClick={copyAddress}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Address
        </DropdownMenuItem>

        {isU2UNetwork && (
          <DropdownMenuItem onClick={openExplorer}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View on U2UScan
          </DropdownMenuItem>
        )}

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Wallet Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={disconnectWallet} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};