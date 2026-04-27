import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  segments: BreadcrumbSegment[];
  className?: string;
}

const BASE_URL = 'https://teksure.com';

/**
 * Reusable breadcrumb navigation for any page.
 * Always starts with Home. The last segment is displayed as the current page.
 * Also emits BreadcrumbList JSON-LD so Google can render rich-result
 * breadcrumb trails in search snippets.
 */
export function PageBreadcrumb({ segments, className = 'mb-6' }: PageBreadcrumbProps) {
  const allSegments = [{ label: 'Home', href: '/' }, ...segments];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allSegments.map((seg, i) => {
      const item: Record<string, unknown> = {
        '@type': 'ListItem',
        position: i + 1,
        name: seg.label,
      };
      // Only attach `item` when we have an href. Google accepts the last
      // entry without one (it represents the current page).
      if (seg.href) item.item = `${BASE_URL}${seg.href}`;
      return item;
    }),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {allSegments.map((seg, i) => {
            const isLast = i === allSegments.length - 1;
            return (
              <BreadcrumbItem key={i}>
                {isLast ? (
                  <BreadcrumbPage>{seg.label}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to={seg.href!}>{seg.label}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
