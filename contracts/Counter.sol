// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    string public name;
    uint public count; //-1

    constructor(string memory _name, uint _intialCount){
       name =_name;
       count = _intialCount;
    }

    function increment() public returns (uint newCount){
        count ++;
        return count;
    }

    function decrement() public returns (uint newCount){
       count --;
       return count;
    }

    function getCount() public view returns(uint){
        return count;
    }

    function getName()public view returns (string memory currentName){
        return name;
    }

    function setName(string memory _newName) public returns (string memory newName){
        name = _newName;
        return name;
    }
}