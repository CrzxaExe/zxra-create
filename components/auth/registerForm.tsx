"use client";

import { useFormState } from "react-dom";

import { registerCredentials } from "@/lib/action";
import { RegisterButton } from "../button";
import { TextField } from "../components";

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerCredentials, null);

  return (
    <div className="">
      <form action={formAction} className="w-full">
        {state?.message ? (
          <div
            className="p-4 mb-3 text-rose-800 rounded-sm bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <TextField
          name="name"
          placeholder="Siapa namamu"
          text="Name"
          type="type"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.name}
          </span>
        </div>

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

        <TextField
          name="ConfirmPassword"
          placeholder="*******"
          text="Konfirmasi Sandi"
          type="password"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.ConfirmPassword}
          </span>
        </div>
        <RegisterButton />
      </form>
    </div>
  );
};

export default RegisterForm;
