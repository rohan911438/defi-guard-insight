// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RiskScoreOracle {
    address public admin;
    mapping(address => uint256) public riskScores;

    event RiskScoreUpdated(address indexed target, uint256 score);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function setRiskScore(address target, uint256 score) external onlyAdmin {
        require(score <= 100, "Score must be 0-100");
        riskScores[target] = score;
        emit RiskScoreUpdated(target, score);
    }

    function getRiskScore(address target) external view returns (uint256) {
        return riskScores[target];
    }

    function setAdmin(address _admin) external onlyAdmin {
        admin = _admin;
    }
}
