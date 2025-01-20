"use client";

import React, { useRef, useEffect, useState } from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { SearchOutlined } from "@mui/icons-material";
import SearchEvent from "@/lib/search";
import dayjs from "dayjs";

const TextField = ({
  name,
  type,
  placeholder,
  text,
  className,
}: {
  name?: string;
  type?: string;
  placeholder?: string;
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={
        className +
        "bg-base-ascent border-base-slate-200 py-1 border-b-[1px] relative border-0 w-full flex flex-col justify-center mb-3 group"
      }
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="pt-5 bg-transparent text-slate-200 valid:text-green-400 invalid:text-red outline-none w-full py-[0.13rem] isolate placeholder:opacity-0 peer focus:placeholder:opacity-100 placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out"
      />
      <label
        htmlFor={name}
        className="block text-lg lg:text-xl -top-1 absolute peer-focus:-top-1 peer-placeholder-shown:top-[40%] transition-all duration-300 ease-in-out"
      >
        {text || name}
      </label>
    </div>
  );
};

const Breadcrumb = ({ link }: { link: string }) => {
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
          return i < link.slice(1).split("/").length - 1 ? (
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
              className="text-teal-500 font-geistSans hover:text-teal-200 focus:text-teal-700 transition-all duration-300 ease-in-out hover:scale-110"
            >
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </Link>
          ) : (
            <span
              key={i}
              className="capitalize cursor-pointer text-teal-500 font-geistSans hover:text-teal-200 focus:text-teal-700 transition-all duration-300 ease-in-out hover:scale-110"
            >
              {e}
            </span>
          );
        })}
    </Breadcrumbs>
  );
};

const SearchBar = ({
  colorNormal = "bg-slate-500/35",
  colorHover = "bg-slate-500/70",
  colorFocus = "bg-slate-500/50",
  isLimited = true,
}: {
  colorNormal: string;
  colorHover: string;
  colorFocus: string;
  isLimited: boolean;
}) => {
  const inputTarget = useRef(null);
  return (
    <div
      className={`flex flex-row items-center ${colorNormal} ${colorHover} ${colorFocus} px-2 py-1 rounded-md ${
        isLimited && "hidden lg:flex"
      }`}
    >
      <button
        className="text-[0.08rem] hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const target: any = inputTarget;
          SearchEvent(target.current.value);
        }}
      >
        <SearchOutlined />
      </button>
      <input
        type="text"
        placeholder="Cari"
        spellCheck
        name="search"
        ref={inputTarget}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const target: any = e.target;
            SearchEvent(target.value.replace(/ /, "%20"));
          }
        }}
        className="bg-transparent px-1 outline-none placeholder:text-slate-300/60 focus:text-base-upascent transitiion-all duration-300 ease-in-out"
      />
    </div>
  );
};

const DashboardWidget = () => {
  return (
    <div className="w-full bg-[#34343440] h-[6em] lg:h-[6.8em] flex flex-row flex-wrap basis-2 items-center rounded-lg overflow-x-scroll overflow-y-hidden">
      <Clock />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [now, setTime] = useState(new Date());
  const day = dayjs(now);

  function updateTime() {
    setTime(new Date());
  }

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center bg-[#343434] rounded-xl p-3 shadow-md aspect-square min-h-full max-h-full">
      <span className="font-mono text-base lg:text-lg text-slate-200 font-bold text-pretty">
        {day.format("hh:mm")}
      </span>
    </div>
  );
};

export { Breadcrumb, Clock, DashboardWidget, SearchBar, TextField };
