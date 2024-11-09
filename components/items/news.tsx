import Image from "next/image";
import React from "react";

import Cz from "@/app/asset/dashboard/cz.jpg";

const { title, des, href } = {
  title: "{judul}",
  des: "{des}",
  href: "/news",
};

const News = () => {
  return (
    <div className="w-full overflow-hidden -mt-5 md:pb-5 px-7 md:-mt-2 lg:-mt-[5.4rem] mb-7 relative flex md:flex-row transition-all duration-300 ease-in-out">
      <Image
        src={Cz}
        alt="News"
        width={400}
        height={300}
        className="w-full md:max-w-[60%] transition-all duration-300 ease-in-out rounded-lg md:rounded-r-none relative"
      />
      <div className="relative -left-2 top-1 md:-left-4 md:top-0 md:px-4 w-full h-full md:ml-4 md:bg-[#262c3a]/[0.7] md:backdrop-blur-sm md:h-[32vw] md:max-h-[310px] lg:max-h-[350px] xl:max-h-[340px]">
        <h1 className="inline ml-8 md:ml-3 px-3 py-8 font-paprika text-base md:text-lg xl:text-xl">
          <a href="/news" target="blank" className="text-teal-200 md:hidden">
            {title}
          </a>
          <span className="hidden md:block">Berita</span>
        </h1>

        <h2 className="text-base lg:text-lg hidden md:block mt-1">{title}</h2>
        <p className="hidden md:block bg-slate-400/[0.2] md:bg-slate-400/[0] text-xs lg:text-sm w-full relative bottom-0 rounded-b-lg py-1 overflow-hidden md:whitespace-normal md:mt-3 px-3 pb-12 md:pb-6 lg:pb-[5rem] pr-4 md:pr-0 md:px-0 h-auto max-h-[44px] md:max-h-[100vh] text-justify md:mb-[3.6rem]">
          {des}
        </p>

        <a
          href={href}
          className="text-teal-400 hover:text-slate-500 hidden md:block -bottom-2 lg:-bottom-10"
          target="blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default News;
