"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { registerCredentials } from "@/lib/action";
import { RegisterButton } from "../button";

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerCredentials, null);

  return (
    <div className="mt-2">
      <form action={formAction} className="w-full">
        {state?.message ? (
          <div
            className="p-4 mb-3 text-rose-800 rounded bg-rose-200"
            role="alert"
          >
            <span className="font-medium ">{state?.message}</span>
          </div>
        ) : null}

        <label htmlFor="name" className="text-base lg:text-lg">
          Nama
        </label>
        <input
          type="text"
          name="name"
          placeholder="Hey siapa namamu tuan"
          className="w-full block bg-slate-400/40 isolate text-slate-200 outline-none px-3 py-2 rounded-lg placeholder:text-slate-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.name}
          </span>
        </div>

        <label htmlFor="email" className="block text-base lg:text-lg mt-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Emailmu tuan"
          className="w-full block bg-slate-400/40 isolate text-slate-200 outline-none px-3 py-2 rounded-lg placeholder:text-slate-300"
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
          placeholder="Sandimu"
          className="w-full block bg-slate-400/40 isolate text-slate-200 outline-none px-3 py-2 rounded-lg placeholder:text-slate-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.password}
          </span>
        </div>

        <label
          htmlFor="ComfirmPassword"
          className="block text-base lg:text-lg mt-3"
        >
          Konfirmasi Sandi
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Isi lagi sandimu"
          className="w-full block bg-slate-400/40 isolate text-slate-200 outline-none px-3 py-2 rounded-lg placeholder:text-slate-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.ConfirmPassword}
          </span>
        </div>
        <RegisterButton />
      </form>

      <span className="text-slate-400 mt-3 block">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-teal-400">
          Masuk
        </Link>
      </span>
    </div>
  );
};

export default RegisterForm;
