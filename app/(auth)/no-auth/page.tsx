import { auth } from "@/auth";
import AuthForm from "@/components/auth/authForm";
import React from "react";

const Page = async () => {
  const session = await auth();

  return (
    <div className="block w-full bg-slate-600 px-7 py-6 rounded-xl max-w-screen-md shadow-md">
      <h1 className="text-xl lg:text-2xl text-slate-400 font-bold font-paprika mb-5">
        Autentikasi
      </h1>
      <AuthForm ant={session} />
    </div>
  );
};

export default Page;
