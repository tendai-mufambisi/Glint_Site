import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlintNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-danger" />
          <span className="text-lg font-bold tracking-widest text-foreground">GLINT</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How it Works</a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Demo</a>
        </div>
        <Button variant="heroOutline" size="sm">
          Add to Chrome — Free
        </Button>
      </div>
    </motion.nav>
  );
}
