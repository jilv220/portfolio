import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { siteConfig } from "@/config/site";

export function NavDropDown() {
  const items = siteConfig.dropDownNav;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-10 w-10">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            AI
          </span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map(
          (item) =>
            item.href && (
              <Link href={item.href} key={item.title}>
                <DropdownMenuItem className="cursor-pointer">
                  {item.title}
                </DropdownMenuItem>
              </Link>
            )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
