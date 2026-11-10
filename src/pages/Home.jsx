import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ResumeSection } from "../components/ResumeSection";
import { GoalsSection } from "../components/GoalsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

// CHANGE #20: page now follows the logical order the rubric asks for:
// Welcome -> About -> Resume -> Career Goals -> Skills -> Projects -> Contact.
// ThemeToggle moved into the Navbar (#7). Added a "skip to content" link.
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <StarBackground />
      <Navbar />

      <main id="main">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <GoalsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
