"use client";

import FollowMe from "@/components/follow-me";
import InquiryForm from "@/components/inquiry-form";
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
		<main className={cn("container max-w-2xl px-4 pt-14")}>
			<div className="flex flex-col items-center space-y-32">
				<section
					ref={aboutRef}
					className={cn(
						"-translate-x-8 mb-6 break-words text-center opacity-0",
						aboutEntry?.isIntersecting &&
							"translate-x-0 opacity-100 transition duration-1000",
					)}
				>
					<Heading className="mb-6" variant="h1" as="h1">
						About Me
					</Heading>
					<Text className="m-auto w-4/5">
						Hi, I&apos;m Lyu, a junior software engineer interested in web
						development. I am a Linux nerd who used to daily drive CachyOS (an
						Arch derivative). Recently, I&apos;ve also started using Vim motions
						inspired by Primeagen. However, I&apos;m not too fond of customizing
						my Vim configs, so I use the VSCode Vim plugin instead. Besides
						that, I also enjoy anime, Vtuber content, and Vocaloid music.
					</Text>
				</section>
				<section
					ref={inquiryRef}
					className={cn(
						"-translate-x-8 flex flex-col opacity-0",
						inquiryEntry?.isIntersecting &&
							"translate-x-0 opacity-100 transition duration-1000",
					)}
				>
					<div className="break-words text-center">
						<Heading className="mb-6" variant="h1" as="h2">
							Get in Touch
						</Heading>
						<Text className="m-auto w-4/5 text-muted-foreground">
							Interested in bringing your digital vision to life? Let&apos;s
							collaborate! Reach out to discuss your project and let&apos;s
							craft the perfect web solution together.
						</Text>
					</div>
					<InquiryForm />
				</section>
			</div>
		</main>
	);
}
