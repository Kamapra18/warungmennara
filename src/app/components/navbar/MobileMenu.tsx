type Props = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: Props) => {
  const links = ["Home", "Menu", "Testimonials", "FAQ", "Contact"];

  return (
    <div className="absolute top-14 left-0 right-0 bg-[#E8C8A1] flex flex-col items-center gap-4 py-4 shadow-md z-50">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onClose}
          className="text-[#432100] font-semibold">
          {link}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
