"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  var pathName = usePathname().slice(1);
  const Links = siteConfig.mainNav;

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {Links.map((el, i) => (
        <Link
          href={el.href}
          className={cn(pathName == el.name && "text-foreground")}
          key={i}
        >
          {capitalizeFirstLetter(el.name)}
        </Link>
      ))}
    </>
  );
}
