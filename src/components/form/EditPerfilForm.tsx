// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Category, SelectProduct, Product, EditUser, User } from "@/lib/types"
// import { toast } from "sonner"
// import { format } from "date-fns"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { InputImg } from "./InputImg"
// import 'tailwindcss/tailwind.css';
// import { useState, useEffect } from 'react';
// import { createProduct, deleteProduct, fetchCategoriesOrderByName, fetchProduct, fetchProducts, fetchUser, updateUser } from '@/lib/api'; // Importe a função createProduct e fetchCategories
// import * as z from "zod"
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// import React from "react"
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
// import { cn } from "@/lib/utils"
// import { CalendarIcon } from "@radix-ui/react-icons"
// import { Calendar } from "../ui/calendar"


// const FormSchema = z.object({
//     _id: z
//       .string(),
//     user_name: z
//       .string(),
//     user_username: z
//       .string(),
//     user_email: z
//       .string(),
//     user_phone: z
//         .string(),
//     user_city: z
//         .string(),
//     user_street: z
//         .string(),
//     user_number: z
//     .string(),
//     user_cep: z
//     .string(),
//     user_petname: z
//     .string(),
//     user_pettype: z
//     .string(),
//     user_vaccination_date: z.date({
//       required_error: "A date of birth is required.",  }),
// })

// export function EditPerfilForm({ onProdutoClick, usuario }: EditUser) {
//   console.log('usario chegou', usuario)
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       _id: "",
//       user_name: "",
//       user_username: "",
//       user_email: "",
//       user_phone: "",
//       user_city: "",
//       user_street: "",
//       user_number: "",
//       user_cep: "",
//       user_petname: "",
//       user_pettype: "",
//       user_vaccination_date: new Date(),
//     },
//   })


//   const [product, setProduct] = React.useState<User | null>(null)

//   // Função para realizar a pesquisa de produtos usando a API
//   const fetchProductAPI = React.useCallback(async () => {
//     try {
//       console.log('chegou aqui 2', usuario)
//       const response: User = await fetchUser(usuario)
//       console.log(response)

//       // Convertendo cupomValue, currentPrice, originalPrice para string
//       const updatedProduct: any = {
//         ...response,
//         user_number: response.user_number?.toString(),
//         user_cep: response.user_cep?.toString(),
//       }

//       if (response) {
//         setProduct(updatedProduct)
//         form.setValue("_id", usuario._id || "")
//         form.setValue("user_name", updatedProduct.user_name || "")
//         form.setValue("user_username", updatedProduct.user_username || "")
//         form.setValue("user_email", updatedProduct.user_email || "")
//         form.setValue("user_phone", updatedProduct.user_phone || "")
//         form.setValue("user_city", updatedProduct.user_city || "")
//         form.setValue("user_street", updatedProduct.user_street || "")
//         form.setValue("user_number", updatedProduct.user_number || "")
//         form.setValue("user_cep", updatedProduct.user_cep || "")
//         form.setValue("user_petname", updatedProduct.user_petname || "")
//         form.setValue("user_pettype", updatedProduct.user_pettype || "")
//         form.setValue("user_vaccination_date", updatedProduct.user_vaccination_date || "")
//       }
//     } catch (error) {
//       console.error("Erro ao editar perfil", error)
//       setProduct(null)
//     }
//   }, [ form])

//   // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
//   React.useEffect(() => {
//     fetchProductAPI()
//   }, [fetchProductAPI])

//   async function onSubmit(values: z.infer<typeof FormSchema>) {
//     console.log(values)
//     const {
//       _id,
//       ...valuesWithout
//     } =  values
//     const convertedValues = {
//       ...valuesWithout,
//       user_number: parseFloat(values.user_number),
//       user_cep: parseFloat(values.user_cep),
//     };
  
//     try {
//       // Update createUser call to take 1 argument
//       const response = await updateUser(values._id, convertedValues);

//       if (response) {
//         toast.success("Perfil editado com sucesso!");
//         onProdutoClick(usuario);
//       } else {
//         console.error('Erro: a atualização do Perfil falhou');
//       }
//     } catch (error) {
//       console.error('Erro ao atualizar o Perfil', error);
//     }
//   }

  
//   // const [imageFile, setImageFile] = useState<File | null>(null);

//   // const [categories, setCategories] = useState<Category[]>([]);
//   // const [loading, setLoading] = useState(true); // Adicione um estado de carregamento

//   // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (event.target.files && event.target.files[0]) {
//   //     setImageFile(event.target.files[0]);
//   //   }
//   // };

//   useEffect(() => {
//     // Carregue as categorias ao montar o componente
//     // const loadCategories = async () => {
//     //   const categoriesData = await fetchCategoriesOrderByName();
//     //   setCategories(categoriesData);
//     //   setLoading(false); // Atualize o estado de carregamento após buscar os dados
//     // };

//     // loadCategories();
//   }, []);
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} 
//       className="w-2/ space-y-6"
//       >
//               <FormField
//           control={form.control}
//           name="_id"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>id</FormLabel>
//               <FormControl>
//                 <Input disabled placeholder="id" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       <FormField
//           control={form.control}
//           name="user_name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Titulo</FormLabel>
//               <FormControl>
//                 <Input placeholder="Titulo do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//                         <FormField
//           control={form.control}
//           name="user_username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Descrição do produto</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//               <FormField
//           control={form.control}
//           name="user_email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Preço</FormLabel>
//               <FormControl>
//                 <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//                 <FormField
//           control={form.control}
//           name="user_phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Descrição do produto</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                         <FormField
//           control={form.control}
//           name="user_street"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Descrição do produto</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                                <FormField
//           control={form.control}
//           name="user_city"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Cidade</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//           <FormField
//           control={form.control}
//           name="user_number"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Numero:</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                         <FormField
//           control={form.control}
//           name="user_cep"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>CEP:</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                         <FormField
//           control={form.control}
//           name="user_petname"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Nome do Pet:</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                         <FormField
//           control={form.control}
//           name="user_pettype"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Tipo de Pet:</FormLabel>
//               <FormControl>
//               <Input placeholder="Preço do produto" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
            
//           )}
//         />
//                <FormField
//           control={form.control}
//           name="user_vaccination_date"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Date of birth</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[240px] pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//               </Popover>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button  type="submit">Editar Perfil</Button>
        
//       </form>
//     </Form>
//   );
// }


