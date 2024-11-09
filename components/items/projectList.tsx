"use server";

import React from "react";
import { Card } from "./card";

type Projects = {
  name: string;
  app: string;
  version: string;
  des: string;
  longDes: string;
  lang: Array<string>;
  framework: Array<string>;
  href: string;
  img: string;
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectList = async ({ project }: { project: any }) => {
  return (
    <div className={`block`}>
      <ul
        className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-2.5`}
      >
        {project.data.project
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )
          .map((e: Projects, i: React.Key | null | undefined) => {
            return (
              <li className="aspect-square" key={i}>
                <Card data={e}></Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProjectList;
