export const siteConfig = {
  title: "Lyu Ji",
  description:
    "A portfolio with blog posts, projects and overall summary of Lyu Ji.",
  mainNav: [
    {
      href: "/",
      name: "about",
    },
    {
      href: "/projects",
      name: "projects",
    },
    {
      href: "/blog",
      name: "blog",
    },
  ],
  dropDownNav: [
    {
      title: "Sign In",
      href: "/login",
    },
    {
      title: "Sign Up",
      href: "/register",
    },
  ],
  dropDownNavAuthed: [
    {
      title: "Sign Out",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  limit: 10,
  pages: 20,
};
