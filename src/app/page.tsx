import { CarouselSize } from "../components/Carousel_banner";
import { CarouselPlugin } from "@/components/Carousel_Product";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import SearchList from "@/components/SearchList";
import { Card } from "@/components/ui/card";


const Home: React.FC = () => {
  return (
    <>
      
      <div className="gap-x-5">
        <div>
          <Navbar/>
        </div>
        <div>

        </div>
      </div>
      <main className="flex flex-col mx-auto text-2xl gap-2 my-10 w-[80%] items-center justify-center">

        <div className="flex flex-col items-center mx-auto l-dvh">
  
        <CarouselSize></CarouselSize>
        </div>


        <div className="flex flex-col items-center mx-auto l-dvh">

        <h2>produtos recomendados</h2>
        <div className="flex flex-row items-center mx-auto l-dvh">
        <CarouselPlugin></CarouselPlugin>
        <CarouselPlugin></CarouselPlugin>
          </div>  

        
         </div>
 


      <Card></Card>


      </main>
      <footer className="bg-gray-200 flex flex-col text-center text-xs text-gray-600 py-3">
          <p>Copyright© 2024 PetShop Comércio e Participações S/A</p>
          <span>Todos os direitos reservados</span>

        </footer>
    </>
  );
};

export default Home;
