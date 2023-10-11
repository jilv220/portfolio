import { ModeToggle } from "./theme-toggle";
import { NavLinks } from "./nav-links";
import { NavDropDown } from "./nav-dropdown";
import { Text } from "./ui/typography";

export function Header() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center space-x-2">
        <Text className="text-foreground" as="div" variant="largeText">
          Lyu&#39;s Portfolio
        </Text>
        <div className="flex-grow">
          <nav
            className="flex items-center justify-center space-x-6 text-base 
                text-foreground/60 font-medium"
          >
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
