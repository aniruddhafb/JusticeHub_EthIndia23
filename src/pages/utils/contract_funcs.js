const { ethers } = require("ethers");
const lighthouse = require("@lighthouse-web3/sdk");
const Factory_Abi = require("../../../abi/Complaint_Factory.abi.json");

const FACTORY_ADDR = "0x42b93a5eE5839Ff8436c3CF1F310b07fAeCc0834";

export const factory_contract = async (provider, signer) => {
  const _factory_contract = new ethers.Contract(
    FACTORY_ADDR,
    Factory_Abi,
    provider
  );

  _factory_contract.connect(signer);
  return _factory_contract;
};

export const upload_fir = async (provider, signer, data) => {
  const contract = await Promise.resolve(factory_contract(provider, signer));

  const res = await contract.id();
  contract.on("complaint_new", (event) => {
    console.log("Event received:", event);
  });
  console.log({ res: res.toString() });
  await contract.post_fir(
    data.name,
    data.contact_num,
    data.ddress,
    data.email,
    data.complaint,
    "data.evidence"
  );

  const new_id = await contract.id();
  console.log({ new_id: new_id.toString() });
};
