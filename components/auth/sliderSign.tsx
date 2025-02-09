"use client";
import React, { useState } from "react";
import { HowToRegRounded, LoginRounded } from "@mui/icons-material";

const SliderSign = ({ isLoginSection }: { isLoginSection?: boolean }) => {
  const [sign, setSign] = useState(isLoginSection || false);

  return (
    <div
      className={`${
        sign
          ? "right-[50%] rounded-r-xl rounded-l-none"
          : "right-0 rounded-l-xl rounded-r-none"
      } bg-base-ascent min-h-full lg:rounded-2xl absolute z-[1] w-1/2 py-4 px-5 transition-all duration-200 ease-in-out`}
    >
      <div className="w-full block relative">
        {sign ? (
          <HowToRegRounded className="text-[3.2rem] text-base-upascent" />
        ) : (
          <LoginRounded className="text-[3.2rem] text-base-upascent" />
        )}
      </div>

      <h1 className="text-xl lg:text-2xl font-semibold font-mono text-base-upascent mt-4">
        {sign ? "Daftar Akun" : "Masuk Ke Akun"}
      </h1>

      <span className="mt-4 text-xs lg:text-sm font-geistSans font-semibold block mb-4">
        {sign
          ? "Selamat datang ke Create ZX, anda baru disini? Silahkan isi data berikut ini untuk membuat akun"
          : "Selamat datang kembali, silahkan masukan email dan password anda untuk masuk ke akun anda"}
      </span>

      <span className="text-sm lg:text-base font-mono text-slate-300 absolute bottom-4">
        {sign ? "Sudah punya akun? " : "Belum punya akun? "}
        <button
          onClick={() => setSign(!sign)}
          className="text-base-upascent transition-all duration-300 ease-in-out group relative"
        >
          {sign && (
            <span className="font-bold group-hover:pr-1 -ml-2 group-hover:ml-0 w-[0%] group-hover:w-[100%] text-transparent group-hover:text-base-upascent transition-all duration-300 ease-in-out">
              {"<"}
            </span>
          )}
          {sign ? "Masuk" : "Daftar"}
          {!sign && (
            <span className="font-bold group-hover:pl-1 -mr-2 group-hover:mr-0 w-[0%] group-hover:w-[100%] text-transparent group-hover:text-base-upascent transition-all duration-300 ease-in-out">
              {">"}
            </span>
          )}
        </button>
      </span>
    </div>
  );
};

export default SliderSign;
