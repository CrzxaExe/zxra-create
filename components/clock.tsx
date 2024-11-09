"use client";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Clock = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  dayjs.extend(isToday);

  const day = dayjs();
  setInterval(() => {
    day.isToday();
  }, 1000);

  return <div>{day.format("hh:mm | ddd MM YY")}</div>;
};

export default Clock;
