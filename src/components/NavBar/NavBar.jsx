import React from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import NavBag from "./NavBag";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 mb-10">
      <Link href="/" className="text-4xl font-bold">
        Shop.
      </Link>
      <div className="flex gap-8 items-center pr-8">
        <NavLink />
        <NavBag />
      </div>
    </header>
  );
};

export default NavBar;
