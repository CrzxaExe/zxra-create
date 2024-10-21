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
