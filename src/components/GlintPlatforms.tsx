import { motion } from "framer-motion";

const platforms = [
  "ChatGPT", "Claude", "Gemini", "Copilot", "Grok",
  "Perplexity", "Mistral", "DeepSeek", "Meta AI", "Replit",
  "Hugging Face", "AI Studio", "NotebookLM", "Blackbox", "character.ai",
];

export function GlintPlatforms() {
  return (
    <section className="relative overflow-hidden border-y border-border px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="mb-8 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          PROTECTING YOU ACROSS 40+ AI PLATFORMS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {platforms.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-silver/30 hover:text-foreground"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
