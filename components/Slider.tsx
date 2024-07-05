"use client";

import { sliderConstants } from "@/constants/homepage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [current, setCurrent] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prevState) =>
  //       prevState === sliderConstants.length - 1 ? 0 : prevState + 1
  //     );
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {sliderConstants.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl xl:text-5xl font-semibold">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl xl:text-8xl font-semibold">
                {slide.imageTitle}
              </h1>
              <Link href={slide.url}>
                <button className="px-4 py-2 bg-black text-white rounded-lg">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* Image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                fill
                sizes="100%"
                className="object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {sliderConstants.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-neutral-500 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
