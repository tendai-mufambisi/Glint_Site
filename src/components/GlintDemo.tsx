import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ShieldCheck } from "lucide-react";

const dirtyPrompt =
  'Hey, fix this bug in my code. Here is my connection string: mongodb+srv://admin:P@ssword123@cluster0.mongodb.net/prod';

export function GlintDemo() {
  const [typed, setTyped] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let i = 0;
    setTyped("");
    setShowAlert(false);
    setBlocked(false);
    const interval = setInterval(() => {
      if (i < dirtyPrompt.length) {
        setTyped(dirtyPrompt.slice(0, i + 1));
        i++;
        // Trigger alert when we reach the sensitive part
        if (i > 68) {
          setShowAlert(true);
        }
      } else {
        clearInterval(interval);
        setTimeout(() => setBlocked(true), 800);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient-silver text-3xl font-bold tracking-tight md:text-4xl">
            See the "Glint" moment
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch how Glint catches sensitive data before it's too late.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`glass-card overflow-hidden rounded-2xl transition-all duration-500 ${
            showAlert ? "glow-danger" : "glow-silver"
          }`}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-danger/60" />
            <div className="h-3 w-3 rounded-full bg-chart-5/60" />
            <div className="h-3 w-3 rounded-full bg-safe/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">ChatGPT — Prompt Input</span>
          </div>

          {/* Terminal body */}
          <div className="p-6">
            <p className="font-mono text-xs text-muted-foreground">{"// User types into ChatGPT:"}</p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-foreground">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-foreground" />
            </p>

            {/* Alert */}
            <AnimatePresence>
              {showAlert && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 flex items-center gap-3 rounded-lg border border-danger/30 bg-danger/10 p-4"
                >
                  {blocked ? (
                    <ShieldCheck className="h-5 w-5 shrink-0 text-safe" />
                  ) : (
                    <ShieldAlert className="h-5 w-5 shrink-0 text-danger pulse-danger" />
                  )}
                  <div>
                    <p className={`text-sm font-semibold ${blocked ? "text-safe" : "text-danger"}`}>
                      {blocked
                        ? "GLINT: Credential masked. You're safe now."
                        : "⚠ GLINT: Sensitive Data Detected — Password & Connection String"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {blocked
                        ? "The credential was redacted before leaving your browser."
                        : "A database credential was found in your prompt. Blocking send..."}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
