import FollowMe from "@/components/follow-me";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <main className={cn("container px-4 pt-14 max-w-2xl")}>
      <Heading variant="h1" as="h1">
        About Me
      </Heading>
      <FollowMe />
    </main>
  );
}
