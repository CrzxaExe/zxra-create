import Account from "@/mongoose/models/account";
import mongoose, { Connection } from "mongoose";

let defaultConnection: Connection | null = null;

const mongo: string = process.env.MONGODB_URI ?? "";

export const ConnectDB = async () => {
  try {
    if (defaultConnection) return defaultConnection;

    const db = await mongoose.connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    defaultConnection = db.connection;
    console.log("Connected to database");
    return defaultConnection;
  } catch (error) {
    console.error("Error connecting to database:", error);
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
    console.error("Error closing database:", error);
  }
};

export const FindId = async (id: string) => {
  try {
    const connection = await ConnectDB();

    const data = await Account.findOne({ id });

    if (!data) return { error: "There is no such id in database" };
    return data;
  } catch (error) {
    console.error("Error finding ID:", error);
  } finally {
    await CloseDB();
  }
};

export const FindEmail = async (email: string) => {
  try {
    const connection = await ConnectDB();

    const data = await Account.findOne({ email });

    if (!data) return { error: "There is no such email in database" };
    return data;
  } catch (error) {
    console.error("Error finding email:", error);
  } finally {
    await CloseDB();
  }
};
