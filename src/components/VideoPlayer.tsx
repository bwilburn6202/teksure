import { useState, useEffect, useRef } from 'react';
import { Maximize2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

type YTPlayerInstance = {
  setPlaybackRate: (rate: number) => void;
  loadModule: (module: string) => void;
  unloadModule: (module: string) => void;
  setOption: (module: string, key: string, value: unknown) => void;
  destroy: () => void;
};

// Extend window for the YouTube IFrame API
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const SPEED_OPTIONS = [
  { label: '0.5×', value: 0.5 },
  { label: '0.75×', value: 0.75 },
  { label: '1×', value: 1 },
];

function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^?&/]+)/);
  return m ? m[1] : null;
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const videoId = extractYouTubeId(videoUrl);
  // Stable unique id per mount
  const iframeId = useRef(`yt-${Math.random().toString(36).slice(2)}`).current;
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const [speed, setSpeed] = useState(1);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load and init YouTube IFrame API
  useEffect(() => {
    if (!videoId) return;

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(iframeId, {
        events: {
          onReady: () => setPlayerReady(true),
        },
      }) as YTPlayerInstance;
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      // Chain onto any existing ready callback
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        initPlayer();
      };
      // Inject API script only once
      if (!document.getElementById('yt-iframe-api')) {
        const script = document.createElement('script');
        script.id = 'yt-iframe-api';
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);
      }
    }

    return () => {
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
      setPlayerReady(false);
    };
  }, [videoId, iframeId]);

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (playerReady && playerRef.current) {
      try { playerRef.current.setPlaybackRate(newSpeed); } catch { /* ignore */ }
    }
  };

  const handleCaptionsToggle = () => {
    const next = !captionsOn;
    setCaptionsOn(next);
    if (playerReady && playerRef.current) {
      try {
        if (next) {
          playerRef.current.loadModule('captions');
          playerRef.current.setOption('captions', 'track', { languageCode: 'en' });
        } else {
          playerRef.current.unloadModule('captions');
        }
      } catch { /* ignore */ }
    }
  };

  const handleFullscreen = () => {
    const target = containerRef.current ?? document.getElementById(iframeId);
    target?.requestFullscreen?.().catch(() => {
      // Fallback: fullscreen the iframe itself
      const iframe = document.getElementById(iframeId);
      iframe?.requestFullscreen?.();
    });
  };

  if (!videoId) return null;

  const embedSrc = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`;

  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-black">
      {/* 16:9 video container */}
      <div ref={containerRef} className="relative aspect-video bg-black">
        <iframe
          id={iframeId}
          src={embedSrc}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Control bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-t border-border flex-wrap">
        <Play className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
        <span className="text-xs font-medium text-muted-foreground mr-1">Speed:</span>

        {SPEED_OPTIONS.map(opt => (
          <Button
            key={opt.value}
            variant={speed === opt.value ? 'default' : 'outline'}
            size="sm"
            className="min-h-[44px] min-w-[52px] text-sm font-semibold"
            onClick={() => handleSpeedChange(opt.value)}
            aria-pressed={speed === opt.value}
          >
            {opt.label}
          </Button>
        ))}

        <div className="flex-1" />

        {/* Captions toggle */}
        <Button
          variant={captionsOn ? 'default' : 'outline'}
          size="sm"
          className="min-h-[44px] gap-1.5"
          onClick={handleCaptionsToggle}
          aria-pressed={captionsOn}
          aria-label={captionsOn ? 'Turn off captions' : 'Turn on captions'}
        >
          <span className="text-base leading-none" aria-hidden="true">CC</span>
          <span className="hidden sm:inline text-sm">{captionsOn ? 'Captions On' : 'Captions'}</span>
        </Button>

        {/* Fullscreen */}
        <Button
          variant="outline"
          size="sm"
          className="min-h-[44px] gap-1.5"
          onClick={handleFullscreen}
          aria-label="Watch fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Fullscreen</span>
        </Button>
      </div>
    </div>
  );
}
