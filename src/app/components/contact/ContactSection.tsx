import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";
import { SectionHeader } from "./SectionHeader";

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#E8C8A1] text-[#2c1d0b]">
      <div className="text-center py-10 px-10">
        <SectionHeader
          title="Get in Touch"
          subtitle="Ada pertanyaan atau ingin pesan langsung? Hubungi kami di bawah ini, ya!"
        />
      </div>
      <div className="bg-[#D4AA7D] py-10 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="text-2xl font-bold mb-2">INFORMASI KONTAK</h3>
          <p>Hubungi kami langsung di sini:</p>
        </div>
        <ContactInfo />
      </div>
      <ContactMap />
    </section>
  );
};
