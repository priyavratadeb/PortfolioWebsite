import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn, asset } from "@/lib/utils";

// CHANGE #17 (NEW FILE): one image component used everywhere.
// - lazy loads (faster page load)
// - always requires alt text (accessibility)
// - shows a clear "add your image" box instead of a broken icon if the file
//   is missing, so nothing looks broken while you're still adding photos.
export const SmartImage = ({ src, alt, className, imgClassName }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed bg-secondary/40 p-4 text-center text-xs text-muted-foreground",
          className
        )}
      >
        <ImageOff size={20} aria-hidden="true" />
        <span className="break-all px-2">Add image: public/{src}</span>
      </div>
    );
  }

  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className, imgClassName)}
    />
  );
};
