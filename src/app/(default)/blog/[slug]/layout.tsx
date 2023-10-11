import { cn } from "@/lib/utils";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className={cn("pt-14 container max-w-2xl px-4")}>{children}</main>
  );
}
