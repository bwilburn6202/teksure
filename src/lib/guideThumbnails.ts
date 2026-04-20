/**
 * Guide Thumbnail Image System
 *
 * Uses picsum.photos for reliable, deterministic thumbnails.
 * Each guide gets a consistent image based on its slug (seed-based).
 * Images are always available — no broken URLs.
 */

/**
 * Returns a deterministic thumbnail URL for a guide.
 * Uses picsum.photos seed API: same slug always returns same image.
 */
export function getGuideThumbnailUrl(guide: { slug: string; category: string; tags: string[]; thumbnailUrl?: string }): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;
  return `https://picsum.photos/seed/${guide.slug}/600/400`;
}

/**
 * Returns a smaller thumbnail for list views.
 */
export function getGuideThumbnailSmall(guide: { slug: string; category: string; tags: string[]; thumbnailUrl?: string }): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;
  return `https://picsum.photos/seed/${guide.slug}/80/80`;
}
