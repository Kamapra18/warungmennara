"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram,FaTiktok } from "react-icons/fa";

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

        <div className="text-sm text-black font-bold">© 2025 Warung Mennara</div>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61567495676660&_rdc=1&_rdr#"
            aria-label="Facebook"
            className="text-black hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/men_nara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="text-black hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@dapurmennara?_t=8qffhxe4kbk&_r=1"
            aria-label="TikTok"
            className="text-black hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer">
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
