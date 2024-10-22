"use client";

import { CheckIcon, StarFilledIcon } from "@radix-ui/react-icons";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCrown } from "react-icons/fa6";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

function LessonButton({
  id,
  index,
  percentage,
  totalCount,
  current,
  locked,
}: Props) {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = cycleIndex - 4;
  } else {
    indentationLevel = 8 - cycleIndex;
  }

  const rightPosition = indentationLevel * 40;
  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;
  const Icon = isCompleted ? CheckIcon : isLast ? FaCrown : StarFilledIcon;
  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{
        pointerEvents: locked ? "none" : "auto",
      }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px]  relative">
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#4ade80",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                variant={locked ? "locked" : "secondary"}
                className="h-[70px] border-b-8 w-[70px] "
                size={"rounded"}
              >
                <Icon
                  className={cn(
                    "h-10 w-10 ",

                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",

                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
            <div
              className="
            absolute -top-5 left-1/2 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10 "
            >
              Start
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
            </div>
          </div>
        ) : (
          <div>
            <Button
              variant={locked ? "locked" : "secondary"}
              className="h-[70px] border-b-8 w-[70px] "
              size={"rounded"}
            >
              <Icon
                className={cn(
                  "h-10 w-10 ",

                  locked
                    ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                    : "fill-primary-foreground text-primary-foreground",

                  isCompleted && "fill-none stroke-[4]"
                )}
              />
            </Button>
          </div>
        )}
      </div>
    </Link>
  );
}

export default LessonButton;
