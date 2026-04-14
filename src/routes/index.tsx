import { createFileRoute } from "@tanstack/react-router";
import { GlintNav } from "@/components/GlintNav";
import { GlintHero } from "@/components/GlintHero";
import { GlintPlatforms } from "@/components/GlintPlatforms";
import { GlintProblem } from "@/components/GlintProblem";
import { GlintHowItWorks } from "@/components/GlintHowItWorks";
import { GlintDemo } from "@/components/GlintDemo";
import { GlintCTA } from "@/components/GlintCTA";
import { GlintFooter } from "@/components/GlintFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GLINT — Your AI Privacy Guardian | Stop Secret Leaks" },
      { name: "description", content: "Glint detects passwords, API keys, and sensitive data in your AI prompts before they're sent. Free Chrome extension for 40+ AI platforms." },
      { property: "og:title", content: "GLINT — Your AI Privacy Guardian" },
      { property: "og:description", content: "Stop accidentally leaking secrets to ChatGPT, Claude, and 40+ AI tools. Free browser extension." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <GlintNav />
      <GlintHero />
      <GlintPlatforms />
      <GlintProblem />
      <GlintHowItWorks />
      <GlintDemo />
      <GlintCTA />
      <GlintFooter />
    </div>
  );
}
