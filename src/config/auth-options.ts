import { Conf } from "@/config";
import { db } from "@/db/drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";

import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	adapter: DrizzleAdapter(db),
	providers: [
		GithubProvider({
			clientId: Conf.GITHUB_ID,
			clientSecret: Conf.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: Conf.GOOGLE_CLIENT_ID,
			clientSecret: Conf.GOOGLE_CLIENT_SECRET,
		}),
		DiscordProvider({
			clientId: Conf.DISCORD_CLIENT_ID,
			clientSecret: Conf.DISCORD_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async session({ session, user }) {
			// Expose userId to client
			session.user.id = user.id;
			return session;
		},
	},
};
