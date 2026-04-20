import { ExternalLink, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type ContentSource, type AggregatedArticle } from '@/data/aggregatedArticles';

interface SourceAttributionCardProps {
  source: ContentSource;
  article: AggregatedArticle;
}

export function SourceAttributionCard({ source, article }: SourceAttributionCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedDate));

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-xl border border-border ${source.accentColor}`}
      role="region"
      aria-label="Content source attribution"
    >
      {/* Logo / icon */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border border-border shadow-sm overflow-hidden">
        <img
          src={source.logoUrl}
          alt={`${source.name} logo`}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            // Fallback to a text abbreviation if logo fails to load
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-sm font-bold text-muted-foreground">${source.shortName.slice(0, 2).toUpperCase()}</span>`;
            }
          }}
        />
      </div>

      {/* Attribution text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
          Simplified from original source
        </p>
        <p className={`font-semibold text-sm leading-snug ${source.textColor}`}>
          Originally published by {source.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
          {article.authorName && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <User className="h-3 w-3" aria-hidden="true" />
              Written by {article.authorName}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {formattedDate}
          </span>
        </div>
      </div>

      {/* View original button */}
      <div className="flex-shrink-0">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="gap-1.5 text-xs h-8 whitespace-nowrap"
        >
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View original article on ${source.name} (opens in new tab)`}
          >
            View original article
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  );
}
