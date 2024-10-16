import { cache } from "react";
import db from "./index";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});
