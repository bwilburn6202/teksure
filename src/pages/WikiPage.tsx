import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Printer, Calendar, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { getWikiPage, wikiPages, categoryLabels, categoryColors } from '@/data/wiki';

/* ── Lightweight markdown renderer ──────────────────────────────────────────── */

interface MarkdownSection {
  heading: string | null;
  headingLevel: number;
  lines: string[];
}

/** Parse markdown into sections split by ## or ### headings */
function parseSections(md: string): MarkdownSection[] {
  const lines = md.split('\n');
  const sections: MarkdownSection[] = [];
  let current: MarkdownSection = { heading: null, headingLevel: 0, lines: [] };

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      if (current.heading !== null || current.lines.length > 0) {
        sections.push(current);
      }
      current = {
        heading: headingMatch[2],
        headingLevel: headingMatch[1].length,
        lines: [],
      };
    } else {
      current.lines.push(line);
    }
  }
  if (current.heading !== null || current.lines.length > 0) {
    sections.push(current);
  }
  return sections;
}

/** Render inline markdown: bold, links, inline code */
function renderInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">$1</a>')
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>');
}

/** Convert a block of lines into HTML */
function renderBlock(lines: string[]): string {
  const html: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' = 'ul';

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Empty line
    if (!line.trim()) {
      if (inList) {
        html.push(listType === 'ol' ? '</ol>' : '</ul>');
        inList = false;
      }
      continue;
    }

    // Checkbox list item
    const checkboxMatch = line.match(/^- \[( |x)\]\s+(.+)$/);
    if (checkboxMatch) {
      if (!inList) { html.push('<ul class="space-y-2 my-4">'); inList = true; listType = 'ul'; }
      const checked = checkboxMatch[1] === 'x';
      html.push(`<li class="flex items-start gap-2 text-base leading-relaxed"><span class="shrink-0 mt-0.5">${checked ? '✅' : '⬜'}</span><span>${renderInline(checkboxMatch[2])}</span></li>`);
      continue;
    }

    // Unordered list
    const ulMatch = line.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) html.push(listType === 'ol' ? '</ol>' : '</ul>');
        html.push('<ul class="space-y-2 my-4 list-disc list-inside">');
        inList = true;
        listType = 'ul';
      }
      html.push(`<li class="text-base leading-relaxed text-muted-foreground">${renderInline(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) html.push(listType === 'ol' ? '</ol>' : '</ul>');
        html.push('<ol class="space-y-2 my-4 list-decimal list-inside">');
        inList = true;
        listType = 'ol';
      }
      html.push(`<li class="text-base leading-relaxed text-muted-foreground">${renderInline(olMatch[1])}</li>`);
      continue;
    }

    // Paragraph
    if (inList) {
      html.push(listType === 'ol' ? '</ol>' : '</ul>');
      inList = false;
    }
    html.push(`<p class="text-base leading-relaxed text-muted-foreground my-4">${renderInline(line)}</p>`);
  }

  if (inList) {
    html.push(listType === 'ol' ? '</ol>' : '</ul>');
  }

  return html.join('\n');
}

/* ── Helpful feedback hook ────────────────────────────────────────────────── */

function useHelpfulFeedback(slug: string) {
  const storageKey = `wiki-helpful-${slug}`;
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'yes' || stored === 'no') {
      setFeedback(stored);
    } else {
      setFeedback(null);
    }
  }, [storageKey]);

  const vote = (value: 'yes' | 'no') => {
    localStorage.setItem(storageKey, value);
    setFeedback(value);
  };

  return { feedback, vote };
}

/* ── Page component ─────────────────────────────────────────────────────────── */

const WikiPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getWikiPage(slug) : undefined;

  if (!page) {
    return <Navigate to="/wiki" replace />;
  }

  const sections = parseSections(page.content);
  const relatedPages = page.seeAlso
    .map(s => wikiPages.find(p => p.slug === s))
    .filter(Boolean) as typeof wikiPages;

  const formattedDate = new Date(page.lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${page.title} — TekSure`}
        description={page.content.replace(/#{1,6}\s+/g, '').replace(/[*_~`\[\]()]/g, '').replace(/\n+/g, ' ').trim().slice(0, 160)}
        path={`/wiki/${page.slug}`}
      />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/wiki">Back to All Topics</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/wiki?category=${page.category}`}>
                  {categoryLabels[page.category]}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{page.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${categoryColors[page.category]}`}
            >
              {categoryLabels[page.category]}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Updated {formattedDate}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            {page.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {page.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-sm rounded-full px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base"
              onClick={() => window.print()}
            >
              <Printer className="h-5 w-5" />
              Print This Page
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom leading-relaxed">
          {sections.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && section.headingLevel === 2 && (
                <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-foreground leading-snug">
                  {section.heading}
                </h2>
              )}
              {section.heading && section.headingLevel === 3 && (
                <h3 className="text-xl md:text-2xl font-medium mt-8 mb-3 text-foreground leading-snug">
                  {section.heading}
                </h3>
              )}
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderBlock(section.lines) }}
              />
            </div>
          ))}
        </div>

        {/* Was this helpful? */}
        <HelpfulSection slug={page.slug} />

        {/* Related Topics */}
        {relatedPages.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-semibold mb-5">Related Topics</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedPages.map(related => (
                <Link
                  key={related.slug}
                  to={`/wiki/${related.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <h3 className="font-medium text-base group-hover:text-primary transition-colors mb-2 leading-snug">
                    {related.title}
                  </h3>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[related.category]}`}
                  >
                    {categoryLabels[related.category]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/wiki"
            className="inline-flex items-center gap-2 text-base text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Topics
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

/* ── Helpful feedback component ───────────────────────────────────────────── */

function HelpfulSection({ slug }: { slug: string }) {
  const { feedback, vote } = useHelpfulFeedback(slug);

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <div className="bg-muted/40 rounded-2xl p-6 md:p-8 text-center">
        {feedback ? (
          <div>
            <p className="text-2xl mb-2">{feedback === 'yes' ? '😊' : '🤔'}</p>
            <p className="text-lg font-medium">
              {feedback === 'yes'
                ? 'Thank you for your feedback!'
                : 'Thank you — we will work on improving this page.'}
            </p>
          </div>
        ) : (
          <>
            <p className="text-lg font-medium mb-4">Was this page helpful?</p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base px-6"
                onClick={() => vote('yes')}
              >
                <ThumbsUp className="h-5 w-5" />
                Yes, it helped
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base px-6"
                onClick={() => vote('no')}
              >
                <ThumbsDown className="h-5 w-5" />
                Not really
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WikiPage;
