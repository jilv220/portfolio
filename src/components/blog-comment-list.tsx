"use client";

import BlogComment, { BlogCommentProps } from "./blog-comment";

type BlogCommentListProps = {
  comments: BlogCommentProps[];
};

export default function BlogCommentList({ comments }: BlogCommentListProps) {
  return (
    <div className="space-y-6 py-6">
      {comments &&
        comments.map((cm) => <BlogComment {...cm} key={cm.createdAt} />)}
    </div>
  );
}
