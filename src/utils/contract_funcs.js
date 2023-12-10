const { ethers, Contract } = require("ethers");
const Factory_Abi = require("../../abi/Complaint_Factory.abi.json");
const ComplaintABI = require("../../abi/Complaint.abi.json");
const { useStorageUpload } = require("@thirdweb-dev/react");
import { create_complaint } from "./user";

//BASE CONTRACT
const BASE_FACTORY_ADDR = "0xC5674AB7Fef61C59A83178b5b39014D33c5Ca2C6";
const CELO_FACTORY_ADDR = "0xf4Ca0Ed060e5ce8E15dCdd97D82Bc52908465AC8";

export const factory_contract = async (signer) => {
  const _factory_contract = new ethers.Contract(
    BASE_FACTORY_ADDR,
    Factory_Abi,
    signer
  );

  return _factory_contract;
};

export const upload_fir = async (signer, data, signer_address) => {
  try {
    const factory_contract = new ethers.Contract(
      BASE_FACTORY_ADDR,
      Factory_Abi,
      signer
    );

    factory_contract.once(
      "complaint_new",
      (
        id,
        _name,
        _contact_num,
        address_,
        _email,
        _complaint,
        _evidence,
        new_complaint_addr
      ) => {
        console.log({
          id: id.toString(),
          _name,
          _contact_num,
          address_,
          _email,
          _complaint,
          _evidence,
          new_complaint_addr,
        });

        create_complaint(signer_address, new_complaint_addr);
      }
    );

    const res = await factory_contract.id();
    console.log(parseInt(res));
    const tx = await factory_contract.post_fir(
      data.name,
      data.complaint_against,
      data.contact_num,
      data.address,
      data.email,
      data.complaint,
      data.evidence
    );

    await tx.wait();

    const new_id = await factory_contract.id();
    console.log({ new_id: new_id.toString() });
  } catch (error) {
    console.log(error.message);
  }
};
export const CELO_upload_fir = async (signer, data, signer_address) => {
  try {
    const factory_contract = new ethers.Contract(
      CELO_FACTORY_ADDR,
      Factory_Abi,
      signer
    );

    factory_contract.once(
      "complaint_new",
      (
        id,
        _name,
        _contact_num,
        address_,
        _email,
        _complaint,
        _evidence,
        new_complaint_addr
      ) => {
        console.log({
          id: id.toString(),
          _name,
          _contact_num,
          address_,
          _email,
          _complaint,
          _evidence,
          new_complaint_addr,
        });

        create_complaint(signer_address, new_complaint_addr);
      }
    );

    const res = await factory_contract.id();
    console.log(parseInt(res));
    const tx = await factory_contract.post_fir(
      data.name,
      data.complaint_against,
      data.contact_num,
      data.address,
      data.email,
      data.complaint,
      data.evidence
    );

    await tx.wait();

    const new_id = await factory_contract.id();
    console.log({ new_id: new_id.toString() });
  } catch (error) {
    console.log(error.message);
  }
};

export const view_complaint = async (signer, complaint_addr) => {
  const contract = new ethers.Contract(complaint_addr, ComplaintABI, signer);

  const name = await contract.name();
  const contact_num = await contract.contact_num();
  const address = await contract._address();
  const email = await contract.email();
  const complaint = await contract.complaint();
  const evidence = await contract.evidence();
  const complaint_against = await contract.complaint_against();
  const date_of_complaint = await contract.date_of_complaint();
  const data = {
    name,
    contact_num: contact_num.toString(),
    address,
    email,
    complaint,
    evidence,
    complaint_against,
    date_of_complaint,
    complaint_addr,
  };
  return data;
};
