import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Accessibility, Eye, Ear, Hand, Brain, Sparkles, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  category: 'vision' | 'hearing' | 'motor' | 'cognitive';
  tags: string[];
}

const QUESTIONS: Question[] = [
  { id: 'v1', category: 'vision', question: 'I sometimes have trouble reading small text on my phone or computer', tags: ['text-size', 'zoom'] },
  { id: 'v2', category: 'vision', question: 'Bright white screens bother my eyes', tags: ['dark-mode', 'brightness'] },
  { id: 'v3', category: 'vision', question: 'I find some color combinations hard to distinguish', tags: ['color-blind', 'contrast'] },
  { id: 'v4', category: 'vision', question: 'I wear reading glasses or have vision problems', tags: ['text-size', 'magnify'] },
  { id: 'h1', category: 'hearing', question: 'I sometimes miss what people say in videos or calls', tags: ['captions', 'transcripts'] },
  { id: 'h2', category: 'hearing', question: 'I wear hearing aids or have hearing loss', tags: ['hearing-aid', 'captions', 'volume'] },
  { id: 'h3', category: 'hearing', question: 'I prefer text over audio for information', tags: ['transcripts', 'captions'] },
  { id: 'm1', category: 'motor', question: 'I find typing for long periods painful or tiring', tags: ['voice-input', 'shortcuts'] },
  { id: 'm2', category: 'motor', question: 'I have arthritis or hand mobility issues', tags: ['voice-input', 'touch-accommodations'] },
  { id: 'm3', category: 'motor', question: 'I struggle with precise touchscreen gestures', tags: ['touch-accommodations', 'large-targets'] },
  { id: 'm4', category: 'motor', question: 'I sometimes accidentally tap the wrong thing on my phone', tags: ['touch-accommodations', 'reachability'] },
  { id: 'c1', category: 'cognitive', question: 'Busy screens with lots of information overwhelm me', tags: ['reduce-motion', 'simplify', 'focus-mode'] },
  { id: 'c2', category: 'cognitive', question: 'I need more time to read or process information', tags: ['reading-time', 'simplify'] },
  { id: 'c3', category: 'cognitive', question: 'I get distracted by animations or moving elements', tags: ['reduce-motion', 'focus-mode'] },
  { id: 'c4', category: 'cognitive', question: 'I prefer simple, clean interfaces over complex ones', tags: ['simplify', 'focus-mode'] },
];

interface Recommendation {
  feature: string;
  description: string;
  platforms: { name: string; howTo: string }[];
  officialLink?: { label: string; url: string };
  matchesTags: string[];
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    feature: 'Larger Text',
    description: 'Make all text on your phone or computer bigger without changing anything else.',
    matchesTags: ['text-size', 'zoom', 'magnify'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Display & Text Size → Larger Text' },
      { name: 'Android', howTo: 'Settings → Display → Font size → drag slider' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Text size → drag slider' },
      { name: 'Mac', howTo: 'System Settings → Displays → Larger Text' },
    ],
    officialLink: { label: 'Apple Accessibility', url: 'https://www.apple.com/accessibility/' },
  },
  {
    feature: 'Zoom / Magnifier',
    description: 'Zoom into any part of the screen when you need a closer look.',
    matchesTags: ['magnify', 'zoom'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Zoom → turn on. Triple-tap to zoom.' },
      { name: 'Android', howTo: 'Settings → Accessibility → Magnification' },
      { name: 'Windows', howTo: 'Press Win + to zoom in, Win - to zoom out' },
      { name: 'Mac', howTo: 'System Settings → Accessibility → Zoom' },
    ],
  },
  {
    feature: 'Dark Mode',
    description: 'Changes white backgrounds to dark — easier on the eyes, especially at night.',
    matchesTags: ['dark-mode', 'brightness'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Display & Brightness → Dark' },
      { name: 'Android', howTo: 'Settings → Display → Dark theme' },
      { name: 'Windows', howTo: 'Settings → Personalization → Colors → Dark' },
      { name: 'Mac', howTo: 'System Settings → Appearance → Dark' },
    ],
  },
  {
    feature: 'Color Filters / High Contrast',
    description: 'Adjusts colors for color blindness or increases contrast for easier reading.',
    matchesTags: ['color-blind', 'contrast'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Display & Text Size → Color Filters' },
      { name: 'Android', howTo: 'Settings → Accessibility → Color correction' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Color filters' },
      { name: 'Mac', howTo: 'System Settings → Accessibility → Display → Color Filters' },
    ],
  },
  {
    feature: 'Closed Captions',
    description: 'Shows text of what\'s said in videos and calls.',
    matchesTags: ['captions', 'transcripts'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Subtitles & Captioning' },
      { name: 'Android', howTo: 'Settings → Accessibility → Captions (Live Caption for any audio)' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Captions → Live Captions' },
      { name: 'Mac', howTo: 'System Settings → Accessibility → Captions' },
    ],
    officialLink: { label: 'Android Live Caption', url: 'https://support.google.com/accessibility/android/answer/9350862' },
  },
  {
    feature: 'Hearing Aid / Audio Support',
    description: 'Pair hearing aids, adjust stereo balance, or amplify voices.',
    matchesTags: ['hearing-aid', 'volume'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Hearing Devices (supports Made-for-iPhone hearing aids)' },
      { name: 'Android', howTo: 'Settings → Accessibility → Hearing enhancements' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Audio → Mono audio' },
      { name: 'Mac', howTo: 'System Settings → Accessibility → Audio' },
    ],
  },
  {
    feature: 'Voice Input / Dictation',
    description: 'Talk to type — say what you want to write and it appears as text.',
    matchesTags: ['voice-input'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Tap the microphone on the keyboard, or: Settings → Accessibility → Voice Control' },
      { name: 'Android', howTo: 'Tap the microphone on Gboard keyboard' },
      { name: 'Windows', howTo: 'Press Win + H to start voice typing anywhere' },
      { name: 'Mac', howTo: 'Press Fn twice to start dictation anywhere' },
    ],
  },
  {
    feature: 'Touch Accommodations',
    description: 'Makes touchscreens more forgiving — ignores accidental taps, gives more time for gestures.',
    matchesTags: ['touch-accommodations', 'large-targets'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Touch → Touch Accommodations' },
      { name: 'Android', howTo: 'Settings → Accessibility → Touch & hold delay' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Mouse pointer and touch' },
    ],
  },
  {
    feature: 'Reachability / One-Handed Mode',
    description: 'Shrinks the screen so you can reach the top with one hand.',
    matchesTags: ['reachability'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Touch → Reachability (swipe down on bottom edge)' },
      { name: 'Android', howTo: 'Settings → Display → One-handed mode' },
    ],
  },
  {
    feature: 'Reduce Motion',
    description: 'Turns off animations and parallax effects that can feel dizzying or distracting.',
    matchesTags: ['reduce-motion', 'focus-mode'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Motion → Reduce Motion' },
      { name: 'Android', howTo: 'Settings → Accessibility → Remove animations' },
      { name: 'Windows', howTo: 'Settings → Accessibility → Visual effects → Animation effects off' },
      { name: 'Mac', howTo: 'System Settings → Accessibility → Display → Reduce motion' },
    ],
  },
  {
    feature: 'Focus / Do Not Disturb',
    description: 'Silences non-essential notifications so you can concentrate.',
    matchesTags: ['focus-mode', 'simplify'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Focus → pick a mode (Do Not Disturb, Work, Personal)' },
      { name: 'Android', howTo: 'Settings → Notifications → Do Not Disturb' },
      { name: 'Windows', howTo: 'Settings → System → Focus → Start focus session' },
    ],
  },
  {
    feature: 'Simplified / Senior Interface',
    description: 'Simpler home screens, larger icons, fewer distractions.',
    matchesTags: ['simplify', 'reading-time'],
    platforms: [
      { name: 'iPhone/iPad', howTo: 'Settings → Accessibility → Assistive Access (iOS 17+) for the simplest interface' },
      { name: 'Android (Samsung)', howTo: 'Settings → Display → Easy mode' },
      { name: 'Jitterbug phones', howTo: 'Purpose-built phone for seniors with large buttons and simple menus' },
    ],
  },
  {
    feature: 'TekSure Senior Mode',
    description: 'Larger text and buttons throughout TekSure — toggle it on in your profile.',
    matchesTags: ['simplify', 'text-size', 'reading-time'],
    platforms: [
      { name: 'TekSure', howTo: 'Profile → Senior Mode → toggle on' },
    ],
  },
];

const CATEGORIES = {
  vision: { label: 'Vision', icon: Eye, color: 'text-blue-600' },
  hearing: { label: 'Hearing', icon: Ear, color: 'text-purple-600' },
  motor: { label: 'Touch & Mobility', icon: Hand, color: 'text-green-600' },
  cognitive: { label: 'Focus & Simplicity', icon: Brain, color: 'text-amber-600' },
};

export default function AccessibilityNeedsFinder() {
  const [answers, setAnswers] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const toggleAnswer = (id: string) => {
    const next = new Set(answers);
    if (next.has(id)) next.delete(id); else next.add(id);
    setAnswers(next);
  };

  const matchedTags = new Set<string>();
  QUESTIONS.forEach(q => {
    if (answers.has(q.id)) q.tags.forEach(t => matchedTags.add(t));
  });

  const recommended = RECOMMENDATIONS
    .map(rec => ({
      ...rec,
      matchCount: rec.matchesTags.filter(t => matchedTags.has(t)).length,
    }))
    .filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  const reset = () => {
    setAnswers(new Set());
    setShowResults(false);
  };

  return (
    <>
      <SEOHead
        title="Accessibility Needs Finder — Which Features Would Help You?"
        description="Free 15-question assessment that recommends iPhone, Android, Windows, and Mac accessibility features personalized for you."
        path="/tools/accessibility-needs-finder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Accessibility className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Accessibility</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Accessibility Needs Finder</h1>
            <p className="text-muted-foreground max-w-2xl">
              Your phone and computer have built-in features that make technology easier to use — but they're hidden in settings menus. Tell us what you struggle with, and we'll show you which features to turn on.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!showResults ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Check anything that sounds like you</h2>
                <Badge variant="outline">{answers.size} selected</Badge>
              </div>

              {Object.entries(CATEGORIES).map(([catKey, meta]) => {
                const Icon = meta.icon;
                const questions = QUESTIONS.filter(q => q.category === catKey);
                return (
                  <div key={catKey} className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-5 h-5 ${meta.color}`} />
                      <h3 className="text-lg font-semibold">{meta.label}</h3>
                    </div>
                    <div className="space-y-2">
                      {questions.map(q => (
                        <Label
                          key={q.id}
                          className={`flex items-start gap-3 p-4 rounded-md border cursor-pointer transition-colors ${answers.has(q.id) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'}`}
                        >
                          <input
                            type="checkbox"
                            checked={answers.has(q.id)}
                            onChange={() => toggleAnswer(q.id)}
                            className="mt-0.5"
                          />
                          <span className="text-sm leading-relaxed">{q.question}</span>
                        </Label>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="sticky bottom-4 flex gap-3">
                <Button size="lg" onClick={() => setShowResults(true)} disabled={answers.size === 0} className="flex-1">
                  See my recommendations <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {answers.size > 0 && (
                  <Button size="lg" variant="outline" onClick={reset}>
                    Start over
                  </Button>
                )}
              </div>

              {answers.size === 0 && (
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Check at least one item above to see recommendations.
                </p>
              )}
            </>
          ) : (
            <>
              <div className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Your personalized recommendations
                  </h2>
                  <p className="text-muted-foreground">
                    Based on your {answers.size} selection{answers.size !== 1 ? 's' : ''}, here are {recommended.length} feature{recommended.length !== 1 ? 's' : ''} that could help.
                  </p>
                </div>
                <Button variant="outline" onClick={reset}>Start over</Button>
              </div>

              <div className="space-y-4">
                {recommended.map((rec) => (
                  <Card key={rec.feature}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-lg">{rec.feature}</h3>
                        <Badge variant="outline" className="text-xs">Matches {rec.matchCount} item{rec.matchCount !== 1 ? 's' : ''}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{rec.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        {rec.platforms.map((p) => (
                          <div key={p.name} className="p-3 rounded-md bg-muted/40 border border-border">
                            <div className="text-xs font-semibold mb-1">{p.name}</div>
                            <div className="text-xs text-muted-foreground font-mono">{p.howTo}</div>
                          </div>
                        ))}
                      </div>
                      {rec.officialLink && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={rec.officialLink.url} target="_blank" rel="noopener noreferrer">
                            {rec.officialLink.label} <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {recommended.length === 0 && (
                <Card><CardContent className="p-5">
                  <p className="text-muted-foreground">No specific recommendations — try selecting more items above.</p>
                </CardContent></Card>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
