import { Link } from 'react-router-dom';
import { Clock, Monitor, Apple, Smartphone, Tablet, Globe } from 'lucide-react';
import { ContentBadge } from '@/components/ContentBadge';
import {
  type AggregatedArticle,
  type ContentSource,
  type OsTag,
} from '@/data/aggregatedArticles';

const osIconMap: Record<OsTag, { icon: typeof Monitor; label: string }> = {
  Windows: { icon: Monitor, label: 'Windows' },
  Mac:     { icon: Apple,   label: 'Mac' },
  iOS:     { icon: Smartphone, label: 'iPhone / iPad' },
  Android: { icon: Tablet,  label: 'Android' },
  Any:     { icon: Globe,   label: 'All devices' },
};

const difficultyColors = {
  Beginner:     'text-green-600 dark:text-green-400',
  Intermediate: 'text-amber-600 dark:text-amber-400',
  Advanced:     'text-red-500 dark:text-red-400',
} as const;

const difficultyDots = {
  Beginner:     '●',
  Intermediate: '●●',
  Advanced:     '●●●',
} as const;

interface AggregatedArticleCardProps {
  article: AggregatedArticle;
  source: ContentSource;
}

export function AggregatedArticleCard({ article, source }: AggregatedArticleCardProps) {
  return (
    <Link to={`/articles/${article.slug}`} className="group block h-full">
      <div className="p-5 rounded-2xl border border-border bg-card h-full flex flex-col transition-all hover:shadow-md hover:border-primary/20">
        {/* Top row: emoji + badge */}
        <div className="flex items-start justify-between mb-3 gap-2">
          <span className="text-3xl shrink-0" aria-hidden="true">{article.thumbnailEmoji}</span>
          <ContentBadge type="simplified" source={source} variant="sm" />
        </div>

        {/* Category + difficulty + read time */}
        <div className="flex items-center gap-2 flex-wrap mb-2.5">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
            {article.category}
          </span>
          <span className={`text-xs font-medium ${difficultyColors[article.difficulty]}`}>
            {difficultyDots[article.difficulty]} {article.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-2.5 w-2.5" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {article.excerpt}
        </p>

        {/* Footer: source attribution + OS icons */}
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-2">
          {/* Source */}
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground min-w-0">
            <img
              src={source.faviconUrl}
              alt=""
              aria-hidden="true"
              className="h-3 w-3 flex-shrink-0"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="truncate">{source.name}</span>
          </span>

          {/* OS icons */}
          <div className="flex items-center gap-1 shrink-0">
            {article.osTags.map((tag) => {
              const { icon: Icon, label } = osIconMap[tag];
              return (
                <Icon
                  key={tag}
                  className="h-3.5 w-3.5 text-muted-foreground"
                  aria-label={label}
                  title={label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
