"use client";
import MotionTransition from "./transition-component";
import Image from "next/image";

export const Avatar = () => {
  return (
    <MotionTransition
      position="botton"
      className="bottom-0 right-0 hidden md:inline-block md:absolute "
    >
      <Image
        src="/avatar-1.png"
        width={300}
        height={300}
        className="w-full h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};
