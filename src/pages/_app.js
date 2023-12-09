// css
import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";
import "@/styles/dashboard.css";
import "@/styles/responsive.css";
import { ThirdwebProvider } from "@thirdweb-dev/storage";

// other imports
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import crypto from "crypto";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

// anon adhaar id
const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const [walletAddress, setWalletAddress] = useState();
  const [signer, set_signer] = useState();
  const [provider, set_provider] = useState();

  // const connect_wallet = async () => {
  //   let signer = null;

  //   let provider;
  //   if (window.ethereum == null) {
  //     console.log("MetaMask not installed; using read-only defaults");
  //     provider = ethers.getDefaultProvider();
  //   } else {
  //     provider = new ethers.BrowserProvider(window.ethereum);
  //     set_provider(provider);
  //     signer = await provider.getSigner();
  //     set_signer(signer);
  //     console.log(signer);
  //   }
  // };

  const connect_wallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.ready;
    await provider.send("eth_requestAccounts", []);
    set_provider(provider);
    const signer = provider.getSigner();
    const wallet_address = await signer.getAddress();
    const new_signer = provider.getSigner(wallet_address);
    console.log(new_signer);
    set_signer(new_signer);
    setWalletAddress(wallet_address);
  };

  useEffect(() => {
    connect_wallet();
  }, []);

  return (
    <ThirdwebProvider
      clientId="5d679304f3253a0a2505896ef083e834" // You can get a client id from dashboard settings
      activeChain="mumbai"
    >
      <ChakraProvider>
        <AnonAadhaarProvider _appId={app_id}>
          <Component
            {...pageProps}
            connect_wallet={connect_wallet}
            walletAddress={walletAddress}
            signer={signer}
            provider={provider}
          />
        </AnonAadhaarProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
