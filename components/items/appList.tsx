"use client";

import { useState } from "react";
import { Card } from "./card";

const apps = [
  { name: "Test", href: "/app/test" },
  { name: "Test", href: "/app/test" },
  { name: "Test", href: "/app/test" },
];

const AppList = () => {
  const [app, setApp] = useState(false);

  return (
    <div className={`block ${app ? "max-h-[160px]" : ""}`}>
      <ul className="flex gap-2">
        {apps.map((e, i) => {
          return (
            <li className="aspect-square w-[84px]" key={i}>
              <Card nm={e.name} href={e.href}></Card>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setApp(!app)} className="text-teal-400 text-sm">
        {app ? "Tutup" : "Buka"}
      </button>
    </div>
  );
};

export default AppList;
