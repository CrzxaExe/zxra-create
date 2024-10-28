"use client";

import React, { useState } from "react";

import TopbarOther from "./topbarOther";
import { Sidebar, SidebarButton } from "./sidebar";

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

  return (
    <>
      <div className="fixed top-0 w-full bg-primary-300/[0.3] hover:bg-primary-300/[0.5] px-7 2xl:px-[4rem] py-4 shadow transition-all duration-200 ease-out flex flex-row justify-between z-[100]">
        <div className="flex flex-row items-center">
          <SidebarButton func={setOpen} />
          <span className={`${home ? "hidden" : ""} text-2xl font-valorant`}>
            Zxra
          </span>
        </div>
        <TopbarOther full={full} session={session} />
      </div>

      <Sidebar open={open} func={setOpen} />
    </>
  );
};

export default Topbar;
