/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import Image from "next/image";

import LogoFull from "@/app/asset/Zxra-full.png";

import { Box, Drawer } from "@mui/material";
import TopbarOther from "./topbarOther";

const Topbar = ({ full, home }: { full: boolean; home: boolean }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} id="drawer">
        <Box sx={{ width: 240 }} role="presentation">
          <div className="bg-primary-800 w-full min-h-screen"></div>
        </Box>
      </Drawer>

      <div className="fixed top-0 w-full bg-primary-300/[0.3] hover:bg-primary-300/[0.5] px-7 2xl:px-[4rem] py-4 shadow transition-all duration-200 ease-out flex flex-row justify-between z-[100]">
        <div
          className="flex flex-row items-center z-[101] cursor-move"
          onClick={() => {
            console.log(open);
            setOpen(true);
          }}
        >
          <Image alt="logo-full" src={LogoFull} width={40} height={4} />
          <span className={`${home ? "invisible" : ""} text-2xl font-valorant`}>
            Zxra
          </span>
        </div>
        <TopbarOther full={full} />
      </div>
    </>
  );
};

export default Topbar;
