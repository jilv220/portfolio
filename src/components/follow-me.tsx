"use client";

import { Github, Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FollowMe() {
  return (
    <div
      className="fixed left-0 flex flex-col 
      [&>*]:h-14 [&>*]:w-14 [&>*]:text-[#fafafa] 
      [&>*]:hover:ease-out [&>*]:hover:duration-500  
      [&>*>*]:h-8 [&>*>*]:w-8"
      style={{
        top: `calc(25% - (56px / 2))`,
      }}
    >
      <Link
        className={cn(
          buttonVariants({
            variant: "base",
            size: "icon",
          }),
          "rounded-none rounded-tr-lg bg-[#4e545a] ",
          "hover:bg-[#4e545a]/90 hover:ml-[-20px] hover:pl-[20px] hover:w-[76px]",
          "hover:translate-x-[20px] hover:transition "
        )}
        href="https://github.com/jilv220"
        target="_blank"
      >
        <Github></Github>
      </Link>
      <Link
        className={cn(
          buttonVariants({
            variant: "base",
            size: "icon",
          }),
          "rounded-none rounded-br-lg bg-[#0077ba] ",
          "hover:bg-[#0077ba]/90 hover:ml-[-20px] hover:pl-[20px] hover:w-[76px]",
          "hover:translate-x-[20px] hover:transition "
        )}
        href="https://www.linkedin.com/in/lyu-ji-832670250/"
        target="_blank"
      >
        <Linkedin></Linkedin>
      </Link>
    </div>
  );
}
