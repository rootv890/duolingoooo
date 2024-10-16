import { BiMenu } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BiMenu className="text-white" size={24} />
      </SheetTrigger>

      <SheetContent className="p-0 z-[100]" side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
