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
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#4B3A2F]">
        MENU CEPAT, ENAK, & PRAKTIS
      </h2>
      <p className="text-[#4B3A2F] text-sm sm:text-base mb-10">
        Klik salah satu menu untuk melihat detail dan melakukan pemesanan
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {menuList.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedItem(item)}
            className="relative bg-[#D4AA7D] rounded-xl p-3 sm:p-4 text-white shadow-md hover:scale-105 transition-transform text-center">
            <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-[#4A2B0B] text-center">
              {item.alt}
            </h3>
            <p className="text-sm mt-1 text-[#4A2B0B] text-center">
              {item.price}
            </p>

            <a
              href={`https://wa.me/6281237735005?text=Apakah%20${encodeURIComponent(
                item.alt
              )}%20masih%20tersedia%3F`}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-[#a4551b] justify-center text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-[#873e12] transition">
              Order Now
            </a>
          </button>
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <div className="max-w-xs sm:max-w-md w-full">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {selectedItem.alt}
            </h3>

            {selectedItem.images && selectedItem.images.length > 0 ? (
              <ManualSlider images={selectedItem.images} />
            ) : (
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                width={500}
                height={400}
                className="rounded-md object-cover mb-3 w-full"
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

              <a
                href={`https://wa.me/6281237735005?text=Apakah%20${encodeURIComponent(
                  selectedItem.alt
                )}%20masih%20tersedia%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Order via WhatsApp
              </a>
            </div>
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
    <div className="relative w-full h-60 sm:h-72 mb-3 rounded-lg overflow-hidden">
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
