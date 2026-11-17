import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const asset = (path) =>
  import.meta.env.BASE_URL + String(path).replace(/^\//, "");
