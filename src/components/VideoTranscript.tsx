import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface VideoTranscriptProps {
  transcript: string;
  videoTitle?: string;
}

/**
 * Collapsible, searchable video transcript section.
 * Displayed below video embeds in guide pages.
 */
export function VideoTranscript({ transcript, videoTitle }: VideoTranscriptProps) {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');

  if (!transcript) return null;

  const lines = transcript.split('\n').filter(l => l.trim());
  const filteredLines = search
    ? lines.filter(l => l.toLowerCase().includes(search.toLowerCase()))
    : lines;

  return (
    <div className="mt-4 rounded-xl border border-border bg-muted/30">
      <Button
        variant="ghost"
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="video-transcript"
      >
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          {videoTitle ? `Transcript: ${videoTitle}` : 'Video Transcript'}
        </span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {expanded && (
        <div id="video-transcript" className="px-4 pb-4 space-y-3">
          {/* Search within transcript */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transcript..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
              aria-label="Search transcript"
            />
          </div>

          {/* Transcript text */}
          <div
            className="max-h-64 overflow-y-auto space-y-2 text-sm text-muted-foreground leading-relaxed pr-2"
            role="region"
            aria-label="Video transcript"
            tabIndex={0}
          >
            {filteredLines.length === 0 ? (
              <p className="text-center py-4 italic">No matching text found.</p>
            ) : (
              filteredLines.map((line, i) => (
                <p key={i}>
                  {search ? highlightMatch(line, search) : line}
                </p>
              ))
            )}
          </div>

          {search && (
            <p className="text-xs text-muted-foreground">
              {filteredLines.length} of {lines.length} lines match
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function highlightMatch(text: string, query: string) {
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-900 rounded px-0.5">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}
