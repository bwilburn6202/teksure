import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = 'https://teksure.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function SEOHead({ title, description, path, type = 'website', ogImage, jsonLd }: SEOHeadProps) {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
