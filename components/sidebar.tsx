import { Drawer, Box } from "@mui/material";
import React from "react";

// import LogoFull from "@/app/asset/Zxra-full.png";
import {
  Newspaper,
  HomeRounded,
  PeopleOutline,
  ExploreRounded,
} from "@mui/icons-material";
import Link from "next/link";

export const Sidebar = ({
  open,
  func,
  size = 240,
}: {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: any;
  size?: number;
}) => {
  return (
    <Drawer open={open} onClose={() => func(false)}>
      <Box sx={{ width: size }} role="presentation">
        <div className="w-full min-h-screen bg-base-upfloor">
          <ul className="py-3">
            <li className="w-full rounded-r-lg text-base-upascent text-base hover:bg-base-upascent transition-all duration-300 ease-in-out hover:pl-4 hover:text-base-upfloor">
              <Link
                href="/"
                className="flex flex-row gap-4 items-center py-3 px-4"
              >
                <HomeRounded />
                <span className="font-bold">Home</span>
              </Link>
            </li>
            <li className="w-full rounded-r-lg text-base-upascent text-base hover:bg-base-upascent transition-all duration-300 ease-in-out hover:pl-4 hover:text-base-upfloor">
              <Link
                href="/dashboard"
                className="flex flex-row gap-4 items-center py-3 px-4"
              >
                <Newspaper />
                <span className="font-bold">Dashboard</span>
              </Link>
            </li>
            <li className="w-full rounded-r-lg text-base-upascent text-base hover:bg-base-upascent transition-all duration-300 ease-in-out hover:pl-4 hover:text-base-upfloor">
              <Link
                href="/about"
                className="flex flex-row gap-4 items-center py-3 px-4"
              >
                <PeopleOutline />
                <span className="font-bold">About</span>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SidebarButton = ({ func }: { func: any }) => {
  return (
    <button onClick={() => func(true)}>
      <ExploreRounded className="text-3xl hover:rotate-45 transition-all duration-300 ease-in-out" />
      {/* <Image alt="logo-full" src={LogoFull} width={40} height={9} /> */}
    </button>
  );
};
