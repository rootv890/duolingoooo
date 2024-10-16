import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "bg-blue-500 flex lg:fixed left-0 top-0 px-4 border-r-2 flex-col  h-full lg:w-[256px]",
        className
      )}
    >
      Sidebar
    </div>
  );
}

export default Sidebar;
