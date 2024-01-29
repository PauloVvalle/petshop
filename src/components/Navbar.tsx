import Link from "next/link";
import React from "react";
import { SheetSide } from "./Sheet";
import Search from "./Search";
import { FaUser } from "react-icons/fa";
import { HoverCardBar } from "./hoverCard";

const Navbar = () => {
  return (
    <header className="sticky h-15 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-row lg:flex-row h-16 items-center justify-between px-4 sm:px-6 lg:px-6 ">
        <div className="flex flex-row items-center justify-center lg:justify-start w-full ">
          <SheetSide />
          <div className="grow text-center sm:mx-2">
            <Link href="/">
              <span className="inline-block font-bold">PetShop</span>
            </Link>
          </div>
          <div className="flex lg:hidden  flex-row items-center space-x-2">
            <FaUser />
            <div className="flex flex-col lg:hidden xl:flex-col text-xs md:text-xs">
              <Link href="/login">
                <span>Entrar</span>
              </Link>
              <Link href="/register">
                <span>Cadastre-se</span>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:flex flex-row items-center space-x-2">
          <FaUser />

            <div className="flex flex-col text-xs lg:text-xs lg:flex lg:flex-col">
              <HoverCardBar>
              </HoverCardBar>
            </div>
          </div>
        </div>
      </div>
    </header>






  );
};


export default Navbar;
