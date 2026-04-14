import { Shield } from "lucide-react";

export function GlintFooter() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-danger" />
          <span className="text-sm font-bold tracking-widest text-muted-foreground">GLINT</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} GLINT. Built for the Internet Economy.
        </p>
      </div>
    </footer>
  );
}
