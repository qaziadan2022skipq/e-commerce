import Link from "next/link";
import React from "react";
import NavbarMobileMenu from "./Navbar.Mobile.Menu";
import { ShoppingCart } from "lucide-react";
import NavSearchBar from "./Nav.Searchbar";
import NavbarIcons from "./Navbar.Icons";
import { navbarConstants } from "@/constants/navbar.constants";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile screen */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">Adan Store</div>
        </Link>
        <NavbarMobileMenu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8  h-full ">
        {/* Left Section */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"} className="flex gap-2">
            <ShoppingCart className="text-pink-500" />
            <div className="text-md tracking-wide">Adan Store</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            {
                navbarConstants.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.name}
                    </Link>
                ))
            }
          </div>
        </div>
        {/* Right section */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
        <NavSearchBar />
        <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
