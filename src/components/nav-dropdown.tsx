"use client";

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
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const DropDownContentUnAuthed = () => {
  const items = siteConfig.dropDownNav;
  return (
    <>
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
    </>
  );
};

const DropDownContentAuthed = () => {
  return (
    <>
      <DropdownMenuItem
        onClick={() => signOut({ callbackUrl: "/" })}
        className="cursor-pointer"
      >
        Sign Out
      </DropdownMenuItem>
    </>
  );
};

export function NavDropDown() {
  const { data: session, status } = useSession();
  const userAvatar = session?.user?.image || "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar} />
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {status === "authenticated" && (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {status === "unauthenticated" ? (
          <DropDownContentUnAuthed />
        ) : (
          <DropDownContentAuthed />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
