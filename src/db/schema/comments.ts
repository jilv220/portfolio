import {
  char,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "./users";
import { z } from "zod";

export const comments = pgTable("comment", {
  commentId: serial("commentId").primaryKey(),
  content: varchar("content", { length: 256 }).notNull(),
  slug: char("slug", { length: 50 }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const insertCommentSchema = createInsertSchema(comments);
export const FEInsertCommentSchema = insertCommentSchema.pick({
  content: true,
});
export const selectCommentSchema = createSelectSchema(comments);

export type Comment = z.infer<typeof selectCommentSchema>;
export type Comments = Comment[];
