import Image from "next/image";
import React from "react";

export const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circles.png"
        width={300}
        height={300}
        alt="Circle"
        className="w-full h-full"
      />
    </div>
  );
};
