import Image from "next/image";
import Link from "next/link";
import React from "react";

type Projects = {
  name: string;
  app?: string;
  version?: string;
  des?: string;
  longDes?: string;
  lang?: Array<string>;
  framework?: Array<string>;
  href: string;
  img?: string;
  status?: number;
};

const Card = ({
  data,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Projects | any;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <Link
        href={data.href ? data.href : ""}
        className="w-full aspect-square bg-slate-700 block h-max rounded-lg relative"
      >
        {data.version && (
          <span className="absolute bottom-1 left-1 px-1 text-xs font-valorant">
            {data.version}
          </span>
        )}
        {data.img && (
          <Image
            src={data.img}
            alt={data.name}
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-lg"
          />
        )}
        {children}
      </Link>
      <h1 className="font-paprika text-sm px-1">{data.name}</h1>
    </>
  );
};

export { Card };
