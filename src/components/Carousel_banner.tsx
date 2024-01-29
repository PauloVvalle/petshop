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

export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
    opts={{
        align: "start",
        loop: true,
      }}
    orientation="horizontal"
      plugins={[plugin.current]}
      className="relative h-96 w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-full">
        {Array.from({ length: 5 }).map((_, index) => (

          <CarouselItem  key={index} className="pt-1 w-full h-full">
            <div className="p-1 z-20 ">

              <Card>
                
                <CardContent  className="flex h-64 w-full z-0 items-center justify-center p-6">
                  <img
                    src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
                    alt="asdasda"
                    className="w-full h-full object-fit"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[20%] transform -translate-x-full" />
<CarouselNext className="absolute right-[20%] transform translate-x-full" />


    </Carousel>
  )
}
