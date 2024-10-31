import Image from "next/image";
import React from "react";

import Cz from "@/app/asset/dashboard/cz.jpg";

const News = () => {
  return (
    <div className="w-full overflow-hidden mt-3 md:-mt-2 lg:-mt-[5.4rem] mb-7 relative flex md:flex-row transition-all duration-300 ease-in-out">
      <Image
        src={Cz}
        alt="News"
        width={400}
        height={300}
        className="w-full md:max-w-[60%] transition-all duration-300 ease-in-out rounded-lg md:rounded-r-none relative"
      />
      <div className="absolute md:relative -left-4 top-0 md:px-4 w-full h-full md:ml-4 md:bg-[#262c3a]/[0.7] md:backdrop-blur-sm md:h-[32vw] md:max-h-[250px] lg:max-h-[200px]">
        <h1 className="inline ml-2 md:ml-0 px-3 py-4 font-paprika text-base md:text-lg xl:text-xl font-bold">
          <a href="/news" target="blank" className="text-teal-300 md:hidden">
            Judul
          </a>
          <span className="hidden md:block">Berita</span>
        </h1>

        <h2 className="text-base lg:text-lg hidden md:block mt-1">
          Judul berita
        </h2>
        <p className="hidden md:block bg-slate-400/[0.2] md:bg-slate-400/[0] text-xs lg:text-sm absolute w-full md:relative bottom-0 rounded-b-lg py-1 overflow-hidden md:whitespace-normal md:mt-3 px-3 pb-12 md:pb-6 lg:pb-[5rem] pr-4 md:pr-0 md:px-0 h-auto max-h-[44px] md:max-h-[100vh] text-justify md:mb-[3.6rem]">
          Tempor amet pariatur esse fugiat amet velit adipisicing ipsum eiusmod.
          Anim amet eiusmod sit tempor anim veniam magna officia. Et officia
          reprehenderit ex anim qui reprehenderit.
        </p>

        <a
          href="/news"
          className="text-teal-400 hover:text-slate-500 hidden md:block absolute -bottom-2 lg:-bottom-10"
          target="blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default News;
