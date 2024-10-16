import { getCourses, getUserProgress } from "@/db/queries";
import List from "./List";
import Greet from "./greet";

type Props = {};

async function CoursesPage({}: Props) {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <Greet />
      <h1 className="text-2xl font-black text-neutral-700">Language Courses</h1>
      {/* {JSON.stringify(data)} */}
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}

export default CoursesPage;
