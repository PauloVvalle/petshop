import Link from "next/link"
import React from "react"
import { SheetAdmin } from "./sheetAdmin";

interface MeuComponenteProps {
  className?: string;
}

const AdminNavbar: React.FC<MeuComponenteProps> = ({ className }) => {
  return (
    <div className={className}>
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    <div className="flex flex-1">
      <SheetAdmin></SheetAdmin>
    </div>
    <div className="flex flex-1 justify-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">Admin</span>
      </Link>
    </div>
    <div className="flex flex-1 justify-end items-center space-x-4">
      <nav className="flex items-center space-x-1 gap-3">
      </nav>
    </div>
  </div>
</header>

    </div>
  )
}

export default AdminNavbar
