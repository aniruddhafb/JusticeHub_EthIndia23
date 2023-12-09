import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  wallet_id: {
    type: String,
    unique: true,
  },
  user_name: {
    type: String,
    sparse: true,
  },
  role: {
    type: String,
    sparse:true,
  },
  address: {
    type: String,
    sparse: true,
  },
  state: {
    type: String,
    sparse: true,
  }
},
  { timestamps: true }
);

module.exports = mongoose.models?.User || mongoose.model("User", UserSchema);
