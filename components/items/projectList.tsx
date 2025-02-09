"use server";

import React from "react";
import { Card } from "./card";
import Link from "next/link";

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

const ProjectList = async ({
  project,
  filtered = false,
  isFull = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
  filtered?: boolean;
  isFull?: boolean;
}) => {
  let filteredProject = project.sort(
    (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name)
  );

  if (filtered) filteredProject = filteredProject.slice(0, 8);

  return (
    <div className={`block mt-2`}>
      <ul
        className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2.5 px-2`}
      >
        {filteredProject.map((e: Projects, i: React.Key | null | undefined) => {
          return (
            <li className="aspect-square" key={i}>
              <Card data={e}></Card>
            </li>
          );
        })}
        {isFull && (
          <li className="aspect-square" key={filteredProject.length}>
            <Link
              href="/projects"
              className="w-full aspect-square bg-slate-700 max-h-full overflow-visible rounded-lg relative flex justify-center items-center hover:scale-110 transition-all duration-150 ease-in-out p-3"
            >
              <span className="w-full text-center text-sm md:text-base font-sans font-semibold text-cyan-400">
                Lihat semua proyek yang ada
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectList;
