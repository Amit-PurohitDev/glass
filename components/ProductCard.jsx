// import { getDiscountedPricePercentage } from "@/utils/helper";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ prod }) => {
  console.log(prod);
  return (
    <Link
      href={`/product/1`}
      className="h-[350px] transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <div className="w-full h-[275px] bg-[#f5f5f5] rounded-sm">
        <img
          className="w-full object-contain object-center h-full"
          src={prod.image.src}
        />
      </div>
      <div className="p-4 h-half text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;3123</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            34 % off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
