"use client";

import { motion } from "motion/react";

const Motto = () => {
  return (
    <motion.p
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="text-lg max-w-screen-lg md:text-xl lg:text-2xl 2xl:px-[9.5rem] w-full text-justify lg:text-center lg:px-[4.3rem] whitespace-normal mb-5 mt-[2vh] xl:mt-12 lg:mt-2 font-geistMono text-slate-400 mx-auto"
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
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.13 }}
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

export { DisplayItem, LinkButton, Motto };
