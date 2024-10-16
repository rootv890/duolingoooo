/**
 * Initializes a database connection using Neon and Drizzle ORM for serverless environments.
 *
 * This setup connects to a Neon PostgreSQL database using the `@neondatabase/serverless` package
 * and `drizzle-orm` with the `neon-http` adapter. It allows you to interact with the database
 * using Drizzle ORM methods.
 *
 * @fileoverview This file configures the connection to a Neon database using Drizzle ORM
 * for use in serverless environments.
 *
 * @requires @neondatabase/serverless - A package for connecting to Neon databases in serverless setups.
 * @requires drizzle-orm/neon-http - The Drizzle ORM adapter for using with Neon via HTTP connections.
 *
 * @constant {function} sql - A SQL client created using the `neon` function, initialized with the
 * `DATABASE_URL` from environment variables.
 *
 * @constant {object} db - A Drizzle ORM instance that is used to interact with the Neon PostgreSQL database.
 *
 * @example
 * // Import the database instance in other parts of your application:
 * import db from './path-to-this-file';
 *
 * // Use `db` to run queries with Drizzle ORM
 * db.select().from('table_name').then(results => console.log(results));
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
// Create a SQL client using the Neon connection URL from environment variables
const sql = neon(process.env.DATABASE_URL!);

// Initialize the Drizzle ORM with the SQL client for interacting with the database
const db = drizzle({
  client: sql,
  schema: schema,
}); // schema config to query API

export default db;
