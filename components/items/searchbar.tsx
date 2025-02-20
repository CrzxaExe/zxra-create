import React from "react";
import { SearchOutlined } from "@mui/icons-material";

const Searchbar = ({
  color = "bg-slate-500/35",
  hover = "bg-stone-500/50",
  focus = "bg-stone-500/70",
}: {
  color?: string;
  hover?: string;
  focus?: string;
}) => {
  return (
    <div
      className={`hidden md:flex items-center max-w-(--breakpoint-md) lg:min-w-screen-lg lg:max-w-(--breakpoint-lg) h-[32px] ${color} backdrop-blur-lg rounded-lg px-2 ${
        "hover:" + hover
      } ${"focus:" + focus} transition-all duration-300 ease-in-out`}
    >
      <button className="text-[1.5rem] lg:text-[0.7rem] aspect-square pb-[8px]">
        <SearchOutlined />
      </button>
      <input
        placeholder="Cari apa?"
        type="search"
        className="px-1 pr-3 outline-hidden max-w-(--breakpoint-md) h-[29px] bg-transparent py-[1.5px] overflow-y-hidden overflow-x-clip resize-none"
      ></input>
    </div>
  );
};

export default Searchbar;
