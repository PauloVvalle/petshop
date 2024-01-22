import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { SheetSide } from "./Sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <SheetSide />
        </div>
        <div className="flex justify-center w-full">
          <Link href="/">
            <span className="inline-block font-bold">PetShop</span>
          </Link>
        </div>
        <div className="flex justify-end">
          <nav className="flex items-center space-x-1 gap-3">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
