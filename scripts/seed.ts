import "dotenv/config";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Database");

    // Remove old Tables!
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Hindi",
        imageSrc: "IN",
      },
      {
        id: 2,
        title: "Spanish",
        imageSrc: "ES",
      },
      {
        id: 3,
        title: "Japanese",
        imageSrc: "JP",
      },
      {
        id: 4,
        title: "Swedish",
        imageSrc: "SE",
      },
      {
        id: 5,
        title: "French",
        imageSrc: "FR",
      },
      {
        id: 6,
        title: "English",
        imageSrc: "GB-ENG",
      },
    ]);

    // Unit 01 of Hindi
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //Hindi
        title: "Unit 1",
        description: "Learn the basics of Hindi",
        order: 1,
      },
    ]);

    // Lesson 01 of Unit 01 of Hinidi

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 3,
      },
      {
        id: 4,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 4,
      },
      {
        id: 5,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 5,
      },
      {
        id: 6,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 6,
      },
      {
        id: 7,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 6,
      },
      {
        id: 8,
        unitId: 1, //Hindi Learn the basics of Hindi
        title: "Nouns",
        order: 6,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Noun
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the Man?"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "पुरुष",
        audioSrc: "/es_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: false,
        text: "महिला",
        audioSrc: "/es_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: false,
        text: "रोबोट",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    console.log("Seeding Finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
