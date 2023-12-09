// css
import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";
import "@/styles/dashboard.css";
import "@/styles/responsive.css";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

// other imports
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import crypto from "crypto";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

// anon adhaar id 
const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const[walletAddress, setWalletAddress]= useState();
  
  const connect_wallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.ready;
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const wallet_address = await signer.getAddress();
    setWalletAddress(wallet_address);
  };

  useEffect(() => {
    connect_wallet();
  }, []);

  return (
    <ChakraProvider>
      <AnonAadhaarProvider _appId={app_id}>
        <Component
          {...pageProps}
          connect_wallet={connect_wallet}
          walletAddress={walletAddress}
        />
      </AnonAadhaarProvider>
    </ChakraProvider>
  );
}
