import React from "react";
import Image from "next/image";

import { MdOutlineShoppingBag } from "react-icons/md";

const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <div
      className="border rounded-xl border-gray-400 
        flex flex-col gap-8 p-5 aspect-[6/7]
        hover:cursor-pointer"
    >
      <div className="h-3/4 w-full flex items-center justify-center">
        <Image src={imgSrc} width={100} height={80} alt="Product Image}" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-3/4">
          <p className="truncate font-semibold">{title}</p>
          <p>{`$${price}`}</p>
        </div>
        <MdOutlineShoppingBag
          className="text-3xl self-end
              transition duration-300 ease-in-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default ProductCard;
