import Image from "next/image";
import Link from "next/link";

import logo from "@/app/asset/Zxra.png";
import star from "@/app/asset/star_half_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
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

export default function Home() {
  return (
    <>
      <section className="container max-w-screen-xl pt-10">
        <div className="min-h-screen overflow-hidden">
          <div className="flex flex-row items-center justify-center -mt-12 lg:mt-[7vh] 2xl:mt-[5vh]">
            <div className="px-3 py-5 w-full flex items-center justify-center flex-col lg:flex-row lg:-ml-[3rem]">
              <Image
                alt="logo"
                src={logo}
                width={300}
                height={300}
                className="-mb-[4.9rem] lg:-mb-[2.3rem] aspect-square w-[24rem] lg:w-[16rem] 2xl:w-[27rem] -mr-[0.5rem] lg:mr-[0.4rem] transition-all duration-300 ease-in-out"
              />
              <h1 className="opacity-0 lg:opacity-100 font-valorant text-6xl lg:text-7xl 2xl:text-8xl -ml-[2rem] lg:-ml-[3.4rem] 2xl:-ml-[4.4rem] -mt-[8rem] lg:mt-[3rem] transition-all duration-300 ease-in-out">
                Create Zx
              </h1>
            </div>
          </div>
          <div className="px-7 lg:mt-[3vh] 2xl:-mt-[1rem]">
            <h2 className="lg:text-center w-full text-slate-200 text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl mt-[4rem] lg:-mt-[2rem] font-paprika font-semibold pr-[15%] lg:pr-0 flex items-end lg:mx-[18%] xl:mx-[18rem] 2xl:mx-[19rem]">
              Eazier your life with us
              <Image
                alt="star"
                src={star}
                width={29}
                height={29}
                className="ml-2 hidden lg:inline"
              />
            </h2>
            <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:px-[5rem] w-full text-justify lg:text-center lg:px-14 whitespace-normal mb-5 mt-[12vh] xl:mt-12 lg:mt-2 font-geistMono text-slate-400">
              Aplikasi super dengan berbagai macam aplikasi dan utilitas yang
              lain
            </p>
            <div className="w-full flex flex-row lg:justify-center gap-4 mt-[4vh] lg:mt-[1.2rem] 2xl:mt-[2.4rem]">
              <Link
                href="/login"
                className="block w-fit px-8 py-3 text-xl border border-slate-400 text-slate-400 rounded-3xl hover:bg-slate-400 hover:text-primary-800 transition-all duration-300 ease-in-out"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="block w-fit px-8 py-3 text-xl bg-slate-400 border border-slate-400 text-primary-800 hover:text-slate-400 rounded-3xl hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Daftar
              </Link>
            </div>
            <p className="mt-[8vh] md:mt-[6vh] 2xl:mt-[2rem] text-slate-600 w-full px-6 lg:text-center font-geistMono">
              V{mks.version}
            </p>

            <p className="mt-[7vh] md:mt-[10vh] 2xl:mt-[1.8rem] mb-[6vh] lg:mb-[3.6rem] 2xl:mb-[4.3rem] text-slate-400 w-full px-6 lg:text-center font-geistMono">
              Scroll kebawah untuk lihat selengkapnya
            </p>
          </div>
        </div>

        <CenterHr text="Ringkasan" className="px-8" />

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

            <div className="w-full mt-2 lg:mt-5">
              <div className="flex flex-wrap w-full gap-5">
                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-end text-slate-400 gap-2">
                    <BoltOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Cepat & Kuat
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 text-sm lg:text-base 2xl:text-lg">
                    Kinerja website lebih cepat untuk memproses dan lebih
                    powerfull.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-end text-slate-400 gap-2">
                    <GradeOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Bersih & Simpel
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 text-sm lg:text-base 2xl:text-lg">
                    Tampilan lebih bersih dipadukan dengan desain minimalist.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-end text-slate-400 gap-2">
                    <AspectRatioOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">
                      Responsif
                    </b>
                  </div>
                  <p className="text-slate-400 mt-1 text-sm lg:text-base 2xl:text-lg">
                    Tampilan akan menyesuaikan dengan ukuran layar anda.
                  </p>
                </div>

                <div className="w-[47.2%] md:w-[31.4%] lg:w-[23.5%] rounded-xl py-2 relative">
                  <div className="flex flex-row items-end text-slate-400 gap-2">
                    <UpgradeOutlined className="text-2xl lg:text-3xl aspect-square" />
                    <b className="text-xl lg:text-2xl font-geistSans">Modern</b>
                  </div>
                  <p className="text-slate-400 mt-1 text-sm lg:text-base 2xl:text-lg">
                    Menggunakan teknologi yang lebih baru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-slate-900/70 text-slate-200 backdrop-blur-md isolate py-8 rounded-t-lg">
          <h1 className="font-paprika px-3 w-full text-center font-bold text-lg">
            Unggulan
          </h1>
        </section>
      </section>
      <Footer />
    </>
  );
}
