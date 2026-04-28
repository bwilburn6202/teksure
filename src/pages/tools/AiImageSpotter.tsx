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
  Sparkles, ChevronRight, AlertTriangle, ExternalLink,
  Eye, Hand, ImageIcon, type LucideIcon,
} from 'lucide-react';

interface Check {
  id: string;
  question: string;
  detail: string;
  weight: number;
  category: string;
  icon: LucideIcon;
}

const CHECKS: Check[] = [
  {
    id: 'hands',
    question: 'Do hands look right? (count fingers, look at fingernails)',
    detail: 'AI image generators famously struggle with hands. Six fingers, fused fingers, fingernails growing the wrong way — all big tells. Look closely.',
    weight: 25,
    category: 'Body parts',
    icon: Hand,
  },
  {
    id: 'eyes',
    question: 'Do the eyes look symmetrical and reflect the same light?',
    detail: 'Real eyes catch the same light source. AI eyes often have mismatched reflections, different-shaped pupils, or asymmetric eyebrows. Earrings often only appear on one ear.',
    weight: 15,
    category: 'Body parts',
    icon: Eye,
  },
  {
    id: 'teeth',
    question: 'Do teeth look natural — not too many, not too even?',
    detail: 'AI mouths often have extra teeth, teeth that blend together, or impossibly perfect rows. Real smiles have small irregularities.',
    weight: 10,
    category: 'Body parts',
    icon: Eye,
  },
  {
    id: 'text',
    question: 'Is any text in the image (signs, labels, books) actually readable?',
    detail: 'AI is bad at written text. Background signs, book covers, t-shirt logos often look like a foreign alphabet on close inspection. If text is gibberish, the image is almost certainly AI.',
    weight: 25,
    category: 'Background',
    icon: ImageIcon,
  },
  {
    id: 'background',
    question: 'Does the background hold up to a close look?',
    detail: 'Zoom in on the edges and the back of the photo. AI backgrounds often have melting buildings, fences with random gaps, lampposts attached to nothing, or people whose legs do not connect to bodies.',
    weight: 15,
    category: 'Background',
    icon: ImageIcon,
  },
  {
    id: 'shadows',
    question: 'Do shadows fall in a sensible direction from a single light source?',
    detail: 'Real photos have shadows that all point away from one sun or light. AI shadows often go in different directions, or are missing entirely. Check shadows under the chin and the nose first.',
    weight: 10,
    category: 'Lighting',
    icon: Eye,
  },
  {
    id: 'skin',
    question: 'Does the skin look slightly plastic, too smooth, or waxy?',
    detail: 'Almost every AI portrait has a faint "doll-like" smoothness. Pores, freckles, and small imperfections look airbrushed away. By itself this is not proof, but combined with other signs it is a strong tell.',
    weight: 10,
    category: 'Skin & texture',
    icon: Eye,
  },
  {
    id: 'context',
    question: 'Is the photo the only source for a big claim?',
    detail: 'A photo of a famous person doing something shocking — that no news outlet has reported — is a red flag. Real news has multiple photos, video, and reporters. A single viral image is a low-cost way to lie.',
    weight: 25,
    category: 'Context',
    icon: AlertTriangle,
  },
  {
    id: 'reverse',
    question: 'Have you done a reverse image search?',
    detail: 'Right-click → "Search Image with Google" (on a computer). Or save the image and upload it to images.google.com. If it appears on AI image-generator galleries, that is your answer. If it has no history at all, also suspicious.',
    weight: 15,
    category: 'Context',
    icon: AlertTriangle,
  },
];

export default function AiImageSpotter() {
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
    const c = CHECKS.find(x => x.id === id);
    return s + (c?.weight ?? 0);
  }, 0);

  let verdict: { label: string; tone: string; cls: string; explain: string };
  if (score === 0) {
    verdict = {
      label: 'No flags yet',
      tone: 'neutral',
      cls: 'bg-muted/40 border-border',
      explain: 'Walk through the checks above. Even one flag is worth pausing on.',
    };
  } else if (score < 25) {
    verdict = {
      label: 'Could be real, but check more',
      tone: 'amber',
      cls: 'bg-amber-50 dark:bg-amber-950/20 border-amber-300',
      explain: 'A single small flag is not proof. Try a reverse image search and check whether reputable news sites have the same photo.',
    };
  } else if (score < 50) {
    verdict = {
      label: 'Looks suspicious',
      tone: 'amber',
      cls: 'bg-amber-50 dark:bg-amber-950/20 border-amber-400',
      explain: 'Multiple tells. Treat this image as unverified. Do not share it. Check whether it appears on real news sites.',
    };
  } else {
    verdict = {
      label: 'Almost certainly AI-generated',
      tone: 'red',
      cls: 'bg-red-50 dark:bg-red-950/20 border-red-300',
      explain: 'Strong tells across multiple checks. Do not share, do not act on it, do not let it change your mind on something important.',
    };
  }

  const reset = () => setFlagged(new Set());

  return (
    <>
      <SEOHead
        title="AI Image Spotter"
        description="A free, plain-English checklist to tell if a photo is AI-generated. Hands, eyes, text, shadows, and a 5-second reverse-image-search trick that catches most fakes."
        path="/tools/ai-image-spotter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Image Spotter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A 9-question checklist to tell if a photo is AI-generated. Open the image, walk through the questions, see your verdict.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'AI Image Spotter' }]} />

          <Card className={`mb-6 border-2 ${verdict.cls}`}>
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <Badge variant="outline" className="mb-1">{flagged.size} flag{flagged.size !== 1 ? 's' : ''} ({score} pts)</Badge>
                <p className={`font-semibold text-lg ${verdict.tone === 'red' ? 'text-red-700 dark:text-red-300' : verdict.tone === 'amber' ? 'text-amber-700 dark:text-amber-300' : ''}`}>
                  {verdict.label}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{verdict.explain}</p>
              </div>
              {flagged.size > 0 && (
                <Button variant="ghost" size="sm" onClick={reset}>Reset</Button>
              )}
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tap each check that the image fails</p>
              <div className="space-y-2">
                {CHECKS.map(c => {
                  const Icon = c.icon;
                  const checked = flagged.has(c.id);
                  return (
                    <label
                      key={c.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        checked ? 'border-red-300 bg-red-50/50 dark:bg-red-950/20' : 'border-border hover:bg-muted/40'
                      }`}
                    >
                      <Checkbox checked={checked} onCheckedChange={() => toggle(c.id)} className="mt-1" />
                      <Icon className={`h-4 w-4 shrink-0 mt-1 ${checked ? 'text-red-600' : 'text-muted-foreground'}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <p className="font-medium text-sm">{c.question}</p>
                          <Badge variant="outline" className="text-xs">{c.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{c.detail}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">The single best move: reverse image search</p>
              <p className="text-xs text-muted-foreground mb-3">
                On a computer: right-click the image → "Search Image with Google". On a phone: long-press the image → "Search Google for this image". If it shows up on AI-art galleries, on debunk sites, or on no real news outlets, you have your answer in 30 seconds.
              </p>
              <a href="https://images.google.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                images.google.com <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">When in doubt, do not share</p>
                <p className="text-muted-foreground">
                  AI fakes spread because real people forward them in good faith. If you cannot verify a viral image with a reputable source, the kindest move is to not pass it along. That alone breaks most disinformation chains.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/deepfake-defense-hub" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Deepfake Defense Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Bigger picture on AI fakes (video, voice).</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For text and email scams.</p>
              </Link>
              <Link to="/tools/fake-news-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fake News Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot misleading articles.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: AI-image tells get harder every year. The reverse-image-search step works regardless of how realistic the fake gets.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
