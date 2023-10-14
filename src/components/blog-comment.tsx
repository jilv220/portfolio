import { Comment } from "@/db/schema/comments";
import { formatDistanceToNowStrict } from "date-fns";

type BlogCommentProp = Pick<Comment, "createdAt" | "content"> & {
  userName: string;
};

export default function BlogComment({
  content,
  userName,
  createdAt,
}: BlogCommentProp) {
  const commentDate = formatDistanceToNowStrict(createdAt, {
    addSuffix: true,
  });

  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0"></div>
      <div className="flex-grow">
        <div className="flex space-x-2">
          <b>{userName}</b>
          <time className="text-muted-foreground">{commentDate}</time>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
