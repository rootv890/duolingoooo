import { lessons, units } from "@/db/schema";
import { boolean } from "drizzle-orm/mysql-core";
import UnitBanner from "./unit-banner";
import LessonButton from "./lesson-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

function Unit({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
}: Props) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex flex-col items-center relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              percentage={activeLessonPercentage}
              current={isCurrent}
              locked={isLocked}
            />
          );
        })}
      </div>
    </>
  );
}

export default Unit;
