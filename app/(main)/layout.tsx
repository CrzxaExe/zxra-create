import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full px-7 relative">{children}</div>;
};

export default Layout;
