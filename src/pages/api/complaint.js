import dbConnect from "../../lib/dbConnect";
import User from "../../Models/User";
import Complaint from "../../Models/Complaint";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { user_addr } = req.query;

        const user = await User.findOne({ wallet_id: user_addr }).populate(
          "complaints"
        );
        if (!user)
          return res
            .status(404)
            .json({ success: false, message: "cannot find this user" });

        const complaints = user.complaints;
        res.status(200).json({ success: true, message: complaints });
        break;
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case "POST":
      try {
        const { user_id, complaint } = req.body;

        const user = await User.findOne({ wallet_id: user_id });
        if (!user)
          return res
            .status(404)
            .json({ success: false, message: "Cannot Find User" });

        const check_complaint = await Complaint.findOne({ complaint });
        if (check_complaint) return;
        const new_complaint = await Complaint.create({
          owner: user,
          complaint,
        });
          
        await user.complaints.push(new_complaint);
        await user.save();

        res.status(200).json({ success: true, message: new_complaint });
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
