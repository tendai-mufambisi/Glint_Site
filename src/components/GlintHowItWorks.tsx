import { motion } from "framer-motion";
import { Download, Scan, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install in seconds",
    description: "Add Glint to Chrome with one click. No account needed, no configuration required.",
  },
  {
    icon: Scan,
    step: "02",
    title: "Type as usual",
    description: "Use ChatGPT, Claude, Gemini, or any of 40+ AI tools. Glint works silently in the background.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Get alerted instantly",
    description:
      "If a secret, key, or personal data is detected, Glint flags it before it ever leaves your browser.",
  },
];

export function GlintHowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient-silver text-3xl font-bold tracking-tight md:text-4xl">
            How Glint protects you
          </h2>
          <p className="mt-4 text-muted-foreground">Three steps. Zero friction.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary">
                <s.icon className="h-7 w-7 text-silver" />
              </div>
              <span className="mb-2 block font-mono text-xs tracking-widest text-muted-foreground">
                STEP {s.step}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
