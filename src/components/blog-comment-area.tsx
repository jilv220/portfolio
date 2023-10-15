"use client";

import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useForm } from "react-hook-form";
import { Text } from "./ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FEComment, FEInsertCommentSchema } from "@/db/schema/comments";
import BlogCommentList from "./blog-comment-list";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BlogCommentProps } from "./blog-comment";

function UnAuthed({
  path,
  comments,
}: {
  path: string;
  comments: BlogCommentProps[];
}) {
  return (
    <>
      <Textarea placeholder="Please login to leave a comment." disabled />
      <Link
        href={`/login?callbackUrl=${path}`}
        className={cn(buttonVariants({ variant: "default" }), "my-4")}
      >
        Log In
      </Link>
      <BlogCommentList comments={comments} />
    </>
  );
}

export default function BlogCommentArea() {
  const path = usePathname();
  const { data, status } = useSession();
  const userAvatar = data?.user?.image || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof FEInsertCommentSchema>>({
    // weird version incompatible issue between zod and hook-form
    resolver: zodResolver(FEInsertCommentSchema),
  });

  const slug = path.split("/").at(-1) || "";
  const pathFetchComment = `/api/comment/${slug}`;

  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["comment", slug],
    queryFn: async () =>
      await fetch(pathFetchComment).then((res) => res.json()),
  });
  const comments = query.data;

  const mutation = useMutation({
    mutationFn: async (data: FEComment) =>
      await fetch(pathFetchComment, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: data.content,
        }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", slug] });
    },
  });

  // Don't forget that there are three states...
  if (status !== "authenticated") {
    return <UnAuthed path={path} comments={comments} />;
  }

  const submitHandler = async (data: FEComment) => {
    mutation.mutate({
      content: data.content,
    });
    reset();
  };

  return (
    <>
      <form id="comment-area-form" onSubmit={handleSubmit(submitHandler)}>
        {errors.content && (
          <Text className="text-destructive" role="alert">
            {errors.content?.message as string}
          </Text>
        )}
        <Textarea
          className="mt-2"
          placeholder="What are your thoughts?"
          {...register("content")}
          aria-invalid={errors.content ? "true" : "false"}
        />
      </form>
      <div className="my-4 flex flex-row justify-between">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar} />
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
        <div className="space-x-2">
          <input
            type="submit"
            form="comment-area-form"
            className={cn(
              buttonVariants({ variant: "default" }),
              "cursor-pointer"
            )}
            value="Send"
          />
          <Button
            variant={"destructive"}
            onClick={() => signOut({ callbackUrl: path })}
          >
            Log Out
          </Button>
        </div>
      </div>
      <BlogCommentList comments={comments} />
    </>
  );
}
