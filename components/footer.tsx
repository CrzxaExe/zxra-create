import React from "react";
import { CenterHr } from "./hr";

const sosmed = [
  {
    name: "Github",
    link: "https://github.com/Zxra-Create",
    icon: "bx bxl-github",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/crzx.zxra/",
    icon: "bx bxl-facebook-circle",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/6283899161015",
    icon: "bx bxl-whatsapp",
  },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`${className} bg-primary-950 w-full pt-[5rem] pb-[5rem] text-slate-400 text-base shadow`}
    >
      <div className="px-[6vw] md:px-[3.8vw] lg:px-[2.5vw] xl:px-[3.3vw] 2xl:px-[17.5%] mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="">
          <h1 className="font-semibold text-2xl text-slate-400">Zxra</h1>
          <span className="text-slate-500 text-base">
            Eazier Your Live With Us
          </span>
        </div>

        <div className="">
          <h1 className="font-semibold text-2xl text-slate-400">Kontak</h1>
          <ul className="inline-flex flex-row mt-[2.1vh] gap-[0.4rem]">
            {sosmed
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((a, i) => {
                return (
                  <li
                    key={i}
                    className="text-sm lg:text-base text-slate-500 hover:text-teal-400 font-semibold font-paprika"
                  >
                    <a href={a.link} target="blank" className="">
                      {a.icon ? (
                        <i className={`${a.icon} text-3xl`}></i>
                      ) : (
                        a.name.charAt(0).toUpperCase() + a.name.slice(1)
                      )}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-2xl text-slate-400">Page</h1>
        </div>
      </div>
      <CenterHr
        text="@2024 - Zxra"
        className="w-full text-sm px-8 lg:px-[3rem] mt-8"
      />
    </footer>
  );
};

export default Footer;
