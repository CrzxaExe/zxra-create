import ProjectList from "@/components/items/projectList";
import React from "react";

import axios from "axios";
import { metadata } from "@/app/layout";

const Page = async () => {
  metadata.title = "Projects";

  const { data } = await axios.get("https://zxra-rest.vercel.app/project-list");
  return (
    <div className="isolate text-sm lg:text-base">
      <ProjectList project={data.project} />
    </div>
  );
};

export default Page;
