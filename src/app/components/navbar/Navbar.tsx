"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#D4AA7D] px-4 py-2 flex justify-between items-center shadow-md">
      <Logo />
      <div className="hidden md:flex gap-8">
        <NavLinks />
      </div>
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </nav>
  );
};

export default Navbar;
