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
  title: {
    default: "Warung Mennara",
    template: "%s | Warung Mennara",
  },
  description:
    "Warung Mennara adalah tempat makan terbaik dengan cita rasa khas dan harga bersahabat.",
  keywords: [
    "warung",
    "kuliner",
    "makanan tradisional",
    "urutan",
    "enak",
    "mennara",
  ],
  metadataBase: new URL("https://warungmennara.vercel.app"),
  openGraph: {
    title: "Warung Mennara",
    description:
      "Kuliner tradisional dengan rasa khas, hanya di Warung Mennara.",
    url: "https://warungmennara.vercel.app",
    siteName: "Warung Mennara",
    images: [
      {
        url: "/Logo_Mennara_Fiks.png",
        width: 1200,
        height: 630,
        alt: "Warung Mennara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
