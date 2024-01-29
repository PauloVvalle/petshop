"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const apiUrl = process.env.NEXT_PUBLIC_BACKEND

interface Product {
  image: string;
  title: string;
  price: string;
  // Adicione aqui outras propriedades do produto conforme necessário
}

export function CarouselPlugin() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      plugins={[plugin.current]}
      className="relative h-96 w-96"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="pt-1 w-96">
            <div className="p-1 z-20">
              <Card>
                <CardContent className="flex flex-col h-72 z-0 items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[150px] h-[100px] object-fit"
                  />
                    
                    <span className="text-center block truncate-1 ...">{product.title}</span>
                    <div className="flex items-center"> 
                      <span className="text-black font-bold mr-2">R${product.price}</span>
                    </div>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[20%] transform -translate-x-full" />
      <CarouselNext className="absolute right-[20%] transform translate-x-full" />
    </Carousel>
  );
}

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselPlugin() {
//   const getRandomImageUrl = () => {
//     const randomImageWidth = Math.floor(Math.random() * 800) + 400;
//     const randomImageHeight = Math.floor(Math.random() * 800) + 400;
//     return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
//   }
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
    
//   )


//   return (
//     <Carousel
//     opts={{
//         align: "start",
//         loop: true,
//       }}
//     orientation="horizontal"
//       plugins={[plugin.current]}
//       className="relative h-96 w-full"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (

//           <CarouselItem  key={index} className="pt-1 w-128">
//             <div className="p-1 z-20">

//               <Card>
                
//                 <CardContent  className="flex h-64 z-0 items-center justify-center p-6">
//                 <img
//                     src={getRandomImageUrl()}
//                     alt={`Imagem Aleatória ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>

//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-[20%] transform -translate-x-full" />
// <CarouselNext className="absolute right-[20%] transform translate-x-full" />


//     </Carousel>
//   )
// }
