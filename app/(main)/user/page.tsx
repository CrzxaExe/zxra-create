import { auth } from "@/auth";
import { AuthButton } from "@/components/auth/authButton";
import Image from "next/image";
import React from "react";

import userImg from "@/app/asset/istockphoto-1300845620-612x612.jpg";

const Page = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className="mt-[6rem] max-w-screen-lg px-3 mx-auto">
      <div className="w-full max-h-[200px] h-[14vw] bg-slate-400"></div>

      <div className="w-full -mt-[6.7vw] px-[1.5rem] flex flex-row items-center gap-[2.4vw]">
        <Image
          src={session?.user?.image || userImg}
          alt="profile"
          width={300}
          height={300}
          className="w-[20%] rounded-full aspect-square"
        />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:invert py-4 pt-8 lg:pt-6 xl:pt-0 transition-all duration-300 ease-in-out">
          {session?.user?.name || "User"}
        </h1>
      </div>

      <div className="w-full px-[2.3rem] py-[2vh] bg-slate-900/[0.7] mt-5">
        <h1 className="test-base mt-2">ID</h1>
        <input
          type="text"
          value={session?.user?.userID || "-"}
          className="bg-slate-950 text-slate-400 px-3 py-2 w-full outline-none rounded-lg"
          readOnly
        />

        <h1 className="test-base mt-2">Email</h1>
        <input
          type="text"
          value={session?.user?.email || "none@gmail.com"}
          className="bg-slate-950 text-slate-400 px-3 py-2 w-full outline-none rounded-lg"
          readOnly
        />
      </div>
      <AuthButton />
    </div>
  );
};

export default Page;
