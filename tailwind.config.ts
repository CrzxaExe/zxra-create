import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#3b4763",
          800: "#2a3040",
          900: "#1f2430",
          950: "#1b1f29",
        },
        base: {
          upascent: "#FCE38A",
          ascent: "#0E5F76",
          upfloor: "#083D56",
          floor: "#0C2233",
        },
      },
      fontFamily: {
        valorant: ["var(--font-valorant)"],
        paprika: ["var(--font-paprika)"],
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
