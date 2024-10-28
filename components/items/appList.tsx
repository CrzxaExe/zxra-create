"use client";

import { useState } from "react";

const AppList = () => {
  const [app, setApp] = useState(false);

  return (
    <div className={`block ${app ? "max-h-[160px]" : ""}`}>
      <ul className="flex gap-2">
        <li className="aspect-square w-[84px] bg-slate-700 rounded-lg p-1">
          <h1>Test</h1>
        </li>
      </ul>
      <button onClick={() => setApp(!app)} className="text-teal-400 text-sm">
        {app ? "Tutup" : "Buka"}
      </button>
    </div>
  );
};

export default AppList;
