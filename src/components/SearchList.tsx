"use client"
import { useSearchParams } from "next/navigation"
import React from "react"
import ProductCard from "./productCard"
import { Product } from "@/lib/types"
import { searchProducts } from "@/lib/api"

const SearchList = () => {
  const searchParams = useSearchParams()
  const term = searchParams.get("term") || ""
    // Estado para armazenar os produtos da pesquisa
    const [products, setProducts] = React.useState<Product[]>([])

    // Função para realizar a pesquisa de produtos usando a API
    const searchProductsAPI = React.useCallback(async (searchTerm: string) => {
      try {
        if (searchTerm) {
          const response: Product[] = await searchProducts(searchTerm)
          if (response) {
            console.log(response)
            setProducts(response)
          }
        }
        return []
      } catch (error) {
        console.error("Erro ao buscar produtos", error)
        setProducts([])
        return []
      }
    }, [])
  
    // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
    React.useEffect(() => {
      searchProductsAPI(term)
    }, [term])
  
    // Renderiza o componente
    return (
      <div>
        <p>
          Pesquisando por: <span className="text-primary">{term}</span>
        </p>
        <div className="my-11 flex flex-wrap gap-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    )
  }

export default SearchList