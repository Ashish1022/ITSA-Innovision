import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col gap-6 bg-white backdrop-blur-xl shadow-xl"
        >
          <SheetTitle>
            <Image
              src="/assets/images/innovision.svg"
              alt="logo"
              width={128}
              height={38}
            />
          </SheetTitle>
          <Separator className="border border-gray-50" />
          {/* Pass the closeSheet function to NavItems */}
          <NavItems onLinkClick={closeSheet} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
