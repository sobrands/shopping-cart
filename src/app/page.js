import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getCategories } from "@/lib/data";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="flex flex-col items-center justify-center gap-8 p-12 h-[700px]">
      <h1 className="text-4xl font-bold">Welcome to Shop.</h1>
      <p>Here you can shop as much as you want because this is, Shop.</p>
      <Button variant="outline" asChild>
        <Link href="/store">Shop Now</Link>
      </Button>
      <div className="hidden md:flex md:gap-6">
        {categories.map((category, index) => (
          <Button variant="link" key={index} className="p-6" asChild>
            <Link href={`/store/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </Button>
        ))}
      </div>
    </main>
  );
}
