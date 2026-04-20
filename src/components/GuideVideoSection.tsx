import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { VideoPlayer } from '@/components/VideoPlayer';
import { OSPicker, type OSType } from '@/components/OSPicker';

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
  is_published: boolean;
}

interface GuideVideoRow {
  sort_order: number;
  video_tutorials: VideoTutorial;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const SESSION_KEY = 'teksure_selected_os';

function getSessionOS(): OSType | null {
  if (typeof window === 'undefined') return null;
  try {
    return (sessionStorage.getItem(SESSION_KEY) as OSType) ?? null;
  } catch {
    return null;
  }
}

function setSessionOS(os: OSType) {
  if (typeof window === 'undefined') return;
  try { sessionStorage.setItem(SESSION_KEY, os); } catch { /* ignore */ }
}

// ── Component ─────────────────────────────────────────────────────────────────
interface GuideVideoSectionProps {
  guideSlug: string;
  /** Fallback: videoUrl already stored on the static guide object */
  fallbackVideoUrl?: string;
  fallbackTitle?: string;
}

export function GuideVideoSection({
  guideSlug,
  fallbackVideoUrl,
  fallbackTitle,
}: GuideVideoSectionProps) {
  const [selectedOS, setSelectedOS] = useState<OSType | null>(getSessionOS);

  // Fetch videos linked to this guide via the junction table
  const { data: rows, isLoading } = useQuery<GuideVideoRow[]>({
    queryKey: ['guide-videos', guideSlug],
    queryFn: async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase as any)
        .from('guide_videos')
        .select('sort_order, video_tutorials(*)')
        .eq('guide_slug', guideSlug)
        .order('sort_order', { ascending: true });
      if (error) throw error;
      // Filter to published only
      return (data as GuideVideoRow[]).filter(r => r.video_tutorials?.is_published);
    },
    staleTime: 5 * 60 * 1000,
  });

  const handleOSSelect = (os: OSType) => {
    setSelectedOS(os);
    setSessionOS(os);
  };

  // If still loading, render nothing (no flash)
  if (isLoading) return null;

  const hasDBVideos = rows && rows.length > 0;

  // ── No DB videos at all → fall back to the static videoUrl ────────────────
  if (!hasDBVideos) {
    if (!fallbackVideoUrl) return null;
    return (
      <SectionWrapper title={fallbackTitle ?? guideSlug}>
        <VideoPlayer videoUrl={fallbackVideoUrl} title={fallbackTitle ?? guideSlug} />
      </SectionWrapper>
    );
  }

  // ── Figure out available OS types in this guide's videos ──────────────────
  const availableOSTypes = [...new Set(rows.map(r => r.video_tutorials.os_type))];
  const needsPicker = availableOSTypes.length > 1;

  // Pick the video to show
  let matchedVideo: VideoTutorial | null = null;
  if (!needsPicker) {
    // Only one OS type — show it directly
    matchedVideo = rows[0].video_tutorials;
  } else if (selectedOS) {
    const match = rows.find(r => r.video_tutorials.os_type === selectedOS);
    matchedVideo = match?.video_tutorials ?? null;
  }

  return (
    <SectionWrapper title={matchedVideo?.title ?? (fallbackTitle ?? guideSlug)}>
      {/* OS picker when multiple OS options exist */}
      {needsPicker && (
        <div className="mb-6">
          <OSPicker onSelect={handleOSSelect} selected={selectedOS} />
        </div>
      )}

      {/* Video player once we have a match */}
      {matchedVideo && (
        <VideoPlayer videoUrl={matchedVideo.video_url} title={matchedVideo.title} />
      )}

      {/* No match yet — prompt user to pick */}
      {needsPicker && !matchedVideo && (
        <p className="text-sm text-muted-foreground mt-3">
          Select your device above to watch the matching tutorial.
        </p>
      )}

      {/* No video for this OS */}
      {needsPicker && selectedOS && !matchedVideo && rows.length > 0 && (
        <p className="text-sm text-muted-foreground mt-3">
          No video is available for your device yet — try a different option or read the steps below.
        </p>
      )}
    </SectionWrapper>
  );
}

// ── Shared wrapper with heading ───────────────────────────────────────────────
function SectionWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <Play className="h-5 w-5 text-primary" aria-hidden="true" />
        Watch the video walkthrough
      </h2>
      {children}
      <p className="text-xs text-muted-foreground mt-2">
        Video not working? Read the step-by-step instructions below.
      </p>
    </div>
  );
}
