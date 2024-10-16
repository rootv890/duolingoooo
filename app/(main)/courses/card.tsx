import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { act } from "react";
import Flag from "react-flagpack";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

function Card({ id, imageSrc, onClick, title, active, disabled }: Props) {
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 justify-between flex  flex-col items-center p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <CheckIcon className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <div className="scale-[2.2] group relative">
        <Flag code={imageSrc} hasDropShadow hasBorder />
      </div>
      <p className="text-center text-neutral-700 ">{title}</p>
    </div>
  );
}

export default Card;
