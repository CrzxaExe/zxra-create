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
    <div>
      <div className="text-sm"></div>
    </div>
  );
};

export default Page;
