"use client";

import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FieldValue, useForm, FieldValues } from "react-hook-form";
import { Text } from "./ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FEInsertCommentSchema,
  insertCommentSchema,
} from "@/db/schema/comments";

export default function BlogCommentArea() {
  const path = usePathname();
  const { data, status } = useSession();

  const unAuthed = status === "unauthenticated";
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

  const submitHandler = async (data: z.infer<typeof FEInsertCommentSchema>) => {
    console.log(data.content);
    await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: data.content,
        slug: path.split("/").at(-1),
      }),
    }).catch((e) => console.error(e));
    reset();
  };

  return (
    <>
      {unAuthed ? (
        <>
          <Textarea placeholder="Please login to leave a comment." disabled />
          <Link
            href={`/login?callbackUrl=${path}`}
            className={cn(buttonVariants({ variant: "default" }), "my-4")}
          >
            Log In
          </Link>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(submitHandler)}>
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
            <div className="my-4 flex flex-row justify-between">
              <Avatar className="h-10 w-10">
                <AvatarImage src={userAvatar} />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="space-x-2">
                <input
                  type="submit"
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
          </form>
        </>
      )}
    </>
  );
}
