"use server";

import Account from "@/mongoose/models/account";
import { RegisterSchema, LoginSchema, AuthSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import mongoose from "mongoose";
import { CloseDB, ConnectDB } from "./db";
import { generateUUID } from "./generate";

export const registerCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    await ConnectDB();

    const validate = RegisterSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!validate.success) {
      return { error: validate.error.flatten().fieldErrors };
    }

    const { name, email, password } = validate.data;
    let user = await Account.findOne({ email });

    if (user) return { message: "Email telah terdaftar" };

    const hashedPassword = hashSync(password, 10);

    user = new Account({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      email: email,
      password: hashedPassword,
      userID: generateUUID(12),
    });
    await user.save();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: `Gagal melakukan registrasi: ${error}`,
    };
  } finally {
    await CloseDB();
  }

  redirect("/login");
};

export const loginCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validate = LoginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validate.success) {
    return { error: validate.error.flatten().fieldErrors };
  }

  const { email, password } = validate.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Email atau Password salah" };
        default:
          return { message: "Ada masalah" };
      }
    }
    throw error;
  }
};

export const authCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    await ConnectDB();

    const validate = AuthSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!validate.success) {
      return { error: validate.error.flatten().fieldErrors };
    }

    const { name, email } = validate.data;
    let user = await Account.findOne({ email });

    if (user) return { message: "Email telah terdaftar" };

    user = new Account({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      email: email,
      userID: generateUUID(12),
    });

    await user.save();
  } catch (error) {
    return { message: "Error " + error };
  } finally {
    await CloseDB();
  }

  redirect("/dashboard");
};
