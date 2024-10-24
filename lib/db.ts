import Account from "@/mongoose/models/account";
import mongoose, { Connection } from "mongoose";

let defaultConnection: Connection | null = null;

const mongo: string = process.env.MONGODB_URI ?? "";

export const ConnectDB = async () => {
  try {
    if (defaultConnection) return defaultConnection;

    const db = await mongoose.connect(mongo);

    defaultConnection = db.connection;
    console.log("Connected to database");
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export const CloseDB = async () => {
  try {
    if (!defaultConnection) return;

    await defaultConnection.close();
    defaultConnection = null;
    console.log("Database closed");
  } catch (error) {
    console.log(error);
  }
};

export const FindId = async (id: string) => {
  try {
    await ConnectDB();

    const data = await Account.findOne({ id });

    if (!data) return { error: "There is no that id in database" };
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await CloseDB();
  }
};
export const FindEmail = async (email: string) => {
  try {
    await ConnectDB();

    const data = await Account.findOne({ email });

    if (!data) return { error: "There is no that id in database" };
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await CloseDB();
  }
};
