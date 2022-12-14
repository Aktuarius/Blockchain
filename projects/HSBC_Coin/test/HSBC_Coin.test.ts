import { expect } from "chai";
import { ethers } from "hardhat";

describe("Given HSBC_Coin", function () {
  it("Owner should get the initial supply", async function () {
    const [owner] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("HSBC_Coin");
    const myToken = await MyToken.deploy();
    await myToken.deployed();
    const ownerBalance = await myToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(4000);
  });
});