import { Database } from "@/lib/db";
import userSchema from "@/models/userSchema";
import { hashSync } from "bcrypt-ts";

export async function POST(req) {
  try {
    await Database();

    const { name, email, password } = await req.json();

    const hashedPassword = hashSync(password, 10);

    (await userSchema.create({ name, email, password: hashedPassword })).save();
  } catch (error) {
    console.log(error);
  }
}
