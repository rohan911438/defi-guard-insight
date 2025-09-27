// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AlertEmitter {
    address public guardian;

    event ThreatAlert(address indexed target, string alertType, string details, uint256 timestamp);

    modifier onlyGuardian() {
        require(msg.sender == guardian, "Not authorized");
        _;
    }

    constructor(address _guardian) {
        guardian = _guardian;
    }

    function emitAlert(address target, string calldata alertType, string calldata details) external onlyGuardian {
        emit ThreatAlert(target, alertType, details, block.timestamp);
    }

    function setGuardian(address _guardian) external onlyGuardian {
        guardian = _guardian;
    }
}
