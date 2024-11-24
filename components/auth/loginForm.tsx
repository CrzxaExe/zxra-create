"use client";

import React from "react";
import { LoginButton } from "../button";
import { CenterHr } from "../hr";

import { loginCredentials } from "@/lib/action";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginCredentials, null);

  return (
    <div className="">
      <form action={formAction} className="w-full">
        {state?.message ? (
          <div
            className="p-4 mb-3 text-rose-800 rounded bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <label htmlFor="email" className="block text-base lg:text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email anda tuan"
          className="w-full block bg-base-ascent/50 backdrop-blur-lg isolate text-slate-200 outline-none px-3 py-1.5 rounded-lg placeholder:text-slate-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.email}
          </span>
        </div>

        <label htmlFor="password" className="block text-base lg:text-lg mt-2">
          Sandi
        </label>
        <input
          type="password"
          name="password"
          placeholder="Sandimu tuan"
          className="w-full block bg-base-ascent/50 backdrop-blur-lg isolate text-slate-200 outline-none px-3 py-1.5 rounded-lg placeholder:text-slate-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.password}
          </span>
        </div>
        <LoginButton />
      </form>

      <CenterHr text="Atau" />
    </div>
  );
};

export default LoginForm;
