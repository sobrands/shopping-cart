"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import NavLink from "./NavLink";
import NavBag from "./NavBag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MdMenu } from "react-icons/md";

const NavBar = () => {
  const pathname = usePathname();
  const storePath = pathname.includes("store") && !pathname.includes("product");
  return (
    <header
      className={cn(
        storePath ? "flex" : "md:flex",
        "items-center justify-between px-8 py-6 mb-10",
      )}
    >
      {storePath ? (
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0">
                <MdMenu className="text-3xl hover:cursor-pointer" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-40 ml-6"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuItem asChild>
                <Link href="/store" className="hover:cursor-pointer">
                  View All
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/store/electronics"
                  className="hover:cursor-pointer"
                >
                  Electronics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/store/jewelery" className="hover:cursor-pointer">
                  Jewelery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/store/men's clothing"
                  className="hover:cursor-pointer"
                >
                  Men&apos;s Clothing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/store/women's clothing"
                  className="hover:cursor-pointer"
                >
                  Women&apos;s Clothing
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}
      <Link href="/" className="hidden md:block text-4xl font-bold">
        Shop.
      </Link>
      <div className="flex gap-8 justify-between items-center md:pr-8">
        <NavLink />
        <NavBag />
      </div>
    </header>
  );
};

export default NavBar;
