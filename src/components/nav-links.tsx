"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  let pathName = usePathname().slice(1);

  // handle the index rewrite
  if (pathName === "") {
    pathName = "about";
  }

  const Links = siteConfig.mainNav;

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {Links.map((el, i) => (
        <Link
          href={el.href}
          className={cn(
            "hover:text-foreground/80",
            pathName.startsWith(el.name) && "text-foreground"
          )}
          key={i}
        >
          {capitalizeFirstLetter(el.name)}
        </Link>
      ))}
    </>
  );
}
