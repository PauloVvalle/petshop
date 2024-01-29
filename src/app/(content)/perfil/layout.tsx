import ShowComponent from "@/components/ShowComponent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <ShowComponent showComponent={false}>
        <div>{children}</div>
        </ShowComponent>


    </>
  )
}