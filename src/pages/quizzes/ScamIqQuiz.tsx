import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Share2,
  Copy,
  Trophy,
  Phone,
  MessageSquare,
  Mail,
  Users,
  MapPin,
  Flag,
  BookOpen,
  Sparkles,
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ───────────────────────── Types ───────────────────────── */

type Category = 'robocalls' | 'texts' | 'emails' | 'social' | 'in-person';

interface Option {
  label: string;
  correct?: boolean;
  note?: string;
}

interface Question {
  id: number;
  category: Category;
  channel: string; // human label, e.g. "Text message"
  title: string;
  scenario: string;
  options: Option[];
  verdict: string; // "Why it's a scam" / "Why it's real"
  redFlag: string;
  verdictKind: 'scam' | 'real';
}

interface Attempt {
  date: string; // ISO
  score: number; // 0-20
  badge: string;
}

/* ──────────────────── Category metadata ──────────────────── */

const CATEGORIES: Record<Category, { label: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  robocalls: { label: 'Phone & robocalls', icon: Phone, color: 'text-orange-600' },
  texts: { label: 'Texts & SMS', icon: MessageSquare, color: 'text-emerald-600' },
  emails: { label: 'Emails & web popups', icon: Mail, color: 'text-blue-600' },
  social: { label: 'Social media & DMs', icon: Users, color: 'text-fuchsia-600' },
  'in-person': { label: 'In-person & QR', icon: MapPin, color: 'text-amber-600' },
};

/* ──────────────────────── Questions ──────────────────────── */

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'texts',
    channel: 'Text message',
    title: 'Medicare card renewal text',
    scenario:
      'You get a text: "MEDICARE ALERT: Your red/white/blue card must be renewed. Tap here to update: medicare-renewal.info/verify — deadline 4/25."',
    options: [
      { label: 'Tap the link and fill out the form to avoid losing coverage.' },
      { label: 'Delete the text. Medicare never asks for renewals by text or link.', correct: true },
      { label: 'Forward it to your family so they can do it for you.' },
    ],
    verdict: 'Scam. Medicare does not send text messages asking you to renew your card or verify info. The real Medicare only communicates by postal mail, and the card itself does not expire.',
    redFlag: 'Fake domain (medicare-renewal.info) + invented deadline + a card that does not actually expire.',
    verdictKind: 'scam',
  },
  {
    id: 2,
    category: 'robocalls',
    channel: 'Phone call',
    title: '"Hi Grandma, is that you?"',
    scenario:
      'A young-sounding caller says, "Hi Grandma... is that you?" and waits for you to say a name. Once you say "Is this Jake?" they say, "Yes! Grandma, something terrible happened — I need your help."',
    options: [
      { label: 'Say "Is this Jake?" to help them — it sounds like your grandchild.' },
      { label: 'Let them talk first. If they ask for money, hang up and call a family member on a known number.', correct: true },
      { label: 'Send money right away because they sound scared.' },
    ],
    verdict: 'Scam — the caller is fishing for a name so they can pretend to be your grandchild. Never volunteer a name to an unknown caller.',
    redFlag: 'Caller waited for YOU to supply the grandchild\'s name. That is the tell every time.',
    verdictKind: 'scam',
  },
  {
    id: 3,
    category: 'robocalls',
    channel: 'Phone call',
    title: 'Utility shutoff — gift card demand',
    scenario:
      'Someone claiming to be from the power company calls: "Your electricity will be shut off within 30 minutes unless you pay the overdue balance today with Google Play gift cards."',
    options: [
      { label: 'Drive to the store, buy the gift cards, and read the numbers to them.' },
      { label: 'Pay with a credit card over the phone so the power stays on.' },
      { label: 'Hang up. Call the utility using the number on your last paper bill.', correct: true },
      { label: 'Ask them to stay on the line while you go buy the cards.' },
    ],
    verdict: 'Scam. No real utility, government agency, or business accepts payment in gift cards — ever. The threat of a same-day shutoff is pressure to skip the verification step.',
    redFlag: 'Gift cards are untraceable. A request for them = scam, 100% of the time.',
    verdictKind: 'scam',
  },
  {
    id: 4,
    category: 'social',
    channel: 'Social media DM',
    title: 'The "Navy captain" abroad',
    scenario:
      'A handsome "Navy captain" deployed to Syria messages you on Facebook. After weeks of sweet talk, he cannot video chat due to "security clearance." He has finally asked for $2,300 to pay a "communications fee" so he can come home early.',
    options: [
      { label: 'Wire the money — he says he will pay back when he lands.' },
      { label: 'Send a smaller amount first as a test.' },
      { label: 'Stop contact, block, report to the platform, and report at ic3.gov.', correct: true },
    ],
    verdict: 'Scam. Romance scams use fake uniformed-officer photos and always invent reasons they cannot video chat. The U.S. military does not charge service members fees to come home, call you, or get leave.',
    redFlag: 'Refuses video chat + asks for money = textbook romance scam.',
    verdictKind: 'scam',
  },
  {
    id: 5,
    category: 'social',
    channel: 'Social DM / text',
    title: '"Hacked friend" needs Zelle',
    scenario:
      'Your friend Rita messages: "I got locked out of my bank. Can you Zelle $400 to my cousin? I was hacked — please don\'t call, my phone is shut off. I\'ll pay you back tomorrow."',
    options: [
      { label: 'Send the $400 — they were hacked and need help fast.' },
      { label: 'Ask them to Zelle you a dollar first to prove it is really them.' },
      { label: 'Call Rita on her known phone number (or a family member) before sending a dime.', correct: true },
    ],
    verdict: 'Scam. Rita\'s account was likely taken over. The "don\'t call me" line is to stop you from verifying. Zelle is instant and irreversible, which is why scammers love it.',
    redFlag: '"Don\'t call me" is the biggest red flag of all — real friends in real trouble welcome a voice call.',
    verdictKind: 'scam',
  },
  {
    id: 6,
    category: 'emails',
    channel: 'Web browser popup',
    title: '"Microsoft" tech support popup',
    scenario:
      'A full-screen popup shouts: "WARNING — 7 viruses detected on your PC. Call Microsoft support at 1-888-555-0199 NOW. Do NOT restart your computer."',
    options: [
      { label: 'Call the number. Microsoft must have flagged the problem.' },
      { label: 'Download the cleaner the popup recommends.' },
      { label: 'Close the browser (or hold Power 10 seconds to restart). Microsoft never puts a phone number in a popup.', correct: true },
    ],
    verdict: 'Scam. Microsoft, Apple, and Google do not scan your device through a web page, and they never include a phone number in a warning popup. Every popup like this is scareware.',
    redFlag: 'A website cannot scan your computer for viruses. If it claims to, it is lying.',
    verdictKind: 'scam',
  },
  {
    id: 7,
    category: 'robocalls',
    channel: 'Phone call',
    title: 'IRS back-taxes threat',
    scenario:
      'A stern caller says they are from the IRS. You owe $4,720 in back taxes. If you do not wire the money or buy iTunes cards today, a warrant will be issued for your arrest.',
    options: [
      { label: 'Pay immediately — the IRS does not bluff.' },
      { label: 'Ask for a case number and give your SSN so they can verify.' },
      { label: 'Hang up. The real IRS contacts taxpayers by postal mail first, and never demands same-day payment.', correct: true },
    ],
    verdict: 'Scam. The IRS contacts taxpayers by mail first. They do not call demanding immediate payment, do not take gift cards or wire transfers, and cannot issue a warrant over the phone.',
    redFlag: 'Threat of arrest + demand for gift cards or wire = IRS impostor scam.',
    verdictKind: 'scam',
  },
  {
    id: 8,
    category: 'emails',
    channel: 'Email',
    title: 'Amazon order you did not place',
    scenario:
      'Email from "amaz0n-orders@secure-shipping.net": "Your order for Apple AirPods Pro ($279.00) has shipped. If this was not you, click CANCEL ORDER to dispute."',
    options: [
      { label: 'Click "Cancel Order" before the charge goes through.' },
      { label: 'Reply to the email asking what happened.' },
      { label: 'Open the Amazon app yourself. If there is no such order, the email is fake.', correct: true },
      { label: 'Call the number in the email to dispute the charge.' },
    ],
    verdict: 'Scam. Real Amazon emails come only from @amazon.com. The "cancel" link leads to a fake login page that steals your password. The wrong order is bait to make you panic-click.',
    redFlag: 'Zero in "amaz0n" + an @amazon.com address that is not actually @amazon.com.',
    verdictKind: 'scam',
  },
  {
    id: 9,
    category: 'emails',
    channel: 'Email / letter',
    title: '"You won!" — pay a processing fee',
    scenario:
      'You get a letter claiming you won $2.5 million in a Publishers Clearing House sweepstakes. To claim the prize you need to send a $499 "processing and insurance fee" via money order.',
    options: [
      { label: 'Send the $499 — $2.5M for $499 is a fine trade.' },
      { label: 'Real prizes never require a fee to claim. Throw it out.', correct: true },
      { label: 'Send a smaller amount as a test before paying the full fee.' },
    ],
    verdict: 'Scam. It is illegal for a real sweepstakes to charge you to claim a prize. Publishers Clearing House will never ask you to pay anything. Report at ftc.gov/complaint.',
    redFlag: 'Any "prize" that requires a fee to claim is a scam — no exceptions.',
    verdictKind: 'scam',
  },
  {
    id: 10,
    category: 'texts',
    channel: 'Text message',
    title: 'Package delivery with odd tracking URL',
    scenario:
      'Text: "FedEx: Your shipment #FX-3829 is pending. Confirm your address to complete delivery: fedex-delivery.track-now.co/u/2918"',
    options: [
      { label: 'Tap the link and enter your address — the package is waiting.' },
      { label: 'Reply STOP so they stop texting.' },
      { label: 'Delete the text. Open the FedEx app or go to fedex.com yourself to check for any real shipment.', correct: true },
    ],
    verdict: 'Scam. Real FedEx tracking only comes from fedex.com, UPS from ups.com, USPS from usps.com. "track-now.co" is not FedEx. Replying STOP confirms to the scammer that a real person answered.',
    redFlag: 'The URL is not the carrier\'s real domain — always the first thing to check.',
    verdictKind: 'scam',
  },
  {
    id: 11,
    category: 'texts',
    channel: 'Text message',
    title: 'Bank "secure your account" text',
    scenario:
      'Text from a 10-digit number: "Chase Alert: unusual login from Dallas, TX. Secure your account here: chase-security.online/auth"',
    options: [
      { label: 'Tap the link and log in to lock it down.' },
      { label: 'Call the phone number the text came from.' },
      { label: 'Open your bank\'s app or call the number on the back of your card.', correct: true },
      { label: 'Reply with your PIN so they can verify you.' },
    ],
    verdict: 'Scam. Real bank alerts route you to the bank app — never to a third-party site. The domain (chase-security.online) is not a Chase domain. Banks use short-code numbers (5-6 digits), not 10-digit numbers, for fraud alerts.',
    redFlag: 'Any link in a bank text is suspect. Always navigate there yourself.',
    verdictKind: 'scam',
  },
  {
    id: 12,
    category: 'robocalls',
    channel: 'Phone call',
    title: 'Deepfake grandchild — bail money',
    scenario:
      'Your phone rings. A crying voice that sounds exactly like your grandchild Emma says, "Grandma, I got in an accident. I\'m in jail. Please don\'t tell Mom. I need $3,000 for bail — wire it to this attorney."',
    options: [
      { label: 'Wire the money — the voice is definitely Emma.' },
      { label: 'Give your credit card to the "attorney" over the phone.' },
      { label: 'Hang up. Call Emma\'s real number and another family member to confirm.', correct: true },
    ],
    verdict: 'Scam. AI voice cloning can now copy a grandchild\'s voice from 3 seconds of social media audio. Real attorneys do not take bail money by wire transfer. "Don\'t tell Mom" is the isolation tactic.',
    redFlag: 'AI voice cloning is real. Always hang up and verify by calling a known number.',
    verdictKind: 'scam',
  },
  {
    id: 13,
    category: 'texts',
    channel: 'Text message',
    title: 'Text job offer — $5k per week',
    scenario:
      'Text from an unknown number: "Hi! I\'m Sandra from GrowthHR. We reviewed your profile — we have a remote role paying $5,000/week, no experience needed. Reply YES for details."',
    options: [
      { label: 'Reply YES and send a photo of your driver\'s license for onboarding.' },
      { label: 'Reply asking for more details on the role.' },
      { label: 'Delete. Real employers do not recruit by cold text or promise $5k/week without experience.', correct: true },
    ],
    verdict: 'Scam. Real recruiters post on LinkedIn, Indeed, or company sites — not by cold text. $5k/week with no experience is fantasy bait. These lead to money-mule schemes, fake checks, or identity theft.',
    redFlag: '"No experience, $5k/week, reply from a text" = a fraud recruiter, every time.',
    verdictKind: 'scam',
  },
  {
    id: 14,
    category: 'emails',
    channel: 'Web browser popup',
    title: 'Antivirus warning on a sketchy site',
    scenario:
      'You clicked a video link and a popup fills the screen: "McAfee: Your subscription expired. 4 viruses found. Click SCAN NOW to protect your PC."',
    options: [
      { label: 'Click SCAN NOW — McAfee wants to help.' },
      { label: 'Call the phone number shown in the popup.' },
      { label: 'Close the tab. Run the real antivirus already on your PC. If unsure, restart the computer.', correct: true },
    ],
    verdict: 'Scam. Antivirus software does not advertise itself through full-screen webpage popups. The popup is on a random site, not from McAfee. Clicking SCAN NOW downloads actual malware or leads to a paid "removal" scam.',
    redFlag: 'A popup on a web page is never your antivirus talking — your real antivirus lives in your system tray or menu bar.',
    verdictKind: 'scam',
  },
  {
    id: 15,
    category: 'texts',
    channel: 'Text message',
    title: 'USPS "package held" text',
    scenario:
      'Text: "USPS: Your package is held at the facility due to an unclear address. Please confirm at: usps-redelivery.help/track/A9219"',
    options: [
      { label: 'Tap the link and pay the $1.99 redelivery fee.' },
      { label: 'Reply with your address so they can deliver.' },
      { label: 'Check USPS directly at usps.com or in the Informed Delivery app.', correct: true },
      { label: 'Forward the text to 7726 (SPAM) to report, then delete.', note: 'Also valid — USPS encourages reporting to 7726.' },
    ],
    verdict: 'Scam. USPS does not text about redelivery unless you signed up for Informed Delivery. The "fee" is a hook to capture credit card info. The correct move is to check usps.com yourself.',
    redFlag: 'Any unexpected carrier text with a link that is not the real carrier domain (usps.com, ups.com, fedex.com) is a smishing scam.',
    verdictKind: 'scam',
  },
  {
    id: 16,
    category: 'in-person',
    channel: 'QR code in the wild',
    title: 'QR code sticker on a parking meter',
    scenario:
      'You park downtown. The meter has a sticker saying "Scan to pay" with a QR code. The sticker looks slightly crooked and the code leads to "parkfast-pay.com."',
    options: [
      { label: 'Scan and pay — most cities use QR codes for parking now.' },
      { label: 'Scan and enter card info quickly to avoid a ticket.' },
      { label: 'Look for the city\'s official app name, or pay at the meter with cash or card.', correct: true },
    ],
    verdict: 'Scam. "QR hijacking" is a growing scam — crooks put their own sticker QR over the real one. The fake site steals card info or charges a bogus "parking fee" while the meter runs out.',
    redFlag: 'A QR code sticker that looks added or crooked. Always prefer the city\'s named app or the meter itself.',
    verdictKind: 'scam',
  },
  {
    id: 17,
    category: 'social',
    channel: 'Social media post',
    title: '"Elon" gives away crypto',
    scenario:
      'On X (Twitter), a verified-looking account tweets: "Giving back to the community. Send 0.1 ETH to this address and I\'ll send 0.5 ETH back within 30 minutes. — E.M."',
    options: [
      { label: 'Send 0.1 ETH — the verified badge means it is real.' },
      { label: 'Send a tiny amount as a test before sending more.' },
      { label: 'Report the post. No real company or celebrity runs "send me crypto, I send double" events.', correct: true },
    ],
    verdict: 'Scam. Verified badges can now be bought by anyone on some platforms, and AI-generated "giveaways" from fake Elon, Vitalik, and CEO accounts are a daily scam. Any "send crypto, get more back" offer is fraud.',
    redFlag: 'There is no such thing as a "send and receive more" crypto giveaway. None. Ever.',
    verdictKind: 'scam',
  },
  {
    id: 18,
    category: 'robocalls',
    channel: 'Phone call',
    title: 'Social Security number "suspended"',
    scenario:
      'Robocall: "This is the Social Security Administration. Your Social Security number has been suspended due to suspicious activity. Press 1 to speak with an officer."',
    options: [
      { label: 'Press 1 and speak to the officer to clear it up.' },
      { label: 'Give them the last 4 of your SSN to verify your identity.' },
      { label: 'Hang up. SSA does not "suspend" numbers — that is not a real thing.', correct: true },
    ],
    verdict: 'Scam. Social Security numbers cannot be suspended. The SSA does not threaten legal action by robocall. Real SSA contact comes by mail first. Report at oig.ssa.gov.',
    redFlag: '"Your SSN has been suspended" is a fake concept. SSNs do not get suspended.',
    verdictKind: 'scam',
  },
  {
    id: 19,
    category: 'robocalls',
    channel: 'Phone call',
    title: 'Reverse mortgage cold call',
    scenario:
      'A caller says your home qualifies for a "no-cost reverse mortgage that pays you $80,000 up front." They want to send paperwork today if you give them your address and date of birth.',
    options: [
      { label: 'Give the address and DOB — $80k up front sounds great.' },
      { label: 'Sign up over the phone to lock in the rate.' },
      { label: 'Ask for everything in writing, compare with a HUD-approved counselor, and never sign from a cold call.', correct: true },
    ],
    verdict: 'High-risk / likely scam. Legitimate reverse mortgages exist, but none are sold by cold call. HUD requires counseling before any reverse mortgage. Cold-call offers are often predatory lenders or outright fraud.',
    redFlag: 'HUD requires counseling. If they skip that step, they are not a legitimate lender.',
    verdictKind: 'scam',
  },
  {
    id: 20,
    category: 'social',
    channel: 'Facebook quiz',
    title: '"What\'s your elf name?"',
    scenario:
      'A fun Facebook post says: "Find your elf name! Use your mother\'s maiden name + the street you grew up on + your first pet." Everyone in the comments is sharing theirs.',
    options: [
      { label: 'Comment your elf name — it is harmless fun.' },
      { label: 'Share your elf name only in a private message to family.' },
      { label: 'Skip it. Those prompts match the security questions used to reset bank and email accounts.', correct: true },
    ],
    verdict: 'Scam. These quizzes are designed to harvest answers that match security questions (mother\'s maiden name, first pet, first street — the big three). Scammers scrape the comments to crack accounts later.',
    redFlag: 'Mother\'s maiden name, first pet, childhood street — those are security-question answers, not game prompts.',
    verdictKind: 'scam',
  },
];

/* ───────────────────────── Badges ───────────────────────── */

interface BadgeInfo {
  name: string;
  min: number;
  max: number;
  tagline: string;
  color: string; // tailwind text color
  ring: string; // tailwind ring/bg
}

const BADGES: BadgeInfo[] = [
  { name: 'Black Belt', min: 18, max: 20, tagline: "You're a scam-sniffing pro.", color: 'text-emerald-700', ring: 'bg-emerald-100 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-900/40' },
  { name: 'Expert',      min: 14, max: 17, tagline: 'Sharp eye. Keep the streak going.', color: 'text-blue-700',    ring: 'bg-blue-100 border-blue-300 dark:bg-blue-950/40 dark:border-blue-900/40' },
  { name: 'Intermediate',min: 10, max: 13, tagline: 'A strong foundation with room to grow.', color: 'text-amber-700', ring: 'bg-amber-100 border-amber-300 dark:bg-amber-950/40 dark:border-amber-900/40' },
  { name: 'Learning',    min: 6,  max: 9,  tagline: "You're building the skill — study the gaps.", color: 'text-orange-700', ring: 'bg-orange-100 border-orange-300 dark:bg-orange-950/40 dark:border-orange-900/40' },
  { name: 'Keep Practicing', min: 0, max: 5, tagline: 'Scams trick everyone at first. Review and try again — you will improve fast.', color: 'text-rose-700',   ring: 'bg-rose-100 border-rose-300 dark:bg-rose-950/40 dark:border-rose-900/40' },
];

function getBadge(score: number): BadgeInfo {
  return BADGES.find((b) => score >= b.min && score <= b.max) ?? BADGES[BADGES.length - 1];
}

/* ───────────────── Attempt history (localStorage) ───────────────── */

const STORAGE_KEY = 'teksure:scam-iq-attempts';

function loadAttempts(): Attempt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveAttempt(next: Attempt): Attempt[] {
  if (typeof window === 'undefined') return [];
  const existing = loadAttempts();
  const updated = [...existing, next].slice(-20); // keep last 20
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // storage full or disabled — graceful no-op
  }
  return updated;
}

/* ───────────────────────── Component ───────────────────────── */

type Phase = 'intro' | 'quiz' | 'results';

export default function ScamIqQuiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // qId → picked option index
  const [picked, setPicked] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [priorBest, setPriorBest] = useState<number | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  // Load attempt history on mount
  useEffect(() => {
    const a = loadAttempts();
    setAttempts(a);
    setPriorBest(a.length > 0 ? Math.max(...a.map((x) => x.score)) : null);
  }, []);

  const currentQ = QUESTIONS[currentIdx];
  const total = QUESTIONS.length;
  const progressPct = (currentIdx / total) * 100;

  const correctCount = useMemo(() => {
    let n = 0;
    for (const q of QUESTIONS) {
      const pickedIdx = answers[q.id];
      if (pickedIdx === undefined) continue;
      if (q.options[pickedIdx]?.correct) n++;
    }
    return n;
  }, [answers]);

  const badge = useMemo(() => getBadge(correctCount), [correctCount]);

  /* Category breakdown for results */
  const breakdown = useMemo(() => {
    const cats = (Object.keys(CATEGORIES) as Category[]).map((c) => {
      const qs = QUESTIONS.filter((q) => q.category === c);
      const correct = qs.filter((q) => q.options[answers[q.id]]?.correct).length;
      return {
        category: c,
        correct,
        total: qs.length,
        pct: qs.length === 0 ? 0 : Math.round((correct / qs.length) * 100),
        missedQs: qs.filter((q) => answers[q.id] !== undefined && !q.options[answers[q.id]]?.correct),
      };
    });
    return cats;
  }, [answers]);

  const topGaps = useMemo(
    () =>
      [...breakdown]
        .filter((b) => b.total > 0)
        .sort((a, b) => a.pct - b.pct || (b.total - b.correct) - (a.total - a.correct))
        .slice(0, 3),
    [breakdown],
  );

  /* ─── Handlers ─── */

  const startQuiz = () => {
    setPhase('quiz');
    setCurrentIdx(0);
    setAnswers({});
    setPicked(null);
  };

  const submitAnswer = () => {
    if (picked === null) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: picked }));
  };

  const goNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setPicked(null);
    } else {
      // finish — record attempt
      const finalCorrect = (() => {
        let n = 0;
        for (const q of QUESTIONS) {
          if (q.options[answers[q.id]]?.correct) n++;
        }
        return n;
      })();
      const b = getBadge(finalCorrect);
      const attempt: Attempt = {
        date: new Date().toISOString(),
        score: finalCorrect,
        badge: b.name,
      };
      const updated = saveAttempt(attempt);
      setAttempts(updated);
      setPhase('results');
    }
  };

  const restart = () => {
    setPhase('quiz');
    setCurrentIdx(0);
    setAnswers({});
    setPicked(null);
    setPriorBest(attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : null);
  };

  const shareScore = async () => {
    const shareText = `I scored ${correctCount}/${total} on the TekSure Scam IQ Quiz — badge: ${badge.name}. Test your defense skills: `;
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/quizzes/scam-iq` : '/quizzes/scam-iq';
    const payload = `${shareText}${shareUrl}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My Scam IQ score', text: shareText, url: shareUrl });
        return;
      }
      await navigator.clipboard.writeText(payload);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      // user cancelled or permission denied — no-op
    }
  };

  const alreadyAnswered = answers[currentQ?.id ?? -1] !== undefined;
  const answeredIdx = answers[currentQ?.id ?? -1];
  const wasCorrect = alreadyAnswered && currentQ?.options[answeredIdx]?.correct === true;

  /* ─── Shared chrome ─── */

  const SEO = (
    <SEOHead
      title="Scam IQ Quiz — Test Your Defense Skills | TekSure"
      description="20 realistic scenarios across robocalls, texts, emails, social media, and in-person QR codes. Can you spot all the scams? Find out where to level up."
      path="/quizzes/scam-iq"
    />
  );

  /* ────────────── RENDER: Intro ────────────── */

  if (phase === 'intro') {
    return (
      <>
        {SEO}
        <Navbar />
        <main className="min-h-screen bg-background">
          {/* Hero — navy → red gradient */}
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-red-700 text-white">
            <div className="container py-14 md:py-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                    <ShieldCheck className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <Badge className="bg-white/20 text-white hover:bg-white/25 border-white/30">Safety Quiz</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Scam IQ — Test Your Defense Skills
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  20 realistic scenarios. Can you spot all the scams? Find out where to level up.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    onClick={startQuiz}
                    className="min-h-14 text-base bg-white text-blue-950 hover:bg-white/90"
                  >
                    Start the 20-question quiz
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                  <BookmarkButton
                    type="tool"
                    slug="scam-iq"
                    title="Scam IQ Quiz"
                    url="/quizzes/scam-iq"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
                  />
                </div>

                {priorBest !== null && (
                  <p className="mt-5 text-sm text-white/85">
                    Your best so far: <strong>{priorBest}/{total}</strong> — can you beat it?
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Why this matters */}
          <section className="container py-10 md:py-12">
            <Alert className="max-w-4xl mx-auto border-red-200 bg-red-50/60 dark:border-red-900/40 dark:bg-red-950/20">
              <ShieldAlert className="h-5 w-5 text-red-600" aria-hidden="true" />
              <AlertTitle className="text-base font-semibold">Why this matters</AlertTitle>
              <AlertDescription className="text-base leading-relaxed mt-1">
                The FTC reports seniors lose about <strong>$3.4 billion a year</strong> to scams. Studies show training
                reduces the fall-for-it rate by up to <strong>43%</strong>. Twenty minutes of practice here can make a
                real difference the next time a scammer tries you.{' '}
                <Link to="/guides?category=safety" className="underline font-medium text-red-700 dark:text-red-300">
                  Browse the safety guide library →
                </Link>
              </AlertDescription>
            </Alert>

            {/* What's inside */}
            <div className="max-w-4xl mx-auto mt-10 grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                    How it works
                  </h2>
                  <ul className="space-y-2 text-base leading-relaxed list-disc pl-5">
                    <li>20 real scenarios — phone, text, email, social, QR codes.</li>
                    <li>Pick the right action from 3–4 options.</li>
                    <li>See the answer and the red flag after each question.</li>
                    <li>Finish to earn a badge and a gap-by-category report.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" aria-hidden="true" />
                    Five badges to earn
                  </h2>
                  <ul className="space-y-2 text-base leading-relaxed">
                    {BADGES.map((b) => (
                      <li key={b.name} className="flex items-start gap-2">
                        <Badge variant="outline" className={`${b.color} border-current min-w-fit`}>{b.name}</Badge>
                        <span className="text-muted-foreground text-sm">
                          {b.min}–{b.max} correct
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mt-8 text-center">
              <Button size="lg" onClick={startQuiz} className="min-h-14 text-base">
                Begin — 20 questions, about 8 minutes
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ────────────── RENDER: Quiz ────────────── */

  if (phase === 'quiz') {
    const CatIcon = CATEGORIES[currentQ.category].icon;
    return (
      <>
        {SEO}
        <Navbar />
        <main className="min-h-screen bg-background">
          <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-red-700 text-white">
            <div className="container py-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  <span className="font-semibold">Scam IQ Quiz</span>
                </div>
                <span className="text-sm text-white/85">
                  Question {currentIdx + 1} of {total}
                </span>
              </div>
              <Progress
                value={progressPct}
                className="h-3 bg-white/20 [&>div]:bg-white"
                aria-label={`Progress: ${Math.round(progressPct)} percent`}
              />
            </div>
          </section>

          <section className="container py-8 md:py-10">
            <div className="max-w-3xl mx-auto">
              {/* Question card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <Badge variant="outline" className="text-xs">
                      <CatIcon className={`h-3.5 w-3.5 mr-1 ${CATEGORIES[currentQ.category].color}`} aria-hidden="true" />
                      {CATEGORIES[currentQ.category].label}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">{currentQ.channel}</Badge>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{currentQ.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{currentQ.scenario}</p>
                </CardContent>
              </Card>

              {/* Options */}
              {!alreadyAnswered ? (
                <>
                  <h3 className="text-lg font-semibold mb-3">What would you do?</h3>
                  <div className="grid gap-3" role="radiogroup" aria-label="Answer options">
                    {currentQ.options.map((opt, i) => {
                      const isPicked = picked === i;
                      return (
                        <button
                          key={i}
                          type="button"
                          role="radio"
                          aria-checked={isPicked}
                          onClick={() => setPicked(i)}
                          className={`min-h-14 w-full text-left rounded-xl border-2 px-5 py-4 transition-all text-base leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                            isPicked
                              ? 'border-primary bg-primary/5 shadow-sm'
                              : 'border-border bg-background hover:border-primary/50 hover:bg-muted/40'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 h-6 w-6 shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                                isPicked ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground/40 text-muted-foreground'
                              }`}
                              aria-hidden="true"
                            >
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1">{opt.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button
                      size="lg"
                      onClick={submitAnswer}
                      disabled={picked === null}
                      className="min-h-14 text-base"
                    >
                      Submit answer
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Feedback card */}
                  <Alert
                    className={`mb-4 ${
                      wasCorrect
                        ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/30'
                        : 'border-red-300 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30'
                    }`}
                  >
                    {wasCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
                    )}
                    <AlertTitle className="text-lg font-semibold">
                      {wasCorrect ? 'Correct — good eye.' : 'Not the safest choice.'}
                    </AlertTitle>
                    <AlertDescription className="text-base leading-relaxed mt-1">
                      {wasCorrect
                        ? 'You picked the safe move.'
                        : `The safe move was: "${currentQ.options.find((o) => o.correct)?.label}"`}
                    </AlertDescription>
                  </Alert>

                  {/* Why it's a scam/real */}
                  <Card className="mb-4 border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Flag className="h-5 w-5 text-red-600" aria-hidden="true" />
                        <h4 className="font-semibold text-base">
                          {currentQ.verdictKind === 'scam' ? "Why it's a scam" : "Why it's real"}
                        </h4>
                      </div>
                      <p className="text-base leading-relaxed mb-3">{currentQ.verdict}</p>
                      <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 p-3">
                        <p className="text-sm font-semibold text-red-900 dark:text-red-200 mb-1">Red flag</p>
                        <p className="text-sm text-red-900/90 dark:text-red-100/90">{currentQ.redFlag}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {currentIdx + 1} of {total} answered
                    </span>
                    <Button size="lg" onClick={goNext} className="min-h-14 text-base">
                      {currentIdx < total - 1 ? (
                        <>
                          Next question
                          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          See my score
                          <Trophy className="ml-2 h-5 w-5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ────────────── RENDER: Results ────────────── */

  // priorBest at start of THIS attempt — if there are 2+ attempts and the latest is this one
  const improvedBanner = (() => {
    if (attempts.length < 2) return null;
    const thisAttempt = attempts[attempts.length - 1];
    const prev = attempts[attempts.length - 2];
    if (thisAttempt.score > prev.score) {
      return `You improved from ${prev.score} to ${thisAttempt.score} — nice progress.`;
    }
    if (thisAttempt.score === prev.score) {
      return `Matched your last score of ${prev.score}/${total}.`;
    }
    return null;
  })();

  return (
    <>
      {SEO}
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Results hero */}
        <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-red-700 text-white">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/15 backdrop-blur mb-5">
                <Trophy className="h-9 w-9" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Your Scam IQ</h1>
              <div className="text-7xl md:text-8xl font-bold mb-2">
                {correctCount}<span className="text-4xl md:text-5xl text-white/70">/{total}</span>
              </div>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">{badge.tagline}</p>

              {improvedBanner && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {improvedBanner}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge card */}
            <Card className={`border-2 ${badge.ring}`}>
              <CardContent className="p-6 flex items-center gap-4 flex-wrap">
                <div className="h-16 w-16 rounded-2xl bg-white/80 dark:bg-white/10 border border-current/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className={`h-9 w-9 ${badge.color}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-[14rem]">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">Badge earned</p>
                  <h2 className={`text-2xl md:text-3xl font-bold ${badge.color}`}>{badge.name}</h2>
                  <p className="text-base text-muted-foreground mt-1">{badge.tagline}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button size="lg" onClick={shareScore} className="min-h-14 text-base">
                    {shareCopied ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 mr-2" aria-hidden="true" />
                        Link copied
                      </>
                    ) : (
                      <>
                        <Share2 className="h-5 w-5 mr-2" aria-hidden="true" />
                        Share your score
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="lg" onClick={restart} className="min-h-14 text-base">
                    <RotateCcw className="h-5 w-5 mr-2" aria-hidden="true" />
                    Take again
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Per-category breakdown */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How you did by channel</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {breakdown.map((row) => {
                  const meta = CATEGORIES[row.category];
                  const Icon = meta.icon;
                  return (
                    <Card key={row.category}>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`h-5 w-5 ${meta.color}`} aria-hidden="true" />
                          <h3 className="font-semibold text-base">{meta.label}</h3>
                          <span className="ml-auto text-sm font-semibold">
                            {row.correct}/{row.total}
                          </span>
                        </div>
                        <Progress value={row.pct} className="h-2" aria-label={`${meta.label}: ${row.pct} percent`} />
                        <p className="text-sm text-muted-foreground mt-2">{row.pct}% correct</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Top 3 gaps */}
            {topGaps.some((g) => g.correct < g.total) && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Your top 3 gaps to study</h2>
                <div className="grid gap-3">
                  {topGaps.map((g, i) => {
                    const meta = CATEGORIES[g.category];
                    const Icon = meta.icon;
                    return (
                      <Card key={g.category} className="border-l-4 border-l-amber-500">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center shrink-0">
                              <Icon className="h-5 w-5 text-amber-700" aria-hidden="true" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <Badge variant="secondary">#{i + 1}</Badge>
                                <h3 className="font-semibold">{meta.label}</h3>
                                <span className="text-sm text-muted-foreground">{g.correct}/{g.total} correct</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {g.missedQs.length === 0
                                  ? 'Clean sweep on this channel — strong work.'
                                  : `Review the ${g.missedQs.length} missed scenario${g.missedQs.length === 1 ? '' : 's'} below.`}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Per-question review */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Review every question</h2>
              <Accordion type="single" collapsible className="w-full border rounded-xl">
                {QUESTIONS.map((q, i) => {
                  const picked = answers[q.id];
                  const correct = q.options[picked]?.correct === true;
                  const correctOpt = q.options.find((o) => o.correct);
                  const catMeta = CATEGORIES[q.category];
                  return (
                    <AccordionItem key={q.id} value={`q-${q.id}`} className="px-4">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3 flex-1 pr-4">
                          {correct ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 shrink-0" aria-hidden="true" />
                          )}
                          <span className="text-sm text-muted-foreground">#{i + 1}</span>
                          <span className="font-medium">{q.title}</span>
                          <Badge variant="outline" className="ml-auto text-xs hidden sm:inline-flex">{catMeta.label}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pb-2">
                          <p className="text-sm text-muted-foreground leading-relaxed">{q.scenario}</p>
                          <div className="text-sm space-y-1">
                            <p>
                              <span className="font-semibold">You picked:</span>{' '}
                              {picked !== undefined ? q.options[picked].label : <em>(not answered)</em>}
                            </p>
                            <p>
                              <span className="font-semibold">Safe move:</span>{' '}
                              {correctOpt?.label}
                            </p>
                          </div>
                          <div className="rounded-lg bg-muted/50 p-3 text-sm leading-relaxed">
                            <p className="font-semibold mb-1">
                              {q.verdictKind === 'scam' ? "Why it's a scam" : "Why it's real"}
                            </p>
                            <p>{q.verdict}</p>
                          </div>
                          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 p-3 text-sm">
                            <p className="font-semibold text-red-900 dark:text-red-200 mb-1">Red flag</p>
                            <p className="text-red-900/90 dark:text-red-100/90">{q.redFlag}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* Study the guide */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Study the guide</h2>
              <div className="grid gap-3 md:grid-cols-3">
                <Link
                  to="/tools/is-this-real"
                  className="rounded-xl border p-5 hover:border-primary hover:bg-muted/40 transition-colors"
                >
                  <BookOpen className="h-6 w-6 text-blue-600 mb-2" aria-hidden="true" />
                  <h3 className="font-semibold mb-1">Is This Real?</h3>
                  <p className="text-sm text-muted-foreground">Paste a message and get an instant read on whether it is a scam.</p>
                </Link>
                <Link
                  to="/tools/scam-simulator"
                  className="rounded-xl border p-5 hover:border-primary hover:bg-muted/40 transition-colors"
                >
                  <ShieldAlert className="h-6 w-6 text-red-600 mb-2" aria-hidden="true" />
                  <h3 className="font-semibold mb-1">Scam Simulator</h3>
                  <p className="text-sm text-muted-foreground">Practice with realistic scam messages in a safe sandbox.</p>
                </Link>
                <Link
                  to="/tools/fake-news-checker"
                  className="rounded-xl border p-5 hover:border-primary hover:bg-muted/40 transition-colors"
                >
                  <Flag className="h-6 w-6 text-fuchsia-600 mb-2" aria-hidden="true" />
                  <h3 className="font-semibold mb-1">Fake News Checker</h3>
                  <p className="text-sm text-muted-foreground">Sharpen your eye for viral misinformation and deepfakes.</p>
                </Link>
              </div>
            </div>

            {/* Copy-link fallback */}
            <Card>
              <CardContent className="p-5 flex items-center gap-3 flex-wrap">
                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Copy className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-[12rem]">
                  <p className="font-semibold">Share this quiz with a friend</p>
                  <p className="text-sm text-muted-foreground">
                    A 20-minute practice round can save a friend from a $3,000 mistake.
                  </p>
                </div>
                <Button variant="outline" onClick={shareScore} className="min-h-14">
                  <Share2 className="h-5 w-5 mr-2" aria-hidden="true" />
                  {shareCopied ? 'Link copied' : 'Copy link'}
                </Button>
              </CardContent>
            </Card>

            {/* Attempts history */}
            {attempts.length > 1 && (
              <div>
                <h2 className="text-xl font-bold mb-3">Your attempt history</h2>
                <Card>
                  <CardContent className="p-4">
                    <ul className="divide-y">
                      {attempts.slice().reverse().map((a, i) => (
                        <li key={`${a.date}-${i}`} className="py-2 flex items-center gap-3 text-sm">
                          <span className="text-muted-foreground w-40 shrink-0">
                            {new Date(a.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                          </span>
                          <Badge variant="outline">{a.badge}</Badge>
                          <span className="ml-auto font-semibold">{a.score}/{total}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
