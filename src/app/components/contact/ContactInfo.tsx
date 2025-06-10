import { MapPin, Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-[#e0b07d] text-black">
          <MapPin size={20} />
        </div>
        <div>
          <p className="font-bold">Alamat</p>
          <p>
            Jl. Batur Sari II No.61, Padangsambian Kaja, Kec. Denpasar Bar.,
            Kota Denpasar, Bali
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-[#e0b07d] text-black">
          <Phone size={20} />
        </div>
        <div>
          <p className="font-bold">No Telp</p>
          <p>+62 812-3773-5005</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-[#e0b07d] text-black">
          <Mail size={20} />
        </div>

        <div>
          <p className="font-bold">EMAIL</p>
          <p>warung.men.nara2024@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
