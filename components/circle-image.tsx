import Image from "next/image";
import { FC } from "react";

interface CircleImageProps {
  className?: string;
  width?: number;
  height?: number;
}

export const CircleImage: FC<CircleImageProps> = ({
  className = "",
  width = 300,
  height = 300,
}) => {
  return (
    <div
      className={`bottom-0 right-0 hidden md:inline-block md:absolute ${className}`}
    >
      <Image
        src="/circles.png"
        width={width}
        height={height}
        alt="Círculo decorativo"
        className="w-full h-full"
        priority={false}
        quality={75}
      />
    </div>
  );
};
