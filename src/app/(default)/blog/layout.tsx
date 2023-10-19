import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function BlogListLayout({ children }: { children: ReactNode }) {
  return (
    <main className={cn("container px-4 pt-7 max-w-2xl md:pt-11")}>
      {children}
    </main>
  );
}
