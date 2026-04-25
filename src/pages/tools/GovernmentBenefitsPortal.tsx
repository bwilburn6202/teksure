import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Landmark,
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lock,
  KeyRound,
  Calendar,
  Clock,
  HelpCircle,
  Phone,
  HeartPulse,
  Users,
  Home,
  Flag,
  Utensils,
  Flame,
  Wifi,
  Briefcase,
  FileText,
  Sparkles,
  LifeBuoy,
  Heart,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Government Benefits Portal
 * ------------------------------------------------------------
 * Senior-friendly guide to every major US government service
 * portal. .gov only. Helps people avoid scam "helper" sites
 * that charge for free applications. Modeled on
 * VoiceAssistantSetup.tsx.
 * ────────────────────────────────────────────────────────────── */

type PortalId =
  | 'ssa'
  | 'medicare'
  | 'va'
  | 'benefits'
  | 'irs'
  | 'usajobs'
  | 'usa'
  | 'state'
  | 'snap'
  | 'liheap'
  | 'lifeline'
  | 'vcl';

interface Portal {
  id: PortalId;
  name: string;
  tagline: string;
  url: string;
  urlLabel: string;
  icon: LucideIcon;
  tint: string;
  login: 'loginGov' | 'idMe' | 'either' | 'none' | 'state';
  whatItDoes: string;
  setup: string[];
  canDo: string[];
  gotchas: string[];
}

const PORTALS: Portal[] = [
  {
    id: 'ssa',
    name: 'mySocialSecurity',
    tagline: 'Your Social Security account — benefits, statement, and enrollment.',
    url: 'https://www.ssa.gov/myaccount',
    urlLabel: 'ssa.gov/myaccount',
    icon: Users,
    tint: 'text-blue-700 bg-blue-50 dark:bg-blue-950/30',
    login: 'either',
    whatItDoes:
      'Check your estimated retirement benefit, see the earnings history Social Security has on file, apply for retirement or disability, sign up for Medicare at 65, manage direct deposit, and request a replacement Social Security card.',
    setup: [
      'Go to ssa.gov/myaccount and click "Sign In or Create an Account".',
      'Choose Login.gov (preferred) or ID.me. If you already have a Login.gov account from another federal site, use the same one.',
      'Verify your identity. SSA will ask questions that match your credit history — have a recent credit card or loan account handy.',
      'Set up a second login step (text code or an authenticator app). Write down a backup code in a safe place.',
    ],
    canDo: [
      'Download your Social Security Statement (used for retirement planning).',
      'Apply for retirement benefits as early as age 61 and 9 months.',
      'Apply for Medicare at 65 (even if you delay taking Social Security).',
      'Change your direct deposit bank account.',
      'Request a replacement Social Security card (in most states).',
      'Check the status of a pending application.',
    ],
    gotchas: [
      'If your credit is frozen, SSA cannot verify you online — call 1-800-772-1213 to make an appointment in person.',
      'SSA will never call, email, or text asking for your password or full SSN.',
      'If you moved recently, update your address with the U.S. Postal Service first — SSA checks the USPS database during verification.',
    ],
  },
  {
    id: 'medicare',
    name: 'MyMedicare',
    tagline: 'Your Medicare dashboard — plans, claims, and providers.',
    url: 'https://www.medicare.gov',
    urlLabel: 'medicare.gov',
    icon: HeartPulse,
    tint: 'text-rose-600 bg-rose-50 dark:bg-rose-950/30',
    login: 'loginGov',
    whatItDoes:
      'Look up plans (Original Medicare, Advantage, Part D drug plans), compare drug costs, find doctors and hospitals that accept Medicare, track claims, and print or request a new Medicare card.',
    setup: [
      'Go to medicare.gov and click "Log in" in the top right.',
      'Create a Medicare.gov account or sign in with Login.gov.',
      'You will need your Medicare number (on your red-white-and-blue card), your date of birth, and your ZIP code.',
      'Turn on two-step login through text message or an authenticator app.',
    ],
    canDo: [
      'Use Plan Finder to compare Medicare Advantage and Part D plans side by side.',
      'Enter your prescriptions and see which plan covers them cheapest.',
      'Look up whether a specific doctor or hospital accepts Medicare.',
      'See every claim Medicare has paid on your behalf.',
      'Order a replacement Medicare card (no fee, no need to pay a "helper" site).',
    ],
    gotchas: [
      'Medicare.gov is the only official site. Sites like "get-medicare-info.com" or "medicare-help-center.com" are private businesses — some charge for free services.',
      'A licensed SHIP counselor in your state gives free Medicare advice (see Free Help section below).',
      'Open Enrollment (Oct 15 – Dec 7) is the time to switch plans. Changes outside that window usually require a qualifying life event.',
    ],
  },
  {
    id: 'va',
    name: 'VA.gov',
    tagline: 'All veterans benefits in one place.',
    url: 'https://www.va.gov',
    urlLabel: 'va.gov',
    icon: Flag,
    tint: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30',
    login: 'either',
    whatItDoes:
      'Manage VA health care, file and track disability claims, apply for GI Bill education benefits, access VA Home Loans, request military records, and plan burial or memorial benefits for yourself or a loved one.',
    setup: [
      'Go to va.gov and click "Sign in" in the top right.',
      'Choose Login.gov or ID.me (either works for every VA service).',
      'Verify your identity. You will need a photo ID (driver license or passport) and your Social Security number.',
      'Link your account to your VA records the first time you sign in — this can take a moment.',
    ],
    canDo: [
      'View and download your disability rating and claim letters.',
      'Request prescription refills and message your VA doctor.',
      'File a disability claim or add evidence to an existing one.',
      'Use the GI Bill benefits calculator and transfer benefits to family.',
      'Apply for VA Home Loan eligibility (Certificate of Eligibility).',
      'Plan burial in a national cemetery or request a headstone or marker.',
    ],
    gotchas: [
      'VA.gov is always free. Any site charging you to help with a VA claim is either a for-profit business or a scam — free help is available from an accredited Veterans Service Officer (VSO).',
      'For mental health crises, call or text 988 then press 1, or visit veteranscrisisline.net.',
      'Claim decisions can take months. The "My VA" dashboard shows real-time status — no need to call for updates.',
    ],
  },
  {
    id: 'benefits',
    name: 'Benefits.gov',
    tagline: '"Am I eligible?" across more than 1,000 federal programs.',
    url: 'https://www.benefits.gov',
    urlLabel: 'benefits.gov',
    icon: ShieldCheck,
    tint: 'text-indigo-700 bg-indigo-50 dark:bg-indigo-950/30',
    login: 'none',
    whatItDoes:
      'A no-login screener that asks about your age, income, household, and situation, then lists every federal program you may qualify for — from SNAP to housing aid to energy assistance to Pell Grants.',
    setup: [
      'Go to benefits.gov — no account needed to use the Benefit Finder.',
      'Click "Benefit Finder" and answer the questions honestly. Takes about 10-15 minutes.',
      'Skip any question you are not sure about — the results will still be helpful.',
      'Print or email the results to yourself so you can apply to each program on its official site.',
    ],
    canDo: [
      'Screen yourself for housing, food, health care, tax, energy, and education programs.',
      'See plain-language summaries of each program and who runs it.',
      'Follow direct links to the official application page for each program.',
      'Browse by category (disability, veterans, seniors, disaster relief, and so on).',
    ],
    gotchas: [
      'Benefits.gov only tells you what you might qualify for — you still have to apply on each program’s own site.',
      'The tool never asks for your SSN or bank info. Any screener that does is a fake.',
    ],
  },
  {
    id: 'irs',
    name: 'IRS.gov',
    tagline: 'Taxes, refunds, records, and free filing.',
    url: 'https://www.irs.gov',
    urlLabel: 'irs.gov',
    icon: FileText,
    tint: 'text-teal-700 bg-teal-50 dark:bg-teal-950/30',
    login: 'idMe',
    whatItDoes:
      'File your federal tax return for free (if income under about $84,000 via IRS Free File, or any income via IRS Direct File in supported states), check your refund, view tax transcripts, set up a payment plan, and get an Identity Protection PIN.',
    setup: [
      'Go to irs.gov.',
      'For basic info (refund status, Free File, forms) no account is needed.',
      'To view your personal tax records, click "Your Online Account" and sign in with ID.me.',
      'ID.me requires a photo ID and a short video selfie — budget about 15 minutes the first time.',
    ],
    canDo: [
      '"Where’s My Refund?" — track your federal refund within 24 hours of e-filing.',
      'IRS Free File — free guided tax prep from partners like TaxAct and FreeTaxUSA (income limits apply).',
      'IRS Direct File — file directly with the IRS in 25+ states (no third-party software).',
      'Get an Identity Protection PIN to block scammers from filing a fake return in your name.',
      'Set up a payment plan for tax you owe (usually approved online in minutes).',
    ],
    gotchas: [
      'The IRS never calls, texts, or emails demanding immediate payment or threatening arrest. If that happens, it is a scam — hang up.',
      'Only pay the IRS through irs.gov or by mail. Never pay in gift cards, crypto, or wire transfer.',
      'Third-party tax sites like "irs-gov-refund.com" are NOT the IRS. Check for the "irs.gov" domain.',
    ],
  },
  {
    id: 'usajobs',
    name: 'USAJobs',
    tagline: 'Every open federal government job.',
    url: 'https://www.usajobs.gov',
    urlLabel: 'usajobs.gov',
    icon: Briefcase,
    tint: 'text-cyan-700 bg-cyan-50 dark:bg-cyan-950/30',
    login: 'loginGov',
    whatItDoes:
      'Search and apply to every federal agency job — Postal Service, VA, IRS, Social Security, parks, and more. Includes remote roles, seasonal hiring, and veteran preference jobs.',
    setup: [
      'Go to usajobs.gov.',
      'Click "Sign In" and create a Login.gov account.',
      'Build your profile: work history, education, and veterans’ preference (if applicable).',
      'Upload a federal-style resume (longer and more detailed than a private-sector resume).',
    ],
    canDo: [
      'Search by job series, location, salary, schedule, or security clearance.',
      'Save searches and get email alerts for new postings.',
      'Apply with your saved resume and track the status of each application.',
      'Filter to "Open to the public" jobs (anyone can apply) or veteran-only.',
    ],
    gotchas: [
      'Federal jobs almost always close by a deadline. Applications submitted even a minute late are not considered.',
      'The job description lists "specialized experience" requirements — your resume should directly mirror that language.',
      'Never pay a "federal job placement" service — every USAJobs application is free.',
    ],
  },
  {
    id: 'usa',
    name: 'USA.gov',
    tagline: 'The front door to every federal agency and service.',
    url: 'https://www.usa.gov',
    urlLabel: 'usa.gov',
    icon: Home,
    tint: 'text-sky-700 bg-sky-50 dark:bg-sky-950/30',
    login: 'none',
    whatItDoes:
      'A master directory for the whole federal government. Find an agency phone number, search how to get a passport, look up a refund or benefit, find your representative, or report a scam.',
    setup: ['No account needed — USA.gov is a search and directory site.'],
    canDo: [
      'Find any federal agency’s phone number, mailing address, and website.',
      'Get step-by-step help with passports, Social Security cards, voter registration, and benefits.',
      'Report identity theft, scams, or unwanted calls.',
      'Find your U.S. senators and representative by ZIP code.',
      'Available in English and Spanish (USAGov en Español).',
    ],
    gotchas: [
      'USA.gov does not handle applications directly — it points you to the right agency.',
      'Pages end in usa.gov. Sites like "usa-gov.com" are not official.',
    ],
  },
  {
    id: 'state',
    name: 'Your State Benefits Portal',
    tagline: 'Medicaid, SNAP, TANF, and most day-to-day benefits live here.',
    url: 'https://www.usa.gov/state-social-services',
    urlLabel: 'usa.gov/state-social-services',
    icon: Flag,
    tint: 'text-amber-700 bg-amber-50 dark:bg-amber-950/30',
    login: 'state',
    whatItDoes:
      'Most hands-on benefits (Medicaid, food assistance, cash aid, child care) are run by your state — not Washington. Every state has its own portal.',
    setup: [
      'Go to usa.gov/state-social-services (or benefits.gov’s state finder).',
      'Pick your state from the map or the drop-down.',
      'You will land on your state’s official social services page — the URL ends in your state’s abbreviation plus .gov (for example, ny.gov, texas.gov, ca.gov).',
      'Create an account on the state portal. Many states use their own login, not Login.gov.',
    ],
    canDo: [
      'Apply for Medicaid (often same portal as SNAP and cash aid).',
      'Renew benefits each year (most states send a reminder).',
      'Upload documents (pay stubs, rent receipts, ID) directly to your case.',
      'Check appointment times and message your caseworker.',
    ],
    gotchas: [
      'State URLs vary. Confirm you see a padlock icon and a URL ending in .gov before entering any personal info.',
      'If your state portal is hard to use, call 211 (anywhere in the U.S.) — they can help you apply by phone.',
    ],
  },
  {
    id: 'snap',
    name: 'SNAP (Food Assistance)',
    tagline: 'Help buying groceries — applied for through your state.',
    url: 'https://www.fns.usda.gov/snap/state-directory',
    urlLabel: 'fns.usda.gov/snap/state-directory',
    icon: Utensils,
    tint: 'text-lime-700 bg-lime-50 dark:bg-lime-950/30',
    login: 'state',
    whatItDoes:
      'SNAP (formerly food stamps) loads monthly money onto an EBT card you can use at most grocery stores and many farmers markets. The federal government funds it, but you apply through your state.',
    setup: [
      'Go to fns.usda.gov/snap/state-directory and pick your state.',
      'Follow the link to your state’s application portal.',
      'Gather: photo ID, Social Security numbers for each person in the household, proof of income (recent pay stubs or benefit letters), rent or mortgage paperwork, and utility bills.',
      'Complete the application online. Most states schedule a short phone interview within a week.',
    ],
    canDo: [
      'Apply or re-apply for SNAP.',
      'Check your EBT card balance.',
      'Report changes in income, address, or household size.',
      'Find SNAP-Ed nutrition programs near you.',
    ],
    gotchas: [
      'SNAP is NOT "free money" on a prepaid Visa. If anyone offers you that, it is a scam.',
      'Seniors (60+) can get a simpler application in most states. Ask your caseworker for the "Elderly Simplified Application".',
      'Restaurants do not normally accept SNAP, but some states have a Restaurant Meals Program for seniors and disabled recipients.',
    ],
  },
  {
    id: 'liheap',
    name: 'LIHEAP (Heating & Cooling)',
    tagline: 'Help paying heating and cooling bills.',
    url: 'https://www.acf.hhs.gov/ocs/programs/liheap',
    urlLabel: 'acf.hhs.gov/ocs/programs/liheap',
    icon: Flame,
    tint: 'text-orange-700 bg-orange-50 dark:bg-orange-950/30',
    login: 'state',
    whatItDoes:
      'The Low Income Home Energy Assistance Program helps families pay heating bills in winter and cooling bills in summer. Many states also cover weatherization (insulation, window sealing) and emergency shutoffs.',
    setup: [
      'Go to acf.hhs.gov/ocs/programs/liheap and click "How do I apply?".',
      'Pick your state or tribal program. Every state runs LIHEAP a little differently.',
      'Gather: photo ID, proof of income (last 30 days), a recent utility bill, and your Social Security number.',
      'Apply online, by mail, or in person at a Community Action Agency.',
    ],
    canDo: [
      'Get a one-time payment applied to your heating or cooling bill.',
      'Apply for emergency "crisis" funding if your power is about to be shut off.',
      'Request weatherization — the program sends a crew to seal windows, add insulation, or replace an unsafe furnace.',
    ],
    gotchas: [
      'LIHEAP funding runs out each year. Apply early — usually opens October for heating and May for cooling.',
      'Your utility cannot shut off service during the crisis review period in most states.',
      'LIHEAP goes directly to the utility, not to you. No one should be handing you a check.',
    ],
  },
  {
    id: 'lifeline',
    name: 'Lifeline (Phone & Internet Discount)',
    tagline: 'Monthly discount on phone or internet for eligible households.',
    url: 'https://www.lifelinesupport.org',
    urlLabel: 'lifelinesupport.org',
    icon: Wifi,
    tint: 'text-violet-700 bg-violet-50 dark:bg-violet-950/30',
    login: 'none',
    whatItDoes:
      'A federal program that gives eligible households up to $9.25 per month off one phone OR one home internet bill ($34.25 on tribal lands). Lifeline is the surviving benefit after the Affordable Connectivity Program ended in 2024.',
    setup: [
      'Go to lifelinesupport.org and click "Apply Now".',
      'Check eligibility — you qualify if you receive SNAP, Medicaid, SSI, Veterans Pension, Federal Public Housing, or have income below 135% of the poverty line.',
      'Apply online, by mail, or through a participating phone or internet company.',
      'If approved, pick a participating provider and the discount is applied each month automatically.',
    ],
    canDo: [
      'Get a discount on one phone line OR one internet line (not both).',
      'Keep service if your provider accepts Lifeline customers.',
      'Re-certify once a year (Lifeline will send you a reminder).',
    ],
    gotchas: [
      'The Affordable Connectivity Program ($30/month internet benefit) ended June 2024 and has NOT been refunded. Be careful of any site still advertising it.',
      'Free tablet or phone offers from Lifeline providers are real, but read the terms — some tie you to a long minimum contract.',
      'Lifeline.gov is the official site. Sites like "lifeline-benefits.org" may be third-party enrollers.',
    ],
  },
  {
    id: 'vcl',
    name: 'Veterans Crisis Line',
    tagline: 'Free, confidential crisis support for veterans and their families.',
    url: 'https://www.veteranscrisisline.net',
    urlLabel: 'veteranscrisisline.net',
    icon: LifeBuoy,
    tint: 'text-red-700 bg-red-50 dark:bg-red-950/30',
    login: 'none',
    whatItDoes:
      'Around-the-clock support staffed by trained responders, many of whom are veterans themselves. You do not need to be enrolled in VA health care. Family and caregivers can call too.',
    setup: [
      'Dial 988 on any phone, then press 1.',
      'Or text 838255.',
      'Or chat online at veteranscrisisline.net.',
      'Spanish and ASL support is available on request.',
    ],
    canDo: [
      'Talk with a trained responder any hour of the day.',
      'Get connected to local VA crisis care if you want.',
      'Access peer support — trained veterans who have been there.',
      'Find support groups through Vet Centers (vetcenter.va.gov).',
    ],
    gotchas: [
      'You do not have to be in active crisis to call. Lonely, overwhelmed, worried about a friend — all valid reasons.',
      'Your call does not go on your VA record unless you ask for follow-up care.',
      'For non-veterans, the general 988 Suicide & Crisis Lifeline is also free and confidential.',
    ],
  },
];

/* ── Medicare enrollment windows ──────────────────────────────── */

interface EnrollmentWindow {
  name: string;
  when: string;
  what: string;
}

const MEDICARE_WINDOWS: EnrollmentWindow[] = [
  {
    name: 'Initial Enrollment Period',
    when: 'The 7 months around your 65th birthday — 3 months before, your birthday month, and 3 months after',
    what: 'Your first chance to sign up for Part A (hospital), Part B (doctor), and a Medicare Advantage or Part D drug plan. If you miss it without creditable coverage elsewhere, you may pay a lifetime late penalty.',
  },
  {
    name: 'Annual Open Enrollment',
    when: 'October 15 through December 7 every year',
    what: 'Review your current plan, switch between Original Medicare and Medicare Advantage, or change your Part D drug plan. Changes take effect January 1.',
  },
  {
    name: 'Medicare Advantage Open Enrollment',
    when: 'January 1 through March 31',
    what: 'If you are on Medicare Advantage, you can switch to a different Advantage plan once, or drop Advantage and go back to Original Medicare plus a Part D plan.',
  },
  {
    name: 'General Enrollment Period',
    when: 'January 1 through March 31',
    what: 'A second chance to enroll in Part B if you missed your Initial Enrollment. Coverage begins the month after you enroll. Late penalties may still apply.',
  },
  {
    name: 'Special Enrollment Periods',
    when: 'Triggered by life events — retirement, moving, losing employer coverage',
    what: 'You get a short window (usually 8 weeks to 2 months) to enroll without penalty. Call 1-800-MEDICARE or use your mySocialSecurity account to claim one.',
  },
];

/* ── Social Security strategy ─────────────────────────────────── */

interface StrategyItem {
  title: string;
  body: string;
}

const SS_STRATEGIES: StrategyItem[] = [
  {
    title: 'Age 62: earliest you can file',
    body: 'Filing at 62 locks in a permanently reduced benefit — roughly 30% less than waiting until your full retirement age. Useful if you have health concerns, are out of work, or your spouse already claims a larger benefit.',
  },
  {
    title: 'Full Retirement Age (66 or 67)',
    body: 'Your full benefit — no reduction, no bonus. Most people born in 1960 or later reach full retirement at 67. Earnings no longer reduce your check once you hit this age.',
  },
  {
    title: 'Age 70: the maximum check',
    body: 'Every month you delay past full retirement age adds about 2/3 of 1% to your lifelong benefit — capped at age 70. That is roughly a 24 to 32% bump over filing at full retirement.',
  },
  {
    title: 'Spouse and survivor benefits',
    body: 'A spouse can claim up to 50% of the higher earner’s benefit while both are alive. A surviving spouse can step up to 100% of the deceased spouse’s benefit — claiming early reduces this permanently.',
  },
  {
    title: 'WEP and GPO',
    body: 'If you worked in a job that did not pay into Social Security (some teachers, firefighters, railroad workers, foreign pensions), the Windfall Elimination Provision (WEP) or Government Pension Offset (GPO) may reduce your check. Congress repealed WEP and GPO in January 2025 — but if you filed before, contact SSA to recalculate.',
  },
  {
    title: 'Earnings test',
    body: 'If you claim before full retirement age and still work, SSA withholds $1 for every $2 you earn above the annual limit (about $22,320 in 2024). The year you reach full retirement, the rule loosens, then disappears.',
  },
];

/* ── Red flags of scam "help" sites ───────────────────────────── */

const RED_FLAGS: string[] = [
  'The web address ends in .com, .net, or .org instead of .gov. Real federal portals always end in .gov.',
  'The site charges a fee to "help you apply" for benefits that are free directly.',
  'You are asked for your Social Security number or Medicare number by email, text, or phone out of the blue.',
  'The message says "Urgent — your benefits are about to expire" or "Act now or lose coverage".',
  'You are asked to pay with gift cards, wire transfer, cryptocurrency, or a prepaid debit card.',
  'The caller threatens arrest, deportation, or loss of benefits if you do not act immediately.',
  'A "Social Security officer" or "Medicare agent" calls unprompted — no federal agency cold-calls about benefits.',
  'The website looks almost identical to a real one but the URL is slightly off (medicare.com vs medicare.gov).',
];

/* ── Free help that IS real ──────────────────────────────────── */

interface FreeHelp {
  name: string;
  body: string;
  url: string;
  urlLabel: string;
}

const FREE_HELP: FreeHelp[] = [
  {
    name: 'SHIP — State Health Insurance Assistance Program',
    body: 'Free, unbiased Medicare counseling in all 50 states. Trained volunteers help you compare plans, untangle a denied claim, or figure out what Medicare covers. Not insurance agents — no commissions.',
    url: 'https://www.shiphelp.org',
    urlLabel: 'shiphelp.org',
  },
  {
    name: 'AARP Foundation Tax-Aide',
    body: 'Free tax prep by IRS-certified volunteers, February through April. Open to anyone, with a focus on people 50+ and low-to-moderate income. Find a site at aarp.org/money/taxes/aarp_taxaide.',
    url: 'https://www.aarp.org/money/taxes/aarp_taxaide',
    urlLabel: 'aarp.org/money/taxes/aarp_taxaide',
  },
  {
    name: 'VITA / TCE (IRS Free Tax Prep)',
    body: 'Volunteer Income Tax Assistance (income under about $64,000) and Tax Counseling for the Elderly (anyone 60+). Find a site at irs.gov/vita.',
    url: 'https://irs.treasury.gov/freetaxprep/',
    urlLabel: 'irs.treasury.gov/freetaxprep',
  },
  {
    name: 'Legal Aid',
    body: 'Free civil legal help for low-income people — landlord disputes, denied benefits, consumer scams, estate planning. Find your local office at lsc.gov/about-lsc/what-legal-aid/find-legal-aid.',
    url: 'https://www.lsc.gov/about-lsc/what-legal-aid/find-legal-aid',
    urlLabel: 'lsc.gov/find-legal-aid',
  },
  {
    name: 'Area Agency on Aging (AAA)',
    body: 'Every county has one. They coordinate meals, rides, home care, and caregiver support for people 60+. Find yours at eldercare.acl.gov or call 1-800-677-1116.',
    url: 'https://eldercare.acl.gov',
    urlLabel: 'eldercare.acl.gov',
  },
  {
    name: '211 — social services referral',
    body: 'Dial 211 or text your ZIP code to 211. Free, 24/7, in most U.S. communities. A live person helps you find food, housing, utility aid, and crisis support.',
    url: 'https://www.211.org',
    urlLabel: '211.org',
  },
];

/* ── Troubleshooting ─────────────────────────────────────────── */

interface Trouble {
  title: string;
  body: string;
}

const TROUBLESHOOTING: Trouble[] = [
  {
    title: 'Locked out of Login.gov',
    body: 'Go to login.gov and click "Forgot your password?" Enter the email on the account. If you lost your second-step method (phone or authenticator), click "I need help signing in" — you will be asked to re-verify with a photo ID, which takes about 10 minutes.',
  },
  {
    title: 'ID.me video verification failed',
    body: 'Make sure you are in a well-lit room, face the camera straight on, and hold your ID flat with no glare. If automated verification fails twice, request a video call with a Trusted Referee — a real person will verify you by video. Usually a 15-30 minute wait.',
  },
  {
    title: 'Cannot remember the answers to security questions',
    body: 'Most federal portals now avoid security questions in favor of a text code or authenticator app. If you are stuck on an old account, call the agency directly — SSA: 1-800-772-1213, Medicare: 1-800-MEDICARE, IRS: 1-800-829-1040.',
  },
  {
    title: 'My address does not match what SSA has on file',
    body: 'First, update your address with the U.S. Postal Service at moversguide.usps.com — most federal agencies cross-check there. Then update SSA directly through your mySocialSecurity account. Expect a few days for the databases to sync.',
  },
  {
    title: 'The site keeps making me re-verify every time',
    body: 'This is a security feature, not a bug — sensitive portals re-check identity on every major action. Saving your login in a password manager makes it painless. Two-step codes take about 15 seconds.',
  },
  {
    title: 'I do not have a smartphone for the two-step code',
    body: 'All of these portals will mail a one-time code to your address if you have no phone. Call the agency and ask for "backup authentication by mail". Works but takes 5-10 days.',
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'Why does every portal want me to re-verify my identity?',
    a: 'Identity theft of benefits (fake tax returns, fraudulent Social Security claims) has exploded. Re-verifying blocks someone who steals your password but does not have your ID or your phone. It feels like a hassle — it protects real money.',
  },
  {
    q: 'Is ID.me safe? Isn’t it a private company?',
    a: 'ID.me is a private company that contracts with the federal government to verify identities. They are subject to federal oversight and a Privacy Act agreement. If you would rather not use them, Login.gov (a government-run alternative) now covers almost every federal site.',
  },
  {
    q: 'I got a call from someone saying they were with Social Security — is that real?',
    a: 'Almost certainly not. Social Security does not cold-call. If you get a call like this, hang up, go to ssa.gov directly, and log in to see any real messages. Real communications also come by mail.',
  },
  {
    q: 'Do I need a fancy online account to get Medicare?',
    a: 'No. You can sign up for Medicare by calling 1-800-MEDICARE, visiting your local Social Security office, or mailing a paper form. The online account is a convenience, not a requirement.',
  },
  {
    q: 'What if I cannot do any of this online?',
    a: 'Every agency still offers phone and in-person help. Call 211 for a referral to a local agency that will sit with you, or ask a trusted family member. Paper applications are still accepted everywhere. No one should be turned away for not being online.',
  },
  {
    q: 'Which portal should I set up first?',
    a: 'If you are 62 or older: mySocialSecurity (ssa.gov/myaccount). If you are 65 or older: medicare.gov. If you are a veteran: VA.gov. If you have no idea what you qualify for: benefits.gov — it screens for everything at once.',
  },
];

/* ── Main component ──────────────────────────────────────────── */

export default function GovernmentBenefitsPortal() {
  const [selectedId, setSelectedId] = useState<PortalId | null>(null);

  const selected = useMemo<Portal | null>(
    () => PORTALS.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <>
      <SEOHead
        title="Government Portals — What's Real, What's Free"
        description="Senior-friendly guide to every major .gov benefits portal — Social Security, Medicare, VA, IRS, SNAP, LIHEAP, and more. Skip the scam 'helper' sites that charge for free services."
        path="/tools/government-benefits-portal"
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900" aria-hidden="true" />
          <div className="container relative py-12 md:py-16 text-white">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="government-benefits-portal"
                title="Government Portals — What's Real, What's Free"
                url="/tools/government-benefits-portal"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-white/10">
                <Landmark className="w-6 h-6" />
              </div>
              <Badge variant="secondary" className="text-xs bg-white/15 text-white border-0">
                Money · Government Services
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 pr-14 leading-tight">
              Government Portals — What&apos;s Real, What&apos;s Free
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed text-blue-100">
              Never pay a &ldquo;government helper&rdquo; site. The real portals are all free.
            </p>
          </div>
        </section>

        {/* Prime warning */}
        <section className="container py-8 md:py-12">
          <Card className="border-red-500/60 bg-red-50/60 dark:bg-red-950/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-red-600/10 text-red-700 dark:text-red-400 shrink-0">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold">Only .gov sites are official</h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    Many sites like <strong>get-medicare-info.com</strong>, <strong>ssa-benefits.org</strong>, or{' '}
                    <strong>federal-benefits-help.com</strong> charge a fee to help with forms that are free on the real
                    government site. Some are private businesses. Some are outright scams that steal your personal
                    information. Before entering your Social Security number, Medicare number, or bank info on any site,
                    check the web address. Real federal portals end in <strong>.gov</strong>.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Not sure if a site is real?{' '}
                    <Link to="/tools/is-this-real" className="text-primary underline font-medium">
                      Check it with our scam detector
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Portal picker */}
        <section className="container py-8 md:py-12">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">12 portals worth knowing</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Tap any portal below to see what it does, the exact web address, how to set up an account, and the most
              common gotchas. Everything here is free and operated by a federal or state government.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTALS.map((p) => {
              const active = selectedId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(p.id);
                    if (typeof window !== 'undefined') {
                      setTimeout(() => {
                        const el = document.getElementById('portal-detail');
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 50);
                    }
                  }}
                  className={[
                    'text-left rounded-2xl border-2 p-5 min-h-14 transition-colors',
                    active
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl shrink-0 ${p.tint}`}>
                      <p.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight">{p.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{p.tagline}</p>
                      <p className="text-sm text-primary font-medium mt-2 break-all">{p.urlLabel}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Portal detail */}
        {selected && (
          <section id="portal-detail" className="border-y border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <div className="flex items-start gap-3 mb-6">
                <div className={`p-3 rounded-xl shrink-0 ${selected.tint}`}>
                  <selected.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">{selected.name}</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{selected.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      What this portal does
                    </h3>
                    <p className="text-base leading-relaxed">{selected.whatItDoes}</p>
                    <div className="pt-2">
                      <Button asChild size="lg" className="gap-2 text-base">
                        <a href={selected.url} target="_blank" rel="noopener noreferrer">
                          Go to the official site
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        Exact address: <strong>{selected.urlLabel}</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <KeyRound className="w-5 h-5 text-primary" />
                      Set up your account
                    </h3>
                    {selected.login !== 'none' && (
                      <Badge variant="outline" className="text-sm">
                        {selected.login === 'loginGov' && 'Uses Login.gov'}
                        {selected.login === 'idMe' && 'Uses ID.me'}
                        {selected.login === 'either' && 'Login.gov or ID.me'}
                        {selected.login === 'state' && 'State-specific login'}
                      </Badge>
                    )}
                    <ol className="space-y-2 list-decimal pl-6">
                      {selected.setup.map((s, i) => (
                        <li key={i} className="text-base leading-relaxed">
                          {s}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400" />
                      What you can do there
                    </h3>
                    <ul className="space-y-2">
                      {selected.canDo.map((c, i) => (
                        <li key={i} className="flex gap-2 text-base leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                      Common gotchas
                    </h3>
                    <ul className="space-y-2">
                      {selected.gotchas.map((g, i) => (
                        <li key={i} className="flex gap-2 text-base leading-relaxed">
                          <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Login.gov / ID.me explainer */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <KeyRound className="w-7 h-7 text-primary" />
              Login.gov and ID.me — the two keys to most federal sites
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Most federal portals now ask you to sign in with one of these two services. Setting up an account once
              means you can re-use it across Social Security, VA, IRS, USAJobs, SBA, Medicare, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Login.gov (preferred)</h3>
                </div>
                <p className="text-base leading-relaxed">
                  Run by the federal government itself. Free, no data sold, and works across almost every federal
                  agency. If you are new to federal portals, start here.
                </p>
                <ol className="space-y-2 list-decimal pl-6">
                  <li className="text-base leading-relaxed">
                    Go to <strong>login.gov</strong> and click &ldquo;Create an account&rdquo;.
                  </li>
                  <li className="text-base leading-relaxed">
                    Enter your email and pick a strong password (at least 12 characters).
                  </li>
                  <li className="text-base leading-relaxed">
                    Set up a second login step: a text message code, an authenticator app like Google Authenticator, or a
                    physical security key.
                  </li>
                  <li className="text-base leading-relaxed">
                    Save your backup codes in a safe place (a notebook by your computer is fine).
                  </li>
                  <li className="text-base leading-relaxed">
                    For sites like SSA or IRS that need &ldquo;verified&rdquo; identity, Login.gov will then ask for a
                    photo ID and a short selfie.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">ID.me</h3>
                </div>
                <p className="text-base leading-relaxed">
                  A private company under federal contract. Required at the IRS and accepted by the VA and SSA. Slightly
                  more invasive up front (video selfie) but handy if you already have an account.
                </p>
                <ol className="space-y-2 list-decimal pl-6">
                  <li className="text-base leading-relaxed">
                    Go to <strong>id.me</strong> and click &ldquo;Sign Up&rdquo;.
                  </li>
                  <li className="text-base leading-relaxed">
                    Choose your second-step method — text code, authenticator app, or physical key.
                  </li>
                  <li className="text-base leading-relaxed">
                    Upload a photo of your driver license or passport and hold it flat in good lighting.
                  </li>
                  <li className="text-base leading-relaxed">
                    Record a short selfie video when prompted — same face, same lighting, no hat or glasses.
                  </li>
                  <li className="text-base leading-relaxed">
                    If automated verification fails, request a Trusted Referee video call — a real person will help in
                    about 15-30 minutes.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-muted/30">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Text code or authenticator app — which second step to pick
                </h3>
                <p className="text-base leading-relaxed">
                  Both work. A <strong>text message code</strong> is simplest — a 6-digit number arrives by SMS whenever
                  you log in. An <strong>authenticator app</strong> (Google Authenticator, Microsoft Authenticator, or
                  Authy) runs on your phone without needing cell service and is harder for scammers to intercept. If you
                  travel internationally or have spotty cell service, the app is more reliable.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>How to recover if you lose your phone:</strong> use the backup codes you saved at setup. If
                  you did not save them, each service has a recovery path — usually a new photo ID check by mail, which
                  takes 5-10 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Medicare enrollment windows */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-primary" />
                Medicare enrollment windows — the dates that matter
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Medicare has strict dates. Missing a window can mean a late penalty you pay for the rest of your life.
                Here are the windows every senior should know, in plain English.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MEDICARE_WINDOWS.map((w) => (
                <Card key={w.name}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold">{w.name}</h3>
                    <div className="flex items-start gap-2 text-base text-primary font-medium">
                      <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{w.when}</span>
                    </div>
                    <p className="text-base leading-relaxed">{w.what}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Security strategies */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Social Security — when to take it
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              The single biggest financial decision most retirees make. Here is the plain-English version of the rules
              — run your own numbers in your mySocialSecurity account before you decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SS_STRATEGIES.map((s) => (
              <Card key={s.title}>
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-base leading-relaxed">{s.body}</p>
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
                Red flags of scam &ldquo;help&rdquo; sites and callers
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Any one of these is reason to pause. Two or more means walk away and go to the real .gov site directly.
              </p>
            </div>

            <Card className="border-red-500/40 bg-red-50/40 dark:bg-red-950/20">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {RED_FLAGS.map((r, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed">
                      <XCircle className="w-5 h-5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Free help that IS real */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Heart className="w-7 h-7 text-primary" />
              Free help that IS real
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Paid &ldquo;helper&rdquo; services often sell you services that these free organizations already provide.
              Start here first.
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

        {/* Account security */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <Card className="bg-background">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Four rules for portal account security</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                    <span>
                      Use a unique password for every portal. A password manager like Bitwarden (free) or 1Password does
                      the remembering for you.
                    </span>
                  </li>
                  <li className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                    <span>Turn on two-step login everywhere it is offered. This is the single biggest security step you can take.</span>
                  </li>
                  <li className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                    <span>
                      Never click a &ldquo;verify your account&rdquo; link in an email. Type the address into your
                      browser yourself, or use a bookmark you saved.
                    </span>
                  </li>
                  <li className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                    <span>
                      Bookmark the real URL the first time you visit, then use the bookmark going forward. Scammers rely
                      on misspelled copycat addresses.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="container py-10 md:py-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Troubleshooting — what to do when you&apos;re stuck
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A few of the most common roadblocks, with the fix for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TROUBLESHOOTING.map((t) => (
              <Card key={t.title}>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                    {t.title}
                  </h3>
                  <p className="text-base leading-relaxed">{t.body}</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQS.map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold">{f.q}</h3>
                    <p className="text-base leading-relaxed">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-5 space-y-2">
                <ShieldAlert className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Is This Real?</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Check if a website, email, or caller is a scam.
                </p>
                <Link to="/tools/is-this-real" className="text-primary underline font-medium text-base">
                  Open tool →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <KeyRound className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Password Strength Tester</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Test your portal passwords for strength.
                </p>
                <Link to="/tools/password-strength-tester" className="text-primary underline font-medium text-base">
                  Open tool →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Free Resource Hub</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Free tech and benefit programs you may qualify for.
                </p>
                <Link to="/free-resources" className="text-primary underline font-medium text-base">
                  Open hub →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Scam Phone Database</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Look up a suspicious phone number.
                </p>
                <Link to="/tools/scam-phone-database" className="text-primary underline font-medium text-base">
                  Open tool →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
