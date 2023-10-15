import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function BlogListLayout({ children }: { children: ReactNode }) {
  return (
    <main className={cn("pt-14 container max-w-2xl px-4")}>{children}</main>
  );
}
