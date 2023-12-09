import axios from "axios";

export const check_user = async (wallet_id) => {
  try {
    const res = await axios({
      url: "/api/user",
      method: "POST",
      data: {
        wallet_id,
        user_name: "",
        address: "",
        role:"citizen",
        state:""
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message)
  }
};