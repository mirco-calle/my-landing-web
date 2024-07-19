"use client";
import MotionTransition from "./transition-component";
import Image from "next/image";

export const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={600}
        height={600}
        className="w-[600px] h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};
