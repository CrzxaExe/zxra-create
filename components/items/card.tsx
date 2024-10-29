import Link from "next/link";
import React from "react";

const Card = ({
  nm,
  href,
  children,
}: {
  nm: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <Link
        href={href ? href : ""}
        className="w-full aspect-square bg-slate-700 block h-max p-1 rounded-lg"
      >
        {children}
      </Link>
      <h1 className="font-paprika text-sm">{nm}</h1>
    </>
  );
};

export { Card };
