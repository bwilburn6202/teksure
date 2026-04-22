import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tv,
  Monitor,
  Film,
  Trophy,
  DollarSign,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  AlertTriangle,
  HelpCircle,
  Wrench,
  Star,
  Eye,
  Ear,
  Users,
  Lock,
  Wifi,
  Play,
  ListChecks,
  Gift,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Streaming Service Picker
 * ------------------------------------------------------------
 * Senior-friendly recommender for cord-cutters. Six-question
 * quiz + deterministic scoring over a service catalog. Returns
 * three picks with price tiers, top genres, watch-outs, and a
 * setup link.
 * ────────────────────────────────────────────────────────────── */

/* ── Answer types ─────────────────────────────────────────────── */

type WatchFocus = 'live_news' | 'movies' | 'originals' | 'sports' | 'family' | 'free';
type LiveTv = 'must' | 'nice' | 'no';
type Sport = 'nfl' | 'nba' | 'mlb' | 'everything' | 'not_really' | 'none';
type Genre =
  | 'drama'
  | 'comedy'
  | 'reality'
  | 'true_crime'
  | 'documentary'
  | 'scifi'
  | 'family'
  | 'classic'
  | 'british'
  | 'spanish';
type Budget = 'under15' | 'mid' | 'high' | 'premium';
type Owns = 'cable' | 'prime' | 'apple' | 'none';

interface Answers {
  watchFocus?: WatchFocus;
  liveTv?: LiveTv;
  sports: Sport[];
  genres: Genre[];
  budget?: Budget;
  owns: Owns[];
}

const EMPTY: Answers = { sports: [], genres: [], owns: [] };

/* ── Service catalog ──────────────────────────────────────────── */

interface Service {
  id: string;
  name: string;
  colorClass: string;   // accent color for the logo placeholder tile
  iconLetter: string;   // single-letter "logo" stand-in
  priceAdTier: string;
  priceNoAds: string;
  priceSummary: string; // short one-liner for card badge
  liveTv: boolean;
  kids: boolean;
  sports: boolean;
  freeTrial: string;
  cancelAnytime: boolean;
  bestForTag: string;
  topShows: string[];
  whatsBest: (a: Answers) => string;
  watchOut: string[];
  tags: string[]; // for scoring
}

const SERVICES: Service[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    colorClass: 'bg-red-600 text-white',
    iconLetter: 'N',
    priceAdTier: '$7.99 / month (with ads)',
    priceNoAds: '$17.99 standard · $24.99 premium (4K)',
    priceSummary: '$8 – $25 / mo',
    liveTv: false,
    kids: true,
    sports: false,
    freeTrial: 'No free trial',
    cancelAnytime: true,
    bestForTag: 'Originals + big library',
    topShows: ['Stranger Things', 'The Crown', 'Bridgerton', 'Wednesday', 'Ozark'],
    whatsBest: (a) =>
      'Netflix has the largest library of any streaming service and leads on original series. ' +
      (a.genres.includes('drama') || a.genres.includes('true_crime')
        ? 'Strong on drama and true-crime documentaries, which match what you said you watch. '
        : 'Covers drama, comedy, reality, and kids from one account. ') +
      'The ad-supported tier at $7.99 is the cheapest way to try it.',
    watchOut: [
      'Ad tier blocks downloads for flights and road trips',
      '4K is only on the $24.99 premium tier',
      'Password sharing across homes is no longer free — extra member slots cost $8/month',
      'Only two simultaneous streams on standard, four on premium',
    ],
    tags: ['originals', 'movies', 'drama', 'true_crime', 'scifi', 'comedy', 'family', 'reality', 'under15', 'mid'],
  },
  {
    id: 'hulu',
    name: 'Hulu',
    colorClass: 'bg-emerald-500 text-black',
    iconLetter: 'H',
    priceAdTier: '$9.99 / month (with ads)',
    priceNoAds: '$18.99 no ads · $82.99 Hulu + Live TV',
    priceSummary: '$10 – $83 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: '30-day free trial',
    cancelAnytime: true,
    bestForTag: 'Next-day network TV + reality',
    topShows: ['Only Murders in the Building', 'The Bear', 'Shōgun', 'Abbott Elementary', 'The Kardashians'],
    whatsBest: (a) =>
      'Hulu posts most ABC, NBC, Fox, and FX shows the day after they air, so it is the closest thing to a DVR for broadcast TV. ' +
      (a.genres.includes('reality')
        ? 'Reality dominates here — Kardashians, Real Housewives, The Bachelor. '
        : 'Also strong on FX dramas (The Bear, Shōgun) and Disney-owned kids content. ') +
      'The Hulu + Live TV bundle also includes Disney+ and ESPN+.',
    watchOut: [
      'The ad-supported tier runs ads on almost every title',
      'Live TV bundle jumped to $83/month in 2025',
      'Two simultaneous streams on base plans — unlimited streams is $10 extra',
      'Lots of "add-on" channels (HBO, Cinemax, Starz) that billing menus hide',
    ],
    tags: ['originals', 'live', 'reality', 'drama', 'comedy', 'family', 'true_crime', 'under15', 'mid', 'high'],
  },
  {
    id: 'disney',
    name: 'Disney+',
    colorClass: 'bg-blue-700 text-white',
    iconLetter: 'D',
    priceAdTier: '$9.99 / month (with ads)',
    priceNoAds: '$15.99 no ads · $19.99 Duo Premium (Disney+ & Hulu)',
    priceSummary: '$10 – $20 / mo',
    liveTv: false,
    kids: true,
    sports: false,
    freeTrial: 'No free trial',
    cancelAnytime: true,
    bestForTag: 'Kids, family, and franchises',
    topShows: ['Bluey', 'The Mandalorian', 'Loki', 'Moana', 'Frozen'],
    whatsBest: (a) =>
      'Disney+ is the single best pick for grandkids. It owns Pixar, Marvel, Star Wars, National Geographic, and classic Disney animation. ' +
      (a.watchFocus === 'family' || a.genres.includes('family')
        ? 'For a family-first household this one almost always earns its keep. '
        : 'Worth it even for one kid in the house. ') +
      'Ad-free bundle with Hulu is only $2 more than Disney+ alone.',
    watchOut: [
      'Very little content for adults-only households',
      'No live TV — you still need an antenna or cable for news',
      'Account sharing is being cracked down on in 2025',
      '4K is included (no extra charge) on the no-ads tier',
    ],
    tags: ['family', 'originals', 'under15', 'mid'],
  },
  {
    id: 'max',
    name: 'Max',
    colorClass: 'bg-indigo-600 text-white',
    iconLetter: 'M',
    priceAdTier: '$9.99 / month (with ads)',
    priceNoAds: '$16.99 no ads · $20.99 Ultimate (4K + sports)',
    priceSummary: '$10 – $21 / mo',
    liveTv: false,
    kids: true,
    sports: true,
    freeTrial: 'No free trial',
    cancelAnytime: true,
    bestForTag: 'HBO dramas + big movies',
    topShows: ['The Last of Us', 'Succession', 'The White Lotus', 'House of the Dragon', 'Friends'],
    whatsBest: (a) =>
      'Max is the home of HBO — the deepest lineup of prestige drama on any service. It also carries Warner Bros. movies within 45 days of theaters. ' +
      (a.genres.includes('drama') || a.watchFocus === 'movies'
        ? 'If you lean toward movies and character-driven drama, this is the one. '
        : 'Also strong on comedy (Hacks, Curb Your Enthusiasm) and documentaries. '),
    watchOut: [
      'Ad tier limits downloads to the pricier plans',
      'Sports (NBA, NHL via Bleacher Report) only on the $20.99 Ultimate tier',
      '4K and Dolby Atmos locked to Ultimate',
      'The "Max" rebrand renamed a lot of menus — expect some hunting',
    ],
    tags: ['movies', 'drama', 'originals', 'comedy', 'documentary', 'true_crime', 'under15', 'mid', 'high'],
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    colorClass: 'bg-sky-600 text-white',
    iconLetter: 'P',
    priceAdTier: '$7.99 / month (Essential, with ads)',
    priceNoAds: '$12.99 with Showtime (no ads on most content)',
    priceSummary: '$8 – $13 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: '7-day free trial',
    cancelAnytime: true,
    bestForTag: 'CBS, NFL on CBS, classic TV',
    topShows: ['Yellowstone', 'Tulsa King', 'NCIS', 'Survivor', 'Star Trek: Strange New Worlds'],
    whatsBest: (a) =>
      'Paramount+ carries everything CBS — NCIS, Survivor, 60 Minutes, and live NFL games on CBS. ' +
      (a.genres.includes('classic')
        ? 'Huge back catalog of classic CBS shows makes this a strong pick for classic TV fans. '
        : 'The Showtime tier adds Yellowstone, Billions, and Dexter for $5 more. ') +
      'The live CBS affiliate feed is a rare live-TV perk at this price.',
    watchOut: [
      'Essential tier still has ads on live TV and some on-demand',
      'Live CBS affiliate depends on your zip code — not every city has the local feed',
      'The app can be glitchy on older smart TVs — a Roku or Apple TV is smoother',
    ],
    tags: ['live', 'sports', 'classic', 'drama', 'reality', 'family', 'originals', 'nfl', 'under15', 'mid'],
  },
  {
    id: 'peacock',
    name: 'Peacock',
    colorClass: 'bg-purple-600 text-white',
    iconLetter: 'K',
    priceAdTier: '$7.99 / month (Premium, with ads)',
    priceNoAds: '$13.99 Premium Plus (mostly ad-free + local NBC)',
    priceSummary: '$8 – $14 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: '7-day free trial',
    cancelAnytime: true,
    bestForTag: 'NBC shows, Sunday Night Football',
    topShows: ['The Office', 'Poker Face', 'Yellowstone (past seasons)', 'Law & Order SVU', 'Saturday Night Live'],
    whatsBest: (a) =>
      'Peacock is where all the NBC-era classics live — The Office, Parks and Rec, 30 Rock, SNL. It also carries Sunday Night Football and a live feed of your local NBC station on Premium Plus. ' +
      (a.genres.includes('classic') || a.sports.includes('nfl')
        ? 'Matches your answers on classic TV and NFL. '
        : ''),
    watchOut: [
      'Premium still shows ads on most on-demand content',
      'Some big NBC movies rotate off after a few weeks',
      'The Olympics are great here, but only every two years',
      'Download for offline viewing only on Premium Plus',
    ],
    tags: ['classic', 'comedy', 'live', 'sports', 'nfl', 'drama', 'reality', 'under15', 'mid'],
  },
  {
    id: 'apple',
    name: 'Apple TV+',
    colorClass: 'bg-neutral-900 text-white',
    iconLetter: 'A',
    priceAdTier: 'No ad-supported tier',
    priceNoAds: '$9.99 / month · free for 7 days',
    priceSummary: '$10 / mo',
    liveTv: false,
    kids: true,
    sports: true,
    freeTrial: '7-day free trial (longer with new Apple devices)',
    cancelAnytime: true,
    bestForTag: 'High-end originals, no ads',
    topShows: ['Ted Lasso', 'Severance', 'Slow Horses', 'The Morning Show', 'For All Mankind'],
    whatsBest: (a) =>
      'Apple TV+ is small but every show gets a big budget. No ads on any tier — the cheapest prestige option. ' +
      (a.owns.includes('apple')
        ? 'Since you already have an Apple device, setup is automatic and some new iPhones and iPads come with three free months. '
        : 'Works on Roku, Fire TV, most smart TVs, and on the web — you do not need an Apple device. '),
    watchOut: [
      'Library is much smaller than Netflix or Max',
      'No classic TV back catalog — everything is original programming',
      'MLS Season Pass (soccer) is a separate $15/month add-on',
      'Family Sharing lets 5 family members use one account — a real perk',
    ],
    tags: ['originals', 'movies', 'drama', 'scifi', 'comedy', 'apple', 'under15', 'mid'],
  },
  {
    id: 'prime',
    name: 'Prime Video',
    colorClass: 'bg-cyan-700 text-white',
    iconLetter: 'V',
    priceAdTier: '$8.99 / month standalone (with ads)',
    priceNoAds: '+$2.99 / month for no ads · included with Prime ($14.99/mo or $139/yr)',
    priceSummary: '$9 – $15 / mo',
    liveTv: false,
    kids: true,
    sports: true,
    freeTrial: '30-day Prime free trial',
    cancelAnytime: true,
    bestForTag: 'Free with Amazon Prime',
    topShows: ['The Lord of the Rings: The Rings of Power', 'The Boys', 'Reacher', 'Fallout', 'Jack Ryan'],
    whatsBest: (a) =>
      a.owns.includes('prime')
        ? 'You already have Amazon Prime, so Prime Video is effectively free — no reason not to use it. Thursday Night Football and a huge rental library are baked in. '
        : 'Prime Video comes free with an Amazon Prime membership you may already be paying for. It runs ads by default now, but a $3/month upgrade removes them. ',
    watchOut: [
      'Ads became the default in 2024 — $2.99 extra to remove them',
      'Menus mix free-with-Prime, pay-to-rent, and "channels" — read every screen before hitting play',
      'Thursday Night Football is the only regular-season sport',
      'Free kids content is good but not as curated as Disney+',
    ],
    tags: ['movies', 'originals', 'scifi', 'drama', 'comedy', 'family', 'documentary', 'sports', 'nfl', 'under15', 'mid'],
  },
  {
    id: 'youtubetv',
    name: 'YouTube TV',
    colorClass: 'bg-red-700 text-white',
    iconLetter: 'Y',
    priceAdTier: 'Ads are built into live TV (no separate ad tier)',
    priceNoAds: '$82.99 / month base · +$11 4K Plus · +$11 NFL RedZone',
    priceSummary: '$83 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: '7-day free trial (often longer promos)',
    cancelAnytime: true,
    bestForTag: 'Cable replacement with unlimited DVR',
    topShows: ['All your local channels', 'ESPN', 'Fox News', 'CNN', 'Food Network'],
    whatsBest: (a) =>
      'YouTube TV is the most-picked cable replacement for a reason: 100+ live channels, unlimited DVR, and six simultaneous streams. ' +
      (a.liveTv === 'must'
        ? 'Since live TV is a must-have for you, this is the pick that will feel most like cable. '
        : 'Add-ons for NFL Sunday Ticket and RedZone make this the sports household default. '),
    watchOut: [
      'Price climbed from $65 to $83 in three years',
      'You need strong home Wi-Fi — cellular streaming eats data fast',
      'Local channels depend on your zip code — check coverage before signing up',
      '4K on select live sports is $11 extra',
    ],
    tags: ['live', 'sports', 'nfl', 'nba', 'mlb', 'everything', 'reality', 'drama', 'classic', 'high', 'premium'],
  },
  {
    id: 'sling',
    name: 'Sling TV',
    colorClass: 'bg-orange-500 text-black',
    iconLetter: 'S',
    priceAdTier: 'Ads are built into live TV',
    priceNoAds: '$45.99 Orange · $45.99 Blue · $60.99 Orange + Blue',
    priceSummary: '$46 – $61 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: 'First month half off',
    cancelAnytime: true,
    bestForTag: 'Cheapest live TV bundle',
    topShows: ['ESPN', 'CNN', 'Fox News', 'HGTV', 'Food Network'],
    whatsBest: (a) =>
      'Sling is the cheapest way to get live ESPN, CNN, or Fox News without a cable bill. Orange is sports-heavy (ESPN), Blue is news and entertainment. ' +
      (a.sports.includes('nba') || a.sports.includes('nfl')
        ? 'Sling Orange with ESPN covers most NBA and college games for your sports picks. '
        : ''),
    watchOut: [
      'No ABC, CBS, or NBC in most markets — you still need an antenna for local news',
      'Only one simultaneous stream on Sling Orange',
      'The DVR has a 50-hour cap on the base plan',
      'Channel lineup changes often — check before signing up',
    ],
    tags: ['live', 'sports', 'nba', 'nfl', 'mlb', 'mid', 'high'],
  },
  {
    id: 'philo',
    name: 'Philo',
    colorClass: 'bg-pink-500 text-black',
    iconLetter: 'F',
    priceAdTier: 'Ads are built into live TV',
    priceNoAds: '$28 / month (60+ channels)',
    priceSummary: '$28 / mo',
    liveTv: true,
    kids: true,
    sports: false,
    freeTrial: '7-day free trial',
    cancelAnytime: true,
    bestForTag: 'Cheapest live TV — no sports',
    topShows: ['HGTV', 'Food Network', 'Discovery', 'AMC', 'Hallmark'],
    whatsBest: () =>
      'Philo is $28 a month for 60+ entertainment channels — HGTV, Food Network, Discovery, AMC, Hallmark. It drops sports and news to keep the price down, and that trade-off works for many older adults who mostly want home-improvement and lifestyle channels. ' +
      'Unlimited DVR is included — a real perk at this price.',
    watchOut: [
      'No ESPN, no NFL, no CNN, no Fox News — this is the trade-off',
      'Only three simultaneous streams on one account',
      'No local network channels — pair with an antenna for local news',
    ],
    tags: ['live', 'reality', 'classic', 'drama', 'mid'],
  },
  {
    id: 'fubo',
    name: 'Fubo',
    colorClass: 'bg-emerald-700 text-white',
    iconLetter: 'U',
    priceAdTier: 'Ads are built into live TV',
    priceNoAds: '$79.99 Pro · $89.99 Elite · $99.99 Premier',
    priceSummary: '$80 – $100 / mo',
    liveTv: true,
    kids: true,
    sports: true,
    freeTrial: '7-day free trial',
    cancelAnytime: true,
    bestForTag: 'Sports first — especially soccer',
    topShows: ['NFL on Fox/CBS/NBC', 'MLB Network', 'NHL', 'Premier League', 'beIN Sports'],
    whatsBest: (a) =>
      'Fubo was built for sports fans. It carries the most regional sports networks of any live-TV service and covers soccer better than anyone. ' +
      (a.sports.includes('everything') || a.sports.includes('nfl') || a.sports.includes('mlb')
        ? 'Based on your sports picks, this is a strong fit. '
        : ''),
    watchOut: [
      'No ESPN, TNT, or HBO in the base plans — a real gap for NBA fans',
      'The top tier is over $100/month — cord-cutting savings get thin',
      'Apps can be slow on older streaming devices',
    ],
    tags: ['live', 'sports', 'nfl', 'mlb', 'everything', 'premium', 'high'],
  },
  {
    id: 'pluto',
    name: 'Pluto TV',
    colorClass: 'bg-yellow-400 text-black',
    iconLetter: 'L',
    priceAdTier: 'Always free (ad-supported)',
    priceNoAds: 'No ad-free option',
    priceSummary: 'Free',
    liveTv: true,
    kids: true,
    sports: false,
    freeTrial: 'Free — no signup needed to start',
    cancelAnytime: true,
    bestForTag: 'Free live channels + classic TV',
    topShows: ['CBS News 24/7', 'MTV', 'Star Trek', 'MST3K', 'Comedy Central Roasts'],
    whatsBest: () =>
      'Pluto TV is free, owned by Paramount, and acts like channel surfing: 300+ always-on live channels plus a big on-demand library. No sign-up, no credit card, no subscription. ' +
      'A surprisingly strong pick for anyone who grew up with cable and wants something on in the background.',
    watchOut: [
      'Ads run every 10-12 minutes on most channels',
      'No 4K, no downloads, no DVR',
      'The channel guide can be chaotic — use favorites to pin the ones you like',
    ],
    tags: ['free', 'classic', 'live', 'reality', 'comedy', 'under15'],
  },
  {
    id: 'tubi',
    name: 'Tubi',
    colorClass: 'bg-orange-600 text-white',
    iconLetter: 'T',
    priceAdTier: 'Always free (ad-supported)',
    priceNoAds: 'No ad-free option',
    priceSummary: 'Free',
    liveTv: false,
    kids: true,
    sports: false,
    freeTrial: 'Free — no signup needed to watch',
    cancelAnytime: true,
    bestForTag: 'Free movies library — widest on-demand',
    topShows: ['Dirty Dancing', 'Schindler\'s List', 'The Lincoln Lawyer', 'Tubi Originals', 'El Chavo'],
    whatsBest: (a) =>
      'Tubi is Fox\'s free service — 40,000+ movies and thousands of TV episodes with no account required. ' +
      (a.genres.includes('spanish')
        ? 'One of the best free Spanish-language libraries on any app. '
        : 'Great for older Hollywood movies the paid services have cycled off. '),
    watchOut: [
      'Ad breaks every 10-15 minutes',
      'Library rotates heavily — a film you wanted last week may be gone today',
      'No live TV and no 4K',
    ],
    tags: ['free', 'movies', 'drama', 'comedy', 'spanish', 'documentary', 'under15'],
  },
];

/* ── Scoring ──────────────────────────────────────────────────── */

function score(s: Service, a: Answers): number {
  let n = 0;

  // Watch focus
  if (a.watchFocus === 'live_news' && s.liveTv) n += 14;
  if (a.watchFocus === 'movies' && s.tags.includes('movies')) n += 12;
  if (a.watchFocus === 'originals' && s.tags.includes('originals')) n += 12;
  if (a.watchFocus === 'sports' && s.sports) n += 14;
  if (a.watchFocus === 'family' && s.tags.includes('family')) n += 12;
  if (a.watchFocus === 'free' && s.tags.includes('free')) n += 20;

  // Live TV importance
  if (a.liveTv === 'must' && s.liveTv) n += 10;
  if (a.liveTv === 'must' && !s.liveTv) n -= 8;

  // Sports picks
  for (const sp of a.sports) {
    if (sp === 'none' || sp === 'not_really') continue;
    if (s.tags.includes(sp)) n += 6;
    if (sp === 'everything' && s.tags.includes('everything')) n += 6;
  }

  // Genre matches
  for (const g of a.genres) {
    if (s.tags.includes(g)) n += 4;
  }

  // Budget alignment (each tier adds reach to cheaper services)
  if (a.budget === 'under15') {
    if (s.tags.includes('free')) n += 14;
    if (s.tags.includes('under15')) n += 6;
    if (s.tags.includes('premium')) n -= 12;
    if (s.tags.includes('high')) n -= 6;
  } else if (a.budget === 'mid') {
    if (s.tags.includes('under15') || s.tags.includes('mid')) n += 6;
    if (s.tags.includes('high')) n -= 4;
    if (s.tags.includes('premium')) n -= 8;
  } else if (a.budget === 'high') {
    if (s.tags.includes('mid') || s.tags.includes('high')) n += 5;
    if (s.tags.includes('premium')) n -= 3;
  } else if (a.budget === 'premium') {
    if (s.tags.includes('high') || s.tags.includes('premium')) n += 5;
  }

  // Already-has bonuses
  if (a.owns.includes('prime') && s.id === 'prime') n += 10;
  if (a.owns.includes('apple') && s.id === 'apple') n += 5;
  if (a.owns.includes('cable')) {
    // Cable household probably doesn't need a second live-TV bundle
    if (s.id === 'youtubetv' || s.id === 'fubo' || s.id === 'sling' || s.id === 'philo') n -= 8;
  }

  return n;
}

function recommend(a: Answers): Service[] {
  const scored = SERVICES.map((s) => ({ s, n: score(s, a) }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n);

  const picks: Service[] = [];
  for (const { s } of scored) {
    if (picks.length >= 3) break;
    picks.push(s);
  }
  // Fallback — if the filter stripped everything, keep the top three anyway
  if (picks.length < 3) {
    const fallback = SERVICES.map((s) => ({ s, n: score(s, a) }))
      .sort((a, b) => b.n - a.n)
      .slice(0, 3)
      .map((x) => x.s);
    return fallback;
  }
  return picks;
}

/* ── Quiz questions ──────────────────────────────────────────── */

interface QuestionDef {
  key: keyof Answers;
  question: string;
  subtitle?: string;
  icon: LucideIcon;
  kind: 'single' | 'multi';
  options: { value: string; label: string; description?: string }[];
}

const QUESTIONS: QuestionDef[] = [
  {
    key: 'watchFocus',
    question: 'What do you watch most?',
    subtitle: 'Pick the one that sounds most like you.',
    icon: Play,
    kind: 'single',
    options: [
      { value: 'live_news', label: 'Live TV and news', description: 'Local news, cable networks, something "always on".' },
      { value: 'movies', label: 'Movies', description: 'New releases, old classics, movie nights.' },
      { value: 'originals', label: 'Original series', description: 'Binge-worthy shows you can only get on streaming.' },
      { value: 'sports', label: 'Sports', description: 'Live games — NFL, NBA, MLB, soccer.' },
      { value: 'family', label: 'Family and kids', description: 'Disney, Pixar, Bluey, grandkid-friendly.' },
      { value: 'free', label: 'Honestly, free is fine', description: 'Background TV, old movies, no subscription.' },
    ],
  },
  {
    key: 'liveTv',
    question: 'How important is live TV?',
    subtitle: 'Local news, sports the night they air, scheduled channels.',
    icon: Calendar,
    kind: 'single',
    options: [
      { value: 'must', label: 'Must-have', description: 'I want it to feel like cable.' },
      { value: 'nice', label: 'Nice-to-have', description: 'I use it sometimes but can live without.' },
      { value: 'no', label: 'Do not need it', description: 'On-demand is all I watch.' },
    ],
  },
  {
    key: 'sports',
    question: 'Any sports you follow? (Pick all that apply)',
    subtitle: 'Leave blank if you are not a sports household.',
    icon: Trophy,
    kind: 'multi',
    options: [
      { value: 'nfl', label: 'NFL (football)' },
      { value: 'nba', label: 'NBA (basketball)' },
      { value: 'mlb', label: 'MLB (baseball)' },
      { value: 'everything', label: 'A little of everything' },
      { value: 'not_really', label: 'Not really a sports fan' },
      { value: 'none', label: 'None' },
    ],
  },
  {
    key: 'genres',
    question: 'Favorite kinds of shows and movies? (Pick all that apply)',
    subtitle: 'This helps us pick services with the strongest library for you.',
    icon: Film,
    kind: 'multi',
    options: [
      { value: 'drama', label: 'Drama' },
      { value: 'comedy', label: 'Comedy and sitcoms' },
      { value: 'reality', label: 'Reality TV' },
      { value: 'true_crime', label: 'True crime and mysteries' },
      { value: 'documentary', label: 'Documentaries' },
      { value: 'scifi', label: 'Sci-fi and fantasy' },
      { value: 'family', label: 'Family and kids' },
      { value: 'classic', label: 'Classic TV (I miss old shows)' },
      { value: 'british', label: 'British shows' },
      { value: 'spanish', label: 'Spanish-language' },
    ],
  },
  {
    key: 'budget',
    question: 'What feels right for a monthly streaming budget?',
    subtitle: 'Across all services combined.',
    icon: DollarSign,
    kind: 'single',
    options: [
      { value: 'under15', label: 'Under $15', description: 'Free services plus maybe one cheap subscription.' },
      { value: 'mid', label: '$15 – $30', description: 'Two or three services — no live TV bundle.' },
      { value: 'high', label: '$30 – $60', description: 'A few on-demand services plus a cheap live-TV option.' },
      { value: 'premium', label: '$60 and up', description: 'I want a full cable replacement.' },
    ],
  },
  {
    key: 'owns',
    question: 'Do you already have any of these? (Pick all that apply)',
    subtitle: 'We will work these into your picks.',
    icon: ListChecks,
    kind: 'multi',
    options: [
      { value: 'cable', label: 'Cable or satellite TV' },
      { value: 'prime', label: 'Amazon Prime membership' },
      { value: 'apple', label: 'An iPhone, iPad, or Mac' },
      { value: 'none', label: 'None of these' },
    ],
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Can I watch on my phone and TV at the same time?',
    a: 'Yes, but every service has a cap on simultaneous streams. Netflix standard is two, premium is four. Disney+ is four. Max is two. YouTube TV lets up to six. If the screen says "too many devices", sign out of one and try again — passwords are case-sensitive.',
  },
  {
    q: 'What if my internet is slow?',
    a: 'Standard definition needs about 3 Mbps. HD needs 5-10 Mbps. 4K needs 25 Mbps and a wired connection (or very strong Wi-Fi). If your internet feels slow, test it at speedtest.net — a result under 15 Mbps probably means the streaming service is quietly dropping to a lower-quality picture.',
  },
  {
    q: 'Do I need a smart TV?',
    a: 'No. A $40 Roku Streaming Stick, Amazon Fire TV Stick, or Apple TV box plugs into any TV with an HDMI port and gives you every streaming app. For most older adults, a dedicated streaming stick is actually easier than the menus built into a smart TV.',
  },
  {
    q: 'How do I cancel a service?',
    a: 'Every major service lets you cancel in the app under Account → Subscription or on the website. Cancel a few days before the billing date to avoid a surprise charge. Apple and Amazon subscriptions are canceled in those accounts — not inside the streaming app itself. Write the cancellation date on a calendar.',
  },
  {
    q: 'What is the cheapest way to watch a specific popular show?',
    a: 'Most shows live on exactly one service — The Office on Peacock, Ted Lasso on Apple TV+, Yellowstone on Peacock (past seasons) and Paramount+ (Showtime tier). Search for the title on justwatch.com or reelgood.com — both are free and will tell you where a show streams and for how much.',
  },
  {
    q: 'My grandkids want to share their account — is that allowed?',
    a: 'Rules changed a lot in 2023-2025. Netflix now charges extra for household-sharing. Disney+ started cracking down in 2024. Hulu shares within a household but not across cities. Most safest path: use your own account on your own TV. Family Sharing on Apple TV+ is still included for up to 5 family members.',
  },
];

/* ── Component ──────────────────────────────────────────────── */

export default function StreamingServicePicker() {
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [step, setStep] = useState<number>(-1);
  const totalSteps = QUESTIONS.length;

  const picks = useMemo(() => (step >= totalSteps ? recommend(answers) : []), [step, answers, totalSteps]);

  const start = () => setStep(0);
  const restart = () => {
    setAnswers(EMPTY);
    setStep(-1);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const next = () => {
    setStep((s) => Math.min(s + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setSingle = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value } as Answers));
  };

  const toggleMulti = (key: keyof Answers, value: string) => {
    setAnswers((a) => {
      const current = (a[key] as string[] | undefined) ?? [];
      const hasIt = current.includes(value);
      const nextVals = hasIt ? current.filter((v) => v !== value) : [...current, value];
      return { ...a, [key]: nextVals } as Answers;
    });
  };

  const currentQ = step >= 0 && step < totalSteps ? QUESTIONS[step] : null;
  const progress = step < 0 ? 0 : Math.round(((step + 1) / (totalSteps + 1)) * 100);

  const canAdvance = useMemo(() => {
    if (!currentQ) return false;
    const val = answers[currentQ.key];
    if (currentQ.kind === 'single') return typeof val === 'string' && val.length > 0;
    // Multi — allow advancing with at least one selection (including "none")
    return Array.isArray(val) && val.length > 0;
  }, [currentQ, answers]);

  return (
    <>
      <SEOHead
        title="Streaming Service Picker — Find the Right Netflix, Hulu, Max, or Live TV for You"
        description="Stop paying for streaming services you don't use. Answer six quick questions and get three personalized picks — with price, free trial, and what to watch out for. Covers Netflix, Hulu, Disney+, Max, Paramount+, Peacock, Apple TV+, Prime Video, YouTube TV, Sling, Philo, Fubo, Pluto TV, and Tubi."
        path="/tools/streaming-service-picker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero — cool blue/indigo gradient */}
        <section className="relative border-b border-border bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-sky-950/20">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="streaming-service-picker"
                title="Streaming Service Picker"
                url="/tools/streaming-service-picker"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <Tv className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs">
                Entertainment &middot; Personalized Recommender
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300">
              Pick the Right Streaming Services — Skip the Rest
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Stop paying for services you don&apos;t use. Three picks, plain English.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {step < 0 && (
                <Button size="lg" onClick={start} className="gap-2 text-base min-h-14">
                  Start the 6-question quiz
                  <ArrowRight className="w-5 h-5" />
                </Button>
              )}
              {step >= 0 && (
                <Button size="lg" variant="outline" onClick={restart} className="gap-2 text-base min-h-14">
                  <RotateCcw className="w-5 h-5" />
                  Start over
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Quiz / Results */}
        <section className="container py-10 md:py-14 max-w-4xl">
          {step >= 0 && (
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between text-sm md:text-base text-muted-foreground">
                <span>
                  {step < totalSteps
                    ? `Question ${step + 1} of ${totalSteps}`
                    : 'Your top 3 services'}
                </span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" aria-label="Quiz progress" />
            </div>
          )}

          {step < 0 && (
            <Card>
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">How this works</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      Six quick questions about what you actually watch. We&apos;ll pick three streaming services that fit your life and budget — and we&apos;ll tell you what to watch out for on each one. No sign-ups, no upsells, no tracking.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 1</div>
                    <div className="text-base">Tell us what you watch</div>
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 2</div>
                    <div className="text-base">Share your budget and what you already pay for</div>
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 3</div>
                    <div className="text-base">Get three tailored picks with setup tips</div>
                  </div>
                </div>
                <div className="pt-2">
                  <Button size="lg" onClick={start} className="gap-2 text-base min-h-14">
                    Begin the quiz
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentQ && (
            <Card>
              <CardContent className="p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <currentQ.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Question {step + 1} of {totalSteps}
                  </Badge>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {currentQ.question}
                  </h2>
                  {currentQ.subtitle && (
                    <p className="text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
                      {currentQ.subtitle}
                    </p>
                  )}
                </div>

                {currentQ.kind === 'single' ? (
                  <RadioGroup
                    value={(answers[currentQ.key] as string) ?? ''}
                    onValueChange={(v) => setSingle(currentQ.key, v)}
                    className="grid grid-cols-1 gap-3"
                  >
                    {currentQ.options.map((opt) => {
                      const checked = (answers[currentQ.key] as string) === opt.value;
                      return (
                        <Label
                          key={opt.value}
                          htmlFor={`${currentQ.key}-${opt.value}`}
                          className={[
                            'flex items-start gap-3 p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-colors min-h-14',
                            checked
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/40 hover:bg-muted/40',
                          ].join(' ')}
                        >
                          <RadioGroupItem value={opt.value} id={`${currentQ.key}-${opt.value}`} className="mt-1" />
                          <div className="flex-1">
                            <div className="text-base md:text-lg font-medium">{opt.label}</div>
                            {opt.description && (
                              <div className="text-sm md:text-base text-muted-foreground mt-0.5 leading-relaxed">
                                {opt.description}
                              </div>
                            )}
                          </div>
                        </Label>
                      );
                    })}
                  </RadioGroup>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {currentQ.options.map((opt) => {
                      const values = (answers[currentQ.key] as string[]) ?? [];
                      const checked = values.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => toggleMulti(currentQ.key, opt.value)}
                          aria-pressed={checked}
                          className={[
                            'text-left flex items-start gap-3 p-4 md:p-5 rounded-xl border-2 transition-colors min-h-14',
                            checked
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/40 hover:bg-muted/40',
                          ].join(' ')}
                        >
                          <div
                            className={[
                              'mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0',
                              checked ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground/40',
                            ].join(' ')}
                            aria-hidden="true"
                          >
                            {checked && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div className="text-base md:text-lg font-medium">{opt.label}</div>
                        </button>
                      );
                    })}
                    <p className="text-sm text-muted-foreground">Pick as many as apply — then tap Next.</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="lg" onClick={back} disabled={step === 0} className="gap-2 text-base">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </Button>
                  <Button size="lg" onClick={next} disabled={!canAdvance} className="gap-2 text-base min-h-14">
                    {step === totalSteps - 1 ? 'See my picks' : 'Next'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step >= totalSteps && (
            <div className="space-y-8">
              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Your three picks</h2>
                      <p className="text-base md:text-lg text-muted-foreground">
                        Ranked from best match to runner-up, based on your six answers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6">
                {picks.map((s, i) => (
                  <Card key={s.id} className="overflow-hidden">
                    <CardContent className="p-6 md:p-8 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                            {i + 1}
                          </div>
                          <div
                            aria-hidden="true"
                            className={[
                              'w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black shadow-sm',
                              s.colorClass,
                            ].join(' ')}
                          >
                            {s.iconLetter}
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{s.bestForTag}</div>
                            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{s.name}</h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-sm">{s.priceSummary}</Badge>
                          {s.liveTv && (
                            <Badge variant="outline" className="text-sm bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300 border-blue-600/40">
                              Live TV
                            </Badge>
                          )}
                          {s.cancelAnytime && (
                            <Badge variant="outline" className="text-sm bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300 border-green-600/40">
                              Cancel anytime
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="rounded-xl border bg-muted/30 p-4">
                          <div className="text-sm font-semibold text-muted-foreground mb-1">With ads</div>
                          <div className="text-base md:text-lg font-medium">{s.priceAdTier}</div>
                        </div>
                        <div className="rounded-xl border bg-muted/30 p-4">
                          <div className="text-sm font-semibold text-muted-foreground mb-1">No-ads / premium</div>
                          <div className="text-base md:text-lg font-medium">{s.priceNoAds}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary" />
                          Why this is a match
                        </h4>
                        <p className="text-base md:text-lg leading-relaxed">{s.whatsBest(answers)}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-xl border border-green-600/40 bg-green-50/40 dark:bg-green-950/20 p-4">
                          <h4 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-800 dark:text-green-300">
                            <CheckCircle2 className="w-5 h-5" />
                            Top shows and content
                          </h4>
                          <ul className="space-y-1.5">
                            {s.topShows.slice(0, 5).map((show) => (
                              <li key={show} className="text-base leading-relaxed flex gap-2">
                                <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">+</span>
                                <span>{show}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 p-4">
                          <h4 className="font-semibold text-base mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-300">
                            <AlertTriangle className="w-5 h-5" />
                            Watch out for
                          </h4>
                          <ul className="space-y-1.5">
                            {s.watchOut.map((w) => (
                              <li key={w} className="text-base leading-relaxed flex gap-2">
                                <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">!</span>
                                <span>{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button asChild size="lg" variant="outline" className="gap-2 text-base">
                          <Link to="/tools/smart-tv-setup">
                            <Wrench className="w-5 h-5" />
                            Setup guide for your TV
                          </Link>
                        </Button>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-base">
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                          <span>Free trial: {s.freeTrial}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" variant="outline" onClick={restart} className="gap-2 text-base min-h-14">
                  <RotateCcw className="w-5 h-5" />
                  Start over
                </Button>
                <Button asChild size="lg" className="gap-2 text-base min-h-14">
                  <Link to="/book">
                    <Wrench className="w-5 h-5" />
                    Book a setup session
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Full comparison table */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <ListChecks className="w-7 h-7 text-primary" />
              Every service, side-by-side
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The full lineup. Prices are the most common US plans as of April 2026 — always double-check on the service&apos;s own website before you sign up.
            </p>
            <div className="rounded-xl border bg-background overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base font-semibold">Service</TableHead>
                    <TableHead className="text-base font-semibold">With ads</TableHead>
                    <TableHead className="text-base font-semibold">No ads</TableHead>
                    <TableHead className="text-base font-semibold">Live TV</TableHead>
                    <TableHead className="text-base font-semibold">Sports</TableHead>
                    <TableHead className="text-base font-semibold">Kids</TableHead>
                    <TableHead className="text-base font-semibold">Free trial</TableHead>
                    <TableHead className="text-base font-semibold">Best for</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {SERVICES.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium text-base whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div
                            aria-hidden="true"
                            className={[
                              'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black',
                              s.colorClass,
                            ].join(' ')}
                          >
                            {s.iconLetter}
                          </div>
                          {s.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-base">{s.priceAdTier.replace(' / month', '/mo').replace(' (with ads)', '')}</TableCell>
                      <TableCell className="text-base">{s.priceNoAds.split(' · ')[0]}</TableCell>
                      <TableCell className="text-base">{s.liveTv ? 'Yes' : 'No'}</TableCell>
                      <TableCell className="text-base">{s.sports ? 'Yes' : 'No'}</TableCell>
                      <TableCell className="text-base">{s.kids ? 'Yes' : 'No'}</TableCell>
                      <TableCell className="text-base">{s.freeTrial}</TableCell>
                      <TableCell className="text-base">{s.bestForTag}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">All services let you cancel at any time. Tap a service on its own website for the most current pricing.</p>
          </div>
        </section>

        {/* Bundle and save */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Gift className="w-7 h-7 text-primary" />
            Bundle and save
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Bundles almost always beat paying for each service one-by-one. Worth a look before you sign up for anything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Disney Bundle</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Disney+, Hulu, and ESPN+ together. The ad-supported trio is $16.99/month — about $11 cheaper than buying all three separately. The no-ads trio is $26.99/month. Worth it for any household with kids and one sports fan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                    <Film className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Hulu / Disney+ / Max bundle</h3>
                </div>
                <p className="text-base leading-relaxed">
                  A newer bundle that pairs Disney+, Hulu, and Max for $16.99/month with ads — saves roughly $10/month vs. paying separately. Strong pick if you want reality TV, Marvel, and HBO dramas in one household.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                    <Tv className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Verizon myPlan perks</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Verizon unlimited phone plans let you add Netflix + Max (with ads) for $10/month total, or Disney+ Bundle for $10/month. If you are already on Verizon, check the myPlan Perks menu in the My Verizon app — many customers never activate these.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
                    <Play className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">T-Mobile Netflix on Us</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Most T-Mobile Go5G and Magenta Max plans include Netflix for free — standard or basic depending on the plan. Log into your T-Mobile account and look for "Netflix on Us" to activate. If you are paying for Netflix separately and have T-Mobile, stop and use this first.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Best Buy Totaltech / My Best Buy perks</h3>
                </div>
                <p className="text-base leading-relaxed">
                  My Best Buy Plus and Total members get rotating streaming perks — 6 months of Apple TV+, discounts on Paramount+, and early-access coupons. Members also save on streaming sticks and smart TVs, which pays the membership back quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Annual plans vs. monthly</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Paramount+, Apple TV+, Peacock, and Max all offer an annual plan that works out to 2 months free. If a service is one you use year-round, the annual plan saves money — as long as you set a calendar reminder to re-evaluate 11 months later.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rotate, don't stack */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <Alert className="border-indigo-500/40 bg-indigo-50/40 dark:bg-indigo-950/20">
              <RotateCcw className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
              <AlertTitle className="text-xl md:text-2xl font-semibold text-indigo-900 dark:text-indigo-200">
                Rotate, don&apos;t stack
              </AlertTitle>
              <AlertDescription className="text-base md:text-lg leading-relaxed text-foreground">
                <p className="mt-2 mb-3">
                  Most people pay for four or five services at once and only watch two. Here&apos;s a warmer, cheaper approach.
                </p>
                <ol className="space-y-3 list-decimal ml-5">
                  <li>
                    <strong>Pick one service per month.</strong> Binge what&apos;s new, then cancel. Netflix in January, Max in February, Apple TV+ in March. You&apos;ll never run out of things to watch, and you&apos;ll pay a quarter of what stackers pay.
                  </li>
                  <li>
                    <strong>Cancel before the renewal date.</strong> Most services charge the day you signed up — write that date on a wall calendar or phone reminder. Canceled accounts keep working until the end of the billing month, so nothing disappears the second you cancel.
                  </li>
                  <li>
                    <strong>Keep one always-on service.</strong> Usually Netflix or Disney+ depending on the household. Rotate the second and third slots.
                  </li>
                  <li>
                    <strong>Use a free service in between.</strong> Pluto TV and Tubi are both free and fill any gap between paid subscriptions.
                  </li>
                </ol>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Free alternatives */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Gift className="w-7 h-7 text-primary" />
            Free alternatives worth knowing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Every household should know about these. No credit card, no subscription, and a surprising amount of good content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-yellow-400 text-black'].join(' ')}>L</div>
                  Pluto TV
                </h3>
                <p className="text-base leading-relaxed">
                  300+ live channels grouped like old cable. CBS News, classic sitcoms, MST3K — no sign-up required. Ads every 10-12 minutes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-orange-600 text-white'].join(' ')}>T</div>
                  Tubi
                </h3>
                <p className="text-base leading-relaxed">
                  40,000+ free movies and thousands of TV episodes. Deepest free movie library of any service, with a strong Spanish-language catalog.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-cyan-700 text-white'].join(' ')}>F</div>
                  Amazon Freevee
                </h3>
                <p className="text-base leading-relaxed">
                  Amazon&apos;s free service (folded into Prime Video&apos;s "With ads" tab). Bosch: Legacy, Jury Duty, and a rotating stack of free movies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-red-600 text-white'].join(' ')}>Y</div>
                  YouTube (free)
                </h3>
                <p className="text-base leading-relaxed">
                  Beyond cat videos: full PBS episodes, official movie uploads on Warner Bros and Paramount channels, and MST3K for free. Ads unless you subscribe to Premium.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-sky-800 text-white'].join(' ')}>P</div>
                  PBS Passport
                </h3>
                <p className="text-base leading-relaxed">
                  A donation of $60/year to your local PBS station unlocks the PBS Passport app — Masterpiece, Ken Burns, Antiques Roadshow, and local favorites on demand.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className={['w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black', 'bg-emerald-700 text-white'].join(' ')}>K</div>
                  Kanopy / Hoopla (library)
                </h3>
                <p className="text-base leading-relaxed">
                  Your local library card unlocks Kanopy and Hoopla — art-house films, documentaries, audiobooks, and digital magazines. Fully free with the card.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Senior-friendly tips */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Streaming tips for older adults
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Small settings that make a big difference. Worth ten minutes the first time you sit down with a new service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Ear className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">Hearing — turn on closed captions</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    Every major service supports closed captions. While a show is playing, tap the screen once, then look for the "CC" or speech-bubble icon — usually in the upper right or bottom of the playback bar. Once you turn captions on for one show, most services remember your setting for the rest of your account.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">Vision — make the subtitles bigger</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    Every major streaming app has a subtitle style menu — usually under Account → Playback → Subtitle Appearance. Set the text size to "Large" or "Extra Large" and pick a black background with white text for maximum contrast. On Apple TV boxes and Rokus, this setting is at the device level and applies across every app.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">Sharing — who&apos;s allowed on your account</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    Rules changed a lot recently. Netflix now charges $8/month for a household member outside your home. Disney+ started cracking down on shared passwords in 2024. Apple TV+ Family Sharing is still included for up to 5 family members. Max and Hulu technically allow household sharing but limit simultaneous streams. When in doubt, use your own account on your own TV.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">Avoiding accidental charges</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    On Roku and Amazon Fire TV, turn on a purchase PIN under Settings → Parental Controls or Preferences. This stops surprise rentals and in-app purchases. On Apple TV, enable "Restrict" under Settings → General → Restrictions. Four digits means no more $6 accidental movie rentals when a grandkid hits the wrong button.
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">Smart TV apps vs. streaming stick — which is easier?</h3>
                  </div>
                  <p className="text-base leading-relaxed">
                    Smart TVs are convenient — you turn them on and the apps are right there. But older smart TVs stop getting app updates after a few years, and every brand has a different remote. A $40 Roku Streaming Stick 4K or a $30 Amazon Fire TV Stick Lite plugs into any HDMI port and gives you the same menu on every TV in the house. For most older adults, one remote and one menu is the real win. If your current smart TV works fine, keep using it — if it feels slow or apps keep crashing, a streaming stick is the fix.
                  </p>
                  <Link to="/tools/smart-tv-setup" className="inline-flex items-center gap-1 text-primary underline font-medium text-base">
                    Open the Smart TV Setup Wizard <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-primary" />
            Questions we hear every week
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
            Real questions from real TekSure sessions. Straight answers — no sales pitch.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Disclaimer */}
        <section className="container pb-6">
          <Alert>
            <AlertTriangle className="w-5 h-5" />
            <AlertTitle className="text-base md:text-lg font-semibold">A word on prices</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Prices and availability change often. We update this page regularly, but always double-check on each service&apos;s website before signing up. Free trials and bundle deals especially — they come and go.
            </AlertDescription>
          </Alert>
        </section>

        {/* Related links */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Related tools and guides</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Next steps once you&apos;ve picked your services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Smart TV Setup Wizard',
                  path: '/tools/smart-tv-setup',
                  blurb: 'Sign in to every streaming app on a Roku, Apple TV, Fire TV, or smart TV — one step at a time.',
                  icon: Tv,
                },
                {
                  title: 'Internet Speed Doctor',
                  path: '/tools/internet-speed-doctor',
                  blurb: 'Is your Wi-Fi fast enough for 4K? Test your connection and fix what you can.',
                  icon: Wifi,
                },
                {
                  title: 'Subscription Auditor',
                  path: '/tools/subscription-auditor',
                  blurb: 'Find streaming and app subscriptions quietly charging your card every month.',
                  icon: DollarSign,
                },
                {
                  title: 'Streaming Cost Calculator',
                  path: '/tools/streaming-calculator',
                  blurb: 'Add up what you\'re paying today and see where to save.',
                  icon: DollarSign,
                },
                {
                  title: 'Voice Assistant Setup',
                  path: '/tools/voice-assistant-setup',
                  blurb: '"Alexa, play Netflix on the living room TV" — set up a voice remote on any smart speaker.',
                  icon: Sparkles,
                },
                {
                  title: 'Entertainment Guides',
                  path: '/guides?category=entertainment',
                  blurb: 'Plain-English guides on Netflix, Hulu, Disney+, live TV, and streaming basics.',
                  icon: Film,
                },
              ].map((l) => (
                <Card key={l.path} className="h-full">
                  <CardContent className="p-5 space-y-3 h-full flex flex-col">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                      <l.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{l.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground flex-1">{l.blurb}</p>
                    <Link
                      to={l.path}
                      className="inline-flex items-center gap-1 text-primary underline font-medium text-base"
                    >
                      Open <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
