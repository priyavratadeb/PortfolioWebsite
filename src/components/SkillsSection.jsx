import { skills } from "@/data/content";

// CHANGE #13: Replaced made-up percentage bars (which look odd and unprovable
// on a student site) with skills grouped by category. Filter buttons removed:
// everything is visible at once, which is easier for recruiters to scan.
// Fixed typos `text-forefround` and `hover:bd-secondary` by removing that code.
export const SkillsSection = () => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat} className="bg-card p-6 rounded-lg shadow-xs text-left">
              <h3 className="font-semibold text-lg mb-4">{cat}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <li
                      key={s.name}
                      className="px-3 py-1 text-sm rounded-full border bg-secondary text-secondary-foreground"
                    >
                      {s.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
