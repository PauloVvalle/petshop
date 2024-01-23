import ShowComponent from "@/components/ShowComponent"

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <ShowComponent showComponent={true}>
        <div>{children}</div>
        </ShowComponent>


    </>
  )
}