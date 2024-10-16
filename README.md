DUOLINGO CLONE

| Title                   | Commit                 | Status     | Date        |
| :---------------------- | :--------------------- | :--------- | :---------- |
| Intro                   | Project Setup 🛠️       | DONE!      | 15 Oct 2024 |
| Setup                   | ShadCn Setup           | DONE!      | 15 Oct 2024 |
| Buttons                 | Button Library 🔘      | DONE!      | 15 Oct 2024 |
| Marketing Page          | Layout ╉               | DONE!      | 15 Oct 2024 |
| Authentication          | Clerk JS               | DONE!      | 15 Oct 2024 |
| Footer                  | FOOTER FLAGS           | DONE!      | 16 Oct 2024 |
| Main Layout             | Main Layout ╉ Skeleton | DONE!      | 16 Oct 2024 |
| Sidebar                 | Left Sidebar           | DONE       | 16 Oct 2024 |
| Learn Page Wrappers     | Sticky Right Sidebar   | DONE       | 16 Oct 2024 |
| Drizzle & Neon          | Drizzle & Neon Setup   | DONE       | 16 Oct 2024 |
| Courses Page            | Course Fetch Setup     | DONE       | 16 Oct 2024 |
| User Progress           | User Progress Relation | DONE!      | 16 Oct 2024 |
| Seed Script             |                        | UNDER DEV! |             |
| Schema                  |                        | UNDER DEV! |             |
| Units                   |                        | UNDER DEV! |             |
| Lesson Header           |                        | UNDER DEV! |             |
| Exit Modal              |                        | UNDER DEV! |             |
| Challenge Cards         |                        | UNDER DEV! |             |
| Challenge Actions       |                        | UNDER DEV! |             |
| Challenge Finish Screen |                        | UNDER DEV! |             |
| Challenge Practice      |                        | UNDER DEV! |             |
| Shop                    |                        | UNDER DEV! |
| Stripe                  |                        | UNDER DEV! |
| Details                 |                        | UNDER DEV! |
| Admin                   |                        | UNDER DEV! |
| Deployment              |                        | UNDER DEV! |

Journal
Day 01
Nothing special so far, NextJS with Shadcn setup and Setup marketing page and sidebar layout with CLERK authentication. For flags I will be using FlagPack react package.

**Day 02**

    # Drizzle and Neon Setup

    1. Creata a project in neon
    2. Copy Postgresql connection string into ENV File
    3. Neon work is complete here for now!
    4. Drizzle ORM (NEON) time
    5. Install pacakges \
    ```
    			pnpm add drizzle-orm @neondatabase/serverless dotenv
    			pnpm add -D drizzle-kit tsx
    ```

    6. Paste NEON DB URL\
    	`‌DATABASE_URL=adkaljdljaskldklamsd`
    7. Create a DB directory on root directory and file `index.ts`
    	```
    		import { neon } from "@neondatabase/serverless";
    		import { drizzle } from "drizzle-orm/neon-http";
    		import * as schema from "./schema";
    		// Create a SQL client using the Neon connection URL from environment variables
    		const sql = neon(process.env.DATABASE_URL!);

    		// Initialize the Drizzle ORM with the SQL client for interacting with the database
    		const db = drizzle(sql, { schema }); // schema config to query API

    		export default db;

````

    8. Under same Dir create Schema.ts

```
    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

    export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    });

````

    9. Setup drizzle config file

```
import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

```
