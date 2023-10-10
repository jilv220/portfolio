import { getAllPosts, getPostBySlug } from "@/lib/getBlogs";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = getPostBySlug(params.slug);
  if (!blog) {
    notFound();
  }

  const blogContent = await markdownToHtml(blog.content);

  return <main dangerouslySetInnerHTML={{ __html: blogContent }}></main>;
}
