import React from "react";
import Image from "next/image";
const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <div className="border">
      <Image src={imgSrc} width={200} height={200} alt="Image of product" />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
