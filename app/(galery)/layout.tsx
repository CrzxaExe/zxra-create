import React from "react";
import { metadata } from "../layout";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  metadata.title = "Gallery";

  return (
    <div className="w-full min-h-screen bg-white text-black lg:overflow-y-hidden lg:max-h-screen">
      <nav className="w-full py-3 bg-gray-200 flex flex-row items-center px-5 sticky top-0 z-40">
        <h1 className="text-xl lg:text-2xl font-bold font-sans text-gray-600 flex flex-row gap-1 items-center">
          <Link href={"/"}>
            <ArrowBack className="-mt-1" />
          </Link>
          Home
        </h1>
      </nav>

      <div className="grid grid-row-1 lg:grid-cols-5 gap-2 pt-2 lg:pt-0 text-sm lg:text-base">
        {children}
      </div>
    </div>
  );
};

export default Layout;
