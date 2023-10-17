"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { distanceToNow } from "@/lib/utils";
import { useSession } from "next-auth/react";

export type BlogCommentProps = {
  commentId: number;
  content: string;
  userName: string;
  userAvatar: string;
  createdAt: string;
  slug: string;
};

export default function BlogComment({
  commentId,
  content,
  userName,
  userAvatar,
  createdAt,
  slug,
}: BlogCommentProps) {
  const commentDate = distanceToNow(createdAt);
  const { data } = useSession();
  const isUserComment = data?.user?.name === userName;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () =>
      await fetch(`/api/comment/${slug}?id=${commentId}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", slug] });
    },
  });

  const deleteHandler = () => {
    mutation.mutate();
  };

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
          {isUserComment && (
            <button
              className="text-muted-foreground hover:text-destructive"
              onClick={deleteHandler}
            >
              x
            </button>
          )}
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
