import Image from "next/image";
import menuList from "./data";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#E8C8A1] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#4B3A2F]">
        MENU CEPAT, ENAK, & PRAKTIS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#5C4433] mb-1">{item.alt}</h3>
              <p className="text-base font-bold text-[#B3541E]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
