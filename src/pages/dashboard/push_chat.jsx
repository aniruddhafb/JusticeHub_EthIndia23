import React from "react";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

const push_chat = ({ signer }) => {
  const initialize_chat = async () => {
    // const signer = ethers.Wallet.createRandom();
    const userAlice = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });

    const bobWalletAddress = "0x6f56cF5c51cB095D76Add1fDE90589c1E7BE7313";

    const aliceMessagesBob = await userAlice.chat.send(bobWalletAddress, {
      content: "Gm gm! It's a me... Mario",
    });

    const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);
    stream.on(CONSTANTS.STREAM.CHAT, (message) => {
      console.log(message);
    });
    stream.connect();
  };
  return (
    <>
      <div>hello</div>
      <button onClick={initialize_chat}>chat</button>
    </>
  );
};

export default push_chat;
