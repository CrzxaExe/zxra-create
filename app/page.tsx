import Image from "next/image";

import logo from "@/app/asset/zx.png";
import bgEffect from "@/app/asset/bg_effect.png";

import {
  AspectRatioRounded,
  UpdateRounded,
  BoltRounded,
  CleaningServicesRounded,
} from "@mui/icons-material";

import { CenterHr } from "@/components/hr";

import mks from "@/package.json";
import Footer from "@/components/footer";
import { metadata } from "./layout";
import {
  LinkButton,
  Motto,
  OldWebPreview,
  OldWebReview,
  Tagline,
} from "@/components/motionComponents";

export default function Home() {
  metadata.title = "Create Zx";

  return (
    <>
      <Image
        alt="effect"
        src={bgEffect}
        className="w-full -mb-[3rem] md:-mb-[5rem] lg:-mb-[8rem] xl:-mb-[12rem] 2xl:-mb-[21rem] mt-[16.5rem] lg:mt-[11.7rem] scale-y-[580%] lg:scale-y-[180%] object-contain opacity-50 -z-1 relative"
      />
      <section className="container max-w-(--breakpoint-lg) -mt-[20.5rem] lg:-mt-[32.7rem] z-7 overflow-x-hidden">
        <div className="min-h-screen overflow-hidden">
          <div className="flex flex-row items-center justify-center mt-[6rem] lg:mt-[9vh] 2xl:mt-[8vh]">
            <div
              className="px-3 py-5 w-full flex items-center justify-center flex-col lg:flex-row"
              id="logo"
            >
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
            <Tagline />
            <Motto />
            <div className="w-full flex flex-row lg:justify-center gap-4 mt-[4vh] lg:mt-[1.2rem] 2xl:mt-[2.4rem]">
              <LinkButton
                text="Masuk"
                href="/sign"
                className="flex justify-center items-center w-fit px-5 lg:px-8 py-2.5 lg:py-3 lg:text-lg border border-base-upascent text-base-upascent rounded-2xl hover:bg-base-upascent hover:text-base-upfloor font-bold  shadow-md"
              />
              <LinkButton
                href="/dashboard"
                text="Beranda"
                className="flex justify-center items-center w-fit px-5 lg:px-8 py-2.5 lg:py-3 lg:text-lg bg-base-upascent border border-base-upascent text-base-upfloor hover:text-base-upascent rounded-2xl hover:bg-transparent font-bold shadow-md"
              />
            </div>
            <p className="mt-[5vh] md:mt-[6vh] 2xl:mt-[2rem] text-slate-600 w-full lg:px-6 lg:text-center font-geistMono">
              V{mks.version}
            </p>

            <p className="mt-[5vh] md:mt-[10vh] 2xl:mt-[1.8rem] mb-[6vh] lg:mb-[3.6rem] 2xl:mb-[4.3rem] text-slate-400 w-full lg:px-6 font-geistMono flex flex-row lg:justify-center items-center">
              Scroll kebawah untuk lihat selengkapnya{" "}
              <i className="bx bx-down-arrow-alt text-xl"></i>
            </p>
          </div>
        </div>

        <CenterHr text="Bawah" className="px-[5vw] -mt-7" />

        <section className="min-h-screen mt-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
            <OldWebReview />
            <OldWebPreview />
          </div>

          <h1 className="text-xl lg:text-3xl text-base-upascent font-bold px-5 mt-4">
            Peningkatan
          </h1>

          <div className="mt-2 px-5 py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-5">
            <div className="bg-base-upfloor/50 rounded-lg shadow-lg px-3 py-2">
              <span className="text-xl font-bold text-slate-400 flex items-center gap-1">
                <BoltRounded />
                Cepat & Kuat
              </span>

              <p className="text-sm text-slate-300 px-1 py-1 mt-2">
                Kinerja lebih cepat dan kuat daripada yang dulu
              </p>
            </div>

            <div className="bg-base-upfloor/50 rounded-lg shadow-lg px-3 py-2">
              <span className="text-xl font-bold text-slate-400 flex items-center gap-1">
                <CleaningServicesRounded />
                Bersih & Simpel
              </span>

              <p className="text-sm text-slate-300 px-2 py-1 mt-2">
                Tampilan lebih bersih dipadukan dengan desain minimalis
              </p>
            </div>

            <div className="bg-base-upfloor/50 rounded-lg shadow-lg px-3 py-2">
              <span className="text-xl font-bold text-slate-400 flex items-center gap-1">
                <AspectRatioRounded />
                Responsif
              </span>

              <p className="text-sm text-slate-300 px-2 py-1 mt-2">
                Responsifitas lebih tinggi dan lebih tertata
              </p>
            </div>

            <div className="bg-base-upfloor/50 rounded-lg shadow-lg px-3 py-2">
              <span className="text-xl font-bold text-slate-400 flex items-center gap-1">
                <UpdateRounded />
                Modern
              </span>

              <p className="text-sm text-slate-300 px-2 py-1 mt-2">
                Website lebih modern dengan banyak fitur baru dan library
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
