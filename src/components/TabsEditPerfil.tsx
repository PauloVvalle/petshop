// "use client"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import {  EditProduct } from "@/lib/types"
// import 'tailwindcss/tailwind.css';
// import { SiginForm } from "./form/CreateProductForm"
// import { DeleteProductForm } from "./form/DeleteProductForm";
// import { useState, useEffect } from 'react';
// import { fetchUser } from "@/lib/api"
// import { SelectPerfilEditForm } from "./form/SelectPerfilForm"
// import { EditPerfilForm } from "./form/EditPerfilForm"

// export function TabsEditPerfil() {
//   const [isComponente1Visible, setComponente1Visible] = useState(true);
//   const [usuario, setPerfil] = useState(null);


//   const handleEnvio = async (usuario: any) => {
//     const response = await fetchUser(usuario);
//     usuario = usuario;
//     setPerfil(usuario);
//     console.log(response);
//     setComponente1Visible(false);
//   };
//   const handleProdutoClick = (usuario: string) => {
//     console.log(usuario)
//     setComponente1Visible(true);
//   };


//   return (
//     <Tabs defaultValue="Criar" className="w-[400px]">
//       <TabsList className="grid w-full grid-cols-1">
//         <TabsTrigger value="Editar">Editar</TabsTrigger>
//       </TabsList>
//       <TabsContent value="Editar">
//         <Card>
//           <CardHeader>
//             <CardTitle>Edite seu produto</CardTitle>
//             <CardDescription>
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             {isComponente1Visible ? (
//               <SelectPerfilEditForm usuario={usuario} onEnvio={handleEnvio} onProdutoClick={function (usuario: string): void {
//                 throw new Error("Function not implemented.")
//               } } user_name={""} user_username={""} user_password={""} user_role={""} user_image={""} user_email={""} user_phone={""} user_city={""} user_street={""} user_number={0} user_cep={""} user_petname={""} user_pettype={""} user_vaccination_date={new Date} id={""} _id={""} />

//             ) : (
//               <EditPerfilForm usuario={usuario} onProdutoClick={handleProdutoClick} user_name={""} user_username={""} user_password={""} user_role={""} user_image={""} user_email={""} user_phone={""} user_city={""} user_street={""} user_number={0} user_cep={""} user_petname={""} user_pettype={""} user_vaccination_date={new Date} id={""} _id={""} onEnvio={function (usuario: string): void {
//                 throw new Error("Function not implemented.")
//               } } />
//             )}
//           </CardContent>
//           <CardFooter>
//           </CardFooter>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   )
// }