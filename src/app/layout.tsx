import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";
import NextAuthSessionProvider from "@/components/session-provider";
import { siteConfig } from "@/config/site";
import NextQueryProvider from "@/components/query-provider";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

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
          inter.className
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
                <Header></Header>
                {children}
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
