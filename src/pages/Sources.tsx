import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, BookOpen, Scale, Heart, PenLine, Link2, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { contentSources, getArticlesBySource } from '@/data/aggregatedArticles';

const typeLabels: Record<string, { label: string; icon: typeof ShieldCheck; className: string }> = {
  official:    { label: 'Official Source',   icon: ShieldCheck, className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
  educational: { label: 'Educational Site',  icon: BookOpen,    className: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
  nonprofit:   { label: 'Nonprofit',         icon: Heart,       className: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300' },
  news:        { label: 'Tech News',         icon: BookOpen,    className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
};

export default function Sources() {
  // Get real article counts from data
  const sourcesWithCounts = contentSources.map(source => ({
    ...source,
    articleCount: getArticlesBySource(source.id).length,
  }));

  return (
    <>
      <SEOHead
        title="Our Content Sources — TekSure"
        description="TekSure simplifies tech guides from trusted sources like Apple, Google, Microsoft, AARP, and more. See all sources and how we use them."
        path="/sources"
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background pb-16">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
          <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Transparency
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Where Our Content Comes From
            </h1>
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              We don't make things up. Every article on TekSure is either written by our team or simplified from a trusted, verified source. Here's the full list.
            </p>
          </div>
        </div>

        {/* ── How we use sources ─────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 pt-10">
          <section aria-labelledby="how-we-work-heading" className="mb-10">
            <h2 id="how-we-work-heading" className="text-xl font-bold text-foreground mb-3">
              How We Use External Content
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex justify-start mb-2"><BookOpen className="h-6 w-6 text-primary" /></div>
                <h3 className="font-semibold text-sm text-foreground mb-1">We read the original</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We start with the official source — Apple, Microsoft, Google, or another trusted site.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex justify-start mb-2"><PenLine className="h-6 w-6 text-primary" /></div>
                <h3 className="font-semibold text-sm text-foreground mb-1">We rewrite in plain language</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We rewrite each article in clear, everyday English — no jargon, no assumptions about tech knowledge.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex justify-start mb-2"><Link2 className="h-6 w-6 text-primary" /></div>
                <h3 className="font-semibold text-sm text-foreground mb-1">We always credit the source</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every simplified article links back to the original so you can verify the information directly.
                </p>
              </div>
            </div>
          </section>

          <Separator className="mb-10" />

          {/* ── Source list ────────────────────────────────────────── */}
          <section aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-xl font-bold text-foreground mb-6">
              Our Approved Sources
            </h2>

            <div className="space-y-5">
              {sourcesWithCounts.map((source) => {
                const typeInfo = typeLabels[source.type];
                const TypeIcon = typeInfo.icon;

                return (
                  <div
                    key={source.id}
                    className={`flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-border ${source.accentColor}`}
                  >
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-card border border-border shadow-sm overflow-hidden">
                      <img
                        src={source.logoUrl}
                        alt={`${source.name} logo`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-base font-bold text-muted-foreground">${source.shortName.slice(0, 2).toUpperCase()}</span>`;
                          }
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-bold text-base ${source.textColor}`}>{source.name}</h3>
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${typeInfo.className}`}>
                          <TypeIcon className="h-3 w-3" aria-hidden="true" />
                          {typeInfo.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {source.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>{source.articleCount}</strong> simplified {source.articleCount === 1 ? 'article' : 'articles'} on TekSure
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 shrink-0">
                      <Button variant="outline" size="sm" asChild className="gap-1.5 text-xs h-8 whitespace-nowrap">
                        <a
                          href={source.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${source.name} website (opens in new tab)`}
                        >
                          Visit source
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="text-xs h-8 whitespace-nowrap">
                        <Link to={`/articles?source=${source.id}`} aria-label={`Browse articles from ${source.name}`}>
                          Browse articles →
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <Separator className="my-10" />

          {/* ── Request a source ─────────────────────────────────── */}
          <section aria-labelledby="request-source-heading" className="text-center py-8 px-4 rounded-2xl border border-border bg-muted/30">
            <div className="flex justify-center mb-3"><MessageCircle className="h-8 w-8 text-primary" /></div>
            <h2 id="request-source-heading" className="text-lg font-bold text-foreground mb-2">
              Know a great source we should add?
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto leading-relaxed">
              We're always looking to expand our library of trusted sources. If you know a reliable tech site written for everyday people, we'd love to hear about it.
            </p>
            <Button asChild>
              <Link to="/get-help">
                Suggest a source
              </Link>
            </Button>
          </section>

          {/* ── Legal / copyright note ──────────────────────────── */}
          <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border">
            <div className="flex items-start gap-2.5">
              <Scale className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                All original content belongs to the respective copyright holders. TekSure rewrites and simplifies content for educational, non-commercial purposes, and always links back to the original source. If you represent a source listed here and have concerns, please <Link to="/get-help" className="underline underline-offset-2 hover:text-foreground">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
