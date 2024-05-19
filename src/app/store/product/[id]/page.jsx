import React from "react";
import { Suspense } from "react";
import Image from "next/image";

import { getProductById } from "@/lib/data";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import BuyDrawer from "@/components/Drawer/BuyDrawer";
import CartDrawer from "@/components/Drawer/CartDrawer";

const Page = async ({ params }) => {
  const productInfo = await getProductById(params.id);
  return (
    <div className="flex flex-col mt-[-50px] p-5 gap-3">
      <Suspense>
        <BackButton />
        <div className="flex flex-col md:flex-row gap-10 p-3">
          <div
            className="border rounded-xl border-gray-400 h-[450px] md:w-[300px] lg:w-[450px] 
          md:shrink-0 p-5 flex justify-center items-center"
          >
            <div>
              <Image
                src={productInfo.image}
                width={150}
                height={150}
                alt="Product Image"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-semibold">{productInfo.title}</h1>
              <p className="font-semibold">${productInfo.price}</p>
              <p className="text-sm">
                Stock: <span>{productInfo.rating.count}</span>
              </p>
            </div>
            <p className="md:pr-5">{productInfo.description}</p>
            <div className="flex flex-col gap-3">
              <BuyDrawer info={productInfo} />
              <CartDrawer info={productInfo} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
