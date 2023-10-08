"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default function OAuthBtns() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/blog");
  }

  return (
    <Button onClick={() => signIn("github", { callbackUrl: "/blog" })}>
      Sign in with Github
    </Button>
  );
}
