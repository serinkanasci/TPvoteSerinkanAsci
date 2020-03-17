import React from "react";
import { newContextComponents } from "@drizzle/react-components";
const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div className="section">
        <h2>Get Voters</h2>
        <p>
          Voters count :&nbsp;
          <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Voters" method="getCounter" />
        </p>
      </div>
      <h3>Subscribe a candidate</h3>
        <ContractForm
          drizzle={drizzle}
          contract="Voters"
          method="subCandidat"
        />
      <h3>Subscribe a voter</h3>
        <ContractForm
          drizzle={drizzle}
          contract="Voters"
          method="subVoter"
        />
      <p>
        Number of voters for:&nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Voting" method="getVotes" />
      </p>
      <h3>Vote</h3>
        <ContractForm
          drizzle={drizzle}
          contract="Voting"
          method="vote"
        />
    </div>
  );
};
