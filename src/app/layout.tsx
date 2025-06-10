import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Warung Mennara",
  description: "",
    icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${bebasNeue.variable} 
        ${lora.variable} 
        antialiased
      `}>
        {children}
      </body>
    </html>
  );
}
