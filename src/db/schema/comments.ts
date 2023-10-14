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

const commentSchemaOverride = {
  content: z
    .string()
    .nonempty({
      message: "comment cannot be empty",
    })
    .max(256, {
      message: "comment cannot be more than 256 characters",
    }),
};

export const insertCommentSchema = createInsertSchema(
  comments,
  commentSchemaOverride
);
export const FEInsertCommentSchema = insertCommentSchema.pick({
  content: true,
});

export const selectCommentSchema = createSelectSchema(
  comments,
  commentSchemaOverride
);

export type Comment = z.infer<typeof selectCommentSchema>;
export type Comments = Comment[];
