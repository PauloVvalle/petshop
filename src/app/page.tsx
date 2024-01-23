
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import { SheetSide } from "@/components/Sheet" 
import ShowComponent from "@/components/ShowComponent"

export default function Home() {
  return (
    <>        
    <ShowComponent children={undefined} showComponent={true}></ShowComponent>
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">

      <Search />
        <h1>Hello</h1>
      </main>
    </>
  )
}
