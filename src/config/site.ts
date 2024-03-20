export const siteConfig = {
  titleTemplate: "Lyu Ji, React, Typescript, Nextjs",
  description: `Junior Software Engineer. Check out my projects, read some articles, 
  connect me on social media, or send me a message or inqury.`,
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
      href: "/resume",
      name: "resume"
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
