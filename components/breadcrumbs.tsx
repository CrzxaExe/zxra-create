import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ link }: { link: string }) => {
  console.log(link);
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      separator="/"
      className="font-bold text-lg lg:text-xl font-mono text-slate-200"
    >
      {link
        .slice(1)
        .split("/")
        .map((e, i) => {
          return (
            <Link
              href={
                "/" +
                link
                  .slice(1)
                  .split("/")
                  .slice(0, i + 1)
                  .join("/")
              }
              key={i}
              className="text-teal-500 font-geistSans hover:text-teal-200 focus:text-teal-700 transition-all duration-300 ease-in-out"
            >
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </Link>
          );
        })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
