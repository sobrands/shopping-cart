"use client";
import React, { useContext } from "react";
import Image from "next/image";

import { CartContext } from "@/context/CartContext";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";

const Page = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  function handleIncrement(id) {
    const newArray = [...cartItems];
    const idx = newArray.findIndex((item) => item.id === id);
    const currentQuantity = newArray[idx].quantity;
    const updateItem = {
      ...newArray[idx],
      quantity: currentQuantity + 1,
    };
    newArray[idx] = updateItem;
    setCartItems(newArray);
  }

  function handleDecrement(id) {
    const newArray = [...cartItems];
    const idx = newArray.findIndex((item) => item.id === id);
    const currentQuantity = newArray[idx].quantity;

    if (currentQuantity - 1 === 0) {
      handleDelete(newArray[idx]);
      return;
    }

    const updateItem = {
      ...newArray[idx],
      quantity: currentQuantity - 1,
    };
    newArray[idx] = updateItem;
    setCartItems(newArray);
  }

  function handleDelete(deleteItem) {
    const array = [...cartItems];
    const newArray = array.filter((item) => item.id !== deleteItem.id);
    setCartItems(newArray);
  }

  function handlePurchase() {
    alert("Checked out!");
  }

  return (
    <div className="flex flex-col mt-[-50px] p-5 gap-3">
      <BackButton />
      <h1 className="text-xl font-semibold p-3">Shopping Bag</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row md:justify-between gap-5 p-3 pr-5">
          <div className="flex flex-col gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 items-center">
                <div
                  className="border rounded-xl border-gray-400
                      flex items-center justify-center p-2 md:p-10"
                >
                  <div>
                    <Image
                      src={item.img}
                      height={100}
                      width={100}
                      alt="Product Image"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:flex-row">
                  <div className="w-[150px]">
                    <p className="font-semibold truncate">{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Button
                      variant="outline"
                      className="w-2 h-8"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </Button>
                    <p>{item.quantity}</p>
                    <Button
                      variant="outline"
                      className="w-2 h-8"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end md:flex-row md:items-center gap-10">
                  <Button
                    variant="ghost"
                    className="p-2"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="text-lg" />
                  </Button>
                  <p className="font-semibold">${item.quantity * item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-6 border rounded-xl border-gray-500
              p-10 md:self-start"
          >
            <h1 className="text-xl font-bold">Order Summary</h1>
            <div className="flex gap-10">
              <p>
                Total (
                {cartItems.reduce(
                  (initialVal, item) => initialVal + item.quantity,
                  0,
                )}{" "}
                items)
              </p>
              <p className="font-semibold">
                $
                {cartItems.reduce(
                  (initialVal, item) => initialVal + item.quantity * item.price,
                  0,
                )}
              </p>
            </div>
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={handlePurchase}
            >
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <p className="p-3">Bag is empty!</p>
      )}
    </div>
  );
};

export default Page;
