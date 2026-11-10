import { useEffect, useRef, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const lastWidth = useRef(0);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    setStars(newStars);
  };

  useEffect(() => {
    generateStars();

    // CHANGE #8: only rebuild stars when the WIDTH changes. Phones fire
    // `resize` whenever the address bar hides while scrolling, which made the
    // stars jump and flicker.
    lastWidth.current = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;
        generateStars();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // CHANGE #8: aria-hidden so screen readers skip pure decoration.
    // Stars are white, so they only show in dark mode (that's intended).
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden dark:block"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
