import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen, ChevronRight, ExternalLink, type LucideIcon,
  Headphones, Newspaper, Film, Music, GraduationCap, Tv,
} from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  what: string;
  costNormally: string;
  why: string;
  howToUse: string[];
  link: string;
}

const SERVICES: Service[] = [
  {
    name: 'Libby — e-books and audiobooks',
    icon: BookOpen,
    what: 'Borrow Kindle e-books and audiobooks free, on your phone or tablet, no late fees ever.',
    costNormally: 'Saves $10–$25 per book',
    why: 'Roughly 95% of US public libraries are on Libby. Same titles you would buy on Amazon. Read on any device — phone, tablet, Kindle.',
    howToUse: [
      'App Store / Play Store → search "Libby" → install.',
      'Open the app → "Yes" you have a library card → search for your library by zip code.',
      'Type your library card number (on the back of the physical card) and PIN (often the last four of your phone).',
      'Search any book → tap "Borrow" → it downloads to the app.',
    ],
    link: 'https://libbyapp.com',
  },
  {
    name: 'Hoopla — movies, TV, music, audiobooks',
    icon: Film,
    what: 'Free streaming of about 1 million titles. Every account gets a few "borrows" per month from the library\'s budget.',
    costNormally: 'Saves $10–$15/month vs Netflix or Spotify',
    why: 'Movies, TV shows, comics, music albums, audiobooks — all in one app. Never any waiting list.',
    howToUse: [
      'Install "Hoopla Digital".',
      'Sign up with your library card number and pick a PIN.',
      'Browse and borrow — no holds, immediate access.',
      'Each library sets a monthly limit (usually 4-12 borrows per card).',
    ],
    link: 'https://www.hoopladigital.com',
  },
  {
    name: 'Kanopy — premium movies and documentaries',
    icon: Tv,
    what: 'High-end streaming — independent films, Criterion Collection, PBS documentaries, classic foreign films.',
    costNormally: 'Saves $5–$15/month',
    why: 'Where you go for the movies that are not on Netflix. Most libraries get you 5-10 "credits" per month.',
    howToUse: [
      'Install "Kanopy".',
      'Sign up with your library card.',
      'Browse — credits show in your account, drops as you watch.',
    ],
    link: 'https://www.kanopy.com',
  },
  {
    name: 'Press Reader — newspapers and magazines',
    icon: Newspaper,
    what: 'Free unlimited access to 7,000+ newspapers and magazines from around the world. Wall Street Journal, Vogue, the Atlantic, NYT — without the subscription.',
    costNormally: 'Saves $50–$200/year',
    why: 'Better selection than Apple News+ or Apple Books. International too — Le Monde, the Times of London.',
    howToUse: [
      'Install "PressReader".',
      'Sign in with library card OR connect on the library Wi-Fi to enable home access.',
      'Pick any publication — read the full layout or text-only.',
    ],
    link: 'https://www.pressreader.com',
  },
  {
    name: 'Freegal — music downloads',
    icon: Music,
    what: 'Download a few songs per week to keep forever. About 16 million tracks.',
    costNormally: 'Saves $1.29 per song',
    why: 'You actually own these — they are not streaming. Download to your phone or computer.',
    howToUse: [
      'Install "Freegal Music".',
      'Sign in with library card.',
      'Search and download. Most libraries give 3-5 free songs per week.',
    ],
    link: 'https://www.freegalmusic.com',
  },
  {
    name: 'LinkedIn Learning (free with library card)',
    icon: GraduationCap,
    what: 'Thousands of professional video courses — Excel, Photoshop, public speaking, leadership.',
    costNormally: 'Saves $40/month or $240/year',
    why: 'Same library you would pay LinkedIn for. About 75% of US public libraries provide it free.',
    howToUse: [
      'Library website → search "LinkedIn Learning" — usually under "Online Resources" or "Databases".',
      'Click through with library card → it logs you into LinkedIn Learning.',
      'Watch any course; certificates work the same as paid LinkedIn.',
    ],
    link: 'https://www.linkedin.com/learning/',
  },
];

export default function LibraryPowerPack() {
  return (
    <>
      <SEOHead
        title="Public Library Power Pack"
        description="Six free apps you can unlock with a library card. E-books, audiobooks, movies, music, magazines, online learning. Most US libraries — most people do not realise."
        path="/tools/library-power-pack"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Public Library Power Pack</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six free apps your library card already pays for. Most people never use them.
            </p>
            <p className="text-sm text-muted-foreground mt-3">$0/month. All you need is a library card.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Library Power Pack' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">First — get a library card</p>
              <ol className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">1.</span><span>Search "[your city or county] public library card".</span></li>
                <li className="flex gap-2"><span className="text-primary">2.</span><span>Most libraries let you sign up online with proof of address (a recent piece of mail). Some require an in-person visit the first time.</span></li>
                <li className="flex gap-2"><span className="text-primary">3.</span><span>Card is free. PIN is usually the last 4 of your phone or your birth year — set it the first time you log in.</span></li>
              </ol>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {SERVICES.map(s => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{s.name}</p>
                        <Badge variant="outline" className="mt-1">{s.costNormally}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{s.what}</p>
                    <p className="text-xs text-muted-foreground italic mb-3">{s.why}</p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to start</p>
                    <ol className="space-y-1.5 mb-3">
                      {s.howToUse.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    <a href={s.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      Visit {s.name.split(' — ')[0]} <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on what your library has</p>
              <p className="text-xs text-muted-foreground">
                Not every library has every app — Libby is nearly universal, the others vary. Visit your library website (or call the reference desk) and ask: "what online resources do I get with my card?" Most libraries also offer free 1-on-1 tech help sessions to set these up. Worth an hour at the library.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/cord-cutter-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Cord Cutter Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair library streaming with paid streaming.</p>
              </Link>
              <Link to="/tools/senior-friendly-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior-Friendly Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">More worth-installing apps.</p>
              </Link>
              <Link to="/tools/subscription-tracker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Subscription Tracker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Cancel paid services these replace.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: most US libraries have free 1-on-1 tech help — schedule a session to install all six apps in one visit.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
