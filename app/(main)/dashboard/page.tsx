"use server";

import { auth } from "@/auth";
import { FindEmail } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

import AppList from "@/components/items/appList";
import Img from "@/components/items/img";
import News from "@/components/items/news";
import { metadata } from "@/app/layout";
import ProjectList from "@/components/items/projectList";
import axios from "axios";
import Clock from "@/components/clock";

const Page = async () => {
  metadata.title = "Beranda";

  const session = await auth();
  const user = await FindEmail(session?.user?.email || "");

  if (user?.error && session) redirect("/no-auth");

  const project = (await axios.get(
    "https://zxra-rest.vercel.app/project-list"
  )) || {
    data: {
      project: [],
    },
  };

  const news = (await axios.get("https://zxra-rest.vercel.app/news")) || {
    data: { result: [] },
  };

  return (
    <div className="lg:mt-[6rem] max-w-screen-xl mx-auto">
      <Img
        src="https://raw.githubusercontent.com/CrzxaExe/CzWeb/main/img/heads.png"
        alt="head"
        className="w-full lg:rounded-lg max-h-[230px] lg:max-h-[340px] object-cover"
      />

      <News news={news.data.result[0]} />

      <section className="my-4">
        <Clock />
      </section>

      <section className="px-7 mt-5 pb-5">
        <h1 className="text-xl lg:text-2xl font-bold font-paprika">Aplikasi</h1>
        <span className="text-xs lg:text-sm font-mono mb-2 block text-slate-400">
          Daftar aplikasi yang tersedia saat ini:
        </span>

        <AppList />

        <h1 className="text-xl lg:text-2xl font-bold font-paprika mt-8">
          Proyek
        </h1>
        <span className="text-xs lg:text-sm font-mono mb-2 block text-slate-400">
          Semua hal yang telah kami buat:
        </span>

        <ProjectList project={project} />
      </section>
    </div>
  );
};

export default Page;
