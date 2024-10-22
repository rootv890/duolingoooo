import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import { PiInfinityFill } from "react-icons/pi";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

function Header({ hearts, percentage, hasActiveSubscription }: Props) {
  return (
    <header className="lg:pt-[50px] pt-[20px]  px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full ">
      <FaX
        onClick={() => {
          // Todo: Opens a dialog for conformation
        }}
        className="text-slate-500 hover:bg-slate-100 p-1 text-xl rounded-md hover:opacity-75 cursor-pointer"
      />
      <Progress value={percentage} about="unit progress" />
      <div className="text-rose-500 font-bold items-center flex">
        <Image
          src={"./heart.svg"}
          alt="Heart Icon"
          width={28}
          height={28}
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <PiInfinityFill className="h-6 w-6 stroke-[3] " />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
}

export default Header;
