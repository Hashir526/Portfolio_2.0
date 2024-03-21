import React from "react";
import Image from "next/image";
export function CustomImage({
  src,
  width,
  height,
  alt,
  padding,
}: {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  padding?: string;
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`${padding}`}
    />
  );
}
