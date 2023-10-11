import { authOptions } from "@/config/auth-options";
import { db } from "@/db/drizzle";
import {
  comments,
  insertCommentSchema,
  selectCommentSchema,
} from "@/db/schema/comments";
import { getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sessions } from "@/db/schema/sessions";
import { eq } from "drizzle-orm";
import { dateNow } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  if (!token) {
    return NextResponse.json(
      {
        error: "User needs log in first to comment",
      },
      {
        status: 403,
      }
    );
  }

  const [userId] = await db
    .select({ userId: sessions.userId })
    .from(sessions)
    .where(eq(sessions.sessionToken, token.value));

  const newComment = {
    ...data,
    ...userId,
    createdAt: dateNow(),
  };

  const parseRes = insertCommentSchema.safeParse(newComment);
  if (!parseRes.success) {
    return NextResponse.json(
      {
        error: parseRes.error.flatten(),
      },
      {
        status: 500,
      }
    );
  }

  const [returned] = await db
    .insert(comments)
    .values(parseRes.data)
    .returning();
  return NextResponse.json(returned, {
    status: 201,
  });
}
