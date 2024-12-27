"use server";

import { auth } from "@/auth";
import { FindEmail } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

import { metadata } from "@/app/layout";

const Page = async () => {
  metadata.title = "Beranda";

  const session = await auth();
  const user = await FindEmail(session?.user?.email || "");

  if (user?.error && session) redirect("/no-auth");

  return (
    <main className="mt-[7rem] relative max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-valorant">Dashboard</h1>

      <div className="flex flex-row gap-4 mt-4"></div>
    </main>
  );
};

export default Page;
