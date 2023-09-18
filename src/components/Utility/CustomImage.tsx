import Image from "next/image";
import React from "react";

function CustomImage({ src, className, alt, height, width }: any) {
  return (
    <>
      <Image
        src={src}
        className={className}
        alt={alt ? alt : "image"}
        loading="lazy"
        width={width}
        height={height}
      />
    </>
  );
}

export default CustomImage;
