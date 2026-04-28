import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Heart, Tablet, ChevronRight, Phone, ImageIcon, Video,
  Sparkles, Shield, Volume2, Type,
} from 'lucide-react';

const SECTIONS = [
  {
    id: 'pick-a-device',
    title: '1. Pick the right device',
    icon: Tablet,
    body: [
      'A 10-inch tablet beats a phone for grandparents — bigger screen, easier to read, easier to tap.',
      'iPad (any 10th-gen or newer): simplest. Pair with an iPhone family for sharing photos.',
      'Amazon Fire HD 10: cheapest path. Works fine for video calls, photos, audiobooks.',
      'Samsung Galaxy Tab A: best Android tablet for value.',
      'Skip a "smart display" if you want video calls AND photos AND a calendar — a tablet does all three.',
    ],
  },
  {
    id: 'set-it-up-for-eyes',
    title: '2. Set it up for older eyes',
    icon: Type,
    body: [
      'Make text bigger than the default. iPad: Settings → Display & Brightness → Text Size, drag the slider all the way up.',
      'Turn on bold text — it makes a real difference. Settings → Display & Brightness → Bold Text.',
      'Crank brightness to about 75%. Auto-brightness can dim the screen at the worst times.',
      'Keep the screen on longer. Settings → Display & Brightness → Auto-Lock → 5 Minutes (so it does not lock mid-call).',
    ],
  },
  {
    id: 'set-it-up-for-ears',
    title: '3. Set it up for older ears',
    icon: Volume2,
    body: [
      'Set the volume buttons to control all sounds. Settings → Sounds → "Change with Buttons" → ON.',
      'Bump the system volume up. The +/- buttons during a call also work.',
      'Pair Bluetooth hearing aids if they have them. Settings → Accessibility → Hearing Devices.',
      'Turn on Live Captions if hearing is a real issue. Settings → Accessibility → Live Captions.',
    ],
  },
  {
    id: 'three-buttons',
    title: '4. Set up the "three button" home screen',
    icon: Heart,
    body: [
      'Goal: make the screen look like the dashboard of a car — three or four big things, nothing else.',
      'Recommended layout: Photos, FaceTime / Video Call, Messages. Add Music or Audible if they enjoy it.',
      'Move every other app off the home screen. Long-press → Remove from Home Screen → Move to App Library (the apps stay installed, just not in the way).',
      'Make the icons bigger. Settings → Home Screen & Multitasking (iPad) → "Use Large App Icons".',
    ],
  },
  {
    id: 'photos',
    title: '5. Make photos automatic',
    icon: ImageIcon,
    body: [
      'Create a Shared Album. Open Photos → Albums → "+" → New Shared Album → call it "Family".',
      'Invite the whole family. Anyone you invite can drop new photos in — and Grandma sees them with no taps.',
      'Turn on the screen saver photo loop. Settings → Lock Screen & Sleep → "Picture Frame" → pick the Family album.',
      'Now the tablet shows new family photos every time it sits on the kitchen counter.',
    ],
  },
  {
    id: 'video-calls',
    title: '6. Make video calls one tap',
    icon: Video,
    body: [
      'iPad: Open FaceTime. Pin a contact: tap their name → "Add to Favorites".',
      'Add a Favorites widget to the home screen so the family is right there. Long-press home screen → "+" → search "Contacts" → pick the small Favorites widget.',
      'Test it together before you leave. Have one person call from across the room so they see what to tap.',
      'For Android: install Google Meet. Same steps — pin a few favorites, add to home screen.',
    ],
  },
  {
    id: 'safety',
    title: '7. Lock the dangerous parts down',
    icon: Shield,
    body: [
      'Turn on Screen Time → Content Restrictions to prevent surprise app purchases.',
      'Hide Mail and Safari from the home screen if they get phishing emails — they cannot open links if they cannot find the apps.',
      'Add an emergency contact to the lock screen: Settings → Health → Medical ID (works on iPad).',
      'Save the family password manager somewhere two adults can reach it (see /account-after-loss).',
    ],
  },
];

export default function GrandparentDeviceSetup() {
  return (
    <>
      <SEOHead
        title="Grandparent Device Setup"
        description="A free, plain-English walkthrough for setting up a tablet or phone for a grandparent — bigger text, photos that arrive automatically, one-tap video calls, and lockdowns that prevent scams."
        path="/grandparent-device-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-pink-50 via-background to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-pink-500/10 rounded-full">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Grandparent Device Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The honest, step-by-step way to set up a tablet for a grandparent — so it works the first time, every time.
            </p>
            <p className="text-sm text-muted-foreground mt-3">About 30 minutes start to finish. Free.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[{ label: 'Grandparent Device Setup' }]}
          />

          {/* In-page nav */}
          <Card className="border-border mb-8 bg-muted/30">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skip ahead</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {SECTIONS.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {SECTIONS.map(s => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="mb-8 scroll-mt-24">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{s.title}</h2>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <ul className="space-y-2.5 text-sm leading-relaxed">
                      {s.body.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary shrink-0 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5 mb-8">
            <CardContent className="p-6">
              <Badge className="mb-3" variant="secondary">When you are done</Badge>
              <p className="font-semibold mb-2">Walk through it together — twice.</p>
              <p className="text-sm text-muted-foreground mb-4">
                Sit next to them. Have them open the photo album, place a video call, and turn the volume up. Watch where they hesitate. That tells you which icon needs to move or grow. Walk it through a second time before you leave.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/tools/tech-cheatsheet-generator" className="gap-2">
                    Print a cheatsheet for them <Sparkles className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/tools/family-tech-roundtable">Plan the family roundtable</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/new-grandparent-tech" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">New Grandparent Tech</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tech for new grandparents — the wider hub.</p>
              </Link>
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make any device easier to see.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">Help them spot scams.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
