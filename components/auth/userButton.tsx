import Image from "next/image";
import Link from "next/link";
import React from "react";

import userImg from "@/app/asset/istockphoto-1300845620-612x612.jpg";

const UserButton = ({
  session,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session?: any;
}) => {
  return !session ? (
    ""
  ) : (
    <Link
      href="/user"
      className="flex flex-row items-center lg:bg-base-upascent lg:hover:bg-base-ascent lg:text-base-floor lg:hover:text-base-upascent rounded-lg py-[2px] px-1 transition-all duration-300 ease-in-out"
    >
      <Image
        src={session?.user?.image || userImg}
        alt="Profile"
        width={300}
        height={300}
        className="aspect-square w-[34px] h-[36px] lg:w-[30px] lg:h-[30px] rounded-full"
      />
      <h1 className="px-1 py-1 font-bold hidden lg:block">
        {session?.user ? "Anda" : "Tamu"}
      </h1>
    </Link>
  );
};

export default UserButton;
