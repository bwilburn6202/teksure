import { Sparkles } from 'lucide-react';
import { type ContentSource } from '@/data/aggregatedArticles';

interface TekSureOriginalBadgeProps {
  variant?: 'default' | 'sm';
}

interface SimplifiedBadgeProps {
  source: ContentSource;
  variant?: 'default' | 'sm';
}

type ContentBadgeProps =
  | ({ type: 'original' } & TekSureOriginalBadgeProps)
  | ({ type: 'simplified' } & SimplifiedBadgeProps);

export function ContentBadge(props: ContentBadgeProps) {
  const isSmall = props.variant === 'sm';

  if (props.type === 'original') {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 ${
          isSmall ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'
        }`}
        aria-label="TekSure Original content"
      >
        <Sparkles className={isSmall ? 'h-2.5 w-2.5' : 'h-3 w-3'} aria-hidden="true" />
        TekSure Original
      </span>
    );
  }

  // Simplified badge
  const { source } = props;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 ${
        isSmall ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'
      }`}
      aria-label={`Simplified from ${source.name}`}
    >
      <img
        src={source.faviconUrl}
        alt=""
        aria-hidden="true"
        className={isSmall ? 'h-2.5 w-2.5' : 'h-3 w-3'}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      Simplified from {source.shortName}
    </span>
  );
}
