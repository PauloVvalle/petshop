"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { EditUser, User } from "@/lib/types"
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
import 'tailwindcss/tailwind.css';
import { useState, useEffect, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from 'react';
import { deleteProduct, fetchProduct, deleteProductByName, fetchUser, fetchUsers, updateUser } from '@/lib/api'; // Importe a função createProduct e fetchCategories
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "../ui/input"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "../ui/calendar"

const FormSchema = z.object({
  _id: z
  .string(),
user_name: z
  .string(),
user_username: z
  .string(),
user_email: z
  .string(),
user_phone: z
    .string(),
user_city: z
    .string(),
user_street: z
    .string(),
user_number: z
.string(),
user_cep: z
.string(),
user_petname: z
.string(),
user_pettype: z
.string(),
user_vaccination_date: z.string({
  required_error: "A date of birth is required.",  }),
})

export function SelectPerfilEditForm({ usuarios }: any) {

  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: "",
      user_name: "",
      user_username: "",
      user_email: "",
      user_phone: "",
      user_city: "",
      user_street: "",
      user_number: "",
      user_cep: "",
      user_petname: "",
      user_pettype: "",
      user_vaccination_date: "",
    },
  })

  async function selecionarPerfil(_id: string) {
    console.log(_id)
    const response = await fetchUser(_id)
    console.log(response)
    setUser(response)
    form.setValue("_id", response._id || "")
        form.setValue("user_name", response.user_name || "")
        form.setValue("user_username", response.user_username || "")
        form.setValue("user_email", response.user_email || "")
        form.setValue("user_phone", response.user_phone || "")
        form.setValue("user_city", response.user_city || "")
        form.setValue("user_street", response.user_street || "")
        form.setValue("user_number", response.user_number.toString() || "")
        form.setValue("user_cep", response.user_cep.toString() || "")
        form.setValue("user_petname", response.user_petname || "")
        form.setValue("user_pettype", response.user_pettype || "")
        form.setValue("user_vaccination_date", response.user_vaccination_date || "")
  }

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values._id)
        const {
          _id,
           ...valuesWithout
        } = values
        const convertedValues = {
          ...valuesWithout,
          user_number: parseFloat(values.user_number),
          user_cep: parseFloat(values.user_cep),
        };
        

        try {
          // Update createUser call to take 1 argument
          const response = await updateUser(_id, convertedValues);
    
          if (response) {
            toast.success("Perfil editado com sucesso!");
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
        className="productId: stringw-2/ space-y-6"
      >
        <FormField
          control={form.control}
          name="_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Perfil</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um Perfil" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {usuarios.map((user: any) => (
                    <SelectItem key={user._id} value={user._id}>
                      {user.user_name}
                    </SelectItem>
                  ))}


                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o Perfil que deseja editar.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" onClick={() => selecionarPerfil(form.getValues()._id)}>Selecionar perfil</Button>

{user && (
  
  <>
  


        <FormField
          control={form.control}
          name="_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>id</FormLabel>
              <FormControl>
                <Input disabled placeholder="id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="Titulo do produto" {...field} />
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
              <FormLabel>Descrição do produto</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
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
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input placeholder="Preço do produto" {...field} />
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
              <FormLabel>Descrição do produto</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                        <FormField
          control={form.control}
          name="user_street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do produto</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                               <FormField
          control={form.control}
          name="user_city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
          <FormField
          control={form.control}
          name="user_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero:</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
                        <FormField
          control={form.control}
          name="user_cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP:</FormLabel>
              <FormControl>
              <Input placeholder="Preço do produto" {...field} />
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
              <Input placeholder="Preço do produto" {...field} />
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
              <Input placeholder="Preço do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
               <FormField
          control={form.control}
          name="user_vaccination_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data de vacinação</FormLabel>
              <div className="mb-4">
                    <Input {...field} type="date"></Input>
               </div>
              <FormMessage />
            </FormItem>
          )}
        />
                <Button type="submit" >Salvar Perfil</Button>
  </>
)}

      </form>
    </Form>
  );
}



