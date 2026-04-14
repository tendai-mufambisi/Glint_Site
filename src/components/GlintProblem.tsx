import { motion } from "framer-motion";
import { ShieldAlert, Zap, Globe } from "lucide-react";

const cards = [
  {
    icon: ShieldAlert,
    title: 'The "Un-send" Trap',
    description:
      "LLMs train on your inputs. If you leak a password today, it lives in the model's weights tomorrow. There is no delete button for AI memory.",
    variant: "danger" as const,
  },
  {
    icon: Zap,
    title: "Real-Time Scanning",
    description:
      "Glint scans every character as you type. It recognizes patterns for AWS keys, JWTs, credit cards, SSNs, and PII before you even hit Enter.",
    variant: "safe" as const,
  },
  {
    icon: Globe,
    title: "40+ AI Platforms",
    description:
      "ChatGPT, Claude, Gemini, Copilot, Grok, Perplexity, DeepSeek, Replit, and more. Wherever you work with AI, Glint is watching your back.",
    variant: "silver" as const,
  },
];

const variantStyles = {
  danger: "border-danger/20 hover:border-danger/40",
  safe: "border-safe/20 hover:border-safe/40",
  silver: "border-silver/10 hover:border-silver/30",
};

const iconStyles = {
  danger: "text-danger",
  safe: "text-safe",
  silver: "text-silver",
};

export function GlintProblem() {
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient-silver text-3xl font-bold tracking-tight md:text-4xl">
            Why you need a last line of defense
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Once a secret is sent to an LLM, it's gone. Glint makes sure that moment never comes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`glass-card rounded-2xl p-8 transition-all duration-300 ${variantStyles[card.variant]}`}
            >
              <card.icon className={`mb-4 h-8 w-8 ${iconStyles[card.variant]}`} />
              <h3 className="mb-3 text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
