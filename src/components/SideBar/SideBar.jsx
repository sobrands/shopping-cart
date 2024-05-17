"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Accordian from "./Accordian";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="flex flex-col gap-6 px-8">
      <Link
        onClick={toggleOpen}
        className="text-xl font-semibold"
        href="/store"
      >
        View All
      </Link>
      <Accordian isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SideBar;
