"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="justify-start text-xl w-12"
      onClick={() => router.back()}
    >
      <FaArrowLeft />
    </Button>
  );
};

export default BackButton;
