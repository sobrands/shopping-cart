"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

const Accordian = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-8 hover:cursor-pointer"
      >
        <p className="text-xl font-semibold ">Categories</p>
        <FaChevronDown
          className={cn(
            "transition duration-150 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </div>
      <div
        className={cn(
          "transition duration-300 ease-in-out",
          isOpen ? "scale-y-100" : "scale-y-0",
          "origin-top",
          "flex flex-col gap-2",
        )}
      >
        <Link className="hover:underline" href="/store/electronics">
          Electronics
        </Link>
        <Link className="hover:underline" href="/store/jewelery">
          Jewelery
        </Link>
        <Link className="hover:underline" href="/store/men's clothing">
          Men&apos;s Clothing
        </Link>
        <Link className="hover:underline" href="/store/women's clothing">
          Women&apos;s Clothing
        </Link>
      </div>
    </div>
  );
};

export default Accordian;
