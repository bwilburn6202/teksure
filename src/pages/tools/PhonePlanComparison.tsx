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
import { Input } from '@/components/ui/input';
import {
  Signal,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ExternalLink,
  DollarSign,
  Smartphone,
  Users,
  Home,
  Phone,
  Wifi,
  Lock,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  Trophy,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Phone Plan Comparison
 * ------------------------------------------------------------
 * A senior-friendly, guided phone-plan chooser. 7 quick questions
 * drive deterministic recommendations across major carriers and
 * MVNOs. No API calls — all data is static and curated.
 * ────────────────────────────────────────────────────────────── */

/* ── Types ─────────────────────────────────────────────────────── */

type DataUse = 'almost-none' | 'light' | 'moderate' | 'heavy' | 'unlimited';
type LocationAnswer = 'home' | 'travel' | 'rural';
type CurrentCarrier = 'verizon' | 'att' | 'tmobile' | 'other' | 'none';
type Lines = 'one' | 'two' | 'family';
type Budget = 'under20' | '20-40' | '40-70' | '70plus';
type MustHave =
  | 'international'
  | 'hotspot'
  | 'applewatch'
  | 'senior-discount'
  | 'priority-data'
  | 'customer-service';

interface QuizAnswers {
  data?: DataUse;
  location?: LocationAnswer;
  currentCarrier?: CurrentCarrier;
  lines?: Lines;
  mustHaves: MustHave[];
  budget?: Budget;
  currentBill?: string;
}

interface PlanRec {
  id: string;
  name: string;
  carrier: string;
  price: number;
  priceLabel: string;
  activationFee?: string;
  towers: 'Verizon' | 'AT&T' | 'T-Mobile' | 'Verizon + T-Mobile' | 'AT&T + T-Mobile';
  includes: string[];
  notIncluded: string[];
  bestFor: string;
  link: string;
  coverageNote: string;
}

interface Carrier {
  name: string;
  badgeColor: string;
  kind: 'Major carrier' | 'Prepaid / MVNO' | 'Senior-focused';
  priceRange: string;
  bestFor: string;
  strengths: string[];
  catch: string;
  supportsAppleWatch: boolean;
  link: string;
}

/* ── Plan data (curated, deterministic) ────────────────────────── */

const PLANS: Record<string, PlanRec> = {
  'consumer-cellular-1gb': {
    id: 'consumer-cellular-1gb',
    name: 'Consumer Cellular 1GB',
    carrier: 'Consumer Cellular',
    price: 20,
    priceLabel: '$20/mo (1 line)',
    activationFee: 'No activation fee',
    towers: 'AT&T + T-Mobile',
    includes: [
      'Unlimited talk and text',
      '1GB high-speed data (plenty for email and occasional maps)',
      'AARP member discount (5% off monthly bill and 30% off accessories)',
      'Human phone support based in the US',
    ],
    notIncluded: [
      'No hotspot (tethering) on this tier',
      'No international calling included',
    ],
    bestFor: 'Light users who want a real person to call when something goes wrong.',
    link: 'https://www.consumercellular.com/plans',
    coverageNote: 'Runs on AT&T and T-Mobile networks. Choose the network that works best at your home address during signup.',
  },
  'lively-basic': {
    id: 'lively-basic',
    name: 'Lively Basic Talk & Text',
    carrier: 'Lively (Jitterbug)',
    price: 15,
    priceLabel: '$15/mo (1 line)',
    activationFee: 'Phone usually required — Jitterbug Flip2 or Smart4',
    towers: 'Verizon',
    includes: [
      'Unlimited talk and text',
      'Urgent Response button on every Jitterbug phone',
      'Large-button flip phone available',
      'Health & Safety packages optional (nurse-on-call, etc.)',
    ],
    notIncluded: [
      'Very little or no data (this is a talk-and-text plan)',
      'Not for smartphones from other carriers — Jitterbug hardware preferred',
    ],
    bestFor: 'Someone who only needs a reliable phone for calls and emergencies — not apps or web browsing.',
    link: 'https://www.lively.com/phones/',
    coverageNote: 'Uses the Verizon network — strong coverage in most of the country.',
  },
  'mint-5gb': {
    id: 'mint-5gb',
    name: 'Mint Mobile 5GB',
    carrier: 'Mint Mobile',
    price: 15,
    priceLabel: '$15/mo (when you pay 12 months upfront)',
    activationFee: 'No activation fee · SIM kit free',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk and text',
      '5GB high-speed data',
      'Free mobile hotspot (uses your plan data)',
      'Free international calling to Mexico and Canada',
    ],
    notIncluded: [
      'Price jumps after your 3 / 6 / 12-month term — renew to keep the low rate',
      'No senior discount (the price is already low)',
      'Apple Watch cellular is NOT supported',
    ],
    bestFor: 'Anyone comfortable paying a few months at a time in exchange for a very low monthly rate.',
    link: 'https://www.mintmobile.com/plans',
    coverageNote: 'Uses T-Mobile towers. Check coverage at your home address before you sign up.',
  },
  'us-mobile-starter': {
    id: 'us-mobile-starter',
    name: 'US Mobile Shared Starter',
    carrier: 'US Mobile',
    price: 12,
    priceLabel: '$12/mo (1 line, pay monthly)',
    activationFee: 'No activation fee',
    towers: 'Verizon + T-Mobile',
    includes: [
      'Unlimited talk and text',
      '2GB high-speed data',
      'Pick your network — Verizon or T-Mobile — at signup',
      'Free SIM or eSIM',
    ],
    notIncluded: [
      'No hotspot on this tier',
      'No international calling included',
    ],
    bestFor: 'Light users who want a cheap monthly plan on one of the big networks without a 12-month commitment.',
    link: 'https://www.usmobile.com/',
    coverageNote: 'You pick Verizon OR T-Mobile towers during signup. You can switch networks free later.',
  },
  'tmobile-essentials-saver-55': {
    id: 'tmobile-essentials-saver-55',
    name: 'T-Mobile Essentials Saver 55+',
    carrier: 'T-Mobile',
    price: 40,
    priceLabel: '$40/mo (1 line, 55+ discount)',
    activationFee: 'Activation fee may apply in-store',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk, text, and data',
      'Lower 55+ price for one line',
      'Taxes and fees included in advertised price',
      'Scam Shield protection included',
    ],
    notIncluded: [
      'Data may slow during busy times (deprioritized after heavy use)',
      'No mobile hotspot on this tier',
      'Must be age 55 or older — ID required',
    ],
    bestFor: 'A single person age 55+ who wants one simple monthly bill with unlimited talk, text, and data.',
    link: 'https://www.t-mobile.com/cell-phone-plans',
    coverageNote: 'Runs on T-Mobile. Best in suburbs and cities; rural coverage is still improving.',
  },
  'mint-15gb': {
    id: 'mint-15gb',
    name: 'Mint Mobile 15GB',
    carrier: 'Mint Mobile',
    price: 20,
    priceLabel: '$20/mo (12-month plan)',
    activationFee: 'No activation fee',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk and text',
      '15GB high-speed data',
      'Free mobile hotspot (uses plan data)',
      'Free calling to Mexico and Canada',
    ],
    notIncluded: [
      'Price renews at the end of the term — watch for it',
      'Apple Watch cellular not supported',
    ],
    bestFor: 'Moderate data users who want a friendly monthly price and don\'t mind paying upfront.',
    link: 'https://www.mintmobile.com/plans',
    coverageNote: 'T-Mobile network. Good in most metro and suburban areas.',
  },
  'visible-plus': {
    id: 'visible-plus',
    name: 'Visible+',
    carrier: 'Visible (by Verizon)',
    price: 45,
    priceLabel: '$45/mo (1 line)',
    activationFee: 'No activation fee',
    towers: 'Verizon',
    includes: [
      'Unlimited talk, text, and premium data',
      'Unlimited 5G hotspot',
      'International calling to 30+ countries',
      'Taxes and fees included',
    ],
    notIncluded: [
      'Customer service is app and chat only — no phone support',
      'Apple Watch cellular works but setup is app-only',
    ],
    bestFor: 'Tech-comfortable heavy users who want Verizon coverage without the Verizon price.',
    link: 'https://www.visible.com/plans',
    coverageNote: 'Full Verizon network — same towers as Verizon\'s regular plans.',
  },
  'us-mobile-warp-unlimited': {
    id: 'us-mobile-warp-unlimited',
    name: 'US Mobile Unlimited Premium',
    carrier: 'US Mobile',
    price: 35,
    priceLabel: '$35/mo (1 line, when paid annually)',
    activationFee: 'No activation fee',
    towers: 'Verizon + T-Mobile',
    includes: [
      'Unlimited talk, text, and data',
      '50GB mobile hotspot',
      'Network of your choice — Verizon, T-Mobile, or AT&T',
      'International calling to 35+ countries',
    ],
    notIncluded: [
      'Monthly pricing is higher — annual billing for best rate',
      'Apple Watch cellular support is limited depending on network',
    ],
    bestFor: 'Heavy users who want flexibility to pick their network and keep costs low.',
    link: 'https://www.usmobile.com/',
    coverageNote: 'You choose the network at signup. Switching networks is free.',
  },
  'tmobile-go5g-55': {
    id: 'tmobile-go5g-55',
    name: 'T-Mobile Go5G 55+',
    carrier: 'T-Mobile',
    price: 55,
    priceLabel: '$55/mo (1 line, 55+ discount)',
    activationFee: 'Activation fee may apply in-store',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk, text, and premium data',
      '15GB mobile hotspot',
      'Unlimited texting in 215+ countries',
      'Apple Watch cellular supported',
      'Taxes and fees included',
    ],
    notIncluded: [
      'Still deprioritized below the Go5G Plus plan',
      'Must be 55 or older',
    ],
    bestFor: 'Seniors who want premium data, hotspot, and Apple Watch cellular on T-Mobile.',
    link: 'https://www.t-mobile.com/cell-phone-plans',
    coverageNote: 'T-Mobile towers — strong in cities, improving in rural areas.',
  },
  'google-fi-flexible': {
    id: 'google-fi-flexible',
    name: 'Google Fi Flexible',
    carrier: 'Google Fi',
    price: 20,
    priceLabel: '$20/mo base + $10 per GB (caps at $60)',
    activationFee: 'No activation fee',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk and text',
      'Data billed only for what you use',
      'Works in 200+ countries with no extra setup',
      'Free calling to 50+ countries',
    ],
    notIncluded: [
      'Best experience needs a Pixel phone (most other phones work but with fewer features)',
      'Apple Watch cellular not supported',
    ],
    bestFor: 'Travelers who want their US plan to keep working overseas without buying local SIMs.',
    link: 'https://fi.google.com/about/plans',
    coverageNote: 'T-Mobile network in the US. Automatic roaming abroad.',
  },
  'tmobile-go5g-plus-55': {
    id: 'tmobile-go5g-plus-55',
    name: 'T-Mobile Go5G Plus 55+',
    carrier: 'T-Mobile',
    price: 75,
    priceLabel: '$75/mo (1 line, 55+ discount)',
    activationFee: 'Activation fee may apply in-store',
    towers: 'T-Mobile',
    includes: [
      'Unlimited premium data (never slowed)',
      '50GB mobile hotspot',
      '5GB high-speed data in 215+ countries',
      'Apple Watch cellular supported',
      'Netflix Basic and Apple TV+ on us (for a limited time)',
    ],
    notIncluded: [
      'Must be 55 or older',
      'Expensive for one line vs. family',
    ],
    bestFor: 'Frequent international travelers and heavy users who want the top T-Mobile tier.',
    link: 'https://www.t-mobile.com/cell-phone-plans',
    coverageNote: 'T-Mobile towers with high-priority data.',
  },
  'verizon-unlimited-welcome-55': {
    id: 'verizon-unlimited-welcome-55',
    name: 'Verizon Unlimited Welcome 55+',
    carrier: 'Verizon',
    price: 30,
    priceLabel: '$30/mo per line (requires 2 lines, 55+)',
    activationFee: '$35 activation fee per line',
    towers: 'Verizon',
    includes: [
      'Unlimited talk, text, and data',
      'Best-in-class rural coverage',
      'Apple Watch cellular supported',
      'Lower 55+ pricing when you add 2 lines',
    ],
    notIncluded: [
      'Single-line 55+ pricing is much higher',
      'Mobile hotspot is limited on this tier',
      'Taxes and fees are NOT included — expect ~$10/mo extra',
    ],
    bestFor: 'Two-person households in rural areas who need Verizon\'s reliable coverage.',
    link: 'https://www.verizon.com/plans/',
    coverageNote: 'Runs on Verizon — often the best signal in rural and mountainous areas.',
  },
  'att-unlimited-starter': {
    id: 'att-unlimited-starter',
    name: 'AT&T Unlimited Starter',
    carrier: 'AT&T',
    price: 50,
    priceLabel: '$50/mo (1 line)',
    activationFee: '$35 activation fee',
    towers: 'AT&T',
    includes: [
      'Unlimited talk, text, and data',
      '5G access included',
      'Apple Watch cellular supported',
      'Strong rural coverage in many states',
    ],
    notIncluded: [
      'Data may be slowed at any time when the network is busy',
      'No hotspot included on this tier',
      'Taxes and fees are extra',
    ],
    bestFor: 'Rural customers who need AT&T coverage and keep it simple with one plan.',
    link: 'https://www.att.com/plans/unlimited-data-plans/',
    coverageNote: 'AT&T network — a good choice if Verizon is weak at your address.',
  },
  'tmobile-go5g-55-family': {
    id: 'tmobile-go5g-55-family',
    name: 'T-Mobile Go5G 55+ (4 lines)',
    carrier: 'T-Mobile',
    price: 25,
    priceLabel: '$100/mo for 4 lines ($25 per line)',
    activationFee: 'Activation fees may apply per line',
    towers: 'T-Mobile',
    includes: [
      'Unlimited talk, text, and data on all 4 lines',
      '15GB hotspot per line',
      'Apple Watch cellular on each line',
      'Taxes and fees included',
    ],
    notIncluded: [
      'Primary account holder must be 55+',
      'Requires autopay for best price',
    ],
    bestFor: 'Grandparents who want to cover spouse + adult children on one bill.',
    link: 'https://www.t-mobile.com/cell-phone-plans',
    coverageNote: 'T-Mobile network — best in cities and suburbs.',
  },
  'verizon-unlimited-welcome-family': {
    id: 'verizon-unlimited-welcome-family',
    name: 'Verizon Unlimited Welcome (4 lines)',
    carrier: 'Verizon',
    price: 30,
    priceLabel: '$120/mo for 4 lines ($30 per line)',
    activationFee: '$35 activation fee per line',
    towers: 'Verizon',
    includes: [
      'Unlimited talk, text, and data on all 4 lines',
      'Apple Watch cellular on each line',
      'Best rural coverage in the country',
      'Autopay discount available',
    ],
    notIncluded: [
      'Hotspot is limited on this tier',
      'Taxes and fees are extra',
    ],
    bestFor: 'Families in rural areas who need reliable signal for every line.',
    link: 'https://www.verizon.com/plans/',
    coverageNote: 'Verizon network — strongest rural and highway coverage.',
  },
};

/* ── Carrier overview data ─────────────────────────────────────── */

const CARRIERS: Carrier[] = [
  {
    name: 'Verizon',
    badgeColor: 'bg-red-100 text-red-900 dark:bg-red-950/40 dark:text-red-200',
    kind: 'Major carrier',
    priceRange: '$30 – $90 per line',
    bestFor: 'Rural areas, highway travel, and households that need the strongest coverage.',
    strengths: [
      'Best rural and highway coverage of any US carrier',
      '55+ plans (must live in Florida for the statewide 55+ deal; available elsewhere as a 2-line deal)',
      'Full Apple Watch cellular support',
    ],
    catch: 'Advertised prices rarely include taxes and fees — add about $10 per line. Pushy upsells in stores.',
    supportsAppleWatch: true,
    link: 'https://www.verizon.com/plans/',
  },
  {
    name: 'AT&T',
    badgeColor: 'bg-blue-100 text-blue-900 dark:bg-blue-950/40 dark:text-blue-200',
    kind: 'Major carrier',
    priceRange: '$35 – $90 per line',
    bestFor: 'Rural and suburban areas where Verizon is weak; also the South and Midwest.',
    strengths: [
      'Strong rural coverage in many states',
      'Senior 55+ plans (limited to Florida residents for official 55+ deal)',
      'Apple Watch cellular support',
    ],
    catch: 'Customer service reputation is mixed — expect long hold times. Activation fees of $35.',
    supportsAppleWatch: true,
    link: 'https://www.att.com/plans/unlimited-data-plans/',
  },
  {
    name: 'T-Mobile',
    badgeColor: 'bg-pink-100 text-pink-900 dark:bg-pink-950/40 dark:text-pink-200',
    kind: 'Major carrier',
    priceRange: '$40 – $75 per line',
    bestFor: 'Seniors in cities and suburbs who want unlimited data and a clear 55+ discount.',
    strengths: [
      'Nationwide 55+ plans — no state restriction',
      'Taxes and fees included in advertised price',
      'Apple Watch cellular supported',
    ],
    catch: 'Rural coverage is still improving — check at your home address before switching.',
    supportsAppleWatch: true,
    link: 'https://www.t-mobile.com/cell-phone-plans',
  },
  {
    name: 'Mint Mobile',
    badgeColor: 'bg-green-100 text-green-900 dark:bg-green-950/40 dark:text-green-200',
    kind: 'Prepaid / MVNO',
    priceRange: '$15 – $30 per line',
    bestFor: 'Anyone in good T-Mobile coverage who wants the lowest price.',
    strengths: [
      'Uses the T-Mobile network — same towers as T-Mobile itself',
      'No 55+ discount needed — the price is already low',
      'Free international calling to Mexico and Canada',
    ],
    catch: 'You pay for 3, 6, or 12 months upfront. Pricing goes up after the first term — renew to stay cheap.',
    supportsAppleWatch: false,
    link: 'https://www.mintmobile.com/plans',
  },
  {
    name: 'Consumer Cellular',
    badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-950/40 dark:text-purple-200',
    kind: 'Senior-focused',
    priceRange: '$20 – $60 per line',
    bestFor: 'Seniors who want a real person on the phone when something goes wrong.',
    strengths: [
      'US-based human customer support',
      'AARP discount (5% off bill, 30% off accessories)',
      'Uses AT&T or T-Mobile towers — pick the best for your address',
    ],
    catch: 'Plans above 5GB can be pricier than MVNO competitors. Hotspot is limited.',
    supportsAppleWatch: false,
    link: 'https://www.consumercellular.com/plans',
  },
  {
    name: 'Lively (Jitterbug)',
    badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
    kind: 'Senior-focused',
    priceRange: '$15 – $40 per line',
    bestFor: 'Seniors who want a simple flip phone or a phone with an emergency button.',
    strengths: [
      'Big-button Jitterbug flip phone available',
      'Urgent Response button on every Jitterbug phone',
      'Optional Health & Safety packages (nurse-on-call, caregiver app)',
    ],
    catch: 'You typically need to buy a Jitterbug phone. Not made for app lovers.',
    supportsAppleWatch: false,
    link: 'https://www.lively.com/phones/',
  },
  {
    name: 'Boost Mobile',
    badgeColor: 'bg-orange-100 text-orange-900 dark:bg-orange-950/40 dark:text-orange-200',
    kind: 'Prepaid / MVNO',
    priceRange: '$15 – $60 per line',
    bestFor: 'Shoppers who like in-store help but want prepaid pricing.',
    strengths: [
      'Its own network plus roaming on T-Mobile and AT&T',
      'Lots of store locations for in-person help',
      '$25/mo unlimited plans run often',
    ],
    catch: 'Boost\'s own network is still growing — coverage can be spotty in certain areas.',
    supportsAppleWatch: false,
    link: 'https://www.boostmobile.com/plans',
  },
  {
    name: 'Cricket Wireless',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
    kind: 'Prepaid / MVNO',
    priceRange: '$30 – $60 per line',
    bestFor: 'People who want AT&T coverage at a lower price and in-store help.',
    strengths: [
      'Runs on AT&T\'s network',
      'Taxes and fees included in advertised price',
      'Easy storefronts for face-to-face help',
    ],
    catch: 'Speeds may be slower than AT&T\'s direct plans during busy times.',
    supportsAppleWatch: false,
    link: 'https://www.cricketwireless.com/cell-phone-plans',
  },
  {
    name: 'Visible (by Verizon)',
    badgeColor: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200',
    kind: 'Prepaid / MVNO',
    priceRange: '$25 – $45 per line',
    bestFor: 'Tech-comfortable users who want Verizon coverage without Verizon prices.',
    strengths: [
      'Full Verizon network — same towers',
      'Taxes and fees included',
      'Unlimited hotspot on the Plus plan',
    ],
    catch: 'Support is app and chat only — no phone number to call.',
    supportsAppleWatch: true,
    link: 'https://www.visible.com/plans',
  },
  {
    name: 'US Mobile',
    badgeColor: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200',
    kind: 'Prepaid / MVNO',
    priceRange: '$10 – $50 per line',
    bestFor: 'Flexible users who want to pick from Verizon, T-Mobile, or AT&T towers.',
    strengths: [
      'Choose your network — Verizon, T-Mobile, or AT&T',
      'Free network switching any time',
      'eSIM support for same-day activation',
    ],
    catch: 'App-first support. Customer service is good but mostly online.',
    supportsAppleWatch: true,
    link: 'https://www.usmobile.com/',
  },
];

/* ── Quiz questions ────────────────────────────────────────────── */

interface QuestionOption<T> {
  value: T;
  label: string;
  hint?: string;
}

interface Question<T> {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  options: QuestionOption<T>[];
}

const QUESTIONS_DATA: Question<DataUse> = {
  id: 'data',
  title: 'How much data do you use each month?',
  subtitle: 'Data is what your phone uses for maps, email, web, and video — anything that isn\'t a call or text.',
  icon: Wifi,
  options: [
    { value: 'almost-none', label: 'Almost none', hint: 'Mostly calls and texts. Rare email or map use.' },
    { value: 'light', label: 'Light (under 3 GB)', hint: 'Email, a few maps, some web browsing.' },
    { value: 'moderate', label: 'Moderate (3 – 10 GB)', hint: 'Web browsing, photos, some video, occasional streaming.' },
    { value: 'heavy', label: 'Heavy (10 – 30 GB)', hint: 'Regular video streaming, large downloads, work video calls.' },
    { value: 'unlimited', label: 'Unlimited / all day', hint: 'You stream video over cell constantly — never on Wi-Fi.' },
  ],
};

const QUESTIONS_LOCATION: Question<LocationAnswer> = {
  id: 'location',
  title: 'Where do you spend most of your time?',
  subtitle: 'Coverage depends on the network, so this helps us pick the right towers.',
  icon: Home,
  options: [
    { value: 'home', label: 'Home mostly', hint: 'Your phone is usually on Wi-Fi.' },
    { value: 'travel', label: 'I travel a lot', hint: 'Road trips, flights, or international travel.' },
    { value: 'rural', label: 'Rural area', hint: 'Farms, small towns, mountains, or long highway drives.' },
  ],
};

const QUESTIONS_CARRIER: Question<CurrentCarrier> = {
  id: 'carrier',
  title: 'Who is your current carrier?',
  subtitle: 'This helps us find plans that work with your current phone and number.',
  icon: Phone,
  options: [
    { value: 'verizon', label: 'Verizon' },
    { value: 'att', label: 'AT&T' },
    { value: 'tmobile', label: 'T-Mobile' },
    { value: 'other', label: 'Another carrier (Cricket, Boost, Mint, etc.)' },
    { value: 'none', label: 'I don\'t have a plan right now' },
  ],
};

const QUESTIONS_LINES: Question<Lines> = {
  id: 'lines',
  title: 'How many lines do you need?',
  subtitle: 'A "line" is one phone number. Family plans usually cost less per line.',
  icon: Users,
  options: [
    { value: 'one', label: 'Only me (1 line)' },
    { value: 'two', label: 'Me and one other person (2 lines)' },
    { value: 'family', label: 'Family plan (3 – 5 lines)' },
  ],
};

const QUESTIONS_BUDGET: Question<Budget> = {
  id: 'budget',
  title: 'What feels like the right monthly budget?',
  subtitle: 'Per line, before taxes. You can always upgrade later.',
  icon: DollarSign,
  options: [
    { value: 'under20', label: 'Under $20 per line' },
    { value: '20-40', label: '$20 – $40 per line' },
    { value: '40-70', label: '$40 – $70 per line' },
    { value: '70plus', label: '$70 or more per line' },
  ],
};

const MUST_HAVE_OPTIONS: { value: MustHave; label: string; hint: string }[] = [
  { value: 'international', label: 'International calling or travel', hint: 'You call family abroad or travel overseas.' },
  { value: 'hotspot', label: 'Mobile hotspot', hint: 'Share your phone\'s internet with a laptop or tablet.' },
  { value: 'applewatch', label: 'Apple Watch cellular', hint: 'An Apple Watch that works without your phone nearby.' },
  { value: 'senior-discount', label: 'Senior discount (55+)', hint: 'You qualify for a 55+ or AARP price.' },
  { value: 'priority-data', label: 'Priority data (never slowed)', hint: 'You need fast data even during busy times.' },
  { value: 'customer-service', label: 'Great phone customer service', hint: 'You want to talk to a real person when something goes wrong.' },
];

/* ── Recommendation logic ──────────────────────────────────────── */

function recommend(a: QuizAnswers): PlanRec[] {
  const data = a.data;
  const loc = a.location;
  const lines = a.lines;
  const budget = a.budget;
  const mh = new Set(a.mustHaves);
  const picks = new Set<string>();

  // Family 3-5 lines — family plans dominate
  if (lines === 'family') {
    picks.add('tmobile-go5g-55-family');
    picks.add('verizon-unlimited-welcome-family');
    if (data === 'heavy' || data === 'unlimited') {
      picks.add('visible-plus');
    } else {
      picks.add('us-mobile-warp-unlimited');
    }
  }

  // Rural → Verizon / AT&T
  if (loc === 'rural') {
    picks.add('verizon-unlimited-welcome-55');
    picks.add('att-unlimited-starter');
  }

  // Travel + international
  if (loc === 'travel' || mh.has('international')) {
    picks.add('google-fi-flexible');
    picks.add('tmobile-go5g-plus-55');
  }

  // Apple Watch cellular — MVNOs usually don't support it
  if (mh.has('applewatch')) {
    picks.add('verizon-unlimited-welcome-55');
    picks.add('tmobile-go5g-55');
    picks.add('att-unlimited-starter');
  }

  // Priority / never-slowed data
  if (mh.has('priority-data')) {
    picks.add('tmobile-go5g-plus-55');
    picks.add('verizon-unlimited-welcome-55');
  }

  // Light data + senior discount + small budget
  if ((data === 'almost-none' || data === 'light') && mh.has('senior-discount') && (budget === 'under20' || budget === '20-40')) {
    picks.add('consumer-cellular-1gb');
    picks.add('lively-basic');
  }

  // Almost-none data → Jitterbug-style simple plans
  if (data === 'almost-none') {
    picks.add('lively-basic');
    picks.add('consumer-cellular-1gb');
  }

  // Light data, no senior discount needed
  if (data === 'light' && !mh.has('senior-discount')) {
    picks.add('mint-5gb');
    picks.add('us-mobile-starter');
  }

  // Moderate data
  if (data === 'moderate') {
    if (mh.has('senior-discount')) {
      picks.add('tmobile-essentials-saver-55');
    }
    picks.add('mint-15gb');
    picks.add('us-mobile-warp-unlimited');
  }

  // Heavy / unlimited
  if (data === 'heavy' || data === 'unlimited') {
    picks.add('visible-plus');
    picks.add('us-mobile-warp-unlimited');
    if (mh.has('senior-discount')) {
      picks.add('tmobile-go5g-55');
    }
  }

  // Customer service preference — add Consumer Cellular
  if (mh.has('customer-service')) {
    picks.add('consumer-cellular-1gb');
  }

  // Budget gate — prefer the lowest-priced matches when budget is tight
  // We still return up to 3, sorted by closest-to-budget
  const budgetCeiling: Record<Budget, number> = {
    under20: 22,
    '20-40': 45,
    '40-70': 75,
    '70plus': 9999,
  };
  const ceiling = budget ? budgetCeiling[budget] : 9999;

  // Fallback — if nothing matched, add the safe defaults
  if (picks.size === 0) {
    picks.add('mint-15gb');
    picks.add('us-mobile-warp-unlimited');
    picks.add('tmobile-essentials-saver-55');
  }

  const all = Array.from(picks)
    .map((id) => PLANS[id])
    .filter(Boolean);

  // Sort: under-budget plans first, then by price ascending
  all.sort((a, b) => {
    const aFits = a.price <= ceiling ? 0 : 1;
    const bFits = b.price <= ceiling ? 0 : 1;
    if (aFits !== bFits) return aFits - bFits;
    return a.price - b.price;
  });

  return all.slice(0, 3);
}

/* ── Helpers ───────────────────────────────────────────────────── */

function parseCurrentBill(raw: string | undefined): number | null {
  if (!raw) return null;
  const cleaned = raw.replace(/[^0-9.]/g, '');
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function formatUSD(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

/* ── Component ─────────────────────────────────────────────────── */

export default function PhonePlanComparison() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ mustHaves: [] });
  const [done, setDone] = useState(false);

  const totalSteps = 7;
  const progress = done ? 100 : Math.round((step / totalSteps) * 100);

  const recommendations = useMemo(() => (done ? recommend(answers) : []), [done, answers]);
  const currentBillNum = parseCurrentBill(answers.currentBill);

  const restart = () => {
    setStep(0);
    setAnswers({ mustHaves: [] });
    setDone(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(Math.max(0, step - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMustHave = (v: MustHave) => {
    setAnswers((prev) => {
      const has = prev.mustHaves.includes(v);
      return { ...prev, mustHaves: has ? prev.mustHaves.filter((x) => x !== v) : [...prev.mustHaves, v] };
    });
  };

  const canAdvance = (() => {
    switch (step) {
      case 0: return !!answers.data;
      case 1: return !!answers.location;
      case 2: return !!answers.currentCarrier;
      case 3: return !!answers.lines;
      case 4: return true; // must-haves optional
      case 5: return !!answers.budget;
      case 6: return true; // current bill optional
      default: return false;
    }
  })();

  return (
    <>
      <SEOHead
        title="Find the Right Phone Plan — Without the Pushy Sales"
        description="A senior-friendly phone plan chooser. Compare real plans across Verizon, AT&T, T-Mobile, Mint, Consumer Cellular, Lively, and more. Deterministic recommendations — no sales pitch."
        path="/tools/phone-plan-comparison"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sky-50 via-white to-teal-50 dark:from-sky-950/30 dark:via-background dark:to-teal-950/30">
          <div className="container py-10 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="phone-plan-comparison"
                title="Phone Plan Comparison"
                url="/tools/phone-plan-comparison"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Signal className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Phone plans · Compare & save</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 pr-14 max-w-3xl leading-tight">
              Find the Right Phone Plan — Without the Pushy Sales
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Compare real plans. Keep your number. Save money.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Answer seven quick questions and we&apos;ll show you the top three plans that match your life —
              with the real price, what&apos;s included, and the catch (if any).
            </p>
          </div>
        </section>

        {/* ── Why this tool? ───────────────────────────────────── */}
        <section className="container py-8 md:py-10">
          <Card className="bg-sky-50 dark:bg-sky-950/20 border-sky-500/40">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-sky-700 dark:text-sky-300" />
                Why this tool?
              </h2>
              <ul className="space-y-2 text-base md:text-lg leading-relaxed">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 dark:text-sky-300 shrink-0 mt-1" />
                  <span>
                    Carriers hide senior discounts behind several clicks — we put them front and center.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 dark:text-sky-300 shrink-0 mt-1" />
                  <span>
                    Real $15/month plans exist. They use the same towers as the big carriers — they&apos;re
                    called MVNOs (networks that rent from Verizon, AT&T, or T-Mobile).
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 dark:text-sky-300 shrink-0 mt-1" />
                  <span>
                    You can usually keep your current phone and your phone number — no need to buy
                    anything new in most cases.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 dark:text-sky-300 shrink-0 mt-1" />
                  <span>
                    We don&apos;t take commissions from any carrier. Prices shown are what we saw on
                    carrier websites — they change often, so always double-check before you sign up.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Quiz + Results ───────────────────────────────────── */}
        <section className="container pb-10 md:pb-14">
          <div className="max-w-3xl mx-auto">
            {!done && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm md:text-base font-medium text-muted-foreground">
                    Question {step + 1} of {totalSteps}
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground">
                    About 2 minutes total
                  </span>
                </div>
                <Progress value={progress} className="h-3" aria-label="Quiz progress" />
              </div>
            )}

            {/* ── Step 0: Data ── */}
            {!done && step === 0 && (
              <QuestionCard
                q={QUESTIONS_DATA}
                value={answers.data}
                onChange={(v) => setAnswers({ ...answers, data: v })}
              />
            )}

            {/* ── Step 1: Location ── */}
            {!done && step === 1 && (
              <QuestionCard
                q={QUESTIONS_LOCATION}
                value={answers.location}
                onChange={(v) => setAnswers({ ...answers, location: v })}
              />
            )}

            {/* ── Step 2: Current carrier ── */}
            {!done && step === 2 && (
              <QuestionCard
                q={QUESTIONS_CARRIER}
                value={answers.currentCarrier}
                onChange={(v) => setAnswers({ ...answers, currentCarrier: v })}
              />
            )}

            {/* ── Step 3: Lines ── */}
            {!done && step === 3 && (
              <QuestionCard
                q={QUESTIONS_LINES}
                value={answers.lines}
                onChange={(v) => setAnswers({ ...answers, lines: v })}
              />
            )}

            {/* ── Step 4: Must-haves (multi-select) ── */}
            {!done && step === 4 && (
              <Card>
                <CardContent className="p-6 md:p-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-sm">Step 5 of 7</Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    Anything you can&apos;t live without?
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Pick as many as apply — or none. We&apos;ll weigh these when we pick your top 3.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {MUST_HAVE_OPTIONS.map((opt) => {
                      const checked = answers.mustHaves.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => toggleMustHave(opt.value)}
                          className={`text-left p-4 md:p-5 min-h-14 rounded-xl border-2 transition-colors ${
                            checked
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary hover:bg-primary/5'
                          }`}
                          aria-pressed={checked}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-1 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${
                              checked ? 'bg-primary border-primary text-primary-foreground' : 'border-border'
                            }`}>
                              {checked && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <div className="text-base md:text-lg font-medium">{opt.label}</div>
                              <div className="text-sm text-muted-foreground leading-relaxed mt-1">{opt.hint}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ── Step 5: Budget ── */}
            {!done && step === 5 && (
              <QuestionCard
                q={QUESTIONS_BUDGET}
                value={answers.budget}
                onChange={(v) => setAnswers({ ...answers, budget: v })}
              />
            )}

            {/* ── Step 6: Current bill ── */}
            {!done && step === 6 && (
              <Card>
                <CardContent className="p-6 md:p-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-sm">Step 7 of 7</Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    What do you pay per month today?
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Optional — but if you tell us, we&apos;ll show you the savings. Enter only the dollar amount
                    (for example, 85).
                  </p>
                  <div className="max-w-xs">
                    <Label htmlFor="current-bill" className="text-base">Your current monthly bill</Label>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-semibold text-muted-foreground">$</span>
                      <Input
                        id="current-bill"
                        inputMode="decimal"
                        placeholder="85"
                        value={answers.currentBill ?? ''}
                        onChange={(e) => setAnswers({ ...answers, currentBill: e.target.value })}
                        className="text-lg h-12"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Skip this and we&apos;ll still show you our top 3 matches.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* ── Quiz navigation ── */}
            {!done && (
              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={prevStep}
                  disabled={step === 0}
                  className="gap-2 min-h-14 text-base"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>
                <Button
                  size="lg"
                  onClick={nextStep}
                  disabled={!canAdvance}
                  className="gap-2 min-h-14 text-base"
                >
                  {step === totalSteps - 1 ? 'See my matches' : 'Next'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}

            {/* ── Results ── */}
            {done && (
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-950/30 dark:to-teal-950/30 border-sky-500/40">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-7 h-7 text-sky-700 dark:text-sky-300" />
                      <h2 className="text-2xl md:text-3xl font-semibold">Your top 3 matches</h2>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Based on your answers, here are the plans we think fit best. Each one includes the real
                      price, what&apos;s included, what&apos;s not, and which towers it uses.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Button variant="outline" size="lg" onClick={restart} className="gap-2 min-h-14 text-base">
                        <RotateCcw className="w-5 h-5" />
                        Start over
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {recommendations.map((plan, idx) => {
                  const savings =
                    currentBillNum !== null && plan.price < currentBillNum
                      ? currentBillNum - plan.price
                      : null;
                  return (
                    <Card key={plan.id} className="overflow-hidden">
                      <CardContent className="p-6 md:p-8 space-y-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-sm">#{idx + 1} match</Badge>
                              <Badge variant="outline" className="text-sm">{plan.carrier}</Badge>
                              <Badge variant="outline" className="text-sm">Towers: {plan.towers}</Badge>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                              {plan.name}
                            </h3>
                            <p className="text-lg md:text-xl font-medium text-primary mt-1">
                              {plan.priceLabel}
                            </p>
                            {plan.activationFee && (
                              <p className="text-sm text-muted-foreground mt-1">{plan.activationFee}</p>
                            )}
                          </div>
                        </div>

                        {savings !== null && (
                          <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-500/40">
                            <p className="text-base md:text-lg font-medium text-green-900 dark:text-green-200">
                              You could save about {formatUSD(savings)}/month — {formatUSD(savings * 12)} per year
                              — vs. your current {formatUSD(currentBillNum!)} bill.
                            </p>
                            <p className="text-sm text-green-800 dark:text-green-300 mt-1">
                              Savings estimate only. Taxes, fees, and carrier promotions vary.
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <h4 className="text-base font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5" />
                              What&apos;s included
                            </h4>
                            <ul className="space-y-2">
                              {plan.includes.map((line) => (
                                <li key={line} className="text-base leading-relaxed flex gap-2">
                                  <span className="text-green-700 dark:text-green-400 shrink-0 font-bold" aria-hidden>+</span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                              <XCircle className="w-5 h-5" />
                              What&apos;s not included
                            </h4>
                            <ul className="space-y-2">
                              {plan.notIncluded.map((line) => (
                                <li key={line} className="text-base leading-relaxed flex gap-2">
                                  <span className="text-amber-700 dark:text-amber-400 shrink-0 font-bold" aria-hidden>−</span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-muted/40 border border-border">
                          <p className="text-sm md:text-base leading-relaxed">
                            <strong>Coverage:</strong> {plan.coverageNote}
                          </p>
                          <p className="text-sm md:text-base leading-relaxed mt-2">
                            <strong>Best for:</strong> {plan.bestFor}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <Button asChild size="lg" className="gap-2 min-h-14 text-base">
                            <a href={plan.link} target="_blank" rel="noopener noreferrer">
                              See this plan on {plan.carrier}&apos;s site
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="gap-2 min-h-14 text-base">
                            <Link to="/guides?category=phone-guides">
                              How to switch carriers
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                        </div>

                        <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30">
                          <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                          <p className="text-sm md:text-base leading-relaxed">
                            <strong>Heads up:</strong> In-store reps earn commissions on upgrades and accessories.
                            Stick to the plan you researched here — politely decline add-ons you didn&apos;t ask for.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── Carrier comparison ──────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Carrier-by-carrier comparison</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Every carrier has a sweet spot and a catch. Here&apos;s the plain-English version so you can compare
              without reading ten different websites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CARRIERS.map((c) => (
                <Card key={c.name}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{c.name}</h3>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${c.badgeColor}`}>
                          {c.kind}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-sm whitespace-nowrap">{c.priceRange}</Badge>
                    </div>

                    <p className="text-base leading-relaxed">
                      <strong>Best for:</strong> {c.bestFor}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Strengths
                      </h4>
                      <ul className="space-y-1.5">
                        {c.strengths.map((s) => (
                          <li key={s} className="text-base leading-relaxed flex gap-2">
                            <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden>+</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30">
                      <p className="text-sm md:text-base leading-relaxed">
                        <strong>The catch:</strong> {c.catch}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {c.supportsAppleWatch ? 'Apple Watch cellular: Yes' : 'Apple Watch cellular: No'}
                      </Badge>
                      <Button asChild variant="ghost" size="sm" className="gap-1">
                        <a href={c.link} target="_blank" rel="noopener noreferrer">
                          See plans <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Switching to save walkthrough ───────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <ArrowRight className="w-7 h-7 text-primary" />
            Switching to save — the 5-step walkthrough
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Switching carriers used to be painful. Today it can take 15 minutes and your phone number goes
            with you. Do it in this order.
          </p>

          <div className="space-y-4">
            {[
              {
                n: 1,
                title: 'Check if your phone is unlocked',
                body: 'An unlocked phone works on any carrier. On an iPhone: Settings → General → About → look for "Carrier Lock: No SIM restrictions." On an Android: Settings → About phone → SIM status. If it says "Locked", call your current carrier and ask them to unlock it (they must, for free, as long as your phone is paid off).',
                icon: Smartphone,
              },
              {
                n: 2,
                title: 'Get your account number and transfer PIN',
                body: 'Log in to your current carrier\'s app or website. Look for "Account number" and "Transfer PIN" (sometimes called a "port-out PIN" or "NPIN"). Write both down along with the exact name and address on your account. The new carrier will ask for all of these.',
                icon: Phone,
              },
              {
                n: 3,
                title: 'Sign up with the new carrier and request to port your number',
                body: 'Pick the plan, choose "Bring your own phone", and choose "Keep my current number." Enter your old account number, transfer PIN, and billing address. The new carrier handles the rest — you don\'t have to call the old carrier to cancel.',
                icon: Users,
              },
              {
                n: 4,
                title: 'Install the SIM card or eSIM',
                body: 'Most new plans use eSIM now — a small chip already inside your phone. The new carrier will email a QR code or activate it in their app. Scan the code, follow the prompts, and your phone switches over. A physical SIM card works the same way but takes a few extra minutes to swap.',
                icon: Signal,
              },
              {
                n: 5,
                title: 'Confirm everything works before you cancel anything',
                body: 'Test a phone call, a text, and mobile data (turn off Wi-Fi to check). Check that you can receive calls from family. Once everything works for 24 hours, the port is done. Your old plan cancels automatically when the number moves — don\'t call and cancel, or the port can fail.',
                icon: CheckCircle2,
              },
            ].map((s) => (
              <Card key={s.n}>
                <CardContent className="p-5 md:p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {s.n}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <s.icon className="w-5 h-5 text-primary" />
                      {s.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">{s.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Red flags ──────────────────────────────────────── */}
        <section className="border-t border-border bg-red-50/40 dark:bg-red-950/10">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-700 dark:text-red-400" />
              Red flags — watch out for these
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Some offers look great and turn out to be expensive in the long run. These are the most common
              traps we see in stores and online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: '"Free phone" offers',
                  body: 'Almost always a 24- or 36-month contract dressed up as free. You pay for the phone in bill credits — if you switch carriers early, you owe the remaining balance.',
                },
                {
                  title: 'Unlimited plans that aren\'t really unlimited',
                  body: 'Most "unlimited" plans slow your data down after a certain point (often 20 – 50 GB). This is called deprioritization. Ask for the exact number before you sign up.',
                },
                {
                  title: 'Taxes and fees not included',
                  body: 'Verizon and AT&T advertise prices before tax. T-Mobile and most prepaid plans include tax. A $60 Verizon plan often ends up at $70+ per month once taxes are added.',
                },
                {
                  title: 'Autopay and paper-bill fees',
                  body: 'Many carriers give you a $5 – $10/month discount only if you set up autopay with a debit card or bank account. Paper bills sometimes cost $5 extra.',
                },
                {
                  title: 'Early termination fees (mostly gone, but watch)',
                  body: 'The big carriers removed their ETFs, but if you bought a phone on an installment plan, the remaining balance is due when you leave. Always check your balance before switching.',
                },
                {
                  title: 'Returning leased equipment',
                  body: 'If you had a leased phone, tablet, or hotspot, you must return it within 30 days of cancelling. Get a tracking number and keep the receipt for at least a year.',
                },
              ].map((r) => (
                <Card key={r.title} className="border-red-500/30">
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-400" />
                      {r.title}
                    </h3>
                    <p className="text-base leading-relaxed">{r.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── My current phone — unlocked vs. locked ─────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Lock className="w-7 h-7 text-primary" />
            What about my current iPhone or Android?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            The short answer: most phones bought in the last 5 years work on every major network. The one
            thing to check is whether it&apos;s <em>unlocked</em> — meaning it isn&apos;t tied to one carrier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  On iPhone
                </h3>
                <p className="text-base leading-relaxed">
                  Open <strong>Settings → General → About</strong>. Scroll to <strong>Carrier Lock</strong>.
                </p>
                <ul className="space-y-1.5 text-base">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>&quot;No SIM restrictions&quot; means unlocked — you can switch any time.</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Any other message means locked — call your carrier to request an unlock.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  On Android
                </h3>
                <p className="text-base leading-relaxed">
                  Open <strong>Settings → About phone → SIM status</strong>. Look for a line that mentions
                  network lock or carrier status.
                </p>
                <ul className="space-y-1.5 text-base">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>If it says unlocked or no network restriction, you&apos;re good.</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Still unsure? Pop in a friend&apos;s SIM card from a different carrier. If it
                      connects to their network, your phone is unlocked.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-5 bg-sky-50 dark:bg-sky-950/20 border-sky-500/40">
            <CardContent className="p-5 space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                Is your phone locked? Here&apos;s how to unlock it
              </h3>
              <p className="text-base leading-relaxed">
                US law requires carriers to unlock your phone once it&apos;s fully paid off. Call your current
                carrier&apos;s customer service line and say: &quot;I&apos;d like to request a carrier unlock on my
                paid-off device.&quot; They&apos;ll email instructions within 1 – 2 business days. This is free.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Questions we hear a lot
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                {
                  q: 'Will I lose my phone number?',
                  a: 'No. As long as you ask the new carrier to port (transfer) your number, it moves with you. The process usually takes minutes and you don\'t need to cancel with the old carrier first — canceling early can actually make the port fail.',
                },
                {
                  q: 'Do I need a new phone?',
                  a: 'Almost never. Any iPhone from 2019 or newer and most Androids from the last 5 years work on all three US networks (Verizon, AT&T, T-Mobile). The one thing to confirm is that your phone is unlocked.',
                },
                {
                  q: 'What\'s an eSIM?',
                  a: 'A tiny chip already built into your phone that replaces the old physical SIM card. Instead of mailing you a SIM, the new carrier sends a QR code. You scan it and your phone switches over in under 5 minutes.',
                },
                {
                  q: 'What\'s the difference between prepaid and postpaid?',
                  a: 'Postpaid means you pay at the end of the month — the big carriers do this. Prepaid means you pay upfront for the next month — Mint, Boost, Cricket, Visible, and Consumer Cellular mostly work this way. Prepaid is usually cheaper and doesn\'t need a credit check.',
                },
                {
                  q: 'What\'s the best plan for someone who barely uses their phone?',
                  a: 'Lively Basic ($15/mo) if you mainly want calls and safety features. Consumer Cellular 1GB ($20/mo) if you want a real human to call when something breaks. Both use major networks and are built for seniors.',
                },
                {
                  q: 'Is there a catch with $15 plans?',
                  a: 'A few small ones: you usually pay for 3 – 12 months upfront to get the lowest price, support is mostly online (not in a store), and some don\'t support Apple Watch cellular. The network itself is the same as the big carrier — Mint uses T-Mobile\'s towers, US Mobile uses Verizon or T-Mobile\'s.',
                },
              ].map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg leading-tight">{f.q}</h3>
                    <p className="text-base leading-relaxed">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related links ──────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Keep going</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Tools and guides that pair well with picking a new phone plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <Link to="/tools/bill-negotiator" className="block space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Bill Negotiator
                  </h3>
                  <p className="text-base leading-relaxed">
                    A friendly script to call your current carrier and ask for a lower rate — before you switch.
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <Link to="/tools/my-first-smartphone" className="block space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    My First Smartphone
                  </h3>
                  <p className="text-base leading-relaxed">
                    If you&apos;re new to smartphones, start here. Plain-English setup walkthrough.
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <Link to="/guides?category=phone-guides" className="block space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Guides
                  </h3>
                  <p className="text-base leading-relaxed">
                    Step-by-step guides for calling, texting, porting numbers, and troubleshooting.
                  </p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Disclaimer footer ──────────────────────────────── */}
        <section className="border-t border-border bg-muted/40">
          <div className="container py-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
              Prices and plan details change often — always confirm on the carrier&apos;s website before
              signing up. TekSure doesn&apos;t take commissions from any carrier. This tool is for education,
              not a sales pitch.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────
 * QuestionCard — single-select radio question, used by 5 steps.
 * ────────────────────────────────────────────────────────────── */

interface QuestionCardProps<T extends string> {
  q: Question<T>;
  value: T | undefined;
  onChange: (v: T) => void;
}

function QuestionCard<T extends string>({ q, value, onChange }: QuestionCardProps<T>) {
  const Icon = q.icon;
  return (
    <Card>
      <CardContent className="p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">{q.title}</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-2">{q.subtitle}</p>
        </div>
        <RadioGroup
          value={value ?? ''}
          onValueChange={(v) => onChange(v as T)}
          className="gap-3"
        >
          {q.options.map((opt) => {
            const selected = value === opt.value;
            return (
              <Label
                key={opt.value}
                htmlFor={`${q.id}-${opt.value}`}
                className={`flex items-start gap-3 p-4 md:p-5 min-h-14 rounded-xl border-2 cursor-pointer transition-colors ${
                  selected ? 'border-primary bg-primary/10' : 'border-border hover:border-primary hover:bg-primary/5'
                }`}
              >
                <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} className="mt-1.5 w-5 h-5" />
                <div className="flex-1">
                  <div className="text-base md:text-lg font-medium">{opt.label}</div>
                  {opt.hint && (
                    <div className="text-sm text-muted-foreground leading-relaxed mt-1">{opt.hint}</div>
                  )}
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
