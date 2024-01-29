"use client"
import React, { useState, useEffect, useRef, useContext, MouseEvent } from 'react';
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthContext, AuthProvider, useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Button } from "./ui/button";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Search from "./Search";
import { ModeToggle } from "./ModeToggle";

export function SheetAdmin() {
  const { userInfo }: any = useContext(AuthContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  
  


  let userImage = 'user.jpg';

  if (userInfo && userInfo.user && userInfo.user.user_image) {
    userImage = userInfo.user.user_image;
  }
  const authContext = useAuth();
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const { logout } = authContext;

  const onLogout = async () => {
    logout();
    router.push(`/login`);
  }

  return (
    <>
      <AuthProvider>
        <button className="left-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Fechar Sidebar' : <MenuIcon />}
        </button>

        {isOpen && (
          <Command ref={sidebarRef} className="fixed top-0 left-0 h-screen w-60 max-w-full border shadow-md">
          <div className="flex justify-around items-center mt-10">
            <Link href="/">
            <span className="inline-block font-bold">PetShop</span>
            </Link>
            <ModeToggle />
          </div>
            <div className="flex justify-around items-center mt-10">
            <div className="grid gap-4 py-4">
              <div> {userInfo && userInfo.user && 
              <div className="flex gap-2 items-center ">
              <Avatar> 
              <AvatarImage src={`${process.env.NEXT_PUBLIC_BACKEND}/imagem/${userInfo.user.user_image}`}/>
              <AvatarFallback>{userInfo.user.user_name.charAt(0)}</AvatarFallback>
              </Avatar>
              
                  <h1> {userInfo && `${userInfo.user.user_name.split(" ")[0]} (${userInfo.user.user_role})`}</h1>              </div>}</div>
              </div>
            </div>
            <Search className="max-w-48 mt-5" />
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Admin" >
                <CommandItem className="px-5">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <Link href="/">
                    <span>Criar produtos</span>
                  </Link>
                </CommandItem>
                <CommandItem className="px-5">
                  <FaceIcon className="mr-2 h-4 w-4" />
                  <Link href="/">
                    <span>Modificar produtos</span>
                  </Link>
                </CommandItem>
                <CommandItem className="px-5">
                  <RocketIcon className="mr-2 h-4 w-4" />
                  <Link href="/admin">
                    <span>admin</span>
                  </Link>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Setting">
            <CommandItem className="px-5">
              <PersonIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Profile</span>
              </Link>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className="px-5">
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Mail</span>
              </Link>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className="px-5">
              <GearIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Settings</span>
              </Link>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem className="px-5">
            <div className="flex items-center space-x-2">
                  <FaSignOutAlt />
                  <Link href="/login" onClick={onLogout}>{userInfo ? 'sair' : 'entrar'}</Link>
                </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
        )}
        </AuthProvider>
        </>
    )
  }
