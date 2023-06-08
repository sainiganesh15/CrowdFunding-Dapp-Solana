import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";

const ConnectWallet = () => {
  const { connect, connected } = useWallet();

  // Handle wallet connection
  const handleConnect = async () => {
    try {
      if (!connected) {
        const wallet = await connect(new PhantomWalletAdapter());
        if (wallet) {
          // Wallet is successfully connected
          // You can perform additional actions here if needed
        } else {
          // Wallet selection was cancelled or failed
          console.log("Wallet connection cancelled or failed");
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
  
  

  return (
    <button onClick={handleConnect}>
      {connected ? "Connected to Phantom" : "Connect to Phantom"}
    </button>
  );
};

export default ConnectWallet;
