"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React,{ useContext } from "react";
import { Button } from "./ui/button"
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AuthContext, AuthProvider, useAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";



const SHEET_SIDES = ["left"] as const 


type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  const { userInfo } :any = useContext(AuthContext);
  const router = useRouter();





let userImage = 'user.jpg';

if(userInfo && userInfo.user && userInfo.user.user_image) {
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
};

    return (
      <AuthProvider>
        <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet  key={side}>
          <div className="w-48">
          <SheetTrigger asChild>
            <Button size="icon" variant="link">
            <MenuIcon/>
                    </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <div className="grid gap-4 py-4">
              <SheetTitle> {userInfo && userInfo.user && 
              <div className="flex gap-2 items-center ">
              <Avatar> 
              <AvatarImage src={`${process.env.NEXT_PUBLIC_BACKEND}/imagem` + userInfo.user.user_image}/>
              <AvatarFallback>{userInfo.user.user_name.charAt(0)}</AvatarFallback>
              </Avatar>
              
                  <h1> {userInfo && `${userInfo.user.user_name.split(" ")[0]} (${userInfo.user.user_role})`}</h1>              </div>}</SheetTitle>
              </div>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-left gap-4">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <Link href="/perfil">Perfil</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShoppingCart />
                  <Link href="/carrinho">Carrinho</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaSignOutAlt />
                  <Link href="/login" onClick={onLogout}>{userInfo ? 'sair' : 'entrar'}</Link>
                </div>
              </div>

            </div>
            <SheetFooter>
              <SheetClose asChild>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
          </div>
        </Sheet>
      ))}
    </div>
    </AuthProvider>
    )
}
