import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/14504994/pexels-photo-14504994.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill
              sizes="20vw"
              alt=""
              className="object-cover rounded-lg"
            />
          </div>
          <h1>Category name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
