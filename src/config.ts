import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const Env = createEnv({
	server: {
		DATABASE_URL: z
			.string()
			.url()
			.default("postgres://postgres:postgres@localhost:5432/postgres"),
		NEXTAUTH_URL: z.string().url().default("http://localhost:3000"),
		NEXTAUTH_SECRET: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
		GITHUB_ID: z.string(),
		GITHUB_SECRET: z.string(),
		DISCORD_CLIENT_ID: z.string(),
		DISCORD_CLIENT_SECRET: z.string(),
		POSTMARK_SECRET: z.string(),
		SITE_EMAIL: z.string().email(),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});

const Conf = {
	...Env,
};

export { Conf };
