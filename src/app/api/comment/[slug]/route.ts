import { db } from "@/db/drizzle";
import {
  FEInsertCommentSchema,
  comments,
  insertCommentSchema,
} from "@/db/schema/comments";
import { NextRequest, NextResponse } from "next/server";
import { and, desc, eq } from "drizzle-orm";
import { dateNow } from "@/lib/utils";
import { users } from "@/db/schema/users";
import { z } from "zod";
import { getUserIdFromSession } from "@/lib/getUserIdFromSession";

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
      userId: users.id,
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
  const userId = await getUserIdFromSession();

  if (!userId) {
    return NextResponse.json(
      {
        error: "User needs log in first to comment",
      },
      {
        status: 401,
      }
    );
  }

  const parseDataRes = FEInsertCommentSchema.safeParse(data);
  if (!parseDataRes.success) {
    return NextResponse.json(
      {
        error: parseDataRes.error.flatten(),
      },
      {
        status: 500,
      }
    );
  }

  const newComment: unknown = {
    ...parseDataRes.data,
    slug,
    userId,
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
  const userId = await getUserIdFromSession();
  if (!userId) {
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
    .where(and(eq(comments.commentId, commentId), eq(comments.userId, userId)))
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
