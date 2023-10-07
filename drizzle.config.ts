import "dotenv/config";
import type { Config } from "drizzle-kit";

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;
const connectionString = `mysql://${username}:${password}@${host}/portfolio?ssl={"rejectUnauthorized":true}`;

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
