import React from "react";
import { Suspense } from "react";

import Products from "@/components/Products/Products";

const Page = async ({ params }) => {
  const category = params.category;
  return (
    <div className="relative h-screen w-screen">
      <Suspense>
        <Products category={category} />
      </Suspense>
    </div>
  );
};

export default Page;
