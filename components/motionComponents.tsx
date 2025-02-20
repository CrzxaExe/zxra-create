"use client";

import { LinkRounded } from "@mui/icons-material";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Motto = () => {
  return (
    <motion.p
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { delay: 0.2 } }}
      whileHover={{ scale: 1.1 }}
      className="text-lg max-w-(--breakpoint-lg) md:text-xl lg:text-2xl 2xl:px-[9.5rem] w-full text-justify lg:text-center lg:px-[4.3rem] whitespace-normal mb-5 mt-[2vh] xl:mt-12 lg:mt-2 font-geistMono text-slate-400 mx-auto"
    >
      Mudahkan apapun dengan karya kami yang akan tersebar dimanapun dan
      kapanpun.
    </motion.p>
  );
};

const LinkButton = ({
  href,
  text,
  className,
}: {
  href?: string;
  text?: string;
  className?: string;
}) => {
  return (
    <motion.a
      href={href || ""}
      className={className || ""}
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{
        opacity: 1,
        translateX: 0,
      }}
    >
      {text}
    </motion.a>
  );
};

const DisplayItem = ({
  text,
  className,
  displayClassName,
  textClassName,
  containerClassName,
}: {
  text?: string;
  className?: string;
  displayClassName?: string;
  textClassName?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={className}>
      <motion.div className={containerClassName}>
        <motion.div className={displayClassName}></motion.div>
      </motion.div>
      <motion.span className={textClassName}>{text}</motion.span>
    </div>
  );
};

const Tagline = () => {
  return (
    <motion.h2
      initial={{
        translateX: -280,
        opacity: 0,
      }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.4 },
      }}
      className="bg-linear-to-r from-base-upascent to-base-ascent text-transparent bg-clip-text lg:text-center w-full text-5xl md:text-4xl lg:text-5xl mt-[3.5rem] lg:mt-[4rem] font-valorant font-semibold flex items-end lg:justify-center py-2"
    >
      Creating All Task Eazier Is Your Job
    </motion.h2>
  );
};

const OldWebPreview = () => {
  return (
    <motion.div
      initial={{ translateX: 150, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.35 },
      }}
      className="px-5 py-4"
    >
      <div className="bg-base-ascent/40 rounded-xl backdrop-blur-xl shadow-2xl shadow-base-ascent/40 w-full min-h-fit lg:min-h-full px-5 py-3 resize-none outline-hidden overflow-y-hidden overflow-x-clip">
        <span className="text-cyan-400 text-lg lg:text-xl font-valorant font-bold">
          Zxra React
        </span>

        <span className="text-base text-slate-300 block mt-2">
          Project terdahulu
        </span>

        <div className="flex justify-center items-center">
          <div className="flex flex-row mt-5 pb-4 px-2 shad">
            <Image
              alt="ss2"
              src="https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202024-11-22%20202044.png"
              width={280}
              height={280}
              className="z-0 -skew-y-2 shadow-xl"
            />
            <Image
              alt="ss1"
              src="https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Screenshot%202024-11-22%20201950.png"
              width={300}
              height={300}
              className="z-1 -ml-[12.4rem] mt-[2%] -skew-y-6 shadow-xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OldWebReview = () => {
  return (
    <motion.div
      initial={{ translateX: -150, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.35 },
      }}
      className="px-5 py-2"
    >
      <motion.h6
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        className="text-base lg:text-lg text-slate-500"
      >
        Apa itu
      </motion.h6>
      <motion.h1
        initial={{ translateX: -90, scale: 1, translateY: 0 }}
        whileInView={{
          translateX: 0,
          transition: { duration: 0.1 },
        }}
        whileHover={{ scale: 1.12, translateY: 12 }}
        className="-mt-1 text-6xl lg:text-5xl font-medium text-base-upascent inline-block font-valorant"
      >
        Create Zx
      </motion.h1>

      <p className="text-base lg:text-2xl mt-6 text-left text-slate-300">
        Sebuah aplikasi website yang merupakan media informasi tentang{" "}
        <Link href="/about" className="text-cyan-300">
          Zxra
        </Link>{" "}
        serta menyediakan alat yang akan berguna bagi semua orang.
      </p>

      <p className="text-base lg:text-2xl mt-6 text-left text-slate-300">
        Aplikasi ini lebih lengkap dan canggih dari pada website terdahulu,
        namun keduanya tetap open source dan bisa di cek di github leader kami
      </p>

      <p className="text-base lg:text-xl mt-6 text-left text-slate-300">
        Aplikasi ini menggunakan Typescript dan juga kami mengubah frameworknya
        juga
      </p>

      <span className="text-cyan-400 font-bold mt-6 text-xl block">
        Zxra React Repo (Old website)
      </span>
      <div className=" bg-base-ascent px-3 py-2 text-slate-200 rounded-lg shadow-lg flex flex-row items-center">
        <input
          type="text"
          readOnly
          value="https://github.com/CrzxaExe/zxra-reactjs"
          className="outline-hidden bg-transparent w-full"
        />
        <a
          href="https://github.com/CrzxaExe/zxra-reactjs"
          className="px-1 py-1 hover:text-base-upascent"
        >
          <LinkRounded />
        </a>
      </div>
    </motion.div>
  );
};

export { DisplayItem, LinkButton, Motto, Tagline, OldWebPreview, OldWebReview };
