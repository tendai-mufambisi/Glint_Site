import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlintCTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-danger/5 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-gradient-silver text-4xl font-bold tracking-tight md:text-5xl">
          Ready to prompt
          <br />
          with confidence?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          Join thousands of developers and professionals who trust Glint to keep their secrets safe.
        </p>
        <div className="mt-10">
          <Button variant="hero" size="lg" className="px-10 py-6 text-base">
            Get GLINT for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          <span>Your data stays in your browser. We never see your prompts.</span>
        </div>
      </motion.div>
    </section>
  );
}
