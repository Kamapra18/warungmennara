import Image from "next/image";
import ulasan from "./data";

export default function UlasanSection() {
  return (
    <section id="testimonials" className="bg-[#D4AA7D] py-16 px-4 text-center">
      <h2 className="text-3xl text-[#4e2a1e] font-bold mb-2">APA KATA MEREKA?</h2>
      <p className="text-sm text-gray-700 mb-10">
        Tentang Warung Mennara 
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ulasan.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-2 flex justify-center items-center">
            <Image
              src={item.image ?? "/placeholder.png"}
              alt={item.alt ?? "Testimoni"}
              width={400}
              height={200}
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
