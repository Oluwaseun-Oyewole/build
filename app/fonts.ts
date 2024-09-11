import { Hanken_Grotesk, Outfit, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const ag = localFont({
  src: [
    {
      path: "../public/assets/fonts/ag.otf",
    },
  ],
  variable: "--font-telegraph",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "500", "600", "700"],
});

export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "500", "600", "700"],
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["300", "500", "600", "700"],
});
