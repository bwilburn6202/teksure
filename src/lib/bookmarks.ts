/**
 * TekSure bookmarks — unified "save for later" storage for guides and tools.
 *
 * This is distinct from the older `favorites.ts` lib (which only tracked guide
 * slugs). The bookmarks lib stores a richer record so the Favorites page can
 * render both guides and tools in a single list without having to look up
 * titles and URLs on the fly.
 *
 * Storage: localStorage key `teksure-bookmarks` → JSON array of Bookmark.
 * Reactivity: a `teksure-bookmarks-change` CustomEvent is dispatched on every
 * mutation, and the `storage` event covers cross-tab updates. Consumers
 * subscribe via `onBookmarksChange`.
 */

const STORAGE_KEY = 'teksure-bookmarks';
const CHANGE_EVENT = 'teksure-bookmarks-change';
const isServer = typeof window === 'undefined';

export type BookmarkType = 'guide' | 'tool';

export interface Bookmark {
  type: BookmarkType;
  slug: string;
  title: string;
  /** Route path (e.g. `/guides/reset-router`) or absolute URL. */
  url: string;
  /** ISO 8601 timestamp. */
  savedAt: string;
}

/** Read all bookmarks from localStorage. Returns `[]` on SSR or bad data. */
export function getBookmarks(): Bookmark[] {
  if (isServer) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Defensive filter — localStorage can contain anything if it was hand-edited
    // or written by an older version of the schema.
    return parsed.filter(
      (b): b is Bookmark =>
        b != null &&
        typeof b === 'object' &&
        (b.type === 'guide' || b.type === 'tool') &&
        typeof b.slug === 'string' &&
        typeof b.title === 'string' &&
        typeof b.url === 'string' &&
        typeof b.savedAt === 'string',
    );
  } catch {
    return [];
  }
}

/** Is this guide/tool currently bookmarked? */
export function isBookmarked(type: BookmarkType, slug: string): boolean {
  return getBookmarks().some((b) => b.type === type && b.slug === slug);
}

/**
 * Add (or replace) a bookmark. Most-recent first. Returns the new list so
 * callers that already have the array can update state without a second read.
 */
export function addBookmark(input: Omit<Bookmark, 'savedAt'> & { savedAt?: string }): Bookmark[] {
  if (isServer) return [];
  const next: Bookmark = {
    type: input.type,
    slug: input.slug,
    title: input.title,
    url: input.url,
    savedAt: input.savedAt ?? new Date().toISOString(),
  };
  // De-dupe on (type, slug) and push the new one to the front.
  const rest = getBookmarks().filter((b) => !(b.type === next.type && b.slug === next.slug));
  const bookmarks = [next, ...rest];
  writeBookmarks(bookmarks);
  return bookmarks;
}

/** Remove a bookmark by (type, slug). No-op if not found. */
export function removeBookmark(type: BookmarkType, slug: string): Bookmark[] {
  if (isServer) return [];
  const bookmarks = getBookmarks().filter((b) => !(b.type === type && b.slug === slug));
  writeBookmarks(bookmarks);
  return bookmarks;
}

/** Wipe every bookmark. Used by the "Clear all" button. */
export function clearBookmarks(): void {
  if (isServer) return;
  localStorage.removeItem(STORAGE_KEY);
  dispatchChange();
}

/**
 * Subscribe to bookmark changes (both same-tab and cross-tab).
 * Returns an unsubscribe function.
 *
 * ```ts
 * useEffect(() => onBookmarksChange(setBookmarks), []);
 * ```
 */
export function onBookmarksChange(listener: (bookmarks: Bookmark[]) => void): () => void {
  if (isServer) return () => {};
  const sameTab = () => listener(getBookmarks());
  const crossTab = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) listener(getBookmarks());
  };
  window.addEventListener(CHANGE_EVENT, sameTab);
  window.addEventListener('storage', crossTab);
  return () => {
    window.removeEventListener(CHANGE_EVENT, sameTab);
    window.removeEventListener('storage', crossTab);
  };
}

// ── internals ──────────────────────────────────────────────────────────────
function writeBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    // Quota exceeded or storage disabled — nothing sensible to do.
  }
  dispatchChange();
}

function dispatchChange(): void {
  if (isServer) return;
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}
