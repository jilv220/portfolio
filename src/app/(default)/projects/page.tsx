import ProjectCard from "@/components/project-card";
import { Heading } from "@/components/ui/typography";

export default function Projects() {
  return (
    <main className="pt-6 container">
      <Heading as="h2"> Main Projects </Heading>
      <section className="grid grid-cols-3 gap-4 pt-6">
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
        <ProjectCard
          title="Next13 Realworld"
          description="An Implementation of Realworld Spec Using Next13"
          tags={["react", "nextjs", "tailwindcss", "third-party-api"]}
          link="https://github.com/jilv220/next13-realworld"
          liveLink="https://next13-realworld.vercel.app/"
        ></ProjectCard>
      </section>

      <Heading as="h2" className="pt-6">
        {" "}
        Misc.{" "}
      </Heading>
      <section className="grid grid-cols-3 gap-4 py-6">
        <ProjectCard
          title="BB_RPB_TSL"
          description="A Trading strategy for the Freqtrade crypto bot"
          tags={["python", "freqtrade"]}
          link="https://github.com/jilv220/BB_RPB_TSL"
        ></ProjectCard>
        <ProjectCard
          title="Nos Naive Recommend"
          description="A naive recommendation system for nostr, based on zero-shot classifier"
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
