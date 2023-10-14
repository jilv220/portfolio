import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className={cn("pt-14 container max-w-2xl px-4")}>{children}</main>
  );
}
