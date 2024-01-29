"use client"
import NavbarPerfil from "@/components/NavbarPerfil ";
import { TabsCreate } from "@/components/TabsCreate";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CriarPerfilForm } from "@/components/form/CriarPerfilForm";
import { SelectPerfilEditForm } from "@/components/form/SelectPerfilForm";
import { fetchUsers } from "@/lib/api";
import { DeletePerfilEditForm } from "@/components/form/DeletePerfilForm";



const Profile = () => {

  const  [users, setUsers] = useState(null);
  useEffect(() => {
    // Carregue as categorias ao montar o componente
    const loadUsers = async () => {
      const perfilData = await fetchUsers();
      setUsers(perfilData);
    };

    loadUsers();
  }, []);
  return (
    <>
  <NavbarPerfil/>
<main className="bg-gray-200">
  <div className="max-w-5xl mx-auto px-4 py-16">
    <div className="bg-white rounded-lg shadow overflow-hidden p-8 max-w-[466px] mx-auto">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Criar">Criar</TabsTrigger>
        <TabsTrigger disabled = {!users} value="Editar">Editar</TabsTrigger>
        <TabsTrigger disabled = {!users} value="Deletar">Deletar</TabsTrigger>
      </TabsList>
      <TabsContent value="Criar">
          <CriarPerfilForm></CriarPerfilForm>
      </TabsContent>
      <TabsContent value="Editar">
        <SelectPerfilEditForm usuarios ={users as any}/>
      </TabsContent>
      <TabsContent value="Deletar">
        <DeletePerfilEditForm usuarios ={users as any}/>
      </TabsContent>
    </Tabs>
    </div>
  </div>

  <footer className="bg-gray-200 flex flex-col text-center text-xs text-gray-600 py-3">
          <p>Copyright© 2024 PetShop Comércio e Participações S/A</p>
          <span>Todos os direitos reservados</span>

        </footer>
</main>

    </>
  );
};

export default Profile;