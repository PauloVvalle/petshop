"use client"
import React, { FC, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import AdminNavbar from "@/components/NavBarAdmin";
import Sidebar from '@/components/sidebar';
import 'tailwindcss/tailwind.css';
import { createProduct, fetchCategoriesOrderByName } from '@/lib/api';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";

type Category = {
  category_id: string;
  category_name: string;
};

type FormInputs = {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  parcel: string; 
};

const Createproduct: FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormInputs>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategoriesOrderByName();
      setCategories(categoriesData);
    };

    loadCategories();
  }, []);


  const onSubmit = async (data: FormInputs) => {
    const success = await createProduct(data);
    if (success) {
      alert('Produto criado');
      router.push(`/admin`);
    }
  };

  return (
    <>
      <AdminNavbar className="lg:hidden block" />
      <div className="lg:grid lg:grid-cols-12 gap-4">
        <Sidebar className="hidden lg:block lg:col-span-3" />
        <main className="mx-auto max-w-5xl text-2xl gap-2 my-10 lg:col-span-9">
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-bold mb-4">Criar Produto</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-600">Título</label>
                  <input {...register('title')} className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-600">Preço</label>
                  <input {...register('price')} className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-600">Descrição</label>
                  <textarea rows={5} {...register('description')} className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-600">Categoria</label>
                  {/* Substitua o campo de entrada por um dropdown de categorias */}
                  <select {...register('category')} className="w-full border rounded py-2 px-3">
                    {categories.map(category => (
                      <option key={category.category_id} value={category.category_id}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="mb-4">
                  <Label htmlFor="product_image" >
                    Imagem do Pet:
                  </Label>
                  <Input {...register('product_image')} id="product_image" className="border rounded w-full " type="file"></Input>
                </div> */}
                     <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-600">Link da img</label>
                  <input {...register('image')} className="w-full border rounded py-2 px-3" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Salvar</button>
              </form>
            </div>
          </div>
          <footer className="bg-gray-200 flex flex-col text-center text-xs text-gray-600 py-3">
          <p>Copyright© 2024 PetShop Comércio e Participações S/A</p>
          <span>Todos os direitos reservados</span>

        </footer>
        </main>
      </div>
    </>
  );
};

export default Createproduct;
