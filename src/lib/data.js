"use server";

export async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
}

export async function getProductsInCategory(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    { cache: "no-store" },
  );
  return res.json();
}
