"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d2a675] py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
        <div>
          <Image
            src="/Logo_Mennara_Fiks.png"
            alt="Logo Warung Mennara"
            width={96}
            height={96}
            className="h-24 w-auto"
            priority
          />
        </div>

        <div className="text-sm text-black font-bold">© 2023 FOOD SHOP</div>

        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-black hover:text-blue-500">
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/men_nara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="text-black hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
