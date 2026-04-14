/**
 * Skeleton loading screens that match the final page layout.
 * Shown instead of spinners during route-level code splitting.
 */

function SkeletonBar({ className = '' }: { className?: string }) {
  return <div className={`bg-muted animate-pulse rounded ${className}`} />;
}

/** Generic page skeleton with nav placeholder, heading, and content blocks */
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav placeholder */}
      <div className="h-14 border-b border-border" />

      <div className="container max-w-4xl py-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <SkeletonBar className="h-4 w-12" />
          <SkeletonBar className="h-4 w-4" />
          <SkeletonBar className="h-4 w-20" />
        </div>

        {/* Heading */}
        <SkeletonBar className="h-9 w-3/4" />
        <SkeletonBar className="h-5 w-1/2" />

        {/* Content blocks */}
        <div className="space-y-4 pt-4">
          <SkeletonBar className="h-32 w-full rounded-xl" />
          <SkeletonBar className="h-32 w-full rounded-xl" />
          <SkeletonBar className="h-32 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}

/** Guide detail skeleton with step cards */
export function GuideDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-14 border-b border-border" />
      <div className="container max-w-4xl py-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <SkeletonBar className="h-4 w-12" />
          <SkeletonBar className="h-4 w-4" />
          <SkeletonBar className="h-4 w-16" />
          <SkeletonBar className="h-4 w-4" />
          <SkeletonBar className="h-4 w-24" />
        </div>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <SkeletonBar className="h-6 w-24 rounded-full" />
            <SkeletonBar className="h-6 w-20 rounded-full" />
          </div>
          <SkeletonBar className="h-10 w-4/5" />
          <SkeletonBar className="h-5 w-3/5" />
        </div>

        {/* Steps */}
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-xl border border-border p-6 space-y-3">
            <div className="flex items-center gap-4">
              <SkeletonBar className="h-12 w-12 rounded-full shrink-0" />
              <SkeletonBar className="h-6 w-2/3" />
            </div>
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Grid page skeleton (tools, guides listing) */
export function GridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-14 border-b border-border" />
      <div className="container py-8 space-y-6">
        <SkeletonBar className="h-10 w-64" />
        <SkeletonBar className="h-5 w-96" />

        {/* Filter bar */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <SkeletonBar key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="rounded-xl border border-border p-5 space-y-3">
              <SkeletonBar className="h-10 w-10 rounded-lg" />
              <SkeletonBar className="h-5 w-3/4" />
              <SkeletonBar className="h-4 w-full" />
              <SkeletonBar className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
