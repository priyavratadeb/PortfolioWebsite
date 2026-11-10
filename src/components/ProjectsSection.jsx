import { ExternalLink, GitBranch } from "lucide-react";
import { discovery, projects } from "@/data/content";
import { SmartImage } from "./SmartImage";

// CHANGE #14: Rebuilt. Now has
//   (a) the Discovery Project Feature: Problem / Process / Outcome, a photo
//       gallery, optional video and links (assignment requirement), and
//   (b) a scalable "More projects" grid driven by the `projects` list in
//       content.js - add an entry there and a new card appears.
// Fixes: the tag <span> had no `key`; link icons only show if you gave a URL
// (before they all pointed to "#"); removed Pedro's GitHub link.

const Paragraphs = ({ items }) =>
  items.map((p, i) => (
    <p key={i} className="text-muted-foreground leading-relaxed">
      {p}
    </p>
  ));

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        {/* ---------- Discovery Project Feature ---------- */}
        <article
          aria-labelledby="discovery-title"
          className="bg-card rounded-lg p-6 md:p-10 shadow-xs text-left"
        >
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 id="discovery-title" className="text-2xl md:text-3xl font-semibold">
              {discovery.title}
            </h3>
            {discovery.inProgress && (
              <span className="px-3 py-1 text-xs font-medium rounded-full border border-primary text-primary">
                In progress
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground mb-8">{discovery.subtitle}</p>

          <div className="space-y-8 max-w-prose">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">The Problem</h4>
              <Paragraphs items={discovery.problem} />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">The Process</h4>
              <Paragraphs items={discovery.process} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {discovery.images.map((img) => (
              <figure key={img.src}>
                <div className="aspect-4/3 overflow-hidden rounded-md">
                  <SmartImage src={img.src} alt={img.alt} className="rounded-md" />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="space-y-3 max-w-prose">
            <h4 className="text-xl font-semibold">The Outcome</h4>
            <Paragraphs items={discovery.outcome} />
          </div>

          {discovery.video && (
            <div className="mt-10 aspect-video overflow-hidden rounded-md">
              <iframe
                src={discovery.video}
                title={`${discovery.title} video`}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          )}

          {discovery.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {discovery.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button flex items-center gap-2"
                >
                  <ExternalLink size={16} aria-hidden="true" /> {l.label}
                </a>
              ))}
            </div>
          )}
        </article>

        {/* ---------- More projects (scalable grid) ---------- */}
        {projects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mt-16 mb-8 text-center">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <SmartImage
                      src={project.image}
                      alt={project.imageAlt}
                      imgClassName="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} demo`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source code`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <GitBranch size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
