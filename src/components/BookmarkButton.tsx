import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import {
  addBookmark,
  isBookmarked,
  onBookmarksChange,
  removeBookmark,
  type BookmarkType,
} from '@/lib/bookmarks';
import { cn } from '@/lib/utils';

interface BookmarkButtonProps {
  /** What kind of thing is being saved. */
  type: BookmarkType;
  /** Stable identifier (guide slug or tool route segment). */
  slug: string;
  /** Human-readable title shown on the Favorites page. */
  title: string;
  /** Route path (e.g. `/guides/reset-router`) — used by the Open button. */
  url: string;
  /** Optional extra classes — merged with the default pill styling. */
  className?: string;
  /** Render at a compact 36px target instead of the 44px default. */
  size?: 'sm' | 'md';
}

/**
 * Accessible heart toggle for saving a guide or tool to the user's Favorites
 * page. Filled rose when saved, outlined when not. Uses `aria-pressed` so
 * screen readers announce state correctly.
 *
 * Reactive: listens to `onBookmarksChange` so the button stays in sync if the
 * same item is toggled from another tab or another BookmarkButton on the page.
 */
export function BookmarkButton({ type, slug, title, url, className, size = 'md' }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(type, slug));
    return onBookmarksChange(() => setSaved(isBookmarked(type, slug)));
  }, [type, slug]);

  const toggle = () => {
    if (saved) {
      removeBookmark(type, slug);
    } else {
      addBookmark({ type, slug, title, url });
    }
  };

  const dimensions = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={saved}
      aria-label={saved ? `Remove "${title}" from favorites` : `Save "${title}" to favorites`}
      title={saved ? 'Saved — tap to remove' : 'Save to My Favorites'}
      className={cn(
        'inline-flex items-center justify-center rounded-full border transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5FCC] focus-visible:ring-offset-2',
        dimensions,
        saved
          ? 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/40 dark:hover:bg-rose-900/50'
          : 'bg-white/80 text-[#1A1A1A] border-[#E4DFD4] hover:bg-white hover:text-rose-600 hover:border-rose-300 dark:bg-white/10 dark:text-white/85 dark:border-white/15 dark:hover:bg-white/20 dark:hover:text-rose-300',
        className,
      )}
    >
      <Heart
        className={cn(iconSize, 'transition-transform', saved && 'fill-current')}
        aria-hidden="true"
      />
    </button>
  );
}

export default BookmarkButton;
