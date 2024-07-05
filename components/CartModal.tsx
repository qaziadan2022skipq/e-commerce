"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const isCartItems: boolean = true;
  return (
    <div className="w-max absolute p-4 rounded-lg  shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {isCartItems ? (
        <>
        <h2 className="text-lg font-semibold">Shopping cart</h2>
          <div className="flex flex-col gap-8">
            {/* Items */}

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
                width={72}
                height={96}
                alt=""
                className=" object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">shipping and taxes calculated at checkout.</p>
            <div className="flex justify-between text-sm">
              <button className="py-3 px-4 ring-2 ring-gray-300 rounded-lg">View Cart</button>
              <button className="py-3 px-4 rounded-lg bg-black text-white ">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default CartModal;
