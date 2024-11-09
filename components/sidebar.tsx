import { Drawer, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

import LogoFull from "@/app/asset/Zxra-full.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Sidebar = ({ open, func }: { open: boolean; func: any }) => {
  return (
    <Drawer open={open} onClose={() => func(false)}>
      <Box sx={{ width: 250 }} role="presentation">
        <div className="w-full min-h-screen bg-primary-950"></div>
      </Box>
    </Drawer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SidebarButton = ({ func }: { func: any }) => {
  return (
    <button onClick={() => func(true)}>
      <Image alt="logo-full" src={LogoFull} width={35} height={4} />
    </button>
  );
};
