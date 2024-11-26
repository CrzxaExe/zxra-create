import Image from "next/image";
import React from "react";

import logo from "@/app/asset/Zxra.png";
import bgEffect from "@/app/asset/bg_effect.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        alt="effect"
        src={bgEffect}
        className="w-full -mb-[14rem] md:-mb-[17rem] lg:-mb-[19rem] xl:-mb-[21rem] 2xl:-mb-[31rem] object-contain opacity-50"
      />
      <div className="min-h-screen w-full flex items-center justify-center flex-col relative px-6">
        <div className="px-3 py-5 w-full flex items-center justify-center flex-col lg:flex-row lg:-ml-[3rem] mb-[2.6rem] lg:-mb-[2.8rem] -mt-12 gap-2">
          <Image
            alt="logo"
            src={logo}
            width={300}
            height={300}
            className="-mb-[4.9rem] lg:-mb-[2.3rem] aspect-square w-[20rem] lg:w-[18rem] 2xl:w-[15rem] -mr-[0.5rem] lg:mr-[0.4rem] transition-all duration-300 ease-in-out"
          />
          <h1 className="opacity-0 lg:opacity-100 font-valorant text-3xl lg:text-4xl 2xl:text-5xl -ml-[2rem] lg:-ml-[3.4rem] 2xl:-ml-[4.4rem] -mt-[8rem] lg:mt-[3rem] transition-all duration-300 ease-in-out">
            Zxra
          </h1>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
