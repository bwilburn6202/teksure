import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ShoppingCart, ChevronRight, ExternalLink, AlertTriangle,
  type LucideIcon, Star,
} from 'lucide-react';

interface Flag {
  id: string;
  question: string;
  detail: string;
  weight: number;
}

const FLAGS: Flag[] = [
  {
    id: 'no-brand',
    question: 'Is the brand name a random string of letters? (e.g. "ZJBYHB", "GMOEGEFLLM")',
    detail: 'Real brands are pronounceable. Random uppercase strings usually mean a one-and-done seller listing the same product under a new name every few months.',
    weight: 25,
  },
  {
    id: 'too-many-five',
    question: 'Are 80%+ of the reviews 5 stars with no 3- or 4-star middle?',
    detail: 'A real product\'s reviews are bell-shaped — some great, some good, some mid, some bad. Almost-all 5-star with no middle is a tell that reviews were paid for or generated.',
    weight: 25,
  },
  {
    id: 'short-and-similar',
    question: 'Do many reviews look short and similar — same length, same tone, same emoji?',
    detail: 'Paid review farms produce dozens of look-alike reviews. Real reviews vary wildly in length, voice, and grammar.',
    weight: 20,
  },
  {
    id: 'rapid-burst',
    question: 'Are 50+ reviews dated within a few days of each other?',
    detail: 'Click "See all reviews" → "Most recent". If you see 50 reviews from one weekend, then nothing for months, then another burst — that is a paid campaign, not a popular product.',
    weight: 20,
  },
  {
    id: 'profile-junk',
    question: 'Tap a reviewer\'s name. Are most of their reviews for unrelated cheap gadgets?',
    detail: 'A real customer\'s history is varied. Paid reviewers leave dozens of 5-star reviews on cheap household electronics with no other categories.',
    weight: 15,
  },
  {
    id: 'verified',
    question: 'Are most reviews "Verified Purchase" — or do many lack that label?',
    detail: 'Unverified means the reviewer did not actually buy through Amazon. A handful unverified is fine; if half are unverified, the seller probably handed out free products in exchange for reviews.',
    weight: 20,
  },
  {
    id: 'foreign-grammar',
    question: 'Do many positive reviews have awkward English / odd phrasing?',
    detail: 'Some review farms write in a non-native voice ("Item is very nice and good for use! Five star!"). One or two is fine; a pattern is a red flag.',
    weight: 15,
  },
  {
    id: 'price-too-low',
    question: 'Is the price wildly lower than name brands for the same thing?',
    detail: 'A $12 "wireless earbud" rated 4.7 stars with 8,000 reviews next to a $130 Apple AirPod is selling you something different. Cheap is fine, but cheap + huge five-star count is the formula.',
    weight: 15,
  },
];

interface Verdict {
  label: string;
  cls: string;
  badge: string;
  explain: string;
}

function verdict(score: number): Verdict {
  if (score >= 50) return {
    label: 'Likely manipulated reviews',
    cls: 'border-red-300 bg-red-50 dark:bg-red-950/20',
    badge: 'High risk',
    explain: 'Multiple strong tells. The reviews here are probably paid, generated, or both. The product may still be okay, but the reviews are not telling you.',
  };
  if (score >= 25) return {
    label: 'Some warning signs',
    cls: 'border-amber-300 bg-amber-50 dark:bg-amber-950/20',
    badge: 'Be careful',
    explain: 'A few signals are off. Cross-check on Fakespot or ReviewMeta before buying, especially if the price is significant.',
  };
  return {
    label: 'Looks fine',
    cls: 'border-green-300 bg-green-50 dark:bg-green-950/20',
    badge: 'Low risk',
    explain: 'No major red flags. Reviews look organic. Read a few 3-star reviews — they are usually the most useful for the real story.',
  };
}

export default function AmazonReviewSpotter() {
  const [flagged, setFlagged] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const score = Array.from(flagged).reduce((s, id) => {
    const f = FLAGS.find(x => x.id === id);
    return s + (f?.weight ?? 0);
  }, 0);

  const v = verdict(score);

  return (
    <>
      <SEOHead
        title="Amazon Review Spotter"
        description="Eight signs a product's reviews on Amazon are fake or paid for. Walk through the checklist before you buy. Free, no account, results stay on your device."
        path="/tools/amazon-review-spotter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Amazon Review Spotter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Eight tells that a product\'s reviews were paid for. Walk through the list — see your verdict.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Amazon Review Spotter' }]} />

          <Card className={`mb-6 border-2 ${v.cls}`}>
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <Badge className="mb-1">{v.badge} ({score} pts)</Badge>
                <p className="font-semibold text-lg">{v.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{v.explain}</p>
              </div>
              {flagged.size > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setFlagged(new Set())}>Reset</Button>
              )}
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tap each sign you see on the listing</p>
              <div className="space-y-2">
                {FLAGS.map(f => (
                  <label key={f.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      flagged.has(f.id) ? 'border-red-300 bg-red-50/50 dark:bg-red-950/20' : 'border-border hover:bg-muted/40'
                    }`}>
                    <Checkbox checked={flagged.has(f.id)} onCheckedChange={() => toggle(f.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{f.question}</p>
                      <p className="text-xs text-muted-foreground mt-1">{f.detail}</p>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Two free tools that go deeper</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <a href="https://www.fakespot.com" target="_blank" rel="noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1">
                      Fakespot <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-muted-foreground"> — paste an Amazon link, get a letter grade and an "adjusted" star rating with the suspicious reviews removed.</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <a href="https://reviewmeta.com" target="_blank" rel="noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1">
                      ReviewMeta <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-muted-foreground"> — same idea, slightly different math. Worth a second opinion on a big purchase.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">The 3-star review trick</p>
                <p className="text-muted-foreground">
                  When you do read reviews, sort by 3-star (under "Filter by star"). 5-star reviews are often advertising; 1-star reviews are often unrelated complaints (shipping, accident). 3-star reviews are where you find people who used the product and have a balanced take.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For text and email scams.</p>
              </Link>
              <Link to="/tools/refund-and-return-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Refund &amp; Return Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">If a purchase was a mistake.</p>
              </Link>
              <Link to="/tools/bill-negotiator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bill Negotiator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Negotiate bills you already have.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: when in doubt, pay an extra $20 for a brand you have heard of. The fake-review premium on cheap gadgets is bigger than it looks.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
