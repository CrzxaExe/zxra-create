"use client";

import React, { useState } from "react";

import TopbarOther from "./topbarOther";
import { Sidebar, SidebarButton } from "./sidebar";
import SearchBar from "./items/searchbar";
import { usePathname } from "next/navigation";

const Topbar = ({
  full,
  home,
  session,
}: {
  full: boolean;
  home: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session?: any;
}) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const noTopbarPath = ["dashboard", "about", "search"];

  return (
    <>
      {!noTopbarPath.includes(path.slice(1).split("/")[0]) ? (
        <div className="fixed top-0 w-full bg-base-ascent/[0.23] hover:bg-base-ascent/[0.48] px-7 2xl:px-[8rem] py-4 shadow transition-all duration-200 ease-out flex flex-row justify-between z-[100] border-0 border-b-[1px] border-black backdrop-blur-sm">
          <div className="w-full mx-auto max-w-screen-xl flex flex-row items-center justify-between lg:px-4">
            <div className="flex flex-row items-center gap-4">
              <SidebarButton func={setOpen} />
              <span
                className={`${home ? "hidden" : ""} text-2xl font-valorant`}
              >
                Zxra
              </span>
              <SearchBar />
            </div>
            <TopbarOther full={full} session={session} />
          </div>
        </div>
      ) : (
        ""
      )}

      <Sidebar open={open} func={setOpen} />
    </>
  );
};

export default Topbar;
