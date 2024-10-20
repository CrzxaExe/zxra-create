"use client";

import React from "react";
import { LoginButton, OtherLoginButton } from "../button";
import Link from "next/link";
import { CenterHr } from "../hr";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { loginCredentials } from "@/lib/action";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginCredentials, null);

  return (
    <div className="mt-2">
      <form action={formAction} className="w-full">
        {state?.message ? (
          <div
            className="p-4 mb-4 text-rose-800 rounded bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <label htmlFor="email" className="block text-base lg:text-lg mt-5">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email kamu"
          className="w-full block bg-slate-400 text-slate-700 outline-none px-3 py-2 rounded-lg placeholder:text-slate-700"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.email}
          </span>
        </div>

        <label htmlFor="password" className="block text-base lg:text-lg mt-5">
          Sandi
        </label>
        <input
          type="password"
          name="password"
          placeholder="Isi sandi"
          className="w-full block bg-slate-400 text-slate-700 outline-none px-3 py-2 rounded-lg placeholder:text-slate-700"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.password}
          </span>
        </div>
        <LoginButton />
      </form>

      <span className="text-slate-400 mt-4 block">
        Belum punya akun?{" "}
        <Link href="/register" className="text-teal-400">
          Daftar
        </Link>
      </span>

      <CenterHr text="Atau" />

      <div className="w-full">
        <OtherLoginButton className="flex flex-row items-center justify-center gap-2">
          <GoogleIcon />
          Google
        </OtherLoginButton>

        <OtherLoginButton className="flex flex-row items-center justify-center gap-2 mt-1">
          <GitHubIcon />
          Github
        </OtherLoginButton>
      </div>
    </div>
  );
};

export default LoginForm;
