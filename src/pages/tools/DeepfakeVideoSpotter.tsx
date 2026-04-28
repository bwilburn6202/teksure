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
import { Video, AlertTriangle, ChevronRight, ExternalLink } from 'lucide-react';

interface Check {
  id: string;
  question: string;
  detail: string;
  weight: number;
  category: string;
}

const CHECKS: Check[] = [
  {
    id: 'lipsync',
    question: 'Is the lip-sync slightly off — voice not quite matching the mouth?',
    detail: 'Deepfake video tools often paste a face onto a body, but the mouth shapes do not line up perfectly with the words. Watch the mouth on full screen with sound on. If the lips and audio drift even a little, that is a major tell.',
    weight: 25,
    category: 'Face',
  },
  {
    id: 'blinking',
    question: 'Are blinks stiff, missing, or too regular?',
    detail: 'Real people blink about 15-20 times a minute, at uneven intervals. Deepfaked faces often blink too rarely, blink in a strange pattern, or skip blinking for long stretches. Count blinks during a 30-second clip.',
    weight: 15,
    category: 'Face',
  },
  {
    id: 'skin',
    question: 'Does the skin look too smooth or slightly waxy?',
    detail: 'Deepfaked faces tend to have an airbrushed quality. Pores, wrinkles, and small blemishes are smoothed away. The forehead and cheeks often look like soft plastic compared to the neck.',
    weight: 10,
    category: 'Face',
  },
  {
    id: 'hair',
    question: 'Do hair edges look "painted on" or blurred?',
    detail: 'Hairlines are hard for deepfake software. Stray hairs near the temples and the edge of the forehead often look smeared, frozen, or oddly sharp against the background. Compare the hair edge to the rest of the head.',
    weight: 10,
    category: 'Face',
  },
  {
    id: 'accessories',
    question: 'Do earrings or glasses flicker between frames?',
    detail: 'Small accessories sit on the boundary between the deepfaked face and the real body. Earrings sometimes appear on one ear and not the other. Glasses can warp, flicker, or change shape when the head turns.',
    weight: 10,
    category: 'Face',
  },
  {
    id: 'eyes',
    question: 'Do the eyes look glassy, dead, or staring?',
    detail: 'Real eyes track tiny things — they shift, refocus, follow speech. Deepfaked eyes often look slightly vacant. The reflections in the eyes may also stay frozen instead of moving with the head.',
    weight: 10,
    category: 'Face',
  },
  {
    id: 'background',
    question: 'Does the background flicker, warp, or have weird artifacts?',
    detail: 'When deepfake software replaces a face, the area around the face can wobble. Look at the wall, the curtain, or the doorframe behind the person. Shimmering, ghosting, or sudden blur is a sign the video has been edited.',
    weight: 10,
    category: 'Background',
  },
  {
    id: 'singlesource',
    question: 'Is this the only source — no other outlet has the same moment?',
    detail: 'A real public figure saying something newsworthy gets covered by many outlets, from many camera angles. A single viral clip with no second source — and no coverage on AP, Reuters, or major networks — is a serious warning sign.',
    weight: 25,
    category: 'Context',
  },
  {
    id: 'urgency',
    question: 'Is the video pushing you to act fast or doing something out of character?',
    detail: 'Scam deepfakes often show a celebrity endorsing a get-rich product, a politician saying something shocking right before an election, or a "kidnapped" family member begging for money. Urgency and out-of-character behavior are classic manipulation. Stop, breathe, and verify before you act.',
    weight: 25,
    category: 'Context',
  },
];

export default function DeepfakeVideoSpotter() {
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
      explain: 'Watch the clip on full screen with the sound on. Walk through the checks above. Even one flag is worth pausing on.',
    };
  } else if (score < 25) {
    verdict = {
      label: 'Could be real, but check more',
      tone: 'amber',
      cls: 'bg-amber-50 dark:bg-amber-950/20 border-amber-300',
      explain: 'A single small flag is not proof. Look for the same moment on a major news outlet from a different camera angle.',
    };
  } else if (score < 50) {
    verdict = {
      label: 'Looks suspicious',
      tone: 'amber',
      cls: 'bg-amber-50 dark:bg-amber-950/20 border-amber-400',
      explain: 'Multiple tells. Treat this video as unverified. Do not share it. Check whether reputable outlets have the same footage.',
    };
  } else {
    verdict = {
      label: 'Almost certainly a deepfake',
      tone: 'red',
      cls: 'bg-red-50 dark:bg-red-950/20 border-red-300',
      explain: 'Strong tells across multiple checks. Do not share, do not act on it, and do not let it change your mind on something important.',
    };
  }

  const reset = () => setFlagged(new Set());

  return (
    <>
      <SEOHead
        title="Deepfake Video Spotter"
        description="A free, plain-English checklist to tell if a video is a deepfake. Lip-sync, blinking, skin texture, background flicker, and the single-source test that catches most political and celebrity fakes."
        path="/tools/deepfake-video-spotter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-purple-50 dark:from-rose-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <Video className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Deepfake Video Spotter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A 9-point checklist to tell if a video has been faked. Watch the clip on full screen with sound on, walk through the questions, see your verdict.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Deepfake Video Spotter' }]} />

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
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tap each check that the video fails</p>
              <div className="space-y-2">
                {CHECKS.map(c => {
                  const checked = flagged.has(c.id);
                  return (
                    <label
                      key={c.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        checked ? 'border-red-300 bg-red-50/50 dark:bg-red-950/20' : 'border-border hover:bg-muted/40'
                      }`}
                    >
                      <Checkbox checked={checked} onCheckedChange={() => toggle(c.id)} className="mt-1" />
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
              <p className="text-sm font-semibold mb-2">The single best move: find a second source</p>
              <p className="text-xs text-muted-foreground mb-3">
                If a politician really said it, a celebrity really endorsed it, or a family member really called for help, more than one place will have proof. Search the exact quote on Google News. Check AP, Reuters, or your local TV station. If only one Facebook page or TikTok account has the clip, treat it as a fake until proven real.
              </p>
              <a href="https://news.google.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                news.google.com <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Election seasons are peak deepfake season</p>
                <p className="text-muted-foreground">
                  Deepfake political clips and celebrity-endorsement scams spread fastest on Facebook and TikTok during election seasons. Always check the source before you share or act. If you cannot find the same video on a major news site, assume it is fake.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/ai-image-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">AI Image Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">For still photos that look too good to be true.</p>
              </Link>
              <Link to="/tools/ai-voice-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">AI Voice Defense</p>
                <p className="text-xs text-muted-foreground mt-0.5">For voice-only calls that sound like a loved one.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For text and email scams.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: Deepfake quality keeps improving. The single-source test works no matter how realistic the fake looks — real news has more than one camera.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
