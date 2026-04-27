import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Printer,
  CheckCircle2,
  ShieldAlert,
  Heart,
  HelpCircle,
  Home,
  Pill,
  Flame,
  Utensils,
  Bus,
  Users,
  Scale,
  HeartPulse,
  FileText,
  Flag,
  TreePine,
  Fish,
  Landmark,
  ExternalLink,
  AlertTriangle,
  Sparkles,
  DollarSign,
  PhoneCall,
  BookOpenCheck,
  ArrowRight,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/* ──────────────────────────────────────────────────────────────
 * State Benefits Finder
 * ------------------------------------------------------------
 * Every state has programs many seniors never hear about —
 * property tax freezes, prescription aid, utility help, legal
 * aid, park passes, and more. This page puts them in one place
 * for 15 high-population states and provides safe, official
 * starting points for the rest.
 *
 * Plain-language, senior-friendly design per TekSure standards.
 * ────────────────────────────────────────────────────────────── */

/* ── Type ─────────────────────────────────────────────────── */

interface ProgramLine {
  icon: LucideIcon;
  label: string;
  detail: string;
}

interface StateBenefits {
  abbr: string;
  name: string;
  aaaUrl: string;
  shipPhone: string;
  shipUrl: string;
  stateTax: string;
  veterans: string;
  parkPass: string;
  huntFish: string;
  programs: ProgramLine[];
  statePortal?: { label: string; url: string };
  hasDetail: boolean;
}

/* ── Generic / fallback programs used when a state is not yet
 *    fully researched. Every resident can still find help. ── */

const GENERIC_PROGRAMS: ProgramLine[] = [
  {
    icon: Home,
    label: 'Property tax relief (Homestead / Senior Freeze / Circuit Breaker)',
    detail:
      'Most states lower or freeze property taxes for homeowners 65+ who meet income limits. Check your county assessor\'s office or your state Department of Revenue.',
  },
  {
    icon: Pill,
    label: 'Prescription assistance',
    detail:
      'Many states run low-income drug programs on top of Medicare Part D. The NeedyMeds database at needymeds.org lists yours by ZIP code.',
  },
  {
    icon: Flame,
    label: 'Utility assistance (LIHEAP + state programs)',
    detail:
      'LIHEAP helps pay heating and cooling bills. Apply through your state at acf.hhs.gov/ocs/programs/liheap.',
  },
  {
    icon: HeartPulse,
    label: 'Medicare Savings Programs (MSP)',
    detail:
      'If your monthly income is under roughly $1,750 for a single person (limits vary by state and year), Medicaid can pay your Part B premium — about $185/month back in your pocket.',
  },
  {
    icon: Utensils,
    label: 'SNAP (Food Assistance) for 60+',
    detail:
      'Seniors often qualify even with higher income. Medical costs over $35/month can be deducted. Apply through your state\'s social services portal.',
  },
  {
    icon: Bus,
    label: 'Transportation (reduced fare / senior ride / paratransit)',
    detail:
      'Nearly every transit agency offers half-price or free rides for seniors. Paratransit gives door-to-door service if you cannot use a regular bus.',
  },
  {
    icon: Users,
    label: 'Senior centers and Area Agency on Aging',
    detail:
      'Your local AAA handles meals, rides, caregiver support, and benefits counseling. Find yours at eldercare.acl.gov or call 1-800-677-1116.',
  },
  {
    icon: Scale,
    label: 'Legal Aid',
    detail:
      'Free civil legal help for landlord disputes, denied benefits, scams, and estate planning. Find your office at lsc.gov/find-legal-aid.',
  },
];

/* ── State data — 15 researched states + DC placeholder ── */

const STATES: StateBenefits[] = [
  /* ── CALIFORNIA ── */
  {
    abbr: 'CA',
    name: 'California',
    aaaUrl: 'https://aging.ca.gov',
    shipPhone: '1-800-434-0222',
    shipUrl: 'https://www.aging.ca.gov/HICAP',
    stateTax: 'California fully taxes retirement income (no Social Security tax though). Seniors 65+ get a higher standard deduction and a Senior Tax Credit up to about $1,700.',
    veterans: 'CalVet home loans, property tax exemption up to $250K for disabled veterans, free state park pass (Distinguished Veteran Pass).',
    parkPass: 'California State Park Senior Pass — $5 discount per day, $1 off camping for 62+ (income-tested version is free).',
    huntFish: 'Reduced-Fee Sport Fishing License for residents 65+ meeting income limits; free lifetime hunting license for disabled vets.',
    statePortal: { label: 'BenefitsCal.gov', url: 'https.benefitscal.com' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Homeowners\' Property Tax Exemption + Prop 19',
        detail:
          '$7,000 off assessed value for owner-occupied homes. Prop 19 lets homeowners 55+ transfer their low property tax base when they move anywhere in California, up to three times.',
      },
      {
        icon: Home,
        label: 'Senior Property Tax Postponement',
        detail:
          'Eligible homeowners 62+ with income under ~$53,000 can postpone property taxes (state pays, lien on the home).',
      },
      {
        icon: Pill,
        label: 'Medi-Cal + Medicare Savings Programs',
        detail:
          'California has generous MSP income limits — about $1,800/month for a single person qualifies for Part B premium payment.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + CARE / FERA utility discounts',
        detail:
          'CARE gives 20-35% off PG&E, SCE, SDG&E bills. FERA is for slightly higher incomes. LIHEAP pays one-time bill assistance each year.',
      },
      {
        icon: Utensils,
        label: 'CalFresh (SNAP)',
        detail:
          'Seniors 60+ use the simpler Elderly Simplified Application. Monthly benefit averages $125 for single seniors.',
      },
      {
        icon: Bus,
        label: 'Senior transit discounts',
        detail:
          'Clipper START card for Bay Area transit, Metro Senior TAP card in LA (35¢ rides), free rides on most local systems for 65+.',
      },
    ],
  },

  /* ── TEXAS ── */
  {
    abbr: 'TX',
    name: 'Texas',
    aaaUrl: 'https://www.hhs.texas.gov/services/aging',
    shipPhone: '1-800-252-9240',
    shipUrl: 'https://www.hhs.texas.gov/services/aging/health-information-counseling-and-advocacy-program-hicap',
    stateTax: 'No state income tax. No tax on Social Security or retirement income. Property taxes are high — but seniors have strong protections.',
    veterans: 'Disabled Veteran Property Tax Exemption (up to 100% for 100%-disabled), Hazlewood Act tuition benefit transferable to dependents.',
    parkPass: 'Texas State Parklands Passport — free park entry for residents 65+ (Texas Parklands Pass, $75/yr standard).',
    huntFish: 'Super Combo license discounted to ~$32 for residents 65+ (vs. $68 regular). Free lifetime licenses for disabled vets.',
    statePortal: { label: 'YourTexasBenefits.com', url: 'https://www.yourtexasbenefits.com' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Over-65 Property Tax Freeze + $10,000 Exemption',
        detail:
          'At 65, your school district property taxes freeze at that year\'s amount. Plus a $10,000 school-tax exemption on top of the general homestead exemption.',
      },
      {
        icon: Home,
        label: 'Property Tax Deferral',
        detail:
          'Homeowners 65+ can defer (not forgive) property taxes until the home is sold. 5% interest accrues but no foreclosure.',
      },
      {
        icon: Pill,
        label: 'Medicaid for the Elderly and People with Disabilities (MEPD)',
        detail:
          'Covers doctor visits, long-term care, and drugs for seniors meeting income/asset limits.',
      },
      {
        icon: Flame,
        label: 'LIHEAP (CEAP in Texas)',
        detail:
          'Comprehensive Energy Assistance Program — up to $1,800/year toward electric, gas, and weatherization. Summer cooling aid is common in TX.',
      },
      {
        icon: Utensils,
        label: 'SNAP — simpler for seniors',
        detail:
          'Texas uses the Elderly Simplified Application Project. Medical expenses above $35/month deduct from counted income.',
      },
      {
        icon: HeartPulse,
        label: 'STAR+PLUS long-term care',
        detail:
          'Medicaid managed care covering nursing home, assisted living, and in-home care for adults 65+ or disabled.',
      },
    ],
  },

  /* ── NEW YORK ── */
  {
    abbr: 'NY',
    name: 'New York',
    aaaUrl: 'https://aging.ny.gov',
    shipPhone: '1-800-701-0501',
    shipUrl: 'https://aging.ny.gov/health-insurance-information-counseling-and-assistance-program-hiicap',
    stateTax: 'NY excludes the first $20,000 of pension/IRA income for people 59½+. Social Security is fully exempt. Up to $20,000 of other retirement income exempt for 65+.',
    veterans: 'Alternative Veterans Property Tax Exemption (15% reduction + 10% for combat + disability rating bonus), free hunting/fishing for disabled vets, veteran home loan.',
    parkPass: 'Golden Park Program — free vehicle entrance to state parks on weekdays for NY residents 62+.',
    huntFish: 'Reduced hunting license $5 for residents 70+ with 5+ years of licenses; free lifetime sporting license for disabled vets.',
    statePortal: { label: 'MyBenefits.ny.gov', url: 'https://mybenefits.ny.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'EPIC — Elderly Pharmaceutical Insurance Coverage',
        detail:
          'Wraps around Medicare Part D to cut drug copays. Open to NY residents 65+ with income under about $75K single / $100K couple. Average savings ~$1,400/year.',
      },
      {
        icon: Home,
        label: 'Enhanced STAR + Senior Citizen Exemption',
        detail:
          'Enhanced STAR saves ~$1,500/year on school taxes for homeowners 65+ with income under ~$98K. Plus a local Senior Citizen exemption up to 50% off assessed value for low-income seniors.',
      },
      {
        icon: Home,
        label: 'SCRIE and DRIE (NYC rent freeze)',
        detail:
          'Senior Citizen Rent Increase Exemption freezes rent for eligible NYC renters 62+ in rent-regulated apartments. DRIE is the disability version.',
      },
      {
        icon: Flame,
        label: 'HEAP + Cooling Assistance',
        detail:
          'Regular HEAP, Emergency HEAP, and a summer $800 AC program if anyone in the home has a medical need for cooling.',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Farmers\' Market Checks',
        detail:
          'NY uses a simpler SNAP application for 60+. Additionally, $25 in Farmers\' Market Nutrition Program checks each summer for eligible seniors.',
      },
      {
        icon: Bus,
        label: 'Reduced-Fare MetroCard / OMNY',
        detail:
          'Half-fare MTA rides for NYC residents 65+. Similar senior discounts on LIRR, Metro-North, and upstate transit.',
      },
    ],
  },

  /* ── FLORIDA ── */
  {
    abbr: 'FL',
    name: 'Florida',
    aaaUrl: 'https://elderaffairs.org',
    shipPhone: '1-800-963-5337',
    shipUrl: 'https://www.floridashine.org',
    stateTax: 'No state income tax. No tax on Social Security, pensions, or retirement income. Property taxes are homestead-protected.',
    veterans: 'Homestead exemption of $5,000 for disabled vets; 100%-disabled vets get full property tax exemption; free driver license; free hunting/fishing for disabled vets.',
    parkPass: 'Florida State Parks Annual Family Entrance Pass — $120 covers 8 people; no senior-specific discount, but 65+ can camp for half price.',
    huntFish: 'Resident Senior Lifetime Hunting/Fishing License — one-time $13.50 fee, never expires, for residents 65+.',
    statePortal: { label: 'MyACCESS Florida', url: 'https://myaccessflorida.com' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Additional $50,000 Senior Homestead Exemption',
        detail:
          'Counties and cities may grant an extra $50,000 exemption to homeowners 65+ with household income under about $36,000. In some long-term residency cases, property taxes can go to zero.',
      },
      {
        icon: Home,
        label: 'Save Our Homes cap',
        detail:
          'Florida caps your homestead\'s assessed-value increase at 3% per year. Seniors who have owned for decades pay dramatically less than newcomers.',
      },
      {
        icon: Pill,
        label: 'Florida Discount Drug Card',
        detail:
          'Free state card that averages 15-40% off brand-name and generic drugs. No income limit. Find enrollment at floridadiscountdrugcard.com.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + Weatherization',
        detail:
          'Up to $1,000 per year through local Community Action agencies. Free AC installation and home sealing for qualifying low-income seniors.',
      },
      {
        icon: Utensils,
        label: 'SUNCAP (simplified SNAP for SSI recipients)',
        detail:
          'Floridians on Supplemental Security Income automatically qualify for SUNCAP food benefits — no separate SNAP application needed.',
      },
      {
        icon: Users,
        label: 'Community Care for the Elderly (CCE)',
        detail:
          'Homemaker, personal care, adult day care, and respite services for seniors 60+ at risk of nursing-home placement. Sliding-scale fees.',
      },
    ],
  },

  /* ── PENNSYLVANIA ── */
  {
    abbr: 'PA',
    name: 'Pennsylvania',
    aaaUrl: 'https://www.aging.pa.gov',
    shipPhone: '1-800-783-7067',
    shipUrl: 'https://www.aging.pa.gov/aging-services/Pages/APPRISE.aspx',
    stateTax: 'PA does not tax Social Security, pensions, or IRA/401(k) distributions after retirement age. Earned income is taxed at a flat 3.07%.',
    veterans: 'Real Estate Tax Exemption for 100%-disabled vets meeting income limits, Military Family Relief Assistance grants, free hunting/fishing for disabled vets.',
    parkPass: 'No general senior discount, but PA state parks are free to enter. Senior camping discount of $2/night.',
    huntFish: 'Senior Resident Lifetime Hunting License — $51.90 one-time for 65+. Senior fishing license $15.90/year.',
    statePortal: { label: 'COMPASS PA', url: 'https://www.compass.state.pa.us' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'PACE and PACENET',
        detail:
          'Pennsylvania\'s nationally-recognized drug program. PACE caps copays at $6/generic and $9/brand for residents 65+ with income under $14,500 single / $17,700 couple. PACENET extends coverage to higher incomes with a monthly premium.',
      },
      {
        icon: Home,
        label: 'Property Tax/Rent Rebate Program',
        detail:
          'Up to $1,000/year back for homeowners and renters 65+ with income under $45,000. Permanently expanded in 2024. File at revenue.pa.gov.',
      },
      {
        icon: Home,
        label: 'Homestead/Farmstead Exclusion',
        detail:
          'Reduces assessed value for owner-occupied homes — funded by gaming revenue. Apply through your county assessor.',
      },
      {
        icon: Flame,
        label: 'LIHEAP Cash + Crisis',
        detail:
          'Up to $1,000 toward winter heating, plus a separate Crisis grant if you\'re at risk of shutoff. Apply at compass.state.pa.us.',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Food Box (CSFP)',
        detail:
          'Commodity Supplemental Food Program delivers a monthly 40-lb food box to income-eligible seniors 60+ through local food banks.',
      },
      {
        icon: Bus,
        label: 'Free PA Transit for Seniors 65+',
        detail:
          'Ride free on any fixed-route bus, trolley, or subway statewide. Shared-ride (door-to-door) available at 15% of fare.',
      },
    ],
  },

  /* ── ILLINOIS ── */
  {
    abbr: 'IL',
    name: 'Illinois',
    aaaUrl: 'https://ilaging.illinois.gov',
    shipPhone: '1-800-252-8966',
    shipUrl: 'https://ilaging.illinois.gov/resources/mmwship.html',
    stateTax: 'Illinois fully exempts all retirement income — Social Security, pensions, IRA/401(k) withdrawals. Flat 4.95% tax applies only to earned income.',
    veterans: 'Standard Homestead Exemption for Veterans with Disabilities, Returning Veterans Homestead Exemption, free Illinois state park pass for disabled vets.',
    parkPass: 'Illinois state parks are free. Senior camping discount (half price) at state parks for residents 62+.',
    huntFish: 'Reduced hunting/fishing license ($1.50) for residents 65+. Free Senior Fishing License at 75+.',
    statePortal: { label: 'ABE Illinois', url: 'https://abe.illinois.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'Illinois Rx — prescription discount card',
        detail:
          'Free discount card open to any IL resident with no drug coverage. Average savings 10-75%. Enroll at illinoisrx.com.',
      },
      {
        icon: Home,
        label: 'Senior Citizens Assessment Freeze (Senior Freeze)',
        detail:
          'Freezes your home\'s assessed value for homeowners 65+ with household income under $65,000. Must reapply annually.',
      },
      {
        icon: Home,
        label: 'Senior Citizens Homestead Exemption',
        detail:
          'Automatic $8,000 off assessed value (higher in Cook County) for homeowners 65+ — no income limit.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + Percentage of Income Payment Plan (PIPP)',
        detail:
          'LIHEAP pays one-time bill assistance; PIPP caps your utility bill at 6% of income. Open October–May through Community Action agencies.',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Farmers\' Market Coupons',
        detail:
          'Elderly Simplified Application for 60+. Plus $25 in farmers\' market coupons issued each summer to eligible seniors.',
      },
      {
        icon: Bus,
        label: 'Benefit Access Program',
        detail:
          'Free or reduced-fare transit, plus a license plate discount for IL seniors 65+ meeting income limits.',
      },
    ],
  },

  /* ── OHIO ── */
  {
    abbr: 'OH',
    name: 'Ohio',
    aaaUrl: 'https://aging.ohio.gov',
    shipPhone: '1-800-686-1578',
    shipUrl: 'https://insurance.ohio.gov/ships',
    stateTax: 'Ohio taxes retirement income but offers a Retirement Income Credit up to $200 and a Senior Citizen Credit of $50 for taxpayers 65+. Social Security is fully exempt.',
    veterans: 'Veterans property tax exemption ($50,000 off assessed value for 100%-disabled), GI Promise tuition, free state park camping for disabled vets.',
    parkPass: 'Ohio state parks are free. $2/night senior camping discount for 60+.',
    huntFish: 'Senior hunting/fishing licenses roughly 50% off for residents 66+; free for permanently disabled.',
    statePortal: { label: 'Ohio Benefits', url: 'https://benefits.ohio.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'Golden Buckeye discount card',
        detail:
          'Free card for Ohioans 60+ that gives discounts at thousands of pharmacies, restaurants, and services. Mailed automatically around your 60th birthday.',
      },
      {
        icon: Home,
        label: 'Homestead Exemption',
        detail:
          '$26,200 off the home\'s market value for owner-occupiers 65+ with Ohio adjusted gross income under about $38,600. 100%-disabled vets qualify regardless of income.',
      },
      {
        icon: Flame,
        label: 'HEAP + PIPP Plus',
        detail:
          'HEAP pays a one-time winter credit (up to $750). PIPP Plus caps monthly gas/electric at 5% of household income each if you qualify.',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Farmers\' Market Coupons',
        detail:
          'Elderly Simplified Application available. $50 in summer farmers\' market coupons for eligible seniors 60+.',
      },
      {
        icon: HeartPulse,
        label: 'PASSPORT Medicaid Waiver',
        detail:
          'Home- and community-based services for adults 60+ who would otherwise need a nursing home — home care, meals, adult day care.',
      },
      {
        icon: Users,
        label: 'Ohio Senior Community Service Employment Program (OSCSEP)',
        detail:
          'Paid part-time community work and job training for low-income residents 55+ looking to re-enter the workforce.',
      },
    ],
  },

  /* ── NORTH CAROLINA ── */
  {
    abbr: 'NC',
    name: 'North Carolina',
    aaaUrl: 'https://www.ncdhhs.gov/divisions/aging-and-adult-services',
    shipPhone: '1-855-408-1212',
    shipUrl: 'https://www.ncdoi.gov/consumers/medicare-and-seniors-health-insurance-information-program-ships',
    stateTax: 'NC taxes most retirement income at a flat 4.5% rate. Social Security is fully exempt. Bailey Settlement exempts certain government pensions earned before Aug 1989.',
    veterans: 'Disabled Veteran Property Tax Exclusion ($45,000 off assessed value), free hunting/fishing license for 100%-disabled vets.',
    parkPass: 'NC state parks are free to enter. Senior camping discount at most parks.',
    huntFish: 'Senior Resident Lifetime Comprehensive Fishing License — one-time $15 for 65+. Senior sportsman license one-time $15 for 65+.',
    statePortal: { label: 'ePASS NC', url: 'https://epass.nc.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Elderly or Disabled Homestead Exclusion',
        detail:
          'Excludes $25,000 or 50% (whichever is greater) of home value for NC residents 65+ with income under $36,700.',
      },
      {
        icon: Home,
        label: 'Circuit Breaker Tax Deferment',
        detail:
          'Caps property taxes at 4-5% of income for low-income seniors; the rest is deferred with a lien until the home is sold.',
      },
      {
        icon: Pill,
        label: 'NC MedAssist',
        detail:
          'Free pharmacy for uninsured NC residents under 300% of poverty. Also runs free OTC giveaway events across the state.',
      },
      {
        icon: Flame,
        label: 'LIEAP + Crisis Intervention',
        detail:
          'Low Income Energy Assistance Program — December/January application window for seniors/disabled. Crisis Intervention Program helps with shutoff notices year-round.',
      },
      {
        icon: Utensils,
        label: 'Food and Nutrition Services (SNAP)',
        detail:
          'NC uses the Elderly Simplified Application. Deduct medical costs over $35/month to potentially qualify.',
      },
      {
        icon: HeartPulse,
        label: 'Community Alternatives Program for Disabled Adults (CAP/DA)',
        detail:
          'Medicaid waiver providing in-home care to seniors/disabled who would otherwise be in a nursing home.',
      },
    ],
  },

  /* ── MICHIGAN ── */
  {
    abbr: 'MI',
    name: 'Michigan',
    aaaUrl: 'https://www.michigan.gov/osa',
    shipPhone: '1-800-803-7174',
    shipUrl: 'https://www.michigan.gov/osa/0,4635,7-234-64083_64250-235253--,00.html',
    stateTax: 'Michigan phased in full retirement-income exemption by 2026 for those born after 1945 — following "Lowering MI Costs" plan. Social Security always fully exempt.',
    veterans: 'Disabled Veterans Property Tax Exemption (100% exemption for 100%-disabled vets), Michigan Veterans Trust Fund emergency grants.',
    parkPass: 'Michigan Recreation Passport — $14/yr added to vehicle registration (annual). Same price regardless of age, but parks include free senior programs.',
    huntFish: 'Senior hunting/fishing licenses roughly 60% off for residents 65+.',
    statePortal: { label: 'MI Bridges', url: 'https://newmibridges.michigan.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Homestead Property Tax Credit',
        detail:
          'Up to $1,700 refundable credit for MI homeowners and renters. Seniors 65+ get enhanced limits (homestead value up to $160,700, income up to ~$68,000).',
      },
      {
        icon: Home,
        label: 'Principal Residence Exemption',
        detail:
          'Exempts 18 mills of school operating tax for owner-occupied homes — applied automatically at closing.',
      },
      {
        icon: Pill,
        label: 'MIRxCard',
        detail:
          'Free statewide prescription discount card for uninsured MI residents. Average savings 25%. Order at michigan.gov/mirxcard.',
      },
      {
        icon: Flame,
        label: 'State Emergency Relief + Home Heating Credit',
        detail:
          'SER pays emergency heat, electric, and water bills. Home Heating Credit gives up to ~$600/year to low-income MI households at tax time.',
      },
      {
        icon: Utensils,
        label: 'SNAP — Michigan Bridge Card',
        detail:
          'Apply via MI Bridges. Seniors 60+ may qualify with income up to 200% of poverty. EBT cards accepted at most groceries + many farmers markets.',
      },
      {
        icon: Users,
        label: 'MI Choice Waiver',
        detail:
          'Medicaid home-care waiver for adults 65+ and disabled who meet nursing-home level-of-care. Covers in-home care, adult day care, and equipment.',
      },
    ],
  },

  /* ── NEW JERSEY ── */
  {
    abbr: 'NJ',
    name: 'New Jersey',
    aaaUrl: 'https://www.nj.gov/humanservices/doas',
    shipPhone: '1-800-792-8820',
    shipUrl: 'https://www.state.nj.us/humanservices/doas/services/ship',
    stateTax: 'NJ excludes up to $100,000 pension/retirement income for married filers 62+ (depending on gross income). Social Security is fully exempt.',
    veterans: 'NJ Veteran Income Tax Exemption ($6,000), 100%-disabled veteran property tax exemption, free vehicle registration for disabled vets.',
    parkPass: 'State park vehicle fees waived Monday–Friday for NJ residents 62+ (present driver license at entrance).',
    huntFish: 'Reduced senior resident fishing license ($12.50 vs. $22.50). Free for 70+ with lifetime license.',
    statePortal: { label: 'NJ Save / NJ Helps', url: 'https://www.njsave.nj.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'PAAD + Senior Gold',
        detail:
          'Pharmaceutical Assistance to the Aged and Disabled — $5/generic and $7/brand copays for NJ residents 65+ with income under $52,142 single / $59,209 couple. Senior Gold covers higher incomes with 50% copays above a deductible.',
      },
      {
        icon: Home,
        label: 'Senior Freeze (Property Tax Reimbursement)',
        detail:
          'Reimburses the difference between your current property tax and the tax from the year you first qualified. Homeowners 65+ with income under ~$150,000.',
      },
      {
        icon: Home,
        label: 'ANCHOR + StayNJ',
        detail:
          'ANCHOR rebate up to $1,750 for 65+ homeowners. StayNJ (beginning 2026) will cut property taxes 50% (up to $6,500) for NJ residents 65+ under $500K income.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + USF + Lifeline Credit',
        detail:
          'LIHEAP + Universal Service Fund cap utility bills at 6% of income. The state Lifeline Credit gives $225/year to seniors on PAAD.',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Nutrition',
        detail:
          'NJ SNAP uses Elderly Simplified Application for 60+. Senior Farmers\' Market Nutrition Program issues $25 in summer vouchers.',
      },
      {
        icon: Bus,
        label: 'Reduced-Fare NJ Transit',
        detail:
          'Half-fare bus/rail/light-rail for NJ residents 62+. Identification card available at Customer Service centers.',
      },
    ],
  },

  /* ── VIRGINIA ── */
  {
    abbr: 'VA',
    name: 'Virginia',
    aaaUrl: 'https://www.dars.virginia.gov',
    shipPhone: '1-800-552-3402',
    shipUrl: 'https://www.vda.virginia.gov/vicap.htm',
    stateTax: 'VA gives 65+ residents a $12,000 age deduction (phased out above ~$62K income). Social Security is fully exempt.',
    veterans: 'Disabled Veterans Real Estate Tax Exemption (100% exemption for 100%-disabled), Surviving Spouse of KIA exemption, Virginia Military Survivors tuition.',
    parkPass: 'Virginia State Parks Senior Pass — free 62+ day use (Lifetime Pass $75 one-time).',
    huntFish: 'Free fishing license for 65+ VA residents. Senior hunting license $7 (vs. $22).',
    statePortal: { label: 'CommonHelp', url: 'https://commonhelp.virginia.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Real Estate Tax Relief for the Elderly',
        detail:
          'County-level program (Fairfax, Arlington, Virginia Beach all participate). Full or partial property tax exemption for 65+ homeowners under income/asset limits.',
      },
      {
        icon: Pill,
        label: 'Virginia Prescription Assistance',
        detail:
          'Rx Partnership connects uninsured VA residents to manufacturer patient-assistance programs for free or low-cost brand drugs.',
      },
      {
        icon: Flame,
        label: 'Energy Assistance Program',
        detail:
          'VA EAP includes Fuel, Crisis, and Cooling components. Plus Weatherization for free home sealing and insulation.',
      },
      {
        icon: Utensils,
        label: 'SNAP + CSFP food box',
        detail:
          'Elderly Simplified Application. Commodity Supplemental Food Program delivers a monthly senior food box through regional food banks.',
      },
      {
        icon: HeartPulse,
        label: 'Commonwealth Coordinated Care Plus (CCC Plus)',
        detail:
          'Medicaid managed care plan for seniors, children with disabilities, and long-term care — covers home care, nursing home, hospice.',
      },
      {
        icon: Users,
        label: 'Auxiliary Grant Program',
        detail:
          'Supplement to SSI for seniors living in licensed assisted-living or adult-foster care homes. Pays the difference up to the state rate.',
      },
    ],
  },

  /* ── MASSACHUSETTS ── */
  {
    abbr: 'MA',
    name: 'Massachusetts',
    aaaUrl: 'https://www.mass.gov/orgs/executive-office-of-aging-independence',
    shipPhone: '1-800-243-4636',
    shipUrl: 'https://www.mass.gov/serving-the-health-insurance-needs-of-everyone-shine',
    stateTax: 'MA does not tax Social Security. Pensions from out-of-state government jobs are taxed; MA public pensions exempt. Personal exemption at 65+ is doubled.',
    veterans: 'Chapter 115 Veterans Benefits (monthly cash + medical aid), property tax exemptions for disabled vets, free driver license for 100%-disabled.',
    parkPass: 'MassParks Pass — free with library card. No separate senior pass needed, but DCR camping gives 50% off for 62+.',
    huntFish: 'Reduced hunting/fishing licenses for 65-69 ($12.50). Free for 70+.',
    statePortal: { label: 'DTA Connect', url: 'https://dtaconnect.eohhs.mass.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Pill,
        label: 'Prescription Advantage',
        detail:
          'State-sponsored drug plan that coordinates with Medicare Part D. Lowers copays for MA residents 65+ or disabled with moderate income. Fills the Part D gap.',
      },
      {
        icon: Home,
        label: 'Senior Circuit Breaker Tax Credit',
        detail:
          'Up to $2,730 refundable state tax credit for MA homeowners/renters 65+ with income under ~$72K (2024) whose housing costs exceed 10% of income.',
      },
      {
        icon: Home,
        label: 'Senior Property Tax Work-Off',
        detail:
          'Over 170 MA towns let seniors 60+ work part-time for the town in exchange for up to $2,000 off their property tax bill.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + Weatherization',
        detail:
          'Fuel Assistance covers November through April. Higher benefits for MA seniors than many states ($800-$2,300). Mass Save program adds free home energy audits.',
      },
      {
        icon: Utensils,
        label: 'SNAP + MassHealth',
        detail:
          'Seniors with income up to 200% of poverty may qualify, with medical deductions. Elder SNAP simplifies the application.',
      },
      {
        icon: Bus,
        label: 'MBTA Senior CharlieCard',
        detail:
          'Half-fare bus/subway for MA residents 65+ with a Senior CharlieCard. Apply at any MBTA CharlieCard Store.',
      },
    ],
  },

  /* ── WASHINGTON ── */
  {
    abbr: 'WA',
    name: 'Washington',
    aaaUrl: 'https://www.dshs.wa.gov/altsa',
    shipPhone: '1-800-562-6900',
    shipUrl: 'https://www.insurance.wa.gov/statewide-health-insurance-benefits-advisors-shiba',
    stateTax: 'No state income tax. No tax on retirement income or Social Security. Property taxes can be reduced or deferred for qualifying seniors.',
    veterans: 'Disabled Veterans Property Tax Exemption for 80%+ disability; $1,500 Dependent Property Tax Exemption for surviving spouses.',
    parkPass: 'Discover Pass for state parks — $35/year. A Senior Interagency Pass is $80 one-time for 62+ covering state & federal lands.',
    huntFish: 'Senior Combination Fishing License ~$18. Senior Big Game licenses roughly 50% off.',
    statePortal: { label: 'WAPlanfortheFuture / Washington Connection', url: 'https://www.washingtonconnection.org' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Senior Property Tax Exemption',
        detail:
          'Freezes assessed value and exempts portions of property taxes for WA residents 61+ (or disabled) with household disposable income up to $84,000 (varies by county).',
      },
      {
        icon: Home,
        label: 'Property Tax Deferral Program',
        detail:
          'Eligible seniors can defer (not erase) property taxes up to 80% of home equity, paid when the home is sold.',
      },
      {
        icon: Pill,
        label: 'Washington PrescriptionDrugProgram',
        detail:
          'State-run free discount card — no income limit. Negotiates rates on par with Medicare Part D pricing.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + Weatherization',
        detail:
          'Up to $1,000/year toward heat bills. Weatherization replaces furnaces, seals homes, and adds insulation free for eligible seniors.',
      },
      {
        icon: Utensils,
        label: 'Basic Food + Food for the Heart',
        detail:
          'WA\'s SNAP is called Basic Food. Plus state-funded Food for the Heart helps seniors who are over federal SNAP limits.',
      },
      {
        icon: Users,
        label: 'MTP / COPES Medicaid waivers',
        detail:
          'Medicaid Transformation Project and COPES pay for in-home caregivers, adult family home care, or assisted living for qualifying seniors.',
      },
    ],
  },

  /* ── ARIZONA ── */
  {
    abbr: 'AZ',
    name: 'Arizona',
    aaaUrl: 'https://des.az.gov/aaa',
    shipPhone: '1-800-432-4040',
    shipUrl: 'https://des.az.gov/ship',
    stateTax: 'AZ fully exempts Social Security. Up to $2,500 of federal/AZ government pensions exempt. Other retirement income taxed at a flat 2.5%.',
    veterans: 'Military Retiree Pay Exemption (up to $3,500), Disabled Veterans Property Tax Exemption, Arizona Veterans Memorial Coliseum free admission card.',
    parkPass: 'Arizona State Parks — free on Veterans Day; $7-$15 daily fees. No general senior discount, but AZ Veterans receive free day-use.',
    huntFish: 'Senior (70+) licenses heavily discounted; $2.50 for hunting/fishing combo for seniors with 25+ years of AZ residency.',
    statePortal: { label: 'Health-e-Arizona Plus', url: 'https://www.healthearizonaplus.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Senior Property Valuation Protection (Freeze)',
        detail:
          'Freezes your home\'s assessed (LPV) value for AZ homeowners 65+ with income under ~$46,000 single / $58,000 couple. Reapply every 3 years.',
      },
      {
        icon: Home,
        label: 'Property Tax Deferral',
        detail:
          'Low-income seniors 70+ can defer property taxes. Repaid when the home transfers.',
      },
      {
        icon: Pill,
        label: 'CoppeRx Card',
        detail:
          'Free prescription discount card for any AZ resident. Average savings 20-30%. Enrollment at copperxcard.com.',
      },
      {
        icon: Flame,
        label: 'LIHEAP + SRP Economy Price Plan',
        detail:
          'LIHEAP pays one-time winter/summer aid. SRP and APS offer low-income discount rates (about 25% off) for seniors.',
      },
      {
        icon: Utensils,
        label: 'Nutrition Assistance (SNAP)',
        detail:
          'AZ Nutrition Assistance uses Elderly Simplified Application. Apply at healthearizonaplus.gov.',
      },
      {
        icon: HeartPulse,
        label: 'Arizona Long Term Care System (ALTCS)',
        detail:
          'Medicaid long-term care for adults 65+ and disabled. Covers nursing home, assisted living, and home care.',
      },
    ],
  },

  /* ── GEORGIA ── */
  {
    abbr: 'GA',
    name: 'Georgia',
    aaaUrl: 'https://aging.georgia.gov',
    shipPhone: '1-866-552-4464',
    shipUrl: 'https://aging.georgia.gov/georgiacares',
    stateTax: 'GA gives a Retirement Income Exclusion of $35,000 for taxpayers 62-64 and $65,000 for 65+. Social Security fully exempt.',
    veterans: 'Disabled Veteran Homestead Tax Exemption ($121,812 off assessed value in 2024), free hunting/fishing for 100%-disabled vets.',
    parkPass: 'Georgia State Parks Senior ParkPass — $35/yr for 62+ (normally $50).',
    huntFish: 'Honorary Lifetime Hunting/Fishing License — free for GA residents 65+.',
    statePortal: { label: 'Georgia Gateway', url: 'https://gateway.ga.gov' },
    hasDetail: true,
    programs: [
      {
        icon: Home,
        label: 'Senior School Tax Exemption',
        detail:
          'GA homeowners 62+ may be exempt from school property taxes (most common) or county taxes. Rules and income caps vary dramatically by county — ask your Tax Assessor.',
      },
      {
        icon: Home,
        label: 'Regular Homestead + Double Homestead',
        detail:
          'Every Georgia homeowner gets a $2,000 homestead exemption. Homeowners 65+ with low income get an additional $4,000 off.',
      },
      {
        icon: Pill,
        label: 'GeorgiaPrescriptionCard',
        detail:
          'Free drug discount card — no income limit. Stacks with programs like GoodRx. Average savings 25%.',
      },
      {
        icon: Flame,
        label: 'Energy Assistance Program',
        detail:
          'Georgia EAP pays a one-time heating credit ($350-$550) November-March; elderly/disabled households can apply starting in November (earlier than general population).',
      },
      {
        icon: Utensils,
        label: 'SNAP + Senior Farmers\' Market Nutrition',
        detail:
          'Elderly Simplified Application for 60+. Senior Farmers\' Market Nutrition Program issues $50 in summer vouchers.',
      },
      {
        icon: HeartPulse,
        label: 'Community Care Services Program (CCSP)',
        detail:
          'Medicaid waiver providing home-delivered meals, adult day health, personal support, and respite for seniors at nursing-home level of care.',
      },
    ],
  },
];

/* Names for states we have not deep-researched. Generic fallback
 * card is shown when one of these is selected. */
const OTHER_STATES: { abbr: string; name: string }[] = [
  { abbr: 'AL', name: 'Alabama' },
  { abbr: 'AK', name: 'Alaska' },
  { abbr: 'AR', name: 'Arkansas' },
  { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' },
  { abbr: 'DE', name: 'Delaware' },
  { abbr: 'DC', name: 'District of Columbia' },
  { abbr: 'HI', name: 'Hawaii' },
  { abbr: 'ID', name: 'Idaho' },
  { abbr: 'IN', name: 'Indiana' },
  { abbr: 'IA', name: 'Iowa' },
  { abbr: 'KS', name: 'Kansas' },
  { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'ME', name: 'Maine' },
  { abbr: 'MD', name: 'Maryland' },
  { abbr: 'MN', name: 'Minnesota' },
  { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'MO', name: 'Missouri' },
  { abbr: 'MT', name: 'Montana' },
  { abbr: 'NE', name: 'Nebraska' },
  { abbr: 'NV', name: 'Nevada' },
  { abbr: 'NH', name: 'New Hampshire' },
  { abbr: 'NM', name: 'New Mexico' },
  { abbr: 'ND', name: 'North Dakota' },
  { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'OR', name: 'Oregon' },
  { abbr: 'RI', name: 'Rhode Island' },
  { abbr: 'SC', name: 'South Carolina' },
  { abbr: 'SD', name: 'South Dakota' },
  { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'UT', name: 'Utah' },
  { abbr: 'VT', name: 'Vermont' },
  { abbr: 'WV', name: 'West Virginia' },
  { abbr: 'WI', name: 'Wisconsin' },
  { abbr: 'WY', name: 'Wyoming' },
];

/* ── Official source cards ─────────────────────────────────── */

interface SourceCard {
  name: string;
  url: string;
  body: string;
  icon: LucideIcon;
}

const OFFICIAL_SOURCES: SourceCard[] = [
  {
    name: 'Benefits.gov Eligibility Screener',
    url: 'https://www.benefits.gov',
    body: '10-15 minute federal screener that lists every program you may qualify for. No account, no SSN required.',
    icon: Landmark,
  },
  {
    name: 'BenefitsCheckUp (NCOA)',
    url: 'https://www.benefitscheckup.org',
    body: 'Free National Council on Aging screener focused specifically on seniors. Finds state and federal programs together.',
    icon: Heart,
  },
  {
    name: 'Eldercare Locator',
    url: 'https://eldercare.acl.gov',
    body: 'Federal directory that connects you to your local Area Agency on Aging. Call 1-800-677-1116.',
    icon: Users,
  },
  {
    name: 'State Department of Aging',
    url: 'https://acl.gov/programs/aging-and-disability-networks/state-agencies-aging',
    body: 'Every state has a cabinet-level Department of Aging (or equivalent). ACL hosts the official directory.',
    icon: Building2,
  },
  {
    name: '2-1-1 (United Way)',
    url: 'https://www.211.org',
    body: 'Dial 211 or text your ZIP code to 211. Free, 24/7. A live person helps you find local food, housing, utility aid, and caregiver support.',
    icon: PhoneCall,
  },
  {
    name: 'Medicare.gov SHIP Locator',
    url: 'https://www.shiphelp.org',
    body: 'Free, unbiased Medicare counselor in every state. They do not sell insurance and never take commissions.',
    icon: HeartPulse,
  },
  {
    name: 'USA.gov State Government Directory',
    url: 'https://www.usa.gov/state-government',
    body: 'Official .gov index to every state portal. Safer than searching — no copycat domains.',
    icon: Flag,
  },
];

/* ── How-to-apply general guidance ─────────────────────────── */

interface HowToItem {
  title: string;
  body: string;
  icon: LucideIcon;
}

const HOW_TO_APPLY: HowToItem[] = [
  {
    title: 'Gather your documents',
    body: 'Photo ID, Social Security card, proof of age (birth certificate or driver license), proof of residency (utility bill or lease), proof of income (Social Security award letter, pay stubs, tax return), and the deed or mortgage statement for property-tax programs.',
    icon: FileText,
  },
  {
    title: 'Pick an application method',
    body: 'Most states offer online applications through their benefits portal, but paper applications and in-person help are always available. If typing is a challenge, your Area Agency on Aging or 211 operator will help you apply by phone.',
    icon: BookOpenCheck,
  },
  {
    title: 'Expect a timeline',
    body: 'SNAP and energy aid usually come through in 2-4 weeks. Property tax programs align with the tax calendar — often 30-60 days. Medicare Savings Programs can take 45-90 days depending on the state. Apply early in the year when possible.',
    icon: MapPin,
  },
  {
    title: 'Reapply every year',
    body: 'Most benefits need to be renewed annually — income is re-verified. Put the renewal date on your calendar. Missing a renewal can cut off benefits you still qualify for.',
    icon: Sparkles,
  },
];

/* ── Red flags ────────────────────────────────────────────── */

const RED_FLAGS: string[] = [
  'A website or caller charges a fee to "help you apply" for government benefits that are always free on the real state portal.',
  'Someone cold-calls claiming to be from "Senior Benefits Department" and asks for your Social Security or Medicare number.',
  'An email or text says your benefits "will be canceled" unless you click a link within 24 hours. Agencies do not work that way.',
  'The website URL ends in .com, .net, or .org instead of your state\'s official .gov or .us domain.',
  'You are asked to pay an application fee with a gift card, wire transfer, cryptocurrency, or prepaid debit card.',
  'A "caseworker" insists on coming to your home to collect documents or signatures — real state workers never do this unannounced.',
  'Someone offers to "guarantee" your approval for a benefit in exchange for a share of the payment.',
];

/* ── Free help ─────────────────────────────────────────────── */

interface FreeHelp {
  name: string;
  body: string;
  url: string;
  urlLabel: string;
}

const FREE_HELP: FreeHelp[] = [
  {
    name: 'SHIP — State Health Insurance Assistance Program',
    body: 'Free, unbiased Medicare and Medigap counseling in all 50 states. Trained volunteers, not insurance agents. Helps you compare plans and fight denials.',
    url: 'https://www.shiphelp.org',
    urlLabel: 'shiphelp.org',
  },
  {
    name: 'AARP Foundation Tax-Aide',
    body: 'Free tax prep by IRS-certified volunteers, February through April. Focus on people 50+ with low-to-moderate income. About 3,500 sites nationwide.',
    url: 'https://www.aarp.org/money/taxes/aarp_taxaide',
    urlLabel: 'aarp.org/taxaide',
  },
  {
    name: 'Area Agency on Aging (AAA)',
    body: 'Every county has one. They coordinate meals, rides, home care, and caregiver support for people 60+. Call the Eldercare Locator at 1-800-677-1116.',
    url: 'https://eldercare.acl.gov',
    urlLabel: 'eldercare.acl.gov',
  },
  {
    name: 'Legal Aid',
    body: 'Free civil legal help for landlord disputes, denied benefits, consumer scams, and estate planning. Find your local office at lsc.gov.',
    url: 'https://www.lsc.gov/about-lsc/what-legal-aid/find-legal-aid',
    urlLabel: 'lsc.gov/find-legal-aid',
  },
  {
    name: '211 — Social Services Referral',
    body: 'Dial 211 or text your ZIP code to 211. Free, 24/7, nationwide. A live person helps you find food, housing, utility aid, caregiver support, and crisis help.',
    url: 'https://www.211.org',
    urlLabel: '211.org',
  },
  {
    name: 'NCOA BenefitsCheckUp',
    body: 'National Council on Aging\'s free screener for the 2,500+ benefit programs for seniors. Finds state + federal programs you qualify for in 15 minutes.',
    url: 'https://www.benefitscheckup.org',
    urlLabel: 'benefitscheckup.org',
  },
];

/* ── FAQ ──────────────────────────────────────────────────── */

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'Am I likely to qualify for anything?',
    a: 'Almost everyone 60+ qualifies for at least one program they are not using. NCOA estimates the average senior leaves about $4,000 per year in unclaimed benefits on the table. Property tax relief, SNAP, and Medicare Savings Programs are the most commonly missed.',
  },
  {
    q: 'Will any of this affect my Social Security or Medicare?',
    a: 'No — state benefits run on top of Social Security and Medicare, not instead of them. In fact, Medicare Savings Programs pay your Medicare premium for you. Property tax and utility help are not reported to the federal government at all.',
  },
  {
    q: 'Can I apply for multiple programs at once?',
    a: 'Yes. Most state portals let you apply for SNAP, Medicaid, LIHEAP, and cash aid from a single account. Federal programs (VA, Social Security, Medicare Savings) each need their own application, but your Area Agency on Aging can coordinate them for you.',
  },
  {
    q: 'Do these benefits count as income on my taxes?',
    a: 'Most do not. SNAP, Medicaid, LIHEAP, and property tax relief are generally not taxable. State Social Security supplements and unemployment benefits are. When in doubt, ask a free AARP Tax-Aide volunteer — they handle this every day.',
  },
  {
    q: 'What if my state is not detailed on this page?',
    a: 'Scroll to the "Don\'t see your state" card. Every state has the same core programs — LIHEAP, SNAP, Medicare Savings, Medicaid, property tax relief — and the generic starting points there will take you to your state\'s official portal.',
  },
  {
    q: 'Is there a limit on how much I can have in savings?',
    a: 'Asset limits vary by program and state. Medicare Savings Programs usually have a limit around $10,000-$17,000 per person. SNAP waives the asset test for most households. Property tax relief usually has no asset test — only income. Always check the specific program.',
  },
];

/* ── Main Component ───────────────────────────────────────── */

export default function StateBenefitsFinder() {
  const [selectedAbbr, setSelectedAbbr] = useState<string>('');

  const allStates = useMemo(
    () =>
      [...STATES.map((s) => ({ abbr: s.abbr, name: s.name })), ...OTHER_STATES].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    [],
  );

  const selected = useMemo<StateBenefits | null>(
    () => STATES.find((s) => s.abbr === selectedAbbr) ?? null,
    [selectedAbbr],
  );

  const selectedName = useMemo(() => {
    if (selected) return selected.name;
    return allStates.find((s) => s.abbr === selectedAbbr)?.name ?? '';
  }, [selected, selectedAbbr, allStates]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      <SEOHead
        title="State Benefits Finder — Senior Benefits in Every State"
        description="A senior-friendly, state-by-state directory of property tax relief, prescription aid, utility assistance, SHIP, SNAP, transportation, and legal aid. Plain English. Free to use."
        path="/tools/state-benefits-finder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900"
            aria-hidden="true"
          />
          <div className="container relative py-12 md:py-16 text-white">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="state-benefits-finder"
                title="State Benefits Finder"
                url="/tools/state-benefits-finder"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <Badge variant="secondary" className="text-xs bg-white/15 text-white border-0">
                Money · Senior Benefits · New
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 pr-14 leading-tight">
              Your State&apos;s Senior Benefits — In One Place
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed text-blue-100">
              Every state has programs you may not know about. Find yours.
            </p>
          </div>
        </section>

        {/* "Don't leave money on the table" alert */}
        <section className="container py-8 md:py-10">
          <Alert className="border-emerald-500/60 bg-emerald-50/60 dark:bg-emerald-950/20">
            <DollarSign className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <AlertTitle className="text-lg md:text-xl font-semibold">
              Don&apos;t leave money on the table
            </AlertTitle>
            <AlertDescription className="text-base md:text-lg leading-relaxed">
              The National Council on Aging estimates the average senior leaves about{' '}
              <strong>$4,000 per year</strong> in unclaimed benefits unused. Property tax breaks,
              SNAP for 60+, Medicare Savings Programs, and prescription aid are the most commonly
              missed. Use this page — and NCOA&apos;s free{' '}
              <a
                href="https://www.benefitscheckup.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium"
              >
                BenefitsCheckUp
              </a>{' '}
              screener — to find what you qualify for.
            </AlertDescription>
          </Alert>
        </section>

        {/* State picker */}
        <section className="container py-6 md:py-8">
          <Card>
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Pick your state</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Select a state to see its property tax breaks, prescription aid, utility help,
                SHIP counselor number, transportation discounts, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <Select value={selectedAbbr} onValueChange={setSelectedAbbr}>
                  <SelectTrigger className="min-h-14 text-base">
                    <SelectValue placeholder="Choose your state…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-80">
                    {allStates.map((s) => (
                      <SelectItem key={s.abbr} value={s.abbr} className="text-base">
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedAbbr && (
                  <Button
                    variant="outline"
                    onClick={handlePrint}
                    className="gap-2 min-h-14 text-base"
                  >
                    <Printer className="w-5 h-5" />
                    Print this state&apos;s report
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Per-state detail */}
        {selected && (
          <section id="state-detail" className="border-y border-border bg-muted/30">
            <div className="container py-10 md:py-14 space-y-6">
              <div>
                <Badge variant="outline" className="text-sm mb-2">
                  {selected.abbr}
                </Badge>
                <h2 className="text-2xl md:text-4xl font-bold">
                  {selected.name} senior benefits
                </h2>
              </div>

              <Tabs defaultValue="programs" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                  <TabsTrigger value="programs" className="text-base min-h-14">
                    Key programs
                  </TabsTrigger>
                  <TabsTrigger value="contacts" className="text-base min-h-14">
                    Contacts
                  </TabsTrigger>
                  <TabsTrigger value="taxes-vets" className="text-base min-h-14">
                    Taxes &amp; veterans
                  </TabsTrigger>
                  <TabsTrigger value="outdoors" className="text-base min-h-14">
                    Parks &amp; outdoors
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="programs" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selected.programs.map((p) => (
                      <Card key={p.label}>
                        <CardContent className="p-5 space-y-2">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                              <p.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-1">{p.label}</h3>
                              <p className="text-base leading-relaxed">{p.detail}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="contacts" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <HeartPulse className="w-5 h-5 text-primary" />
                          SHIP — free Medicare counselor
                        </h3>
                        <p className="text-base leading-relaxed">
                          Call <strong>{selected.shipPhone}</strong> to reach a trained, unbiased
                          Medicare counselor in {selected.name}.
                        </p>
                        <a
                          href={selected.shipUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                        >
                          Open SHIP website <ExternalLink className="w-4 h-4" />
                        </a>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          Area Agency on Aging
                        </h3>
                        <p className="text-base leading-relaxed">
                          The hub for meals, rides, home care, caregiver support, and benefits
                          counseling in your county.
                        </p>
                        <a
                          href={selected.aaaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                        >
                          Open aging office <ExternalLink className="w-4 h-4" />
                        </a>
                      </CardContent>
                    </Card>
                    {selected.statePortal && (
                      <Card className="md:col-span-2">
                        <CardContent className="p-5 space-y-2">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Landmark className="w-5 h-5 text-primary" />
                            State benefits portal
                          </h3>
                          <p className="text-base leading-relaxed">
                            One login for SNAP, Medicaid, energy aid, and cash assistance in{' '}
                            {selected.name}.
                          </p>
                          <a
                            href={selected.statePortal.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                          >
                            {selected.statePortal.label} <ExternalLink className="w-4 h-4" />
                          </a>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="taxes-vets" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          State income tax for retirees
                        </h3>
                        <p className="text-base leading-relaxed">{selected.stateTax}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Flag className="w-5 h-5 text-primary" />
                          State veterans benefits
                        </h3>
                        <p className="text-base leading-relaxed">{selected.veterans}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="outdoors" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <TreePine className="w-5 h-5 text-primary" />
                          State park pass
                        </h3>
                        <p className="text-base leading-relaxed">{selected.parkPass}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Fish className="w-5 h-5 text-primary" />
                          Hunting &amp; fishing license discount
                        </h3>
                        <p className="text-base leading-relaxed">{selected.huntFish}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Generic fallback when a non-detailed state is picked */}
        {selectedAbbr && !selected && (
          <section id="state-detail" className="border-y border-border bg-muted/30">
            <div className="container py-10 md:py-14 space-y-6">
              <div>
                <Badge variant="outline" className="text-sm mb-2">
                  {selectedAbbr}
                </Badge>
                <h2 className="text-2xl md:text-4xl font-bold">
                  {selectedName} senior benefits
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-2 max-w-3xl leading-relaxed">
                  {selectedName} is on our list to research in depth. In the meantime, every
                  state runs these core programs. Use the official links below to get started.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GENERIC_PROGRAMS.map((p) => (
                  <Card key={p.label}>
                    <CardContent className="p-5 space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <p.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{p.label}</h3>
                          <p className="text-base leading-relaxed">{p.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Flag className="w-5 h-5 text-primary" />
                    Official {selectedName} starting points
                  </h3>
                  <p className="text-base leading-relaxed">
                    Use the{' '}
                    <a
                      href="https://www.usa.gov/state-government"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline font-medium"
                    >
                      USA.gov State Government Directory
                    </a>{' '}
                    to reach {selectedName}&apos;s official state portal. The{' '}
                    <a
                      href="https://eldercare.acl.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline font-medium"
                    >
                      Eldercare Locator
                    </a>{' '}
                    (1-800-677-1116) will connect you to your local Area Agency on Aging. They
                    can walk you through every {selectedName}-specific program.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* BenefitsCheckUp promotion */}
        <section className="container py-10 md:py-14">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    The one screener every senior should run
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Free, from the National Council on Aging. Finds all programs at once.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>BenefitsCheckUp</strong> takes about 15 minutes and asks about your age,
                ZIP code, household, income, health, and veteran status. It then returns every
                federal, state, and local program you may qualify for — including the ones most
                commonly missed, like state property tax freezes and Medicare Savings Programs.
                There is no fee, no account required, and no one from NCOA ever calls you.
              </p>
              <Button asChild size="lg" className="gap-2 text-base">
                <a
                  href="https://www.benefitscheckup.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Run BenefitsCheckUp
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Official sources */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Landmark className="w-7 h-7 text-primary" />
                Official sources (bookmark these)
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Every link here is either a federal .gov site or a well-established nonprofit.
                Bookmark the ones you use and type them in directly — never follow benefits links
                from emails or text messages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OFFICIAL_SOURCES.map((s) => (
                <Card key={s.name}>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <s.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{s.name}</h3>
                        <p className="text-base leading-relaxed">{s.body}</p>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline font-medium inline-flex items-center gap-1 text-base mt-2"
                        >
                          Open site <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <BookOpenCheck className="w-7 h-7 text-primary" />
              How to apply — general steps for any program
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Programs differ, but the paperwork and process look similar everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HOW_TO_APPLY.map((h) => (
              <Card key={h.title}>
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <h.icon className="w-5 h-5 text-primary" />
                    {h.title}
                  </h3>
                  <p className="text-base leading-relaxed">{h.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Red flags */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <ShieldAlert className="w-7 h-7 text-red-600 dark:text-red-400" />
                Red flags — scams that target people applying for benefits
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Any one of these is reason to pause. If you see two or more, walk away.
              </p>
            </div>

            <Card className="border-red-500/40 bg-red-50/40 dark:bg-red-950/20">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {RED_FLAGS.map((r) => (
                    <li key={r} className="flex gap-3 text-base leading-relaxed">
                      <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-red-200 dark:border-red-900">
                  <p className="text-base md:text-lg leading-relaxed">
                    Not sure if a website or caller is real?{' '}
                    <Link
                      to="/tools/is-this-real"
                      className="text-primary underline font-medium"
                    >
                      Check it with our Is This Real scam detector
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Free help */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Heart className="w-7 h-7 text-primary" />
              Free help applying (you never need to pay)
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Paid &ldquo;helper&rdquo; services often sell you what these free organizations
              already do better. Start here first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FREE_HELP.map((h) => (
              <Card key={h.name}>
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold">{h.name}</h3>
                  <p className="text-base leading-relaxed">{h.body}</p>
                  <a
                    href={h.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                  >
                    {h.urlLabel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Frequently asked questions
              </h2>
            </div>

            <Card>
              <CardContent className="p-2 md:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((f, i) => (
                    <AccordionItem key={f.q} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold min-h-14 px-2">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed px-2">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-primary" />
              Related TekSure tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-5 space-y-2">
                <Landmark className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Government Benefits Portal</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Every federal .gov portal — Social Security, Medicare, VA, IRS, SNAP — in one
                  plain-English guide.
                </p>
                <Link
                  to="/tools/government-benefits-portal"
                  className="text-primary underline font-medium text-base inline-flex items-center gap-1"
                >
                  Open tool <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <HeartPulse className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Turning 65 Checklist</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Interactive checklist for Medicare enrollment, Social Security, and retirement
                  planning.
                </p>
                <Link
                  to="/checklists/turning-65"
                  className="text-primary underline font-medium text-base inline-flex items-center gap-1"
                >
                  Open checklist <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Free Resource Hub</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Free, legal resources — streaming, classes, tax help, benefits, and mental
                  health lines.
                </p>
                <Link
                  to="/tools/free-resource-hub"
                  className="text-primary underline font-medium text-base inline-flex items-center gap-1"
                >
                  Open hub <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
