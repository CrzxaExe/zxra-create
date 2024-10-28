"use client";

import Image from "next/image";
import React from "react";

const Img = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <Image src={src} alt={alt} width={500} height={500} className={className} />
  );
};

export default Img;
