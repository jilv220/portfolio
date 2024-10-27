import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Footer() {
	return (
		<footer className="mt-auto border-t py-2 pr-2 md:px-4 md:py-0">
			<div className="flex justify-end space-x-2 text-balance py-2 text-center text-muted-foreground text-sm leading-loose md:space-x-0 md:text-left">
				<Link
					className={cn(
						buttonVariants({
							variant: "base",
							size: "icon",
						}),
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
					)}
					href="https://www.linkedin.com/in/lyu-ji-832670250/"
					target="_blank"
				>
					<Linkedin></Linkedin>
				</Link>
			</div>
		</footer>
	);
}
