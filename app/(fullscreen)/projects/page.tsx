import ProjectList from "@/components/items/projectList";
import React from "react";

import axios from "axios";

const Page = async () => {
  const { data } = await axios.get("https://zxra-rest.vercel.app/project-list");
  return (
    <div className="isolate text-sm lg:text-base overflow-x-hidden overflow-y-scroll">
      <ProjectList project={data.project} />
    </div>
  );
};

export default Page;
