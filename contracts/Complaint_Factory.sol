// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Complaint.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Complaint_Factory is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public id;
    Counters.Counter public pending_fir;
    Counters.Counter public completed_fir;
    Counters.Counter public under_investigation;

    Complaint complaint_;

    address[] public gov_ids;

    event complaint_new(
        uint256 id,
        string _name,
        uint8 _contact_num,
        string address_,
        string _email,
        string _complaint,
        string _evidence,
        Complaint new_complaint
    );

    constructor () {}

    function post_fir(
        string memory _name,
        uint8 _contact_num,
        string memory address_,
        string memory _email,
        string memory _complaint,
        string memory _evidence
    ) public {
        Complaint new_fir = new Complaint(
            id.current(),
            _name,
            _contact_num,
            address_,
            _email,
            _complaint,
            _evidence,
            block.timestamp,
            this
        );

        id.increment();
        pending_fir.increment();
        
        emit complaint_new(
            id.current(),
            _name,
            _contact_num,
            address_,
            _email,
            _complaint,
            _evidence,
            new_fir
        );
    }

    function update_under_investigation(uint256 new_status) public {
        for(uint e; e <= gov_ids.length; e++){
            require(msg.sender == gov_ids[e], "You are not authorized person to access this");
        }
        complaint_.update_status(new_status);
    }

    function increment_under() public {
        under_investigation.increment();
    }
}