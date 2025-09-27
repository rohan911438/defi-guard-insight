// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AccessControl {
    address public owner;
    mapping(address => bool) public guardians;

    event GuardianAdded(address indexed guardian);
    event GuardianRemoved(address indexed guardian);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyGuardian() {
        require(guardians[msg.sender], "Not a guardian");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addGuardian(address guardian) external onlyOwner {
        guardians[guardian] = true;
        emit GuardianAdded(guardian);
    }

    function removeGuardian(address guardian) external onlyOwner {
        guardians[guardian] = false;
        emit GuardianRemoved(guardian);
    }

    function isGuardian(address addr) external view returns (bool) {
        return guardians[addr];
    }
}
