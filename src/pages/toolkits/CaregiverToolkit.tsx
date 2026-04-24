import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HandHeart,
  Smartphone,
  Monitor,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Users,
  HeartPulse,
  Phone,
  Wallet,
  Stethoscope,
  Video,
  Home,
  Coffee,
  PhoneCall,
  Eye,
  Lock,
  Camera,
  MapPin,
  Pill,
  CalendarDays,
  Heart,
  FileText,
  Printer,
  Download,
  AlertTriangle,
  Scale,
  LifeBuoy,
  BookOpen,
  Landmark,
  ShieldAlert,
  type LucideIcon,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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

/* ──────────────────────────────────────────────────────────────
 * Caregiver Toolkit — Helping From Near or Far
 * ------------------------------------------------------------
 * Hub page for adult children caring for aging parents. Six
 * sections of cards (remote support, finances, medical,
 * connection, daily living, self-care), plus hard-conversation
 * scripts, a care-journey timeline, a services directory, an
 * FAQ, and a printable one-page Family Care Plan template.
 *
 * Plain-English throughout. No banned words.
 * ────────────────────────────────────────────────────────────── */

/* ── Shared card shape ────────────────────────────────────── */

interface ToolkitCard {
  title: string;
  description: string;
  to?: string;        // internal route
  href?: string;      // external link
  icon?: LucideIcon;
  tag?: string;
}

/* ── Section 1 · Remote tech support ──────────────────────── */

const remoteSupport: ToolkitCard[] = [
  {
    title: 'Apple Family Sharing + Screen Time',
    description:
      "On an iPhone or iPad, you can help your parent from your own device — reset passwords, share subscriptions, and set up Screen Time to catch risky activity. Works best with both of you on iPhones.",
    icon: Smartphone,
    tag: 'iPhone · iPad',
  },
  {
    title: 'Google Family Link',
    description:
      "The Android equivalent. Helps you support an Android phone or tablet from anywhere — account recovery, app approvals, and a find-my-device map so you know where the phone is.",
    icon: Smartphone,
    tag: 'Android',
  },
  {
    title: 'Chrome Remote Desktop',
    description:
      "Free from Google. You see their computer screen and control the mouse and keyboard from yours. Great for the PC or Chromebook where most confusing problems happen.",
    icon: Monitor,
    tag: 'Free',
  },
  {
    title: 'TeamViewer QuickSupport',
    description:
      'Another free tool for personal use. Your parent clicks a short code and you remote in — no account required on their side. Many adult caregivers prefer this one for its quick setup.',
    icon: Monitor,
    tag: 'Free for family',
  },
  {
    title: 'Apple Remote Access (Messages)',
    description:
      "If both of you are on Macs or iPhones, you can request to share their screen right from the Messages app or FaceTime — no extra software to install.",
    icon: Monitor,
    tag: 'Apple',
  },
  {
    title: 'Ring & Nest cameras (with consent)',
    description:
      "A doorbell camera or a kitchen-area camera can ease the worry of long-distance check-ins. Ask first. Frame it as a shared safety tool, not a monitor — and respect bedrooms and bathrooms.",
    icon: Camera,
    to: '/tools/home-security-camera-setup',
    tag: 'With permission',
  },
  {
    title: 'Shared iCloud Photos',
    description:
      "A shared album gives you a gentle daily window into their life — the dog, the garden, a funny mail coupon — while giving them a place to keep tabs on the grandkids.",
    icon: Heart,
  },
  {
    title: 'Life360 for location sharing',
    description:
      "Two-way location sharing that the whole family can opt into. The crash-detection and driving reports can be reassuring when an older parent is still on the road.",
    icon: MapPin,
  },
];

/* ── Sidebar skit for Section 1 ───────────────────────────── */

const introScript = [
  'Dad, I want to help more from far away without feeling like I\'m hovering. Would it be okay if we set up a free tool where I can see your screen only when you call me? You stay in control — nothing happens unless you click "let her in."',
  'Here\'s what changes for you: nothing. Here\'s what changes for me: I can actually fix things in five minutes instead of telling you to restart it and hoping. That way I stop being annoying, and you stop having to describe error messages.',
];

/* ── Section 2 · Financial protection ─────────────────────── */

const financialProtection: ToolkitCard[] = [
  {
    title: 'View-only bank account access',
    description:
      "With your parent's permission, most banks let them add you as a read-only user — you can see transactions and balances but not move money. This is the single best fraud tripwire a family can set.",
    icon: Eye,
  },
  {
    title: 'Add a trusted contact',
    description:
      "Banks and brokerages (Fidelity, Schwab, Vanguard) let your parent name a trusted contact — someone the bank can call if they suspect elder fraud or can't reach your parent. Free to add. Takes 10 minutes.",
    icon: Users,
  },
  {
    title: 'Rose Parish checklist — money + cognition',
    description:
      "Watch for these signs: missed bills in the mail pile, surprise cash withdrawals, new long-distance sweepstakes mail, a new best friend helping with finances, or confusion about familiar bills. One sign is worth a conversation. Three is worth a call with their doctor.",
    icon: AlertTriangle,
  },
  {
    title: 'Power of Attorney basics',
    description:
      "Financial POA lets you handle money matters. Healthcare POA (sometimes called a healthcare proxy) lets you make medical decisions if they can't. A durable POA stays in effect if they lose capacity. Do this while everyone is well — not in a crisis.",
    icon: Scale,
    tag: 'Talk to a lawyer',
  },
  {
    title: 'EverSafe fraud monitoring',
    description:
      "Built for older adults — scans bank, credit card, and investment accounts for suspicious activity and alerts a family member. Costs a few dollars a month and catches things you would miss.",
    icon: ShieldCheck,
    href: 'https://www.eversafe.com/',
  },
  {
    title: 'True Link card',
    description:
      "A Visa card you can configure for a parent with memory loss — block certain merchants, cap daily spending, and set up alerts for every swipe. Gives them independence and you a safety net.",
    icon: Wallet,
    href: 'https://www.truelinkfinancial.com/',
  },
  {
    title: 'LifeLock Senior',
    description:
      "Identity-theft monitoring aimed at older adults. Not a substitute for EverSafe-style account monitoring, but a useful second layer — especially after a data breach or scam call.",
    icon: ShieldAlert,
  },
  {
    title: 'Banking app walkthrough',
    description:
      "If they are new to mobile banking, our step-by-step guide covers sign-in, fingerprint, bill pay, and the fraud-alert settings to turn on.",
    icon: Smartphone,
    to: '/tools/banking-app-setup',
  },
  {
    title: 'Refund and return helper',
    description:
      "A calm walkthrough for getting money back on a bad purchase, a duplicate charge, or a subscription nobody meant to sign up for.",
    icon: Wallet,
    to: '/tools/refund-and-return-helper',
  },
];

/* ── Section 3 · Medical coordination ─────────────────────── */

const medicalCoordination: ToolkitCard[] = [
  {
    title: 'MyChart proxy access',
    description:
      "MyChart (used by most hospital systems) lets your parent grant you proxy access — you see their appointments, lab results, and messages, and can message their care team on their behalf. They sign the authorization form, you follow the steps.",
    icon: Stethoscope,
  },
  {
    title: 'CareZone',
    description:
      "A family-friendly medication manager — scan pill bottles, track doses, store pharmacy info, and invite siblings. Good for shared caregiving across family members.",
    icon: Pill,
  },
  {
    title: 'Medisafe reminders',
    description:
      "A strong medication reminder app with a partner-notification feature — if your parent misses a dose, you can be alerted to follow up.",
    icon: Pill,
    to: '/tools/medication-reminder-setup',
  },
  {
    title: 'Doctor visit prep sheet',
    description:
      'Bring a short list: medications, current symptoms, three questions, and a pen. Ask for a written summary before leaving. You are an advocate — you are allowed to ask the doctor to slow down and to say what a term means in plain English.',
    icon: FileText,
  },
  {
    title: 'Health record consolidation',
    description:
      'Apple Health and the VA Health app can pull records from dozens of hospital systems into one spot. A shared Google Drive folder or a plain binder works too — the goal is everything in one place so no ER visit starts from zero.',
    icon: FileText,
  },
  {
    title: 'Hospital discharge checklist',
    description:
      "Before they go home: who is the follow-up doctor, what are the new medications, what are the danger signs, who do you call at 2 a.m., and is home safe enough (no throw rugs, grab bars installed). Ask for every answer in writing.",
    icon: Home,
  },
  {
    title: 'Palliative & hospice — not giving up',
    description:
      "Palliative care is symptom management alongside treatment. Hospice focuses on comfort in the last months of life. Many families wait too long and regret it — asking about these options early is a caring act, not surrender.",
    icon: Heart,
  },
];

/* ── Section 4 · Staying connected ────────────────────────── */

const stayingConnected: ToolkitCard[] = [
  {
    title: 'Weekly video call habit',
    description:
      "A standing weekly call, same time every week, is worth more than five random ones. Our video-call helper walks them through FaceTime, Zoom, and Google Meet with big buttons and plain steps.",
    icon: Video,
    to: '/tools/video-call-helper',
  },
  {
    title: 'GrandPad tablet',
    description:
      "A tablet built for older adults — one-touch video calls, large icons, no app store to get lost in, and 4G built in so there is no router to worry about. Great for parents with early memory issues.",
    icon: Smartphone,
  },
  {
    title: 'Echo Show for easy calls',
    description:
      "An Amazon Echo Show with Drop In enabled lets the whole family hop into a video call with a voice command — no taps needed. Senior-friendly setup in about 20 minutes.",
    icon: Video,
  },
  {
    title: 'Aura or Nixplay photo frame',
    description:
      "Digital photo frames you can load from anywhere — you send photos from your phone, they appear on the frame in their living room. Nothing for them to set up. Pure delight.",
    icon: Heart,
  },
  {
    title: 'Shared family calendar',
    description:
      'Google Calendar or Apple Calendar with a shared "Family" calendar keeps everyone aligned on doctor visits, therapy, birthdays, and who is covering which weekend.',
    icon: CalendarDays,
  },
  {
    title: 'Care Team group text',
    description:
      'Siblings plus the parent (if able) plus any paid caregivers. Ground rules: one thread per topic, no guilt-tripping, allow "no update today" as a full reply. A shared note with POA and doctor info lives at the top.',
    icon: MessageCircle,
  },
];

/* ── Section 5 · Daily living tech ────────────────────────── */

const dailyLiving: ToolkitCard[] = [
  {
    title: 'Smart thermostat (Nest / Ecobee)',
    description:
      "Set from your phone if Mom forgets to change the heat. Can also alert you if the house temp drops (a broken furnace in January becomes a five-minute call instead of a frozen-pipe disaster).",
    icon: Home,
    to: '/tools/smart-thermostat-setup',
  },
  {
    title: 'Smart lock (Yale, August, Schlage)',
    description:
      "A keypad lock with time-limited codes means the home-health aide, the plumber, or a neighbor can be let in from your phone. No more hidden keys under the mat.",
    icon: Lock,
  },
  {
    title: 'Apple Watch fall detection',
    description:
      "Series 4 and newer can detect a hard fall and auto-call 911 if your parent does not respond. Requires cellular for use outside the house. Worth the upgrade for anyone with balance concerns.",
    icon: HeartPulse,
  },
  {
    title: 'Medical alert pendants',
    description:
      "Medical Guardian, Life Alert, Bay Alarm Medical, and MobileHelp all offer pendants with fall detection and GPS. No phone needed. Prices range $30–$60/month.",
    icon: LifeBuoy,
  },
  {
    title: 'GPS trackers for dementia',
    description:
      'Theora Care and Project Lifesaver are designed for wandering. Apple AirTag can work in a shoe or bag, but use with care — AirTags are intended for objects, not people, and have safety trade-offs.',
    icon: MapPin,
    tag: 'Use with care',
  },
  {
    title: 'Medication dispensers',
    description:
      "Automated pill dispensers (Hero, MedMinder) lock the rest of the pills away and dispense the right dose at the right time. Big help for anyone on more than three medications.",
    icon: Pill,
    to: '/tools/medication-reminder-setup',
  },
];

/* ── Section 6 · Caregiver self-care ──────────────────────── */

const selfCare: ToolkitCard[] = [
  {
    title: 'Respite care options',
    description:
      "In-home respite (a paid caregiver for a few hours), adult day programs (Mom goes, you work), or overnight respite (a short nursing-home stay so you can travel). Your Area Agency on Aging knows the local options.",
    icon: Coffee,
  },
  {
    title: 'AARP Caregiving resources',
    description:
      "AARP's free caregiver library — articles, expert Q&A, and state-by-state guides to benefits. You do not have to be an AARP member to use most of it.",
    icon: BookOpen,
    href: 'https://www.aarp.org/caregiving/',
  },
  {
    title: 'Family Caregiver Alliance',
    description:
      "caregiver.org — a nonprofit with real depth. Disease-specific fact sheets, legal and financial guides, and a free care navigator service in some states.",
    icon: HandHeart,
    href: 'https://www.caregiver.org/',
  },
  {
    title: 'Area Agency on Aging (AAA)',
    description:
      "Every US county has one. They coordinate Meals on Wheels, transportation, in-home services, and can often connect you with subsidized respite. Find yours at eldercare.acl.gov.",
    icon: Landmark,
    href: 'https://eldercare.acl.gov/',
  },
  {
    title: 'Support groups — online & local',
    description:
      "Caring.com forums, r/CaregiverSupport on Reddit, and in-person groups through Alzheimer's Association, Parkinson's Foundation, and local senior centers. Nobody understands a caregiver like another caregiver.",
    icon: Users,
  },
  {
    title: 'Caregiver burnout signs',
    description:
      "Short temper. Dreading the phone ring. Neglecting your own health. Drinking more. Feeling numb. Losing joy in things you used to love. These are not character flaws — they are the body asking for rest. Call someone.",
    icon: AlertTriangle,
  },
  {
    title: 'Legal & tax — what caregivers miss',
    description:
      "You may be able to claim your parent as a dependent, deduct medical expenses, or use an FSA for their care. FMLA covers up to 12 weeks of unpaid leave. Some states (WA, NJ, CA, others) pay family caregivers — ask your AAA.",
    icon: Scale,
  },
  {
    title: '988 — Suicide & Crisis Lifeline',
    description:
      "If you or your parent are in crisis, call or text 988. Free, 24/7, no caller ID. Caregivers are at higher risk of depression and suicidal thoughts — you are allowed to ask for help.",
    icon: Phone,
    href: 'https://988lifeline.org/',
  },
];

/* ── Hard-conversation scripts ────────────────────────────── */

const hardConversations: Array<{
  topic: string;
  intro: string;
  script: string;
  icon: LucideIcon;
}> = [
  {
    topic: 'The driving conversation',
    intro: "Start from love and specifics, not from a verdict.",
    script:
      '"Dad, I want to talk about driving, and I want you to know I\'m not telling you to stop. I saw the side-swipe on the garage and the missed turn last Sunday, and I\'m worried. Can we get a fresh driving evaluation — an occupational therapist does them, it\'s about an hour — and then we\'ll decide together what the right next step looks like? I want you keeping your independence safely."',
  },
  {
    topic: "Talking about the finances",
    intro: 'Money is identity. Approach it as a partnership, not a takeover.',
    script:
      '"Mom, I\'d like to help with the bills — not take them over. Can you walk me through how you pay things so I can be a backup if anything ever happened? If it\'s okay, I\'d love to be a view-only on your checking account so I can catch anything weird early. You stay in charge. I only want to have your back."',
  },
  {
    topic: 'Where do you want to live when...',
    intro: 'Ask before the decision is forced on everyone.',
    script:
      '"I don\'t want to wait until something happens to talk about this. If one day the stairs got hard, or the driving got hard, where would you most want to be? Your house with help? Closer to me? A community with other people around? There are no wrong answers. I want to know what you want so we can plan for it together."',
  },
  {
    topic: 'When Mom and Dad disagree',
    intro: 'Hold both truths. Do not referee.',
    script:
      '"I hear Dad wants to stay in the house. I hear Mom is exhausted and scared. Both of those things are real, and both of you matter. Can we get a geriatric care manager involved for one assessment — someone neutral who can lay out the options? Whatever we do next, I want both of you to feel heard."',
  },
];

/* ── Care-journey timeline ────────────────────────────────── */

const careJourney: Array<{
  stage: string;
  label: string;
  tech: string;
  tint: string;
}> = [
  {
    stage: 'Independent',
    label: 'Living alone, driving, managing everything',
    tech: 'Shared calendar. Weekly video call. Password manager. Trusted contact on bank. Medical ID set up on phone. Make sure POAs are drafted.',
    tint: 'text-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900',
  },
  {
    stage: 'Needs weekly help',
    label: 'A little forgetfulness, some bills slipping',
    tech: 'Add view-only bank access. Medication reminder app. Smart thermostat. Auto-pay for recurring bills. Ring doorbell. Family Sharing / Family Link enabled.',
    tint: 'text-sky-800 bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-900',
  },
  {
    stage: 'Needs daily help',
    label: 'Home health aide a few days, family on rotation',
    tech: 'Smart lock with time-limited codes. Medication dispenser. Fall-detection watch or pendant. MyChart proxy access. Care Team group text. In-home cameras in shared rooms (with consent).',
    tint: 'text-amber-800 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900',
  },
  {
    stage: 'Needs full-time care',
    label: 'Memory care, assisted living, or 24/7 home care',
    tech: 'GPS tracker if wandering. Simplified phone (GrandPad, Jitterbug). Echo Show in the room for calls. Durable POA activated. Shared medical binder. Care manager or paid geriatric case manager.',
    tint: 'text-orange-800 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900',
  },
  {
    stage: 'End of life',
    label: 'Hospice or palliative care',
    tech: 'Digital photo frame with family images. FaceTime on a nearby iPad for distant family. Password and account locations documented. Digital will template completed. Memorial/obituary notes drafted when ready.',
    tint: 'text-rose-800 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900',
  },
];

/* ── Services directory ──────────────────────────────────── */

const servicesDirectory: ToolkitCard[] = [
  {
    title: 'Eldercare Locator',
    description:
      "Federal service that connects you to local aging services by ZIP code. A good first call when you do not know where to start.",
    icon: Landmark,
    href: 'https://eldercare.acl.gov/',
    tag: '1-800-677-1116',
  },
  {
    title: 'Administration for Community Living',
    description:
      "The federal umbrella agency for aging and disability services. Their site explains benefit programs and connects to state-level resources.",
    icon: Landmark,
    href: 'https://acl.gov/',
  },
  {
    title: '211 — Social services',
    description:
      'Dial 211 (or visit 211.org) for a free, 24/7 connection to local food, housing, utilities, and caregiver support. Think of it as "911 for social services."',
    icon: PhoneCall,
    href: 'https://www.211.org/',
    tag: 'Dial 211',
  },
  {
    title: 'Meals on Wheels',
    description:
      "Nationwide network of programs delivering meals to homebound older adults. Many programs include a daily wellness check with the meal.",
    icon: Heart,
    href: 'https://www.mealsonwheelsamerica.org/',
  },
  {
    title: 'PACE programs',
    description:
      'Program of All-Inclusive Care for the Elderly — comprehensive care for people 55+ who qualify for nursing-home level care but want to stay home. Medicare and Medicaid covered for eligible participants.',
    icon: HeartPulse,
    href: 'https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/pace',
  },
  {
    title: 'SHIP — free insurance counseling',
    description:
      "State Health Insurance Assistance Program. Free, unbiased help with Medicare questions, Medicare Advantage plan comparisons, and benefits. No sales pitch.",
    icon: ShieldCheck,
    href: 'https://www.shiphelp.org/',
  },
];

/* ── FAQs ────────────────────────────────────────────────── */

const faqs: Array<{ q: string; a: string[] }> = [
  {
    q: 'My parent refuses help. What do I do?',
    a: [
      "Refusal is almost always about identity — admitting they need help feels like admitting they are old. Do not argue with the feeling. Start with the smallest possible foothold: one thing, one time.",
      'Try: "Will you let me set up one fall-detection watch, and if you hate it in a month we take it off?" Trials feel reversible. Decisions feel final.',
      'If refusal is putting them in danger (driving impaired, missing medications, falling repeatedly), you may need to involve their doctor or a geriatric care manager. Sometimes the same words land differently from someone in a white coat.',
    ],
  },
  {
    q: "We live in different states. What's the long-distance plan?",
    a: [
      'Build three things before a crisis: (1) a local person — neighbor, nurse, care manager — who can physically check in, (2) remote-access tools on all their devices so you can actually help, and (3) a written care plan everyone in the family has a copy of.',
      "Schedule in-person visits. Nothing substitutes for being there — walk the house, check the fridge, notice the mail pile, meet the neighbors. Twice a year minimum if you can.",
      "Know who to call at 2 a.m. — their doctor's after-hours line, the nearest ER, the neighbor with a key, the home-health agency on-call number. Write it all on a single index card.",
    ],
  },
  {
    q: "My siblings and I disagree about what to do.",
    a: [
      'The sibling who lives closest usually does the most work and has the strongest opinion — and the ones far away often weigh in the loudest. This is a cliché because it is true.',
      "Try a neutral structured conversation: one 60-minute family meeting on Zoom, with a written agenda, and a neutral facilitator if needed (a social worker from the AAA can do this free or low-cost).",
      'Agree on what Mom and Dad want — not what each of you thinks is right. Their wishes come first, their safety comes second, your preferences come third. That ordering defuses most arguments.',
    ],
  },
  {
    q: 'Do I quit my job or outsource care?',
    a: [
      'There is no right answer — but there is a financial one. A full-time home-health aide runs $5,000–$7,000 a month in most US metros. A year out of work can cost more than that in lost wages, retirement savings, and Social Security credits.',
      'Check FMLA first (12 weeks unpaid but job-protected). Ask HR about flexible schedules. Explore paid family-leave in your state (growing number of states now offer it). Some states — WA, CA, NJ, others — will pay you as the family caregiver through Medicaid.',
      "If you do reduce hours or quit, protect your own retirement. Talk to a financial planner about spousal IRA contributions and Social Security credits before you decide.",
    ],
  },
  {
    q: 'Is smart-home tech actually safe for older adults?',
    a: [
      'Cameras, microphones, and location data all carry privacy trade-offs. The safest setup is: cameras only in shared rooms (never bedrooms or bathrooms), visible (not hidden), discussed openly, and turned off any time a guest asks.',
      'Use strong, unique passwords and turn on two-factor authentication for the accounts the devices connect to. A hacked smart lock or camera is worse than no smart lock or camera.',
      'Teach your parent what the devices can see and hear, and who has access. Respecting their dignity matters more than the convenience the device gives you.',
    ],
  },
  {
    q: 'How do we balance privacy and safety?',
    a: [
      'Start from consent. Anything you monitor, they should know about and be able to turn off. Surveillance without consent breaks trust permanently.',
      'Use the least-invasive tool that solves the problem. A motion sensor on the front door is less invasive than a camera — and may be all you need to know they are moving around each day.',
      "Revisit the plan as their needs change. What felt invasive at stage one may feel reassuring at stage three. Ask, don't assume.",
    ],
  },
];

/* ── Related links ────────────────────────────────────────── */

const relatedLinks: Array<{ label: string; to: string; description: string; icon: LucideIcon }> = [
  {
    label: 'Emergency info card',
    to: '/tools/emergency-info-card',
    description: 'Printable wallet-sized card with contacts, meds, allergies.',
    icon: LifeBuoy,
  },
  {
    label: 'Digital will template',
    to: '/tools/digital-will-template',
    description: 'Document passwords, accounts, and final wishes.',
    icon: FileText,
  },
  {
    label: 'Medication reminder setup',
    to: '/tools/medication-reminder-setup',
    description: 'Walkthroughs for CareZone, Medisafe, and phone reminders.',
    icon: Pill,
  },
  {
    label: 'Is this real? (fake-news checker)',
    to: '/tools/is-this-real',
    description: 'Help Mom check if that email, article, or call is a scam.',
    icon: ShieldAlert,
  },
  {
    label: 'Family-related guides',
    to: '/guides?category=family',
    description: 'All TekSure guides tagged for families and caregivers.',
    icon: Users,
  },
];

/* ── Printable Family Care Plan ───────────────────────────── */

function buildCarePlanHtml() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // Plain-language printable one-pager. Opens in a new window, auto-prints.
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Family Care Plan</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #111; margin: 24px; line-height: 1.4; }
  h1 { font-size: 22px; margin: 0 0 2px; color: #7c3f2a; }
  p.sub { margin: 0 0 14px; color: #555; font-size: 12px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin: 14px 0 4px; color: #6b4b36; border-bottom: 1px solid #e5dbd1; padding-bottom: 2px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; font-size: 12px; }
  .row { display: flex; gap: 8px; align-items: baseline; }
  .row label { min-width: 110px; font-weight: 600; color: #444; }
  .row .line { flex: 1; border-bottom: 1px solid #c8b9ac; min-height: 16px; }
  ul { margin: 2px 0 6px 18px; font-size: 12px; padding: 0; }
  .note { font-size: 11px; color: #666; margin-top: 8px; }
  .footer { margin-top: 16px; font-size: 10px; color: #888; }
  @media print {
    body { margin: 14mm; }
    button { display: none; }
  }
</style>
</head>
<body>
  <h1>Family Care Plan</h1>
  <p class="sub">Prepared ${today} · one page · keep in a shared folder and on the fridge</p>

  <h2>Parent information</h2>
  <div class="grid">
    <div class="row"><label>Full name</label><div class="line"></div></div>
    <div class="row"><label>Date of birth</label><div class="line"></div></div>
    <div class="row"><label>Home address</label><div class="line"></div></div>
    <div class="row"><label>Phone</label><div class="line"></div></div>
    <div class="row"><label>Medicare / ID</label><div class="line"></div></div>
    <div class="row"><label>Blood type</label><div class="line"></div></div>
  </div>

  <h2>Emergency contacts</h2>
  <div class="grid">
    <div class="row"><label>Primary caregiver</label><div class="line"></div></div>
    <div class="row"><label>Secondary</label><div class="line"></div></div>
    <div class="row"><label>Neighbor w/ key</label><div class="line"></div></div>
    <div class="row"><label>Clergy / advisor</label><div class="line"></div></div>
  </div>

  <h2>Doctors &amp; pharmacy</h2>
  <div class="grid">
    <div class="row"><label>Primary care</label><div class="line"></div></div>
    <div class="row"><label>Cardiology</label><div class="line"></div></div>
    <div class="row"><label>Other specialist</label><div class="line"></div></div>
    <div class="row"><label>Pharmacy</label><div class="line"></div></div>
    <div class="row"><label>Preferred hospital</label><div class="line"></div></div>
    <div class="row"><label>Home-health agency</label><div class="line"></div></div>
  </div>

  <h2>Medications (name · dose · time)</h2>
  <ul>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
  </ul>

  <h2>Legal &amp; financial</h2>
  <div class="grid">
    <div class="row"><label>Financial POA</label><div class="line"></div></div>
    <div class="row"><label>Healthcare POA</label><div class="line"></div></div>
    <div class="row"><label>Will location</label><div class="line"></div></div>
    <div class="row"><label>Bank / broker</label><div class="line"></div></div>
    <div class="row"><label>Insurance</label><div class="line"></div></div>
    <div class="row"><label>Password manager</label><div class="line"></div></div>
  </div>

  <h2>Wishes</h2>
  <div class="grid">
    <div class="row"><label>Religious/cultural</label><div class="line"></div></div>
    <div class="row"><label>Advance directive</label><div class="line"></div></div>
    <div class="row"><label>Preferred setting</label><div class="line"></div></div>
    <div class="row"><label>Guardian pref.</label><div class="line"></div></div>
  </div>

  <h2>Notes</h2>
  <ul>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
    <li>_________________________________________________</li>
  </ul>

  <p class="note">Keep this plan updated at least once a year or whenever a doctor, medication, or contact changes.</p>
  <p class="footer">Created with TekSure · teksure.com/toolkits/caregiver</p>
  <script>setTimeout(() => window.print(), 300);</script>
</body>
</html>`;
}

/* ── Renderable card ─────────────────────────────────────── */

function ToolCard({ card }: { card: ToolkitCard }) {
  const Icon = card.icon ?? Heart;
  const body = (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-base md:text-lg leading-snug">
            {card.title}
          </h3>
          {card.tag ? (
            <Badge variant="outline" className="mt-1.5 text-xs font-normal">
              {card.tag}
            </Badge>
          ) : null}
        </div>
      </div>
      <p className="text-base text-muted-foreground leading-relaxed flex-1">
        {card.description}
      </p>
      {card.to ? (
        <Link
          to={card.to}
          className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
        >
          Open on TekSure
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : card.href ? (
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
        >
          Visit official site
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
  return (
    <Card className="rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all">
      <CardContent className="p-5 md:p-6 h-full">{body}</CardContent>
    </Card>
  );
}

/* ──────────────────────────────────────────────────────────
 * Page
 * ────────────────────────────────────────────────────────── */

export default function CaregiverToolkit() {
  const [activeTab, setActiveTab] = useState<string>('remote');

  const tabs = useMemo(
    () => [
      { value: 'remote', label: '1 · Remote support', icon: Monitor },
      { value: 'money', label: '2 · Finances', icon: Wallet },
      { value: 'medical', label: '3 · Medical', icon: Stethoscope },
      { value: 'connect', label: '4 · Connection', icon: Video },
      { value: 'living', label: '5 · Daily living', icon: Home },
      { value: 'self', label: '6 · Self-care', icon: Coffee },
    ],
    [],
  );

  const openCarePlan = () => {
    if (typeof window === 'undefined') return;
    const w = window.open('', '_blank', 'noopener,noreferrer');
    if (!w) return;
    w.document.open();
    w.document.write(buildCarePlanHtml());
    w.document.close();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Caregiver Toolkit — Helping From Near or Far | TekSure"
        description="A complete toolkit for adult children caring for aging parents — remote tech support, fraud prevention, medical coordination, staying connected, daily living tech, and self-care. Plain English. Free."
        path="/toolkits/caregiver"
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="container pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Toolkits', href: '/toolkits' },
              { label: 'Caregiver Toolkit' },
            ]}
          />
        </div>

        {/* ── Hero ──────────────────────────────────── */}
        <section className="relative border-b border-border overflow-hidden bg-gradient-to-br from-rose-100 via-orange-50 to-emerald-100 dark:from-rose-950/40 dark:via-orange-950/20 dark:to-emerald-950/40">
          <div className="container py-12 md:py-20 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="toolkits-caregiver"
                title="Caregiver Toolkit — Helping From Near or Far"
                url="/toolkits/caregiver"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-rose-500/15 text-rose-700 dark:text-rose-300 shadow-sm">
                <HandHeart className="w-8 h-8" aria-hidden="true" />
              </div>
              <Badge variant="outline" className="text-sm bg-white/70 dark:bg-background/70">
                Toolkit · For adult children
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-rose-950 dark:text-rose-50 tracking-tight max-w-3xl">
              Caregiver Toolkit — Helping From Near or Far
            </h1>
            <p className="text-lg md:text-2xl text-rose-900/90 dark:text-rose-100/90 max-w-3xl leading-relaxed">
              You don't have to figure this out alone. Here's everything to help your parent stay safe, connected, and independent.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild size="lg" className="text-base min-h-14 bg-rose-700 hover:bg-rose-800 text-white">
                <a href="#toolkit">Start with the six sections</a>
              </Button>
              <Button
                onClick={openCarePlan}
                size="lg"
                variant="outline"
                className="text-base min-h-14 bg-white/80 dark:bg-background/70"
              >
                <Printer className="w-5 h-5 mr-2" aria-hidden="true" />
                Print Family Care Plan
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base min-h-14 bg-white/80 dark:bg-background/70">
                <a href="#timeline">See the care journey</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Six sections, tabbed ────────────────── */}
        <section id="toolkit" className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              The six sections of a caregiving life
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Most caregiving questions fall into one of these buckets. Start wherever the pressure is today — you can come back for the rest.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full flex flex-wrap h-auto gap-2 p-2 bg-muted/40">
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="text-base min-h-14 flex-1 min-w-[160px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <t.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Section 1 */}
            <TabsContent value="remote" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                  {remoteSupport.map((c) => (
                    <ToolCard key={c.title} card={c} />
                  ))}
                </div>
                <Card className="rounded-2xl border border-border bg-muted/30 h-fit sticky top-6">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                      <h3 className="font-semibold text-lg">
                        How to introduce remote help — without it feeling like surveillance
                      </h3>
                    </div>
                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                      {introScript.map((line, i) => (
                        <p key={i}>"{line}"</p>
                      ))}
                    </div>
                    <Alert className="mt-4 border-amber-300 bg-amber-50 dark:bg-amber-950/30">
                      <AlertTriangle className="h-4 w-4 text-amber-700" aria-hidden="true" />
                      <AlertTitle className="text-sm">Quick Tip</AlertTitle>
                      <AlertDescription className="text-sm">
                        Never install anything on their device without asking. The one time you do, you lose trust for the next five years.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Section 2 */}
            <TabsContent value="money" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {financialProtection.map((c) => (
                  <ToolCard key={c.title} card={c} />
                ))}
              </div>
            </TabsContent>

            {/* Section 3 */}
            <TabsContent value="medical" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {medicalCoordination.map((c) => (
                  <ToolCard key={c.title} card={c} />
                ))}
              </div>
            </TabsContent>

            {/* Section 4 */}
            <TabsContent value="connect" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stayingConnected.map((c) => (
                  <ToolCard key={c.title} card={c} />
                ))}
              </div>
            </TabsContent>

            {/* Section 5 */}
            <TabsContent value="living" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dailyLiving.map((c) => (
                  <ToolCard key={c.title} card={c} />
                ))}
              </div>
            </TabsContent>

            {/* Section 6 */}
            <TabsContent value="self" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selfCare.map((c) => (
                  <ToolCard key={c.title} card={c} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* ── Hard conversations ─────────────────── */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-12 md:py-16">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3 bg-background">
                The hardest part
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                Scripts for the conversations everyone puts off
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                The technology is the small part. These four conversations are the big part. Steal the words — they are written to be said out loud, not recited.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {hardConversations.map((s) => (
                <Card key={s.topic} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{s.topic}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-3">{s.intro}</p>
                    <blockquote className="border-l-2 border-primary/40 pl-4 text-base text-foreground/90 leading-relaxed">
                      {s.script}
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Care journey timeline ──────────────── */}
        <section id="timeline" className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              The care journey — and what tech changes at each stage
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Care is not one problem — it's a series of stages, and the tools that help change as you move through them. Here's what tends to change when.
            </p>
          </div>

          <ol className="space-y-4" aria-label="Care journey stages">
            {careJourney.map((stage, i) => (
              <li
                key={stage.stage}
                className={`rounded-2xl border p-5 md:p-6 ${stage.tint}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-background/70 dark:bg-background/40 w-11 h-11 flex items-center justify-center shrink-0 font-bold text-base">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl">{stage.stage}</h3>
                    <p className="text-base opacity-90 mt-1">{stage.label}</p>
                    <p className="text-base mt-3 leading-relaxed">
                      <span className="font-semibold">Tech that helps: </span>
                      {stage.tech}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Directory of services ──────────────── */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-6xl py-12 md:py-16">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3 bg-background">
                Directory of services
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                Free and low-cost services every caregiver should know
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                These are federal, state, and nonprofit programs — not marketing. Most are free. All are reputable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesDirectory.map((c) => (
                <ToolCard key={c.title} card={c} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Printable Family Care Plan ─────────── */}
        <section className="container max-w-5xl py-12 md:py-16">
          <Card className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-rose-50 via-orange-50 to-emerald-50 dark:from-rose-950/30 dark:via-orange-950/20 dark:to-emerald-950/30">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="mx-auto rounded-2xl bg-primary/15 w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Print a Family Care Plan
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                One page. Parent info, emergency contacts, doctors, medications, POA locations, and wishes. Keep one in a shared folder, one on the fridge, one in your glove box.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={openCarePlan} size="lg" className="text-base min-h-14 gap-2">
                  <Printer className="w-5 h-5" aria-hidden="true" />
                  Open printable template
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base min-h-14 gap-2">
                  <Link to="/tools/emergency-info-card">
                    <Download className="w-5 h-5" aria-hidden="true" />
                    Wallet-sized emergency card
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ────────────────────────────────── */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-4xl py-12 md:py-16">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3 bg-background">
                FAQ
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                The questions caregivers ask us most
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                No sugarcoating. Honest answers from the other side of the hardest years.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-base md:text-lg">
                    <span className="font-semibold text-foreground pr-4">{f.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                      {f.a.map((p, k) => (
                        <p key={k}>{p}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Related links ──────────────────────── */}
        <section className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Related on TekSure
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Tools and guides that pair with this toolkit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((r) => (
              <Card
                key={r.to}
                className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-5 md:p-6">
                  <Link to={r.to} className="flex items-start gap-3 group">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                      <r.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                        {r.label}
                        <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Final permission-to-rest CTA ──────── */}
        <section className="container max-w-4xl pb-16">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <HandHeart className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                You are doing a hard, loving thing
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every caregiver we talk to says the same thing afterward: "I wish I had asked for help sooner." Consider this your permission.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="text-base min-h-14 gap-2">
                  <Link to="/book">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Book help on their behalf
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                  <Link to="/caregiver-hub">Visit the Caregiver Hub</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
