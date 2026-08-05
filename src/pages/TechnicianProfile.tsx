/**
 * ⚠️  THIS PAGE IS OFFLINE ON PURPOSE. DO NOT RESTORE THE ROUTE AS-IS.  ⚠️
 *
 * This was live at /technicians until 2026-07-26 with four invented
 * technicians and eleven fabricated named reviews ("Patricia W., 5 stars: He
 * arrived on time...") describing in-person visits TekSure has never
 * performed. It was indexed in the sitemap and linked from the FAQ.
 * Publishing invented reviews and credentials is deceptive advertising. The
 * FTC's Rule on Consumer Reviews and Testimonials prohibits it and carries
 * civil penalties per violation, and it is the exact tactic that fake
 * tech-support operations use on the older adults TekSure serves.
 *
 * 2026-08-05: the fabricated data has now been deleted (step 1 below), and the
 * hardcoded $49 now comes from src/data/pricing.ts. The routes in App.tsx
 * still redirect to /get-help; only the layout is kept, for reuse.
 *
 * Why the data was removed rather than left in place: `dev-loop.mjs` runs a
 * `testimonial-honesty` check, and while this file sat here it reported "1
 * page" on every single cycle. A permanently-failing check is a broken check —
 * if someone accidentally shipped real fabricated testimonials on another
 * page, the report would have ticked from 1 to 2 and nobody would have
 * noticed. Clearing the known offender restores the signal.
 *
 * BEFORE PUTTING THIS BACK:
 *   1. ~~Delete every entry in `TECHNICIANS`~~ — done. Add real people only.
 *   2. Only include reviews from real customers who gave permission — ideally
 *      read from the `testimonials` table rather than hardcoded here.
 *   3. Only claim "background-verified" for someone actually background-checked.
 *   4. Restore the routes in App.tsx and re-add /technicians to the sitemap.
 */
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, CheckCircle2, Shield, Award, ArrowRight, ChevronLeft } from 'lucide-react';
import { FIRST_HOUR_PRICE } from '@/data/pricing';

interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
}

interface Technician {
  id: string;
  name: string;
  emoji: string;
  title: string;
  location: string;
  bio: string;
  specialities: string[];
  rating: number;
  reviewCount: number;
  jobsCompleted: number;
  responseTime: string;
  memberSince: string;
  verified: boolean;
  badges: string[];
  reviews: Review[];
}

/**
 * Intentionally empty. The previous contents were invented people and invented
 * reviews — see the file header. Populate this only with real, consenting
 * technicians and real customer reviews (preferably read from the
 * `testimonials` table rather than hardcoded), then restore the routes.
 */
const TECHNICIANS: Technician[] = [];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const sz = size === 'lg' ? 'h-5 w-5' : 'h-3.5 w-3.5';
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          className={`${sz} ${n <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
        />
      ))}
    </span>
  );
}

// Directory page listing all technicians
function TechnicianDirectory() {
  return (
    <>
      <SEOHead
        title="Our Technicians — TekSure"
        description="Browse TekSure's vetted, friendly technicians. Each one is ID-verified and rated by real customers."
      path="/technicians"
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <section className="border-b border-border py-10 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-primary">Our Technicians</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every TekSure technician is ID-verified, background-checked, and rated by real customers.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8">
          {TECHNICIANS.length === 0 && (
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-6 text-center">
                <p className="font-semibold mb-1">No technician profiles yet</p>
                <p className="text-muted-foreground text-sm">
                  We are still building this directory. In the meantime, you can request help
                  and we will match you with someone.
                </p>
              </CardContent>
            </Card>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNICIANS.map(tech => (
              <Card key={tech.id} className="rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                      {tech.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold text-sm">{tech.name}</h3>
                        {tech.verified && <span title="ID Verified"><Shield className="h-3 w-3 text-blue-500 shrink-0" aria-label="ID Verified" /></span>}
                      </div>
                      <p className="text-xs text-muted-foreground">{tech.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <StarRating rating={tech.rating} />
                        <span className="text-xs text-muted-foreground">{tech.rating} ({tech.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3" /> {tech.location}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tech.specialities.slice(0, 3).map(s => (
                      <span key={s} className="text-xs bg-muted rounded-full px-2 py-0.5 text-muted-foreground">{s}</span>
                    ))}
                    {tech.specialities.length > 3 && (
                      <span className="text-xs bg-muted rounded-full px-2 py-0.5 text-muted-foreground">+{tech.specialities.length - 3} more</span>
                    )}
                  </div>
                  <Button asChild size="sm" className="w-full gap-2 rounded-xl">
                    <Link to={`/technicians/${tech.id}`}>View profile <ArrowRight className="h-3 w-3" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-3">Ready to book?</p>
            <Button asChild size="lg" className="gap-2 rounded-xl">
              <Link to="/book">Book a Technician <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function TechnicianProfile() {
  const { id } = useParams<{ id: string }>();
  const tech = TECHNICIANS.find(t => t.id === id);

  if (!id || !tech) {
    return <TechnicianDirectory />;
  }

  return (
    <>
      <SEOHead
        title={`${tech.name} — TekSure Technician`}
        description={`${tech.title} in ${tech.location}. ${tech.rating} stars from ${tech.reviewCount} reviews.`}
      path={`/technicians/${tech.id}`}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <Link
            to="/technicians"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All technicians
          </Link>

          {/* Profile header */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-6">
              <div className="flex gap-5">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl shrink-0">
                  {tech.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-xl font-bold">{tech.name}</h1>
                    {tech.verified && (
                      <span className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                        <Shield className="h-3 w-3" /> ID Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{tech.title}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StarRating rating={tech.rating} size="lg" />
                    <span className="font-semibold">{tech.rating}</span>
                    <span className="text-sm text-muted-foreground">({tech.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {tech.location}
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tech.badges.map(badge => (
                  <Badge key={badge} variant="secondary" className="gap-1">
                    <Award className="h-3 w-3" /> {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-3 mb-6">
            {[
              { label: 'Jobs completed', value: tech.jobsCompleted.toString(), icon: CheckCircle2 },
              { label: 'Average rating', value: `${tech.rating} / 5`, icon: Star },
              { label: 'Response time', value: tech.responseTime, icon: Clock },
            ].map(stat => (
              <Card key={stat.label} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                  <p className="font-bold text-sm">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <h2 className="font-semibold mb-3">About {tech.name.split(' ')[0]}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{tech.bio}</p>
              <p className="text-xs text-muted-foreground mt-3">TekSure member since {tech.memberSince}</p>
            </CardContent>
          </Card>

          {/* Specialities */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <h2 className="font-semibold mb-3">Specialities</h2>
              <div className="flex flex-wrap gap-2">
                {tech.specialities.map(s => (
                  <span key={s} className="flex items-center gap-1.5 text-sm bg-primary/5 border border-primary/20 rounded-full px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Customer Reviews</h2>
                <div className="flex items-center gap-1.5">
                  <StarRating rating={tech.rating} />
                  <span className="text-sm font-medium">{tech.rating}</span>
                  <span className="text-xs text-muted-foreground">({tech.reviewCount})</span>
                </div>
              </div>
              <div className="space-y-4">
                {tech.reviews.map((review, i) => (
                  <div key={i} className={`pb-4 ${i < tech.reviews.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{review.author}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Book CTA */}
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold">Book {tech.name.split(' ')[0]} for your problem</p>
                <p className="text-sm text-muted-foreground mt-0.5">From ${FIRST_HOUR_PRICE} for the first hour. No fix, no charge.</p>
              </div>
              <Button asChild className="gap-2 shrink-0 rounded-xl">
                <Link to="/book">Book now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
