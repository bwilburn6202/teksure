import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Inbox,
  Mail,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Eye,
  Flag,
  ArrowRight,
  RotateCcw,
  HelpCircle,
  Lightbulb,
  Sparkles,
  Send,
  PhoneCall,
  Link2,
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

/* ─────────────────────────────── Types ─────────────────────────────── */

type Verdict = 'safe' | 'phishing' | 'gray';
type UserChoice = 'safe' | 'phishing' | 'unsure';
type Difficulty = 'easy' | 'medium' | 'hard';

interface EmailLink {
  text: string; // visible label
  shownHref: string; // what it looks like
  realHref: string; // actual destination
}

interface EmailItem {
  id: string;
  difficulty: Difficulty;
  fromName: string;
  fromAddress: string;
  subject: string;
  preview: string;
  body: string; // plain text with {{link:0}} placeholders
  links?: EmailLink[];
  attachments?: string[];
  dateLabel: string;
  verdict: Verdict;
  redFlags: string[]; // explanation bullet points
  typicalLoss?: number; // dollars lost on average if fell for it
  typicalSave?: number; // dollars saved by ignoring junk
  teachable: string; // one-paragraph plain-English why
}

/* ─────────────────────── 20 emails (static fixtures) ─────────────────────── */

const EMAILS: EmailItem[] = [
  /* ── EASY ── */
  {
    id: 'e-amazon-order',
    difficulty: 'easy',
    fromName: 'Amazon.com',
    fromAddress: 'auto-confirm@amazon.com',
    subject: 'Your order of "AA Batteries (24 Pack)" has shipped',
    preview: 'Arriving Friday, April 24. Track your package anytime from Your Orders.',
    body:
      'Hello Bailey,\n\nThanks for shopping with us. Your package is on the way.\n\nOrder # 112-8824661-0213827\nAA Batteries (24 Pack) — $14.99\n\nArriving: Friday, April 24\nShip to: Bailey W., Greensboro, NC\n\nYou can check the status anytime at {{link:0}}.\n\nWe hope you enjoy your purchase.\n— Amazon.com Customer Service',
    links: [
      {
        text: 'Your Orders',
        shownHref: 'amazon.com/your-orders',
        realHref: 'https://www.amazon.com/your-orders',
      },
    ],
    dateLabel: 'Today, 9:14 AM',
    verdict: 'safe',
    redFlags: [
      'From address matches the real amazon.com domain.',
      'No urgent pressure to click.',
      'Link previews go to amazon.com (not a look-alike).',
      'You placed this order — it matches something you did.',
    ],
    teachable:
      "This is a real order confirmation. The sender is on amazon.com, there is no scary deadline, and the link goes where it says it goes. Shipping confirmations are a common place scammers imitate, so the test is always: did you actually place this order?",
  },
  {
    id: 'e-apple-id-alert',
    difficulty: 'easy',
    fromName: 'Apple Support',
    fromAddress: 'security-alert@apple-id-verify.co',
    subject: 'URGENT: Your Apple ID was used to sign in on a new device',
    preview: 'Your account will be locked in 24 hours unless you verify now.',
    body:
      'Dear Customer,\n\nWe detected a sign-in to your Apple ID from an unrecognized device in Lagos, Nigeria on April 23, 2026.\n\nIf this was not you, your account will be LOCKED in 24 hours for your protection.\n\nPlease verify your identity immediately here: {{link:0}}\n\nFailure to verify will result in permanent account closure.\n\nApple Support Team',
    links: [
      {
        text: 'Verify my Apple ID now',
        shownHref: 'apple.com/verify',
        realHref: 'http://apple-id-verify.co/login?token=xyz',
      },
    ],
    dateLabel: 'Today, 8:02 AM',
    verdict: 'phishing',
    redFlags: [
      'From address is "apple-id-verify.co" — not apple.com.',
      'Generic greeting ("Dear Customer") instead of your name.',
      '24-hour deadline manufactures panic.',
      'Link text says apple.com but hover shows a different domain.',
      'Real Apple security alerts appear in Settings, not an email link.',
    ],
    typicalLoss: 850,
    teachable:
      "Apple never threatens to lock your account in 24 hours by email. Anytime an email creates a countdown, pause. Open the Apple ID settings on your actual device to check — never use the link in the email.",
  },
  {
    id: 'e-usps',
    difficulty: 'easy',
    fromName: 'USPS Delivery',
    fromAddress: 'info@usps-holdpackage.tracking-usa.net',
    subject: '[Action Required] Package held — address needs update',
    preview: 'Pay a $1.99 redelivery fee to release your package.',
    body:
      'USPS NOTICE\n\nWe attempted to deliver your package today but the address was incomplete.\n\nTo release it, please pay the $1.99 redelivery fee at: {{link:0}}\n\nPackages not claimed within 48 hours will be returned to sender.\n\nThank you,\nUnited States Postal Service',
    links: [
      {
        text: 'Pay $1.99 redelivery fee',
        shownHref: 'usps.com/redelivery',
        realHref: 'http://usps-holdpackage.tracking-usa.net/pay',
      },
    ],
    dateLabel: 'Today, 7:41 AM',
    verdict: 'phishing',
    redFlags: [
      'USPS never charges a "redelivery fee" by email.',
      'Sender domain is "tracking-usa.net" — not usps.com.',
      'A tiny $1.99 ask lowers your guard so they can capture your card.',
      '48-hour pressure tactic.',
    ],
    typicalLoss: 420,
    teachable:
      "USPS, UPS, and FedEx do not charge redelivery fees by email or text. The $1.99 is a trick to collect your card details. If you are expecting a package, go directly to usps.com and paste your tracking number there.",
  },
  {
    id: 'e-medicare-eob',
    difficulty: 'easy',
    fromName: 'Medicare',
    fromAddress: 'noreply@medicare.gov',
    subject: 'Your Medicare Summary Notice is ready',
    preview: 'View claims processed between March 1 and March 31.',
    body:
      'Hello,\n\nYour Medicare Summary Notice (MSN) for March is now available on your MyMedicare.gov account.\n\nThis is not a bill. It shows the services billed to Medicare on your behalf.\n\nTo view it, sign in at {{link:0}} with your MyMedicare username and password.\n\nIf you have questions, call 1-800-MEDICARE (1-800-633-4227).\n\n— Medicare',
    links: [
      {
        text: 'MyMedicare.gov',
        shownHref: 'mymedicare.gov',
        realHref: 'https://www.mymedicare.gov',
      },
    ],
    dateLabel: 'Yesterday, 3:20 PM',
    verdict: 'safe',
    redFlags: [
      'Sender is the real medicare.gov domain.',
      'Does not ask for password or personal info in the email.',
      'Instructs you to sign in on the official site yourself.',
      'Includes the real 1-800-MEDICARE phone number for verification.',
    ],
    teachable:
      "Real Medicare emails only tell you that a notice is ready on MyMedicare.gov. They never ask for your Medicare number, Social Security number, or password in the message. They also always give you the 1-800-MEDICARE number so you can call to verify.",
  },
  {
    id: 'e-nigeria',
    difficulty: 'easy',
    fromName: 'Barrister James Okafor',
    fromAddress: 'jamesokafor_esq@protonmail.com',
    subject: 'URGENT AND CONFIDENTIAL - INHERITANCE CLAIM',
    preview: 'A distant relative has left you $18.5M USD — reply for instructions.',
    body:
      'Dear Sir/Madam,\n\nI am Barrister James Okafor, solicitor to the late Dr. Michael Wilburn, who died in a plane crash on 14th August 2024 in Lagos.\n\nHe left behind the sum of Eighteen Million Five Hundred Thousand US Dollars ($18,500,000) with our bank. Since his relatives cannot be traced and you share the same last name, the bank is prepared to release these funds to you as next of kin.\n\nTo begin the process, please reply with your: full name, home address, phone number, occupation, and a copy of your driver license or passport.\n\nA small processing fee of $2,500 will be required once papers are drafted.\n\nThis transaction is 100% risk-free and strictly confidential.\n\nBarrister James Okafor, Esq.',
    dateLabel: 'Yesterday, 11:47 AM',
    verdict: 'phishing',
    redFlags: [
      'Unsolicited inheritance from a stranger who shares your last name.',
      'Asks for a copy of your ID up front.',
      'Mentions a "small fee" — the classic advance-fee scam setup.',
      'Demand for urgency and secrecy.',
      'Free email domain (protonmail.com) for a supposed lawyer.',
    ],
    typicalLoss: 2500,
    teachable:
      "This is the original 'Nigerian prince' scam — still running because it still works on a small percentage of people. No real inheritance requires you to send a fee or a copy of your ID by email. Delete, do not reply.",
  },
  {
    id: 'e-netflix-bill',
    difficulty: 'easy',
    fromName: 'Netflix',
    fromAddress: 'info@account.netflix.com',
    subject: 'Your Netflix bill',
    preview: 'Thank you! Your $15.49 monthly membership renews on May 22.',
    body:
      'Hi Bailey,\n\nThanks for being a Netflix member.\n\nMonthly membership — Standard with ads: $15.49\nRenews: May 22, 2026\nLast 4 of card on file: **** 4411\n\nYou can view your billing details any time at {{link:0}}.\n\n— The Netflix Team',
    links: [
      {
        text: 'Your Account',
        shownHref: 'netflix.com/youraccount',
        realHref: 'https://www.netflix.com/youraccount',
      },
    ],
    dateLabel: 'Apr 22, 6:10 PM',
    verdict: 'safe',
    redFlags: [
      'From a real Netflix domain (account.netflix.com).',
      'Shows the last four of your card — matches what Netflix has.',
      'No request for your password or payment details in the email.',
      'Link goes to the real netflix.com.',
    ],
    teachable:
      "A real billing receipt tells you what happened — it does not ask you to update anything urgently. The tell-tale sign of a fake Netflix email is when it says 'your payment failed, click here to update' with a 24-hour countdown.",
  },
  /* ── MEDIUM ── */
  {
    id: 'e-ms-popup',
    difficulty: 'medium',
    fromName: 'Microsoft Security Team',
    fromAddress: 'microsoft-support@security-alerts-ms.com',
    subject: 'Windows Defender — 3 threats detected on your PC',
    preview: 'Call our support line at 1-855-***-**** immediately to remove.',
    body:
      'CRITICAL WINDOWS DEFENDER ALERT\n\nYour PC has been flagged with 3 high-severity threats:\n\n- Trojan.Win32.Agent\n- Spyware.Keylog.B\n- Rootkit.Zeroaccess\n\nDo NOT attempt to remove these yourself as it may damage your files.\n\nCall Microsoft Certified Support immediately: 1-855-442-0881\n\nOur technician will remote into your PC and clean it for a one-time fee of $299.\n\n— Microsoft Security Team',
    dateLabel: 'Apr 22, 2:03 PM',
    verdict: 'phishing',
    redFlags: [
      'Microsoft does not send unsolicited virus alerts by email.',
      'Sender domain is "security-alerts-ms.com" — not microsoft.com.',
      'Pushes you to call a phone number, which is the tech-support scam script.',
      'Asks for a $299 fee and remote access to your PC.',
    ],
    typicalLoss: 1200,
    teachable:
      "Microsoft will never email you to say your PC has a virus or tell you to call a number. This is the 'tech support' scam — once they remote into your PC, they empty bank accounts, not remove viruses. Close the email and run Windows Security from the Start menu if you are worried.",
  },
  {
    id: 'e-irs',
    difficulty: 'medium',
    fromName: 'Internal Revenue Service',
    fromAddress: 'refund@irs-payments.gov.us-taxpayer.com',
    subject: 'Tax refund pending - $1,428 - action required',
    preview: 'Confirm your banking info within 24 hours to receive your refund.',
    body:
      'Dear Taxpayer,\n\nAfter the final calculation of your fiscal activity, we have determined you are eligible for a tax refund of $1,428.00.\n\nTo receive your refund, please submit the tax refund request and allow us 3-6 business days to process it.\n\nStart by confirming your bank details at: {{link:0}}\n\nNote: A refund request can be delayed for a variety of reasons. For example, submitting invalid records or applying after the deadline.\n\nRegards,\nInternal Revenue Service',
    links: [
      {
        text: 'Confirm bank info for refund',
        shownHref: 'irs.gov/refund',
        realHref: 'http://us-taxpayer.com/irs-refund-confirm',
      },
    ],
    dateLabel: 'Apr 22, 10:30 AM',
    verdict: 'phishing',
    redFlags: [
      'The IRS does not contact taxpayers by email — ever.',
      'Sender domain is not irs.gov.',
      'Asks for bank details through a link.',
      '"Dear Taxpayer" generic greeting.',
    ],
    typicalLoss: 1800,
    teachable:
      "The real IRS only contacts you by postal mail. They never email, text, or call out of the blue about refunds or payments. If you are expecting a refund, check directly at irs.gov/refunds.",
  },
  {
    id: 'e-zelle',
    difficulty: 'medium',
    fromName: 'Karen (via Zelle)',
    fromAddress: 'no-reply@zelleapp-support.info',
    subject: 'Karen S. sent you a request for $450 — "grandma urgent"',
    preview: 'Tap to send $450 to Karen S. — message: "bail emergency, don\'t tell dad"',
    body:
      'Zelle® Payment Request\n\nKaren S. has requested $450.00 from you.\n\nMemo: "Grandma it\'s me, I got in trouble and I need bail money, please don\'t tell dad yet"\n\nTo approve this request, tap here: {{link:0}}\n\nRequests expire in 24 hours.\n\nThis message was sent by Zelle on behalf of your bank.',
    links: [
      {
        text: 'Approve $450 request',
        shownHref: 'zellepay.com',
        realHref: 'http://zelleapp-support.info/send?amt=450',
      },
    ],
    dateLabel: 'Apr 22, 8:55 AM',
    verdict: 'phishing',
    redFlags: [
      'Domain is zelleapp-support.info, not zellepay.com.',
      'Emotional manipulation ("don\'t tell dad").',
      'Uses a familiar first name to spoof someone you know.',
      'Real Zelle requests appear inside your bank app, not in email.',
    ],
    typicalLoss: 450,
    teachable:
      "Zelle is treated like cash — once you send, it is gone. A text or email that begs for secrecy is the #1 tell of the 'grandkid in trouble' scam. Always call the real person on a number you already have.",
  },
  {
    id: 'e-facebook-unusual',
    difficulty: 'medium',
    fromName: 'Facebook Security',
    fromAddress: 'security@facebookmail.com',
    subject: 'We noticed an unusual login on your account',
    preview: 'A device in Boston signed in. If that was you, ignore. If not, secure your account.',
    body:
      'Hi Bailey,\n\nWe noticed a new login to your account:\n\n- Chrome on Windows\n- Boston, Massachusetts, USA\n- April 22, 2026 at 7:41 PM\n\nIf this was you, you can ignore this message.\n\nIf this was not you, please secure your account: {{link:0}}\n\nThanks,\nThe Facebook Security Team',
    links: [
      {
        text: 'Secure your account',
        shownHref: 'facebook.com/hacked',
        realHref: 'https://www.facebook.com/hacked',
      },
    ],
    dateLabel: 'Apr 22, 7:42 PM',
    verdict: 'safe',
    redFlags: [
      'facebookmail.com is a real Facebook email domain used for notifications.',
      'Shows you the location and device — you can compare to where you actually were.',
      'Does not demand immediate action or threaten to lock you out.',
      'Link goes to facebook.com/hacked (the real Facebook security center).',
    ],
    teachable:
      "Facebook really does email you when there is a new login. The test is: does it match where you were? The scam version usually adds urgency and a countdown. This one does not — and the link points at the real facebook.com.",
  },
  {
    id: 'e-medicare-expired',
    difficulty: 'medium',
    fromName: 'Medicare Services',
    fromAddress: 'renewal@medicare-services-usa.gov.link',
    subject: 'Your Medicare card has expired - renew before April 30',
    preview: 'Your benefits will stop unless you renew today.',
    body:
      'Dear Medicare Beneficiary,\n\nOur records indicate your Medicare card has EXPIRED as of April 1, 2026.\n\nTo prevent a gap in coverage, you must renew your card by April 30, 2026.\n\nRenew online in 2 minutes at: {{link:0}}\n\nYou will need to confirm your:\n- Full name\n- Date of birth\n- Social Security number\n- Medicare ID number\n- Bank routing for fee payment ($29.95)\n\nCenters for Medicare & Medicaid Services',
    links: [
      {
        text: 'Renew my Medicare card',
        shownHref: 'medicare.gov/renew',
        realHref: 'http://medicare-services-usa.gov.link/renew',
      },
    ],
    dateLabel: 'Apr 21, 4:18 PM',
    verdict: 'phishing',
    redFlags: [
      'Medicare cards do not expire.',
      'Sender domain is ".gov.link" — the real one ends in .gov, not .gov.link.',
      'Asks for Social Security and bank info in one form.',
      'There is no $29.95 renewal fee.',
    ],
    typicalLoss: 3200,
    teachable:
      "Medicare cards do not expire and Medicare never charges renewal fees. The trick here is the fake 'gov.link' domain — it looks like a government site at a glance but is not. Real Medicare addresses end in .gov and nothing after.",
  },
  {
    id: 'e-church-newsletter',
    difficulty: 'medium',
    fromName: 'First Baptist Greensboro',
    fromAddress: 'newsletter@firstbaptistgso.org',
    subject: 'April Newsletter — Community Dinner this Friday',
    preview: 'Menu, volunteer sign-up, pastor\'s note, and the prayer list.',
    body:
      'Friends,\n\nA quick update from the church family this month:\n\n- Community dinner this Friday at 6 PM — bring a side dish if you can\n- Volunteer sign-up for the food pantry is now open\n- Pastor Hank\'s April note is attached (PDF)\n- Prayer list on the bulletin board — please keep the Thompson family in your prayers\n\nRSVP for the dinner at {{link:0}} or drop in when you can.\n\nWith love,\nThe First Baptist Greensboro Office',
    links: [
      {
        text: 'RSVP form',
        shownHref: 'firstbaptistgso.org/rsvp',
        realHref: 'https://firstbaptistgso.org/rsvp',
      },
    ],
    attachments: ['April-Pastor-Note.pdf'],
    dateLabel: 'Apr 21, 11:02 AM',
    verdict: 'safe',
    redFlags: [
      'From an email you already subscribe to.',
      'No money requests, no urgent deadlines.',
      'Domain matches the church you actually attend.',
      'Message is informational, not action-forcing.',
    ],
    teachable:
      "Real community newsletters are about community — events, prayers, a potluck. They do not ask for credentials or payments. If you recognize the sender and the tone, you are probably fine. Still, do not open a PDF unless you know who sent it.",
  },
  {
    id: 'e-grandkid-photo',
    difficulty: 'medium',
    fromName: 'Molly Wilburn',
    fromAddress: 'mollyw2015@gmail.com',
    subject: 'First day of T-ball! 📸',
    preview: 'Attached some photos from Ethan\'s first game — he got a hit!',
    body:
      'Hi Mom,\n\nEthan had his first T-ball game this morning and got a base hit on his second try — the whole bench cheered for him.\n\nAttached a few photos and a short video. Cannot wait for you to see him in person next weekend.\n\nLove,\nMolly\n\nPS — Dad found his reading glasses in the couch cushion (again).',
    attachments: ['ethan-tball-1.jpg', 'ethan-tball-2.jpg', 'ethan-hit.mp4'],
    dateLabel: 'Apr 20, 8:33 PM',
    verdict: 'safe',
    redFlags: [
      'From someone in your actual contact list.',
      'Personal detail only a family member would know.',
      'No links to click, no money being asked for.',
      'Photos and a video that match the story.',
    ],
    teachable:
      "Real family email is full of specifics — names, inside jokes, a detail about Dad's reading glasses. Scammers imitating family members usually keep it vague ('Hi it\\'s me, I need help') because they do not know the specifics.",
  },
  {
    id: 'e-target-refund',
    difficulty: 'medium',
    fromName: 'Target Refund Dept',
    fromAddress: 'refunds@target.customer-care.online',
    subject: 'Refund of $82.47 pending - confirm card to receive',
    preview: 'Your return has been approved. Final step: card confirmation.',
    body:
      'Good afternoon,\n\nThe return you submitted has been approved. Your refund of $82.47 is ready to be issued.\n\nDue to recent security updates, refunds are no longer processed automatically to your original card. Please confirm the card where you would like the refund sent: {{link:0}}\n\nYou will need to enter:\n- Card number\n- Expiration\n- CVV (3-digit code on back)\n\nThank you for shopping at Target.\n\n— Target Customer Care',
    links: [
      {
        text: 'Confirm refund card',
        shownHref: 'target.com/refund',
        realHref: 'http://target.customer-care.online/refund',
      },
    ],
    dateLabel: 'Apr 20, 3:15 PM',
    verdict: 'phishing',
    redFlags: [
      'Real Target emails come from target.com — not customer-care.online.',
      'Real refunds go back to the same card, automatically.',
      'Asking for the CVV is a red flag for any refund.',
      'Made-up "recent security update" as an excuse.',
    ],
    typicalLoss: 680,
    teachable:
      "A refund never requires you to re-enter your card number. Stores refund to the original payment method, automatically. The moment an email asks for your CVV, treat it as a scam.",
  },
  /* ── HARD ── (more sophisticated / AI-polished) */
  {
    id: 'e-meta-advertiser',
    difficulty: 'hard',
    fromName: 'Meta for Business',
    fromAddress: 'no-reply@business-meta.help',
    subject: 'We have reviewed your ad account — policy violation #88239',
    preview: 'Your account will be paused unless you confirm ownership within 7 days.',
    body:
      'Hello,\n\nOur automated review has flagged ad account 88239 for a potential policy violation. This is not yet a final decision.\n\nTo keep your account active, please confirm you are the primary owner by signing in through our secure review portal: {{link:0}}\n\nIf we do not hear from you within 7 days, we will pause your account until the review is complete. You can continue to run ads during this period.\n\nThank you for your partnership with Meta.\n\nMeta Support',
    links: [
      {
        text: 'Meta Business review portal',
        shownHref: 'business.facebook.com/review',
        realHref: 'http://business-meta.help/portal?tok=abc',
      },
    ],
    dateLabel: 'Apr 20, 9:48 AM',
    verdict: 'phishing',
    redFlags: [
      'Perfect grammar and professional tone — a modern AI-written phishing hallmark.',
      'Sender domain is "business-meta.help" instead of facebook.com or fb.com.',
      'Link text points at business.facebook.com but hover shows the real destination.',
      'Uses soft urgency (7 days) so it does not feel like a scam.',
    ],
    typicalLoss: 5400,
    teachable:
      "The new breed of phishing emails are grammatically perfect and tonally soft. The one tell they cannot hide is the real domain — always hover links and always check the 'from' address. Meta uses facebook.com or fb.com, never random new domains.",
  },
  {
    id: 'e-bank-statement',
    difficulty: 'hard',
    fromName: 'Wells Fargo Online',
    fromAddress: 'alerts@notify.wellsfargo.com',
    subject: 'Your April statement is available',
    preview: 'View your statement in online banking. Please do not reply to this email.',
    body:
      'Dear Bailey,\n\nYour April 2026 statement for checking account ending in 2847 is now available in Wells Fargo Online.\n\nTo view it, please sign in at {{link:0}}.\n\nThis email was generated automatically. Please do not reply. If you have questions, call the number on the back of your card or visit a branch.\n\nWells Fargo',
    links: [
      {
        text: 'Sign in to Wells Fargo Online',
        shownHref: 'wellsfargo.com',
        realHref: 'https://www.wellsfargo.com',
      },
    ],
    dateLabel: 'Apr 19, 6:00 AM',
    verdict: 'safe',
    redFlags: [
      'Sender domain (notify.wellsfargo.com) matches the real bank.',
      'Does not ask for password, SSN, or account number.',
      'Tells you to call the number on the back of your card — that is the correct way to verify.',
      'Link preview goes to the real wellsfargo.com.',
    ],
    teachable:
      "Real bank notices do not ask for anything — they tell you to sign in yourself. If in doubt, skip the email entirely and open the banking app. The bank also always tells you to call the number on the back of your card, not a number in the email.",
  },
  {
    id: 'e-aarp-magazine',
    difficulty: 'hard',
    fromName: 'AARP Magazine',
    fromAddress: 'magazine@aarp.org',
    subject: 'Your April/May issue has shipped 📬',
    preview: 'Plus: the May event calendar and this month\'s brain teaser.',
    body:
      'Hi Bailey,\n\nYour April/May AARP magazine is on its way — it should arrive in the next 5-7 days.\n\nIn this issue:\n- 12 easy upgrades to slash your power bill\n- A short trip to Asheville\n- Brain teaser: can you solve it?\n\nVisit aarp.org/magazine for the digital edition anytime: {{link:0}}\n\nHappy reading,\nThe AARP Magazine Team',
    links: [
      {
        text: 'Read the digital edition',
        shownHref: 'aarp.org/magazine',
        realHref: 'https://www.aarp.org/magazine',
      },
    ],
    dateLabel: 'Apr 19, 2:00 PM',
    verdict: 'safe',
    redFlags: [
      'From the real aarp.org domain.',
      'No request for money or login info.',
      'Just a friendly heads-up about something you subscribed to.',
      'Link goes to the real aarp.org/magazine.',
    ],
    teachable:
      "Real subscriber emails only give you news. If you are an AARP member and this one matches what you would expect from the magazine, you can trust it. When in doubt, log in directly at aarp.org rather than through the email link.",
  },
  /* ── Gray area (unsolicited marketing / low-risk junk) ── */
  {
    id: 'e-survey-gift',
    difficulty: 'medium',
    fromName: 'Shopper Rewards',
    fromAddress: 'rewards@opinion-panel-usa.com',
    subject: 'You\'ve been selected — $50 Walmart gift card for 3-minute survey',
    preview: 'Last chance — survey closes at midnight. One per household.',
    body:
      'Congratulations!\n\nYou have been randomly selected to take a short 3-minute customer experience survey. As a thank you, you will receive a $50 Walmart gift card.\n\nStart the survey here: {{link:0}}\n\nTerms apply. This is a market research invitation. You have not won a prize — the gift card is issued after survey completion and may require a $4.95 shipping fee and subscription to partner offers.\n\nShopper Rewards — an independent research panel.',
    links: [
      {
        text: 'Start survey',
        shownHref: 'walmart.com',
        realHref: 'http://opinion-panel-usa.com/survey?pid=884',
      },
    ],
    dateLabel: 'Apr 19, 10:12 AM',
    verdict: 'gray',
    redFlags: [
      'You did not sign up for any "panel".',
      'Small print mentions shipping fees and partner subscriptions — this is affiliate bait.',
      'Not Walmart — a third party using Walmart\'s name.',
      'Not technically a phishing scam, but you will likely lose money or get flooded with spam.',
    ],
    typicalLoss: 45,
    teachable:
      "Emails like this are not always phishing, but they are junk designed to trick you into paid subscriptions via tiny checkboxes at the bottom of a survey. Free gift cards from strangers do not exist. Delete.",
  },
  {
    id: 'e-free-trial',
    difficulty: 'medium',
    fromName: 'MiracleSkin',
    fromAddress: 'offers@miracleskin-free-trial.co',
    subject: 'Try our anti-aging cream FREE for 14 days — only pay $4.95 shipping',
    preview: 'As seen on TV. Used by celebrities. No subscription... really.',
    body:
      'Turn back the clock — risk-free.\n\nDoctors call it "the closest thing to a facelift in a jar." Now you can try MiracleSkin for 14 days absolutely free. Just pay $4.95 for shipping.\n\nClaim your free trial: {{link:0}}\n\nBy claiming the free trial you are enrolled in our monthly replenishment program at $89.95/month, cancellable anytime, please see terms.',
    links: [
      {
        text: 'Claim my free trial',
        shownHref: 'miracleskin.com',
        realHref: 'http://miracleskin-free-trial.co/claim',
      },
    ],
    dateLabel: 'Apr 18, 8:45 PM',
    verdict: 'gray',
    redFlags: [
      '"Free trial" with automatic $89.95/month rebill buried in fine print.',
      'Free-trial scams are one of the FTC\'s most-reported complaints.',
      'Sender domain is a knock-off, not an established brand.',
      'Exaggerated health claims ("facelift in a jar") with no evidence.',
    ],
    typicalLoss: 269,
    teachable:
      "Free trial rebill scams are the classic subscription trap — you pay shipping, then get charged $89 every month until you fight with the company to cancel. If you did not ask for it, delete it.",
  },
  {
    id: 'e-library-hold',
    difficulty: 'easy',
    fromName: 'Greensboro Public Library',
    fromAddress: 'notices@greensborolibrary.org',
    subject: 'Your hold is ready for pickup: "The Heaven & Earth Grocery Store"',
    preview: 'Pick up by April 28 at the Glenwood branch.',
    body:
      'Hello,\n\nThe title you placed on hold is now ready for pickup:\n\n"The Heaven & Earth Grocery Store" by James McBride\nBranch: Glenwood\nHold expires: April 28, 2026\n\nBring your library card to the hold shelf. If you no longer need it, you can cancel the hold in your account: {{link:0}}\n\nHappy reading,\nGreensboro Public Library',
    links: [
      {
        text: 'Manage my holds',
        shownHref: 'greensborolibrary.org/account',
        realHref: 'https://www.greensborolibrary.org/account',
      },
    ],
    dateLabel: 'Apr 18, 9:15 AM',
    verdict: 'safe',
    redFlags: [
      'From the real local library domain.',
      'Only asks you to bring your library card in person — no online info needed.',
      'Matches a book you actually placed on hold.',
      'No money involved.',
    ],
    teachable:
      "Hold notices from your library are a good example of a low-risk email that can feel suspicious if you are on alert. The check here is simple: did you place this hold? Yes → real. No → ignore it.",
  },
];

/* ─────────────────────── Visual + helper pieces ─────────────────────── */

const VERDICT_LABEL: Record<Verdict, string> = {
  safe: 'Real & safe',
  phishing: 'Phishing',
  gray: 'Junk / gray area',
};

function verdictMatch(choice: UserChoice, verdict: Verdict): 'correct' | 'partial' | 'wrong' {
  if (choice === 'unsure') return 'partial';
  if (choice === 'phishing' && (verdict === 'phishing' || verdict === 'gray')) return 'correct';
  if (choice === 'safe' && verdict === 'safe') return 'correct';
  return 'wrong';
}

function renderBody(body: string, links?: EmailLink[]) {
  if (!links || links.length === 0) return body.split('\n').map((line, i) => (
    <p key={i} className="mb-2 last:mb-0 whitespace-pre-wrap">{line}</p>
  ));
  const parts: Array<string | EmailLink> = [];
  let rest = body;
  const rgx = /\{\{link:(\d+)\}\}/g;
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  while ((m = rgx.exec(body)) !== null) {
    if (m.index > lastIdx) parts.push(body.substring(lastIdx, m.index));
    const idx = parseInt(m[1], 10);
    if (links[idx]) parts.push(links[idx]);
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < body.length) parts.push(body.substring(lastIdx));
  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {parts.map((p, i) => {
        if (typeof p === 'string') return <span key={i}>{p}</span>;
        return (
          <span key={i} className="inline-flex items-center gap-1 align-baseline">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-blue-600 underline break-all"
              title={`Looks like: ${p.shownHref} — Actually goes to: ${p.realHref}`}
            >
              {p.text}
            </a>
            <span className="inline-flex text-xs text-muted-foreground items-center gap-1">
              <Link2 className="h-3 w-3" aria-hidden="true" />
              {p.realHref}
            </span>
          </span>
        );
      })}
      {rest && null}
    </div>
  );
}

/* ─────────────────────── Component ─────────────────────── */

export default function PhishingInbox() {
  const { toast } = useToast();
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [decisions, setDecisions] = useState<Record<string, UserChoice>>({});
  const [showResults, setShowResults] = useState(false);
  const [reviewEmail, setReviewEmail] = useState<EmailItem | null>(null);
  const [shareText, setShareText] = useState('');
  const [shareFrom, setShareFrom] = useState('');

  const filteredEmails = useMemo(
    () => (difficulty === 'all' ? EMAILS : EMAILS.filter((e) => e.difficulty === difficulty)),
    [difficulty]
  );

  useEffect(() => {
    if (filteredEmails.length === 0) {
      setSelectedId(null);
      return;
    }
    if (!filteredEmails.find((e) => e.id === selectedId)) {
      setSelectedId(filteredEmails[0].id);
    }
  }, [filteredEmails, selectedId]);

  const selected = filteredEmails.find((e) => e.id === selectedId) || null;
  const totalDecisions = Object.keys(decisions).length;
  const allDecided = totalDecisions >= filteredEmails.length && filteredEmails.length > 0;

  function handleDecision(id: string, choice: UserChoice) {
    setDecisions((prev) => ({ ...prev, [id]: choice }));
  }

  function resetAll() {
    setDecisions({});
    setShowResults(false);
  }

  const scoreBreakdown = useMemo(() => {
    let correct = 0;
    let safeCorrect = 0;
    let safeTotal = 0;
    let phishCorrect = 0;
    let phishTotal = 0;
    let grayCorrect = 0;
    let grayTotal = 0;
    let moneySaved = 0;
    let moneyLost = 0;
    for (const e of filteredEmails) {
      const choice = decisions[e.id];
      if (e.verdict === 'safe') safeTotal++;
      else if (e.verdict === 'phishing') phishTotal++;
      else grayTotal++;
      if (!choice) continue;
      const result = verdictMatch(choice, e.verdict);
      if (result === 'correct') {
        correct++;
        if (e.verdict === 'safe') safeCorrect++;
        if (e.verdict === 'phishing') phishCorrect++;
        if (e.verdict === 'gray') grayCorrect++;
        if (e.typicalLoss && (e.verdict === 'phishing' || e.verdict === 'gray')) {
          moneySaved += e.typicalLoss;
        }
      } else if (result === 'wrong') {
        if (e.typicalLoss && (e.verdict === 'phishing' || e.verdict === 'gray')) {
          moneyLost += e.typicalLoss;
        }
      }
    }
    return {
      correct,
      total: filteredEmails.length,
      safeCorrect,
      safeTotal,
      phishCorrect,
      phishTotal,
      grayCorrect,
      grayTotal,
      moneySaved,
      moneyLost,
    };
  }, [decisions, filteredEmails]);

  function handleShare() {
    if (!shareText.trim()) {
      toast({ title: 'Please paste the message first', variant: 'destructive' });
      return;
    }
    try {
      const key = 'teksure:shared-phishing';
      const prior = JSON.parse(localStorage.getItem(key) || '[]');
      prior.push({
        from: shareFrom.trim() || 'anonymous',
        text: shareText.trim(),
        at: new Date().toISOString(),
      });
      localStorage.setItem(key, JSON.stringify(prior));
      setShareText('');
      setShareFrom('');
      toast({
        title: 'Thanks — we\'ll consider adding it.',
        description: 'Your submission is saved on this device.',
      });
    } catch (err) {
      toast({ title: 'Could not save — storage is full', variant: 'destructive' });
    }
  }

  const SEO = (
    <SEOHead
      title="Phishing Practice Inbox — Safe-Practice Scam Training | TekSure"
      description="A safe-practice email inbox with 20 messages mixed real and fake. Sharpen your scam-spotting instincts with zero risk."
    />
  );

  /* ─────────────────── Render ─────────────────── */

  return (
    <>
      {SEO}
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                  <Inbox className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <Badge className="bg-white/20 text-white hover:bg-white/25 border-white/30">
                  Safety Practice
                </Badge>
                <Badge className="bg-emerald-500 text-white hover:bg-emerald-500/90 border-emerald-600">
                  New
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Phishing Practice Inbox
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Safe-practice email inbox with 20 messages mixed real + fake. Can you spot the scams?
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <BookmarkButton
                  type="tool"
                  slug="phishing-inbox"
                  title="Phishing Practice Inbox"
                  url="/practice/phishing-inbox"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
                />
                <Button
                  asChild
                  variant="outline"
                  className="min-h-14 text-base bg-white/5 text-white border-white/30 hover:bg-white/15 hover:text-white"
                >
                  <Link to="/quizzes/scam-iq">
                    Try the Scam IQ quiz next
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Practice no-risk card */}
        <section className="container py-8 md:py-10">
          <Alert className="max-w-5xl mx-auto border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/40 dark:bg-emerald-950/20">
            <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <AlertTitle className="text-base font-semibold">Practice, no risk</AlertTitle>
            <AlertDescription className="text-base leading-relaxed mt-1">
              Nothing here goes anywhere. No real links. Nothing you do affects real accounts. Tap on
              any email, decide if it is safe or phishing, and we will walk you through the tells.
            </AlertDescription>
          </Alert>
        </section>

        {/* Difficulty tabs */}
        <section className="container pb-6">
          <div className="max-w-5xl mx-auto">
            <Tabs value={difficulty} onValueChange={(v) => setDifficulty(v as Difficulty | 'all')}>
              <TabsList className="grid grid-cols-4 w-full md:w-auto md:inline-grid">
                <TabsTrigger value="all" className="text-base min-h-12">All</TabsTrigger>
                <TabsTrigger value="easy" className="text-base min-h-12">Easy</TabsTrigger>
                <TabsTrigger value="medium" className="text-base min-h-12">Medium</TabsTrigger>
                <TabsTrigger value="hard" className="text-base min-h-12">Hard</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-sm text-muted-foreground mt-2">
              Easy = obvious tells. Medium = tricky. Hard = AI-polished modern phishing.
            </p>
          </div>
        </section>

        {/* Inbox 3-pane layout */}
        <section className="container pb-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(280px,360px)_1fr] gap-4">
            {/* Left pane: inbox list */}
            <Card className="overflow-hidden">
              <div className="p-3 border-b bg-muted/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Inbox className="h-4 w-4" aria-hidden="true" />
                  <span className="font-semibold text-base">Inbox</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {totalDecisions}/{filteredEmails.length} done
                </span>
              </div>
              <div className="max-h-[520px] overflow-y-auto divide-y">
                {filteredEmails.map((e) => {
                  const decided = decisions[e.id];
                  const isSelected = selectedId === e.id;
                  return (
                    <button
                      key={e.id}
                      onClick={() => setSelectedId(e.id)}
                      className={`w-full text-left p-3 min-h-14 hover:bg-muted/50 transition-colors ${
                        isSelected ? 'bg-blue-50 dark:bg-blue-950/30' : ''
                      }`}
                      aria-current={isSelected ? 'true' : undefined}
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-1 shrink-0">
                          {decided ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                          ) : (
                            <span className="block h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden="true" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm truncate ${decided ? 'font-normal' : 'font-semibold'}`}>
                              {e.fromName}
                            </span>
                            <span className="text-xs text-muted-foreground shrink-0">
                              {e.dateLabel.split(',')[0]}
                            </span>
                          </div>
                          <div className={`text-base truncate ${decided ? 'font-normal' : 'font-medium'}`}>
                            {e.subject}
                          </div>
                          <div className="text-sm text-muted-foreground truncate">{e.preview}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Right pane: selected email */}
            <Card className="overflow-hidden">
              {selected ? (
                <>
                  <div className="p-4 md:p-5 border-b bg-muted/30">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="min-w-0">
                        <h2 className="text-xl md:text-2xl font-bold mb-1">{selected.subject}</h2>
                        <div className="text-sm text-muted-foreground break-all">
                          <span className="font-medium text-foreground">{selected.fromName}</span>{' '}
                          &lt;{selected.fromAddress}&gt;
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">{selected.dateLabel}</div>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {selected.difficulty}
                      </Badge>
                    </div>
                    {selected.attachments && selected.attachments.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selected.attachments.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-background"
                          >
                            <Mail className="h-3 w-3" aria-hidden="true" />
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4 md:p-6">
                    <div className="text-base leading-relaxed text-foreground">
                      {renderBody(selected.body, selected.links)}
                    </div>

                    {/* Hover-to-reveal link table */}
                    {selected.links && selected.links.length > 0 && (
                      <div className="mt-6 text-sm border rounded-lg bg-muted/30">
                        <div className="px-3 py-2 border-b font-semibold flex items-center gap-2">
                          <Eye className="h-4 w-4" aria-hidden="true" />
                          Where the links really go
                        </div>
                        <ul className="divide-y">
                          {selected.links.map((l, i) => (
                            <li key={i} className="px-3 py-2 flex flex-col gap-1">
                              <span>
                                Looks like: <span className="text-blue-600">{l.shownHref}</span>
                              </span>
                              <span className="break-all">
                                Actually goes to:{' '}
                                <span className="font-mono text-foreground">{l.realHref}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Decision buttons */}
                    {!decisions[selected.id] ? (
                      <div className="mt-6 border-t pt-5">
                        <p className="font-semibold mb-3 text-base">What is your call?</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Button
                            size="lg"
                            onClick={() => handleDecision(selected.id, 'safe')}
                            className="min-h-14 text-base bg-emerald-600 hover:bg-emerald-700"
                          >
                            <CheckCircle2 className="mr-2 h-5 w-5" aria-hidden="true" />
                            Safe 👍
                          </Button>
                          <Button
                            size="lg"
                            onClick={() => handleDecision(selected.id, 'phishing')}
                            className="min-h-14 text-base bg-red-600 hover:bg-red-700"
                          >
                            <Flag className="mr-2 h-5 w-5" aria-hidden="true" />
                            Phishing 🚩
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={() => handleDecision(selected.id, 'unsure')}
                            className="min-h-14 text-base"
                          >
                            <HelpCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                            Not sure 🤔
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <TeachableMoment email={selected} choice={decisions[selected.id]} />
                    )}
                  </CardContent>
                </>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  No emails in this difficulty yet.
                </div>
              )}
            </Card>
          </div>
        </section>

        {/* See results button */}
        {allDecided && !showResults && (
          <section className="container pb-10">
            <div className="max-w-3xl mx-auto text-center">
              <Button
                size="lg"
                className="min-h-14 text-base"
                onClick={() => setShowResults(true)}
              >
                See my results
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </section>
        )}

        {/* Results screen */}
        {showResults && (
          <section className="container py-10 md:py-14 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h2 className="text-2xl md:text-3xl font-bold">Your results</h2>
                  </div>
                  <p className="text-lg mb-6">
                    You got <strong>{scoreBreakdown.correct}</strong> out of{' '}
                    <strong>{scoreBreakdown.total}</strong> right.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <StatCard
                      title="Real emails"
                      value={`${scoreBreakdown.safeCorrect}/${scoreBreakdown.safeTotal}`}
                      color="emerald"
                    />
                    <StatCard
                      title="Phishing spotted"
                      value={`${scoreBreakdown.phishCorrect}/${scoreBreakdown.phishTotal}`}
                      color="red"
                    />
                    <StatCard
                      title="Gray-area spotted"
                      value={`${scoreBreakdown.grayCorrect}/${scoreBreakdown.grayTotal}`}
                      color="amber"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200">
                      <CardContent className="p-5">
                        <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-1">
                          Money you would have saved
                        </div>
                        <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-200">
                          ${scoreBreakdown.moneySaved.toLocaleString()}
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50 dark:bg-red-950/30 border-red-200">
                      <CardContent className="p-5">
                        <div className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">
                          Money you would have lost
                        </div>
                        <div className="text-3xl font-bold text-red-700 dark:text-red-200">
                          ${scoreBreakdown.moneyLost.toLocaleString()}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    Review each email — tap to see the red flags
                  </h3>
                  <div className="space-y-2 mb-8">
                    {filteredEmails.map((e) => {
                      const choice = decisions[e.id];
                      const result = choice ? verdictMatch(choice, e.verdict) : 'wrong';
                      return (
                        <button
                          key={e.id}
                          onClick={() => setReviewEmail(e)}
                          className="w-full text-left p-3 min-h-14 rounded border hover:bg-muted/50 flex items-center gap-3"
                        >
                          {result === 'correct' ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
                          ) : result === 'partial' ? (
                            <HelpCircle className="h-5 w-5 text-amber-500 shrink-0" aria-hidden="true" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 shrink-0" aria-hidden="true" />
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{e.subject}</div>
                            <div className="text-sm text-muted-foreground truncate">
                              {e.fromName} — {VERDICT_LABEL[e.verdict]}
                            </div>
                          </div>
                          <Badge variant="outline" className="shrink-0">
                            See why
                          </Badge>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button onClick={resetAll} variant="outline" className="min-h-14 text-base">
                      <RotateCcw className="mr-2 h-5 w-5" aria-hidden="true" />
                      Try again
                    </Button>
                    <Button asChild className="min-h-14 text-base">
                      <Link to="/quizzes/scam-iq">
                        Next: Scam IQ Quiz
                        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="min-h-14 text-base">
                      <Link to="/tools/is-this-real">Is This Real? checker</Link>
                    </Button>
                    <Button asChild variant="outline" className="min-h-14 text-base">
                      <Link to="/tools/email-spam-manager">Email Spam Manager</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* How scammers are getting better */}
        <section className="container py-10 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 dark:border-amber-900/40">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
                  <h2 className="text-2xl font-bold">How scammers are getting better</h2>
                </div>
                <p className="text-base leading-relaxed mb-4">
                  The old tells — bad grammar, misspellings, weird greetings — are fading fast. AI now
                  writes flawless English. Deepfake voices can imitate a grandchild in a callback.
                  Logos and layouts look pixel-perfect. Here is what still works against the new breed:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Rule
                    icon={<PhoneCall className="h-5 w-5" aria-hidden="true" />}
                    title="Verify on a separate channel"
                  >
                    If an email claims to be your bank, Apple, or family — close the message and call
                    or message them using a number you already have, not one from the email.
                  </Rule>
                  <Rule
                    icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
                    title="Hover to see the real URL"
                  >
                    Visible link text can say anything. The real destination is what matters. On a
                    phone, press and hold the link to preview.
                  </Rule>
                  <Rule
                    icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
                    title="Urgency? Pause."
                  >
                    Countdown clocks, "final notice," "account will be locked" — these are pressure
                    tactics. Real companies give you time.
                  </Rule>
                  <Rule
                    icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                    title="Never share credentials by email"
                  >
                    No real company asks for your password, Social Security number, or full card in
                    response to an email.
                  </Rule>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Share a fake */}
        <section className="container pb-10">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Flag className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-bold">Share a fake you got</h2>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Got a scam in your inbox? Paste it below. If it is a new twist we have not covered,
                  we may add it to the practice set.
                </p>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="share-from" className="text-base">
                      Who did it claim to be from? (optional)
                    </Label>
                    <Input
                      id="share-from"
                      placeholder="e.g. fake Amazon, fake IRS"
                      value={shareFrom}
                      onChange={(e) => setShareFrom(e.target.value)}
                      className="min-h-12 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="share-text" className="text-base">
                      Paste the message
                    </Label>
                    <Textarea
                      id="share-text"
                      rows={5}
                      placeholder="Paste the scam message (no personal info, please)"
                      value={shareText}
                      onChange={(e) => setShareText(e.target.value)}
                      className="text-base"
                    />
                  </div>
                  <Button onClick={handleShare} className="min-h-14 text-base">
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    Share with TekSure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="container pb-14 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Common questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger className="text-base text-left">
                  Will this improve my real-world defense?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Yes — studies of phishing-training simulators show measurable drops in fall-for-it
                  rates, especially when people practice hover-and-check on a realistic inbox. Ten
                  minutes here builds habits that carry over the next time a real scam hits your
                  inbox.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-base text-left">
                  What if I got fooled by a real one?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Breathe. Change the password of any account you entered credentials into — starting
                  with email, since email resets everything else. Call your bank on the number on the
                  back of your card. Report the scam at reportfraud.ftc.gov. You are not alone —
                  tens of millions of Americans get caught each year.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-base text-left">
                  Are these real examples?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  The phishing samples are modeled on real active scams — the Medicare card, USPS
                  package, "Apple ID used on new device," Zelle grandparent con, Microsoft tech-support
                  popups, and fake IRS refunds are all in circulation right now. Names and numbers are
                  changed so nothing points at a real person.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-base text-left">
                  What is the latest scam to watch for?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  AI-voice "grandkid in trouble" callbacks are the fastest-growing scam. If you get a
                  panicked call from a family member asking for money, hang up and call them back on
                  their real number. A deepfake voice cannot answer a call at their real phone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />

      {/* Review dialog */}
      <Dialog open={!!reviewEmail} onOpenChange={(o) => !o && setReviewEmail(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {reviewEmail && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{reviewEmail.subject}</DialogTitle>
                <DialogDescription>
                  {reviewEmail.fromName} &lt;{reviewEmail.fromAddress}&gt;
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-2">
                <Badge
                  className={
                    reviewEmail.verdict === 'phishing'
                      ? 'bg-red-600'
                      : reviewEmail.verdict === 'gray'
                      ? 'bg-amber-500'
                      : 'bg-emerald-600'
                  }
                >
                  {VERDICT_LABEL[reviewEmail.verdict]}
                </Badge>
                <p className="text-base leading-relaxed">{reviewEmail.teachable}</p>
                <div>
                  <div className="font-semibold mb-2">Red flags in this email</div>
                  <ul className="list-disc pl-5 space-y-1 text-base">
                    {reviewEmail.redFlags.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ─────────────────── Small helper components ─────────────────── */

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: 'emerald' | 'red' | 'amber';
}) {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200',
    red: 'bg-red-50 dark:bg-red-950/30 border-red-200',
    amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200',
  };
  return (
    <Card className={colorMap[color]}>
      <CardContent className="p-5">
        <div className="text-sm font-medium text-muted-foreground mb-1">{title}</div>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

function Rule({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-base">{title}</div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{children}</p>
      </div>
    </div>
  );
}

function TeachableMoment({ email, choice }: { email: EmailItem; choice: UserChoice }) {
  const result = verdictMatch(choice, email.verdict);
  const headerColor =
    result === 'correct'
      ? 'text-emerald-700 dark:text-emerald-300'
      : result === 'partial'
      ? 'text-amber-600'
      : 'text-red-700 dark:text-red-300';
  const verdictBadge =
    email.verdict === 'phishing'
      ? 'bg-red-600'
      : email.verdict === 'gray'
      ? 'bg-amber-500'
      : 'bg-emerald-600';
  return (
    <div className="mt-6 border-t pt-5 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        {result === 'correct' ? (
          <CheckCircle2 className={`h-6 w-6 ${headerColor}`} aria-hidden="true" />
        ) : result === 'partial' ? (
          <HelpCircle className={`h-6 w-6 ${headerColor}`} aria-hidden="true" />
        ) : (
          <XCircle className={`h-6 w-6 ${headerColor}`} aria-hidden="true" />
        )}
        <span className={`text-lg font-bold ${headerColor}`}>
          {result === 'correct'
            ? 'Nailed it.'
            : result === 'partial'
            ? 'Good to pause — here is the answer.'
            : 'Close — here is what to watch for.'}
        </span>
        <Badge className={verdictBadge}>{VERDICT_LABEL[email.verdict]}</Badge>
      </div>
      <div className="rounded-lg border bg-muted/30 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="h-4 w-4 text-amber-500" aria-hidden="true" />
          <span className="font-semibold">Why</span>
        </div>
        <p className="text-base leading-relaxed">{email.teachable}</p>
      </div>
      <div>
        <div className="font-semibold mb-2 flex items-center gap-2">
          <Flag className="h-4 w-4" aria-hidden="true" />
          Red flags in this email
        </div>
        <ul className="list-disc pl-5 space-y-1 text-base leading-relaxed">
          {email.redFlags.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      {email.typicalLoss && (email.verdict === 'phishing' || email.verdict === 'gray') && (
        <Alert className="border-red-200 bg-red-50/60 dark:border-red-900/40 dark:bg-red-950/20">
          <AlertTriangle className="h-4 w-4 text-red-600" aria-hidden="true" />
          <AlertDescription className="text-base">
            Average loss if someone falls for this one:{' '}
            <strong>${email.typicalLoss.toLocaleString()}</strong>.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
