import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Topbar from "@/components/topbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const valorant = localFont({
  src: "./fonts/VALORANT-Regular.woff2",
  variable: "--font-valorant",
  weight: "100 900",
});
const paprika = localFont({
  src: "./fonts/Paprika-Regular.ttf",
  variable: "--font-paprika",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zxra Create",
  description: "Zxra for our apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${valorant.variable} ${paprika} bg-gradient-to-br  from-primary-900 to-primary-800 text-white`}
      >
        <Topbar full={false} home={true} />
        {children}
      </body>
    </html>
  );
}
