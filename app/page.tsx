import Image from "next/image";
import Link from "next/link";

import logo from "@/app/asset/zx.png";
import bgEffect from "@/app/asset/bg_effect.png";
import SS from "@/app/asset/ss.png";

import {
  BoltOutlined,
  GradeOutlined,
  AspectRatioOutlined,
  UpgradeOutlined,
} from "@mui/icons-material";

import { CenterHr } from "@/components/hr";

import mks from "@/package.json";
import Footer from "@/components/footer";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "Create Zx";

  return (
    <>
      <Image
        alt="effect"
        src={bgEffect}
        className="w-full -mb-[3rem] md:-mb-[5rem] lg:-mb-[8rem] xl:-mb-[12rem] 2xl:-mb-[21rem] object-contain opacity-50"
      />
      <section className="container max-w-screen-lg">
        <div className="min-h-screen overflow-hidden">
          <div className="flex flex-row items-center justify-center mt-[6rem] lg:mt-[9vh] 2xl:mt-[12vh]">
            <div className="px-3 py-5 w-full flex items-center justify-center flex-col lg:flex-row">
              <Image
                alt="logo"
                src={logo}
                width={320}
                height={320}
                className=" w-[20rem] lg:w-[25rem] 2xl:w-[29rem] transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="px-7 lg:mt-[1vh] 2xl:mt-[1rem]">
            <h2 className="bg-gradient-to-r from-base-upascent to-base-ascent text-transparent bg-clip-text lg:text-center w-full text-5xl md:text-4xl lg:text-6xl mt-[3rem] lg:mt-[4rem] font-paprika font-semibold flex items-end lg:justify-center py-2">
              Creating All Task Eazier Is Your Job
            </h2>
            <p className="text-lg max-w-screen-lg md:text-xl lg:text-2xl 2xl:px-[9.5rem] w-full text-justify lg:text-center lg:px-[4.3rem] whitespace-normal mb-5 mt-[2vh] xl:mt-12 lg:mt-2 font-geistMono text-slate-400 mx-auto">
              Super Apps yang menghubungkan berbagai macam aplikasi kami dan
              memusatkan semuanya pada 1 aplikasi ini.
            </p>
            <div className="w-full flex flex-row lg:justify-center gap-4 mt-[4vh] lg:mt-[1.2rem] 2xl:mt-[2.4rem]">
              <Link
                href="/login"
                className="flex justify-center items-center w-fit px-5 lg:px-8 py-2.5 lg:py-3 text-xl border border-base-upascent text-base-upascent rounded-3xl hover:bg-base-upascent hover:text-base-upfloor font-bold transition-all duration-300 ease-in-out shadow-md"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="flex justify-center items-center w-fit px-5 lg:px-8 py-2.5 lg:py-3 text-xl bg-base-upascent border border-base-upascent text-base-upfloor hover:text-base-upascent rounded-3xl hover:bg-transparent font-bold transition-all duration-300 ease-in-out shadow-md"
              >
                Daftar
              </Link>
            </div>
            <p className="mt-[5vh] md:mt-[6vh] 2xl:mt-[2rem] text-slate-600 w-full px-6 lg:text-center font-geistMono">
              V{mks.version}
            </p>

            <p className="mt-[5vh] md:mt-[10vh] 2xl:mt-[1.8rem] mb-[6vh] lg:mb-[3.6rem] 2xl:mb-[4.3rem] text-slate-400 w-full px-6 font-geistMono flex flex-row lg:justify-center items-center">
              Scroll kebawah untuk lihat selengkapnya{" "}
              <i className="bx bx-down-arrow-alt text-xl"></i>
            </p>
          </div>
        </div>

        <CenterHr text="Bawah" className="px-[5vw]" />

        <section></section>

        <section className="px-7 mt-12 py-3 pt-10 mb-8 min-h-screen">
          <div className="flex flex-wrap gap-1">
            <div className="w-full md:w-[49%] md:pr-1">
              <span className="text-slate-500 text-base lg:text-xl block mt-2">
                Apa itu
              </span>
              <span className="text-3xl lg:text-5xl text-teal-500 font-bold font-paprika mb-2">
                Create Zx
              </span>
              <p className="text-slate-400 text-base lg:text-2xl text-justify">
                Sebuah aplikasi website dan merupakan pengganti website Zxra
                Create yang dulu namun sekarang dibuat ulang menggunakan
                framework
                <a
                  href="https://nextjs.org/"
                  className="text-sky-300 px-2.5"
                  target="blank"
                >
                  Next.js
                </a>
                yang cukup powerfull dan memiliki ekosistem yang bagus. Sekarang
                Website ini akan lebih banyak konten dan hal baru yang mungkin
                akan kalian kenali saat menggunakannya.
                <br />
                <br />
                Sekarang anda harus login untuk mengakses semua fitur yang ada,
                tenang fitur disini masih tidak ada biaya apapun jadi kalian
                masih bisa mengakses semua fitur yang ada dan kami akan selalu
                meningkatkan kinerja aplikasi ini.
                <br />
                <br />
                Eazier your life with Zxra Create
              </p>
            </div>
            <div className="w-full md:w-[49%] xl:p-[3.7rem] xl:pt-0">
              <Image
                src={SS}
                alt="Screenshoot"
                width={400}
                height={400}
                className="object-contain w-full mt-5 md:mt-0 md:pl-2"
              />
            </div>

            <span className="text-3xl lg:text-5xl text-teal-500 font-bold font-paprika mt-6">
              Apa Yang Beda?
            </span>

            <div className="w-full mt-2 lg:mt-5">
              <div className="flex flex-wrap w-full gap-5">
                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-center text-slate-400 gap-2">
                    <BoltOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Cepat & Kuat
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 px-2 text-sm lg:text-base 2xl:text-lg">
                    Kinerja website lebih cepat untuk memproses dan lebih
                    powerfull.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-center text-slate-400 gap-2">
                    <GradeOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Bersih & Simpel
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 px-2 text-sm lg:text-base 2xl:text-lg">
                    Tampilan lebih bersih dipadukan dengan desain minimalist.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-center text-slate-400 gap-2">
                    <AspectRatioOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Responsif
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 px-2 text-sm lg:text-base 2xl:text-lg">
                    Tampilan akan menyesuaikan dengan ukuran layar anda.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-end text-slate-400 gap-2">
                    <UpgradeOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">Modern</b>
                  </div>
                  <p className="text-slate-400 mt-1 px-2 text-sm lg:text-base 2xl:text-lg">
                    Menggunakan teknologi yang lebih baru
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CenterHr text="Scroll Kebawah" className="mt-[4rem]" />
        </section>

        <section className="min-h-screen bg-slate-900/70 text-slate-200 backdrop-blur-md isolate py-12 rounded-t-lg">
          <h1 className="font-paprika w-full text-center lg:text-left font-bold text-2xl lg:text-3xl px-7 py-3">
            Overview
          </h1>

          <p className="mt-5 text-base lg:text-lg font-paprika px-7 text-justify">
            Aplikasi ini memiliki banyak fitur baru dibanding dengan yang lama
            salah satunya yaitu autentikasinya. User harus login untuk dapat
            mengakses aplikasi didalamnya. Dalam Aplikasi ini memiliki banyak
            library selain yang kami sebutkan disini. Aplikasi ini merupakan
            aplikasi open source dan bisa kalian temukan di github owner kami.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
