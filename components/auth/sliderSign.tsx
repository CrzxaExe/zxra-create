"use client";
import React, { useState } from "react";

const SliderSign = ({ isLogin = false }: { islogin?: boolean }) => {
  const [sign, setSign] = useState(isLogin);

  return (
    <div
      className={`${
        sign ? "right-[50%]" : "right-0"
      } bg-base-ascent min-h-full rounded-2xl absolute z-[1] w-1/2 py-4 px-5 transition-all duration-200 ease-in-out`}
    >
      <h1 className="text-xl lg:text-2xl font-semibold font-paprika text-base-upascent">
        {sign ? "Daftar" : "Masuk"}
      </h1>
      <span className="text-base font-paprika text-slate-300">
        {sign ? "Sudah punya akun? " : "Belum punya akun? "}
        <button onClick={() => setSign(!sign)} className="text-base-upascent">
          {sign ? "Masuk" : "Daftar"}
        </button>
      </span>
    </div>
  );
};

export default SliderSign;
