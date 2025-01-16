import { Menu } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuOptions = (
  <>
    <NewDocumentButton />
  </>
);

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bg-zinc-200 ">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className=" hover:opacity-30" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className=" flex justify-center">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex justify-center p-4">{menuOptions}</div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
}

export default Sidebar;
