"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const myLoader = ({ src }: any) => `https://images.petz.com.br${src}`;
  return (
    <Carousel
      opts={{
        align: "center", // Altere para "center" para centralizar as imagens
        loop: true,
      }}
      orientation="horizontal"
      plugins={[plugin.current]}
      className="w-full h-full"
    >
      <CarouselContent className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center"> {/* Adicione "flex justify-center" para centralizar a imagem */}
            <div className="p-1 z-20">
              <Card>
                <CardContent className="flex items-center justify-center p-6 border-primary-foreground shadow-md">
                  <Image
                    src="/Home_Desk_1900x390_Refresh_FarmaciaPetz_2023_10.jpg" 
                    width={1000}
                    height={100}
                    alt={"home"}                     />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-[20%] transform -translate-x-full" />
      <CarouselNext className="absolute right-[20%] transform translate-x-full" /> */}
    </Carousel>
  )
}

