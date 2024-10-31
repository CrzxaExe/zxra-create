import Image from "next/image";
import Link from "next/link";
import React from "react";

import userImg from "@/app/asset/istockphoto-1300845620-612x612.jpg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserButton = ({ session }: { session?: any }) => {
  return !session ? (
    ""
  ) : (
    <Link
      href="/user"
      className="flex flex-row items-center bg-slate-500 rounded-lg"
    >
      <Image
        src={session?.user?.image || userImg}
        alt="Profile"
        width={300}
        height={300}
        className="aspect-square w-[30px] h-[30px] rounded-full ml-1"
      />
      <h1 className="px-2 py-1.5 font-bold">
        {session?.user?.name?.split(" ")[0] || "Tamu"}
      </h1>
    </Link>
  );
};

export default UserButton;
