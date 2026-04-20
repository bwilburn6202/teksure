/**
 * GuideVideo — Responsive YouTube / video embed for guide detail pages
 *
 * Accepts a videoUrl (YouTube embed URL like https://youtube.com/embed/xxxxx)
 * and renders a responsive 16:9 player with a lazy-loaded iframe.
 *
 * Usage:
 *   {guide.videoUrl && <GuideVideo url={guide.videoUrl} title={guide.title} />}
 */

import { useState } from "react";
import { Play } from "lucide-react";

interface Props {
  url: string;
  title?: string;
}

export default function GuideVideo({ url, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  // Derive a YouTube thumbnail if we can
  // YouTube embed URLs look like: https://www.youtube.com/embed/VIDEO_ID
  const getYoutubeThumbnail = (embedUrl: string): string | null => {
    const match = embedUrl.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
    if (match) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return null;
  };

  const thumbnail = getYoutubeThumbnail(url);

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black">
      {/* Title bar */}
      {title && (
        <div className="bg-gray-900 text-white text-sm px-4 py-2 flex items-center gap-2">
          <Play className="h-4 w-4 text-red-400 fill-red-400 flex-shrink-0" />
          <span className="truncate">{title} — Video Tutorial</span>
        </div>
      )}

      {/* 16:9 responsive wrapper */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {/* Thumbnail click-to-load (avoids autoloading iframe which is slower) */}
        {!loaded && thumbnail ? (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label="Play video tutorial"
          >
            <img
              src={thumbnail}
              alt={`Thumbnail for ${title ?? "video tutorial"}`}
              className="w-full h-full object-cover"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 text-white fill-white ml-1" />
              </div>
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center text-white text-sm font-medium drop-shadow">
              Click to play video
            </p>
          </button>
        ) : (
          <iframe
            src={loaded ? `${url}?autoplay=1&rel=0` : url}
            title={title ?? "Video tutorial"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
        )}

        {/* Fallback if no thumbnail (just load iframe directly) */}
        {!loaded && !thumbnail && (
          <iframe
            src={url}
            title={title ?? "Video tutorial"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
        )}
      </div>

      {/* Caption */}
      <div className="bg-gray-900 text-gray-400 text-xs px-4 py-2 text-center">
        Video tutorial — watch and follow along at your own pace
      </div>
    </div>
  );
}
