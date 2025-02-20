import Image from "next/image";
import React from "react";

import Cz from "@/app/asset/dashboard/cz.jpg";
import { Link } from "@mui/icons-material";

interface NewsData {
  title: string;
  description: string;
  href: string;
}

const News = ({ news }: { news: NewsData }) => {
  const { title, description, href } = news;

  return (
    <div className="w-full overflow-hidden -mt-5 px-7 md:-mt-2 lg:-mt-[5.4rem] mb-7 relative flex md:flex-row transition-all duration-300 ease-in-out">
      <Image
        src={Cz}
        alt="News"
        width={400}
        height={300}
        className="w-full md:max-w-[60%] transition-all duration-300 ease-in-out rounded-xl relative shadow-sm"
      />
      <div className="relative hidden md:block top-1 md:top-0 w-full h-full md:ml-4 md:bg-slate-700 shadow-sm rounded-xl md:backdrop-blur-xs md:h-[32vw] md:max-h-[310px] lg:max-h-[350px] xl:max-h-[340px]">
        <h1 className="inline ml-8 md:ml-3 px-7 font-paprika text-base md:text-lg xl:text-xl">
          <a href="/news" target="blank" className="text-teal-200 md:hidden">
            {title}
          </a>
          <span className="hidden md:flex font-bold text-lg px-4 flex-row items-center gap-3">
            <i className="bx bx-news text-xl">Berita</i>
          </span>
        </h1>

        <h2 className="text-base lg:text-lg hidden md:block -mt-6 px-4">
          {title || "title"}
        </h2>
        <p className="hidden md:block bg-slate-400/[0.2] md:bg-slate-400/[0] text-xs lg:text-sm w-full relative rounded-b-lg py-2 overflow-hidden md:whitespace-normal px-4 h-auto max-h-[44px] md:max-h-[100vh] text-justify md:mb-[3.6rem]">
          {description || "Description"}
        </p>

        <div className="hidden md:block absolute bottom-0 w-full bg-slate-800/70 px-4 py-2">
          <a
            href={href || "/news"}
            className="text-teal-400 hover:text-slate-500"
            target="blank"
          >
            <Link />
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
