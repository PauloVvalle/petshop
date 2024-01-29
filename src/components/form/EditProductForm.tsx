"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Category, SelectProduct, Product, EditProduct } from "@/lib/types"
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InputImg } from "./InputImg"
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { createProduct, deleteProduct, fetchCategoriesOrderByName, fetchProduct, fetchProducts, updateProduct } from '@/lib/api'; // Importe a função createProduct e fetchCategories
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


const FormSchema = z.object({
    _id: z.string(),
    title: z
      .string().min(2, {
    message: "Titulo deve possuir pelo menos 10 characters.",
}),
    price: z
      .string(),
    description: z
        .string()
        .min(10, {
        message: "Bio must be at least 10 characters.",
        }),


        category: z
        .string()
        .min(5, {
            message: "Selecione uma categoria",
        }),
    parcel: z
        .string({
        required_error: "Por favor selecionar o parcelamento.",
        }),
    image: z.string(),
})

export function EditProductForm({ onProdutoClick, produto }: EditProduct) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      parcel: "",
      image: "",
    },
  })

  const [product, setProduct] = React.useState<Product | null>(null)

  // Função para realizar a pesquisa de produtos usando a API
  const fetchProductAPI = React.useCallback(async () => {
    try {
      const response: Product = await fetchProduct(produto)

      // Convertendo cupomValue, currentPrice, originalPrice para string
      const updatedProduct: any = {
        ...response,
        price: response.price?.toString(),
      }

      if (response) {
        setProduct(updatedProduct)
        form.setValue("_id", updatedProduct._id || "")
        form.setValue("title", updatedProduct.title || "")
        form.setValue("image", updatedProduct.image || "")
        form.setValue("price", updatedProduct.price || "")
        form.setValue("description", updatedProduct.description || "")
        form.setValue("category", updatedProduct.category || "")
        form.setValue("parcel", updatedProduct.parcel || "")
      }
    } catch (error) {
      console.error("Erro ao buscar produto", error)
      setProduct(null)
    }
  }, [produto, form])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchProductAPI()
  }, [fetchProductAPI])

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values)
    const {
      _id,
      ...valuesWithout
    } = values
    const convertedValues = {
      ...valuesWithout,
      price: parseFloat(values.price),
    };
  
    try {
      // Certifique-se de que 'id' e 'updateProduct' estão definidos corretamente
      const response = await updateProduct(values._id, convertedValues);

      if (response) {
        toast.success("Produto editado com sucesso!");
        onProdutoClick(produto);
      } else {
        console.error('Erro: a atualização do produto falhou');
      }
    } catch (error) {
      console.error('Erro ao atualizar o produto', error);
    }
  }
  
  // const [imageFile, setImageFile] = useState<File | null>(null);

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true); // Adicione um estado de carregamento

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImageFile(event.target.files[0]);
  //   }
  // };

  useEffect(() => {
    // Carregue as categorias ao montar o componente
    const loadCategories = async () => {
      const categoriesData = await fetchCategoriesOrderByName();
      setCategories(categoriesData);
      setLoading(false); // Atualize o estado de carregamento após buscar os dados
    };

    loadCategories();
  }, []);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="w-2/ space-y-6"
      >
      <FormField
          control={form.control}
          name="title"
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
          name="price"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do produto</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escreva a descrição do produto"
                  className="resize-none"
                  {...field} // Aqui é onde o 'register' é usado
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categorias</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map(category => (
                            <SelectItem key={category.category_id} value={category.category_name}>
                        {category.category_name}
                        </SelectItem>
                    ))}
  
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione a sua categoria{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="parcel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parcelamentos</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a forma de parcelamente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no PIX ou em 3X sem júros">no PIX ou em 3X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 4X sem júros">no PIX ou em 4X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 5X sem júros">no PIX ou em 5X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 6X sem júros">no PIX ou em 6X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 7X sem júros">no PIX ou em 7X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 8X sem júros">no PIX ou em 8X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 9X sem júros">no PIX ou em 9X sem júros</SelectItem>
                  <SelectItem value="no PIX ou em 10X sem júros">no PIX ou em 10X sem júros</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
              Selecione a forma de parcelamente{" "}
              </FormDescription>
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input placeholder="URL da img" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button  type="submit">Editar Produto</Button>
        
      </form>
    </Form>
  );
}


