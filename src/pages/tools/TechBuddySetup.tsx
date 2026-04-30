import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users, ChevronRight, Shield, Eye, Phone, Heart, type LucideIcon,
} from 'lucide-react';

type Pair = 'iphone-iphone' | 'iphone-android' | 'android-iphone' | 'android-android';

interface Step {
  title: string;
  detail: string;
}

interface Block {
  id: string;
  title: string;
  icon: LucideIcon;
  who: string;
  steps: Step[];
}

const BLOCKS: Block[] = [
  {
    id: 'invite',
    title: 'Pick the buddy and invite them',
    icon: Users,
    who: 'Both — the senior and the helper sit down together with both phones once.',
    steps: [
      { title: 'Pick one tech buddy', detail: 'The family member or friend the senior trusts most. Ideally someone they call once or twice a week anyway. The buddy is the FIRST person called for tech questions — not the cousin who happens to be a software engineer.' },
      { title: 'Add each other as Favorites', detail: 'In the Phone app: Contacts → tap the buddy → "Add to Favorites". Now they are one tap away on the lock screen.' },
      { title: 'Pin the buddy in Messages', detail: 'iMessage or whatever app you both use. Long-press the conversation → "Pin". Always at the top.' },
    ],
  },
  {
    id: 'location',
    title: 'Share location two ways',
    icon: Eye,
    who: 'Both — if either falls or gets lost, the other can find them.',
    steps: [
      { title: 'iPhone-to-iPhone: Find My', detail: 'Open Find My → People tab → "Share My Location" → pick the buddy → "Share Indefinitely". Have them do the same on their iPhone.' },
      { title: 'Mixed iPhone / Android: Google Maps', detail: 'Both download Google Maps. Open Google Maps → tap your photo → "Location sharing" → "Share location" → pick a duration → pick the buddy. Works on both phones.' },
      { title: 'Make sure phones are not muted at night', detail: 'iPhone: Settings → Focus → Sleep → "Allow Calls From" → "Favorites". The buddy can still ring through. Android similar under Settings → Sound → Do Not Disturb → Exceptions.' },
    ],
  },
  {
    id: 'find-my',
    title: 'Help find a lost phone',
    icon: Shield,
    who: 'Buddy needs to know how to find the senior\'s phone if they lose it.',
    steps: [
      { title: 'iPhone: write down iCloud login', detail: 'On a card kept somewhere safe, write the senior\'s Apple ID email and password. The buddy can sign into icloud.com/find on any computer to ring or locate the phone.' },
      { title: 'Android: write down Google login', detail: 'Same thing — Google email + password on a card. Buddy goes to google.com/android/find.' },
      { title: 'Or use Family Sharing', detail: 'Apple Family Sharing or Google Family Group makes finding family devices easier without sharing passwords. Set up once.' },
    ],
  },
  {
    id: 'remote-help',
    title: 'When the buddy needs to help by phone',
    icon: Phone,
    who: 'The buddy will be on the phone walking the senior through fixes.',
    steps: [
      { title: 'iPhone: enable SharePlay screen share', detail: 'During a FaceTime call, tap the screen-share icon (rectangle with person). The senior can show their screen so the buddy sees what they see.' },
      { title: 'Android: use Google Meet screen share', detail: 'On Google Meet, tap the three-dot menu → "Share screen". Same idea — buddy sees what the senior is looking at.' },
      { title: 'Save 1-800-MY-APPLE and Google Help in contacts', detail: 'When the buddy cannot fix it, falling back to Apple Support (1-800-275-2273) or Google Help (online chat at support.google.com) is fine. Both are free for basic issues.' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency settings',
    icon: Heart,
    who: 'Both — but especially the senior.',
    steps: [
      { title: 'Add the buddy as an emergency contact', detail: 'iPhone: Health → Medical ID → Emergency Contacts → Add. Android: Settings → Safety & emergency → Emergency contacts. They get a text with location during SOS.' },
      { title: 'Set up Fall Detection if there is a watch', detail: 'See our Fall Detection Setup tool. Apple Watch, Pixel Watch, or Galaxy Watch all do this — texts both 911 and the emergency contact.' },
      { title: 'Add medical info to lock screen', detail: 'Conditions, medications, allergies. iPhone: Health → Medical ID → "Show When Locked". First responders look there first.' },
    ],
  },
];

const PAIRS: { id: Pair; label: string }[] = [
  { id: 'iphone-iphone', label: 'Both iPhones' },
  { id: 'iphone-android', label: 'I have iPhone, buddy has Android' },
  { id: 'android-iphone', label: 'I have Android, buddy has iPhone' },
  { id: 'android-android', label: 'Both Androids' },
];

export default function TechBuddySetup() {
  const [pair, setPair] = useState<Pair>('iphone-iphone');

  return (
    <>
      <SEOHead
        title="Tech Buddy Setup"
        description="Pair one trusted family member to one senior — and set up the phones so help is one tap away. Find My, screen sharing, emergency contacts, and the small settings that matter."
        path="/tools/tech-buddy-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-fuchsia-50 via-background to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-fuchsia-500/10 rounded-full">
                <Users className="h-8 w-8 text-fuchsia-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Buddy Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pair one senior with one trusted family member. Help is one tap away — including the kind of help no app gives you.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Buddy Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which phones do you each have?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {PAIRS.map(p => (
                  <button key={p.id} onClick={() => setPair(p.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      pair === p.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{p.label}</p>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Most steps work for any pair. We will note the differences.
              </p>
            </CardContent>
          </Card>

          {BLOCKS.map(b => {
            const Icon = b.icon;
            return (
              <section key={b.id} id={b.id} className="mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{b.title}</h2>
                    <p className="text-xs text-muted-foreground italic">Who does this: {b.who}</p>
                  </div>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <ol className="space-y-3">
                      {b.steps.map((s, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                          <div>
                            <p className="font-semibold">{s.title}</p>
                            <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A weekly call works better than ad-hoc</p>
              <p className="text-xs text-muted-foreground">
                Pick a day. "Sunday 5pm tech check-in" for 15 minutes. The senior writes down questions during the week; the buddy answers them in one short call. Both feel less burdened than scattered texts.
              </p>
            </CardContent>
          </Card>

          <Badge variant="outline" className="mb-2">Current pairing: {PAIRS.find(p => p.id === pair)?.label}</Badge>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan tech help with the whole family.</p>
              </Link>
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Watch / pendant for emergencies.</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up the senior\'s tablet right.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: a single buddy beats a "tech committee". Knowing who to call first removes 80% of the stress.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
