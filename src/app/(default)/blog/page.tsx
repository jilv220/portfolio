import BlogPostPreview from "@/components/blog-post-preview";
import { getAllPosts } from "@/lib/getBlogs";
import { postsSchema } from "@/schemas/post";
import { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();
  const blogPath = path.join(__dirname).split("/").at(-1)!;

  const parseRes = postsSchema.safeParse(posts);
  if (!parseRes.success) {
    console.error(parseRes.error);
    return <div>Failed to retreive posts...</div>;
  }

  const postsMeta = parseRes.data
    .map((e) => {
      return {
        ...e.data,
        slug: `${blogPath}/${e.slug}`,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      {postsMeta.map((pm) => (
        <BlogPostPreview {...pm} key={pm.title} />
      ))}
    </>
  );
}
