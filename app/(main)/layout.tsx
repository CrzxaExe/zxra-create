import Footer from "@/components/footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
