"use client";

import FollowMe from "@/components/follow-me";
import InquryForm from "@/components/inqury-form";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export default function About() {
  const [aboutRef, aboutEntry] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [inquiryRef, inquiryEntry] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <main className={cn("container px-4 pt-14 max-w-2xl")}>
      <div className="flex flex-col items-center space-y-32">
        <section
          ref={aboutRef}
          className={cn(
            "opacity-0 -translate-x-8 mb-6 text-center break-words",
            aboutEntry?.isIntersecting &&
              "transition opacity-100 translate-x-0 duration-1000"
          )}
        >
          <Heading className="mb-6" variant="h1" as="h1">
            About Me
          </Heading>
          <Text className="w-4/5 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            bibendum elementum tellus, id sollicitudin sem vulputate nec. In
            vitae magna vitae nulla viverra condimentum. Aenean ut porta purus,
            quis auctor ligula. Integer mattis risus rutrum dapibus facilisis.
            Sed sit amet neque facilisis, consequat nisi in, dictum turpis. Sed
            vel laoreet lectus, vel accumsan sem. Aliquam accumsan posuere
            tristique.
          </Text>
        </section>
        <section
          ref={inquiryRef}
          className={cn(
            "opacity-0 -translate-x-8 flex flex-col",
            inquiryEntry?.isIntersecting &&
              "transition opacity-100 translate-x-0 duration-1000"
          )}
        >
          <div className="text-center break-words">
            <Heading className="mb-6" variant="h1" as="h2">
              Get in Touch
            </Heading>
            <Text className="text-muted-foreground w-4/5 m-auto">
              Interested in bringing your digital vision to life? Let&apos;s
              collaborate! Reach out to discuss your project and let&apos;s
              craft the perfect web solution together.
            </Text>
          </div>
          <InquryForm />
        </section>
        <FollowMe />
      </div>
    </main>
  );
}
