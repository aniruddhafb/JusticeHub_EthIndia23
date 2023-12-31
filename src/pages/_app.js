// css
import "@/styles/bootstrap.css";
import "@/styles/bootstrap-un.css";
import "@/styles/font-awesome.min.css";
import "@/styles/dashboard.css";
import "@/styles/responsive.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// other imports
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import crypto from "crypto";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import { check_user } from "../utils/user";

// anon adhaar id
const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const [walletAddress, setWalletAddress] = useState();
  const [signer, set_signer] = useState();
  const [provider, set_provider] = useState();

  const pushChannelAdress = "0xd0F431Fc2aC657cc8a64963aC108bea8cFB209B2";

  const connect_wallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.ready;
    await provider.send("eth_requestAccounts", []);
    set_provider(provider);
    const signer = provider.getSigner();
    const wallet_address = await signer.getAddress();

    const chainSwitchReload = async () => {
      try {
        router.reload();
      } catch (error) {
        console.log(error);
      }
    }

    const switchBaseCHain = async () => {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x14A33" }],
        });
        chainSwitchReload("84531");
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x14A33",
                  chainName: "Base Goerli",
                  nativeCurrency: {
                    name: "Goerli",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://goerli.basescan.org"],
                  rpcUrls: ["	https://goerli.base.org"],
                },
              ],
            });
            chainSwitchReload("80001");
          } catch (addError) {
            console.error(addError);
          }
        }
      }
    };
    
    const {chain_id} = await provider.getNetwork();
    if(chain_id != 84531){
      switchBaseCHain();
    }
    const new_signer = provider.getSigner(wallet_address);
    set_signer(new_signer);
    setWalletAddress(wallet_address);
    if (!walletAddress) return;

    check_user(walletAddress, "", "");
  };

  useEffect(() => {
    connect_wallet();
  }, []);

  return (
    <ThirdwebProvider
      clientId="5d679304f3253a0a2505896ef083e834"
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
