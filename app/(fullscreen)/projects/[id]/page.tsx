"use server";

import React from "react";
import axios from "axios";
import { ProjectTemplate } from "@/components/projects/base";
import { metadata } from "@/app/layout";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { data } = await axios.get(process.env.API_URL + "/project-list");
  const weapon = await axios.get(process.env.API_URL + "/bzbweapon");

  metadata.title = "Project Item";

  const id = (await params).id;

  const project = data.project.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => e.name.split(" ").join("-").toLowerCase() === id
  );

  return (
    <div className="max-h-screen overflow-x-hidden overflow-y-scroll pb-[6rem] pr-3 scroll-px-0">
      <ProjectTemplate project={project} weapon={weapon} />
    </div>
  );
};

export default Page;
