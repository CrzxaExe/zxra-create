"use client";

import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

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
    <div className="flex flex-row items-center bg-[#292929] rounded-xl p-3 shadow-md aspect-square max-w-[120px]">
      <div className="flex items-center justify-center w-full text-center border-[3px] border-solid border-base-ascent aspect-square rounded-xl">
        <span className="font-mono text-base text-base-ascent">
          {day.format("hh:mm")}
        </span>
      </div>
    </div>
  );
};

export default Clock;
