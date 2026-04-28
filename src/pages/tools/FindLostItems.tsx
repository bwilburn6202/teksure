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
  MapPin, ChevronRight, ExternalLink, AlertTriangle,
  type LucideIcon, Key, Wallet, Backpack, Dog,
} from 'lucide-react';

type Phone = 'iphone' | 'android';
type ItemType = 'keys' | 'wallet' | 'bag' | 'pet';

interface Tracker {
  brand: string;
  whoFor: string;
  price: string;
  setup: string[];
  whatItDoes: string;
  notes?: string[];
  link: string;
}

const TRACKERS: Record<Phone, Tracker[]> = {
  iphone: [
    {
      brand: 'Apple AirTag',
      whoFor: 'Best if you have an iPhone. The Find My network — every iPhone in the world helps locate your lost item silently.',
      price: '$29 each, or 4 for $99',
      whatItDoes: 'Tap the Find My app on your iPhone, pick the AirTag, and either play a sound or get walking directions to it. If it is somewhere far away, the millions of iPhones nearby will report its location anonymously.',
      setup: [
        'Take the AirTag out of the box and pull the small plastic tab — it powers up.',
        'Hold it near your iPhone. A "Connect AirTag" pop-up appears within seconds.',
        'Tap "Connect" → pick a name from the list ("Keys", "Wallet", etc.) or type a custom name.',
        'Attach it to your item with an AirTag holder (Apple sells leather and rubber holders, or buy a $5 silicone keyring on Amazon).',
      ],
      notes: [
        'Battery lasts about a year. The Find My app warns you when it gets low.',
        'AirTag will alert nearby iPhones if it travels with someone for more than a few hours — Apple\'s anti-stalking feature.',
      ],
      link: 'https://support.apple.com/en-us/108978',
    },
    {
      brand: 'Tile (Mate or Pro)',
      whoFor: 'If you have a mix of iPhone and Android in the household, Tile works on both.',
      price: '$25 (Mate) or $35 (Pro, longer range)',
      whatItDoes: 'Same idea as AirTag, but uses the Tile Network — smaller than Apple\'s but still useful. Has a real key-fob shape with a hole for keychains, no extra holder needed.',
      setup: [
        'Download the Tile app from the App Store.',
        'Sign up with email + password.',
        'Tap "Add a Tile" → press the button on the Tile until it plays a sound.',
        'Name it ("car keys") and attach it to your item.',
      ],
      link: 'https://www.tile.com/en-us/getstarted',
    },
  ],
  android: [
    {
      brand: 'Google Pixel Tag (Find My Device Network)',
      whoFor: 'Best if you have a Pixel or recent Samsung Android. Google now has its own Find My network similar to Apple\'s.',
      price: 'Pebblebee Tag $30, Chipolo One Point $30',
      whatItDoes: 'Open the Find My Device app, pick the tag, play a sound or get directions. Other Androids in the area help locate it — same idea as AirTag.',
      setup: [
        'Open the Find My Device app (pre-installed on Android 9+).',
        'Tap "+" → "Add a tag".',
        'Press the button on a Pebblebee or Chipolo tag to make it pair.',
        'Name it and attach it to your item.',
      ],
      notes: [
        'Apple AirTags do not work on Android — your phone cannot see them.',
      ],
      link: 'https://support.google.com/android/answer/14179992',
    },
    {
      brand: 'Tile (Mate or Pro)',
      whoFor: 'Works equally well on iPhone and Android — good if your household mixes both.',
      price: '$25 (Mate) or $35 (Pro, longer range)',
      whatItDoes: 'Tile has its own network. Smaller than Apple\'s but works on every phone.',
      setup: [
        'Play Store → "Tile".',
        'Sign up with email + password.',
        'Tap "Add a Tile" → press the button on the Tile.',
        'Name it ("wallet") and attach.',
      ],
      link: 'https://www.tile.com/en-us/getstarted',
    },
    {
      brand: 'Samsung SmartTag (Galaxy phones only)',
      whoFor: 'If you have a Samsung Galaxy phone, this works through the Samsung Find network.',
      price: '$30',
      whatItDoes: 'Pairs with the SmartThings Find app on Galaxy phones. Cannot pair with non-Samsung Androids.',
      setup: [
        'Open the SmartThings Find app on your Galaxy phone.',
        'Press the button on the SmartTag.',
        'Follow the prompts to name and pair.',
      ],
      link: 'https://www.samsung.com/us/mobile/mobile-accessories/phones/galaxy-smarttag/',
    },
  ],
};

const ITEM_OPTIONS: { id: ItemType; label: string; icon: LucideIcon; tip: string }[] = [
  { id: 'keys',   label: 'Keys',          icon: Key,      tip: 'AirTag or Tile Mate. Use a small leather or silicone holder so it does not jingle.' },
  { id: 'wallet', label: 'Wallet',        icon: Wallet,   tip: 'Tile Slim is wallet-card-shaped (no holder needed). AirTag is too thick for most wallets.' },
  { id: 'bag',    label: 'Purse / backpack', icon: Backpack, tip: 'AirTag or Tile inside an inner pocket. Bigger items can fit either.' },
  { id: 'pet',    label: 'Dog or cat collar', icon: Dog,    tip: 'AirTag is fine for short trips, but for ongoing pet tracking, get a real pet GPS tracker like Tractive or Fi — they work outdoors and via cellular.' },
];

export default function FindLostItems() {
  const [phone, setPhone] = useState<Phone>('iphone');
  const [item, setItem] = useState<ItemType | null>(null);

  const trackers = TRACKERS[phone];

  return (
    <>
      <SEOHead
        title="Find Lost Items — AirTag / Tile Setup"
        description="Set up Apple AirTags or Tile trackers to find lost keys, wallet, or bag. Side-by-side comparison, plain-English setup, and an honest note on pet trackers."
        path="/tools/find-lost-items"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-yellow-50 via-background to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Lost Items</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A small Bluetooth tracker on your keys, wallet, or bag — and you can find them from your phone in seconds.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Find Lost Items' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What phone do you have?</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What are you trying to track?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {ITEM_OPTIONS.map(o => {
                  const Icon = o.icon;
                  return (
                    <button key={o.id} onClick={() => setItem(o.id)}
                      className={`p-3 rounded-lg border text-left transition-all flex items-start gap-3 ${
                        item === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                      }`}>
                      <Icon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{o.label}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {item && (
                <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>For this:</strong> {ITEM_OPTIONS.find(o => o.id === item)?.tip}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recommended trackers for {phone === 'iphone' ? 'iPhone' : 'Android'}</p>
          <div className="space-y-4 mb-6">
            {trackers.map(t => (
              <Card key={t.brand} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{t.brand}</p>
                    <Badge variant="outline">{t.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {t.whoFor}</p>
                  <p className="text-sm mb-3">{t.whatItDoes}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
                  <ol className="space-y-2 mb-3">
                    {t.setup.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  {t.notes && (
                    <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                      {t.notes.map((n, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-primary">•</span><span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a href={t.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                    Official setup help <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note about car tracking</p>
                <p className="text-muted-foreground">
                  AirTags and Tiles are not built for tracking cars long-term — the battery is small and the Bluetooth range is short. If you want to know where your car is, look at a real OBD-II tracker like Bouncie or a Vyncs subscription. They cost $50–$120 and last as long as your car battery does.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find your phone if you fall.</p>
              </Link>
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First smart-home device picks.</p>
              </Link>
              <Link to="/tools/bluetooth-pairing-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bluetooth Pairing Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair any device to your phone.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: name each tag clearly ("Mom\'s keys", "blue wallet"). When you have three or four, generic names get confusing.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
