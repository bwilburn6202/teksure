import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock, Monitor, Apple, Smartphone, Tablet, Globe,
  ThumbsUp, ThumbsDown, ChevronRight, Lightbulb, AlertTriangle, BookOpen,
} from 'lucide-react';
import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { SourceAttributionCard } from '@/components/SourceAttributionCard';
import { AggregatedArticleCard } from '@/components/AggregatedArticleCard';
import {
  getArticleBySlug,
  getRelatedArticles,
  getSourceById,
  type OsTag,
} from '@/data/aggregatedArticles';

// ── OS icon helpers ────────────────────────────────────────────────────────────

const osIconMap: Record<OsTag, { icon: typeof Monitor; label: string }> = {
  Windows: { icon: Monitor,    label: 'Windows' },
  Mac:     { icon: Apple,      label: 'Mac' },
  iOS:     { icon: Smartphone, label: 'iPhone & iPad' },
  Android: { icon: Tablet,     label: 'Android' },
  Any:     { icon: Globe,      label: 'All devices' },
};

const difficultyColors = {
  Beginner:     'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Advanced:     'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300',
} as const;

// ── Component ──────────────────────────────────────────────────────────────────

export default function AggregatedArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'not-helpful' | null>(null);

  const article = slug ? getArticleBySlug(slug) : undefined;
  if (!article) return <Navigate to="/articles" replace />;

  const source = getSourceById(article.sourceId);
  if (!source) return <Navigate to="/articles" replace />;

  const relatedArticles = getRelatedArticles(article.relatedSlugs);

  return (
    <>
      <SEOHead
        title={`${article.title} — TekSure`}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
      />

      <main id="main-content" className="min-h-screen bg-background pb-16">
        {/* ── Hero / header ─────────────────────────────────────────────── */}
        <div className="bg-muted/40 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3 w-3" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/articles">Articles</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3 w-3" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Icon + title */}
            <div className="flex items-start gap-4">
              <span
                className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 shrink-0 mt-1"
                aria-hidden="true"
              >
                <BookOpen className="h-7 w-7 text-primary" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {article.category}
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
                  {article.title}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              {/* Difficulty */}
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColors[article.difficulty]}`}>
                Difficulty: {article.difficulty}
              </span>

              {/* Read time */}
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {article.readTime}
              </span>

              {/* OS tags */}
              <div className="flex items-center gap-1.5" aria-label="Compatible devices">
                {article.osTags.map((tag) => {
                  const { icon: Icon, label } = osIconMap[tag];
                  return (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-muted-foreground bg-background border border-border rounded-full px-2 py-0.5"
                      title={label}
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            {/* Main content */}
            <div>
              {/* Source attribution */}
              {source && (
                <div className="mb-8">
                  <SourceAttributionCard source={source} article={article} />
                </div>
              )}

              {/* Steps */}
              <ol className="space-y-6" aria-label="Article steps">
                {article.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    {/* Step number */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base font-semibold text-foreground mb-2 leading-snug">
                        {step.title}
                      </h2>
                      <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                        {step.content}
                      </p>

                      {/* Tip box */}
                      {step.tip && (
                        <div className="flex gap-2.5 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 mb-3">
                          <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
                            <strong>Tip: </strong>{step.tip}
                          </p>
                        </div>
                      )}

                      {/* Warning box */}
                      {step.warning && (
                        <div className="flex gap-2.5 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 mb-3">
                          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <p className="text-sm text-red-900 dark:text-red-100 leading-relaxed">
                            <strong>Important: </strong>{step.warning}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <Separator className="my-8" />

              {/* Feedback section */}
              <div className="text-center py-6 px-4 rounded-2xl border border-border bg-muted/30">
                {feedbackGiven ? (
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-1">Thank you for your feedback!</p>
                    <p className="text-sm text-muted-foreground">Your input helps us make TekSure better for everyone.</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-base font-semibold text-foreground mb-1">Was this article helpful?</p>
                    <p className="text-sm text-muted-foreground mb-4">Your feedback helps us improve our guides.</p>
                    <div className="flex items-center justify-center gap-3">
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => setFeedbackGiven('helpful')}
                        aria-label="Yes, this was helpful"
                      >
                        <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                        Yes, helpful
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => setFeedbackGiven('not-helpful')}
                        aria-label="No, this was not helpful"
                      >
                        <ThumbsDown className="h-4 w-4" aria-hidden="true" />
                        Not really
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Transparency note */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                  <strong>About this article:</strong> This guide was simplified and rewritten by TekSure from content originally published by <strong>{source.name}</strong>.
                  We make it easier to read for everyday users — no jargon, just plain steps.{' '}
                  <a
                    href={article.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-blue-900 dark:hover:text-blue-100"
                  >
                    View the original article.
                  </a>{' '}
                  <Link to="/sources" className="underline underline-offset-2 hover:text-blue-900 dark:hover:text-blue-100">
                    Learn about our content sources.
                  </Link>
                </p>
              </div>
            </div>

            {/* Sidebar — related articles */}
            {relatedArticles.length > 0 && (
              <aside aria-label="Related articles">
                <div className="sticky top-24">
                  <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Related Articles
                  </h2>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => {
                      const relatedSource = getSourceById(related.sourceId);
                      if (!relatedSource) return null;
                      return (
                        <AggregatedArticleCard
                          key={related.slug}
                          article={related}
                          source={relatedSource}
                        />
                      );
                    })}
                  </div>

                  <Separator className="my-5" />

                  <div className="text-center">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/articles">Browse all articles</Link>
                    </Button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

    </>
  );
}
