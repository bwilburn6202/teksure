import { Link } from 'react-router-dom';
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

/**
 * Reusable breadcrumb navigation for any page.
 * Always starts with Home. The last segment is displayed as the current page.
 */
export function PageBreadcrumb({ segments, className = 'mb-6' }: PageBreadcrumbProps) {
  const allSegments = [{ label: 'Home', href: '/' }, ...segments];

  return (
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
  );
}
