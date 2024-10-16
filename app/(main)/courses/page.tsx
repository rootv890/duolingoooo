import { getCourses } from "@/db/queries";
import List from "./List";

type Props = {};

async function CoursesPage({}: Props) {
  const courses = await getCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-black text-neutral-700">Language Courses</h1>
      {/* {JSON.stringify(data)} */}
      <List courses={courses} activeCourseId={1} />
    </div>
  );
}

export default CoursesPage;
