import dbConnect from "../../lib/dbConnect";
import User from "../../Models/User";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

    switch (method) {
      case "GET":
        try {
          const users = await User.find({});
          res.status(200).json({ success: true, data: users });
        } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred" });
        }
        break;
      case "POST":
        try {
          const { wallet_id } = req.body;
          if (!wallet_id) {
            return res.status(400).json({ success: false, message: "wallet_id is required" });
          }

          let user = await User.findOne({ wallet_id });

          if (!user) {
            user = await User.create(req.body);
          }

          res.status(201).json({ success: true, data: user });
        } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred" });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
}
