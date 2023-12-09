import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    wallet_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      sparse: true,
    },
    address: {
      type: String,
      sparse: true,
    },
    complaints: [
      {
        type: Schema.Types.ObjectId,
        ref: "Complaint",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models?.User || mongoose.model("User", UserSchema);
