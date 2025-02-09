import React from "react";
import axios from "axios";
import { ProjectTemplate } from "@/components/projects/base";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { data } = await axios.get("https://zxra-rest.vercel.app/project-list");

  const id = (await params).id;
  return (
    <div>
      <ProjectTemplate
        project={data.project.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (e: any) => e.name.split(" ").join("-").toLowerCase() === id
        )}
      />
    </div>
  );
};

export default Page;
