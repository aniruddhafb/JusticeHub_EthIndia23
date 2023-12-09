const { ethers, Contract } = require("ethers");
const lighthouse = require("@lighthouse-web3/sdk");
const Factory_Abi = require("../../../abi/Complaint_Factory.abi.json");

const FACTORY_ADDR = "0xC5476BaC179C76ca46aCa05C6E42c7b6baF71C27";

export const factory_contract = async (provider, signer) => {
  const _factory_contract = new ethers.Contract(
    FACTORY_ADDR,
    Factory_Abi,
    signer
  );
  // await _factory_contract.post_fir(
  //   "data.name",
  //   "dmeo me",
  //   33,
  //   "data.ddress",
  //   "data.email",
  //   "data.complaint",
  //   "data.evidence"
  // );
  return _factory_contract;
};

export const upload_fir = async (provider, signer, data) => {
  const apiKey = "c542a701.b3505aeb5f784c3d9ff68e4d3044da87";
  const uploadResponse = await lighthouse.upload(data.evidence, apiKey);

  console.log(uploadResponse);
  // try {

  //   const factory_contract = new ethers.Contract(
  //     FACTORY_ADDR,
  //     Factory_Abi,
  //     signer
  //   );

  //   const res = await factory_contract.id();
  //   console.log(res.toString());

  //   factory_contract.on("complaint_new", (event) => {
  //     console.log("Event received:", event);
  //   });

  //   console.log({ res: res.toString() });

  //   await factory_contract.post_fir(
  //     data.name,
  //     "demo me",
  //     data.contact_num,
  //     data.address,
  //     data.email,
  //     data.complaint,
  //     "data.evidence"
  //   );
  //   const new_id = await factory_contract.id();
  //   console.log({ new_id: new_id.toString() });
  // } catch (error) {
  //   console.log(error.message);
  // }
};
