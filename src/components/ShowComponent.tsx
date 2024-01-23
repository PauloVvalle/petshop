import React from 'react';
 // Importe o componente que você deseja renderizar condicionalmente
import Navbar from './Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
  showComponent: boolean; // Adicione esta propriedade
}

export default function ShowComponent({
  children,
  showComponent, // Adicione esta propriedade
}: RootLayoutProps) {
  return (
    <>
    
      {showComponent && <Navbar/>}
      <div>{children}</div>
    </>
  )
}

// import React from 'react';
// import type { Metadata } from "next"
// import { ThemeProvider } from "@/context/ThemeProvider"
// import  SessionProvider  from "@/context/SessionProvider";
// import { getServerSession } from "next-auth"

// import "./globals.css"
// import { AuthProvider } from "@/context/AuthContext"
// import Navbar from "@/components/Navbar";

// export const metadata: Metadata = {
//   title: "petshop",
//   description: "As melhores promoções você encontra aqui!",
// }

// interface RootLayoutProps {
//   children: React.ReactNode;
//   showNavbar: boolean; // Adicione esta propriedade
// }

// export default async function RootLayout({
//   children,
//   showNavbar, // Adicione esta propriedade
// }: RootLayoutProps) {
//   const session = await getServerSession()

//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <SessionProvider session={session}>
//             {showNavbar && <Navbar/>} // Renderize a Navbar com base na propriedade showNavbar
//             {children}
//           </SessionProvider>
//         </ThemeProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   )
// }