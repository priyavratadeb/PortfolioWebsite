import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

// CHANGE #16: replaced "Pedrotech.co" with your name; added a label for the
// back-to-top arrow (screen readers) and tidied spacing.
const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card relative border-t border-border flex flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {year} {profile.name}. All rights reserved.
      </p>
      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
