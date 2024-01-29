"use client"
import React from "react";
import AdminNavbar from "@/components/NavBarAdmin";
import Sidebar from '@/components/sidebar';
import { CardWithForm } from "@/components/Card";
import { TabsCreate } from "@/components/TabsCreate";

const ModProduct = () => {
  return (
    <>
      <AdminNavbar className="lg:hidden block" />
      <div className="lg:flex">
        <Sidebar className="hidden lg:block w-60" />
        <main className="mx-auto lg:pl-[250px] max-w-5xl text-2xl gap-2 my-10 lg:flex-grow">
            <div className="flex flex-col mx-auto my-auto justify-center items-center">
              {/* <CardWithForm></CardWithForm> */}
              <TabsCreate></TabsCreate>
              
            </div>

            <footer className="bg-gray-200 flex flex-col text-center text-xs text-gray-600 py-3">
          <p>Copyright© 2024 PetShop Comércio e Participações S/A</p>
          <span>Todos os direitos reservados</span>

        </footer>
        </main>
      </div>
    </>
  );
};

export default ModProduct;

ModProduct