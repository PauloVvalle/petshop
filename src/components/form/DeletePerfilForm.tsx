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
import { deleteProduct, fetchProduct, deleteProductByName, fetchUser, fetchUsers, updateUser, deleteUser } from '@/lib/api'; // Importe a função createProduct e fetchCategories
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "../ui/input"

const FormSchema = z.object({
  _id: z
  .string(),
})

export function DeletePerfilEditForm({ usuarios }: { usuarios: User[] }) {

  const [user, setUser] = useState<User | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: "",
    },
  })

  async function selecionarPerfil(_id: string) {
    console.log(_id)
    const response = await fetchUser(_id)
    console.log(response)
    setUser(response as User)
    form.setValue("_id", response._id || "")
  }

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values._id)
    try {
      // Update createUser call to take 1 argument
      const response = await deleteUser(values._id);
      if (response) {
        toast.success("Delete editado com sucesso!");
      } else {
        console.error('Erro: a deletar do Perfil falhou');
      }
    } catch (error) {
      console.error('Erro ao deletar o Perfil', error);
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
              <FormLabel>Deletar</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um Perfil para deletar" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {usuarios.map((user: User) => (
                    <SelectItem key={user._id} value={user._id}>
                      {user.user_name}
                    </SelectItem>
                  ))}


                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o Perfil que deseja apagar.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" onClick={() => selecionarPerfil(form.getValues()._id)}>Selecionar perfil</Button>

        {user && (

          <>



            <h3>Deseja realmente deletar <strong>&quot;{user.user_name}&quot;</strong>?</h3>

            <Button type="submit" variant={
              "destructive"
            } >Deletar Perfil</Button>
          </>
        )}

      </form>
    </Form>
  );
}




