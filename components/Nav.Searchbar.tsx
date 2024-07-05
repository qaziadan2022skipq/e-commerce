"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NavSearchBar = () => {
  const router = useRouter();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
        router.push(`/list?name=${name}`)
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-lg flex-1"
      action=""
      onSubmit={handleSearch}
    >
      <input
        name="name"
        className="flex-1 bg-transparent outline-none"
        type="text"
        placeholder="Search"
      />
      <button className="cursor-pointer">
        <Search className="text-black text-sm" />
      </button>
    </form>
  );
};

export default NavSearchBar;
