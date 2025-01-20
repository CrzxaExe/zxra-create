"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumb, SearchBar } from "./components";

const TopbarFull = () => {
  const path = usePathname();
  return (
    <div className="flex flex-row justify-between items-center w-full bg-[#333333] px-6 py-3 lg:py-4 text-white shadow-md">
      <div className="text-lg lg:text-2xl font-semibold flex flex-row gap-2">
        <Breadcrumb link={path} />
      </div>
      <div>
        <SearchBar
          colorNormal="bg-gray-600/10"
          colorHover="bg-gray-600/40"
          colorFocus="bg-gray-600/55"
          isLimited
        />
      </div>
    </div>
  );
};

export default TopbarFull;
