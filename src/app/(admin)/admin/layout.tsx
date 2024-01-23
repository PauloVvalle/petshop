import AdminNavbar from "@/components/AdminNavbar"
import ShowComponent from "@/components/ShowComponent"
import { SheetAdmin } from "@/components/sheetAdmin";
import Sidebar from '@/components/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
    <ShowComponent showComponent={false}>


        <AdminNavbar className="lg:hidden block" />
        <Sidebar className="hidden lg:block"/>
        <div>{children}</div>
        </ShowComponent>



    </>
  )
}
