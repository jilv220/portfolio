import { ModeToggle } from "./theme-toggle";
import { NavLinks } from "./nav-links";
import { Text } from "./ui/typography";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container flex items-center space-x-2 h-14">
        <Text className="text-foreground" as="div" variant="largeText">
          {siteConfig.title}
        </Text>
        <div className="flex-grow">
          <nav className="flex justify-center items-center space-x-6 text-base font-medium text-foreground/60">
            <NavLinks></NavLinks>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </header>
  );
}
