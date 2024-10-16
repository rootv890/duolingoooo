import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const dbUrl = process.env.DATABASE_URL;
console.log(dbUrl);
if (!dbUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
