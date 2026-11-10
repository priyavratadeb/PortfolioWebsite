import { Download, ExternalLink } from "lucide-react";
import { resume, profile } from "@/data/content";
import { asset } from "@/lib/utils";

// CHANGE #11 (NEW FILE): Required component "Resume". Shows education and
// experience right on the page AND gives View + Download buttons for the PDF.
export const ResumeSection = () => {
  const pdf = asset(profile.resumeFile);

  return (
    <section id="resume" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {resume.heading}
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {resume.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href={pdf} target="_blank" rel="noreferrer" className="cosmic-button flex items-center justify-center gap-2">
            <ExternalLink size={16} aria-hidden="true" /> View resume (PDF)
          </a>
          <a href={pdf} download className="outline-button flex items-center justify-center gap-2">
            <Download size={16} aria-hidden="true" /> Download
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {resume.education.map((e, i) => (
                <div key={i} className="bg-card p-6 rounded-lg shadow-xs">
                  <h4 className="font-semibold text-lg">{e.school}</h4>
                  <p className="text-primary">{e.degree}</p>
                  <p className="text-sm text-muted-foreground mb-2">{e.dates}</p>
                  <p className="text-muted-foreground">{e.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {resume.experience.map((x, i) => (
                <div key={i} className="bg-card p-6 rounded-lg shadow-xs">
                  <h4 className="font-semibold text-lg">{x.role}</h4>
                  <p className="text-primary">{x.org}</p>
                  <p className="text-sm text-muted-foreground mb-2">{x.dates}</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {x.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
