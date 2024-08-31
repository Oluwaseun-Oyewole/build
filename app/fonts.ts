import { Outfit } from "next/font/google";
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
