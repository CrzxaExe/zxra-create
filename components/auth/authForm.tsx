"use client";

import React from "react";
import { AuthButton } from "../button";

import { authCredentials } from "@/lib/action";
import { useFormState } from "react-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthForm = ({ ant }: { ant: any }) => {
  const [state, formAction] = useFormState(authCredentials, null);

  return (
    <div className="mt-2">
      <form action={formAction} className="w-full">
        <span>Tolong isi ulang Nama dan Email anda</span>

        {state?.message ? (
          <div
            className="p-4 mb-4 text-rose-800 rounded bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <label htmlFor="email" className="block text-base lg:text-lg mt-5">
          Nama
        </label>
        <input
          type="text"
          name="name"
          placeholder={ant?.user?.name}
          className="w-full block bg-slate-400 text-slate-700 outline-none px-3 py-2 rounded-lg placeholder:text-slate-700"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.name}
          </span>
        </div>

        <label htmlFor="email" className="block text-base lg:text-lg mt-5">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder={ant?.user?.email}
          className="w-full block bg-slate-400 text-slate-700 outline-none px-3 py-2 rounded-lg placeholder:text-slate-700"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.email}
          </span>
        </div>
        <AuthButton />
      </form>
    </div>
  );
};

export default AuthForm;
