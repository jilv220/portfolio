import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getFilesFromDir(dirPath: string) {
  const dirFiles = fs.readdirSync(dirPath, {
    withFileTypes: true,
  });
  return dirFiles;
}

function getAllPosts() {
  const blogDirPath = path.join(process.cwd(), "public", "blog");
  const blogFiles = getFilesFromDir(blogDirPath);
  const blogs = blogFiles.map((file) => {
    if (!file.name.endsWith(".md")) return;
    const fileContent = fs.readFileSync(
      path.join(blogDirPath, file.name),
      "utf8"
    );
    const { data, content } = matter(fileContent);
    const slug = file.name.replace(/.md$/, "");
    return { data, content, slug };
  });

  return blogs;
}

function getPostBySlug(slug: string) {
  const blogDirPath = path.join(process.cwd(), "public", "blog");
  const blogFiles = getFilesFromDir(blogDirPath);
  const slugToFind = slug.concat(".md");
  const blog = blogFiles.find((file) => file.name === slugToFind);

  if (blog) {
    const fileContent = fs.readFileSync(
      path.join(blogDirPath, blog.name),
      "utf8"
    );
    const { data, content } = matter(fileContent);
    return { data, content, slug };
  }
}

export { getAllPosts, getPostBySlug };
