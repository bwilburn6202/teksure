/**
 * LazyImage — A drop-in replacement for <img> that lazy-loads.
 *
 * Uses the browser's native `loading="lazy"` attribute, which means
 * images below the fold are only downloaded when the user scrolls near them.
 * This speeds up initial page load (especially on guides and the homepage).
 *
 * Usage:
 *   import LazyImage from "@/components/LazyImage";
 *
 *   // Instead of:
 *   <img src="/images/wifi-guide.jpg" alt="WiFi guide" className="rounded-lg" />
 *
 *   // Use:
 *   <LazyImage src="/images/wifi-guide.jpg" alt="WiFi guide" className="rounded-lg" />
 *
 * Optional placeholder:
 *   <LazyImage
 *     src="/images/wifi-guide.jpg"
 *     alt="WiFi guide"
 *     className="rounded-lg"
 *     placeholder="/images/wifi-guide-thumb.jpg"  // shown while loading
 *   />
 *
 * All standard <img> props are passed through (width, height, className, etc.)
 *
 * Best practice: always provide width + height to prevent layout shift:
 *   <LazyImage src="..." alt="..." width={400} height={300} />
 */

import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Optional low-resolution placeholder shown while the full image loads */
  placeholder?: string;
  /** Extra Tailwind classes applied only to the wrapper div */
  wrapperClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  placeholder,
  className = "",
  wrapperClassName = "",
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Placeholder / skeleton shown before the image loads */}
      {!loaded && !errored && (
        <div
          className="absolute inset-0 bg-gray-100 animate-pulse"
          aria-hidden="true"
        >
          {placeholder && (
            <img
              src={placeholder}
              alt=""
              aria-hidden="true"
              className={`w-full h-full object-cover opacity-50 blur-sm ${className}`}
            />
          )}
        </div>
      )}

      {/* Actual image — hidden until loaded to avoid flash of broken image */}
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...rest}
        />
      )}

      {/* Fallback shown if the image fails to load */}
      {errored && (
        <div
          className={`bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}
          role="img"
          aria-label={alt}
        >
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
}
