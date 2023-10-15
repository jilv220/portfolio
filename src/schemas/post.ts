import { z } from "zod";

export const postSchema = z.object({
  data: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
  content: z.string(),
  slug: z.string(),
});

export const postsSchema = postSchema.array();

export type Post = z.infer<typeof postSchema>;
export type PostMeta = Omit<Post, "content" | "slug">;
export type Posts = Post[];
