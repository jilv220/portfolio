"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { Github, Twitter } from "lucide-react";
import Google from "./brand-icons/google-icon";
import Discord from "./brand-icons/discord-icon";

export default function OAuthBtns() {
  const { data: session, status } = useSession();

  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  if (status === "authenticated") {
    redirect(callbackUrl);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Button onClick={() => signIn("github", { callbackUrl })}>
        <Github className="mr-2 h-4 w-4" />
        Sign in with Github
      </Button>
      <Button onClick={() => signIn("google", { callbackUrl })}>
        <Google className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
      <Button onClick={() => signIn("discord", { callbackUrl })}>
        <Discord className="mr-2 h-4 w-4" />
        Sign in with Discord
      </Button>
    </div>
  );
}
