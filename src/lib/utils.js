import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// CHANGE #17: builds a correct URL for files in /public (images, resume.pdf)
// so they work on GitHub Pages no matter what your repo is called.
export const asset = (path) =>
  import.meta.env.BASE_URL + String(path).replace(/^\//, "");
