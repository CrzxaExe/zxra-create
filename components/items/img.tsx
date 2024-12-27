"use client";

import Image from "next/image";
import React from "react";

const Img = ({
  src,
  alt,
  width,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 500}
      height={500}
      className={className}
    />
  );
};

export default Img;
