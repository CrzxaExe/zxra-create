import React from "react";
import { CenterHr } from "./hr";

const sosmed = [
  {
    name: "Github",
    link: "https://github.com/CrzxaExe",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/crzx.zxra/",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/6283899161015",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-950 w-full pt-[5rem] pb-[5rem] text-slate-400 text-xl shadow">
      <div className="px-[6vw] md:px-[3.8vw] lg:px-[2.5vw] xl:px-[3.3vw] 2xl:px-[17.5%]">
        <h1 className="font-semibold text-2xl text-slate-400">Kontak</h1>
        <ul className="flex flex-row lg:flex-col mt-[2.1vh] gap-[0.4rem]">
          {sosmed
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((a, i) => {
              return (
                <li
                  key={i}
                  className="text-sm lg:text-base text-slate-500 hover:text-teal-400 font-semibold font-paprika"
                >
                  <a href={a.link} target="blank" className="">
                    {a.name.charAt(0).toUpperCase() + a.name.slice(1)}
                  </a>
                </li>
              );
            })}
        </ul>
        <CenterHr text="@2024 - Zxra" className="w-full text-sm" />
      </div>
    </footer>
  );
};

export default Footer;
