"use client";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  dayjs.extend(isToday);

  const day = dayjs();
  return (
    <div className="mx-6 flex flex-row items-center bg-slate-700/60 rounded-xl px-4 py-4 -mt-3 shadow-md">
      <div className="flex flex-row items-center gap-3">
        <i className="bx bx-time text-xl"></i>
        <span className="font-mono text-sm">{day.format("DD MMMM YY")}</span>
      </div>
    </div>
  );
};

export default Clock;
