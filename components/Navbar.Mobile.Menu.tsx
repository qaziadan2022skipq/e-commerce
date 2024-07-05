"use client";

import { navbarConstants } from "@/constants/navbar.constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <MenuIcon onClick={() => setOpen((prevState) => !prevState)} />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {navbarConstants.map((link) => (
            <Link href={link.href}>{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarMobileMenu;
