"use server";

export async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
}

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export async function getProductsInCategory(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  return res.json();
}
