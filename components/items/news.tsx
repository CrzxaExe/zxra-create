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
      <div className="absolute md:relative -left-4 top-0 px-4 w-full h-full md:ml-4 md:h- md:bg-slate-900/[0.7] md:backdrop-blur-sm">
        <h1 className="inline ml-2 md:ml-0 px-2 py-1 font-paprika text-lg md:text-xl xl:text-2xl border-0 border-b-[1px] md:border-b-0 sm:rounded-tl-sm font-bold">
          <a href="/news" target="blank" className="text-teal-300 md:hidden">
            Judul
          </a>
          <span className="hidden md:block">Berita</span>
        </h1>

        <h2 className="text-lg lg:text-xl hidden md:block mt-3">
          Judul berita
        </h2>
        <p className="bg-slate-400/[0.3] md:bg-slate-400/[0] text-sm lg:text-base absolute w-full md:relative bottom-0 rounded-b-lg py-1 sm:truncate md:whitespace-normal md:overflow-visible md:mt-3 px-3 pr-4 md:pr-0 md:px-0 max-h-[38px] lg:max-h-[100%]">
          Tempor amet pariatur esse fugiat amet velit adipisicing ipsum eiusmod.
          Anim amet eiusmod sit tempor anim veniam magna officia. Et officia
          reprehenderit ex anim qui reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default News;
