
import AdminNavbar from "@/components/NavBarAdmin"
import ShowComponent from "@/components/ShowComponent"
import Sidebar from '@/components/sidebar';
import { Toaster } from "@/components/ui/sonner"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>


<div>{children}</div>
<Toaster />

    </>
  )
}
