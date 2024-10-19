"use client";

import React from "react";
import Image from "next/image";

import LogoFull from "@/app/asset/Zxra-full.png";
import { TopbarButton } from "./button";

import { Login } from "@mui/icons-material";
import { Newspaper } from "@mui/icons-material";
import { Box, Drawer } from "@mui/material";

const Topbar = ({
  full,
  home,
  isLogin,
}: {
  full: boolean;
  home: boolean;
  isLogin: boolean;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="fixed top-0 w-full bg-primary-300/[0.2] hover:bg-primary-300/[0.4] px-7 2xl:px-[4rem] py-4 shadow transition-all duration-200 ease-out flex flex-row justify-between">
        <div
          className="flex flex-row items-center"
          onClick={() => setOpen(true)}
        >
          <Image alt="logo-full" src={LogoFull} width={40} height={4} />
          <span className={`${home ? "invisible" : ""} text-2xl font-valorant`}>
            Zxra
          </span>
        </div>

        <div className="flex items-center">
          <ul className="flex flex-row gap-2">
            {!isLogin && (
              <li>
                <TopbarButton href="/login" text="Masuk">
                  <Login />
                </TopbarButton>
              </li>
            )}
            {full && (
              <li>
                <TopbarButton href="/dashboard" text="Beranda">
                  <Newspaper />
                </TopbarButton>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation">
          <div className="bg-primary-800 w-full min-h-screen"></div>
        </Box>
      </Drawer>
    </>
  );
};

export default Topbar;
