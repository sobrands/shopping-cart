import React from "react";

import { getProducts, getProductsInCategory } from "@/lib/data";
import ProductCard from "./ProductCard";

const Products = async ({ category }) => {
  const products =
    category === undefined
      ? await getProducts()
      : await getProductsInCategory(category);
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-3 px-6 pb-10 gap-3
      max-w-6xl"
    >
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
