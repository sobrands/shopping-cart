import React from "react";
import { Suspense } from "react";

import Loading from "./loading";
import Products from "@/components/Products/Products";

const Page = async ({ params }) => {
  const category = params.category;
  return (
    <div className="relative h-screen w-screen">
      <Suspense fallback={<Loading />}>
        <Products category={category} />
      </Suspense>
    </div>
  );
};

export default Page;
