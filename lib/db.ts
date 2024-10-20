import mongoose from "mongoose";

const mongo: string = process.env.MONGODB_URI ?? "";

export const Database = async () => {
  try {
    await mongoose.connect(mongo),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      };

    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};
