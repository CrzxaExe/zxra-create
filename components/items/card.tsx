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
        href={"/projects/" + data.name.split(" ").join("-").toLowerCase()}
        className="w-full aspect-square bg-slate-700 block max-h-full overflow-visible rounded-lg relative hover:scale-110 transition-all duration-150 ease-in-out shadow-lg"
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
      <h1 className="font-mono text-xs lg:text-sm px-1 mt-1">{data.name}</h1>
    </>
  );
};

export { Card };
