import AdminNavbar from "@/components/AdminNavbar"
import Navbar from "@/components/Navbar"
import { SheetSide } from "@/components/Sheet"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <div>{children}</div>
    </>
  )
}
