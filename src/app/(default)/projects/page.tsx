import ProjectCard from "@/components/project-card";
import { Heading } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <main className="container pt-6">
      <Heading variant="h3" as="h1">
        Main Projects
      </Heading>
      <section className="flex flex-col gap-4 pt-6 md:grid md:grid-cols-3">
        <ProjectCard
          title="Next13 Realworld"
          description="An Implementation of Realworld Spec Using Next13"
          tags={["react", "nextjs", "tailwindcss", "third-party-api"]}
          link="https://github.com/jilv220/next13-realworld"
          liveLink="https://next13-realworld.vercel.app/"
        ></ProjectCard>
        <ProjectCard
          title="Lucia Auth Server"
          description="A starter auth-server with email login, email verification, password reset, 
            and oauth implemented using lucia-auth"
          tags={["express", "lucia-auth", "nodejs"]}
          link="https://github.com/jilv220/lucia-auth-server"
        ></ProjectCard>
        <ProjectCard
          title="Xcursor Build"
          description="A system to effectly build custom cursor theme for X11"
          tags={["bash", "shell", "just"]}
          link="https://github.com/jilv220/xcursor-build"
        ></ProjectCard>
        <ProjectCard
          title="Lbrygen"
          description="An Alternative Frontend for Odysee Written in Vue"
          tags={["vue", "html", "rxjs", "tailwindcss"]}
          link="https://github.com/jilv220/lbrygen-frontend"
        ></ProjectCard>
        <ProjectCard
          title="Quote Translation Bot"
          description="A Twitter Bot That Quotes Tweets and Translate Them into Another Language"
          tags={["python", "twitter-api", "deepl-api", "sqlite", "systemd"]}
          link="https://github.com/jilv220/quote_translation_bot"
        ></ProjectCard>
      </section>

      <Heading as="h2" className="pt-6">
        {" "}
        Misc.{" "}
      </Heading>
      <section className="flex flex-col gap-4 py-6 md:grid md:grid-cols-3">
        <ProjectCard
          title="BB_RPB_TSL"
          description="A Trading Strategy for the Freqtrade Crypto Bot"
          tags={["python", "freqtrade"]}
          link="https://github.com/jilv220/BB_RPB_TSL"
        ></ProjectCard>
        <ProjectCard
          title="Nos Naive Recommend"
          description="A Naive Recommendation System for Nostr, Based on Zero-Shot Classifier"
          tags={["fastify", "redis", "docker", "rambda", "nostr"]}
          link="https://github.com/jilv220/nos-naive-recommend"
        ></ProjectCard>
        <ProjectCard
          title="Dotfiles"
          description="Personal Dotfiles For Hyprland WM. Just Put it Here for Fun"
          tags={["hyprland", "bash"]}
          link="https://github.com/jilv220/hyprland-dotfiles"
        ></ProjectCard>
      </section>
    </main>
  );
}
