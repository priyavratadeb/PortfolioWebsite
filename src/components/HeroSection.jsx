import { ArrowDown } from "lucide-react";
import { profile } from "@/data/content";
import { SmartImage } from "./SmartImage";

// CHANGE #9: Hero is now your required "Welcome / Summary" component.
// Pulls name, headline, welcome statement and headshot from content.js.
// Fixed `max-2-2xl` typo. Added a headshot (counts as one of your 5 visuals)
// and a button to the resume. Scroll arrow is now a real link.
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="mx-auto h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border-2 border-primary/60 opacity-0 animate-fade-in">
            <SmartImage
              src={profile.headshot}
              alt={profile.headshotAlt}
              className="rounded-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              {profile.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-primary opacity-0 animate-fade-in-delay-2">
            {profile.headline}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {profile.welcome}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
            <a href="#resume" className="outline-button">
              See my resume
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-200 hover:translate-y-1 motion-safe:animate-scroll-bounce"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
