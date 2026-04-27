import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  DollarSign,
  ShieldCheck,
  Stethoscope,
  Building2,
  Landmark,
  AlertTriangle,
  Info,
  HandHeart,
  Phone,
  Globe,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Wallet,
  BookOpen,
  Users,
  RefreshCw,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ──────────────────────────────────────────────────────────────────────────
 * Medicare Cost Estimator
 * ------------------------------------------------------------------------
 * A senior-friendly calculator that compares two real paths after 65:
 *   1) Original Medicare + Medigap Plan G + a standalone Part D plan
 *   2) Medicare Advantage (bundled) with copays per visit
 *
 * All rates are 2026 CMS published numbers plus plan-finder averages.
 * Nothing here is a quote — the page links to medicare.gov and SHIP
 * counselors, which are the free, neutral sources for real numbers.
 * ──────────────────────────────────────────────────────────────────── */

/* ── State tiers (Medigap Plan G premium multipliers) ─────────────────
 * Pulled from 2026 plan-finder averages. High-cost states (NY, FL, LA,
 * MA, NJ) run 20–40% above the national average; low-cost states (IA,
 * ID, HI, UT, WY) run 10–20% below. Use a three-tier multiplier rather
 * than 51 hand-picked numbers — good enough for an estimate. */
type StateTier = 'low' | 'mid' | 'high';

const STATE_TIERS: Record<string, StateTier> = {
  AL: 'mid', AK: 'mid', AZ: 'mid', AR: 'low', CA: 'high', CO: 'mid',
  CT: 'high', DE: 'mid', DC: 'high', FL: 'high', GA: 'mid', HI: 'low',
  ID: 'low', IL: 'mid', IN: 'mid', IA: 'low', KS: 'low', KY: 'mid',
  LA: 'high', ME: 'mid', MD: 'mid', MA: 'high', MI: 'mid', MN: 'low',
  MS: 'mid', MO: 'mid', MT: 'mid', NE: 'low', NV: 'mid', NH: 'mid',
  NJ: 'high', NM: 'mid', NY: 'high', NC: 'mid', ND: 'low', OH: 'mid',
  OK: 'mid', OR: 'mid', PA: 'high', RI: 'mid', SC: 'mid', SD: 'low',
  TN: 'mid', TX: 'high', UT: 'low', VT: 'high', VA: 'mid', WA: 'mid',
  WV: 'mid', WI: 'low', WY: 'low',
};

const STATES: Array<{ code: string; name: string }> = [
  { code: 'AL', name: 'Alabama' },     { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },     { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
  { code: 'DC', name: 'District of Columbia' },
  { code: 'FL', name: 'Florida' },     { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },      { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },    { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },        { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },    { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },       { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },   { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },    { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },    { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },        { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },      { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },       { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },     { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },   { code: 'WY', name: 'Wyoming' },
];

/* ── IRMAA brackets (2026, based on 2024 MAGI) ──────────────────────
 * Surcharge is added to both Part B and Part D. Bracket thresholds
 * reflect CMS's 2026 published tiers. */
interface IrmaaBracket {
  id: string;
  label: string;
  partBSurcharge: number;
  partDSurcharge: number;
}

const IRMAA_BRACKETS: IrmaaBracket[] = [
  { id: 't1', label: 'Under $106k individual / $212k couple',       partBSurcharge:   0, partDSurcharge:  0 },
  { id: 't2', label: '$106k–$133k individual / $212k–$266k couple', partBSurcharge:  74, partDSurcharge: 13 },
  { id: 't3', label: '$133k–$167k individual / $266k–$334k couple', partBSurcharge: 185, partDSurcharge: 34 },
  { id: 't4', label: '$167k–$200k individual / $334k–$400k couple', partBSurcharge: 296, partDSurcharge: 55 },
  { id: 't5', label: '$200k–$500k individual / $400k–$750k couple', partBSurcharge: 407, partDSurcharge: 75 },
  { id: 't6', label: 'Over $500k individual / $750k couple',        partBSurcharge: 444, partDSurcharge: 86 },
];

/* ── 2026 base numbers (CMS published) ──────────────────────────── */
const PART_A_NO_CREDITS_PREMIUM = 535;   // up to 2026 est.; free with 40+ quarters
const PART_B_STANDARD = 185;             // 2026 standard premium
const PART_B_DEDUCTIBLE = 257;           // 2026 annual
const PART_D_AVG_PREMIUM = 40;           // mid-range standalone plan
const PART_D_DEDUCTIBLE = 590;           // 2026 max allowable
const PART_D_PER_MED_MONTHLY = 9;        // blended generic + brand copay estimate
const DENTAL_VISION_ADDON = 35;          // standalone dental/vision policy average
const MA_PREMIUM_BASE = 18;              // 2026 MA weighted avg premium
const MA_DENTAL_VISION_INCLUDED = true;  // most MA plans bundle this

/* Medigap Plan G premium by age bucket and state tier */
function medigapPremium(age: number, tier: StateTier): number {
  const ageBase =
    age <= 65 ? 150 :
    age <= 70 ? 180 :
    age <= 75 ? 220 :
    age <= 80 ? 260 : 300;
  const multiplier = tier === 'high' ? 1.3 : tier === 'low' ? 0.85 : 1.0;
  return Math.round(ageBase * multiplier);
}

/* Hospital stay cost under each path (per year) */
function hospitalCostOriginal(stays: number): number {
  // Medigap Plan G covers Part A deductible ($1,676/stay in 2026).
  // With Plan G, out-of-pocket for covered stays is $0.
  return 0;
}
function hospitalCostAdvantage(stays: number): number {
  // MA typical: $350–$450/day for days 1–5, then $0. Estimate a
  // 4-day average stay at $395/day.
  return Math.min(stays, 2) * 4 * 395 + Math.max(0, stays - 2) * 4 * 395 * 0.9;
}

/* MA copays */
const MA_PRIMARY_COPAY = 10;      // typical 2026 in-network
const MA_SPECIALIST_COPAY = 40;

interface Scenario {
  name: string;
  monthly: number;
  annualExtra: number;   // deductibles and once-a-year items
  yearly: number;
  breakdown: Array<{ label: string; amount: number; note?: string }>;
  notes: string[];
}

export default function MedicareCostEstimator() {
  /* ── Form state ─────────────────────────────────────────────── */
  const [age, setAge] = useState<number>(65);
  const [stateCode, setStateCode] = useState<string>('FL');
  const [hasFortyQuarters, setHasFortyQuarters] = useState<'yes' | 'no'>('yes');
  const [irmaaBracket, setIrmaaBracket] = useState<string>('t1');
  const [doctorVisits, setDoctorVisits] = useState<number>(4);
  const [specialistVisits, setSpecialistVisits] = useState<number>(2);
  const [prescriptions, setPrescriptions] = useState<number>(3);
  const [hospitalStays, setHospitalStays] = useState<number>(0);
  const [inNetworkOnly, setInNetworkOnly] = useState<'yes' | 'no'>('no');
  const [dentalVision, setDentalVision] = useState<'yes' | 'no'>('yes');

  /* ── Derived values ────────────────────────────────────────── */
  const bracket = IRMAA_BRACKETS.find((b) => b.id === irmaaBracket) ?? IRMAA_BRACKETS[0];
  const tier = STATE_TIERS[stateCode] ?? 'mid';

  const scenarios = useMemo<{ original: Scenario; advantage: Scenario }>(() => {
    /* ── Original Medicare + Medigap Plan G + Part D ── */
    const partA = hasFortyQuarters === 'yes' ? 0 : PART_A_NO_CREDITS_PREMIUM;
    const partB = PART_B_STANDARD + bracket.partBSurcharge;
    const partD = PART_D_AVG_PREMIUM + bracket.partDSurcharge;
    const medigap = medigapPremium(age, tier);
    const dentalVisionOriginal = dentalVision === 'yes' ? DENTAL_VISION_ADDON : 0;

    // Under Original + Medigap Plan G: doctor and specialist visits after
    // the Part B deductible are covered. Medigap pays what Medicare doesn't.
    // So monthly cost is driven almost entirely by premiums.
    const medsCost = prescriptions * PART_D_PER_MED_MONTHLY;
    const originalMonthly =
      partA + partB + partD + medigap + dentalVisionOriginal + medsCost;

    const originalAnnualExtras =
      PART_B_DEDUCTIBLE + PART_D_DEDUCTIBLE + hospitalCostOriginal(hospitalStays);
    const originalYearly = originalMonthly * 12 + originalAnnualExtras;

    /* ── Medicare Advantage ── */
    const maPremium = MA_PREMIUM_BASE + (inNetworkOnly === 'yes' ? 0 : 12);
    // Part B still owed under MA
    const maMonthly = partA + partB + maPremium + (dentalVision === 'yes' && !MA_DENTAL_VISION_INCLUDED ? DENTAL_VISION_ADDON : 0);

    const doctorCopays = doctorVisits * MA_PRIMARY_COPAY;
    const specialistCopays = specialistVisits * MA_SPECIALIST_COPAY;
    const maRxCost = prescriptions * 12; // MA plans usually bundle Rx; copays slightly higher
    const maAnnualExtras = doctorCopays + specialistCopays + maRxCost + hospitalCostAdvantage(hospitalStays);
    const maYearly = maMonthly * 12 + maAnnualExtras;

    const original: Scenario = {
      name: 'Original Medicare + Medigap Plan G + Part D',
      monthly: Math.round(originalMonthly),
      annualExtra: Math.round(originalAnnualExtras),
      yearly: Math.round(originalYearly),
      breakdown: [
        { label: 'Part A premium', amount: partA, note: hasFortyQuarters === 'yes' ? 'Free — you earned 40+ work credits' : 'You have fewer than 40 work credits' },
        { label: 'Part B premium', amount: partB, note: bracket.partBSurcharge > 0 ? `Includes $${bracket.partBSurcharge} IRMAA surcharge` : 'No IRMAA surcharge' },
        { label: 'Medigap Plan G', amount: medigap, note: `Age ${age} in ${stateCode} (${tier}-cost tier)` },
        { label: 'Part D plan', amount: partD, note: bracket.partDSurcharge > 0 ? `Includes $${bracket.partDSurcharge} IRMAA surcharge` : undefined },
        { label: 'Prescriptions', amount: Math.round(medsCost), note: `~$${PART_D_PER_MED_MONTHLY}/med/mo copay average` },
        ...(dentalVision === 'yes' ? [{ label: 'Dental + vision add-on', amount: DENTAL_VISION_ADDON }] : []),
      ],
      notes: [
        'Plan G caps your hospital and specialist bills at $0 after Part B deductible.',
        'See any doctor who takes Medicare — no network restrictions.',
        `Annual deductibles: $${PART_B_DEDUCTIBLE} Part B and up to $${PART_D_DEDUCTIBLE} Part D.`,
      ],
    };

    const advantage: Scenario = {
      name: 'Medicare Advantage (bundled)',
      monthly: Math.round(maMonthly),
      annualExtra: Math.round(maAnnualExtras),
      yearly: Math.round(maYearly),
      breakdown: [
        { label: 'Part A premium', amount: partA, note: hasFortyQuarters === 'yes' ? 'Free — you earned 40+ work credits' : undefined },
        { label: 'Part B premium', amount: partB, note: 'Required even with Advantage' },
        { label: 'Advantage plan premium', amount: maPremium, note: inNetworkOnly === 'yes' ? 'HMO / network-only plan' : 'PPO with out-of-network option' },
        { label: 'Primary visits (copays)', amount: Math.round(doctorCopays / 12), note: `$${MA_PRIMARY_COPAY}/visit × ${doctorVisits}/year` },
        { label: 'Specialist visits (copays)', amount: Math.round(specialistCopays / 12), note: `$${MA_SPECIALIST_COPAY}/visit × ${specialistVisits}/year` },
        { label: 'Prescriptions', amount: prescriptions * 12 / 12, note: 'Rx usually bundled into the MA plan' },
        ...(dentalVision === 'yes' ? [{ label: 'Dental + vision', amount: 0, note: 'Included in most MA plans at no extra premium' }] : []),
      ],
      notes: [
        'Copays, not deductibles, drive most out-of-pocket spending.',
        inNetworkOnly === 'yes' ? 'HMO plans only cover in-network doctors — emergencies excluded.' : 'PPO plans cost more but let you go out-of-network.',
        'Annual out-of-pocket max protects you, but hospital stays add up fast.',
      ],
    };

    return { original, advantage };
  }, [age, stateCode, hasFortyQuarters, bracket, doctorVisits, specialistVisits, prescriptions, hospitalStays, inNetworkOnly, dentalVision, tier]);

  const cheapest =
    scenarios.original.yearly <= scenarios.advantage.yearly
      ? 'original'
      : 'advantage';
  const savings = Math.abs(scenarios.original.yearly - scenarios.advantage.yearly);

  const resetForm = () => {
    setAge(65);
    setStateCode('FL');
    setHasFortyQuarters('yes');
    setIrmaaBracket('t1');
    setDoctorVisits(4);
    setSpecialistVisits(2);
    setPrescriptions(3);
    setHospitalStays(0);
    setInNetworkOnly('no');
    setDentalVision('yes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Medicare Cost Estimator 2026 | Original vs Advantage | TekSure"
        description="Compare 2026 Medicare costs side-by-side. See Part A, Part B, Part D, Medigap, and Advantage plans against your real situation. Free, senior-friendly, no sign-up."
      />
      <Navbar />

      <main className="flex-1">
        <PageBreadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'Medicare Cost Estimator' },
          ]}
        />

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-14 md:py-20 max-w-5xl">
            <div className="flex flex-col items-center text-center gap-5">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                2026 CMS rates · No sign-up · Nothing stored
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Medicare Cost Estimator
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                Original Medicare vs Advantage. Real numbers for your situation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <BookmarkButton
                  type="tool"
                  slug="medicare-cost-estimator"
                  title="Medicare Cost Estimator"
                  url="/calculators/medicare-cost"
                />
                <Button
                  variant="secondary"
                  onClick={resetForm}
                  className="min-h-14 text-base"
                >
                  <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
                  Reset the form
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main calculator grid ────────────────────────────── */}
        <section className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* ── Inputs ────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h2 className="text-lg font-bold">Your situation</h2>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-base font-medium">
                      Your age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      min={60}
                      max={100}
                      value={age}
                      onChange={(e) => setAge(Math.max(60, Math.min(100, Number(e.target.value) || 65)))}
                      className="min-h-14 text-lg"
                    />
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-base font-medium">
                      Your state
                    </Label>
                    <Select value={stateCode} onValueChange={setStateCode}>
                      <SelectTrigger id="state" className="min-h-14 text-base">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATES.map((s) => (
                          <SelectItem key={s.code} value={s.code} className="text-base">
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 40 quarters */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium">
                      Did you work 10+ years (40 quarters) paying Medicare tax?
                    </Label>
                    <RadioGroup
                      value={hasFortyQuarters}
                      onValueChange={(v) => setHasFortyQuarters(v as 'yes' | 'no')}
                      className="flex gap-6 pt-1"
                    >
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="yes" id="q-yes" />
                        <span className="text-base">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="no" id="q-no" />
                        <span className="text-base">No / not sure</span>
                      </label>
                    </RadioGroup>
                    <p className="text-sm text-muted-foreground">
                      If yes, Part A is free. If no, you owe up to ${PART_A_NO_CREDITS_PREMIUM}/mo.
                    </p>
                  </div>

                  {/* IRMAA */}
                  <div className="space-y-2">
                    <Label htmlFor="irmaa" className="text-base font-medium">
                      Income bracket (for Part B surcharge)
                    </Label>
                    <Select value={irmaaBracket} onValueChange={setIrmaaBracket}>
                      <SelectTrigger id="irmaa" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {IRMAA_BRACKETS.map((b) => (
                          <SelectItem key={b.id} value={b.id} className="text-base">
                            {b.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Based on your tax return from 2 years ago (2024 for 2026 Medicare).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h2 className="text-lg font-bold">Your expected care</h2>
                  </div>

                  {/* Doctor visits slider */}
                  <SliderField
                    label="Primary doctor visits per year"
                    value={doctorVisits}
                    min={0}
                    max={50}
                    onChange={setDoctorVisits}
                  />

                  {/* Specialist visits */}
                  <SliderField
                    label="Specialist visits per year"
                    value={specialistVisits}
                    min={0}
                    max={30}
                    onChange={setSpecialistVisits}
                  />

                  {/* Prescriptions */}
                  <SliderField
                    label="Regular prescription medications"
                    value={prescriptions}
                    min={0}
                    max={15}
                    onChange={setPrescriptions}
                    suffix={prescriptions === 1 ? 'med' : 'meds'}
                  />
                  <p className="text-sm text-muted-foreground -mt-3">
                    Rough copay estimate: ${PART_D_PER_MED_MONTHLY}/med/mo after deductible.
                  </p>

                  {/* Hospital stays */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium">
                      Hospital stays you expect this year
                    </Label>
                    <RadioGroup
                      value={String(hospitalStays)}
                      onValueChange={(v) => setHospitalStays(Number(v))}
                      className="grid grid-cols-3 gap-2"
                    >
                      {[0, 1, 2].map((n) => (
                        <label
                          key={n}
                          className={`flex items-center justify-center gap-2 border rounded-lg cursor-pointer min-h-14 transition-colors ${
                            hospitalStays === n ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                          }`}
                        >
                          <RadioGroupItem value={String(n)} id={`h-${n}`} />
                          <span className="text-base font-medium">
                            {n === 2 ? '2+' : n}
                          </span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* In-network only */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium">
                      Willing to use in-network doctors only?
                    </Label>
                    <RadioGroup
                      value={inNetworkOnly}
                      onValueChange={(v) => setInNetworkOnly(v as 'yes' | 'no')}
                      className="flex gap-6 pt-1"
                    >
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="yes" id="n-yes" />
                        <span className="text-base">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="no" id="n-no" />
                        <span className="text-base">No — I want flexibility</span>
                      </label>
                    </RadioGroup>
                  </div>

                  {/* Dental/Vision */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium">
                      Want dental and vision coverage?
                    </Label>
                    <RadioGroup
                      value={dentalVision}
                      onValueChange={(v) => setDentalVision(v as 'yes' | 'no')}
                      className="flex gap-6 pt-1"
                    >
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="yes" id="d-yes" />
                        <span className="text-base">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer min-h-14">
                        <RadioGroupItem value="no" id="d-no" />
                        <span className="text-base">No</span>
                      </label>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ── Results ──────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-6">
              {/* Three scenario cards */}
              <div className="grid gap-5 md:grid-cols-3">
                {/* Original */}
                <ScenarioCard
                  title="Original + Medigap + Part D"
                  icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                  monthly={scenarios.original.monthly}
                  yearly={scenarios.original.yearly}
                  isCheapest={cheapest === 'original'}
                  color="blue"
                />
                {/* Advantage */}
                <ScenarioCard
                  title="Medicare Advantage"
                  icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
                  monthly={scenarios.advantage.monthly}
                  yearly={scenarios.advantage.yearly}
                  isCheapest={cheapest === 'advantage'}
                  color="emerald"
                />
                {/* Cheapest */}
                <Card className="border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/30">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                      <h3 className="text-base font-bold">Cheapest for you</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1">
                      {cheapest === 'original' ? 'Original + Medigap' : 'Medicare Advantage'}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Saves about ${savings.toLocaleString()}/year over the other option — based on the care you expect.
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      Cheapest ≠ best — read the trade-offs
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Breakdowns */}
              <div className="grid gap-5 md:grid-cols-2">
                <BreakdownCard scenario={scenarios.original} accent="text-blue-700 dark:text-blue-300" />
                <BreakdownCard scenario={scenarios.advantage} accent="text-emerald-700 dark:text-emerald-300" />
              </div>

              {/* Disclaimer */}
              <Alert>
                <Info className="h-5 w-5" aria-hidden="true" />
                <AlertTitle>These are estimates — not quotes</AlertTitle>
                <AlertDescription>
                  Rates come from 2026 CMS published numbers plus medicare.gov Plan Finder averages.
                  Your actual premium depends on the plan you pick, the state you live in, and your
                  health history. Medicare rates change every year. For real quotes, use
                  the free tools below.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* ── Factors affecting cost ─────────────────────────────── */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              What else moves your Medicare bill
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <FactorCard
                icon={<DollarSign className="h-5 w-5" aria-hidden="true" />}
                title="IRMAA (income surcharge)"
              >
                If your 2-year-old tax return shows income above $106k single / $212k joint,
                Medicare adds a surcharge to Parts B and D. The surcharge is tiered — going
                one dollar over a bracket costs you the full next step. A major life event
                (retirement, divorce, widowhood) can let you appeal and drop a tier.
              </FactorCard>

              <FactorCard
                icon={<HandHeart className="h-5 w-5" aria-hidden="true" />}
                title="Extra Help (Low-Income Subsidy)"
              >
                If your income is under about $23k single / $31k joint and your assets
                under roughly $17k / $34k, Extra Help pays your Part D premium and
                capped copays. More than 3 million people qualify and don't claim it.
                Apply free at ssa.gov/extrahelp — no "helper" fee.
              </FactorCard>

              <FactorCard
                icon={<Landmark className="h-5 w-5" aria-hidden="true" />}
                title="Medicare Savings Programs"
              >
                Your state Medicaid office runs four MSP tiers (QMB, SLMB, QI, QDWI)
                that pay some or all of your Part B premium. Income limits vary by state —
                some states have no asset test at all. A SHIP counselor can check
                eligibility for free.
              </FactorCard>

              <FactorCard
                icon={<Wallet className="h-5 w-5" aria-hidden="true" />}
                title="Working past 65"
              >
                If you or your spouse work for a company with 20+ employees and
                have that employer's group plan, you can delay Part B without
                penalty. Smaller employers flip that rule — Medicare becomes
                primary at 65. Check with HR before you make a move.
              </FactorCard>
            </div>
          </div>
        </section>

        {/* ── Free help reminder ──────────────────────────────────── */}
        <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <Card className="border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full shrink-0">
                  <HandHeart className="h-8 w-8 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold">Free, neutral help — never pay a "helper" site</h2>
                  <p className="text-base text-muted-foreground">
                    Every state has a federally funded program called SHIP (State Health Insurance Assistance Program).
                    Counselors meet with you one-on-one, by phone or in person, and they do not sell plans.
                    Medicare's own Plan Finder at medicare.gov gives real quotes for every plan in your ZIP code.
                    Both are completely free. If a website charges you to "help" with Medicare, close the tab.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <a
                      href="https://www.shiphelp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white dark:bg-background rounded-lg border hover:border-emerald-500 transition-colors min-h-14"
                    >
                      <Phone className="h-5 w-5 text-emerald-700 dark:text-emerald-300 shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-base">Find your state SHIP</div>
                        <div className="text-sm text-muted-foreground">shiphelp.org · free counselor</div>
                      </div>
                    </a>
                    <a
                      href="https://www.medicare.gov/plan-compare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white dark:bg-background rounded-lg border hover:border-emerald-500 transition-colors min-h-14"
                    >
                      <Globe className="h-5 w-5 text-emerald-700 dark:text-emerald-300 shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-semibold text-base">Medicare Plan Finder</div>
                        <div className="text-sm text-muted-foreground">medicare.gov · real quotes</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Related links ──────────────────────────────────────── */}
        <section className="container mx-auto px-4 pb-12 max-w-5xl">
          <h2 className="text-xl font-bold mb-5">More TekSure resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/tools/government-benefits-portal"
              className="group flex items-center gap-4 p-5 border-2 rounded-xl hover:border-primary transition-colors min-h-14"
            >
              <Landmark className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <div className="font-semibold text-base group-hover:text-primary">Government Benefits Portal</div>
                <div className="text-sm text-muted-foreground">Every .gov benefits site — SSA, Medicare, VA, SNAP, LIHEAP</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0" aria-hidden="true" />
            </Link>
            <Link
              to="/checklists/turning-65"
              className="group flex items-center gap-4 p-5 border-2 rounded-xl hover:border-primary transition-colors min-h-14"
            >
              <BookOpen className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <div className="font-semibold text-base group-hover:text-primary">Turning 65 — Checklist</div>
                <div className="text-sm text-muted-foreground">Medicare deadlines, Social Security, discounts, digital cleanup</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Common questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="q1" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="text-base font-semibold text-left min-h-14">
                  Is this exact?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  No, and you should be wary of any website that says its Medicare estimate is exact.
                  We use 2026 CMS published rates for Part A, B, and D, national averages for Part D
                  plans, and age-and-state tiers for Medigap. A real quote requires your ZIP code and
                  the specific plans available there. Use medicare.gov Plan Finder for actual numbers,
                  or call a free SHIP counselor for a one-on-one review.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="text-base font-semibold text-left min-h-14">
                  Why does my neighbor pay a different rate?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Three big reasons: IRMAA (income surcharge), Medigap age-pricing, and which state
                  and county they live in. Part B premiums rise in six income steps from $185 to $629.
                  Medigap Plan G can run $150 in Iowa and $400 in New York for the same coverage.
                  And Medicare Advantage plans vary county by county — the plan down the street
                  may have a $0 premium where yours has $30.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="text-base font-semibold text-left min-h-14">
                  Do I really need Medigap?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Medigap (a.k.a. Medicare Supplement) fills gaps Original Medicare leaves open —
                  the 20% coinsurance on doctor visits, the Part A deductible per hospital stay,
                  and more. Without it, a single hospital stay can run $1,676 out-of-pocket,
                  and specialist copays pile up. Plan G is the most popular choice for people
                  new to Medicare. Medicare Advantage replaces the need for Medigap but trades
                  it for copays and network restrictions. SHIP counselors can compare the two
                  paths for your specific health history.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="text-base font-semibold text-left min-h-14">
                  What is Extra Help?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Extra Help (also called the Low-Income Subsidy or LIS) is a federal program
                  that pays most of your Part D prescription drug costs. The 2026 income limits
                  are about $23,500 single / $31,700 joint, with modest asset limits. People who
                  qualify pay $0 for their Part D premium and no more than $4.90 for generic drugs
                  and $12.15 for brand-name drugs. Apply free at ssa.gov/extrahelp. If you qualify
                  for Extra Help, you may also qualify for a Medicare Savings Program — ask a
                  SHIP counselor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="text-base font-semibold text-left min-h-14">
                  When can I switch plans?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Four main windows: the Initial Enrollment Period (7 months around your 65th
                  birthday), the Annual Enrollment Period (Oct 15 – Dec 7, for changes starting
                  Jan 1), the Medicare Advantage Open Enrollment Period (Jan 1 – Mar 31, for MA
                  members to switch MA plans or return to Original), and Special Enrollment
                  Periods (triggered by moving, losing employer coverage, qualifying for Extra
                  Help, and other life events). Missing a window can mean a late-enrollment
                  penalty that follows you for life — mark these dates on your calendar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 max-w-3xl text-center">
          <Alert className="text-left">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            <AlertTitle>One more reminder</AlertTitle>
            <AlertDescription>
              Medicare is complicated on purpose. If a website, agent, or phone call pressures
              you to sign up right now, that's a red flag. Take your time, use free help, and
              never pay for a quote.
            </AlertDescription>
          </Alert>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Sub-components
 * ──────────────────────────────────────────────────────────────────── */

interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}

function SliderField({ label, value, min, max, onChange, suffix }: SliderFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">{label}</Label>
        <span className="text-lg font-bold tabular-nums">
          {value}
          {suffix ? ` ${suffix}` : ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
        aria-label={label}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

interface ScenarioCardProps {
  title: string;
  icon: React.ReactNode;
  monthly: number;
  yearly: number;
  isCheapest: boolean;
  color: 'blue' | 'emerald';
}

function ScenarioCard({ title, icon, monthly, yearly, isCheapest, color }: ScenarioCardProps) {
  const colorMap = {
    blue: 'border-blue-500 bg-blue-50 dark:bg-blue-950/30',
    emerald: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
  };
  return (
    <Card className={`border-2 ${colorMap[color]}`}>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-base font-bold">{title}</h3>
        </div>
        <p className="text-3xl font-bold mb-1">${monthly.toLocaleString()}<span className="text-base font-normal text-muted-foreground">/mo</span></p>
        <p className="text-sm text-muted-foreground mb-3">
          About ${yearly.toLocaleString()}/year including deductibles
        </p>
        {isCheapest && (
          <Badge variant="default" className="text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" aria-hidden="true" />
            Best value for your situation
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}

interface BreakdownCardProps {
  scenario: Scenario;
  accent: string;
}

function BreakdownCard({ scenario, accent }: BreakdownCardProps) {
  return (
    <Card className="border-2">
      <CardContent className="p-5">
        <h3 className={`text-base font-bold mb-4 ${accent}`}>{scenario.name}</h3>
        <dl className="space-y-2 mb-4">
          {scenario.breakdown.map((item, i) => (
            <div key={i} className="flex justify-between items-start gap-3 text-sm border-b pb-2 last:border-0">
              <div className="flex-1">
                <dt className="font-medium">{item.label}</dt>
                {item.note && <dd className="text-xs text-muted-foreground mt-0.5">{item.note}</dd>}
              </div>
              <div className="font-semibold tabular-nums shrink-0">
                ${Math.round(item.amount).toLocaleString()}/mo
              </div>
            </div>
          ))}
        </dl>
        <div className="border-t pt-3 space-y-2">
          <div className="flex justify-between font-bold text-base">
            <span>Monthly total</span>
            <span className="tabular-nums">${scenario.monthly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>+ annual deductibles & extras</span>
            <span className="tabular-nums">${scenario.annualExtra.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-1 border-t">
            <span>Yearly total</span>
            <span className="tabular-nums">${scenario.yearly.toLocaleString()}</span>
          </div>
        </div>
        {scenario.notes.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {scenario.notes.map((n, i) => (
              <li key={i} className="flex gap-2">
                <Info className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

interface FactorCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FactorCard({ icon, title, children }: FactorCardProps) {
  return (
    <Card className="border-2 hover:border-primary transition-colors">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-primary">
          {icon}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          {children}
        </p>
      </CardContent>
    </Card>
  );
}
