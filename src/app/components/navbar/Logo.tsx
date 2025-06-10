import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/Logo_Mennara_Fiks.png"
      alt="Logo Warung Mennara"
      width={40}
      height={40}
    />
    <span className="text-lg font-bold text-[#432100]">WARUNG MENNARA</span>
  </div>
);

export default Logo;
