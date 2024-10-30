"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar, socialNetworks } from "@/data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const router = usePathname();
  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav className="md:hidden">
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary
                         ${router === item.link && "bg-secondary"}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
      <div className="flex items-center justify-center gap-7 max-768:hidden">
        {socialNetworks.map(({ logo, src, id }) => (
          <Link
            key={id}
            href={src}
            target="_blank"
            className="transition-all duration-300 hover:text-secondary"
          >
            {logo}
          </Link>
        ))}
      </div>
    </MotionTransition>
  );
};

export default Navbar;
