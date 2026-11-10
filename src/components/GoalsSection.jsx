import { goals } from "@/data/content";

// CHANGE #12 (NEW FILE): Required component "Career Goals". A step-by-step
// timeline (this IS a real sequence) that answers "how do I get from here to
// there?", which is exactly what the assignment asks for.
export const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {goals.heading}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {goals.intro}
        </p>

        <ol className="relative space-y-8 border-l-2 border-primary/40 ml-3 text-left">
          {goals.steps.map((s, i) => (
            <li key={i} className="pl-8 relative">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background"
              />
              <p className="text-sm font-medium text-primary">{s.label}</p>
              <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
