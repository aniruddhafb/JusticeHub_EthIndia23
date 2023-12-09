const { ethers, Contract } = require("ethers");
const Factory_Abi = require("../../abi/Complaint_Factory.abi.json");
const Complaint = require("../../abi/Complaint.abi.json");
const { useStorageUpload } = require("@thirdweb-dev/react");
import { create_complaint } from "./user";
const FACTORY_ADDR = "0x80441741eD06afa3c56B8427A3947F44A1b8A73d";

export const factory_contract = async (signer) => {
  const _factory_contract = new ethers.Contract(
    FACTORY_ADDR,
    Factory_Abi,
    signer
  );

  return _factory_contract;
};

export const upload_fir = async (signer, data, signer_address) => {
  try {
    const factory_contract = new ethers.Contract(
      FACTORY_ADDR,
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
      "demo me",
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

export const view_complaint = async (provider, complaint_addr) => {
  const contract = new ethers.Contract(complaint_addr, Complaint, provider);

  const res = contract.getInfo();
  console.log(res);
};
