import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full relative">{children}</div>;
};

export default Layout;
