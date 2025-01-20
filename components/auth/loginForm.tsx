"use client";

import React from "react";
import { LoginButton } from "../button";
import { CenterHr } from "../hr";

import { loginCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import { TextField } from "../components";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginCredentials, null);

  return (
    <div>
      <form action={formAction} className="w-full">
        {state?.message ? (
          <div
            className="p-4 mb-3 text-rose-800 rounded bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <TextField
          name="email"
          placeholder="Isi email anda"
          text="Email"
          type="email"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.email}
          </span>
        </div>

        <TextField
          name="password"
          placeholder="********"
          text="Sandi"
          type="password"
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
