'use client'
import Navbar from '@/components/Navbar';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'tailwindcss/tailwind.css'
import { authUser } from '@/app/utils/api'
import Link from 'next/link';
import { AuthContext, AuthProvider, useAuth } from '@/context/AuthContext';

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
    <main className="min-h-screen">
               
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

    <main className="min-h-screen">

      <div className="flex items-center justify-center">
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
  
            <button type="submit"  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Login</button>
            <br></br>
            <br></br>
        <div className='mb-'>
                Não tem uma conta. <Link href='/create-profile'>cadastra-se!</Link>
            </div>
          </form>
        </div>
      </div>

    </main>
        </>
  );
}
export default LoginPage;
