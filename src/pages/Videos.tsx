import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Play, Clock, Monitor, Laptop, Smartphone, Tablet } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import type { OSType } from '@/components/OSPicker';

// ── Types ─────────────────────────────────────────────────────────────────────
interface VideoTutorial {
  id: string;
  guide_slug: string;
  title: string;
  description: string | null;
  video_url: string;
  os_type: OSType;
  os_version: string | null;
  duration_seconds: number | null;
  thumbnail_url: string | null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDuration(seconds: number | null): string {
  if (!seconds) return '';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m} min`;
}

function getThumbnail(video: VideoTutorial): string {
  if (video.thumbnail_url) return video.thumbnail_url;
  const match = video.video_url.match(
    /(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^?&/]+)/
  );
  if (match) return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  return '';
}

// ── OS filter config ──────────────────────────────────────────────────────────
type OSFilter = 'all' | OSType;

const OS_FILTERS: { value: OSFilter; label: string; Icon: React.ElementType }[] = [
  { value: 'all',     label: 'All Devices', Icon: Play       },
  { value: 'windows', label: 'Windows',     Icon: Monitor    },
  { value: 'macos',   label: 'Mac',         Icon: Laptop     },
  { value: 'ios',     label: 'iPhone / iPad', Icon: Smartphone },
  { value: 'android', label: 'Android',     Icon: Tablet     },
];

const OS_LABELS: Record<OSType, string> = {
  windows: 'Windows',
  macos:   'Mac',
  ios:     'iPhone / iPad',
  android: 'Android',
};

const OS_ICONS: Record<OSType, React.ElementType> = {
  windows: Monitor,
  macos:   Laptop,
  ios:     Smartphone,
  android: Tablet,
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Videos() {
  const [activeFilter, setActiveFilter] = useState<OSFilter>('all');

  const { data: videos = [], isLoading } = useQuery<VideoTutorial[]>({
    queryKey: ['video-tutorials-browse'],
    queryFn: async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase as any)
        .from('video_tutorials')
        .select('id, guide_slug, title, description, video_url, os_type, os_version, duration_seconds, thumbnail_url')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as VideoTutorial[];
    },
    staleTime: 5 * 60 * 1000,
  });

  const filtered = activeFilter === 'all'
    ? videos
    : videos.filter(v => v.os_type === activeFilter);

  // Group by OS type for the "All" view
  const grouped = OS_FILTERS.slice(1).reduce<Record<OSType, VideoTutorial[]>>(
    (acc, f) => {
      const key = f.value as OSType;
      acc[key] = videos.filter(v => v.os_type === key);
      return acc;
    },
    {} as Record<OSType, VideoTutorial[]>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Video Tutorials for Beginners | TekSure"
        description="Watch step-by-step video tutorials for Windows, Mac, iPhone, iPad, and Android. Free, easy-to-follow guides made for everyday people."
        path="/videos"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'TekSure Video Tutorials',
          description: 'Free step-by-step video tutorials for Windows, Mac, iPhone, and Android.',
          url: 'https://teksure.com/videos',
        }}
      />

      <main id="main-content" className="container py-10 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Play className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Video Tutorials</h1>
              <p className="text-muted-foreground text-sm">
                Watch along — we show every step on screen.
              </p>
            </div>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl">
            All our video tutorials are made for everyday users. No jargon, no rushing —
            just clear, friendly instructions you can pause and rewind any time.
          </p>
        </div>

        {/* OS Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {OS_FILTERS.map(f => {
            const Icon = f.Icon;
            const isActive = activeFilter === f.value;
            return (
              <Button
                key={f.value}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                className="gap-2 min-h-[40px]"
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {f.label}
              </Button>
            );
          })}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-muted animate-pulse aspect-[4/3]" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4"></div>
            <p className="text-lg font-semibold mb-2">No videos yet for this device</p>
            <p className="text-muted-foreground text-sm mb-6">
              We're always adding new tutorials. Check back soon!
            </p>
            <Button variant="outline" onClick={() => setActiveFilter('all')}>
              View all videos
            </Button>
          </div>
        )}

        {/* Grouped layout (All view) */}
        {!isLoading && activeFilter === 'all' && videos.length > 0 && (
          <div className="space-y-12">
            {(Object.keys(grouped) as OSType[]).map(osType => {
              const group = grouped[osType];
              if (group.length === 0) return null;
              const OsIcon = OS_ICONS[osType];
              return (
                <section key={osType}>
                  <h2 className="flex items-center gap-2 text-xl font-semibold mb-5">
                    <OsIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {OS_LABELS[osType]}
                    <Badge variant="secondary" className="ml-1">{group.length}</Badge>
                  </h2>
                  <VideoGrid videos={group} />
                </section>
              );
            })}
          </div>
        )}

        {/* Flat grid (filtered view) */}
        {!isLoading && activeFilter !== 'all' && filtered.length > 0 && (
          <VideoGrid videos={filtered} />
        )}
      </main>

    </div>
  );
}

// ── Video card grid ───────────────────────────────────────────────────────────
function VideoGrid({ videos }: { videos: VideoTutorial[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map(v => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: VideoTutorial }) {
  const thumb = getThumbnail(video);
  const OsIcon = OS_ICONS[video.os_type];

  return (
    <Link to={`/guides/${video.guide_slug}`} aria-label={`Watch: ${video.title}`}>
      <Card className="h-full hover:shadow-md transition-shadow group overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {thumb ? (
            <img
              src={thumb}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Play className="h-10 w-10 text-muted-foreground" />
            </div>
          )}
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play className="h-7 w-7 text-primary ml-1" aria-hidden="true" />
            </div>
          </div>
          {/* Duration badge */}
          {video.duration_seconds && (
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {formatDuration(video.duration_seconds)}
            </span>
          )}
        </div>

        <CardContent className="pt-4 pb-5">
          {/* OS badge */}
          <div className="flex items-center gap-1.5 mb-2">
            <OsIcon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            <Badge variant="outline" className="text-xs">{OS_LABELS[video.os_type]}</Badge>
          </div>

          <p className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </p>
          {video.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
          )}
          <p className="text-xs text-primary mt-3 font-medium">Watch in guide →</p>
        </CardContent>
      </Card>
    </Link>
  );
}
