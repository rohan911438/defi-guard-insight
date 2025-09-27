// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FeedbackReport {
    struct Feedback {
        address user;
        string alertType;
        string comment;
        uint256 timestamp;
    }

    Feedback[] public feedbacks;

    event FeedbackSubmitted(address indexed user, string alertType, string comment, uint256 timestamp);

    function submitFeedback(string calldata alertType, string calldata comment) external {
        feedbacks.push(Feedback({
            user: msg.sender,
            alertType: alertType,
            comment: comment,
            timestamp: block.timestamp
        }));
        emit FeedbackSubmitted(msg.sender, alertType, comment, block.timestamp);
    }

    function getFeedback(uint256 index) external view returns (address, string memory, string memory, uint256) {
        Feedback storage fb = feedbacks[index];
        return (fb.user, fb.alertType, fb.comment, fb.timestamp);
    }

    function feedbackCount() external view returns (uint256) {
        return feedbacks.length;
    }
}
