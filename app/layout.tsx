import type { Metadata } from "next";
import { type ReactNode } from "react";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "E shop",
  description: "E shop",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
