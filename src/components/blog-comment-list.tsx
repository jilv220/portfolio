"use client";

import { useMutationState } from "@tanstack/react-query";
import BlogComment, { BlogCommentProps } from "./blog-comment";

export type BlogCommentListProps = {
  comments: BlogCommentProps[];
};

export default function BlogCommentList({ comments }: BlogCommentListProps) {
  const variables = useMutationState({
    filters: {
      mutationKey: ["addComment", comments[0].slug],
      status: "pending",
    },
    select: (mutation) => mutation.state.variables,
  }) as BlogCommentProps[];

  return (
    <div className="pb-12 pt-2 [&>*]:mt-6">
      {variables.length !== 0 &&
        variables.map((cm) => <BlogComment {...cm} key={cm.createdAt} />)}

      {comments.map((cm) => (
        <BlogComment {...cm} key={cm.createdAt} />
      ))}
    </div>
  );
}
