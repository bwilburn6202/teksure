import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Tag, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { guides, categoryLabels } from '@/data/guides';

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find(g => g.slug === slug);

  if (!guide) return <Navigate to="/guides" replace />;

  const relatedGuides = guides
    .filter(g => g.slug !== slug && g.tags.some(t => guide.tags.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="container py-8 max-w-3xl">
        <Link
          to="/guides"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Header */}
          <div className="mb-8">
            <div className="text-5xl mb-4">{guide.thumbnailEmoji}</div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">
                {categoryLabels[guide.category]}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {guide.readTime}
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              {guide.title}
            </h1>
            <p className="text-lg text-muted-foreground">{guide.excerpt}</p>
          </div>

          {/* Video Embed */}
          {guide.videoUrl && (
            <div className="mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe
                  src={guide.videoUrl}
                  title={guide.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <Play className="h-3 w-3" /> Video tutorial — watch along or read the summary below
              </p>
            </div>
          )}

          <Separator className="mb-8" />

          {/* Step-by-step content */}
          {guide.steps && (
            <div className="space-y-6 mb-8">
              {guide.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card>
                    <CardContent className="py-5">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Body content (for KB, blog, video summaries) */}
          {guide.body && (
            <div className="prose prose-sm max-w-none mb-8">
              {guide.body.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={i} className="text-lg font-semibold mt-6 mb-2">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('**')) {
                  const [boldPart, ...rest] = paragraph.split('**').filter(Boolean);
                  return (
                    <div key={i} className="mb-4">
                      <h3 className="text-base font-semibold mb-1">{boldPart}</h3>
                      {rest.length > 0 && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {rest.join('')}
                        </p>
                      )}
                    </div>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('🔒') || paragraph.startsWith('🪪') || paragraph.startsWith('🔍') || paragraph.startsWith('✅')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={i} className="space-y-2 mb-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span>{item.replace(/^[-•]\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n');
                  return (
                    <ol key={i} className="space-y-2 mb-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-semibold">
                            {j + 1}
                          </span>
                          <span>{item.replace(/^\d+\.\s*/, '')}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {guide.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* CTA — "Still stuck?" */}
          <Card className="hero-gradient text-primary-foreground mb-12 overflow-hidden">
            <CardContent className="py-10 text-center">
              <h2 className="text-2xl font-bold mb-2">Still stuck? Let a pro handle it.</h2>
              <p className="opacity-90 mb-6 max-w-md mx-auto">
                Our verified technicians can fix this issue for you — remotely or in person. Fast, secure, and guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/signup">
                    Book a Verified Tech <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-hero-outline">
                  <Link to="/pricing">See Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Related Guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedGuides.map(g => (
                  <Link to={`/guides/${g.slug}`} key={g.slug}>
                    <Card className="h-full hover:shadow-md transition-shadow group">
                      <CardContent className="pt-5">
                        <div className="text-2xl mb-2">{g.thumbnailEmoji}</div>
                        <p className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">
                          {g.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{g.readTime}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideDetail;
