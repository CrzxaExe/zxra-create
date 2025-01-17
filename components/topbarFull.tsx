"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Searchbar from "./items/searchbar";
import Breadcrumb from "./breadcrumbs";

const TopbarFull = () => {
  const path = usePathname();
  return (
    <div className="flex flex-row justify-between items-center w-full bg-[#333333] px-6 py-3 lg:py-4 text-white shadow-md">
      <div className="text-lg lg:text-2xl font-semibold flex flex-row gap-2">
        <Breadcrumb link={path} />
      </div>
      <div>
        <Searchbar
          color="bg-slate-400/35"
          hover="bg-slate-400/50"
          focus="bg-slate-400/75"
        />
      </div>
    </div>
  );
};

export default TopbarFull;
