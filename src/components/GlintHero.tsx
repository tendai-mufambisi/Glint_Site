import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlintHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-danger/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-silver/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-danger/30 bg-danger/10 px-4 py-1.5"
        >
          <ShieldAlert className="h-4 w-4 text-danger pulse-danger" />
          <span className="text-xs font-medium tracking-wide text-danger">YOUR SECRETS ARE ONE CLICK AWAY FROM BEING LEAKED</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gradient-silver text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
        >
          Your AI knows
          <br />
          your secrets.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-4 text-2xl font-light text-silver-dim md:text-3xl"
        >
          Stop them before they leave.
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          One accidental paste of an API key or password into ChatGPT can compromise
          your entire infrastructure. <span className="font-semibold text-danger">Forever.</span>{" "}
          There is no "undo" button for AI memory.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="hero" size="lg" className="px-8 py-6 text-base">
            PROTECT MY BROWSER NOW
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-muted-foreground">
            Free • Works on 40+ AI platforms • No data leaves your browser
          </p>
        </motion.div>
      </div>

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div
          className="absolute left-0 h-px w-full bg-silver"
          style={{ animation: "scanline 4s linear infinite" }}
        />
      </div>
    </section>
  );
}
