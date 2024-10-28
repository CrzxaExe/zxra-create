"use client";

import { User } from "next-auth";
import React from "react";

const UpdateForm = ({ user }: { user: User }) => {
  return (
    <form action="" className="mt-2">
      <h1 className="test-base mt-2">Status</h1>
      <input
        type="text"
        name="status"
        placeholder={user?.status || "-"}
        className="bg-slate-950 text-slate-400 px-3 py-2 w-full outline-none rounded-lg"
      />

      <button
        type="submit"
        className="bg-teal-500 px-4 py-2 rounded-lg mt-3 font-bold text-slate-900"
      >
        Ubah
      </button>
    </form>
  );
};

export default UpdateForm;
