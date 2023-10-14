import { formatDistanceToNowStrict } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type BlogCommentProps = {
  content: string;
  userName: string;
  userAvatar: string;
  createdAt: string;
};

export default function BlogComment({
  content,
  userName,
  userAvatar,
  createdAt,
}: BlogCommentProps) {
  const commentDate = formatDistanceToNowStrict(new Date(createdAt), {
    addSuffix: true,
  });

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={userAvatar} />
        <AvatarFallback>AF</AvatarFallback>
      </Avatar>
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
