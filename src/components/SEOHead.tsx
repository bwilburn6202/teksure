import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface SEOHeadProps {
  title: string;
  description: string;
  /**
   * Path this page canonicalises to, e.g. `/guides/reset-your-password`.
   * Optional: when omitted the current route is used. Set it only to point
   * somewhere other than the URL being rendered.
   */
  path?: string;
  type?: string;
  ogImage?: string;
  /**
   * Alt text describing the og/twitter image — read by screen readers when a
   * preview is shared and shown by clients that block remote images. When a
   * page sets a custom `ogImage`, it should set this too.
   */
  ogImageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Exclude this page from search engines. Use for admin, auth, and private routes. */
  noindex?: boolean;
}

// www is the canonical host — the apex domain 301s to www at the edge.
const BASE_URL = 'https://www.teksure.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_OG_IMAGE_ALT =
  'TekSure — friendly, plain-English tech support for seniors and beginners.';
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export function SEOHead({ title, description, path, type = 'website', ogImage, ogImageAlt, publishedTime, modifiedTime, canonical, jsonLd, noindex }: SEOHeadProps) {
  // `path` used to default to '/', so any page that forgot the prop declared
  // the homepage as its canonical — telling search engines it was a duplicate
  // of '/'. That was true of every tool detail page under /tools/:slug (~285
  // of them) plus a handful elsewhere. It went unnoticed for a long time
  // because the prerenderer was emitting the canonical link *outside* <head>,
  // where crawlers ignore it (fixed 2026-08-20). The moment that was
  // corrected, those wrong canonicals became authoritative — so the default
  // has to be the page's own URL, not the homepage.
  //
  // Derive it from the router instead of a literal. SEOHead always renders
  // inside a Router: StaticRouter during prerender (src/entry-server.tsx),
  // BrowserRouter in the app, MemoryRouter in tests.
  const { pathname } = useLocation();
  // vercel.json sets trailingSlash: false, so '/guides/' and '/guides' must not
  // produce two different canonicals. Root stays '/'.
  const resolvedPath = (path ?? pathname).replace(/(.)\/+$/, '$1');
  const url = `${BASE_URL}${resolvedPath}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const imageAlt = ogImageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const fullTitle = title.includes('TekSure') ? title : `${title} — TekSure`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical ? <link rel="canonical" href={canonical} /> : <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="TekSure" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@teksure" />
      <meta name="twitter:creator" content="@teksure" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEOHead;
