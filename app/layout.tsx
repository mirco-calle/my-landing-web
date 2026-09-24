import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import CoverParticles from "@/components/cover-particles";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirco Calle | Ingeniero Civil · Software & BIM",
  description:
    "Mirco Calle — Ingeniero Civil | Desarrollo de Software | IA y Automatización para la Construcción | BIM y Cálculo Estructural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className} suppressHydrationWarning>
        {/* Global Animated Particles Background */}
        <CoverParticles />

        {/* Content Layer - z-index: 10 */}
        <div className="relative z-10">
          <Header />
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
