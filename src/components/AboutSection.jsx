import { Cpu, Lightbulb, Users } from "lucide-react";
import { about } from "@/data/content";

const icons = { cpu: Cpu, users: Users, lightbulb: Lightbulb };

// CHANGE #10: About is now your required Biography. Replaced the fake web-dev
// text and cards with your story + 3 strengths from content.js. The empty
// "Download CV" link (href="") now points to the Resume section. Paragraphs are
// left-aligned for readability.
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {about.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Get in touch
              </a>
              <a href="#resume" className="outline-button text-center">
                View resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {about.highlights.map((h, i) => {
              const Icon = icons[h.icon] ?? Lightbulb;
              return (
                <div key={i} className="gradient-border bg-card p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg">{h.title}</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {h.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
