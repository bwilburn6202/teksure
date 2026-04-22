import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Car,
  Phone,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Accessibility,
  DollarSign,
  Share2,
  CalendarClock,
  PhoneCall,
  Sparkles,
  Clock,
  Users,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Rideshare Setup
 * ------------------------------------------------------------
 * A senior-friendly walkthrough for getting started with Uber
 * and Lyft, plus alternatives like GoGoGrandparent for people
 * without a smartphone. Modeled on VoiceAssistantSetup.tsx.
 * ────────────────────────────────────────────────────────────── */

type AppId = 'uber' | 'lyft';

/* ── Side-by-side comparison data ─────────────────────────────── */

interface CompareItem {
  id: AppId;
  name: string;
  tagline: string;
  brandColor: string;
  strengths: string[];
  watchOuts: string[];
  basePrice: string;
  coverage: string;
}

const COMPARE: CompareItem[] = [
  {
    id: 'uber',
    name: 'Uber',
    tagline: 'The largest rideshare network in the U.S.',
    brandColor: 'text-black dark:text-white',
    strengths: [
      'Available in almost every U.S. city and most small towns',
      'UberX Share and Uber Comfort options for different budgets',
      'Schedule rides up to 90 days in advance',
      'Uber Teen lets a family member book for older kids',
      'Large driver pool means shorter wait times in most areas',
    ],
    watchOuts: [
      'Surge pricing during bad weather, rush hour, and big events',
      'Cleaning fees can appear days later if a driver reports a mess',
      'Tipping is NOT included in the fare — add it at the end',
    ],
    basePrice: '~$8 – $12 starting fare in most cities',
    coverage: 'Nationwide, all 50 states',
  },
  {
    id: 'lyft',
    name: 'Lyft',
    tagline: 'A friendlier, U.S.-focused alternative to Uber.',
    brandColor: 'text-pink-600 dark:text-pink-400',
    strengths: [
      'Often slightly cheaper than Uber for the same trip',
      'Lyft Silver — a version designed for older riders (larger text, phone support, simpler booking)',
      'Scheduled Rides and "Wait & Save" discounts',
      'Strong driver ratings — Lyft emphasizes hospitality in training',
      'Healthcare and senior services often partner with Lyft for rides',
    ],
    watchOuts: [
      'Fewer drivers in small towns and rural areas than Uber',
      'Also uses surge ("Prime Time") pricing in busy periods',
      'Not available outside the U.S. and Canada',
    ],
    basePrice: '~$7 – $11 starting fare in most cities',
    coverage: 'U.S. and Canada only',
  },
];

/* ── Setup wizard steps (per app) ─────────────────────────────── */

interface Step {
  title: string;
  instruction: string;
  stumble?: string;
  screenshot: string;
}

interface AppInfo {
  id: AppId;
  name: string;
  shortName: string;
  icon: LucideIcon;
  estTime: string;
  steps: Step[];
  firstRideTips: string[];
  support: { label: string; url: string };
}

const UBER: AppInfo = {
  id: 'uber',
  name: 'Uber',
  shortName: 'Uber',
  icon: Car,
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Download the free Uber app',
      instruction:
        'On your iPhone open the App Store. On Android open the Play Store. Search for "Uber" and tap Get or Install. The app is free — Uber only charges when you book a ride. The icon is a black square with a white "U" in a circle. Open the app when it finishes installing.',
      stumble:
        'There are many apps with "Uber" in the name — Uber Eats (food delivery) and Uber Driver (for drivers) are different. Make sure the one you install is called only "Uber" and is made by "Uber Technologies, Inc."',
      screenshot: 'Uber app listing in the App Store showing "Get" button',
    },
    {
      title: 'Create an account with your phone number',
      instruction:
        'Tap "Create account." Enter your cell phone number — Uber will text you a 4-digit code to prove the number is yours. Type that code into the app. Then enter your first name, last name, and email address. Pick a password you can remember.',
      stumble:
        'If the text message never arrives, wait 60 seconds and tap "Resend code." If you use a landline, you cannot sign up — Uber needs a cell phone number so the driver can call or text you.',
      screenshot: 'Uber sign-up screen asking for phone number with keypad',
    },
    {
      title: 'Add a payment method',
      instruction:
        'Uber asks for a credit or debit card, PayPal, or Apple Pay / Google Pay. Tap "Add payment method" and pick one. Type your card number, expiration date, and the 3-digit code on the back. Uber does not charge you yet — cards are charged only after each ride ends. You can add more than one card and pick which one to use per ride.',
      stumble:
        'Prepaid Visa gift cards often do NOT work with Uber because the name and address on the card don\'t match a real billing address. Use a regular debit or credit card instead.',
      screenshot: 'Uber "Add payment method" screen with card, Apple Pay, PayPal',
    },
    {
      title: 'Turn on location sharing (only while using the app)',
      instruction:
        'Uber needs to know where you are to pick you up. When it asks for location, choose "While Using the App" — NOT "Always." This lets the app find you during a ride but turns location off when you close the app. Do the same for notifications so you get driver arrival alerts.',
      stumble:
        'If you tap "Deny" by mistake, go to Settings → Privacy → Location Services → Uber (iPhone) or Settings → Apps → Uber → Permissions (Android) and change it to "While Using the App."',
      screenshot: 'Phone permission dialog for Uber location access',
    },
    {
      title: 'Book your first ride',
      instruction:
        'Tap "Where to?" at the top of the app. Type or pick a destination (home, a coffee shop, a doctor\'s office). Uber shows different ride types with prices — pick "UberX" for the cheapest standard car. Tap "Choose UberX" then "Confirm UberX" to request a driver. The app now shows the driver\'s name, photo, car color, and license plate.',
      stumble:
        'Before tapping Confirm, double-check the pickup location pin. If you are in a hotel, parking lot, or apartment complex, move the pin to the exact door or lobby entrance so the driver knows where to find you.',
      screenshot: 'Uber ride selection screen with price and ETA',
    },
    {
      title: 'Verify the driver before you get in',
      instruction:
        'When the driver arrives, do three checks before opening the door: (1) the license plate on the app matches the car, (2) the driver\'s name matches what the app shows, (3) ask "Who are you here for?" and let the driver say your name — never say your name first. Only get in after all three match.',
      stumble:
        'Fake drivers sometimes sit outside bars, airports, or hospitals hoping a rider won\'t check. If anything feels off, walk away and open the app again to see where your real driver is.',
      screenshot: 'Uber driver arrival screen with car details and license plate',
    },
    {
      title: 'Rate the driver and add a tip',
      instruction:
        'After the ride ends, the app shows a rating screen. Tap 5 stars if everything went well — drivers need 4.7 or higher to keep driving. Then pick a tip: 15%, 18%, 20%, or a custom amount. Tipping is NOT required but drivers count on it as part of their pay. $2 – $5 is a kind tip for a short city ride.',
      stumble:
        'If you forget to tip, you have up to 30 days to add one. Open the app → tap your profile → Past trips → pick the ride → "Add tip."',
      screenshot: 'Uber post-ride rating screen with stars and tip options',
    },
  ],
  firstRideTips: [
    'Start with a short, low-stress ride — a trip you already know by car.',
    'Keep your phone charged above 50% before booking — the app needs it.',
    'Stand where the pickup pin is. Drivers only wait a few minutes.',
    'Write the destination address on a piece of paper as a backup.',
    'Share your trip with a family member the first time (see Safety section below).',
  ],
  support: {
    label: 'Uber Help Center',
    url: 'https://help.uber.com/riders',
  },
};

const LYFT: AppInfo = {
  id: 'lyft',
  name: 'Lyft',
  shortName: 'Lyft',
  icon: Car,
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Download the free Lyft app',
      instruction:
        'Open the App Store (iPhone) or Play Store (Android). Search for "Lyft" and tap Get or Install. It\'s free to download and no charge until you book. The icon is a pink square with a white "Lyft" word mark. Open the app when done.',
      stumble:
        'Lyft and "Lyft Driver" are two different apps. Riders need the one called only "Lyft" from Lyft, Inc.',
      screenshot: 'Lyft app listing in the App Store with pink icon',
    },
    {
      title: 'Sign up with your phone number',
      instruction:
        'Tap "Sign Up." Enter your cell phone number and Lyft texts you a 6-digit code. Type it in. Then enter your first and last name, email, and a password. Lyft may also ask for your date of birth to confirm you are 18 or older.',
      stumble:
        'Use a name that matches your ID if you plan to fly from an airport — some airports check this at the pickup line.',
      screenshot: 'Lyft sign-up screen asking for phone number',
    },
    {
      title: 'Add how you want to pay',
      instruction:
        'Tap "Add payment method." Pick from credit card, debit card, Apple Pay, Google Pay, PayPal, or Venmo. Enter your card details. Lyft saves the card but only charges it after each ride. You can switch cards before confirming any future ride.',
      stumble:
        'If your bank sends you fraud alerts on the first ride, that is normal — text or tap "Yes" to confirm the charge and future rides will go through with no issue.',
      screenshot: 'Lyft payment method screen with card and wallet options',
    },
    {
      title: 'Allow location and turn on notifications',
      instruction:
        'Choose "While Using the App" when Lyft asks for location. Turn notifications ON so you get alerts when the driver is close. These two permissions are what makes the app actually work.',
      stumble:
        'Accidentally said Deny? Go to your phone Settings, find Lyft, and change location to "While Using the App."',
      screenshot: 'Phone permission dialog for Lyft location access',
    },
    {
      title: 'Request your first ride',
      instruction:
        'Tap "Search destination" at the top. Enter where you want to go. Lyft shows ride options: "Standard" is the cheapest and seats up to 4. "XL" is a 6-seater. "Preferred" or "Lux" are nicer cars. Pick one and tap "Select Standard" → "Confirm." The app shows the driver, car, and plate.',
      stumble:
        'The pickup pin may land on a nearby street, not your exact door. Drag the green pin to your exact spot before tapping Confirm — especially at hospitals, large apartment buildings, or shopping centers.',
      screenshot: 'Lyft ride-type selection screen with prices',
    },
    {
      title: 'Check the car and driver before getting in',
      instruction:
        'Do the same three checks every time: (1) license plate matches, (2) car make, model, and color match, (3) ask the driver "Who are you here for?" and wait for them to say your name. If any of the three is off, walk away and call the real driver through the app.',
      stumble:
        'At busy airports, many drivers arrive at once. If two cars look alike, ask the driver to confirm their name too — Lyft shows it on your app.',
      screenshot: 'Lyft driver arrival screen with car photo and plate',
    },
    {
      title: 'Rate and tip at the end',
      instruction:
        'After the ride, Lyft pops up a rating screen. Tap 5 stars for a good ride. Pick a tip — Lyft suggests $1, $2, $5, or a custom amount. Tipping is optional but helps drivers who earn based on each trip. Confirm to finish.',
      stumble:
        'Got distracted and closed the app? You can add a tip within 72 hours. Menu → Ride history → pick the ride → "Add tip."',
      screenshot: 'Lyft post-ride rating screen with stars and tip picker',
    },
  ],
  firstRideTips: [
    'Try a short practice ride to a nearby coffee shop before a big trip.',
    'Turn on Lyft Silver (if available in your city) for larger text and phone support.',
    'Stand in the open where a car can see you — not inside a store.',
    'Keep the driver\'s phone number handy in the app in case you get separated.',
    'Use "Share Trip" with a family member the first few times.',
  ],
  support: {
    label: 'Lyft Help Center',
    url: 'https://help.lyft.com/hc/en-us/rider',
  },
};

const APPS: Record<AppId, AppInfo> = {
  uber: UBER,
  lyft: LYFT,
};

/* ── Safety features list ─────────────────────────────────────── */

interface SafetyFeature {
  title: string;
  body: string;
  app: 'Uber' | 'Lyft' | 'Both';
  icon: LucideIcon;
}

const SAFETY_FEATURES: SafetyFeature[] = [
  {
    title: 'PIN verification before pickup',
    body:
      'Uber lets you turn on "PIN Verification" in Settings → Safety → Verify Your Ride. The app gives you a 4-digit PIN — the driver must type it in before the trip starts. A fake driver will not have it.',
    app: 'Uber',
    icon: ShieldCheck,
  },
  {
    title: 'In-app emergency button (911)',
    body:
      'Both apps have a blue shield icon during every ride. Tap it, then "Call 911." The app shares your exact location, car details, and trip route with the operator. In many cities, dispatch gets this info automatically.',
    app: 'Both',
    icon: PhoneCall,
  },
  {
    title: 'RideCheck — automatic crash and long-stop detection',
    body:
      'Uber\'s RideCheck uses the phone\'s motion sensors to detect possible crashes or unusual long stops. If it triggers, Uber calls you to check in and can send help if you don\'t respond.',
    app: 'Uber',
    icon: BadgeCheck,
  },
  {
    title: 'Smart Trip Check (Lyft)',
    body:
      'Lyft\'s version of RideCheck — watches for crashes, wrong turns off the route, or long unexpected stops. Sends you a "Are you okay?" prompt automatically.',
    app: 'Lyft',
    icon: BadgeCheck,
  },
  {
    title: 'Share trip with family in real time',
    body:
      'During any ride, tap "Share Trip Status" (Uber) or "Share Route" (Lyft). The app texts a link to a loved one — they see a live map of your ride until you arrive. No app download needed on their end.',
    app: 'Both',
    icon: Share2,
  },
  {
    title: 'Anonymized phone numbers',
    body:
      'When a driver calls or texts you through the app, neither of you sees the other\'s real phone number. This keeps your number private after the ride ends.',
    app: 'Both',
    icon: Phone,
  },
];

/* ── Scam / watch-out warnings ───────────────────────────────── */

interface ScamItem {
  title: string;
  body: string;
}

const SCAMS: ScamItem[] = [
  {
    title: 'Fake "driver cancellation" scam',
    body:
      'A driver texts or calls saying "I\'m canceling your ride — please cancel on your side so I don\'t get charged." Do NOT cancel. If the driver cancels from their app, Uber or Lyft does not charge them. Cancellation from the rider side triggers a fee for YOU. Let the driver cancel themselves.',
  },
  {
    title: 'Fake cleaning fee dispute',
    body:
      'A few days after a ride, you get a $80–$150 "cleaning fee" charge for a mess you did not make. This happens rarely but it happens. Dispute right away in the app: Past trips → pick the ride → "Review fare or fees" → "I was charged a cleaning fee I should not have been." Attach a photo if you took one when leaving the car.',
  },
  {
    title: 'Impersonator at the airport or hospital curb',
    body:
      'Someone walks up and says "Uber for [your name]?" before you open the app. Never get in without checking the license plate yourself. Legitimate drivers wait for YOU to approach them — they do not call out names first.',
  },
  {
    title: 'Phishing email pretending to be from Uber or Lyft',
    body:
      'An email says your account was locked or a charge needs review — with a link. Never click the link. Open the app directly and check Your Trips and Payment history there. Real issues show up in the app, not only by email.',
  },
  {
    title: 'Rider tipped twice by mistake',
    body:
      'Some fake receipts include "Tip: $45" on a $12 ride, hoping you will not notice. Check the receipt email line by line. If the tip looks wrong, open the app → Past trips → the ride → "Change tip" or "Get help."',
  },
];

/* ── How to avoid overcharges (surge) ─────────────────────────── */

const SURGE_TIPS: { title: string; body: string }[] = [
  {
    title: 'Watch for the price before you tap Confirm',
    body:
      'Both apps always show the full fare BEFORE you request the ride. If it looks 1.5x or 2x higher than usual, that is surge. You are never charged a surprise amount — the price on screen is the price you pay.',
  },
  {
    title: 'Wait 10–15 minutes if you can',
    body:
      'Surge often drops as more drivers go online. Rush hour (7–9 a.m. and 4–7 p.m. weekdays) and right after big events tend to be the most expensive. A 15-minute delay can cut the fare in half.',
  },
  {
    title: 'Try the other app',
    body:
      'Uber and Lyft surge at different times. If Uber is 2x, check Lyft — often it is not. Having both apps installed is the single best way to avoid overpaying.',
  },
  {
    title: 'Walk a few blocks from a busy zone',
    body:
      'Surge is zoned. Walking a quarter-mile away from an airport, stadium, or downtown bar district often drops the price by 20–40%.',
  },
  {
    title: 'Use "Wait & Save" or a shared ride',
    body:
      'UberX Share and Lyft "Wait & Save" are slightly slower but 15–30% cheaper. Not great if you are in a hurry, but fine for routine errands.',
  },
  {
    title: 'Pre-schedule rides for airport trips',
    body:
      'Scheduled rides lock in a price estimate. If surge hits before your pickup window, you still pay close to the estimate instead of the live price.',
  },
];

/* ── Tipping guidance ─────────────────────────────────────────── */

const TIP_GUIDE: { trip: string; suggestion: string }[] = [
  { trip: 'Short city ride ($8 – $15 fare)', suggestion: '$2 – $3 flat tip' },
  { trip: 'Standard ride ($15 – $30 fare)', suggestion: '15% – 18%' },
  { trip: 'Long ride, airport, or heavy traffic', suggestion: '18% – 20%' },
  { trip: 'Driver helped with luggage or wheelchair', suggestion: 'Add $3 – $5 extra' },
  { trip: 'Very poor experience (rude, unsafe)', suggestion: 'No tip — report in app' },
];

/* ── Troubleshooting items ────────────────────────────────────── */

interface TroubleItem {
  q: string;
  a: React.ReactNode;
}

const TROUBLE: TroubleItem[] = [
  {
    q: 'The driver can\'t find me',
    a: (
      <div className="space-y-2">
        <p>
          Tap the driver&apos;s phone icon in the app to call them. Both apps mask your number so yours stays private. Give a landmark — &quot;I&apos;m in front of the red awning at the pharmacy, next to the blue mailbox.&quot;
        </p>
        <p>
          If GPS is pointing to the wrong spot (common at hotels, large apartment complexes, or strip malls), drop a new pin. In Uber: tap "Change pickup." In Lyft: tap the pickup address → "Edit pickup."
        </p>
        <p>
          If the driver still can&apos;t find you, cancel and re-request. The first two minutes of cancellation are usually free.
        </p>
      </div>
    ),
  },
  {
    q: 'The app crashed in the middle of the ride',
    a: (
      <div className="space-y-2">
        <p>
          Your trip is still active on the driver&apos;s end — you will not be stranded. Stay in the car. When you arrive, reopen the app; your trip will reappear with the rate screen.
        </p>
        <p>
          If the app will not reopen, close it entirely (swipe up from the bottom on iPhone, hit the square button on Android) and open again. Turning airplane mode on for 10 seconds and back off also resets the phone&apos;s data connection.
        </p>
        <p>
          If the rating screen never shows up, you can still tip and rate later: Past Trips → tap the ride → rate and tip.
        </p>
      </div>
    ),
  },
  {
    q: 'I left something in the car',
    a: (
      <div className="space-y-2">
        <p>
          Act within 24 hours for the best chance. In Uber: Your Trips → pick the ride → "Find Lost Item" → "Contact driver about a lost item." Uber calls the driver for you using a masked number.
        </p>
        <p>
          In Lyft: Ride history → pick the ride → "Get help" → "I left an item." Lyft sends the driver a message asking them to return it (usually for a $20 return fee plus mileage).
        </p>
        <p>
          If the driver does not respond within a day, Lyft and Uber both have Support teams you can message from inside the app.
        </p>
      </div>
    ),
  },
  {
    q: 'I need to dispute a charge',
    a: (
      <div className="space-y-2">
        <p>
          Dispute inside the app first — it is the fastest way. Past Trips → pick the ride → "Review fare or fees." Choose a reason ("route was wrong," "cleaning fee I did not cause," "charged twice"). Most refunds are issued within 48 hours.
        </p>
        <p>
          For bigger billing problems (charges on a canceled ride, stolen card, recurring charges), use our{' '}
          <Link to="/tools/refund-and-return-helper" className="text-primary underline font-medium">
            Refund and Return Helper
          </Link>{' '}
          for a step-by-step dispute workflow, including what to say to your bank if the app support doesn&apos;t resolve it.
        </p>
      </div>
    ),
  },
  {
    q: 'My first-time pickup code isn\'t working',
    a: (
      <div className="space-y-2">
        <p>
          First-time promo codes need to be added BEFORE you request the ride — not after. Tap your profile → "Promos" or "Gifts and Credit" → enter the code → then book the ride.
        </p>
        <p>
          Codes also expire (often within 14 days) and only work in the city they were issued for. If it says "invalid," screenshot the error and contact support from the same screen.
        </p>
      </div>
    ),
  },
  {
    q: 'The driver took a longer route than needed',
    a: (
      <div className="space-y-2">
        <p>
          Past Trips → the ride → "Review fare or fees" → "My driver took a poor route." Attach the details. Both apps refund the extra miles if GPS confirms it.
        </p>
        <p>
          Sometimes the driver is following Waze or Google Maps around a real traffic jam you did not see. If the fare is within $2 of normal, it is often a legitimate detour.
        </p>
      </div>
    ),
  },
];

/* ── FAQ items ────────────────────────────────────────────────── */

const FAQ: TroubleItem[] = [
  {
    q: 'Is rideshare safe for a senior riding alone?',
    a: (
      <div className="space-y-2">
        <p>
          Yes, with a few habits. Always verify the license plate, car, and driver name before getting in. Share every trip with a family member for the first month (one tap in the app). Keep the in-app 911 button in mind — you do not need to speak, your trip info goes to dispatch automatically.
        </p>
        <p>
          Night rides have a higher scam risk than day rides. If you are unsure, ride during the day, choose well-lit pickup spots, and sit in the back seat on the passenger side.
        </p>
      </div>
    ),
  },
  {
    q: 'Why does the price change every time I check?',
    a: (
      <div className="space-y-2">
        <p>
          Rideshare uses "dynamic pricing." The cost depends on how many drivers are nearby, how many riders are requesting, weather, and time of day. You always see the final fare before tapping Confirm — there are no hidden add-ons after the ride.
        </p>
      </div>
    ),
  },
  {
    q: 'Can I pay cash?',
    a: (
      <div className="space-y-2">
        <p>
          In the United States, Uber and Lyft both require a card, Apple Pay, Google Pay, PayPal, or Venmo — cash is NOT accepted. If you only use cash, GoGoGrandparent (see below) will book the ride for you using their card and bill you by phone, or you can call a local taxi.
        </p>
      </div>
    ),
  },
  {
    q: 'Can I bring my service animal?',
    a: (
      <div className="space-y-2">
        <p>
          Yes. Federal law requires Uber and Lyft drivers to accept riders with service animals — no extra fee, and drivers cannot refuse based on the animal. If a driver refuses, report it immediately in the app. Both companies deactivate drivers who refuse service animals.
        </p>
        <p>
          Emotional support animals are NOT covered by the same law, so drivers can refuse those. Mention ahead of time in the "Notes for driver" field.
        </p>
      </div>
    ),
  },
  {
    q: 'What if I use a wheelchair or walker?',
    a: (
      <div className="space-y-2">
        <p>
          Both apps offer an accessible ride option. Uber WAV (Wheelchair Accessible Vehicle) and Lyft Access provide cars with ramps or lifts. Availability varies by city — large cities almost always have it; small towns may not.
        </p>
        <p>
          For a standard walker or folding wheelchair, a regular UberX or Lyft Standard works fine. Most drivers help load and unload without being asked, but you can also request help in the driver notes.
        </p>
      </div>
    ),
  },
  {
    q: 'How old do I need to be to use Uber or Lyft?',
    a: (
      <div className="space-y-2">
        <p>
          Riders must be 18 or older to have an account. Uber Teen and Lyft&apos;s teen option let a parent or guardian book for kids 13–17 on a shared family account.
        </p>
      </div>
    ),
  },
  {
    q: 'Do drivers see my home address after the ride?',
    a: (
      <div className="space-y-2">
        <p>
          Drivers see your pickup and drop-off on each ride, but they do not see your saved home or work addresses. After the ride, their view of your exact location is cut off. If you are worried, set your drop-off pin to a nearby corner or store instead of your front door.
        </p>
      </div>
    ),
  },
];

/* ── No-smartphone alternatives ───────────────────────────────── */

interface AlternativeItem {
  name: string;
  tagline: string;
  price: string;
  howToUse: string;
  availability: string;
  link?: string;
}

const ALTERNATIVES: AlternativeItem[] = [
  {
    name: 'GoGoGrandparent',
    tagline: 'Book Uber or Lyft by phone — no smartphone needed.',
    price: '$0.27/min during your ride + the ride cost + a small concierge fee',
    howToUse:
      'Register once by calling 1-855-464-6872 (or a family member can register you online). After that, you call the same number, press 1 for a ride, and a live dispatcher books an Uber or Lyft for you. The driver arrives like normal — you pay nothing to the driver, GoGoGrandparent bills your card monthly.',
    availability: 'Nationwide — works anywhere Uber or Lyft works',
    link: 'https://gogograndparent.com/',
  },
  {
    name: 'SilverRide',
    tagline: 'Concierge-style rides for seniors with hands-on driver help.',
    price: 'Higher per-mile rate than Uber/Lyft, billed monthly — call for a quote',
    howToUse:
      'Call to set up an account. Drivers are trained in senior care — they come to the door, help with walkers and bags, and can stay with you during an appointment. Many families use SilverRide for medical appointments when the senior needs extra attention.',
    availability: 'Limited — San Francisco Bay Area and a handful of other cities. Call to check coverage.',
    link: 'https://www.silverride.com/',
  },
  {
    name: 'Local taxi companies',
    tagline: 'The original option — call, get picked up, pay the driver.',
    price: 'Usually a higher flat drop fee ($3 – $5) plus per-mile rate',
    howToUse:
      'Look up "taxi near me" in a web browser or ask at the front desk of any hotel or hospital. Cabs accept cash AND cards. No app needed. Best for people who want a ride without installing anything or sharing personal info online.',
    availability: 'Widely available in cities; thin in rural areas',
  },
  {
    name: 'Area Agency on Aging transportation',
    tagline: 'Free or low-cost rides for seniors 60+, often for medical appointments.',
    price: 'Free or heavily subsidized, depending on county',
    howToUse:
      'Call 1-800-677-1116 (Eldercare Locator) or visit eldercare.acl.gov. They connect you to your local Area Agency on Aging, which runs free or donation-based ride programs for medical visits, grocery shopping, and social events.',
    availability: 'Nationwide — every U.S. county has one',
    link: 'https://eldercare.acl.gov/',
  },
];

/* ── Done screen ──────────────────────────────────────────────── */

function DoneScreen({
  app,
  completedCount,
  totalSteps,
  onRestart,
}: {
  app: AppInfo;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  return (
    <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-green-600/10 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">You&apos;re ready to ride!</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Your {app.shortName} account is set up. You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">First-ride tips</h3>
            </div>
            <ul className="space-y-2">
              {app.firstRideTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-base leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            What to do next
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>
              Worried about a wrong charge?{' '}
              <Link to="/tools/refund-and-return-helper" className="text-primary underline font-medium">
                Refund and Return Helper
              </Link>{' '}
              walks you through disputing it.
            </li>
            <li>
              Heading to a doctor appointment?{' '}
              <Link to="/tools/medication-reminder-setup" className="text-primary underline font-medium">
                Medication Reminder Setup
              </Link>{' '}
              pairs well with ride scheduling.
            </li>
            <li>
              For direct {app.shortName} help, visit{' '}
              <a
                href={app.support.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium inline-flex items-center gap-1"
              >
                {app.support.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </li>
            <li>
              Want a live walkthrough?{' '}
              <Link to="/get-help" className="text-primary underline font-medium">
                Book a TekSure technician
              </Link>{' '}
              for a guided video session.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base min-h-14">
            <RotateCcw className="w-5 h-5" />
            Set up the other app
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base min-h-14">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function RideshareSetup() {
  const [selectedId, setSelectedId] = useState<AppId | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const app = useMemo<AppInfo | null>(
    () => (selectedId ? APPS[selectedId] : null),
    [selectedId],
  );

  const totalSteps = app?.steps.length ?? 0;
  const isDone = app ? stepIndex === totalSteps : false;
  const current: Step | null = app && !isDone ? app.steps[stepIndex] ?? null : null;
  const progress = app ? Math.round((stepIndex / totalSteps) * 100) : 0;

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setSelectedId(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickApp = (id: AppId) => {
    setSelectedId(id);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Landing view ────────────────────────────────── */
  if (!app) {
    return (
      <>
        <SEOHead
          title="Rideshare Setup — Uber, Lyft, and GoGoGrandparent for Seniors"
          description="Compare Uber and Lyft, follow step-by-step setup, schedule rides, turn on safety features, and learn no-smartphone options like GoGoGrandparent. Senior-friendly walkthrough in plain English."
          path="/tools/rideshare-setup"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="border-b border-border bg-muted/30">
            <div className="container py-10 md:py-14 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="rideshare-setup"
                  title="Rideshare Setup"
                  url="/tools/rideshare-setup"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-5 h-5 text-primary" />
                <Badge variant="outline" className="text-xs">
                  Transportation · Compare & Set up
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
                Rideshare for Seniors — Uber, Lyft, and Phone-Only Options
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                A clear, step-by-step walkthrough to set up Uber or Lyft, schedule rides, share
                trips with family, and turn on the safety features that matter — plus alternatives
                for anyone without a smartphone.
              </p>
            </div>
          </section>

          {/* Side-by-side comparison */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Uber vs. Lyft — side by side</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Both apps work almost the same way. The differences are in price, coverage, and a few
              senior-focused features. Here they are plain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COMPARE.map((c) => (
                <Card key={c.id} className="flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Car className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-semibold mb-1 ${c.brandColor}`}>
                          {c.name}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {c.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-sm">
                        {c.basePrice}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {c.coverage}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-green-800 dark:text-green-400 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {c.strengths.map((s) => (
                            <li key={s} className="text-base leading-relaxed flex gap-2">
                              <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">
                                +
                              </span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4" />
                          Watch-outs
                        </h4>
                        <ul className="space-y-1.5">
                          {c.watchOuts.map((w) => (
                            <li key={w} className="text-base leading-relaxed flex gap-2">
                              <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">
                                −
                              </span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 mt-auto">
                      <Button
                        size="lg"
                        className="w-full gap-2 text-base min-h-14"
                        onClick={() => pickApp(c.id)}
                      >
                        Set up {c.name}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="mt-6">
              <Lightbulb className="h-5 w-5" />
              <AlertTitle className="text-base">Our honest recommendation</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Install BOTH apps. They cost nothing until you book a ride, and having both lets you
                compare prices and pick whichever is not in surge at that moment. Many seniors save
                $15–$30 a month this way.
              </AlertDescription>
            </Alert>
          </section>

          {/* Scheduling + Sharing + Accessibility */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Scheduling, sharing, and accessibility rides
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Three features worth turning on from day one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Card>
                  <CardContent className="p-5 space-y-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary inline-flex">
                      <CalendarClock className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Schedule rides in advance</h3>
                    <p className="text-base leading-relaxed">
                      Both apps let you schedule a ride from 15 minutes to 90 days in advance. Great
                      for doctor appointments, early flights, or weekly church services.
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Uber:</strong> Tap "Where to?" → clock icon → pick date and time.
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Lyft:</strong> Tap "Schedule" at the bottom → pick date and time.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 space-y-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary inline-flex">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Share your trip with family</h3>
                    <p className="text-base leading-relaxed">
                      During any ride, one tap sends a live link to a loved one. They see the
                      driver&apos;s name, car, route, and arrival — no app install needed on their end.
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Uber:</strong> Tap the blue shield → "Share trip status."
                    </p>
                    <p className="text-base leading-relaxed">
                      <strong>Lyft:</strong> Tap "Send ETA" or "Share Route" during the trip.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 space-y-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary inline-flex">
                      <Accessibility className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Wheelchair and accessibility rides</h3>
                    <p className="text-base leading-relaxed">
                      Uber <strong>WAV</strong> (Wheelchair Accessible Vehicle) and Lyft{' '}
                      <strong>Access</strong> send cars with ramps or lifts. Available in most
                      large cities. For a standard walker or folding chair, regular UberX or Lyft
                      Standard works — drivers help load and unload.
                    </p>
                    <p className="text-base leading-relaxed">
                      Add a note like "Please help with my walker" in the driver notes field.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Safety features */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-primary" />
              Safety features — turn these on
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Rideshare safety has come a long way. These are the features worth enabling before your
              first ride.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAFETY_FEATURES.map((f) => (
                <Card key={f.title}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <f.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="font-semibold text-lg">{f.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {f.app}
                          </Badge>
                        </div>
                        <p className="text-base leading-relaxed">{f.body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Scams */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-amber-700 dark:text-amber-400" />
                Scam warnings — know these before your first ride
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Rideshare is mostly safe, but a few scams target new riders and seniors. None of
                these require advanced tech knowledge to avoid.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCAMS.map((s) => (
                  <Card key={s.title} className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <AlertTriangle
                          className="w-5 h-5 text-amber-700 dark:text-amber-400"
                          aria-hidden="true"
                        />
                        {s.title}
                      </h3>
                      <p className="text-base leading-relaxed">{s.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Surge / not getting overcharged */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <DollarSign className="w-7 h-7 text-primary" />
              How to NOT get overcharged (surge pricing)
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              "Surge" or "Prime Time" is when the price goes up because lots of people are booking
              at once. You will never get a surprise bill — the full fare is always shown before
              you confirm. Here is how to pay less.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SURGE_TIPS.map((t) => (
                <Card key={t.title}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                      {t.title}
                    </h3>
                    <p className="text-base leading-relaxed">{t.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tipping */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Tipping — what&apos;s fair?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Tipping is optional in both apps, but drivers rely on it as part of their pay.
                Here&apos;s a quick cheat sheet most riders use.
              </p>

              <Card>
                <CardContent className="p-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-base">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 font-semibold">Type of trip</th>
                          <th className="text-left py-3 px-2 font-semibold">Suggested tip</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TIP_GUIDE.map((row) => (
                          <tr key={row.trip} className="border-b border-border last:border-0">
                            <td className="py-3 px-2 leading-relaxed">{row.trip}</td>
                            <td className="py-3 px-2 font-medium leading-relaxed">
                              {row.suggestion}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Alert className="mt-4">
                <Lightbulb className="h-5 w-5" />
                <AlertTitle className="text-base">Forgot to tip?</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  You can add or change a tip up to 30 days after the ride (Uber) or 72 hours
                  (Lyft). Past Trips → pick the ride → "Add tip" or "Change tip."
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* No smartphone alternatives */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Phone className="w-7 h-7 text-primary" />
              No smartphone? You still have options
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              If you use a flip phone, a landline, or prefer not to use apps, these services book
              rides for you over the phone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ALTERNATIVES.map((a) => (
                <Card key={a.name}>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <PhoneCall className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{a.name}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {a.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base leading-relaxed">
                        <strong>Cost:</strong> {a.price}
                      </p>
                      <p className="text-base leading-relaxed">
                        <strong>How it works:</strong> {a.howToUse}
                      </p>
                      <p className="text-base leading-relaxed">
                        <strong>Where it works:</strong> {a.availability}
                      </p>
                      {a.link && (
                        <a
                          href={a.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                        >
                          Visit {a.name} website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Troubleshooting — the six most common problems
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Tap any question to see the step-by-step fix.
              </p>

              <div className="max-w-4xl">
                <Accordion type="single" collapsible className="w-full">
                  {TROUBLE.map((item, i) => (
                    <AccordionItem key={i} value={`trouble-${i}`}>
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold min-h-14">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Frequently asked questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The questions family members and riders ask most often before the first ride.
            </p>

            <div className="max-w-4xl">
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold min-h-14">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready to set up?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Pick either app to walk through account, payment, and your first ride.
              </p>
              <Tabs defaultValue="uber" className="max-w-xl mx-auto">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="uber" className="text-base min-h-12">
                    Uber
                  </TabsTrigger>
                  <TabsTrigger value="lyft" className="text-base min-h-12">
                    Lyft
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="uber" className="mt-4">
                  <Button
                    size="lg"
                    className="w-full gap-2 text-base min-h-14"
                    onClick={() => pickApp('uber')}
                  >
                    Start Uber setup
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </TabsContent>
                <TabsContent value="lyft" className="mt-4">
                  <Button
                    size="lg"
                    className="w-full gap-2 text-base min-h-14"
                    onClick={() => pickApp('lyft')}
                  >
                    Start Lyft setup
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Wizard view ─────────────────────────────────── */
  return (
    <>
      <SEOHead
        title={`${app.shortName} Setup — Step-by-step for Seniors`}
        description={`Step-by-step walkthrough to set up your ${app.name} account, add payment, and take your first ride. Designed for seniors and first-time users.`}
        path="/tools/rideshare-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <app.icon className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg font-medium">
                  Setting up · {app.name}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2 min-h-12">
                <RotateCcw className="w-4 h-4" />
                Pick a different app
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                About {app.estTime}
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <DoneScreen
              app={app}
              completedCount={completed.size}
              totalSteps={totalSteps}
              onRestart={restart}
            />
          ) : current ? (
            <article className="space-y-6">
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {app.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
              </header>

              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Visual coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshot}</div>
              </div>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">What to do</h2>
                  <p className="text-lg leading-relaxed">{current.instruction}</p>
                </CardContent>
              </Card>

              {current.stumble && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">
                        Common stumbling block
                      </h3>
                      <p className="text-base leading-relaxed">{current.stumble}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 text-base min-h-14"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base min-h-14">
                  {stepIndex === totalSteps - 1
                    ? 'Finish'
                    : completed.has(stepIndex)
                      ? 'Done — next step'
                      : 'Next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {app.steps.map((s, i) => {
                    const isStepDone = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStepIndex(i);
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                          active
                            ? 'bg-primary text-primary-foreground border-primary'
                            : isStepDone
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {isStepDone && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setStepIndex(totalSteps);
                      if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                      isDone
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    All done
                  </button>
                </div>
              </div>
            </article>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
