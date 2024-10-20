"use server";

import mongoose from "mongoose";

const AccSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

let Account = mongoose.models?.Account || mongoose.model("Account", AccSchema);

export default Account;
