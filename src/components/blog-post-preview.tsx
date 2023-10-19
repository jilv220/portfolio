"use client";

import { Post, PostMeta } from "@/schemas/post";
import Link from "next/link";
import { typographyVariants } from "./ui/typography";
import { cn, distanceToNow } from "@/lib/utils";
import { Text } from "./ui/typography";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useRouter } from "next/navigation";

type Slug = Pick<Post, "slug">["slug"];
type BlogPostProps = PostMeta["data"] & {
  slug: Slug;
};

export default function BlogPostPreview({
  title,
  description,
  date,
  slug,
}: BlogPostProps) {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/${slug}`, {
      scroll: true,
    });
  };

  return (
    <article className="mb-5">
      <Card className="cursor-pointer" onClick={clickHandler}>
        <CardHeader className="pb-0">
          <Link
            className={cn(
              typographyVariants({ variant: "largeText" }),
              "text-2xl"
            )}
            href={slug}
          >
            {title}
          </Link>
        </CardHeader>

        <CardContent className="pt-1">
          <Text>{description}</Text>
        </CardContent>

        <CardFooter>
          <div className="text-muted-foreground">
            <time>{distanceToNow(date)}</time>
          </div>
        </CardFooter>
      </Card>
    </article>
  );
}
