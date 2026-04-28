import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Music, Headphones, ChevronRight, ExternalLink } from 'lucide-react';

type Service = 'spotify' | 'apple' | 'amazon' | 'youtube' | 'pandora' | 'tidal';
type Priority = 'cheap' | 'family' | 'audio' | 'phone' | 'podcasts';

interface ServiceInfo {
  name: string;
  cost: string;
  library: string;
  fits: string;
  pros: string[];
  cons: string[];
  link: string;
}

const SERVICES: Record<Service, ServiceInfo> = {
  spotify: {
    name: 'Spotify',
    cost: '$12/mo individual, $19/mo family (up to 6), free with ads',
    library: 'About 100 million songs and 6 million podcasts.',
    fits: 'Most people. Strongest playlists, best recommendations, works on every phone and speaker.',
    pros: [
      'Plays on iPhone, Android, Echo, Google Home, almost any smart speaker.',
      'Personalized playlists like Discover Weekly are the best in the business.',
      'Free tier actually works — ads every few songs but unlimited listening on a phone.',
      'Family plan ($19/mo) covers up to 6 people who live at the same address.',
    ],
    cons: [
      'Audio quality tops out at 320 kbps — fine for most ears, but not lossless.',
      'Pays artists less than competitors, which bothers some listeners.',
      'Has pulled some big-name comedians and music in licensing fights.',
    ],
    link: 'https://www.spotify.com/us/premium/',
  },
  apple: {
    name: 'Apple Music',
    cost: '$11/mo individual, $17/mo family (up to 6). No free tier — 1-month free trial.',
    library: 'Over 100 million songs, plus radio and music videos.',
    fits: 'iPhone owners who already use the Music app. Pairs with HomePod and AirPods without setup.',
    pros: [
      'Built into every iPhone, iPad, Mac, and Apple Watch.',
      'Lossless and Dolby Atmos audio included at no extra cost.',
      'Lyrics scroll along with the song — great for sing-alongs.',
      'Works with your old iTunes library if you have one.',
    ],
    cons: [
      'No permanent free tier. Once the trial ends, you pay or lose access.',
      'On Android it works, but the app is not as polished as on iPhone.',
      'Smaller selection of podcasts (those live in a separate app).',
    ],
    link: 'https://www.apple.com/apple-music/',
  },
  amazon: {
    name: 'Amazon Music Unlimited',
    cost: '$11/mo standard, $9/mo if you have Amazon Prime, $17/mo family.',
    library: 'Over 100 million songs in HD and Ultra HD.',
    fits: 'Prime members and households with Echo speakers.',
    pros: [
      'Cheapest paid tier for Prime members at $9/mo.',
      'Lossless HD and Ultra HD audio included.',
      'Voice control through Alexa is the best of any service.',
      'Prime members already get a smaller free library (about 2 million songs) at no extra cost.',
    ],
    cons: [
      'App design is busy and harder to learn than Spotify or Apple.',
      'Recommendations are weaker than Spotify.',
      'The free Prime version has limited shuffle-only playback on phones.',
    ],
    link: 'https://www.amazon.com/music/unlimited',
  },
  youtube: {
    name: 'YouTube Music',
    cost: '$11/mo individual, $17/mo family. Or $14/mo for YouTube Premium (includes Music plus ad-free YouTube videos).',
    library: 'Over 100 million songs, plus official music videos and live performances.',
    fits: 'Anyone who already pays for YouTube Premium, or watches a lot of YouTube.',
    pros: [
      'Two-for-one deal: $14/mo Premium kills YouTube ads AND gives you Music.',
      'Includes live versions, covers, remixes you cannot find anywhere else.',
      'Switches between music video and audio-only with one tap.',
      'Family plan covers up to 6 people.',
    ],
    cons: [
      'Standalone Music plan is more expensive than Spotify or Apple.',
      'Recommendations lean heavily on what you watch on YouTube — can feel random.',
      'Smart speaker support is weaker than Spotify or Amazon.',
    ],
    link: 'https://music.youtube.com/',
  },
  pandora: {
    name: 'Pandora',
    cost: 'Free with ads, Pandora Plus $5/mo, Pandora Premium $11/mo.',
    library: 'Over 70 million songs. Smaller than the others but covers nearly every popular artist.',
    fits: 'People who like to set a station and let it play. Strong with classic rock, country, and oldies.',
    pros: [
      'The "make a station from one song" idea Pandora invented still works beautifully.',
      'Cheapest paid step at $5/mo (Plus) — no ads, unlimited skips, but station-only.',
      'Great for kitchen radio listening — set it and forget it.',
      'Free tier is generous and has been around for 20+ years.',
    ],
    cons: [
      'On-demand library (pick any song) requires the $11 Premium tier.',
      'App and recommendations feel dated next to Spotify.',
      'No lossless audio option.',
    ],
    link: 'https://www.pandora.com/',
  },
  tidal: {
    name: 'Tidal',
    cost: '$11/mo individual, $17/mo family.',
    library: 'Over 110 million songs, all in lossless quality.',
    fits: 'Audiophiles with good headphones or a hi-fi speaker setup.',
    pros: [
      'Every track is lossless (CD quality or better) at the standard price.',
      'Pays artists more per stream than any major rival.',
      'Strong for jazz, classical, and live recordings.',
    ],
    cons: [
      'Audio quality benefits only show up with good headphones or speakers.',
      'Smaller user base means fewer shared playlists from friends.',
      'Smart speaker support is limited compared to Spotify and Amazon.',
    ],
    link: 'https://tidal.com/',
  },
};

const SERVICE_LIST: { id: Service; label: string }[] = [
  { id: 'spotify', label: 'Spotify' },
  { id: 'apple',   label: 'Apple Music' },
  { id: 'amazon',  label: 'Amazon Music Unlimited' },
  { id: 'youtube', label: 'YouTube Music' },
  { id: 'pandora', label: 'Pandora' },
  { id: 'tidal',   label: 'Tidal' },
];

const PICKS: Record<Priority, { label: string; pick: string; reason: string }> = {
  cheap: {
    label: 'Cheapest possible (free or near-free)',
    pick: 'Spotify Free or Pandora Free',
    reason: 'Both cost nothing. Spotify Free has the bigger library and better app. Pandora Free is better if you like a "set the station and let it play" style. If you want to pay a little, Pandora Plus at $5/mo is the lowest-cost ad-free option.',
  },
  family: {
    label: 'Best family plan (4 to 6 people)',
    pick: 'Spotify Family or Apple Music Family — both $17 to $19/mo',
    reason: 'Spotify Family is $19/mo for up to 6 people, with parental controls and separate accounts for each person. Apple Music Family is $17/mo for up to 6 — pick this one if everyone uses iPhones.',
  },
  audio: {
    label: 'Best audio quality (lossless / hi-fi)',
    pick: 'Tidal or Apple Music',
    reason: 'Tidal was built around lossless audio and pays artists best. Apple Music gives you the same lossless quality at the same $11/mo price with no extra setup if you own an iPhone. Skip these if you mostly listen on phone speakers — you will not hear the difference.',
  },
  phone: {
    label: 'Whatever fits my phone with no fuss',
    pick: 'iPhone owners: Apple Music. Android owners: YouTube Music or Spotify',
    reason: 'Apple Music is built into every iPhone — no app to install, works with Siri and AirPods out of the box. On Android, YouTube Music comes pre-installed on most phones. Spotify works perfectly on either.',
  },
  podcasts: {
    label: 'Music AND podcasts in one app',
    pick: 'Spotify',
    reason: 'Spotify is the only major music service with a full podcast library built in. One app, one subscription, both kinds of listening. Apple keeps podcasts in a separate app; Pandora and Tidal barely have podcasts.',
  },
};

const PRIORITY_LIST: { id: Priority; label: string }[] = [
  { id: 'cheap',    label: 'Lowest cost' },
  { id: 'family',   label: 'Family plan' },
  { id: 'audio',    label: 'Audio quality' },
  { id: 'phone',    label: 'Fits my phone' },
  { id: 'podcasts', label: 'Podcasts too' },
];

export default function MusicStreamingPicker() {
  const [s, setS] = useState<Service>('spotify');
  const [p, setP] = useState<Priority>('cheap');
  const info = SERVICES[s];
  const pick = PICKS[p];

  return (
    <>
      <SEOHead
        title="Music Streaming Picker"
        description="Compare Spotify, Apple Music, Amazon Music, YouTube Music, Pandora, and Tidal. Honest pros and cons, costs, and free options. Find the music service that fits your phone, taste, and budget."
        path="/tools/music-streaming-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Music Streaming Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Honest comparison of Spotify, Apple Music, Amazon Music, YouTube Music, Pandora, and Tidal — plus the free options worth knowing about.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Music Streaming Picker' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Compare a service</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICE_LIST.map(o => (
                  <button key={o.id} onClick={() => setS(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      s === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{info.name}</Badge>
              <Badge variant="outline" className="ml-2 mb-2">{info.cost}</Badge>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">Library</p>
              <p className="text-sm mb-3">{info.library}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Who it fits</p>
              <p className="text-sm mb-4">{info.fits}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pros</p>
              <ul className="space-y-1.5 mb-4">
                {info.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cons</p>
              <ul className="space-y-1.5 mb-4">
                {info.cons.map((con, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>

              <a href={info.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-xs text-primary hover:underline">
                Visit {info.name} <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="h-5 w-5 text-purple-600" />
                <p className="text-sm font-semibold">What matters most to you?</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 mb-4">
                {PRIORITY_LIST.map(o => (
                  <button key={o.id} onClick={() => setP(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      p === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{pick.label}</p>
                <p className="font-semibold text-sm mb-2">Our pick: {pick.pick}</p>
                <p className="text-sm text-muted-foreground">{pick.reason}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What about free?</p>
              <p className="text-sm text-muted-foreground mb-4">
                You do not have to pay to listen to music. Three real options to consider before opening your wallet.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-border">
                  <p className="font-medium text-sm">Spotify Free</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Pros:</strong> Same 100 million-song library as paid Spotify. Unlimited listening on a phone or computer. Works on most smart speakers.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Cons:</strong> An ad every 3 to 5 songs (about 30 seconds each). On a phone, you can only shuffle most playlists — you cannot pick a specific song to play next.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border">
                  <p className="font-medium text-sm">Pandora Free</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Pros:</strong> Type one artist or song, get a full station of similar music. Limited skips but the stations are surprisingly good. Best for "I want some classic rock playing while I cook."
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Cons:</strong> Ads (audio and visual). Cannot pick a specific song. Six skips per hour, per station.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border">
                  <p className="font-medium text-sm">YouTube (regular, not Music)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Pros:</strong> Almost every song ever recorded is on YouTube somewhere — official videos, live performances, full albums, DJ mixes. All free.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Cons:</strong> Ads before and during videos. The phone app stops playing if you lock the screen (unless you pay for Premium). Not designed for background listening.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border bg-purple-50/50 dark:bg-purple-950/10">
                  <p className="font-medium text-sm">Bonus: Freegal (free with a library card)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Many US public libraries give cardholders access to Freegal — free music streaming and even some downloads you keep forever. See the Library Power Pack tool below to check what your library offers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on free trials</p>
              <p className="text-xs text-muted-foreground">
                Every paid service offers a free trial (usually 1 month, sometimes 3 months for Apple Music with a new device). Set a phone reminder to cancel the day before the trial ends if you decide it is not for you. Otherwise the charges start automatically.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-3">
                <Link to="/tools/streaming-calculator">Total my monthly cost</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/podcast-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Podcast Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find your first podcasts.</p>
              </Link>
              <Link to="/tools/streaming-service-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Streaming Service Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up Netflix, Hulu, and more.</p>
              </Link>
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free music with a library card.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
