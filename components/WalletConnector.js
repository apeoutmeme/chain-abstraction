import React from "react";
import { useChainInteraction } from "../hooks/useChain";

const WalletConnector = () => {
  const { connectWallet, currentChain } = useChainInteraction();

  const handleConnect = async () => {
    await connectWallet("MetaMask"); // Example wallet
  };

  return (
    <div>
      <button onClick={handleConnect}>Connect Wallet</button>
      {currentChain && <p>Connected to {currentChain}</p>}
    </div>
  );
};

export default WalletConnector;
