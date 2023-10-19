import { authOptions } from "@/config/auth-options";
import { getServerSession } from "next-auth";

export async function getUserIdFromSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return undefined;
  }

  return session.user.id;
}
