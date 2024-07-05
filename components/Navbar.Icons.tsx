"use client";

import { Bell, ShoppingBag, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <User2 className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-lg top-12 left-0 text-sm shadow-md z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Bell className="cursor-pointer" />
      <div>
        <ShoppingBag
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prevState) => !prevState)}
        />
        <div className=" absolute -top-4 -right-4 w-6 h-6 bg-pink-500 rounded-full text-white text-sm flex items-start justify-center">2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavbarIcons;
