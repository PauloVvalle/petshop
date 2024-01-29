"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {  EditProduct } from "@/lib/types"
import 'tailwindcss/tailwind.css';
import { SiginForm } from "./form/CreateProductForm"
import { DeleteProductForm } from "./form/DeleteProductForm";
import { SelectProductForm } from "./form/SelectProductForm";
import { useState, useEffect } from 'react';
import { fetchProduct } from "@/lib/api"
import { EditProductForm } from "./form/EditProductForm"

export function TabsCreate() {
  const [isComponente1Visible, setComponente1Visible] = useState(true);
  const [produto, setProduto] = useState(null);


  const handleEnvio = async (produto: any) => {
    const response = await fetchProduct(produto);
     produto = produto;
    setProduto(produto);
      console.log(response);
    setComponente1Visible(false);
  };
  const handleProdutoClick = (produto: string) => {
    console.log(produto)
    setComponente1Visible(true);
  };

  return (
    <Tabs defaultValue="Criar" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Criar">Criar</TabsTrigger>
        <TabsTrigger value="Deletar">Deletar</TabsTrigger>
        <TabsTrigger value="Editar">Editar</TabsTrigger>
      </TabsList>
      <TabsContent value="Criar">
        <Card>
          <CardHeader>
            <CardTitle>Crie seu produto.</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SiginForm></SiginForm>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Deletar">
        <Card>
          <CardHeader>
            <CardTitle>Delete seu produto</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <DeleteProductForm/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Editar">
        <Card>
          <CardHeader>
            <CardTitle>Edite seu produto</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          {isComponente1Visible ? (
        <SelectProductForm produto={produto} onEnvio={handleEnvio} onProdutoClick={function (produto: string): void {
                throw new Error("Function not implemented.")
              } } id={""} _id={""} customId={""} title={""} price={""} description={""} category={""} image={""} parcel={""} createdAt={""} updatedAt={""}/>

      ) : (
        <EditProductForm produto={produto} onProdutoClick={handleProdutoClick} id={""} _id={""} customId={""} title={""} price={""} description={""} category={""} image={""} parcel={""} createdAt={""} updatedAt={""} onEnvio={function (produto: string): void {
                  throw new Error("Function not implemented.")
                } } />
      )}

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}