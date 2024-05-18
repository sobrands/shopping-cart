import React from "react";

import { getProducts, getProductsInCategory } from "@/lib/data";
import ProductCard from "./ProductCard";

const Products = async ({ category }) => {
  const products =
    category === undefined
      ? await getProducts()
      : await getProductsInCategory(category);
  console.log(products);
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 px-6 pb-10 gap-3
      max-w-6xl"
    >
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            title={product.title}
            price={product.price}
            imgSrc={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
