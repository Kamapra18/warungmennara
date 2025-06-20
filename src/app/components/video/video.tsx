"use client";

import React, { useState, useEffect, useRef } from "react";
import videos from "./data";

export default function VideoUlasanPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = videos[currentIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <main
      id="video-ulasan"
      className="bg-[#D4AA7D] px-4 py-10 flex flex-col items-center gap-6"
    >


      <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] rounded-2xl shadow-2xl bg-[#e7c7a0] p-4 flex flex-col items-center">
        <div className="w-full aspect-[9/16] max-h-[75vh] rounded-xl overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={currentVideo.videoUrl}
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-center mt-4 text-[#4e2a1e] font-medium text-sm md:text-base tracking-wide">
          {currentVideo.title}
        </h2>

        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
          }
          className="absolute left-[-1.2rem] top-1/2 -translate-y-1/2 bg-[#4e2a1e]/80 text-white p-2 rounded-full shadow-lg hover:bg-[#4e2a1e] transition text-lg md:text-xl"
          aria-label="Sebelumnya"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
          className="absolute right-[-1.2rem] top-1/2 -translate-y-1/2 bg-[#4e2a1e]/80 text-white p-2 rounded-full shadow-lg hover:bg-[#4e2a1e] transition text-lg md:text-xl"
          aria-label="Selanjutnya"
        >
          ›
        </button>
      </div>
    </main>
  );
}
