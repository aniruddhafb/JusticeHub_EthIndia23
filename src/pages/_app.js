import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";

import { ethers } from "ethers";
import { useEffect } from "react";
// other imports
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const connect_wallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.ready;
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    console.log({ walletAddress });
  };

  return (
    <ChakraProvider>
      <Component {...pageProps} connect_wallet={connect_wallet} />
    </ChakraProvider>
  );
}
