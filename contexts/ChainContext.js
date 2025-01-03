import React, { createContext, useState, useContext } from "react";

const ChainContext = createContext();

export const ChainProvider = ({ children }) => {
  const [currentChain, setCurrentChain] = useState(null);
  const [wallet, setWallet] = useState(null);

  const switchChain = async (chainId) => {
    // Logic to switch chains, e.g., using Web3 or ethers.js
    console.log(`Switching to chain: ${chainId}`);
    setCurrentChain(chainId);
  };

  const connectWallet = async (walletProvider) => {
    // Connect to wallet logic
    console.log(`Connecting wallet: ${walletProvider}`);
    setWallet(walletProvider);
  };

  return (
    <ChainContext.Provider value={{ currentChain, switchChain, connectWallet, wallet }}>
      {children}
    </ChainContext.Provider>
  );
};

export const useChain = () => useContext(ChainContext);
