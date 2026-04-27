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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Gift,
  Heart,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ShoppingBag,
  AlertTriangle,
  HelpCircle,
  PackageOpen,
  CreditCard,
  Wrench,
  Star,
  HandMetal,
  Brain,
  ShieldCheck,
  Tv,
  Smartphone,
  Tablet,
  Speaker,
  Cable,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Tech Gift Guide
 * ------------------------------------------------------------
 * A senior-friendly gift recommender. Seven-question quiz,
 * deterministic scoring over a product catalog, and three
 * personalized recommendations with setup-difficulty, pros/cons,
 * and internal links to TekSure setup guides.
 * ────────────────────────────────────────────────────────────── */

/* ── Answer types ─────────────────────────────────────────────── */

type Recipient = 'parent' | 'grandparent' | 'spouse' | 'friend' | 'self';
type Comfort = 'new' | 'some' | 'comfortable';
type Problem = 'vision' | 'hearing' | 'dexterity' | 'memory' | 'none';
type Owns = 'smartphone' | 'tablet' | 'speaker' | 'tv' | 'none';
type Priority = 'contact' | 'safety' | 'entertainment' | 'health' | 'independence';
type Budget = 'under50' | 'mid' | 'high' | 'premium';
type Occasion = 'birthday' | 'holiday' | 'just_because';

interface Answers {
  recipient?: Recipient;
  comfort?: Comfort;
  problems: Problem[];
  owns: Owns[];
  priority?: Priority;
  budget?: Budget;
  occasion?: Occasion;
}

const EMPTY: Answers = { problems: [], owns: [] };

/* ── Product catalog ──────────────────────────────────────────── */

type SetupDifficulty = 'Easy' | 'Moderate' | 'Hands-on';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  budgetTiers: Budget[];
  setup: SetupDifficulty;
  pros: string[];
  cons: string[];
  /** Tags the recommender scores against. */
  tags: string[];
  /** Category the recipient already owning penalizes the pick. */
  duplicateOf?: Owns;
  guidePath?: string;
  whereToBuy: string;
}

const CATALOG: Product[] = [
  {
    id: 'grandpad',
    name: 'GrandPad',
    category: 'Simple tablet',
    price: '$200 device + $40/month',
    budgetTiers: ['mid', 'high'],
    setup: 'Easy',
    pros: [
      'Arrives pre-set-up by family — unbox and hand it over',
      'Six big buttons for calls, photos, email, and weather',
      'Built-in LTE, no home Wi-Fi needed',
      'Family can add contacts and photos remotely',
    ],
    cons: [
      'Monthly subscription is required to keep it working',
      'Locked to the GrandPad app store (no Facebook or games)',
      'Not a good fit if the recipient wants to explore apps freely',
    ],
    tags: ['new', 'contact', 'independence', 'vision', 'dexterity'],
    duplicateOf: 'tablet',
    whereToBuy: 'Search for "GrandPad" on GrandPad.net',
  },
  {
    id: 'jitterbug-smart',
    name: 'Lively Jitterbug Smart4',
    category: 'Simple smartphone',
    price: '$150',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'One-tap menu with big, clear text',
      'Urgent Response button connects to a live agent 24/7',
      'No contract — month-to-month service plans',
      'Voice-typing and a built-in magnifier',
    ],
    cons: [
      'Monthly Lively service plan is required',
      'Fewer apps than a regular iPhone or Samsung',
      'Smaller screen than an iPad or tablet',
    ],
    tags: ['new', 'contact', 'safety', 'vision', 'independence'],
    duplicateOf: 'smartphone',
    whereToBuy: 'Search for "Jitterbug Smart4" on Lively.com or Best Buy',
  },
  {
    id: 'echo-show-8',
    name: 'Amazon Echo Show 8',
    category: 'Smart display',
    price: '$120 – $150',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Big screen + speaker for video calls with family',
      'Hands-free — say "Alexa" and speak',
      'Shows photo slideshows from family when idle',
      'Sets reminders, plays music, reads the news',
    ],
    cons: [
      'Has to stay plugged in on a counter or nightstand',
      'Amazon account needed (free to make)',
      'Some privacy questions — microphone can be turned off',
    ],
    tags: ['new', 'some', 'contact', 'entertainment', 'dexterity', 'vision'],
    duplicateOf: 'speaker',
    guidePath: '/tools/voice-assistant-setup',
    whereToBuy: 'Search for "Echo Show 8" on Amazon or Best Buy',
  },
  {
    id: 'echo-show-5',
    name: 'Amazon Echo Show 5',
    category: 'Smart display',
    price: '$60 – $90',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Perfect bedside clock and alarm',
      'Small footprint for a nightstand',
      'Video calls, weather, and reminders in one gift',
      'Great stepping-stone before a bigger smart device',
    ],
    cons: [
      '5-inch screen is small for video calls',
      'Amazon account required',
      'Audio is modest — fine for news, less so for music',
    ],
    tags: ['new', 'entertainment', 'contact'],
    duplicateOf: 'speaker',
    guidePath: '/tools/voice-assistant-setup',
    whereToBuy: 'Search for "Echo Show 5" on Amazon',
  },
  {
    id: 'ipad-10',
    name: 'iPad (10th generation)',
    category: 'Tablet',
    price: '$349 – $449',
    budgetTiers: ['high'],
    setup: 'Moderate',
    pros: [
      'Large, high-contrast screen — great for low vision',
      'Built-in Magnifier, VoiceOver, and large text options',
      'FaceTime video calls with family',
      'Huge app library (news, puzzles, audiobooks)',
    ],
    cons: [
      'Apple ID setup is a hurdle for first-timers',
      'Can feel overwhelming without guided onboarding',
      'A case and stand are worth the extra $40',
    ],
    tags: ['some', 'comfortable', 'entertainment', 'contact', 'vision', 'dexterity'],
    duplicateOf: 'tablet',
    whereToBuy: 'Search for "iPad 10th gen" on Apple or Best Buy',
  },
  {
    id: 'ipad-air',
    name: 'iPad Air + Smart Keyboard',
    category: 'Tablet + keyboard',
    price: '$600 – $750',
    budgetTiers: ['premium'],
    setup: 'Moderate',
    pros: [
      'Bigger, brighter screen than a base iPad',
      'Keyboard makes email and long messages painless',
      'Works well with Apple Pencil for handwriting',
      'Years of updates ahead',
    ],
    cons: [
      'Price adds up once you include the keyboard',
      'Apple ID setup takes patience',
      'Overkill if recipient is a casual user',
    ],
    tags: ['comfortable', 'entertainment', 'contact', 'independence'],
    duplicateOf: 'tablet',
    whereToBuy: 'Search for "iPad Air" on Apple.com',
  },
  {
    id: 'fire-hd',
    name: 'Fire HD 10 Tablet + Stand',
    category: 'Tablet',
    price: '$140 – $170',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Low price — good for a first tablet',
      'Show Mode turns it into an Alexa display when docked',
      'Easy access to Kindle books, Audible, and Prime Video',
      'Large screen with adjustable text size',
    ],
    cons: [
      'Limited Google Play store access out of the box',
      'Amazon account required',
      'Lower screen quality than iPad',
    ],
    tags: ['new', 'entertainment', 'dexterity', 'vision'],
    duplicateOf: 'tablet',
    whereToBuy: 'Search for "Fire HD 10" on Amazon',
  },
  {
    id: 'meta-smart-glasses',
    name: 'Meta Ray-Ban Smart Glasses',
    category: 'Smart glasses',
    price: '$299 – $379',
    budgetTiers: ['high'],
    setup: 'Moderate',
    pros: [
      'Built-in camera for hands-free photos and videos',
      'Speakers and microphones let you take calls without a phone',
      '"Hey Meta" can describe what you are looking at',
      'Looks like regular glasses — no special-device stigma',
    ],
    cons: [
      'Battery lasts about 4 hours of active use',
      'Requires a smartphone to set up',
      'Privacy questions when worn around others',
    ],
    tags: ['comfortable', 'independence', 'vision'],
    whereToBuy: 'Search for "Meta Ray-Ban Smart Glasses" at Ray-Ban, Best Buy, or LensCrafters',
  },
  {
    id: 'big-button-phone',
    name: 'Large-Button Corded Phone',
    category: 'Landline phone',
    price: '$35 – $60',
    budgetTiers: ['under50', 'mid'],
    setup: 'Easy',
    pros: [
      'Huge number buttons and oversized text',
      'Loud, amplified ringer',
      'Speed-dial buttons for family photos',
      'No smartphone or Wi-Fi needed',
    ],
    cons: [
      'Requires an existing landline (or a cable phone line)',
      'Limited to phone calls — no texts or video',
      'Cord tethers the phone to one spot',
    ],
    tags: ['new', 'vision', 'hearing', 'contact', 'safety'],
    whereToBuy: 'Search for "Clarity XLC3.4" or "AT&T big button phone" on Amazon or Walmart',
  },
  {
    id: 'tv-ears',
    name: 'TV Ears Digital Wireless',
    category: 'TV listening headset',
    price: '$130 – $170',
    budgetTiers: ['mid'],
    setup: 'Moderate',
    pros: [
      'Lets one person turn up the volume without blasting the room',
      'Voice-clarifying tuning for speech over music',
      'No Bluetooth pairing — works with any TV',
      'A favorite for spouses with different hearing needs',
    ],
    cons: [
      'Headset has to be charged in its base',
      'Connecting to a modern TV takes a short setup',
      'Less useful for surround-sound systems',
    ],
    tags: ['hearing', 'entertainment', 'independence'],
    whereToBuy: 'Search for "TV Ears" on Amazon or at Best Buy',
  },
  {
    id: 'sennheiser-rs-120',
    name: 'Sennheiser RS 120-W TV Listener',
    category: 'TV listening headphones',
    price: '$200 – $250',
    budgetTiers: ['high'],
    setup: 'Moderate',
    pros: [
      'Comfortable over-ear headphones',
      'Strong speech-clarity setting',
      'Long range — works across the living room',
      'Charges on an included stand',
    ],
    cons: [
      'Pricier than TV Ears',
      'Headphones over hearing aids can be awkward',
      'Needs an audio-output cable to the TV',
    ],
    tags: ['hearing', 'entertainment'],
    whereToBuy: 'Search for "Sennheiser RS 120-W" on Sennheiser.com or Amazon',
  },
  {
    id: 'captioncall',
    name: 'CaptionCall Amplified Phone',
    category: 'Captioning landline',
    price: 'Free for qualifying adults (federally funded)',
    budgetTiers: ['under50', 'mid'],
    setup: 'Moderate',
    pros: [
      'Shows live captions of every call on a big screen',
      'Amplified speaker for hard-of-hearing callers',
      'No monthly fee — funded through a federal program',
      'Professional installer sets it up in-home',
    ],
    cons: [
      'Requires a hearing-related certification from an audiologist or doctor',
      'Takes 1–2 weeks to ship and install',
      'Needs home internet',
    ],
    tags: ['hearing', 'contact', 'safety', 'independence'],
    whereToBuy: 'Search for "CaptionCall phone" at CaptionCall.com',
  },
  {
    id: 'reminder-rosie',
    name: 'Reminder Rosie Voice Clock',
    category: 'Reminder clock',
    price: '$130',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Records reminders in your own voice (or a family member\'s)',
      'No internet or smartphone needed',
      'Great for dementia and memory concerns',
      'Large-numeral clock face',
    ],
    cons: [
      'No screen or app — audio only',
      'Limited to 25 reminders',
      'Not waterproof or portable',
    ],
    tags: ['memory', 'health', 'independence', 'new'],
    whereToBuy: 'Search for "Reminder Rosie" on Amazon',
  },
  {
    id: 'medminder',
    name: 'MedMinder Pill Dispenser',
    category: 'Automatic pill dispenser',
    price: '$50/month subscription',
    budgetTiers: ['mid', 'high'],
    setup: 'Moderate',
    pros: [
      'Beeps and flashes at dose time',
      'Locks to keep pills safe between doses',
      'Alerts family if a dose is missed',
      'Cellular — no Wi-Fi required',
    ],
    cons: [
      'Monthly subscription',
      'Family sets up the schedule online',
      'Bulky on a countertop',
    ],
    tags: ['memory', 'health', 'safety', 'new'],
    whereToBuy: 'Search for "MedMinder" at MedMinder.com',
  },
  {
    id: 'hero-dispenser',
    name: 'Hero Pill Dispenser',
    category: 'Automatic pill dispenser',
    price: '$45/month + $100 startup',
    budgetTiers: ['high'],
    setup: 'Hands-on',
    pros: [
      'Holds up to 10 medications at once',
      'Automatically dispenses the right dose on time',
      'App alerts family if a dose is missed',
      '24/7 support line',
    ],
    cons: [
      'Requires a family member to load it monthly',
      'Needs home Wi-Fi',
      'Higher up-front price than a weekly pill box',
    ],
    tags: ['memory', 'health', 'safety', 'independence'],
    guidePath: '/tools/medication-reminder-setup',
    whereToBuy: 'Search for "Hero Health" at HeroHealth.com',
  },
  {
    id: 'apple-watch-se',
    name: 'Apple Watch SE (45mm)',
    category: 'Smartwatch',
    price: '$249 – $279',
    budgetTiers: ['high'],
    setup: 'Moderate',
    pros: [
      'Fall detection and Emergency SOS built in',
      'Heart-rate monitoring and activity rings',
      'Sends texts and calls from the wrist',
      'Medication reminders and hearing checks',
    ],
    cons: [
      'Requires an iPhone to set up',
      'Needs a daily charge',
      'Small screen for reading',
    ],
    tags: ['comfortable', 'some', 'health', 'safety', 'contact'],
    guidePath: '/tools/apple-watch-setup',
    whereToBuy: 'Search for "Apple Watch SE" on Apple.com or Best Buy',
  },
  {
    id: 'fitbit-sense',
    name: 'Fitbit Sense 2',
    category: 'Fitness tracker',
    price: '$200 – $250',
    budgetTiers: ['high'],
    setup: 'Moderate',
    pros: [
      'Tracks steps, sleep, and heart rate',
      'Skin-temperature and stress sensors',
      'Works with iPhone OR Android',
      '6-day battery on a charge',
    ],
    cons: [
      'Some advanced features need Fitbit Premium',
      'Smaller ecosystem than Apple Watch',
      'Fall detection is limited compared to Apple',
    ],
    tags: ['some', 'comfortable', 'health', 'independence'],
    whereToBuy: 'Search for "Fitbit Sense 2" on Fitbit.com or Amazon',
  },
  {
    id: 'kardia-ecg',
    name: 'KardiaMobile 6L ECG',
    category: 'Personal ECG monitor',
    price: '$150',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Medical-grade 6-lead ECG in 30 seconds',
      'Detects AFib, bradycardia, and tachycardia',
      'Share results with a doctor by email or PDF',
      'No monthly fee for the basic version',
    ],
    cons: [
      'Pairs over Bluetooth — occasional fussiness',
      'A premium plan ($10/month) unlocks more alerts',
      'Does not monitor continuously',
    ],
    tags: ['some', 'comfortable', 'health'],
    whereToBuy: 'Search for "KardiaMobile 6L" on AliveCor.com or Amazon',
  },
  {
    id: 'roku-streaming-stick',
    name: 'Roku Streaming Stick 4K',
    category: 'TV streaming device',
    price: '$40 – $50',
    budgetTiers: ['under50', 'mid'],
    setup: 'Easy',
    pros: [
      'Turns any HDMI TV into a smart TV',
      'Simple remote with voice search',
      'Free channels: Roku Channel, PBS, Pluto TV, News',
      'No subscription required to use Roku itself',
    ],
    cons: [
      'Netflix, Hulu, and similar apps still cost extra',
      'Small remote is a common household loss',
      'Wi-Fi setup takes a Wi-Fi password',
    ],
    tags: ['new', 'some', 'entertainment'],
    duplicateOf: 'tv',
    whereToBuy: 'Search for "Roku Streaming Stick 4K" on Amazon, Target, or Walmart',
  },
  {
    id: 'kindle-paperwhite',
    name: 'Kindle Paperwhite',
    category: 'E-reader',
    price: '$140 – $170',
    budgetTiers: ['mid'],
    setup: 'Easy',
    pros: [
      'Glare-free screen reads like real paper',
      'Adjustable text size — huge win for aging eyes',
      'Weeks of battery life',
      'Waterproof for the bathtub or beach',
    ],
    cons: [
      'Black-and-white only — magazines and comics lose color',
      'Amazon account required',
      'No web browsing or apps',
    ],
    tags: ['new', 'some', 'entertainment', 'vision'],
    whereToBuy: 'Search for "Kindle Paperwhite" on Amazon',
  },
  {
    id: 'big-smart-tv',
    name: '65" Smart TV (TCL / Samsung / LG)',
    category: 'Smart TV',
    price: '$500 – $800',
    budgetTiers: ['premium'],
    setup: 'Moderate',
    pros: [
      'Bigger picture helps anyone with low vision',
      'Apps for Netflix, YouTube, PBS, and news built in',
      'Voice remote on most 2024+ models',
      'Replaces a cable box for many families',
    ],
    cons: [
      'A lot of menus — can be overwhelming at first',
      'Wall mounting or furniture may need adjusting',
      'Accounts and apps multiply quickly',
    ],
    tags: ['comfortable', 'entertainment', 'vision'],
    duplicateOf: 'tv',
    guidePath: '/tools/smart-tv-setup',
    whereToBuy: 'Search for "65 inch smart TV" at Best Buy, Costco, or Walmart',
  },
  {
    id: 'ring-doorbell',
    name: 'Ring Video Doorbell',
    category: 'Smart doorbell',
    price: '$100 – $180',
    budgetTiers: ['mid'],
    setup: 'Moderate',
    pros: [
      'See who is at the door from a phone, tablet, or Echo Show',
      'Two-way talk — reply without opening the door',
      'Motion alerts for packages and visitors',
      'Peace of mind for anyone who lives alone',
    ],
    cons: [
      'Cloud recording needs a Ring Protect plan ($4/month)',
      'Needs strong Wi-Fi near the front door',
      'Either battery (charge every few months) or hardwire install',
    ],
    tags: ['some', 'safety', 'independence'],
    whereToBuy: 'Search for "Ring Video Doorbell" on Amazon, Best Buy, or Ring.com',
  },
  {
    id: 'eufy-camera',
    name: 'Eufy Indoor Camera 2K',
    category: 'Indoor camera',
    price: '$40 – $60',
    budgetTiers: ['under50', 'mid'],
    setup: 'Moderate',
    pros: [
      'Watch the house from a phone anywhere',
      'Local storage — no required monthly fee',
      'Two-way talk',
      'Affordable for a starter camera',
    ],
    cons: [
      'Setup involves Wi-Fi and an app',
      'Privacy considerations — place carefully',
      'Cloud features cost extra',
    ],
    tags: ['some', 'comfortable', 'safety', 'independence'],
    whereToBuy: 'Search for "Eufy Indoor Cam 2K" on Amazon or Best Buy',
  },
  {
    id: 'gps-smartwatch',
    name: 'Medical Guardian MGMove Smartwatch',
    category: 'Medical alert watch',
    price: '$200 device + $40/month',
    budgetTiers: ['high'],
    setup: 'Easy',
    pros: [
      'One-button SOS with a live agent, 24/7',
      'Built-in GPS — agent can find the wearer',
      'Step tracker, weather, and reminders',
      'Looks like a normal smartwatch',
    ],
    cons: [
      'Monitoring subscription required',
      'Battery lasts about a day and a half',
      'Smaller app library than Apple Watch',
    ],
    tags: ['new', 'some', 'safety', 'health', 'independence'],
    whereToBuy: 'Search for "Medical Guardian MGMove" at MedicalGuardian.com',
  },
  {
    id: 'philips-hue-starter',
    name: 'Philips Hue Smart Bulb Starter Kit',
    category: 'Smart lighting',
    price: '$100 – $180',
    budgetTiers: ['mid'],
    setup: 'Moderate',
    pros: [
      'Voice-controlled lighting — "Alexa, turn on the living room"',
      'Schedules help with routine and sundowning',
      'Dim or brighten without standing up',
      'Works with Alexa, Google, and Siri',
    ],
    cons: [
      'Requires a Hue Bridge for best performance',
      'Pricier than basic smart bulbs',
      'Most useful if a smart speaker is already in the house',
    ],
    tags: ['some', 'comfortable', 'independence', 'dexterity'],
    whereToBuy: 'Search for "Philips Hue starter kit" on Amazon or Best Buy',
  },
  {
    id: 'echo-buds',
    name: 'Amazon Echo Buds (3rd gen)',
    category: 'Wireless earbuds',
    price: '$40 – $50',
    budgetTiers: ['under50', 'mid'],
    setup: 'Moderate',
    pros: [
      'Noise-reducing — good for phone calls in a loud room',
      'Works with Alexa in the ear',
      'USB-C charging case',
      'Budget-friendly first wireless earbuds',
    ],
    cons: [
      'Fit can be fussy for small ears',
      'Not medical-grade hearing aids',
      'Pair-over-Bluetooth setup can confuse first-timers',
    ],
    tags: ['some', 'entertainment', 'contact'],
    whereToBuy: 'Search for "Amazon Echo Buds" on Amazon',
  },
  {
    id: 'tp-link-smart-plugs',
    name: 'TP-Link Kasa Smart Plug 4-Pack',
    category: 'Smart plugs',
    price: '$30 – $40',
    budgetTiers: ['under50'],
    setup: 'Moderate',
    pros: [
      'Turn lamps or a coffee maker on/off by voice',
      'Schedules work even when no one is home',
      '4-pack covers most of a small living room',
      'Works with Alexa, Google, and Apple Home',
    ],
    cons: [
      'Requires 2.4GHz Wi-Fi (not 5GHz)',
      'App setup is the tricky part',
      'Best paired with a smart speaker',
    ],
    tags: ['some', 'comfortable', 'independence', 'dexterity'],
    whereToBuy: 'Search for "Kasa Smart Plug 4-pack" on Amazon',
  },
  {
    id: 'chipolo-tracker',
    name: 'Chipolo Bluetooth Tracker',
    category: 'Key/wallet tracker',
    price: '$25 – $35',
    budgetTiers: ['under50'],
    setup: 'Easy',
    pros: [
      'Attaches to keys, wallet, or purse',
      'Phone app rings the tracker (or vice versa)',
      'Works with Apple Find My OR Google Find My Device',
      'Replaceable battery lasts a year',
    ],
    cons: [
      'Needs a phone to do the finding',
      'Bluetooth range is about 200 feet',
      'A noisy app tone for people with hearing loss',
    ],
    tags: ['new', 'some', 'memory', 'safety', 'dexterity'],
    whereToBuy: 'Search for "Chipolo ONE" on Chipolo.net, Amazon, or Best Buy',
  },
  {
    id: 'ipad-stylus',
    name: 'Logitech Crayon Stylus (for iPad)',
    category: 'iPad stylus',
    price: '$55 – $70',
    budgetTiers: ['under50', 'mid'],
    setup: 'Easy',
    pros: [
      'Thicker grip than a finger — easier for tremor or arthritis',
      'No pairing — clip on, twist on, start writing',
      'Great for photo markup, signing PDFs, crosswords',
      'Holds a charge for about 7 hours',
    ],
    cons: [
      'iPad only (not iPhone, not Android)',
      'Pricey for what it does',
      'Tip can wear down over years of use',
    ],
    tags: ['comfortable', 'dexterity', 'independence'],
    duplicateOf: 'tablet',
    whereToBuy: 'Search for "Logitech Crayon" on Apple.com or Best Buy',
  },
  {
    id: 'good-earbuds',
    name: 'JBL Tune 510BT Headphones',
    category: 'Wireless headphones',
    price: '$35 – $50',
    budgetTiers: ['under50', 'mid'],
    setup: 'Easy',
    pros: [
      'Over-ear pads are comfortable for hours',
      'Works with any phone, tablet, or laptop over Bluetooth',
      '40-hour battery life',
      'One button for calls',
    ],
    cons: [
      'Bluetooth pairing is a first-time hurdle',
      'Not noise-cancelling',
      'Hard case not included',
    ],
    tags: ['new', 'some', 'entertainment'],
    whereToBuy: 'Search for "JBL Tune 510BT" on Amazon, Best Buy, or Target',
  },
  {
    id: 'charging-kit',
    name: 'Anker Charging Cable & Adapter Kit',
    category: 'Charging bundle',
    price: '$20 – $30',
    budgetTiers: ['under50'],
    setup: 'Easy',
    pros: [
      'Cables for every device in the house',
      'Fast-charging wall adapter included',
      'Replaces frayed or off-brand cables (a safety win)',
      'Nice gift to pair with any electronic',
    ],
    cons: [
      'Not a "wow" gift on its own',
      'Check whether the recipient uses USB-C or Lightning',
      'Cables get lost over time',
    ],
    tags: ['new', 'some', 'independence'],
    whereToBuy: 'Search for "Anker charging cable kit" on Amazon',
  },
];

/* ── Recommendation scoring ──────────────────────────────────── */

function matchesBudget(p: Product, b?: Budget): boolean {
  if (!b) return true;
  return p.budgetTiers.includes(b);
}

function score(p: Product, a: Answers): number {
  let s = 0;
  // Primary priority match (heavy weight)
  if (a.priority && p.tags.includes(a.priority)) s += 12;
  // Comfort level match
  if (a.comfort && p.tags.includes(a.comfort)) s += 6;
  // Each declared problem it accommodates
  for (const prob of a.problems) {
    if (prob === 'none') continue;
    if (p.tags.includes(prob)) s += 8;
  }
  // Budget fit
  if (matchesBudget(p, a.budget)) {
    s += 7;
  } else {
    s -= 10;
  }
  // Penalty: recipient already owns one of these
  if (p.duplicateOf && a.owns.includes(p.duplicateOf)) s -= 14;
  // Low-comfort bonus for Easy setup
  if (a.comfort === 'new' && p.setup === 'Easy') s += 3;
  // Comfortable recipients can handle Moderate/Hands-on
  if (a.comfort === 'comfortable' && p.setup !== 'Easy') s += 2;
  return s;
}

function recommend(a: Answers): Product[] {
  const scored = CATALOG.map((p) => ({ p, s: score(p, a) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  // Enforce variety: take top scorer, then prefer different categories for #2 and #3
  const picks: Product[] = [];
  const seenCategories = new Set<string>();
  for (const { p } of scored) {
    if (picks.length >= 3) break;
    if (seenCategories.has(p.category) && picks.length > 0) continue;
    picks.push(p);
    seenCategories.add(p.category);
  }
  // Fallback — if we filtered too aggressively, fill from top scored
  if (picks.length < 3) {
    for (const { p } of scored) {
      if (picks.includes(p)) continue;
      picks.push(p);
      if (picks.length >= 3) break;
    }
  }
  return picks;
}

function reasonFor(p: Product, a: Answers): string {
  const parts: string[] = [];
  // Priority alignment
  if (a.priority === 'contact' && p.tags.includes('contact')) {
    parts.push('Because staying in touch is the top goal, this one makes calling and seeing family feel effortless.');
  } else if (a.priority === 'safety' && p.tags.includes('safety')) {
    parts.push('Since safety is the priority, this device adds a real safety net without taking away independence.');
  } else if (a.priority === 'entertainment' && p.tags.includes('entertainment')) {
    parts.push('This one is built around everyday entertainment — easy to pick up, hard to put down.');
  } else if (a.priority === 'health' && p.tags.includes('health')) {
    parts.push('It supports daily health habits without feeling like a medical device.');
  } else if (a.priority === 'independence' && p.tags.includes('independence')) {
    parts.push('It quietly supports independence — no hovering required.');
  } else {
    parts.push('A strong match for the answers you gave.');
  }
  // Comfort tie-in
  if (a.comfort === 'new' && p.setup === 'Easy') {
    parts.push('Setup is the Easy tier, which matters if the recipient is new to tech.');
  } else if (a.comfort === 'comfortable') {
    parts.push('The recipient is tech-comfortable, so the extra features here will not go to waste.');
  }
  // Problem tie-in (first matched)
  for (const prob of a.problems) {
    if (prob === 'vision' && p.tags.includes('vision')) {
      parts.push('Big screen or large text works well for vision concerns.');
      break;
    }
    if (prob === 'hearing' && p.tags.includes('hearing')) {
      parts.push('Built with hearing loss in mind.');
      break;
    }
    if (prob === 'dexterity' && p.tags.includes('dexterity')) {
      parts.push('Hands-free or oversized controls help with dexterity issues.');
      break;
    }
    if (prob === 'memory' && p.tags.includes('memory')) {
      parts.push('Designed to support memory — reminders and prompts are baked in.');
      break;
    }
  }
  return parts.join(' ');
}

/* ── UI: quiz step copy ──────────────────────────────────────── */

interface QuestionDef {
  key: keyof Answers;
  question: string;
  icon: LucideIcon;
  kind: 'single' | 'multi';
  options: { value: string; label: string; description?: string }[];
}

const QUESTIONS: QuestionDef[] = [
  {
    key: 'recipient',
    question: 'Who is the gift for?',
    icon: Heart,
    kind: 'single',
    options: [
      { value: 'parent', label: 'A parent' },
      { value: 'grandparent', label: 'A grandparent' },
      { value: 'spouse', label: 'A spouse or partner' },
      { value: 'friend', label: 'A friend' },
      { value: 'self', label: 'Myself' },
    ],
  },
  {
    key: 'comfort',
    question: 'How comfortable are they with technology?',
    icon: Sparkles,
    kind: 'single',
    options: [
      { value: 'new', label: 'New to tech', description: 'Finds smartphones and tablets frustrating' },
      { value: 'some', label: 'Some experience', description: 'Can text, browse, and video-call with patience' },
      { value: 'comfortable', label: 'Pretty comfortable', description: 'Downloads apps and explores on their own' },
    ],
  },
  {
    key: 'problems',
    question: 'Any of these come up for them? (Pick all that apply)',
    icon: ShieldCheck,
    kind: 'multi',
    options: [
      { value: 'vision', label: 'Vision — trouble reading small text' },
      { value: 'hearing', label: 'Hearing — misses parts of conversations or TV' },
      { value: 'dexterity', label: 'Dexterity — arthritis, tremor, or weaker grip' },
      { value: 'memory', label: 'Memory — forgets appointments or medications' },
      { value: 'none', label: 'None really' },
    ],
  },
  {
    key: 'owns',
    question: 'What do they already own? (Pick all that apply)',
    icon: PackageOpen,
    kind: 'multi',
    options: [
      { value: 'smartphone', label: 'A smartphone' },
      { value: 'tablet', label: 'A tablet (iPad, Fire, etc.)' },
      { value: 'speaker', label: 'A smart speaker (Echo, Nest, HomePod)' },
      { value: 'tv', label: 'A smart TV or streaming stick' },
      { value: 'none', label: 'None of the above' },
    ],
  },
  {
    key: 'priority',
    question: 'What matters most for this gift?',
    icon: Star,
    kind: 'single',
    options: [
      { value: 'contact', label: 'Staying in touch with family' },
      { value: 'safety', label: 'Safety and peace of mind' },
      { value: 'entertainment', label: 'Entertainment (music, books, TV)' },
      { value: 'health', label: 'Health and wellness' },
      { value: 'independence', label: 'Independence at home' },
    ],
  },
  {
    key: 'budget',
    question: 'What is your budget?',
    icon: CreditCard,
    kind: 'single',
    options: [
      { value: 'under50', label: 'Under $50' },
      { value: 'mid', label: '$50 – $150' },
      { value: 'high', label: '$150 – $400' },
      { value: 'premium', label: '$400 and up' },
    ],
  },
  {
    key: 'occasion',
    question: 'What is the occasion?',
    icon: Gift,
    kind: 'single',
    options: [
      { value: 'birthday', label: 'Birthday' },
      { value: 'holiday', label: 'Holiday' },
      { value: 'just_because', label: '"Just because"' },
    ],
  },
];

/* ── Stocking stuffers ───────────────────────────────────────── */

interface StockingStuffer {
  name: string;
  price: string;
  blurb: string;
  icon: LucideIcon;
}

const STOCKING_STUFFERS: StockingStuffer[] = [
  {
    name: 'Cable organizer pouch',
    price: '$8 – $15',
    blurb: 'Keeps chargers, adapters, and earbuds in one place when traveling.',
    icon: Cable,
  },
  {
    name: 'Adjustable phone stand',
    price: '$12 – $20',
    blurb: 'Turns any counter into a hands-free video-call setup.',
    icon: Smartphone,
  },
  {
    name: 'USB-C fast charging cube',
    price: '$10 – $18',
    blurb: 'A modern replacement for the slow brick that came in the box years ago.',
    icon: CreditCard,
  },
  {
    name: 'Microfiber screen cloths (pack)',
    price: '$8 – $12',
    blurb: 'Tucks in a pocket or drawer — keeps glasses and screens smudge-free.',
    icon: Sparkles,
  },
  {
    name: 'Stylus pen for touchscreens',
    price: '$10 – $15',
    blurb: 'Easier than a fingertip for arthritis or long nails. Works on any touchscreen.',
    icon: PackageOpen,
  },
  {
    name: 'Screen cleaning spray kit',
    price: '$10 – $15',
    blurb: 'Safe for laptop, tablet, and TV screens. No vinegar, no streaks.',
    icon: ShieldCheck,
  },
  {
    name: 'USB-C hub (multi-port)',
    price: '$18 – $25',
    blurb: 'Adds USB-A, HDMI, and an SD slot to any modern laptop or iPad.',
    icon: Cable,
  },
  {
    name: 'Silicone phone grip',
    price: '$10 – $15',
    blurb: 'Gives a sturdier hold for anyone worried about dropping their phone.',
    icon: HandMetal,
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What if they say they hate technology?',
    a: 'Start with something that solves a real, specific problem — an amplified phone, a big-button remote, a Kindle with huge text. Skip "general-purpose" tech (tablets, smart speakers) until they have had a small win. A gift that solves a daily irritation is warmer than a gift that promises to teach them something new.',
  },
  {
    q: 'How do I avoid the "restaurant AirPod" problem — a gift that sits in the box?',
    a: 'Pair the gift with a concrete plan. Include a handwritten card that says "I will be over on Sunday at 2 to set this up with you." Gifts with a scheduled setup session get used 3x more often than gifts left alone.',
  },
  {
    q: 'Refurbished vs. new?',
    a: 'Apple-certified refurbished is a strong value — same warranty, same packaging, 10-20% less. For Android tablets and streaming sticks, new is usually worth it because the price difference is small. Avoid Amazon "used — like new" listings for anything with a battery.',
  },
  {
    q: 'Is it rude to give something that needs setup?',
    a: 'Not if you plan to set it up together. What feels rude is handing over a box and walking away. Think of it like gifting a board game — the fun starts when you sit down and play the first round together.',
  },
  {
    q: 'Is there an age where people stop wanting new tech?',
    a: 'Not really — there is an age where people stop wanting *bad* tech. A device that respects the recipient\'s time and patience is welcome at any age. Simple beats new.',
  },
  {
    q: 'My parent has dementia — what is safe to gift?',
    a: 'Stick to single-purpose devices: Reminder Rosie, a big-button phone, a large-numeral clock. Avoid anything with a full app store or frequent password prompts. Pair with a printed note explaining what the device does.',
  },
];

/* ── Setup-difficulty badge color helper ─────────────────────── */

function difficultyClass(d: SetupDifficulty): string {
  if (d === 'Easy') return 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40';
  if (d === 'Moderate') return 'bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 border-amber-500/40';
  return 'bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border-rose-500/40';
}

/* ── Main component ──────────────────────────────────────────── */

export default function TechGiftGuide() {
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [step, setStep] = useState<number>(-1); // -1 = intro; 0..N-1 = question; N = results
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
      const next = hasIt ? current.filter((v) => v !== value) : [...current, value];
      return { ...a, [key]: next } as Answers;
    });
  };

  const currentQ = step >= 0 && step < totalSteps ? QUESTIONS[step] : null;
  const progress = step < 0 ? 0 : Math.round(((step + 1) / (totalSteps + 1)) * 100);

  const canAdvance = useMemo(() => {
    if (!currentQ) return false;
    const val = answers[currentQ.key];
    if (currentQ.kind === 'single') return typeof val === 'string' && val.length > 0;
    return Array.isArray(val) && val.length > 0;
  }, [currentQ, answers]);

  return (
    <>
      <SEOHead
        title="Tech Gift Guide for Seniors — Find a Gift They'll Actually Use"
        description="A personalized tech gift recommender for buying for a parent, grandparent, spouse, or friend. Answer seven quick questions and get three gift ideas with setup difficulty, pros, cons, and where to buy."
        path="/tools/tech-gift-guide"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero — warm coral/rose gradient */}
        <section className="relative border-b border-border bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 dark:from-rose-950/30 dark:via-orange-950/20 dark:to-amber-950/20">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="tech-gift-guide"
                title="Tech Gift Guide"
                url="/tools/tech-gift-guide"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-sm">
                <Gift className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs">
                Gifts &middot; Personalized Recommender
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 bg-gradient-to-br from-rose-700 via-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-rose-300 dark:via-orange-300 dark:to-amber-300">
              Tech Gifts They&apos;ll Actually Use
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Skip the clutter. Get something they&apos;ll pick up every day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {step < 0 && (
                <Button size="lg" onClick={start} className="gap-2 text-base min-h-14">
                  Start the 7-question quiz
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
          {/* Progress bar */}
          {step >= 0 && (
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between text-sm md:text-base text-muted-foreground">
                <span>
                  {step < totalSteps
                    ? `Question ${step + 1} of ${totalSteps}`
                    : 'Your recommendations'}
                </span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" aria-label="Quiz progress" />
            </div>
          )}

          {/* Intro card */}
          {step < 0 && (
            <Card>
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">How this works</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      Answer seven quick questions about who the gift is for, what they already own, and what matters most.
                      We&apos;ll pick three tech gifts that fit their life — with setup difficulty, pros, cons, and a link to our setup guide when we have one.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 1</div>
                    <div className="text-base">Tell us about the recipient</div>
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 2</div>
                    <div className="text-base">Share what they own and what matters most</div>
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Step 3</div>
                    <div className="text-base">Get three gift picks tied to your answers</div>
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

          {/* Quiz question */}
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

                <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                  {currentQ.question}
                </h2>

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
                    {step === totalSteps - 1 ? 'See recommendations' : 'Next'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results */}
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
                        Based on your seven answers, here are three gift ideas worth a closer look.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6">
                {picks.map((p, i) => (
                  <Card key={p.id} className="overflow-hidden">
                    <CardContent className="p-6 md:p-8 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                            {i + 1}
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{p.category}</div>
                            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{p.name}</h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-sm">{p.price}</Badge>
                          <Badge variant="outline" className={`text-sm ${difficultyClass(p.setup)}`}>
                            Setup: {p.setup}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-base md:text-lg leading-relaxed">{reasonFor(p, answers)}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-xl border border-green-600/40 bg-green-50/40 dark:bg-green-950/20 p-4">
                          <h4 className="font-semibold text-base mb-2 flex items-center gap-2 text-green-800 dark:text-green-300">
                            <CheckCircle2 className="w-5 h-5" />
                            Pros
                          </h4>
                          <ul className="space-y-1.5">
                            {p.pros.map((pro) => (
                              <li key={pro} className="text-base leading-relaxed flex gap-2">
                                <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">+</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 p-4">
                          <h4 className="font-semibold text-base mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-300">
                            <XCircle className="w-5 h-5" />
                            Cons
                          </h4>
                          <ul className="space-y-1.5">
                            {p.cons.map((con) => (
                              <li key={con} className="text-base leading-relaxed flex gap-2">
                                <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">−</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {p.guidePath && (
                          <Button asChild size="lg" className="gap-2 text-base">
                            <Link to={p.guidePath}>
                              <Wrench className="w-5 h-5" />
                              Our setup guide
                            </Link>
                          </Button>
                        )}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-base">
                          <ShoppingBag className="w-5 h-5 text-muted-foreground" />
                          <span>{p.whereToBuy}</span>
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
                  <Link to="/get-help">
                    <Wrench className="w-5 h-5" />
                    Book a setup session
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Gift cards section */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <CreditCard className="w-7 h-7 text-primary" />
              Not sure? These are always a hit
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Gift cards give the recipient full control and zero guilt about returns. A card paired with
              a handwritten note is a warmer gift than most boxes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Apple Gift Card', blurb: 'Covers App Store, iCloud storage, Apple Music, and Apple TV — works on iPhone, iPad, and Mac.' },
                { name: 'Google Play Gift Card', blurb: 'Perfect for Android users — apps, books, audiobooks, and movies all in one place.' },
                { name: 'Amazon Gift Card', blurb: 'The universal backup — Kindle books, accessories, household staples.' },
                { name: 'Best Buy Gift Card', blurb: 'Great when the recipient wants in-person help picking out a device.' },
                { name: 'Target or Walmart', blurb: 'Lets the recipient combine tech, groceries, and household items in one trip.' },
                { name: 'TekSure Setup Session', blurb: 'Pair any gift with a setup session booked through /get-help — the most useful gift card of all.' },
              ].map((gc) => (
                <Card key={gc.name}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      {gc.name}
                    </h3>
                    <p className="text-base leading-relaxed">{gc.blurb}</p>
                    {gc.name === 'TekSure Setup Session' && (
                      <Link to="/get-help" className="inline-flex items-center gap-1 text-primary underline font-medium text-base">
                        Book a session <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Don't get these as surprises */}
        <section className="container py-10 md:py-14">
          <Alert className="border-rose-500/40 bg-rose-50/40 dark:bg-rose-950/20">
            <AlertTriangle className="w-5 h-5 text-rose-700 dark:text-rose-400" />
            <AlertTitle className="text-xl md:text-2xl font-semibold text-rose-900 dark:text-rose-200">
              Don&apos;t get these as surprises
            </AlertTitle>
            <AlertDescription className="text-base md:text-lg leading-relaxed text-foreground">
              <p className="mt-2 mb-3">
                A few gifts sound great on paper and cause real headaches when unwrapped. Ask the recipient first before giving any of these.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong>A new phone.</strong> Transferring a phone number, contacts, and apps is a multi-hour job. Almost no one enjoys it as a surprise.
                  </div>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong>A smart speaker without asking first.</strong> Some people feel strongly about an always-on microphone in the living room. That is a conversation, not a surprise.
                  </div>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong>Any subscription billed to their card.</strong> Auto-renewals on an older person&apos;s card become a nightmare to untangle. Gift the hardware; let them choose the subscription.
                  </div>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong>A VR headset without asking about motion sickness.</strong> About one in three adults gets queasy in VR. Gifting one blind is a gamble.
                  </div>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong>&quot;Helpful&quot; features that override their choices.</strong> Location tracking, remote camera access, or monitoring apps installed without consent cross a line. Consent is the gift.
                  </div>
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* Gifts that come with setup help */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Wrench className="w-7 h-7 text-primary" />
              Gifts that come with setup help
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The difference between a gift that sits in a drawer and a gift that gets daily use is almost always setup help. Pair any gift above with one of these.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                    <PackageOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">A printed copy of our guide</h3>
                  <p className="text-base leading-relaxed">
                    Print the matching TekSure guide and tuck it in the box. Big text, step-by-step, no jargon — something to hand over with the device.
                  </p>
                  <Link to="/guides?category=devices" className="inline-flex items-center gap-1 text-primary underline font-medium text-base">
                    Browse device guides <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">A booked setup session</h3>
                  <p className="text-base leading-relaxed">
                    Book a 45-minute video setup through TekSure. Hand the recipient the confirmation along with the gift — the best part is the guaranteed "first use".
                  </p>
                  <Link to="/get-help" className="inline-flex items-center gap-1 text-primary underline font-medium text-base">
                    Book a session <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">A handwritten setup promise</h3>
                  <p className="text-base leading-relaxed">
                    &quot;I&apos;ll come over next Sunday at 2 to set this up with you.&quot; Nine words make a gift three times more likely to get used.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stocking stuffers */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Gift className="w-7 h-7 text-primary" />
            Under $25 — stocking-stuffer ideas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Small, useful, and universally welcome. Any of these pair well with a bigger gift above.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STOCKING_STUFFERS.map((s) => (
              <Card key={s.name} className="h-full">
                <CardContent className="p-5 space-y-2 h-full flex flex-col">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">{s.name}</h3>
                  <Badge variant="outline" className="text-xs w-fit">{s.price}</Badge>
                  <p className="text-base leading-relaxed text-muted-foreground flex-1">{s.blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Questions families ask us every year
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Real questions we get on repeat. Straight answers.
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
          </div>
        </section>

        {/* Related links */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Related pages</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Helpful next steps once a gift is chosen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Voice Assistant Setup',
                path: '/tools/voice-assistant-setup',
                blurb: 'Compare Alexa, Google, and Siri — then follow a step-by-step setup.',
                icon: Speaker,
              },
              {
                title: 'Apple Watch Setup',
                path: '/tools/apple-watch-setup',
                blurb: 'Pair, personalize, and turn on fall detection in one sitting.',
                icon: Star,
              },
              {
                title: 'Medication Reminder Setup',
                path: '/tools/medication-reminder-setup',
                blurb: 'Set up a daily medication routine with voice or app reminders.',
                icon: Brain,
              },
              {
                title: 'Device Guides',
                path: '/guides?category=devices',
                blurb: 'Senior-friendly guides for phones, tablets, TVs, and accessories.',
                icon: Tablet,
              },
              {
                title: 'Smart TV Setup',
                path: '/tools/smart-tv-setup',
                blurb: 'Get any smart TV signed in, streaming, and voice-ready.',
                icon: Tv,
              },
              {
                title: 'Book a Setup Session',
                path: '/get-help',
                blurb: 'Hands-on help from a real TekSure technician — $15 deposit.',
                icon: Wrench,
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
        </section>
      </main>
      <Footer />
    </>
  );
}
