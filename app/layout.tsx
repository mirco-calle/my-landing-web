import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

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
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
