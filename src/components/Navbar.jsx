import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/content";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Career Goals", href: "#goals" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navItems.map((i) => i.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const linkClass = (href) =>
    cn(
      "transition-colors duration-300 hover:text-primary",
      active === href.slice(1) ? "text-primary font-medium" : "text-foreground/80"
    );

  return (
    <>
      <nav
        aria-label="Main"
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-foreground flex items-center"
            href="#hero"
          >
            <span className="text-glow">{profile.name}</span>
          </a>

          <div className="flex items-center gap-2">
            {/* desktop nav */}
            <div className="hidden lg:flex space-x-8 mr-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={active === item.href.slice(1) ? "true" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-foreground"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              className={linkClass(item.href)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
