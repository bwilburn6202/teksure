import { useState, useMemo } from 'react';
import {
  Tag,
  RotateCcw,
  Sparkles,
  Printer,
  DollarSign,
  Phone,
  Tv,
  ShoppingCart,
  Utensils,
  Plane,
  Pill,
  Film,
  Landmark,
  Calculator,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type AgeRange = '50-54' | '55-59' | '60-64' | '65-69' | '70-74' | '75+';
type YesNo = 'yes' | 'no';

interface Answers {
  age: AgeRange | null;
  veteran: YesNo | null;
  aarp: YesNo | null;
  driver: YesNo | null;
  retired: YesNo | null;
}

type CategoryId =
  | 'phone'
  | 'streaming'
  | 'grocery'
  | 'restaurants'
  | 'travel'
  | 'pharmacy'
  | 'entertainment'
  | 'financial'
  | 'tax';

interface Discount {
  provider: string;
  discount: string;           // e.g. "15% off" or "$10/mo off"
  requirements: string;       // age or membership requirement
  howToClaim: string;         // ID, card, code
  estimatedAnnualSavings: number;
  /** If set, discount only shows when the answer matches. */
  requires?: Partial<Pick<Answers, 'veteran' | 'aarp' | 'driver' | 'retired'>>;
  /** Minimum age bucket required (inclusive). */
  minAge?: AgeRange;
}

interface DiscountCategory {
  id: CategoryId;
  label: string;
  icon: typeof Phone;
  color: string;              // tailwind bg / text accent class
  discounts: Discount[];
}

/* ── Helpers ─────────────────────────────── */
const ageOrder: AgeRange[] = ['50-54', '55-59', '60-64', '65-69', '70-74', '75+'];
const ageToMin = (a: AgeRange) => parseInt(a.split('-')[0].replace('+', ''), 10);
function meetsAge(userAge: AgeRange, min?: AgeRange) {
  if (!min) return true;
  return ageOrder.indexOf(userAge) >= ageOrder.indexOf(min);
}

/* ── Discount data (built-in, no API) ────── */
const discountData: DiscountCategory[] = [
  {
    id: 'phone',
    label: 'Phone & Internet',
    icon: Phone,
    color: 'text-blue-600 dark:text-blue-400',
    discounts: [
      {
        provider: 'T-Mobile Essentials 55+',
        discount: 'Two lines for ~$55/mo (vs $90)',
        requirements: 'One account holder must be 55+',
        howToClaim: 'Sign up in a T-Mobile store with a photo ID showing your age.',
        estimatedAnnualSavings: 420,
        minAge: '55-59',
      },
      {
        provider: 'Verizon 55+ Unlimited',
        discount: '$62/mo single line (vs $80)',
        requirements: 'Must be 55+ and live in Florida (nationwide for military)',
        howToClaim: 'Call Verizon or visit a store with ID. Ask for the 55+ plan.',
        estimatedAnnualSavings: 216,
        minAge: '55-59',
      },
      {
        provider: 'Spectrum Internet Assist',
        discount: '30 Mbps internet for $17.99/mo',
        requirements: '65+ receiving SSI benefits',
        howToClaim: 'Apply at spectrum.com/internet-assist with proof of benefits.',
        estimatedAnnualSavings: 360,
        minAge: '65-69',
      },
      {
        provider: 'AT&T Access',
        discount: 'Internet from $30/mo for low-income seniors',
        requirements: 'Income-qualified households (SNAP/SSI)',
        howToClaim: 'Apply at att.com/access with eligibility documents.',
        estimatedAnnualSavings: 300,
      },
      {
        provider: 'Consumer Cellular AARP',
        discount: '5% off monthly service + 30% off accessories',
        requirements: 'AARP membership',
        howToClaim: 'Link your AARP number when activating your plan.',
        estimatedAnnualSavings: 45,
        requires: { aarp: 'yes' },
      },
    ],
  },
  {
    id: 'streaming',
    label: 'Streaming & TV',
    icon: Tv,
    color: 'text-purple-600 dark:text-purple-400',
    discounts: [
      {
        provider: 'Hulu (w/ Ads) via AARP',
        discount: 'Discounted annual subscription through AARP',
        requirements: 'AARP membership',
        howToClaim: 'Log in to aarp.org/benefits and claim the Hulu offer.',
        estimatedAnnualSavings: 30,
        requires: { aarp: 'yes' },
      },
      {
        provider: 'SiriusXM Streaming',
        discount: '3 months free, then discounted rate via AARP',
        requirements: 'AARP membership',
        howToClaim: 'Activate through the AARP member benefits portal.',
        estimatedAnnualSavings: 60,
        requires: { aarp: 'yes' },
      },
      {
        provider: 'Paramount+ / Philo Senior Promos',
        discount: 'Occasional 50%-off promos for 55+',
        requirements: '55+ (promotional, check periodically)',
        howToClaim: 'Watch for email offers; enter promo code at checkout.',
        estimatedAnnualSavings: 36,
        minAge: '55-59',
      },
    ],
  },
  {
    id: 'grocery',
    label: 'Grocery & Retail',
    icon: ShoppingCart,
    color: 'text-emerald-600 dark:text-emerald-400',
    discounts: [
      {
        provider: "Kohl's Senior Wednesdays",
        discount: '15% off every Wednesday',
        requirements: '60+',
        howToClaim: 'Show a photo ID at checkout on Wednesdays.',
        estimatedAnnualSavings: 120,
        minAge: '60-64',
      },
      {
        provider: 'Ross Every Tuesday',
        discount: '10% off on Tuesdays',
        requirements: '55+',
        howToClaim: 'Mention age and show ID at the register on Tuesdays.',
        estimatedAnnualSavings: 60,
        minAge: '55-59',
      },
      {
        provider: 'Goodwill Senior Day',
        discount: '10-25% off (varies by store, one day per week)',
        requirements: '55+ or 60+ depending on region',
        howToClaim: 'Check the sign at your local Goodwill; show ID.',
        estimatedAnnualSavings: 50,
        minAge: '55-59',
      },
      {
        provider: 'Bealls / Rite Aid / Walgreens Senior Days',
        discount: '10-20% off on designated days',
        requirements: '55+ or 60+',
        howToClaim: 'Show ID; enroll in store loyalty program for stacking.',
        estimatedAnnualSavings: 80,
        minAge: '55-59',
      },
    ],
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    icon: Utensils,
    color: 'text-orange-600 dark:text-orange-400',
    discounts: [
      {
        provider: "Denny's AARP",
        discount: '15% off entire check',
        requirements: 'AARP card',
        howToClaim: 'Show AARP card before ordering.',
        estimatedAnnualSavings: 90,
        requires: { aarp: 'yes' },
      },
      {
        provider: 'IHOP 55+ Menu',
        discount: 'Special reduced-price menu',
        requirements: '55+',
        howToClaim: 'Ask server for the 55+ menu.',
        estimatedAnnualSavings: 80,
        minAge: '55-59',
      },
      {
        provider: 'Subway',
        discount: '10% off',
        requirements: '60+ (participating locations)',
        howToClaim: 'Ask at the register before paying; location may vary.',
        estimatedAnnualSavings: 40,
        minAge: '60-64',
      },
      {
        provider: 'Chick-fil-A',
        discount: 'Free small drink or coffee with purchase',
        requirements: '55+ (participating locations)',
        howToClaim: 'Ask at the counter. Always verify at your location.',
        estimatedAnnualSavings: 50,
        minAge: '55-59',
      },
      {
        provider: "Wendy's",
        discount: '10% off or free drink',
        requirements: '55+ (participating locations)',
        howToClaim: 'Ask cashier; varies by franchise.',
        estimatedAnnualSavings: 40,
        minAge: '55-59',
      },
      {
        provider: 'Outback Steakhouse AARP',
        discount: '10% off entire meal',
        requirements: 'AARP card',
        howToClaim: 'Show AARP card when paying.',
        estimatedAnnualSavings: 60,
        requires: { aarp: 'yes' },
      },
    ],
  },
  {
    id: 'travel',
    label: 'Travel',
    icon: Plane,
    color: 'text-sky-600 dark:text-sky-400',
    discounts: [
      {
        provider: 'Amtrak',
        discount: '10% off rail fares',
        requirements: '65+',
        howToClaim: 'Select "Senior" when booking; show ID on board.',
        estimatedAnnualSavings: 40,
        minAge: '65-69',
      },
      {
        provider: 'Greyhound',
        discount: '5% off (20% with some promos)',
        requirements: '62+',
        howToClaim: 'Book with the senior rate on greyhound.com.',
        estimatedAnnualSavings: 25,
        minAge: '60-64',
      },
      {
        provider: 'Best Western / Choice Hotels',
        discount: '10-15% off rooms',
        requirements: '55+ or 60+ (varies by brand)',
        howToClaim: 'Book with the "Senior" or "AARP" rate online.',
        estimatedAnnualSavings: 90,
        minAge: '55-59',
      },
      {
        provider: 'Marriott / Hilton Senior Rates',
        discount: '10% off base rates',
        requirements: '62+',
        howToClaim: 'Select senior rate when booking; show ID at check-in.',
        estimatedAnnualSavings: 100,
        minAge: '60-64',
      },
      {
        provider: 'Alamo / Avis / Hertz AARP',
        discount: 'Up to 25% off car rentals',
        requirements: 'AARP membership',
        howToClaim: 'Enter AARP code at booking or tie membership to profile.',
        estimatedAnnualSavings: 75,
        requires: { aarp: 'yes' },
      },
      {
        provider: 'VA Travel Benefits',
        discount: 'Reimbursement for medical-related travel',
        requirements: 'Veteran enrolled in VA health care',
        howToClaim: 'Apply via va.gov/health-care/get-reimbursed-for-travel-pay/.',
        estimatedAnnualSavings: 200,
        requires: { veteran: 'yes' },
      },
    ],
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    icon: Pill,
    color: 'text-rose-600 dark:text-rose-400',
    discounts: [
      {
        provider: 'MyWalgreens (Senior Tuesdays)',
        discount: '20% off eligible items first Tuesday each month',
        requirements: '55+ (or AARP member)',
        howToClaim: 'Join MyWalgreens free; show card at checkout on Senior Day.',
        estimatedAnnualSavings: 120,
        minAge: '55-59',
      },
      {
        provider: 'CVS ExtraCare 50+ Events',
        discount: '30% off regular-price CVS brand items',
        requirements: '50+ (must enroll in ExtraCare)',
        howToClaim: 'Sign up at cvs.com/extracare; watch email for 50+ events.',
        estimatedAnnualSavings: 90,
      },
      {
        provider: 'Rite Aid wellness65+',
        discount: '10% off Rite Aid brand items (+ free delivery on Thursdays)',
        requirements: '65+ (enroll in free wellness+ program)',
        howToClaim: 'Join wellness+ in-store or online; tier unlocks at 65.',
        estimatedAnnualSavings: 80,
        minAge: '65-69',
      },
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    icon: Film,
    color: 'text-amber-600 dark:text-amber-400',
    discounts: [
      {
        provider: 'AMC Senior Rate',
        discount: '~$3 off adult ticket',
        requirements: '60+',
        howToClaim: 'Select "Senior" when buying tickets; ID may be checked.',
        estimatedAnnualSavings: 36,
        minAge: '60-64',
      },
      {
        provider: 'Regal / Cinemark Senior Tuesdays',
        discount: 'Discounted tickets on Tuesdays',
        requirements: '60+ (Regal) / 62+ (Cinemark)',
        howToClaim: 'Choose senior rate at kiosk or window; show ID.',
        estimatedAnnualSavings: 48,
        minAge: '60-64',
      },
      {
        provider: 'Bowling Alleys (varies)',
        discount: '20-50% off weekday daytime games',
        requirements: '55+ or 60+',
        howToClaim: 'Call ahead to confirm your local alley offers a senior rate.',
        estimatedAnnualSavings: 60,
        minAge: '55-59',
      },
      {
        provider: 'America the Beautiful Senior Pass',
        discount: 'Lifetime National Parks pass — $80 one-time',
        requirements: '62+ U.S. citizen or permanent resident',
        howToClaim: 'Buy at a national park or store.usgs.gov. Valid for life.',
        estimatedAnnualSavings: 100,
        minAge: '60-64',
      },
      {
        provider: 'State Park Senior Passes',
        discount: 'Free or heavily discounted entry (varies by state)',
        requirements: '60+ or 62+ resident',
        howToClaim: 'Apply through your state parks website with proof of age.',
        estimatedAnnualSavings: 80,
        minAge: '60-64',
      },
    ],
  },
  {
    id: 'financial',
    label: 'Financial & Insurance',
    icon: Landmark,
    color: 'text-indigo-600 dark:text-indigo-400',
    discounts: [
      {
        provider: 'Senior Checking (Bank of America / Chase / Regions)',
        discount: 'Waived monthly fees + free checks',
        requirements: 'Typically 55+ or 62+',
        howToClaim: 'Ask at a branch to switch to the senior-qualifying account.',
        estimatedAnnualSavings: 144,
        minAge: '55-59',
      },
      {
        provider: 'The Hartford Auto Insurance (AARP)',
        discount: '~$577 avg savings for AARP drivers',
        requirements: 'AARP member + driver',
        howToClaim: 'Get a quote at thehartford.com/aarp.',
        estimatedAnnualSavings: 400,
        requires: { aarp: 'yes', driver: 'yes' },
      },
      {
        provider: 'Mature Driver Insurance Discount',
        discount: '5-15% off auto insurance',
        requirements: '55+ driver who completed an approved defensive-driving course',
        howToClaim: 'Take an AAA or AARP Smart Driver course; send certificate to your insurer.',
        estimatedAnnualSavings: 120,
        minAge: '55-59',
        requires: { driver: 'yes' },
      },
      {
        provider: 'Property Tax Reductions / Homestead',
        discount: 'Partial to full property tax exemption (state-specific)',
        requirements: 'Typically 65+ homeowner; some states add income limits',
        howToClaim: 'File with your county assessor. Search "[your state] senior property tax exemption".',
        estimatedAnnualSavings: 600,
        minAge: '65-69',
      },
      {
        provider: 'VA Home Loan Funding Fee Waiver',
        discount: 'Waived VA funding fee (~2.15% of loan)',
        requirements: 'Veteran with service-connected disability',
        howToClaim: 'Submit Certificate of Eligibility with VA Form 26-1880.',
        estimatedAnnualSavings: 300,
        requires: { veteran: 'yes' },
      },
    ],
  },
  {
    id: 'tax',
    label: 'Tax Benefits',
    icon: Calculator,
    color: 'text-green-700 dark:text-green-400',
    discounts: [
      {
        provider: 'IRS Extra Standard Deduction (65+)',
        discount: '+$1,950 (single) / +$1,550 each (married) extra deduction',
        requirements: '65+ by end of tax year',
        howToClaim: 'Check the "65 or older" box on Form 1040 — TurboTax/H&R Block auto-apply.',
        estimatedAnnualSavings: 430,
        minAge: '65-69',
      },
      {
        provider: 'Credit for the Elderly or Disabled',
        discount: 'Non-refundable credit up to $7,500',
        requirements: '65+ with limited income',
        howToClaim: 'File Schedule R with your Form 1040 if income is below thresholds.',
        estimatedAnnualSavings: 500,
        minAge: '65-69',
      },
      {
        provider: 'IRS Tax Counseling for the Elderly (TCE)',
        discount: 'Free tax prep (save $150-$300 vs paid preparer)',
        requirements: '60+',
        howToClaim: 'Find a site at irs.gov/tce or call 1-800-906-9887.',
        estimatedAnnualSavings: 200,
        minAge: '60-64',
      },
      {
        provider: 'Retirement Savings Required Minimum Distributions',
        discount: 'Qualified Charitable Distribution avoids tax on up to $105,000',
        requirements: '70½+ with an IRA',
        howToClaim: 'Direct your IRA custodian to send the distribution to charity.',
        estimatedAnnualSavings: 0, // highly personal; listed as guidance
        minAge: '70-74',
      },
    ],
  },
];

/* ── Question options ────────────────────── */
const ageOptions: { id: AgeRange; label: string; emoji: string }[] = [
  { id: '50-54', label: '50 – 54', emoji: '' },
  { id: '55-59', label: '55 – 59', emoji: '' },
  { id: '60-64', label: '60 – 64', emoji: '' },
  { id: '65-69', label: '65 – 69', emoji: '' },
  { id: '70-74', label: '70 – 74', emoji: '' },
  { id: '75+',   label: '75 or older', emoji: '' },
];

const yesNoButton = [
  { id: 'yes' as const, label: 'Yes', emoji: '' },
  { id: 'no'  as const, label: 'No',  emoji: '' },
];

const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

/* ── Component ───────────────────────────── */
export default function SeniorDiscountFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    age: null, veteran: null, aarp: null, driver: null, retired: null,
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  function reset() {
    setStep(0);
    setAnswers({ age: null, veteran: null, aarp: null, driver: null, retired: null });
  }

  function setAnswer<K extends keyof Answers>(key: K, value: Answers[K], next: number) {
    setAnswers(p => ({ ...p, [key]: value }));
    setStep(next);
  }

  /* Filter discounts based on answers */
  const eligible = useMemo(() => {
    if (!answers.age) return [];
    return discountData
      .map(cat => ({
        ...cat,
        discounts: cat.discounts.filter(d => {
          if (!meetsAge(answers.age!, d.minAge)) return false;
          if (d.requires?.veteran && answers.veteran !== d.requires.veteran) return false;
          if (d.requires?.aarp && answers.aarp !== d.requires.aarp) return false;
          if (d.requires?.driver && answers.driver !== d.requires.driver) return false;
          if (d.requires?.retired && answers.retired !== d.requires.retired) return false;
          return true;
        }),
      }))
      .filter(cat => cat.discounts.length > 0);
  }, [answers]);

  const totalSavings = useMemo(
    () => eligible.reduce((sum, cat) => sum + cat.discounts.reduce((s, d) => s + d.estimatedAnnualSavings, 0), 0),
    [eligible],
  );

  const totalDiscounts = useMemo(
    () => eligible.reduce((sum, cat) => sum + cat.discounts.length, 0),
    [eligible],
  );

  return (
    <>
      <SEOHead
        title="Senior Discount Finder | TekSure"
        description="Find every senior discount you qualify for — phone, groceries, restaurants, travel, tax breaks and more. Answer 5 quick questions and get a printable list with estimated savings."
        path="/tools/senior-discount-finder"
      />
      <main className="container py-12 min-h-[80vh] max-w-3xl mx-auto print:py-4 print:max-w-full">
        <div className="flex items-center gap-3 mb-2 print:hidden">
          <Tag className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Senior Discount Finder</h1>
        </div>
        <p className="text-muted-foreground mb-6 print:hidden">
          Answer 5 quick questions and we'll show you every discount you qualify for — with
          estimated annual savings you can take to the store.
        </p>

        {step < totalSteps && (
          <div className="mb-8 print:hidden">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Question {step + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Step 0 — Age */}
        {step === 0 && (
          <div key="age" {...slide}>
            <h2 className="text-xl font-semibold mb-4">What's your age range?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ageOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => setAnswer('age', o.id, 1)}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1 — Veteran */}
        {step === 1 && (
          <div key="veteran" {...slide}>
            <h2 className="text-xl font-semibold mb-4">Are you a U.S. military veteran?</h2>
            <p className="text-sm text-muted-foreground mb-4">Unlocks VA benefits and veteran-specific discounts.</p>
            <div className="grid grid-cols-2 gap-3">
              {yesNoButton.map(o => (
                <button
                  key={o.id}
                  onClick={() => setAnswer('veteran', o.id, 2)}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-border bg-card transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(0)}>← Back</Button>
          </div>
        )}

        {/* Step 2 — AARP */}
        {step === 2 && (
          <div key="aarp" {...slide}>
            <h2 className="text-xl font-semibold mb-4">Are you an AARP member?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              AARP membership starts at 50 and costs ~$16/year. It unlocks some of the best discounts on this list.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {yesNoButton.map(o => (
                <button
                  key={o.id}
                  onClick={() => setAnswer('aarp', o.id, 3)}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-border bg-card transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(1)}>← Back</Button>
          </div>
        )}

        {/* Step 3 — Driver */}
        {step === 3 && (
          <div key="driver" {...slide}>
            <h2 className="text-xl font-semibold mb-4">Do you drive?</h2>
            <p className="text-sm text-muted-foreground mb-4">Affects auto insurance and mature-driver discounts.</p>
            <div className="grid grid-cols-2 gap-3">
              {yesNoButton.map(o => (
                <button
                  key={o.id}
                  onClick={() => setAnswer('driver', o.id, 4)}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-border bg-card transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(2)}>← Back</Button>
          </div>
        )}

        {/* Step 4 — Retired */}
        {step === 4 && (
          <div key="retired" {...slide}>
            <h2 className="text-xl font-semibold mb-4">Are you retired?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              A few discounts (like some property-tax breaks and bank accounts) consider retirement status.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {yesNoButton.map(o => (
                <button
                  key={o.id}
                  onClick={() => setAnswer('retired', o.id, 5)}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-border bg-card transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">{o.emoji}</span>
                  <span className="font-medium">{o.label}</span>
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(3)}>← Back</Button>
          </div>
        )}

        {/* Results */}
        {step === 5 && (
          <div key="results" {...slide}>
            {/* Header (hidden when printing — a cleaner version appears below) */}
            <div className="flex items-center gap-3 mb-2 print:hidden">
              <Sparkles className="h-7 w-7 text-primary" />
              <h2 className="text-2xl font-bold">Your Discounts</h2>
            </div>
            <p className="text-muted-foreground mb-6 print:hidden">
              Based on your answers, here are <strong>{totalDiscounts}</strong> discounts you likely qualify for.
            </p>

            {/* Print-only title */}
            <div className="hidden print:block mb-4">
              <h1 className="text-2xl font-bold">Senior Discounts for {answers.age}</h1>
              <p className="text-sm">
                Generated by TekSure • {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Savings summary card */}
            <Card className="mb-6 border-primary/40 bg-primary/5 print:border-black">
              <CardContent className="p-5 flex items-center gap-4">
                <DollarSign className="h-10 w-10 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground">Estimated annual savings</p>
                  <p className="text-3xl font-bold">
                    ${totalSavings.toLocaleString()}
                    <span className="text-base font-normal text-muted-foreground ml-2">/year</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on average usage. Actual savings depend on how often you shop, travel, and dine out.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Categorized discounts */}
            <div className="space-y-6">
              {eligible.map(cat => {
                const Icon = cat.icon;
                const catSavings = cat.discounts.reduce((s, d) => s + d.estimatedAnnualSavings, 0);
                return (
                  <section key={cat.id} className="break-inside-avoid">
                    <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border">
                      <Icon className={`h-6 w-6 ${cat.color}`} />
                      <h3 className="text-xl font-bold">{cat.label}</h3>
                      <Badge variant="secondary" className="ml-auto">
                        ~${catSavings.toLocaleString()}/yr
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {cat.discounts.map((d, i) => (
                        <Card key={i} className="print:shadow-none print:border-black/50">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-base">{d.provider}</p>
                                <p className="text-sm text-primary font-medium">{d.discount}</p>
                              </div>
                              {d.estimatedAnnualSavings > 0 && (
                                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-300 shrink-0">
                                  ~${d.estimatedAnnualSavings}/yr
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm space-y-1 mt-2">
                              <p><span className="font-semibold text-muted-foreground">Who qualifies:</span> {d.requirements}</p>
                              <p><span className="font-semibold text-muted-foreground">How to claim:</span> {d.howToClaim}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              })}

              {eligible.length === 0 && (
                <div className="rounded-xl border border-dashed border-border p-6 text-center text-muted-foreground">
                  <p>No discounts matched your answers. Try changing an answer — AARP membership in particular unlocks a lot.</p>
                </div>
              )}
            </div>

            {/* Tips / safety notes */}
            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 mt-8 mb-6 print:hidden">
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1"> Pro tip</p>
              <p className="text-sm text-amber-700/90 dark:text-amber-300/90">
                Always <strong>ask before paying</strong> — many businesses offer senior discounts but only apply them when you ask.
                Carry a photo ID and, if you have one, your AARP card.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 print:hidden">
              <Button onClick={() => window.print()} className="gap-2">
                <Printer className="h-4 w-4" /> Print my list
              </Button>
              <Button variant="outline" onClick={reset} className="gap-2">
                <RotateCcw className="h-4 w-4" /> Start over
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
