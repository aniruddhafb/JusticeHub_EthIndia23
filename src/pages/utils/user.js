import axios from "axios";

export const check_user = async (wallet_id) => {
  try {
    const res = await axios({
      url: "/api/user",
      method: "POST",
      data: {
        wallet_id,
        name: "",
        address: "",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const create_complaint = async (signer_addr, complain_addr) => {
  try {
    const res = await axios({
      url: "/api/complaint",
      method: "POST",
      data: {
        user_id: signer_addr,
        complaint: complain_addr,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
