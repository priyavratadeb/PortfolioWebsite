import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// CHANGE #7: - now lives inside the Navbar (it used to be hidden on phones)
//            - starts from the saved choice OR the visitor's system setting
//            - has an accessible label for screen readers
//            - fixed `focus:outlin-hidden` typo
export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage blocked - theme still changes for this visit */
    }
    setIsDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 hover:bg-primary/10 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-primary" />
      ) : (
        <Moon className="h-6 w-6 text-primary" />
      )}
    </button>
  );
};
