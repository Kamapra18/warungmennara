"use client";

import Image from "next/image";
import { useState } from "react";
import menuList from "./data";
import Modal from "./ModalMenu";

export default function MenuSection() {
  type MenuItem = {
    image: string;
    alt: string;
    price: string;
    title?: string;
    images?: string[];
    variants?: string[];
  };

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section id="menu" className="bg-[#E8C8A1] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#4B3A2F]">
        MENU CEPAT, ENAK, & PRAKTIS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menuList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className="bg-[#D4AA7D] rounded-xl p-4 text-white shadow-md cursor-pointer hover:scale-105 transition-transform">
            <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#4A2B0B]">{item.alt}</h3>
            <p className="text-sm mt-1 text-[#4A2B0B]">{item.price}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <h3 className="text-xl font-bold mb-2">{selectedItem.alt}</h3>

          {selectedItem.images && selectedItem.images.length > 0 ? (
            <ManualSlider images={selectedItem.images} />
          ) : (
            <Image
              src={selectedItem.image}
              alt={selectedItem.alt}
              width={500}
              height={400}
              className="rounded-md object-cover mb-3"
            />
          )}

          <div className="space-y-2">
            <p className="text-sm text-gray-800 font-semibold">
              {selectedItem.title || "Pork Slice Marinas 500gr"}
            </p>

            <p className="text-sm text-gray-600">{selectedItem.price}</p>

            {selectedItem.variants &&
            selectedItem.variants.length > 0 &&
            selectedItem.variants[0] !== "-" ? (
              <>
                <p className="text-sm text-gray-800 mt-2 font-medium">
                  Tersedia varian:
                </p>
                <ul className="list-disc text-left list-inside text-sm text-gray-700">
                  {selectedItem.variants.map((variant, idx) => (
                    <li key={idx}>{variant}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-gray-600 italic mt-2">
                Tidak ada varian
              </p>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}

function ManualSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-72 mb-3 rounded-lg overflow-hidden">
      <Image
        src={images[current]}
        alt={`Slide ${current}`}
        fill
        className="object-cover transition-all duration-500"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black px-2 py-1 rounded-full shadow text-xl">
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black px-2 py-1 rounded-full shadow text-xl">
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-black" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
