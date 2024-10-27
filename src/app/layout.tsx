import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import NextQueryProvider from "@/components/query-provider";
import NextAuthSessionProvider from "@/components/session-provider";
import { Container } from "@/components/ui/container";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: `About - ${siteConfig.titleTemplate}`,
		template: `%s - ${siteConfig.titleTemplate}`,
	},
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NextAuthSessionProvider>
						<NextQueryProvider>
							<Container>
								<Header />
								{children}
								<Footer />
							</Container>
							<Analytics />
						</NextQueryProvider>
					</NextAuthSessionProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
