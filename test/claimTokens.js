et MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory");
let MSP = artifacts.require("MSP");

let miniMeTokenFactory;
let msp;
let contractAddress;
let contractBalance;
let accountBalance;
let amount = 50000000000000000000;

contract("MSP", function(accounts) {

    beforeEach(async () => {
        miniMeTokenFactory = await MiniMeTokenFactory.new({ from: accounts[0] });
        msp = await MSP.new(miniMeTokenFactory.address, { from: accounts[0] });
        await msp.enableTransfers(true, { from: accounts[0] });
        msp.generateTokens(accounts[0], 200000000000000000000);
        contractAddress = msp.address;
    });

    it("Controller should be able to retrieve tokens from the contract", async () => {
        contractBalance = (await msp.balanceOf.call(contractAddress)).toNumber();
        await msp.generateTokens(contractAddress, amount);
        contractBalance = (await msp.balanceOf.call(contractAddress)).toNumber();
        await msp.claimTokens(contractAddress);
        contractBalance = (await msp.balanceOf.call(contractAddress)).toNumber();
        assert.equal(contractBalance,0);
    });

    it("Controller should be able to retrieve ethers from the contract", async () => {
        console.log("msp contract address: " + contractAddress);
        console.log("msp contract address: " + web3.eth.accounts[0]);
        accountBalance = (await msp.balanceOf.call(accounts[0])).toNumber();
        console.log("acc0 balance: " + accountBalance);
        await msp.approve(accounts[0], web3.toWei(150,"ether"), { from: accounts[0] });

        await web3.eth.sendTransaction(web3.eth.accounts[0], web3.eth.accounts[1], web3.toWei(5,"ether"));

        await msp.claimTokens(0x0);
        contractBalance = (await msp.balanceOf.call(contractAddress)).toNumber();
        assert.equal(contractBalance,0);


    });

});
