"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Category, SelectProduct, Product, EditUser, User } from "@/lib/types"
import { toast } from "sonner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InputImg } from "./InputImg"
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { CreateUser, createProduct, deleteProduct, fetchCategoriesOrderByName, fetchProduct, fetchProducts, fetchUser, updateUser } from '@/lib/api'; // Importe a função createProduct e fetchCategories
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "../ui/calendar"


const FormSchema = z.object({
    _id: z
      .string(),
    user_name: z
      .string(),
    user_username: z
      .string(),
    user_password: z
      .string(),
    user_email: z
      .string(),
    user_phone: z
        .string(),
    user_cep: z
    .string(),
    user_petname: z
    .string(),
    user_pettype: z
    .string(),
})

export function CriarPerfilForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: "",
      user_name: "",
      user_username: "",
      user_password: "",
      user_email: "",
      user_phone: "",
      user_cep: "",
      user_petname: "",
      user_pettype: "",
    },
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values)
    const {
      _id,
      ...valuesWithout
    } =  values
    const convertedValues = {
      ...valuesWithout,
      user_cep: parseFloat(values.user_cep),
    };
  
    try {
      // Update createUser call to take 1 argument
      const response = await CreateUser(values._id, convertedValues);
      if (response) {
        toast.success("Perfil criado com sucesso!");
      } else {
        console.error('Erro: a atualização do Perfil falhou');
      }
    } catch (error) {
      console.error('Erro ao atualizar o Perfil', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="w-2/ space-y-6"
      >

      <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e sobrenome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome e sobrenome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                        <FormField
          control={form.control}
          name="user_username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de Usuario</FormLabel>
              <FormControl>
              <Input placeholder="Digite o nome de usario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                                <FormField
          control={form.control}
          name="user_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
              <Input placeholder="Digite sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
              <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="user_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
              <Input placeholder="DDD + telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        {/* <FormField
          control={form.control}
          name="product_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem do produto</FormLabel>
              <FormControl>
                <InputImg {...field} onChange={handleImageChange}></InputImg>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
                        <FormField
          control={form.control}
          name="user_cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF:</FormLabel>
              <FormControl>
              <Input placeholder="Digite seu CPF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                        <FormField
          control={form.control}
          name="user_petname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Pet:</FormLabel>
              <FormControl>
              <Input placeholder="Nome do seu pet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                        <FormField
          control={form.control}
          name="user_pettype"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Pet:</FormLabel>
              <FormControl>
              <Input placeholder="tipo do seu pet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button  type="submit">Criar Perfil</Button>
        
      </form>
    </Form>
  );
}


