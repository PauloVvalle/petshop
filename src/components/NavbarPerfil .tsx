import Link from "next/link";
import React from "react";
import { SheetSide } from "./Sheet";
import Search from "./Search";
import { FaUser } from "react-icons/fa";

const NavbarPerfil = () => {
  return (
<header className="sticky h-15 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto flex flex-row lg:flex-row h-16 items-center justify-between px-4 sm:px-6 lg:px-8 ">
    <div className="flex flex-row items-center justify-center lg:justify-start w-full ">
      <div className="grow text-center sm:mx-2">
        <Link href="/">
          <span className="inline-block font-bold">PetShop</span>
        </Link>
      </div>
    </div>
  </div>
</header>

  );
};

export default NavbarPerfil;
