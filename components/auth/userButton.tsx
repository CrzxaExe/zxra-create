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
      className="flex flex-row bg-slate-500 relative rounded-lg"
    >
      <Image
        src={session?.user?.image || userImg}
        alt="Profile"
        width={300}
        height={300}
        className="aspect-square w-[30px] rounded-full absolute left-1 top-1 bottom-2.5"
      />
      <h1 className="px-4 pl-[38px] py-2 font-bold">
        {session?.user?.name?.split(" ")[0] || "Tamu"}
      </h1>
    </Link>
  );
};

export default UserButton;
