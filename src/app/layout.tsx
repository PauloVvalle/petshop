import type { Metadata } from "next"
import { ThemeProvider } from "@/context/ThemeProvider"
import  SessionProvider  from "@/context/SessionProvider";
import { getServerSession } from "next-auth"

import "./globals.css"
import { AuthProvider } from "@/context/AuthContext"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "petshop",
  description: "As melhores promoções você encontra aqui!",
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
                          <SessionProvider session={session}>
                            <Navbar></Navbar>
          {children}
                  </SessionProvider>
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
