"use client";

import React, { useContext, useMemo } from "react";

import { CartContext } from "@/context/CartContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBag = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (initialVal, item) => initialVal + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  function handleDelete(deleteItem) {
    const array = [...cartItems];
    const newArray = array.filter((item) => item.id !== deleteItem.id);
    setCartItems(newArray);
  }

  function handlePurchase() {
    alert("Bought! LFGGGG");
  }

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <MdOutlineShoppingBag className="text-3xl" />
            <p className="absolute top-[11px] left-[12px] text-[10px] font-semibold">
              {cartItems.length}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent align="end">
          <div className="flex flex-col px-6 py-3 w-[300px] md:w-[450px]">
            <h1 className="text-lg font-bold">Shopping Bag</h1>
            {cartItems.length > 0 ? (
              <div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className="border rounded-xl border-gray-400
                      flex justify-center items-center aspect-square p-5"
                        >
                          <div>
                            <Link href={`/store/product/${item.id}`}>
                              <Image
                                src={item.img}
                                height={50}
                                width={50}
                                alt="Product image"
                              ></Image>
                            </Link>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <p className="font-semibold">{item.name}</p>
                          <p>Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <Button
                          variant="ghost"
                          className="p-2"
                          onClick={() => handleDelete(item)}
                        >
                          <FaTrash className="text-lg" />
                        </Button>
                        <p className="font-bold">
                          ${item.quantity * item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <p className="my-4 text-xl font-semibold">
                  Total: <span className="font-normal">${totalPrice}</span>
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={handlePurchase}
                  >
                    Checkout
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/bag">See in Bag</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <p className="my-4">Bag is empty!</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavBag;
