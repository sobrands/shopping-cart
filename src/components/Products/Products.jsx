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
    <div className="flex flex-wrap">
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
