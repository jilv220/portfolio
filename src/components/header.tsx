import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center space-x-2">
        <div className="font-bold">Lyu&#39;s Portfolio</div>
        <div className="flex-grow">
          <nav
            className="flex items-center justify-center space-x-6 text-sm 
                text-foreground/60 font-medium"
          >
            <NavLinks></NavLinks>
          </nav>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </header>
  );
}
