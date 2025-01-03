import { useChain } from "../contexts/ChainContext";

export const useChainInteraction = () => {
  const { currentChain, wallet, switchChain, connectWallet } = useChain();

  const executeTransaction = async (transactionData) => {
    if (!wallet) throw new Error("Wallet not connected");
    // Transaction logic here
    console.log(`Executing transaction on chain ${currentChain}`, transactionData);
  };

  return {
    currentChain,
    wallet,
    switchChain,
    connectWallet,
    executeTransaction,
  };
};
