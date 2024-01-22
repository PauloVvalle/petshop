"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select';
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';


type Inputs = {
  user_name: string;
  user_email: string;
  user_username: string;
  user_password: string;
  user_role: 'user' | 'admin';
  user_phone: string;
  user_image: FileList;
  user_address: string;
  user_cep: string;
  user_pet_name: string;
  user_pet_type: string;
  user_vaccination_date: string;
  [key: string]: string | 'user' | 'admin' | FileList | undefined;
};


const CompleteProfile: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      let formData = new FormData();

      for (let key in data) {
        if (key !== 'user_image') {
          formData.append(key, data[key] as string | 'user' | 'admin');
        } else {
          formData.append(key, data[key][0]);
        }
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/user`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Resposta da API (post): ', response.data);
      alert('Usuário criado com sucesso! Redirecionando para Login! ');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
<main className="mx-auto max-w-5xl text-1xl gap-2 my-10 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" encType="multipart/form-data">
  <div className="mb-4">
    <Label htmlFor="user_name" >
      Nome do Dono:
    </Label>
    <Input {...register('user_name')} id="user_name" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_email" >
      E-mail:
    </Label>
    <Input {...register('user_email')} id="user_email" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_username" >
      Username:
    </Label>
    <Input {...register('user_username')} id="user_username" className="border rounded w-full "/>
  </div>


  <div className="mb-4">
    <Label htmlFor="user_password" >
      Password:
    </Label>
    <Input {...register('user_password')} id="user_password" className="border rounded w-full py-2 px-3" type="password"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_role" >
      Nível de acesso:
    </Label>
 
<Select {...register('user_role')} >
      <SelectTrigger  >
        <SelectValue placeholder="Selecione um cargo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cargos</SelectLabel>
      <SelectItem value='user'>Usuário</SelectItem>
      <SelectItem value='admin'>Administrador</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    {/* <Select {...register('user_role')} className="border rounded w-full py-2 px-3"> */}
      {/* <SelectItem value='user'>Usuário</SelectItem>
      <SelectItem value='admin'>Administrador</SelectItem>
    </Select> */}
  </div>

  <div className="mb-4">
    <Label htmlFor="user_phone" >
      Telefone:
    </Label>
    <Input {...register('user_phone')} id="user_phone" className="border rounded w-full py-2 px-3"></Input>
  </div>

    <div className="mb-4">
    <Label htmlFor="user_address" >
      Endereço:
    </Label>
    <Input {...register('user_address')} id="user_address" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_cep" >
      CEP:
    </Label>
    <Input {...register('user_cep')} id="user_cep" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_pet_name" >
      Nome do Pet:
    </Label>
    <Input {...register('user_pet_name')} id="user_pet_name" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_pet_type" >
      Tipo de Pet:
    </Label>
    <Input {...register('user_pet_type')} id="user_pet_type" className="border rounded w-full py-2 px-3"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_vaccination_date" >
      Data da Vacinação:
    </Label>
    <Input {...register('user_vaccination_date')} id="user_vaccination_date" className="border rounded w-full py-2 px-3" type="date"></Input>
  </div>

  <div className="mb-4">
    <Label htmlFor="user_image" >
      Imagem do Pet:
    </Label>
    <Input {...register('user_image')} id="user_image" className="border rounded w-full " type="file"></Input>
  </div>

  <Button type="submit" >
    Enviar
  </Button>
</form>

    </main>
        </>
  );
};

export default CompleteProfile;
