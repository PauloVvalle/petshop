"use client"
import NavbarPerfil from "@/components/NavbarPerfil ";
import React, { useEffect, useState } from "react";
import { CriarPerfilForm } from "@/components/form/CriarPerfilForm";
import { fetchUsers } from "@/lib/api";



const Profile = () => {

  const [users, setUsers] = useState(null);
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
      <NavbarPerfil />
      <main className="bg-gray-200">
        <div className="max-w-[80%] flex flex-row  mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow overflow-hidden p-8 w-[466px] mx-auto">
            <CriarPerfilForm></CriarPerfilForm>
          </div>

          <div className="overflow-hidden p-8 max-w-[466px] mx-auto ml-4">
            <h2>Criar uma conta é rápido, fácil e gratuito</h2>
            <h4>Com a sua conta da Petz você tem acesso a Ofertas
              exclusivas, descontos, vai gerenciar a sua Assinatura Petz
              pode acompanhar os seus pedidos e muito mais!</h4>
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