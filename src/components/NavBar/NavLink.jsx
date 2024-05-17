import React from "react";
import Link from "next/link";

const NavLink = () => {
  return (
    <div className="flex gap-4">
      <Link
        className="font-semibold hover:underline underline-offset-4 decoration-2"
        href="/"
      >
        Home
      </Link>
      <Link
        className="font-semibold hover:underline underline-offset-4 decoration-2"
        href="/store"
      >
        Store
      </Link>
    </div>
  );
};

export default NavLink;
