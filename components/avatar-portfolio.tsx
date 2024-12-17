"use client";
import MotionTransition from "./transition-component";
import Image from "next/image";
import { FC } from "react";

interface AvatarPortfolioProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AvatarPortfolio: FC<AvatarPortfolioProps> = ({
  className = "",
  width = 300,
  height = 300,
}) => {
  return (
    <MotionTransition
      position="botton"
      className={`bottom-0 left-0 hidden md:inline-block md:absolute ${className}`}
    >
      <Image
        src="/avatar-works.png"
        width={width}
        height={height}
        className="w-full h-full"
        alt="Avatar portfolio"
        priority
        quality={75}
      />
    </MotionTransition>
  );
};
