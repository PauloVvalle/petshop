
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import { SheetSide } from "@/components/Sheet" 
import ShowComponent from "@/components/ShowComponent"

interface RootLayoutProps {
  children: React.ReactNode;

}
export default function Home({
  children,
 
}: RootLayoutProps) {
  return (
    <>        
    <ShowComponent  showComponent={true}> {children}</ShowComponent>
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">

      <Search />
        <h1>Hello</h1>
      </main>
    </>
  )
}
