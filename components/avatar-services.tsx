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
        width={300}
        height={300}
        className="w-full h-full"
        alt="Avatar servicios"
        priority
        quality={75}
      />
    </MotionTransition>
  );
};
