import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import CardDrawer from "@/components/Drawer/CardDrawer";

const ProductCard = ({ product }) => {
  return (
    <div
      className="border rounded-xl border-gray-400 
        flex flex-col gap-8 p-5 aspect-[6/7]
        hover:cursor-pointer"
    >
      <div className="h-3/4 w-full flex items-center justify-center">
        <Link href={`/store/product/${product.id}`}>
          <Image
            src={product.image}
            width={100}
            height={80}
            alt="Product Image}"
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-3/4">
          <Link href={`/store/product/${product.id}`}>
            <p className="truncate font-semibold">{product.title}</p>
            <p>{`$${product.price}`}</p>
          </Link>
        </div>
        <CardDrawer info={product} />
      </div>
    </div>
  );
};

export default ProductCard;
