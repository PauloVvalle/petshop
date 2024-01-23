import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from "next/link"
import Search from "./Search"
import { ModeToggle } from "./ModeToggle"

export function Commands({ className }: { className?: string }) {
    return (
      <Command className="fixed top-0 left-0 h-screen w-60 max-w-full border shadow-md">
          <div className="flex justify-around items-center mt-10">
            <Link href="/">
            <span className="inline-block font-bold">PetShop</span>
            </Link>
            <ModeToggle />
          </div>
        <Search className="max-w-48 mt-5"/>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Admin" >
            <CommandItem className="px-5">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Criar produtos</span>
              </Link>
            </CommandItem>
            <CommandItem className="px-5">
              <FaceIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Modificar produtos</span>
              </Link>
            </CommandItem>
            <CommandItem className="px-5">
              <RocketIcon className="mr-2 h-4 w-4" />
            
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className="px-5">
              <PersonIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Profile</span>
              </Link>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className="px-5">
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Mail</span>
              </Link>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className="px-5">
              <GearIcon className="mr-2 h-4 w-4" />
              <Link href="/">
              <span>Settings</span>
              </Link>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  