"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Product } from "@/lib/types"
import { toast } from "sonner"

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
import { useState, useEffect } from 'react';
import { deleteProduct, fetchProduct, deleteProductByName, fetchProducts } from '@/lib/api'; // Importe a função createProduct e fetchCategories
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const FormSchema = z.object({
    _id: z
      .string().min(2, {
    message: "Seleciona um produto para deletar.",
}),
})

export function DeleteProductForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: "",
    },
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values._id)
    
      const response = await deleteProduct(values._id);
      console.log(response);
      if (response) {
        toast.success("Produto deletado com sucesso!");
      } else {
        toast.error("Erro ao deletar o produto.");
      }
      form.reset()
    }



  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Adicione um estado de carregamento

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImageFile(event.target.files[0]);
  //   }
  // };

  useEffect(() => {
    // Carregue as categorias ao montar o componente
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProduct(productData);
      setLoading(false); // Atualize o estado de carregamento após buscar os dados
    };

    loadProducts();
  }, []);
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
              <FormLabel>Produtos</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um Produto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {product.map(product => (
                            <SelectItem key={product._id} value={product._id}>
                        {product.title}
                        </SelectItem>
                    ))}
  
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o Produto que deseja deletar.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Deletar Produto</Button>
        
      </form>
    </Form>
  );
}

