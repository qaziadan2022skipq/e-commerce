import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/14504994/pexels-photo-14504994.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4418745/pexels-photo-4418745.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">my description</div>
        <button className="w-max rounded-3xl text-black ring-1 px-4 py-2 text-sm ring-black hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
