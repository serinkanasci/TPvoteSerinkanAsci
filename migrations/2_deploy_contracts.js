const admined = artifacts.require("admined");
const VoteToken = artifacts.require("VoteToken");
const Voters = artifacts.require("Voters");
const Voting = artifacts.require("Voting");


module.exports = function(deployer) {
  deployer.deploy(admined);
  deployer.deploy(VoteToken).then(function() {
    deployer.deploy(Voters, VoteToken.address).then(function() {
      deployer.deploy(Voting, Voters.address, VoteToken.address);
    });
  });
};
