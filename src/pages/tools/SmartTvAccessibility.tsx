import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tv, AlertTriangle } from 'lucide-react';

type System = 'roku' | 'apple-tv' | 'fire-tv';

interface Setup {
  name: string;
  whoFor: string;
  steps: string[];
  features: string[];
}

const SETUPS: Record<System, Setup> = {
  'roku': {
    name: 'Roku (TV or stick)',
    whoFor: 'Anyone with a Roku TV, Roku Streaming Stick, or Roku Express. Works the same on all of them.',
    steps: [
      'Press Home on the remote → Settings → Accessibility.',
      'Captions mode → set to "On always" so captions appear on every show, every time.',
      'Audio guide (screen reader for low vision) → ON. Adjust speed and volume to taste.',
      'Text size → Large. Menus and the home screen become readable from the couch.',
      'High contrast → ON for sharper menu colors.',
      'On the Roku remote: hold the microphone button and say "Turn on captions" or "Open Netflix" — voice search skips typing.',
      'Bedtime sleep timer: Settings → System → Time → Sleep timer → pick 30, 60, or 90 minutes.',
    ],
    features: [
      'Voice remote works on every Roku since 2017 — no typing on the on-screen keyboard.',
      'Audio guide reads every menu aloud, so a person with low vision can pick a show without help.',
      'Captions stay ON forever, even after a power outage.',
      'Private listening: open the Roku app on the phone, plug headphones into the phone, hear the TV through the headphones — great for hard-of-hearing partners.',
      'Free Roku mobile app turns the phone into a giant remote with a keyboard, if the physical remote is hard to use.',
    ],
  },
  'apple-tv': {
    name: 'Apple TV (4K or HD box)',
    whoFor: 'Anyone with an Apple TV box plugged into the HDMI port. Settings live in the same place on all models.',
    steps: [
      'Settings → Accessibility → turn on Audio Descriptions. Movies that have a narrator track will play it automatically.',
      'Settings → Accessibility → VoiceOver → ON for full screen reader (reads every button aloud).',
      'Settings → Accessibility → Zoom → ON. Triple-click the TV button on the remote to magnify any part of the screen.',
      'Settings → Accessibility → Subtitles and Captioning → Closed Captions + SDH → ON. Style → bigger text, yellow on black for high contrast.',
      'Settings → Accessibility → Accessibility Shortcut → pick VoiceOver, Zoom, or Bold Text. Triple-click the TV button to toggle that feature any time.',
      'Siri Remote: hold the microphone button and say "Turn on captions" or "What did she say?" — Siri rewinds 15 seconds and turns captions on for the rest of the scene.',
      'Settings → General → Sleep After → pick 30 minutes for a bedtime timer.',
    ],
    features: [
      'Best-in-class audio descriptions on Apple TV+ originals — built for visually impaired viewers from day one.',
      'Siri Remote has a microphone for voice search and voice captions toggle.',
      '"What did she say?" rewind feature is a lifesaver for anyone hard of hearing.',
      'Reduce Motion setting calms down the menus for people who get dizzy from animations.',
      'Increase Contrast and Bold Text make the home screen far easier to read.',
    ],
  },
  'fire-tv': {
    name: 'Amazon Fire TV / Smart TV',
    whoFor: 'Fire TV stick, Fire TV Cube, Insignia/Toshiba Fire TVs. Most other smart TVs (Samsung, LG, Vizio) use a similar menu — look under Settings → Accessibility.',
    steps: [
      'Press Home → Settings → Accessibility on the Fire TV menu.',
      'Closed Captioning → ON, then Caption Style → bigger text size, white on black background.',
      'VoiceView (screen reader) → ON for low vision. Adjust speech rate so it is comfortable.',
      'Screen Magnifier → ON. Press Back + Fast-Forward together to zoom into any part of the screen.',
      'Audio Descriptions: open Prime Video → settings → turn on Audio Descriptions for movies that support them.',
      'Voice remote (Alexa Voice Remote): hold the microphone button and say "Turn on captions" or "Open Netflix" — works without typing.',
      'Sleep timer: ask Alexa "Set a sleep timer for 45 minutes" — Fire TV turns off on its own.',
      'On most Samsung/LG/Vizio TVs: Settings → General → Accessibility for the same options.',
    ],
    features: [
      'Alexa Voice Remote is included with every Fire TV — full voice control out of the box.',
      'High Contrast Text mode makes menus pop for low vision.',
      'Banner Time setting keeps the channel info on screen longer for slow readers.',
      'Free Fire TV app on the phone gives a keyboard and a microphone, helpful when the remote is hard to hold.',
      'Most modern smart TVs (post-2020) have a dedicated accessibility shortcut button on the remote — usually a small dot or wheelchair icon.',
    ],
  },
};

export default function SmartTvAccessibility() {
  const [system, setSystem] = useState<System>('roku');
  const setup = SETUPS[system];

  return (
    <>
      <SEOHead
        title="Smart TV Accessibility Settings"
        description="Turn on captions, audio descriptions, screen zoom, and voice remotes on Roku, Apple TV, and Fire TV. Plain-English setup for low vision, hard of hearing, or limited dexterity."
        path="/tools/smart-tv-accessibility"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <Tv className="h-8 w-8 text-indigo-700 dark:text-indigo-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart TV Accessibility</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Captions on always, bigger menus, audio descriptions, voice remotes, and bedtime timers. For low vision, hard of hearing, or limited dexterity.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart TV Accessibility' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Audio descriptions are a lifesaver — but they are OFF by default</p>
                <p className="text-muted-foreground">
                  For people with low vision or blindness, audio descriptions narrate what is happening on screen between the dialogue ("she opens the door, picks up the gun"). Every major streaming service supports them — but you have to turn them on. Most viewers have no idea they exist.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which TV system do you have?</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'roku' as System,     label: 'Roku' },
                  { id: 'apple-tv' as System, label: 'Apple TV' },
                  { id: 'fire-tv' as System,  label: 'Fire TV / Smart TV' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setSystem(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      system === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{setup.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>For:</strong> {setup.whoFor}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup steps</p>
              <ol className="space-y-2 mb-5">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What this unlocks</p>
              <ul className="space-y-1.5">
                {setup.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Phone, tablet, and computer too.</p>
              </Link>
              <Link to="/tools/streaming-service-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Streaming Service Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Netflix, Prime, Disney+, more.</p>
              </Link>
              <Link to="/tools/cord-cutter-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Cord Cutter Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Replace cable, save money.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
