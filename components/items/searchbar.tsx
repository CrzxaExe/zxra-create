import React from "react";
import { SearchOutlined } from "@mui/icons-material";

const Searchbar = () => {
  return (
    <div className="hidden md:flex items-center max-w-screen-md lg:min-w-screen-lg lg:max-w-screen-lg h-[32px] bg-slate-500/35 backdrop-blur-lg rounded-lg px-2 hover:bg-slate-500/50 focus:bg-stone-500/70 transition-all duration-300 ease-in-out">
      <button className="text-[24px] aspect-square pb-[8px]">
        <SearchOutlined />
      </button>
      <input
        placeholder="Cari apa?"
        type="search"
        className="px-1 pr-3 outline-none max-w-screen-md h-[29px] bg-transparent py-[1.5px] overflow-y-hidden overflow-x-clip resize-none"
      ></input>
    </div>
  );
};

export default Searchbar;
