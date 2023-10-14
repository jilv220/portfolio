import { db } from "@/db/drizzle";
import { comments, insertCommentSchema } from "@/db/schema/comments";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sessions } from "@/db/schema/sessions";
import { desc, eq } from "drizzle-orm";
import { dateNow } from "@/lib/utils";
import { users } from "@/db/schema/users";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const blogComments = await db
    .select({
      content: comments.content,
      userName: users.name,
      userAvatar: users.image,
      createdAt: comments.createdAt,
    })
    .from(comments)
    .where(eq(comments.slug, slug))
    .leftJoin(users, eq(comments.userId, users.id))
    .orderBy(desc(comments.createdAt));

  return NextResponse.json(blogComments);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
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

  const newComment: unknown = {
    ...data,
    slug,
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

  // fix error here
  await db.insert(comments).values(parseRes.data);

  const [newCommentReturned] = await db
    .select({
      content: comments.content,
      userName: users.name,
      userAvatar: users.image,
      createdAt: comments.createdAt,
    })
    .from(comments)
    .where(eq(comments.slug, slug))
    .leftJoin(users, eq(comments.userId, users.id))
    .orderBy(desc(comments.createdAt))
    .limit(1);

  return NextResponse.json(newCommentReturned, {
    status: 201,
  });
}
