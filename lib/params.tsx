"use client";
import { useParams } from "next/navigation";

const GetParams = () => {
  const search = useParams();
  return search;
};

export { GetParams };
