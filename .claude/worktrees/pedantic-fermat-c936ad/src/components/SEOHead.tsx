import { Helmet } from 'react-helmet-async';

export interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Exclude this page from search engines. Use for admin, auth, and private routes. */
  noindex?: boolean;
}

const BASE_URL = 'https://teksure.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export function SEOHead({ title, description, path = '/', type = 'website', ogImage, publishedTime, modifiedTime, canonical, jsonLd, noindex }: SEOHeadProps) {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
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

      {/* JSON-LD */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
