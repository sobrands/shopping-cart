import React from "react";

import { getProductsInCategory } from "@/lib/data";

const Products = async ({ category }) => {
  const products = await getProductsInCategory(category);
  return <div>Products</div>;
};

export default Products;
