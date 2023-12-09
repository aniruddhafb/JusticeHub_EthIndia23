import mongoose, { Schema } from "mongoose";

const ComplaintSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    complaint: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models?.Complaint || mongoose.model("Complaint", ComplaintSchema);
