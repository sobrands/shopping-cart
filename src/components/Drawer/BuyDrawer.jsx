"use client";
import React, { useState } from "react";

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

  function handlePurchase() {
    alert("Item bought! Congratulations!");
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full md:w-60 bg-blue-500 hover:bg-blue-600">
          Buy Now
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
                onClick={handlePurchase}
              >
                Buy Now
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
