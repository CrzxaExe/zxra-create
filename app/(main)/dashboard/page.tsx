import { auth } from "@/auth";
import { FindEmail } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  const user = await FindEmail(session?.user?.email || "");

  console.log(user);

  if (user?.error) redirect("/no-auth");

  return <div className="mt-[6rem] max-w-screen-lg px-3 mx-auto"></div>;
};

export default Page;
