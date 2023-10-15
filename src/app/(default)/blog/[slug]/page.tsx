import { Heading, Text } from "@/components/ui/typography";
import { getPostBySlug } from "@/lib/getBlogs";
import markdownToHtml from "@/lib/markdownToHtml";
import { cn, distanceToNow } from "@/lib/utils";
import { notFound } from "next/navigation";
import BlogCommentArea from "@/components/blog-comment-area";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = getPostBySlug(params.slug);
  if (!blog) {
    notFound();
  }

  const blogMeta = blog.data;
  const blogContent = await markdownToHtml(blog.content);
  const blogDate = distanceToNow(blogMeta.date);

  return (
    <article>
      <header>
        <Heading variant="h1">{blogMeta.title}</Heading>
        <Text className={cn("[&:not(:first-child)]:mt-2 text-xl")}>
          {blogMeta.description}
        </Text>
        <time className="flex mt-2 text-muted-foreground">{blogDate}</time>
      </header>
      <div
        className={cn(
          "mt-10 prose lg:prose-lg text-foreground [&>*]:text-foreground [&>*>*]:text-foreground"
        )}
        dangerouslySetInnerHTML={{ __html: blogContent }}
      ></div>
      <div className="mt-14">
        <BlogCommentArea />
      </div>
    </article>
  );
}
