import { Button } from "@/components/ui/button";
import Flag from "react-flagpack";

function Footer() {
  return (
    <footer className="hidden lg:block h20 w-full border-t-2 bg-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="IN"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          Hindi
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="FR"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          French
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="SE"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          Swedish
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="GB-ENG"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          English
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="ES"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          Spanish
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full gap-2 ">
          <Flag
            code="JP"
            hasBorder
            hasBorderRadius
            className="shadow-lg w-[32px] h-[40px]  "
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
