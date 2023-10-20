import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/getBlogs";

const url = process.env.NEXTAUTH_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts()!.map((post) => ({
    url: `${url}/blog/${post?.slug}`,
    lastModified: post?.data.date,
    priority: 0.7,
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes, ...posts];
}
