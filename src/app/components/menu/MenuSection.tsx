import Image from "next/image";
import menuList from "./data";

export default function MenuSection() {
  return (
    <section className="bg-[#E8C8A1] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">MENU CEPAT, ENAK, & PRAKTIS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menuList.map((item, index) => (
          <div
            key={index}
            className="bg-[#d8c2ac]  rounded-xl shadow overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
