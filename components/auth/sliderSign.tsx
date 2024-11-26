"use client";
import React, { useState } from "react";
import { HowToRegRounded, LoginRounded } from "@mui/icons-material";

const SliderSign = ({ isLogin }: { isLogin?: boolean }) => {
  const [sign, setSign] = useState(isLogin || false);

  return (
    <div
      className={`${
        sign ? "right-[50%]" : "right-0"
      } bg-base-ascent min-h-full rounded-2xl absolute z-[1] w-1/2 py-4 px-5 transition-all duration-200 ease-in-out`}
    >
      <div className="w-full block relative">
        {sign ? (
          <HowToRegRounded className="text-[3.2rem] text-base-upascent" />
        ) : (
          <LoginRounded className="text-[3.2rem] text-base-upascent" />
        )}
      </div>

      <h1 className="text-xl lg:text-2xl font-semibold font-paprika text-base-upascent mt-4">
        {sign ? "Daftar" : "Masuk"}
      </h1>

      <span className="mt-4 text-sm font-geistSans font-semibold block mb-4">
        {sign
          ? "Lakukan registrasi untuk membuat akun dan mengakses fitur yang tersedia"
          : "Masuk kembali ke akun anda yang sudah terdaftar untuk melanjutkan"}
      </span>

      <span className="text-base font-paprika text-slate-300 absolute bottom-4">
        {sign ? "Sudah punya akun? " : "Belum punya akun? "}
        <button onClick={() => setSign(!sign)} className="text-base-upascent">
          {sign ? "Masuk" : "Daftar"}
        </button>
      </span>
    </div>
  );
};

export default SliderSign;
