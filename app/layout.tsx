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
  title: "MircoDev",
  description: "Innovación en desarrollo web y soluciones tecnológicas.",
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
