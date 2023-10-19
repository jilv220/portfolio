import { ModeToggle } from "./theme-toggle";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container flex items-center space-x-2 h-14">
        <div className="flex-grow">
          <nav className="flex justify-center items-center space-x-6 text-base font-medium text-foreground/60 md:justify-start">
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
