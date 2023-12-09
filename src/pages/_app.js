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

const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const [provider, set_provider] = useState();
  const [signer, set_signer] = useState();
  const [signer_addr, set_signer_address] = useState();
  

  const connect_wallet = async () => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);
    // // await provider.ready;
    // set_provider(provider);
    // const signer = await provider.getSigner();
    // console.log(signer);
    // set_signer(signer);
    // const walletAddress = await signer.getAddress();
    // set_signer_address(walletAddress);
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
          provider={provider}
          signer={signer}
          signer_addr={signer_addr}
        />
      </AnonAadhaarProvider>
    </ChakraProvider>
  );
}
