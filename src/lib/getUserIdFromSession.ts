import { db } from "@/db/drizzle";
import { sessions } from "@/db/schema/sessions";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function getUserIdFromSession() {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  if (!token) {
    return undefined;
  }

  const [user] = await db
    .select({ userId: sessions.userId })
    .from(sessions)
    .where(eq(sessions.sessionToken, token.value));

  return user.userId;
}
