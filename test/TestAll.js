const VoteToken = artifacts.require("VoteToken");
const Voters = artifacts.require("Voters");
const Voting = artifacts.require("Voting");

contract("VoteToken", accounts => {
  it("should have been 100", async () => {
    const tknInstance = await VoteToken.deployed();
    await tknInstance.transfer.call(accounts[1],100);
    const balance = await tknInstance.getBalance.call(accounts[1]);

    assert.equal(balance,100, "The balance of the second account is not correct.");
  });
});

contract("Voters", accounts => {
  it("should have been 0", async () => {
    const votersInstance = await Voters.deployed();
    nbVtr = await votersInstance.getCounter.call();

    assert.equal(nbVtr,0, "The number of voters must be 0.");
  });
});

contract("Voting", accounts => {
  it("should have been 0", async () => {
    const vtngInstance = await Voters.deployed();
    nbVtr = await vtngInstance.getVotes.call(accounts[1]);

    assert.equal(nbVtr,0, "The number of voters for this candidate must be 0.");
  });
});
