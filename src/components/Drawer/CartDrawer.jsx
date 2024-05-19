"use client";
import React, { useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

const BuyDrawer = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  let inCart;
  if (cartItems.find((item) => item.id === info.id)) {
    inCart = true;
  } else {
    inCart = false;
  }

  function handleIncrement() {
    if (isNaN(quantity) || quantity === "") {
      setQuantity(1);
      return;
    }
    setQuantity(parseInt(quantity) + 1);
  }

  function handleDecrement() {
    if (quantity === 0) {
      return;
    }
    setQuantity(parseInt(quantity) - 1);
  }

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleClick() {
    const cartItem = {
      id: info.id,
      name: info.title,
      price: info.price,
      quantity: quantity,
      img: info.image,
    };
    const newArray = [...cartItems];
    if (inCart) {
      const idx = newArray.findIndex((item) => item.id === info.id);
      newArray[idx] = cartItem;
      setCartItems(newArray);
    } else {
      const newArray = [...cartItems, cartItem];
      setCartItems(newArray);
    }
    alert("Item added to cart! Congratulations!");
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full md:w-60">
          {inCart ? "In Bag" : "Add to Bag"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Item</DrawerTitle>
            <DrawerDescription>{info.title}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex flex-col gap-10 items-center md:items-start">
            <div>
              <div className="flex items-center">
                <label htmlFor="quantity">Quantity:</label>
                <div className="flex gap-1">
                  <Button variant="ghost" onClick={handleDecrement}>
                    -
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    min="0"
                    className="w-12 text-center"
                    value={quantity}
                    onChange={handleChange}
                  />
                  <Button variant="ghost" onClick={handleIncrement}>
                    +
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <p>Total:</p>
                <p>{quantity * info.price}</p>
              </div>
            </div>
            <DrawerFooter className="w-full">
              <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={handleClick}
              >
                {inCart ? "Edit Bag" : "Add to Bag"}
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BuyDrawer;
