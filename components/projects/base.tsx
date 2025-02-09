import Image from "next/image";
import React from "react";

import { GitHub } from "@mui/icons-material";

interface Project {
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
}

const PROJECT_STATUS = [
  { text: "Outdated", color: "text-red-500" },
  { text: "In Development", color: "text-yellow-500" },
  { text: "Online", color: "text-green-500" },
];

const ProjectBase = async ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-0">
      <div className="flex flex-row items-start gap-2 w-full lg:w-[85%]">
        {project.img ? (
          <Image
            src={project.img}
            alt={project.name}
            width={200}
            height={200}
            className="rounded-lg aspect-square w-[6rem] md:w-[7rem] lg:w-[10rem]"
          />
        ) : (
          <div className="rounded-lg aspect-square w-[6rem] lg:w-[12rem] bg-slate-800"></div>
        )}
        <div className="flex flex-col">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2">
            {project.name}
          </h1>
          <span className="font-sans text-sm md:text-base lg:text-lg text-slate-200">
            {project.app}
          </span>
          <h3 className="font-mono text-xs md:text-sm lg:text-base text-slate-400 lg:-mt-1 mb-1">
            {project.version}
          </h3>

          <span
            className={`${
              PROJECT_STATUS[project.status].color
            } -mt-1 md:mt-1 lg:mt-9 w-full`}
          >
            {PROJECT_STATUS[project.status].text}
          </span>
        </div>
      </div>
      <div className="w-full lg:w-[15%]">
        <a
          href="#"
          target="blank"
          className="flex justify-center items-center flex-row gap-2 w-full bg-black rounded-lg py-2 active:bg-gray-800"
        >
          <GitHub />
          Repo
        </a>
      </div>
    </div>
  );
};

const BzbDisplay = async ({ project }: { project: Project }) => {
  return (
    <>
      <div className="mt-6">
        <div className="rounded-lg overflow-x-scroll overflow-y-hidden flex flex-row justify-start max-w-full max-h-[19rem] bg-[#202020]">
          <Image
            src="https://raw.githubusercontent.com/CrzxaExe/quick-bzb/refs/heads/master/img/render.png"
            alt="Better Zxra Bedrock"
            width={1920}
            height={1080}
            className="object-cover w-[32vw] aspect-video"
          />
        </div>
        <p className="mt-3 text-sm md:text-base lg:text-lg indent-3 lg:indent-5 whitespace-normal">
          {project.longDes}
        </p>

        <span className="mt-5 block">
          Bahasa Pemrograman: {project.lang.join(", ")}
        </span>
      </div>
    </>
  );
};

const CustomProjectTemplate = async ({ project }: { project: Project }) => {
  return (
    <>
      <ProjectBase project={project} />
      {
        {
          "Better Zxra Bedrock": <BzbDisplay project={project} />,
        }[project.name]
      }
    </>
  );
};

const ProjectTemplate = async ({ project }: { project: Project }) => {
  const customPageName = ["Better Zxra Bedrock"];

  return (
    <div className="px-2 lg:px-3 mt-5">
      {customPageName.includes(project.name) ? (
        <CustomProjectTemplate project={project}></CustomProjectTemplate>
      ) : (
        <>
          <ProjectBase project={project} />
          <p className="mt-3 text-sm md:text-base lg:text-lg indent-3 lg:indent-5">
            {project.longDes}
          </p>
        </>
      )}
    </div>
  );
};

export { ProjectBase, ProjectTemplate };
