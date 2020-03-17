import Web3 from "web3";

import admined  from "./contracts/admined.json";
import VoteToken from "./contracts/VoteToken.json";
import Voters from "./contracts/Voters.json";
import Voting from "./contracts/Voting.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
    networkWhitelist: [
      1, // Mainnet
      3, // Ropsten
      4, // Rinkeby
      5, // Goerli
      42 // Kovan
    ]
  },
  contracts: [ admined , VoteToken , Voters , Voting ],
  events: {
    VoteToken: ["setToken","Tranfer"],
    Voters: ["subscribeVoter"]
  }
};

export default options;
