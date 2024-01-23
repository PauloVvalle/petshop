
import Search from "@/components/Search"
import ShowComponent from "@/components/ShowComponent"

export default function Home({
  children,
 
}: React.PropsWithChildren<{}>) {
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
