import React from "react";
import { useChainInteraction } from "../hooks/useChain";

const TransactionHandler = ({ transactionData }) => {
  const { executeTransaction } = useChainInteraction();

  const handleTransaction = async () => {
    try {
      await executeTransaction(transactionData);
      alert("Transaction successful");
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  return <button onClick={handleTransaction}>Execute Transaction</button>;
};

export default TransactionHandler;
