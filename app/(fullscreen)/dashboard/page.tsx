"use server";

import React from "react";

import { metadata } from "@/app/layout";
import { DashboardWidget } from "@/components/components";

const Page = async () => {
  metadata.title = "Beranda";

  return (
    <div className="isolate text-sm lg:text-base overflow-x-hidden overflow-y-scroll capitalize">
      <DashboardWidget />
    </div>
  );
};

export default Page;
