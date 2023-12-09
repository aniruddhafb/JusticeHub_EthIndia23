import dbConnect from "../../lib/dbConnect";
import User from "../../Models/User";
import Complaint from "../../Models/Complaint";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { user_id, complaint } = req.body;

        const user = await User.findById(user_id);

        // if (!user)
        //   return res
        //     .status(404)
        //     .json({ success: false, message: "Cannot Find User" });

        // const new_complaint = await Complaint.create({
        //   owner: "user",
        //   complaint,
        // });

        res.status(200).json({ success: true, message: complaint });
        break;
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
