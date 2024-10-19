import React from "react";
import { CenterHr } from "./hr";

const Footer = () => {
  return (
    <footer className="bg-primary-950 w-full pt-[3rem] pb-[5rem] text-slate-400 text-xl shadow">
      <div className="px-[6%] lg:px-[8.4%] xl:px-[10%] 2xl:px-[17.5%]">
        <h1>test</h1>
        <CenterHr text="@2024" className="w-full text-sm" />
      </div>
    </footer>
  );
};

export default Footer;
