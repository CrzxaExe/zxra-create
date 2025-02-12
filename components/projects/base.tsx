import Image from "next/image";
import React from "react";

import { GitHub } from "@mui/icons-material";
import { DivWithHeader, SubSectionWithHeader } from "../components";

interface Link {
  github?: string;
  download?: string;
  discord?: string;
  whatsapp?: string;
  visit?: string;
}

interface Project {
  name: string;
  app: string;
  version: string;
  des: string;
  longDes: string;
  lang: Array<string>;
  framework: Array<string>;
  link: Link;
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
            className="rounded-lg aspect-square w-[6rem] lg:w-[8rem]"
          />
        ) : (
          <div className="rounded-lg aspect-square w-[6rem] lg:w-[8rem] bg-slate-800"></div>
        )}
        <div className="flex flex-col">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl md:mb-1">
            {project.name}
          </h1>
          <span className="font-sans text-xs md:text-sm lg:text-base text-slate-200">
            {project.app}
            {project.framework.length > 0 &&
              ` - ${project.framework
                .map((e) =>
                  e
                    .split(/ |-/)
                    .map((r) => r.charAt(0).toUpperCase() + r.slice(1))
                    .join(" ")
                )
                .join(", ")}`}
          </span>
          <h3 className="font-mono text-xs md:text-sm lg:text-base text-slate-400 lg:-mt-2">
            {project.version}
          </h3>

          <span
            className={`${
              PROJECT_STATUS[project.status].color
            } -mt-1 md:mt-1 lg:mt-4 w-full`}
          >
            {PROJECT_STATUS[project.status].text}
          </span>
        </div>
      </div>
      <div className="w-full lg:w-[15%] flex flex-row lg:flex-col gap-2">
        {project.link.github && (
          <a
            href={project.link.github}
            target="blank"
            className="flex justify-center items-center flex-row gap-2 w-full bg-black rounded-lg py-2 active:bg-gray-800 group transition-all duration-300 ease-in-out"
          >
            <GitHub />
            <span className="max-w-[0%] lg:group-hover:max-w-[100%] inline opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out font-semibold">
              Github
            </span>
          </a>
        )}
        {project.link.discord && (
          <a
            href={project.link.discord}
            target="blank"
            className="flex justify-center items-center flex-row gap-2 w-full bg-[#5865F2] rounded-lg py-2 active:bg-white group transition-all duration-300 ease-in-out"
          >
            <i className="bx bxl-discord-alt text-2xl text-center"></i>
            <span className="max-w-[0%] lg:group-hover:max-w-[100%] inline opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out font-semibold">
              Discord
            </span>
          </a>
        )}
        {project.link.whatsapp && (
          <a
            href={project.link.whatsapp}
            target="blank"
            className="flex justify-center items-center flex-row gap-2 w-full bg-[#25d366] rounded-lg py-2 active:bg-[#075e54] group transition-all duration-300 ease-in-out"
          >
            <i className="bx bxl-whatsapp text-2xl text-center"></i>
            <span className="max-w-[0%] lg:group-hover:max-w-[100%] inline opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out font-semibold">
              Whatsapp
            </span>
          </a>
        )}
        {project.link.download && (
          <a
            href={project.link.download}
            target="blank"
            className="flex justify-center items-center flex-row gap-2 w-full border-[#505050] hover:bg-[#505050] text-[#505050] hover:text-[#242424] border-[1px] rounded-lg py-2 active:bg-[#707070] group transition-all duration-300 ease-in-out"
          >
            <span className="inline transition-all duration-300 ease-in-out font-semibold">
              Download
            </span>
          </a>
        )}
        {project.link.visit && (
          <a
            href={project.link.visit}
            target="blank"
            className="flex justify-center items-center flex-row gap-2 w-full border-[#464646] text-[#464646] hover:bg-[#464646] hover:text-white border-[1px] rounded-lg py-2 active:bg-[#707070] group transition-all duration-300 ease-in-out"
          >
            <span className="inline transition-all duration-300 ease-in-out font-semibold">
              Visit
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

const BzbDisplay = async ({ project }: { project: Project }) => {
  const thanks = [
    "FySena & Member Vanguard SMP",
    "Garmadon't (FB)",
    "Haris Adhi Saputra njir (FB)",
    "Nugraha tai (FB)",
    "Rahmad",
    "Omen (FB)",
  ];

  return (
    <>
      <section id="overview" className="mt-6">
        <div className="bg-[#202020] rounded p-3">
          <h1 className="mb-1 text-lg md:text-xl lg:text-2xl font-bold text-teal-400">
            Overview
          </h1>
          <p className="text-sm md:text-base whitespace-pre-line w-full text-gray-400">
            {project.longDes}
          </p>

          <span className="mt-2 block text-sm lg:text-lg">
            Programming Languange: {project.lang.join(", ")}
          </span>
        </div>

        <div className="rounded-lg overflow-x-scroll overflow-y-hidden flex flex-row justify-start max-w-full max-h-[20rem] lg:max-h-[19rem] bg-[#202020] mt-4">
          <Image
            src="https://raw.githubusercontent.com/CrzxaExe/quick-bzb/refs/heads/master/img/render.png"
            alt="Better Zxra Bedrock"
            width={1920}
            height={1080}
            className="object-cover w-[47vw] lg:w-[23vw] aspect-video"
          />
        </div>
      </section>

      <section id="new" className="mt-5">
        <h1 className="text-teal-400 text-lg md:text-xl lg:text-2xl font-bold">
          What&apos;s New on v{project.version}?
        </h1>
      </section>

      <SubSectionWithHeader id="features" className="mt-5" name="Features">
        <div className="mt-3 bg-[#202020] px-4 w-full py-3">
          <DivWithHeader id="language" name="Language">
            <p>
              For now, available language for this addon are 2 only.{" "}
              <span className="text-sky-400">Indonesia</span> and{" "}
              <span className="text-sky-400">English</span>
            </p>
          </DivWithHeader>
        </div>
      </SubSectionWithHeader>

      <SubSectionWithHeader id="about" className="mt-9" name="About">
        <p className="text-sm lg:text-base whitespace-pre-line w-full block">
          This addon is still in development, we will update lively for fixing
          bugs and increasing this performance. We also adding 3rd party and own
          module to use this addon function in your own world.{" "}
          <a href="/projects/zxralib" className="text-cyan-500 hover:underline">
            Here
          </a>{" "}
          you can download the module.
          <br />
          <br />
          Thanks for using this addon, and special thanks for:
          <br />
        </p>
        <ul className="list-disc ml-5">
          {thanks.map((e, i) => (
            <li key={i} className="text-sm lg:text-base">
              {e}
            </li>
          ))}
        </ul>
        <p className="text-sm lg:text-base whitespace-pre-line w-full block">
          <br />
          For helping us and contributing for this addon development and
          testing.
          <br /> We will always hear your feedback and suggestion for this
          addon. Thanks -Zrxa
        </p>
      </SubSectionWithHeader>
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

const ProjectTemplate = ({ project }: { project: Project }) => {
  const customPageName = ["Better Zxra Bedrock"];

  return (
    <div className="pl-2 lg:pl-3 mt-5">
      {customPageName.includes(project.name) ? (
        <CustomProjectTemplate project={project}></CustomProjectTemplate>
      ) : (
        <>
          <ProjectBase project={project} />
          <section id="overview" className="bg-[#202020] p-3 mt-6">
            <h1 className="mb-1 text-lg md:text-xl lg:text-2xl font-bold text-teal-400">
              Overview
            </h1>

            <p className="mt-3 text-sm md:text-base whitespace-pre-line w-full text-gray-400">
              {project.longDes}
            </p>

            <span className="mt-4 block text-sm lg:text-lg">
              Programming Languange: {project.lang.join(", ")}
            </span>
          </section>
        </>
      )}
    </div>
  );
};

export { ProjectBase, ProjectTemplate };
