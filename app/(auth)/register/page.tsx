import RegisterForm from "@/components/auth/registerForm";
import React from "react";

import { metadata } from "@/app/layout";

const Page = () => {
  metadata.title = "Register";

  return (
    <div className="block w-full bg-slate-600 px-7 py-6 rounded-xl max-w-screen-md shadow-md">
      <h1 className="text-xl lg:text-2xl text-slate-400 font-bold font-paprika mb-5">
        Daftar
      </h1>
      <RegisterForm />
    </div>
  );
};

export default Page;
