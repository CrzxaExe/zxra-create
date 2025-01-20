import { metadata } from "@/app/layout";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async (context: any) => {
  metadata.title = "Searching";

  return (
    <div>
      {context.searchParams?.value && (
        <h1>
          Mencari untuk{" "}
          <span className="text-teal-400">{context.searchParams.value}</span>
        </h1>
      )}
    </div>
  );
};

export default Page;
