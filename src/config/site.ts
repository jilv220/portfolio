export const siteConfig = {
  title: "Lyu's Portfolio",
  description: "A portfolio that covers blog, projects and overall of Lyu Ji.",
  mainNav: [
    {
      href: "/blog",
      name: "blog",
    },
    {
      href: "/projects",
      name: "projects",
    },
    {
      href: "/about",
      name: "about",
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
