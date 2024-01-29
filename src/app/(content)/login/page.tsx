'use client'
import Navbar from '@/components/Navbar';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'tailwindcss/tailwind.css'
import { authUser } from '@/lib/api'
import Link from 'next/link';
import { AuthContext, AuthProvider, useAuth } from '@/context/AuthContext';
import dotenv from 'dotenv';
import { Button } from '@/components/ui/button';
dotenv.config(); 

type Inputs = {
  user_username: string;
  user_password: string;
};

interface User {
  user: {
    name?: string;
    email?: string;
    image?: string;
    user_name?: string;
    user_email?: string;
  };
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const AuthContext = useAuth();
  const { login } = AuthContext;


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userData = await authUser(data);
    if (userData) {
      alert('Login efetuado');
      login(userData);
      router.push(`/`);
    } else {
      alert('Falha na autenticação')
    }
  };

  const { data: session } = useSession() as { data: User | null };
  const router = useRouter();

  console.log(session);



if (session?.user?.user_name && session?.user?.user_email) {
  return (
    <main className="min-h-screen bg-gray-200">
               
      <h2>
        {" "}
        Logado como: {session.user.user_name}, e-mail: {session.user.user_email} <br />
      </h2>

          
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                onClick={() => router.push("/")}
              >
                Complete your profile
              </button>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>

      </main>
    );
  }
  return (
    <>

    <main className="min-h-screen flex flex-row items-center justify-center bg-gray-200">

      <div className="flex items-center justify-center w-[500px]">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="user_username" className="block text-sm font-medium text-gray-600">Usuario</label>
              <input {...register('user_username')} className="w-full border rounded py-2 px-3" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="user_password" className="block text-sm font-medium text-gray-600">Senha</label>
              <input {...register('user_password')} type='password' className="w-full border rounded py-2 px-3" required/>
            </div>
  
            <Button type="submit" >Login</Button>
            <br></br>
            <br></br>
        <div className='mb-'>
                Não tem uma conta. <Link href='/create-profile'>cadastra-se!</Link>
            </div>
          </form>
        </div>
      </div>
    <div className="w-64">
      <div className='flex flex-col w-[500px] pb-[100px] mt-10 justify-center h-full'>
        <h2 className='text-center text-2xl font-bold'>
        Criar uma conta é rápido,
fácil e gratuito!
        </h2>
        <span className='mt-2 text-center items-center text-sm text-gray-500'>
        Com a sua conta da Petz você tem acesso
a Ofertas exclusivas, descontos, pode criar
e gerenciar a sua Assinatura Petz, acompanhar
os seus pedidos e muito mais!
        </span>
        <div className='mt-10 flex flex-row items-center justify-center'>
        <Button className='max-w-[400px]' asChild>
      <Link href="/perfil">Criar minha conta</Link>
    </Button>
         </div>
      </div>
      </div>

    </main>
        </>
  );
}
export default LoginPage;
