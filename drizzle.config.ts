import { Conf } from "@/config";
import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/db/schema/*",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: Conf.DATABASE_URL || "",
	},
} satisfies Config;
