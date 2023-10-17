import { db } from "@/db/drizzle";
import { comments, insertCommentSchema } from "@/db/schema/comments";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sessions } from "@/db/schema/sessions";
import { desc, eq } from "drizzle-orm";
import { dateNow } from "@/lib/utils";
import { users } from "@/db/schema/users";
import { z } from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const blogComments = await db
    .select({
      commentId: comments.commentId,
      content: comments.content,
      createdAt: comments.createdAt,
      slug: comments.slug,
      userName: users.name,
      userAvatar: users.image,
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
        status: 401,
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
  const newCommentReturned = await db
    .insert(comments)
    .values(parseRes.data)
    .returning();

  return NextResponse.json(newCommentReturned, {
    status: 201,
  });
}

export async function DELETE(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  if (!token) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const searchParams = req.nextUrl.searchParams;
  const commentIdParam = searchParams.get("id");
  const parseRes = z.coerce.number().safeParse(commentIdParam);
  if (!parseRes.success) {
    return NextResponse.json(
      {
        error: parseRes.error.flatten(),
      },
      {
        status: 400,
      }
    );
  }

  const commentId = parseRes.data;
  const deleteRes = await db
    .delete(comments)
    .where(eq(comments.commentId, commentId))
    .returning();

  if (deleteRes.length === 0) {
    return NextResponse.json(
      {
        error: "Comment not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json("success");
}
