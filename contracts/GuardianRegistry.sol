// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GuardianRegistry {
    address public owner;
    mapping(address => bool) public monitoredProtocols;
    mapping(address => bool) public monitoredWallets;

    event ProtocolRegistered(address indexed protocol);
    event WalletRegistered(address indexed wallet);
    event ProtocolUnregistered(address indexed protocol);
    event WalletUnregistered(address indexed wallet);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerProtocol(address protocol) external onlyOwner {
        monitoredProtocols[protocol] = true;
        emit ProtocolRegistered(protocol);
    }

    function unregisterProtocol(address protocol) external onlyOwner {
        monitoredProtocols[protocol] = false;
        emit ProtocolUnregistered(protocol);
    }

    function registerWallet(address wallet) external onlyOwner {
        monitoredWallets[wallet] = true;
        emit WalletRegistered(wallet);
    }

    function unregisterWallet(address wallet) external onlyOwner {
        monitoredWallets[wallet] = false;
        emit WalletUnregistered(wallet);
    }

    function isMonitored(address addr) external view returns (bool) {
        return monitoredProtocols[addr] || monitoredWallets[addr];
    }
}
