const path = require("path");
// const HDWalletProvider = require("@truffle/hdwallet-provider");

// const mnemonic = "addict glad enjoy lecture barely stay six series connect myth indoor autumn";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      // default with truffle unbox is 8545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
  }
};
