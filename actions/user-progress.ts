"use server";

import db from "@/db";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("UnAuhtorised!");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not Found!");
  }

  //   TODO
  //   if (!course.units.length || !course.units[0].lessons.length) {
  //     throw new Error("Course is empty");
  //   }

  const exisitingUserProgress = await getUserProgress();

  //   Active Course Already
  if (exisitingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      //   Proactive update of name and image
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "./mascot.svg",
    });
    //   revalidate Path
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "./mascot.svg",
  });

  //   revalidate Path
  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
