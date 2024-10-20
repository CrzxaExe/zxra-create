import Image from "next/image";
import React from "react";

import logo from "@/app/asset/Zxra.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full px-7">{children}</div>;
};

export default Layout;
