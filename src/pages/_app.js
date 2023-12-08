import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";

// other imports
import { ethers } from "ethers";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import crypto from "crypto";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const connect_wallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log(signer);
  };
  useEffect(() => {
    connect_wallet();
  }, []);

  return (
    <ChakraProvider>
          <AnonAadhaarProvider _appId={app_id}>
      <Component {...pageProps} />
      </AnonAadhaarProvider>
    </ChakraProvider>
  );
}
