import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function BlogListLayout({ children }: { children: ReactNode }) {
	return (
		<main className={cn("container max-w-2xl px-4 pt-7 md:pt-11")}>
			{children}
		</main>
	);
}
