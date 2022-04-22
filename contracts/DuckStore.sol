// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract DuckStore {

    uint256 aNumber;
    string aString;
    string[] anArray;
    Duck duck;

    struct Duck {
        string name;
        bool quacks;
    }

    Duck[] public ducks;

    function setNumber(uint256 number) public {
        aNumber = number;
    }

    function getNumber() public view returns (uint) {
        return aNumber;
    }

    function setString(string memory text) public {
        aString = text;
    }

    function getString() public view returns (string memory) {
        return aString;
    }

    function setArray(string memory text) public {
        anArray.push(text);
    }

    function getArray() public view returns (string[] memory) {
        return anArray;
    }

    function setDuck(string memory text, bool quacking) public {
        ducks.push(Duck({name : text, quacks : quacking}));
    }

    function getDucks() public view returns (Duck[] memory) {
        return ducks;
    }

}

