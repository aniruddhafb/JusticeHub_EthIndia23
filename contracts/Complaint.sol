// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Complaint_Factory.sol";

contract Complaint is Ownable {
    uint256 public id;
    
    address fir_owner;
    address admins;

    string public name;
    uint256 public contact_num;
    string public _address;

    string public email;
    string public complaint;
    string public evidence;
    string public complaint_against;
    uint256 public date_of_complaint;

    address[] assigned_individuals;

    // status public fir_status;

    Complaint_Factory factory_contract;
    
    status public fir_status;

    enum status {
        pending,
        under_investigation,
        completed,
        cancel
    }

    constructor(
        uint256 _id,
        string memory _name,
        string memory _complaint_against,
        uint256 _contact_num,
        string memory address_,
        string memory _email,
        string memory _complaint,
        string memory _evidence,
        uint256 _date_of_complaint,
        Complaint_Factory _factory_contract
    ) {
        require(msg.sender == address(_factory_contract), "Wrong person posting FIR");
        id = _id;
        name = _name;
        complaint_against = _complaint_against;
        contact_num = _contact_num;
        _address = address_;
        email = _email;
        complaint = _complaint;
        evidence = _evidence;
        date_of_complaint = _date_of_complaint;

        factory_contract = _factory_contract;
        fir_status = status.pending;
    }

    function update_status(
        uint256 status_no
    )  external {
        require(msg.sender == address(factory_contract), "Wrong Caller Address");
        if(status_no == 1) {
            fir_status = status.under_investigation;
        } else if (status_no == 2) {
            fir_status = status.completed;
        } else if (status_no == 3) {
            fir_status = status.cancel;
            selfdestruct(payable(fir_owner));
        } else {
            fir_status = status.pending;
        }
    }

    function getInfo() public view returns (
        string memory name,
        uint256 contact_num,
        string memory _address,
        string memory email,
        string memory complaint,
        string memory evidence,
        string memory complaint_against,
        uint256 date_of_complaint
    ) {
        return (
            name,
            contact_num,
            _address,
            email,
            complaint,
            evidence,
            complaint_against,
            date_of_complaint
        );
    }
}