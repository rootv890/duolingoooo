import Link from "next/link";
import { Button } from "./ui/button";
import Flag from "react-flagpack";
import Image from "next/image";
import { FaInfinity } from "react-icons/fa6";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

function UserProgress({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Flag
            code={activeCourse.imageSrc}
            className="rounded-md border w-[32px] h-[32px]"
          />
        </Button>
      </Link>
      <Link href={"shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src="/points.svg"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src="/heart.svg"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
          {!hasActiveSubscription ? (
            <FaInfinity className="w-6  h-6 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
}

export default UserProgress;
