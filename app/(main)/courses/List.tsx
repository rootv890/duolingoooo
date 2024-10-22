"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

function List({ courses, activeCourseId }: Props) {
  const router = useRouter();
  const [pending, startTransisition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;
    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransisition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong!"));
    });
  };
  return (
    <div
      className="pt-6 grid grid-cols-2
  lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4"
    >
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          active={course.id === activeCourseId}
          disabled={pending}
        />
      ))}

      <div className="h-full border-2 rounded-xl border-b-4  cursor-pointer active:border-b-2 justify-center flex  flex-col jc items-center p-3 pb-6 min-h-[217px] min-w-[200px] mx-auto">
        <h1 className="text-balance text-xl text-neutral-800 text-center">
          More languages coming soon...
        </h1>
      </div>
    </div>
  );
}

export default List;
