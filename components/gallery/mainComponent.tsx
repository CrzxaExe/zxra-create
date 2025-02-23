"use client";

import { OpenInBrowser } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

const MainComponent = ({ image }: { image: Array<string> }) => {
  const [imgs, setImg] = useState<string>("");

  return (
    <>
      <div
        className={`${
          imgs === "" ? "opacity-0 hidden" : "opacity-100 fixed"
        } w-full py-2 lg:min-h-screen lg:flex row-span-2 justify-center items-center flex-col gap-2 absolute lg:relative bg-white z-20 bottom-6 lg:top-0`}
      >
        {imgs !== "" && (
          <>
            <Image
              src={imgs}
              alt="display"
              width={500}
              height={500}
              className="w-full w-max-full scale-90 lg:scale-100 origin-center lg:aspect-square object-contain"
            />
            <div className="flex flex-row w-full gap-1 px-2 -mt-2 lg:mt-3">
              <a
                href={imgs}
                target="_blank"
                className="w-full bg-gray-300 rounded-lg py-2 font-sans font-semibold text-gray-700 text-center pl-8 flex flex-row items-center justify-center gap-2"
              >
                Open <OpenInBrowser />
              </a>
              <button
                className="w-[16%] block bg-gray-300 rounded-lg py-2 font-sans font-semibold text-gray-700 text-center"
                onClick={() => setImg("")}
              >
                X
              </button>
            </div>
          </>
        )}
      </div>
      <div className="row-span-1 lg:row-span-3">
        <div className="py-4 px-3 w-full">
          <h3 className="font-semibold text-3xl lg:text-4xl w-full">
            Welcome to Gallery
          </h3>
          <span className="-mt-1 font-thin text-sm lg:text-base text-gray-800">
            Creativity come from lazyness
          </span>

          <p className="mt-6 w-[100%] lg:w-[300%]">
            You can search and download all art we has been drawing, this all
            are originaly create by our teams and not for commission. The artist
            are very lazy to draw new once, so please wait them to adding by
            self.
          </p>

          <h1 className="text-xl lg:text-2xl font-bold font-sans mt-4">
            Images:
          </h1>

          <ul className="mt-4 grid grid-cols-2 lg:grid-cols-6 w-[100%] lg:w-[300%] gap-2">
            {image.map((img, i) => (
              <li
                key={i}
                className="bg-gray-300 rounded-lg overflow-hidden aspect-square"
                onClick={() => setImg(img)}
              >
                <Image
                  src={img}
                  alt={`img-${i}`}
                  width={500}
                  height={500}
                  className="object-cover w-full aspect-square origin-center scale-110"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
