import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle" >
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side='left' className="flex flex-col gap-6 bg-white md:hidden backdrop-blur-xl shadow-xl">
          <SheetTitle>
            <Image
              src="/assets/images/innovision.svg"
              alt="logo"
              width={128}
              height={38}
            />
          </SheetTitle>
          <Separator className="border border-gray-50" />
          <SheetClose>
            <NavItems />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav