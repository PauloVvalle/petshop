import Navbar from "@/components/Navbar"
import React from "react"
import Search from "@/components/Search"

const PageSearch = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10 px-4">
        <Search className="w-full md:hidden my-2"/>
        <footer className="bg-gray-200 flex flex-col text-center text-xs text-gray-600 py-3">
          <p>Copyright© 2024 PetShop Comércio e Participações S/A</p>
          <span>Todos os direitos reservados</span>

        </footer>
      </main>
    </>
  )
}

export default PageSearch