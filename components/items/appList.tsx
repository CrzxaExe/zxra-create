//"use client";

// import { useState } from "react";
import { Card } from "./card";

const apps = [
  { name: "FbVid", href: "/app/fbvid" },
  { name: "Gemini AI", href: "/app/gemini", img: "" },
  { name: "Test", href: "/app/test" },
];

const AppList = () => {
  // const [app, setApp] = useState(false);

  return (
    <div className={`block`}>
      <ul
        className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-1`}
      >
        {apps.map((e, i) => {
          return (
            <li className="aspect-square w-[96px] lg:w-[102px]" key={i}>
              <Card nm={e.name} href={e.href}></Card>
            </li>
          );
        })}
      </ul>
      {/* <button
        onClick={() => setApp(!app)}
        className="text-slate-400 text-sm w-full bg-slate-800 py-3 rounded-lg font-bold"
      >
        {app ? "Tutup" : "Buka"}
      </button> */}
    </div>
  );
};

export default AppList;
