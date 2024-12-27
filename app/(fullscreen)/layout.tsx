import React from "react";
import Image from "next/image";

import bgEffect from "@/app/asset/bg_effect.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <Image
        alt="effect"
        src={bgEffect}
        className="w-full -mb-[14rem] md:-mb-[17rem] lg:-mb-[19rem] xl:-mb-[21rem] 2xl:-mb-[31rem] object-contain opacity-50"
      />
      {children}
    </div>
  );
};

export default Layout;
