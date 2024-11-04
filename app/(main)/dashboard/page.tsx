import { auth } from "@/auth";
import { FindEmail } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

import AppList from "@/components/items/appList";
import Img from "@/components/items/img";
import News from "@/components/items/news";
import { metadata } from "@/app/layout";
import { CenterHr } from "@/components/hr";
import ProjectList from "@/components/items/projectList";

const Page = async () => {
  metadata.title = "Beranda";

  const session = await auth();
  const user = await FindEmail(session?.user?.email || "");

  if (user?.error) redirect("/no-auth");

  return (
    <div className="lg:mt-[6rem] max-w-screen-lg mx-auto pb-7">
      <Img
        src="https://raw.githubusercontent.com/CrzxaExe/CzWeb/main/img/heads.png"
        alt="head"
        className="w-full lg:rounded-lg max-h-[230px] lg:max-h-[320px] object-cover"
      />

      <News />
      <section className="px-7 mt-5 pb-5">
        <CenterHr text="Menu" />

        <h1 className="text-xl lg:text-2xl font-bold font-paprika mb-2">
          Aplikasi
        </h1>

        <AppList />

        <h1 className="text-xl lg:text-2xl font-bold font-paprika mb-2 mt-8">
          Proyek
        </h1>

        <ProjectList />
      </section>
    </div>
  );
};

export default Page;
