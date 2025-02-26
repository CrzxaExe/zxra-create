import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Topbar from "@/components/topbar";
import { auth } from "@/auth";

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
  description: "Zxra here is for your apps",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${valorant.variable} ${paprika.variable} bg-base-floor text-white`}
      >
        <Topbar full={session ? true : false} home={true} session={session} />
        {children}
      </body>
    </html>
  );
}
