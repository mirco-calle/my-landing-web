"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";
import { itemsNavbar, socialNetworks } from "@/data";

const Header = () => {
  const router = usePathname();
  return (
    <MotionTransition
      position="botton"
      className="absolute z-40 inline-block w-full top-5 md:top-5 px-6 md:px-20"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-3xl md:text-4xl font-bold text-center md:text-left">
              Mirco
              <span className="text-gradient"> Dev </span>
              <br />
              <span className="text-xs md:text-sm text-slate-400 font-normal">
                Automatización & Sistemas Inteligentes
              </span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7 md:hidden">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-tech-400 hover:scale-110"
              >
                {logo}
              </Link>
            ))}
          </div>
          <nav className="max-768:hidden">
            <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full glass">
              {itemsNavbar.map((item) => (
                <div
                  key={item.id}
                  className={`px-3 py-2 transition duration-300 rounded-full cursor-pointer hover:bg-tech-500/20
                         ${
                           router === item.link &&
                           "bg-tech-500/30 text-tech-400"
                         }`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
