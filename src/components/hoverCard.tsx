import { CalendarDays } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"

export function HoverCardBar() {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Button className="flex flex-col items-start text-xs md:text-xs" variant="link">
                 <span>Entrar</span>
                 <span>Cadastre-se</span>
                    </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1 w-full">
                        <Button className="w-full" asChild>
                            <Link href="/login">Login</Link>
                        </Button>

                        <div className="flex items-center pt-2">
                            <span className="text-sm text-muted-foreground">
                                Não tem cadastro? <Link className="text-black font-bold" href="/login">Criar conta</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}