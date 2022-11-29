// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HSBC_Coin is ERC20 {
    constructor() ERC20("HK Clearing Settlement 0005", "HKCS0005") {
        _mint(msg.sender, 4*10**9*10**18);
    }
}