import React from "react";
import Image from "next/image";
export function CustomImage({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}) {
  return <Image src={src} width={width} height={height} alt={alt} />;
}
