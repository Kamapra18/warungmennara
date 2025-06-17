'use client';

import Image from "next/image";
import HeroButtons from "./HeroButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#D4AA7D] pt-24 px-4 md:px-16 pb-10 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4e2a1e] mb-4 leading-snug">
          LEZATNYA MOMEN HANGAT, TANPA REPOT DI DAPUR
        </h1>
        <p className="text-[#4e2a1e] mb-6">
          Untuk kamu yang super sibuk, tapi tetap ingin sajikan makanan nikmat
          untuk keluarga tercinta
        </p>
        <HeroButtons />
      </div>

      
<div className="w-full max-w-sm aspect-square relative overflow-visible rounded-full">
  <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'rgba(217, 217, 217, 0.5)' }} />
  <Image
    src="/menu/hero.png"
    alt="Menu Hero"
    fill
    className="object-contain z-10 relative"
  />
</div>


    </section>
  );
};

export default Hero;
