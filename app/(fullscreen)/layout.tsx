import { RightHr } from "@/components/hr";
import React from "react";

import { Newspaper, PeopleOutline, FolderOpenSharp } from "@mui/icons-material";
import logo from "@/app/asset/Zxra-full.png";
import Link from "next/link";
import TopbarFull from "@/components/topbarFull";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen max-h-screen bg-[#242424] overflow-hidden">
      <main className="relative mx-auto flex flex-row">
        <div className="flex flex-col gap-3 bg-[#1d1d1d] w-[10%] sm:w-[7%] lg:w-[16%] min-h-screen px-3 py-6 text-slate-400 overflow-hidden">
          <Link href="/" className="flex flex-col w-full px-[6%]">
            <h1 className="text-xl lg:text-2xl font-valorant hidden lg:block transition-all duration-300 ease-in-out hover:scale-105 hover:pl-1">
              Create Zx
            </h1>
            <Image
              src={logo}
              alt="Logo"
              height={500}
              width={500}
              className="block lg:hidden aspect-square w-[105%] object-contain -mt-1 lg:mt-0"
            />
            <span className="text-xs lg:text-sm font-mono hidden lg:block">
              Apps
            </span>
          </Link>
          <RightHr text="< Route" className="text-sm" />

          <h1 className="mt-1 text-base px-3 hidden lg:block">Menu</h1>

          <ul className="self-center lg:self-auto pr-0.5 lg:pr-1 lg:-ml-[0.23rem]">
            <li className="w-full rounded-r-lg text-base transition-all duration-300 ease-in-out lg:hover:bg-base-upfloor lg:hover:scale-110 lg:hover:pl-1">
              <Link
                href="/dashboard"
                className="flex flex-row gap-4 items-center py-2 px-3"
              >
                <Newspaper />
                <span className="font-bold hidden lg:block">Dashboard</span>
              </Link>
            </li>
            <li className="w-full rounded-r-lg text-base transition-all duration-300 ease-in-out lg:hover:bg-base-upfloor lg:hover:scale-110 lg:hover:pl-1">
              <Link
                href="/projects"
                className="flex flex-row gap-4 items-center py-2 px-3"
              >
                <FolderOpenSharp />
                <span className="font-bold hidden lg:block">Projects</span>
              </Link>
            </li>
            <li className="w-full rounded-r-lg text-base transition-all duration-300 ease-in-out lg:hover:bg-base-upfloor lg:hover:scale-110 lg:hover:pl-1">
              <Link
                href="/about"
                className="flex flex-row gap-4 items-center py-2 px-3"
              >
                <PeopleOutline />
                <span className="font-bold hidden lg:block">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[90%] sm:w-[93%] lg:w-[84%] h-fill">
          <TopbarFull />
          <div className="overflow-y-hidden max-h-screen pt-1 px-[1rem] lg:px-[1.2rem]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
