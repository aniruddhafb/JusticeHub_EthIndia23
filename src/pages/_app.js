import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";
import { ethers } from "ethers";
import { useEffect } from "react";

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
  return <Component {...pageProps} />;
}
