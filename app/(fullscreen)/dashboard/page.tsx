"use server";

import React from "react";

import { metadata } from "@/app/layout";
import { DashboardWidget } from "@/components/components";
import axios from "axios";
import ProjectList from "@/components/items/projectList";

const Page = async () => {
  metadata.title = "Beranda";

  const { data } = await axios.get("https://zxra-rest.vercel.app/project-list");

  return (
    <div className="isolate text-sm lg:text-base overflow-x-hidden overflow-y-scroll capitalize">
      <DashboardWidget />

      <div className="overflow-visible mt-5">
        <h1 className="text-2xl lg:text-3xl font-geistSans text-teal-400 font-bold">
          Proyek
        </h1>
        <ProjectList project={data.project} filtered isFull />
      </div>
    </div>
  );
};

export default Page;
