import { auth } from "@/auth";
import { AuthButton } from "@/components/auth/authButton";
import Image from "next/image";
import React from "react";

import userImg from "@/app/asset/istockphoto-1300845620-612x612.jpg";
import { FindEmail } from "@/lib/db";
import UpdateForm from "@/components/auth/updateForm";
import { metadata } from "@/app/layout";

const Page = async () => {
  const session = await auth();
  const user = await FindEmail(session?.user?.email || "");

  metadata.title = user?.name || session?.user?.name;

  return (
    <div className="mt-[6rem] max-w-(--breakpoint-xl) px-10 mx-auto">
      <div className="w-full max-h-[250px] h-[14.7vw] bg-slate-500"></div>

      <div className="w-full -mt-[6.7vw] px-[1.5rem] flex flex-row items-center gap-[2.4vw]">
        <Image
          src={user?.image || session?.user?.image || userImg}
          alt="profile"
          width={300}
          height={300}
          className="w-[20%] rounded-full aspect-square"
        />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:invert py-4 pt-8 lg:pt-6 xl:pt-0 transition-all duration-300 ease-in-out">
          {user?.name || session?.user?.name || "User"}
        </h1>
      </div>

      <div className="inline-flex flex-row mt-5 gap-2">
        <button className="px-3 py-2 bg-cyan-600 rounded-lg text-sm hover:bg-cyan-700 active:bg-cyan-400 hover:text-gray-200 active:text-gray-800">
          Ubah Foto Profil
        </button>
        <button className="px-3 py-2 bg-cyan-600 rounded-lg text-sm hover:bg-cyan-700 active:bg-cyan-400 hover:text-gray-200 active:text-gray-800">
          Ubah Foto Banner
        </button>
      </div>

      <div className="w-full px-[2.3rem] py-[2vh] bg-slate-900/[0.4] backdrop-blur-lg mt-5 rounded-lg">
        <h1 className="text-xl mb-5 font-paprika font-semibold text-slate-300">
          Tentangmu
        </h1>

        <h1 className="test-base mt-2">ID</h1>
        <input
          type="text"
          value={user?.id || session?.user?.id || "-"}
          className="bg-slate-800 text-slate-400 px-3 py-2 w-full outline-hidden rounded-lg"
          readOnly
        />

        <h1 className="test-base mt-2">Email</h1>
        <input
          type="text"
          value={user?.email || session?.user?.email || "none@gmail.com"}
          className="bg-slate-800 text-slate-400 px-3 py-2 w-full outline-hidden rounded-lg"
          readOnly
        />

        <UpdateForm user={user} />
      </div>
      <AuthButton />
    </div>
  );
};

export default Page;
