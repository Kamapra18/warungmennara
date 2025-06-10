const links = ['Home', 'Menu', 'Testimonials', 'FAQ', 'Contact'];

const NavLinks = () => (
  <>
    {links.map((link) => (
      <a
        key={link}
        href={`#${link.toLowerCase()}`}
        className="text-[#432100] font-semibold hover:underline">
        {link}
      </a>
    ))}
  </>
);

export default NavLinks;
