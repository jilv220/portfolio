/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
