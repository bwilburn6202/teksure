const STORAGE_KEY = 'teksure_favorites';
const isServer = typeof window === 'undefined';

export interface FavoriteGuide {
  slug: string;
  title: string;
  excerpt: string;
}

export function getFavorites(): FavoriteGuide[] {
  if (isServer) return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavorites().some((f) => f.slug === slug);
}

export function addFavorite(guide: FavoriteGuide): void {
  const favs = getFavorites().filter((f) => f.slug !== guide.slug);
  favs.push(guide);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function removeFavorite(slug: string): void {
  const favs = getFavorites().filter((f) => f.slug !== slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}
