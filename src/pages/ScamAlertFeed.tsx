import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Phone,
  MessageSquare,
  Mail,
  User,
  Globe,
  Inbox,
  ExternalLink,
  Flag,
  Share2,
  Search,
  TrendingUp,
  ChevronDown,
  Check,
  BellRing,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

// ─── Types ──────────────────────────────────────────────────────────────────

type Category = 'phone' | 'text' | 'email' | 'in-person' | 'online' | 'mail';
type Severity = 'high' | 'medium' | 'low';
type Region = 'nationwide' | 'state-specific' | 'international';
type DateRange = 'week' | 'month' | 'all';

interface ScamSource {
  name: string;
  url: string;
}

interface ScamAlert {
  id: string;
  title: string;
  category: Category;
  severity: Severity;
  datePublished: string; // YYYY-MM-DD
  region: Region;
  howItWorks: string;
  redFlags: string[];
  whatToDo: string[];
  sources: ScamSource[];
}

// ─── Alert data (30 entries, FTC/AARP-reported) ─────────────────────────────

const ALERTS: ScamAlert[] = [
  {
    id: 'medicare-card-replacement',
    title: 'Medicare card replacement scam',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-18',
    region: 'nationwide',
    howItWorks:
      'A caller claims to be from Medicare and says your old paper card needs to be replaced with a new plastic or chip card. To process the swap, they ask you to "verify" your Medicare number, Social Security number, and sometimes a bank account for a small shipping fee. Real Medicare will never call you out of the blue for this.',
    redFlags: [
      'An unexpected call saying your Medicare card is being replaced',
      'Pressure to give your Medicare or Social Security number over the phone',
      'A small shipping or processing fee asked for by debit card or gift card',
      'Caller ID shows "Medicare" but they refuse to send a letter first',
    ],
    whatToDo: [
      'Hang up — Medicare does not cold-call you',
      'Never give your Medicare, SSN, or bank info to an inbound caller',
      'Call 1-800-MEDICARE (1-800-633-4227) to verify anything suspicious',
      'Report it at reportfraud.ftc.gov and at 1-800-HHS-TIPS',
    ],
    sources: [
      { name: 'FTC Consumer Advice — Medicare scams', url: 'https://consumer.ftc.gov/articles/how-avoid-medicare-scams' },
      { name: 'Medicare.gov — Fraud protection', url: 'https://www.medicare.gov/basics/reporting-medicare-fraud-abuse' },
    ],
  },
  {
    id: 'ssa-suspension-robocall',
    title: 'Social Security number "suspension" robocall',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-17',
    region: 'nationwide',
    howItWorks:
      'You get a recorded call saying your Social Security number has been suspended due to "suspicious activity" and warning you to press 1 or face arrest. When you press 1, a real person pretends to be a federal agent and demands gift cards or a wire transfer to "reinstate" your number.',
    redFlags: [
      'A robocall claiming your SSN is suspended',
      'Threats of arrest, lawsuits, or frozen benefits',
      'Requests for payment in gift cards, Zelle, or crypto',
      'Caller quotes part of your SSN to sound legitimate',
    ],
    whatToDo: [
      'Hang up right away — the SSA does not suspend numbers',
      'Do not press any buttons, even to "opt out"',
      'Call the real SSA at 1-800-772-1213 if worried',
      'Report the call at oig.ssa.gov and reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'SSA Office of the Inspector General', url: 'https://oig.ssa.gov/scam/' },
      { name: 'FTC — Social Security imposter scams', url: 'https://consumer.ftc.gov/articles/how-avoid-social-security-administration-scam-calls' },
    ],
  },
  {
    id: 'grandparent-deepfake-voice',
    title: 'Grandparent emergency scam with AI voice cloning',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-15',
    region: 'nationwide',
    howItWorks:
      'A caller sounds exactly like your grandchild in tears, claiming they were in a car accident, arrested, or stranded overseas. They beg you not to tell their parents and hand the phone to a "lawyer" or "bail bondsman" who needs money wired or sent by gift card immediately. The voice may be cloned from a few seconds of social media audio.',
    redFlags: [
      'A call that sounds like a family member in a panic',
      'A plea to keep it secret from other relatives',
      'An urgent demand for wire transfer, gift cards, or cash by courier',
      'The "lawyer" refuses to give a callback number you can verify',
    ],
    whatToDo: [
      'Hang up and call your grandchild directly at their known number',
      'Check with other family before sending any money',
      'Agree on a family "safe word" that a real family member would know',
      'Report the call to the FBI IC3 and the FTC',
    ],
    sources: [
      { name: 'FTC — Scammers use AI to enhance family emergency scams', url: 'https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes' },
      { name: 'AARP Fraud Watch — Grandparent scam', url: 'https://www.aarp.org/money/scams-fraud/info-2019/grandparent.html' },
    ],
  },
  {
    id: 'publishers-clearing-house-imposter',
    title: 'Publishers Clearing House imposter',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-12',
    region: 'nationwide',
    howItWorks:
      'A caller says you\'ve won millions from Publishers Clearing House but need to pay taxes, fees, or insurance up front to release the prize. Real PCH never contacts winners asking for money — they show up at the door with the balloons and camera crew unannounced.',
    redFlags: [
      'A phone call about a sweepstakes you don\'t remember entering',
      'Any request for fees, taxes, or insurance before receiving winnings',
      'Demand for payment by gift card, wire, or prepaid debit card',
      'Caller urges secrecy "until the official announcement"',
    ],
    whatToDo: [
      'Hang up — real PCH winners never pay to collect',
      'Never send money to claim a prize',
      'Report the call at reportfraud.ftc.gov',
      'Search the phone number at bbb.org/scamtracker',
    ],
    sources: [
      { name: 'PCH — How to spot a scam', url: 'https://info.pch.com/consumer-protection' },
      { name: 'FTC Consumer Advice — Prize scams', url: 'https://consumer.ftc.gov/articles/fake-prize-sweepstakes-and-lottery-scams' },
    ],
  },
  {
    id: 'amazon-account-closure-text',
    title: 'Amazon account closure text',
    category: 'text',
    severity: 'high',
    datePublished: '2026-04-20',
    region: 'nationwide',
    howItWorks:
      'A text claims your Amazon account will be locked or charged for a large order unless you click a link to confirm or cancel. The link goes to a fake sign-in page that captures your username, password, and credit card.',
    redFlags: [
      'An unexpected text about an Amazon order you never placed',
      'Short link or a web address that\'s not amazon.com',
      'Urgency: "Confirm in the next 15 minutes or be charged"',
      'A sign-in page that asks for your full card or SSN',
    ],
    whatToDo: [
      'Do not tap the link — delete the text',
      'Open the Amazon app yourself and check "Your Orders"',
      'Forward scam texts to 7726 (SPAM) to report to your carrier',
      'Report to reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'Amazon — Identify a scam', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GRGRY7AQ3LMPXVCV' },
      { name: 'FTC — How to recognize phishing', url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams' },
    ],
  },
  {
    id: 'fake-irs-back-taxes',
    title: 'Fake IRS back-taxes threat',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-10',
    region: 'nationwide',
    howItWorks:
      'A caller claiming to be an IRS agent says you owe back taxes and will be arrested, deported, or have your driver\'s license suspended unless you pay today — usually by gift card, wire, or cryptocurrency.',
    redFlags: [
      'A threatening phone call or voicemail about taxes',
      'Demand for payment via gift cards, wire, or crypto',
      'Threats of immediate arrest or deportation',
      'Caller refuses to send a letter or let you call back',
    ],
    whatToDo: [
      'Hang up — the IRS mails letters first, never calls with threats',
      'Never pay a tax bill with gift cards',
      'Verify any real balance at irs.gov/account or 1-800-829-1040',
      'Report impersonators at tigta.gov and to the FTC',
    ],
    sources: [
      { name: 'IRS — Tax scams and consumer alerts', url: 'https://www.irs.gov/newsroom/tax-scams-consumer-alerts' },
      { name: 'TIGTA — Report IRS impersonation', url: 'https://www.tigta.gov/reportcrime-misconduct' },
    ],
  },
  {
    id: 'romance-scam',
    title: 'Romance scam on dating apps and Facebook',
    category: 'online',
    severity: 'high',
    datePublished: '2026-04-08',
    region: 'international',
    howItWorks:
      'Someone you meet on Tinder, Match, or Facebook quickly moves the chat off the app, showers you with affection, and avoids video calls. Weeks or months later they face a medical emergency, a stuck shipment, or a business crisis and ask you to send money — often repeatedly.',
    redFlags: [
      'They always have an excuse not to video call or meet',
      'Profile photos look like a model or celebrity',
      'Deep emotional connection within days or weeks',
      'Any request for money, gift cards, or crypto',
    ],
    whatToDo: [
      'Never send money to someone you haven\'t met in person',
      'Reverse-image search their photo at images.google.com',
      'Tell a trusted friend or family member about the relationship',
      'Report the profile to the platform and to the FTC',
    ],
    sources: [
      { name: 'FTC — Romance scams', url: 'https://consumer.ftc.gov/articles/what-you-need-know-about-romance-scams' },
      { name: 'FBI — Romance scams', url: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/romance-scams' },
    ],
  },
  {
    id: 'tech-support-popup',
    title: 'Tech support pop-up with a "Microsoft" number',
    category: 'online',
    severity: 'high',
    datePublished: '2026-04-19',
    region: 'nationwide',
    howItWorks:
      'A full-screen pop-up with sirens and warning text takes over your browser, claiming your computer is infected. It gives a toll-free number for "Microsoft support." The person who answers asks for remote access, then charges hundreds of dollars to "fix" nothing.',
    redFlags: [
      'A pop-up you cannot close that plays alarm sounds',
      'A phone number on a security warning',
      'A request to install TeamViewer, AnyDesk, or UltraViewer',
      'Payment demanded by gift card, check, or wire',
    ],
    whatToDo: [
      'Close the browser (Alt + F4 on Windows, Command + Q on Mac)',
      'Never call a number that appears in a pop-up',
      'Restart the computer if the browser won\'t close',
      'Report the scam at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'Microsoft — Protect yourself from tech support scams', url: 'https://support.microsoft.com/en-us/windows/protect-yourself-from-tech-support-scams-2ebf91bd-f94c-2a8a-e541-f5c800d18435' },
      { name: 'FTC — Tech support scams', url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams' },
    ],
  },
  {
    id: 'utility-shutoff-gift-card',
    title: 'Utility shutoff threat with gift card demand',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-14',
    region: 'nationwide',
    howItWorks:
      'A caller says your electric, gas, or water is being shut off in the next hour for an unpaid bill, unless you run to a store and buy prepaid cards. Real utilities give written notice weeks in advance and never accept gift cards.',
    redFlags: [
      'A call saying service will be shut off today',
      'Instructions to buy gift cards at a nearby store',
      'Caller pressures you to stay on the phone during the trip',
      'Threat to call the police if you hang up',
    ],
    whatToDo: [
      'Hang up and call your utility using the number on your bill',
      'Never buy gift cards to pay a utility',
      'Never give your account number to an inbound caller',
      'Report the call at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'FTC — Utility scams', url: 'https://consumer.ftc.gov/articles/scammers-pretending-be-your-utility-company' },
      { name: 'Utilities United Against Scams', url: 'https://www.utilitiesunited.org/' },
    ],
  },
  {
    id: 'fake-apple-microsoft-alert',
    title: 'Fake Apple or Microsoft security alert',
    category: 'email',
    severity: 'medium',
    datePublished: '2026-04-11',
    region: 'nationwide',
    howItWorks:
      'An email or calendar invite warns that your iCloud, Microsoft 365, or Apple ID has been "compromised" and asks you to click a button to secure it. The linked page looks real and captures your password and two-factor code.',
    redFlags: [
      'Email sender is a strange address, not @apple.com or @microsoft.com',
      'Generic greeting like "Dear Customer"',
      'Button labeled "Secure my account now"',
      'Asks for your password plus the 6-digit code from your phone',
    ],
    whatToDo: [
      'Don\'t click — open the Apple or Microsoft app on your device instead',
      'Check sign-in history at appleid.apple.com or account.microsoft.com',
      'Change your password only on the official site',
      'Report phishing to reportphishing@apple.com or via Outlook\'s Report button',
    ],
    sources: [
      { name: 'Apple — Recognize and avoid phishing', url: 'https://support.apple.com/en-us/102568' },
      { name: 'Microsoft — Report phishing', url: 'https://support.microsoft.com/en-us/office/how-to-deal-with-phishing-in-outlook-com-0d882ea5-eedc-4bed-aebc-079ffa1105a3' },
    ],
  },
  {
    id: 'sweepstakes-you-won-fee',
    title: 'Sweepstakes "you won" fee scam',
    category: 'mail',
    severity: 'medium',
    datePublished: '2026-04-05',
    region: 'nationwide',
    howItWorks:
      'A letter or email says you\'ve won a car, cruise, or cash prize, and includes a real-looking check to "cover taxes and fees." You\'re told to deposit the check and wire back the fees. The check bounces days later, leaving you on the hook for the full amount.',
    redFlags: [
      'A prize notice from a contest you didn\'t enter',
      'A check included to cover your own taxes or fees',
      'Instructions to wire money back to "the promoter"',
      'A phone number that only voicemail answers',
    ],
    whatToDo: [
      'Never deposit a check and wire money back',
      'Legitimate prizes never require you to pay first',
      'Ask your bank to verify the check before acting',
      'Report the letter at reportfraud.ftc.gov and to USPIS',
    ],
    sources: [
      { name: 'FTC — Fake check scams', url: 'https://consumer.ftc.gov/articles/how-avoid-fake-check-scam' },
      { name: 'USPIS — Sweepstakes fraud', url: 'https://www.uspis.gov/news/scam-article/sweepstakes-fraud' },
    ],
  },
  {
    id: 'qr-code-parking-meter',
    title: 'QR code skimmer on parking meters and signs',
    category: 'in-person',
    severity: 'medium',
    datePublished: '2026-04-09',
    region: 'state-specific',
    howItWorks:
      'Scammers slap a fake QR code sticker over the real one on parking meters, restaurant tables, or event posters. Scanning it takes you to a lookalike payment site that steals your card number and often signs you up for recurring charges.',
    redFlags: [
      'A QR code sticker that looks freshly placed',
      'Payment site URL that\'s not the city or vendor you expected',
      'Site asks for extras like SSN, ZIP, or security questions',
      'No way to pay a real human nearby if something looks off',
    ],
    whatToDo: [
      'Look for signs of tampering before scanning any public QR code',
      'Type the parking or vendor website yourself instead',
      'Use a credit card (never debit) if you must pay via QR',
      'Report suspicious codes to the city or venue manager',
    ],
    sources: [
      { name: 'FBI — QR code scams', url: 'https://www.ic3.gov/Media/Y2022/PSA220118' },
      { name: 'FTC — QR code scams', url: 'https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information' },
    ],
  },
  {
    id: 'fake-job-check-washing',
    title: 'Fake job offer with check washing',
    category: 'email',
    severity: 'medium',
    datePublished: '2026-04-06',
    region: 'nationwide',
    howItWorks:
      'An "employer" hires you sight-unseen and mails a check to buy a home office setup or gift cards for "clients." The check clears at first, but bounces later — and you\'ve already wired or spent the money. Your account is now overdrawn.',
    redFlags: [
      'Job offer without an interview or video call',
      'First task: deposit a check and wire part back',
      'Salary that\'s much higher than similar roles',
      'Email from a free webmail address, not a company domain',
    ],
    whatToDo: [
      'Never deposit a check from an employer you haven\'t verified',
      'Look up the company on LinkedIn and call its real number',
      'Ask your bank to verify funds before spending from a new check',
      'Report to reportfraud.ftc.gov and ic3.gov',
    ],
    sources: [
      { name: 'FTC — Job scams', url: 'https://consumer.ftc.gov/articles/job-scams' },
      { name: 'BBB Scam Tracker', url: 'https://www.bbb.org/scamtracker' },
    ],
  },
  {
    id: 'reverse-mortgage-cold-call',
    title: 'Reverse mortgage cold call',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-02',
    region: 'nationwide',
    howItWorks:
      'A caller pitches a "no-risk" reverse mortgage to pull cash from your home, then pressures you into signing documents quickly. Some versions hand the title to a stranger; others load on hidden fees that drain your equity.',
    redFlags: [
      'An unsolicited reverse mortgage pitch by phone',
      'Pressure to sign same-day or before talking to family',
      'Talk of "free government money" or "no cost to you"',
      'A loan officer who avoids giving written disclosures',
    ],
    whatToDo: [
      'Hang up — never agree to a reverse mortgage over the phone',
      'Speak to a HUD-approved counselor at 1-800-569-4287 first',
      'Involve a trusted family member or attorney',
      'Report at hud.gov/reverseproblem and reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'HUD — Reverse mortgage information', url: 'https://www.hud.gov/program_offices/housing/sfh/hecm' },
      { name: 'CFPB — Reverse mortgage scams', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-reverse-mortgage-en-224/' },
    ],
  },
  {
    id: 'ai-voice-cloning-family',
    title: 'AI voice cloning of a family member',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-16',
    region: 'nationwide',
    howItWorks:
      'Scammers lift a short clip of a relative\'s voice from TikTok, Facebook, or a voicemail greeting and feed it to a voice-cloning service. They call you pretending to be that relative in distress, asking for money wired or handed off to a courier.',
    redFlags: [
      'A call from a number you don\'t recognize but a voice you do',
      'Background noise or distortion that cuts off key words',
      'Refusal to answer questions only the real person could',
      'Pressure to act before "things get worse"',
    ],
    whatToDo: [
      'Hang up and call the family member on a known number',
      'Agree on a family code word in advance',
      'Lower the visibility of your voice on social media',
      'Report voice-clone scams to ic3.gov and the FTC',
    ],
    sources: [
      { name: 'FTC — AI voice-cloning family emergency scam', url: 'https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes' },
      { name: 'AARP — Voice cloning scams', url: 'https://www.aarp.org/money/scams-fraud/info-2023/ai-voice-cloning.html' },
    ],
  },
  {
    id: 'zelle-friend-in-need',
    title: 'Zelle "friend in need" scam',
    category: 'text',
    severity: 'medium',
    datePublished: '2026-04-07',
    region: 'nationwide',
    howItWorks:
      'A friend\'s hacked email or social account sends a message asking you to send $300 by Zelle to cover an emergency — promising to repay tomorrow. Zelle transfers are instant and extremely difficult to claw back once sent.',
    redFlags: [
      'A "friend" messaging from a new email or number',
      'Money request via Zelle, Venmo, or Cash App only',
      'A story that can\'t be verified by phone',
      'Pressure to send right now',
    ],
    whatToDo: [
      'Call your friend using their known phone number first',
      'Never send instant-pay money based on a text alone',
      'If scammed, contact your bank immediately — some banks now reimburse Zelle fraud',
      'Report at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'CFPB — Peer-to-peer payment scams', url: 'https://www.consumerfinance.gov/about-us/blog/avoiding-fraud-when-using-peer-peer-payment-services/' },
      { name: 'Zelle — Report a scam', url: 'https://www.zellepay.com/pay-it-safe/report-a-scam' },
    ],
  },
  {
    id: 'medicare-brace-dna-kit',
    title: 'Fake Medicare brace or DNA kit offer',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-04',
    region: 'nationwide',
    howItWorks:
      'A robocall or booth at a health fair offers "free" back braces, knee braces, or cancer-screening DNA kits — all "covered by Medicare." In reality, they bill Medicare fraudulently using your number and you may get items you didn\'t need, or worse, lose access to the real benefit later.',
    redFlags: [
      'Offer of a free medical device "Medicare-approved"',
      'Caller asks for your Medicare number right away',
      'A doctor you\'ve never seen signs an order',
      'Pressure to accept before the "offer expires"',
    ],
    whatToDo: [
      'Decline — your doctor orders devices you actually need',
      'Never share your Medicare number with a stranger',
      'Check your Medicare summary notices for charges you didn\'t authorize',
      'Report to 1-800-HHS-TIPS and Senior Medicare Patrol (smpresource.org)',
    ],
    sources: [
      { name: 'HHS OIG — Medicare fraud', url: 'https://oig.hhs.gov/fraud/consumer-alerts/' },
      { name: 'Senior Medicare Patrol', url: 'https://www.smpresource.org/' },
    ],
  },
  {
    id: 'venmo-wrong-number-refund',
    title: 'Venmo wrong-number refund trick',
    category: 'text',
    severity: 'low',
    datePublished: '2026-03-30',
    region: 'nationwide',
    howItWorks:
      'You get a surprise Venmo or Cash App payment from a stranger, then a message saying it was a mistake and asking you to send it back. The "mistake" was paid with a stolen card — when the real owner disputes, Venmo pulls the money back, leaving you out the amount you sent.',
    redFlags: [
      'Unexpected payment from a stranger',
      'Frantic message asking you to refund right away',
      'Pressure to send the refund to a different account than the original',
      'Sender\'s profile is new or has no photo',
    ],
    whatToDo: [
      'Don\'t send money back yourself — ask the sender to cancel the original transfer',
      'Contact Venmo/Cash App support and let them handle it',
      'Enable two-factor on your payment apps',
      'Report at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'FTC — Payment app scams', url: 'https://consumer.ftc.gov/articles/you-spot-scam-payment-app' },
      { name: 'Venmo — Avoiding scams', url: 'https://help.venmo.com/hc/en-us/articles/217532487' },
    ],
  },
  {
    id: 'usps-package-held-redelivery',
    title: 'USPS "package held — schedule redelivery" text',
    category: 'text',
    severity: 'medium',
    datePublished: '2026-04-13',
    region: 'nationwide',
    howItWorks:
      'A text says a USPS package is waiting for you but needs an address confirmation or a small redelivery fee. The link leads to a fake USPS site that captures your address, card number, and sometimes your Social Security number.',
    redFlags: [
      'Text from an odd number or international code',
      'Link that\'s not usps.com',
      'A small fee requested by card or gift card',
      'Request for your full SSN or date of birth',
    ],
    whatToDo: [
      'Do not tap the link',
      'Track real packages by typing the tracking number at usps.com yourself',
      'Forward scam texts to 7726 and email to spam@uspis.gov',
      'Report at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'USPIS — Package delivery scams', url: 'https://www.uspis.gov/news/scam-article/smishing-package-tracking-text-scams' },
      { name: 'FTC — Package delivery phishing', url: 'https://consumer.ftc.gov/consumer-alerts/2020/11/scammers-are-using-covid-19-messages-scam-people' },
    ],
  },
  {
    id: 'fake-charity-disaster',
    title: 'Fake charity during disasters',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-03',
    region: 'nationwide',
    howItWorks:
      'After a hurricane, wildfire, or mass shooting, callers claim to represent the Red Cross, a fire department fund, or a GoFundMe for victims. They pressure you to donate by phone with a credit card or gift card. The money never reaches any real survivor.',
    redFlags: [
      'High-pressure phone call to donate now',
      'Charity name that sounds similar to a real one (e.g., "Red Crossing")',
      'Request to donate by gift card, wire, or crypto',
      'No paperwork or tax ID when you ask for one',
    ],
    whatToDo: [
      'Never donate from an inbound call — hang up and look up the charity',
      'Verify at charitynavigator.org or give.org',
      'Pay by credit card on the charity\'s real website',
      'Report at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'FTC — Charity scams', url: 'https://consumer.ftc.gov/articles/donating-safely-and-avoiding-scams' },
      { name: 'BBB Wise Giving', url: 'https://www.give.org/' },
    ],
  },
  {
    id: 'investment-crypto-guaranteed',
    title: 'Investment or crypto "guaranteed return" pitch',
    category: 'online',
    severity: 'high',
    datePublished: '2026-04-15',
    region: 'international',
    howItWorks:
      'An ad, Facebook message, or friend-of-a-friend on WhatsApp pitches an investment platform promising 3-10% returns per day. Early "profits" show up on a fake dashboard to lure more money. When you try to withdraw, you\'re told to pay taxes or fees first — and the platform eventually disappears.',
    redFlags: [
      'Any promise of guaranteed high returns',
      'Pressure to invest more after seeing paper "profits"',
      'Withdrawal blocked until you pay extra fees',
      'Platform isn\'t registered with the SEC or CFTC',
    ],
    whatToDo: [
      'Treat any guaranteed-return offer as a scam',
      'Check the firm and broker at brokercheck.finra.org and sec.gov/check-your-investment-professional',
      'Never move investments based on a DM from a stranger',
      'Report at sec.gov/tcr and reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'SEC — Investment scams', url: 'https://www.investor.gov/protect-your-investments/fraud' },
      { name: 'CFTC — Crypto fraud', url: 'https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/index.htm' },
    ],
  },
  {
    id: 'pig-butchering',
    title: 'Romance plus investment ("pig butchering") combo',
    category: 'online',
    severity: 'high',
    datePublished: '2026-04-15',
    region: 'international',
    howItWorks:
      'A stranger befriends you on a dating app or sends a "wrong number" text that turns into daily chats. After weeks of trust-building, they introduce a "secret" investment platform — often crypto — and walk you through small deposits that show big fake profits. Eventually they urge you to invest your life savings.',
    redFlags: [
      'A new online friend steering chat toward investing',
      'An investment platform they want you to use (and only that one)',
      'Small test withdrawals that work, followed by big deposits that don\'t',
      'Requests to move conversation to WhatsApp or Telegram',
    ],
    whatToDo: [
      'Stop contact and keep the message history',
      'Never invest because a romantic interest said so',
      'Tell a trusted family member or advisor before sending money',
      'Report at ic3.gov — the FBI tracks these rings',
    ],
    sources: [
      { name: 'FBI IC3 — Pig butchering', url: 'https://www.ic3.gov/Media/Y2023/PSA230918' },
      { name: 'FTC — Investment romance scams', url: 'https://consumer.ftc.gov/consumer-alerts/2022/09/investment-scams-are-top-way-thieves-steal-your-money' },
    ],
  },
  {
    id: 'home-repair-storm-chaser',
    title: 'Home repair / storm chaser',
    category: 'in-person',
    severity: 'high',
    datePublished: '2026-04-01',
    region: 'state-specific',
    howItWorks:
      'After a storm, contractors show up door-to-door offering cheap roof or driveway repairs. They ask for a large cash deposit, do shoddy work (or none), and vanish. Some trick homeowners into signing over insurance checks.',
    redFlags: [
      'A contractor who shows up uninvited right after a storm',
      'Cash-only or a huge upfront deposit',
      'Pressure to sign paperwork on the spot',
      'No license number, local address, or references',
    ],
    whatToDo: [
      'Never pay more than a small deposit up front',
      'Verify a contractor\'s license at your state contractor board',
      'Get three written estimates before signing anything',
      'Report at your state AG and reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'FTC — Home repair scams', url: 'https://consumer.ftc.gov/articles/hiring-contractor' },
      { name: 'NICB — Storm chasers', url: 'https://www.nicb.org/prevent-fraud-theft' },
    ],
  },
  {
    id: 'timeshare-exit-scam',
    title: 'Timeshare exit scam',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-03-28',
    region: 'nationwide',
    howItWorks:
      'A company calls or mails saying it can get you out of a timeshare contract — for a large upfront fee of $3,000 to $10,000. Once paid, they stall for months, do nothing, and disappear. Some even claim a fake buyer is ready.',
    redFlags: [
      'Unsolicited outreach about your timeshare',
      'Large upfront fee before any work',
      'Promises of a guaranteed exit or a ready buyer',
      'Pressure to sign a power-of-attorney form',
    ],
    whatToDo: [
      'Never pay large fees up front to exit a timeshare',
      'Contact your resort directly — most have an exit or resale desk',
      'Consult a lawyer licensed in the state your timeshare is in',
      'Report at reportfraud.ftc.gov and your state AG',
    ],
    sources: [
      { name: 'FTC — Timeshare exit scams', url: 'https://consumer.ftc.gov/articles/timeshares-vacation-clubs-and-related-scams' },
      { name: 'ARDA — Consumer resources', url: 'https://www.arda.org/consumers' },
    ],
  },
  {
    id: 'funeral-obituary-scam',
    title: 'Funeral scam calling after an obituary',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-03-27',
    region: 'nationwide',
    howItWorks:
      'Scammers read local obituaries and call the surviving spouse or adult children claiming the deceased had an unpaid debt, a "final expense" insurance policy, or a package owed to them. Families often pay to make the call stop during a painful time.',
    redFlags: [
      'A call about a debt or policy you\'ve never heard of',
      'Caller knows details pulled from the obituary',
      'Demand for payment within days of the death',
      'No written notice offered when you ask',
    ],
    whatToDo: [
      'Hang up — you are not responsible for a stranger\'s claim',
      'Ask any real creditor to send written proof of the debt',
      'Consult the estate attorney before paying anything',
      'Report at reportfraud.ftc.gov and to your state AG',
    ],
    sources: [
      { name: 'CFPB — Debt collection after a death', url: 'https://www.consumerfinance.gov/ask-cfpb/im-a-survivor-what-should-i-know-about-debt-collection-en-1467/' },
      { name: 'AARP — Obituary scams', url: 'https://www.aarp.org/money/scams-fraud/info-2019/obituary-scams.html' },
    ],
  },
  {
    id: 'utility-overpayment-refund',
    title: 'Utility "overpayment" refund scam',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-04',
    region: 'nationwide',
    howItWorks:
      'A caller claims you overpaid your electric or water bill and is processing a refund — but needs your routing and account number, or a prepaid card, to send it. Real utilities credit any overpayment to your next bill or mail a check.',
    redFlags: [
      'A call offering a surprise refund',
      'Request for your full bank routing and account number',
      'Asks you to load a prepaid card to "receive" the refund',
      'Caller refuses to let you call back',
    ],
    whatToDo: [
      'Hang up and call your utility at the number on your bill',
      'Never give banking info to an inbound caller',
      'Check your account online yourself',
      'Report at reportfraud.ftc.gov',
    ],
    sources: [
      { name: 'FTC — Refund and recovery scams', url: 'https://consumer.ftc.gov/articles/refund-and-recovery-scams' },
      { name: 'Utilities United Against Scams', url: 'https://www.utilitiesunited.org/' },
    ],
  },
  {
    id: 'student-loan-cosigner',
    title: 'Student loan forgiveness scam targeting cosigners',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-03-25',
    region: 'nationwide',
    howItWorks:
      'A caller tells a grandparent or parent who cosigned a student loan that the loan is being "forgiven" — for a small processing fee. Or they claim the cosigner is newly on the hook for a six-figure balance unless they pay a settlement today.',
    redFlags: [
      'Any fee to "apply for" loan forgiveness',
      'Caller asks for your FSA ID or Social Security number',
      'Pressure to decide before a "program deadline"',
      'Offer to "instantly" reduce the payment in half',
    ],
    whatToDo: [
      'Hang up — federal forgiveness programs never charge a fee',
      'Apply directly at studentaid.gov',
      'Verify private loans by calling your servicer from the bill',
      'Report at reportfraud.ftc.gov and studentaid.gov/fsa-tips',
    ],
    sources: [
      { name: 'Federal Student Aid — Avoid scams', url: 'https://studentaid.gov/resources/scams' },
      { name: 'FTC — Student loan scams', url: 'https://consumer.ftc.gov/articles/student-loan-forgiveness-scams' },
    ],
  },
  {
    id: 'veterans-benefits-claim',
    title: 'Veterans benefits claim scam',
    category: 'phone',
    severity: 'medium',
    datePublished: '2026-04-02',
    region: 'nationwide',
    howItWorks:
      'Callers claiming to be "VA claim specialists" offer to increase a veteran\'s disability rating or expedite a benefits claim for an upfront fee or a cut of the back pay. Charging for help with a VA claim is illegal unless the person is a VA-accredited representative.',
    redFlags: [
      'A caller who wants a fee or percentage of back pay',
      '"Guaranteed" approval of a higher rating',
      'Request for your VA file number or DD-214',
      'Pressure to sign a power of attorney same-day',
    ],
    whatToDo: [
      'Hang up — use a free VA-accredited VSO at va.gov/ogc/accreditation.asp',
      'Never pay up front for VA claim help',
      'File or check claims at va.gov',
      'Report at reportfraud.ftc.gov and the VA OIG',
    ],
    sources: [
      { name: 'VA — Scam and fraud alerts', url: 'https://news.va.gov/press-room/va-scam-and-fraud-alerts/' },
      { name: 'FTC — Veterans and military scams', url: 'https://consumer.ftc.gov/features/military-consumers' },
    ],
  },
  {
    id: 'craigslist-fake-buyer-overpayment',
    title: 'Craigslist or Marketplace fake-buyer overpayment',
    category: 'online',
    severity: 'medium',
    datePublished: '2026-03-29',
    region: 'nationwide',
    howItWorks:
      'You list a couch or bike online. A "buyer" sends a cashier\'s check for more than your asking price and explains the extra is for a mover they\'ll send. They ask you to wire the difference to the "mover." The check later bounces and you\'re out both the item and the wired money.',
    redFlags: [
      'Buyer offers more than your asking price',
      'Payment by cashier\'s check or mailed money order',
      'Request to forward part of the payment to a third party',
      'Buyer will "send movers" and never sees the item',
    ],
    whatToDo: [
      'Accept only cash, Zelle (that clears), or in-person payment',
      'Never wire money tied to a check you just deposited',
      'Wait for your bank to confirm a check is real — "available" isn\'t the same as cleared',
      'Report at reportfraud.ftc.gov and to the platform',
    ],
    sources: [
      { name: 'FTC — Fake check scams', url: 'https://consumer.ftc.gov/articles/how-avoid-fake-check-scam' },
      { name: 'BBB — Online marketplace scams', url: 'https://www.bbb.org/all/scamstudies/onlinemarketplace' },
    ],
  },
  {
    id: 'gift-card-refund-scam',
    title: 'Gift card refund scam',
    category: 'phone',
    severity: 'high',
    datePublished: '2026-04-21',
    region: 'nationwide',
    howItWorks:
      'After a first scam drains your account, a second caller claims to be the bank, Amazon, or a "fraud recovery agent" who can get your money back — as long as you buy more gift cards or share remote access to "reverse" the transfer. It\'s the same criminals coming back for a second bite.',
    redFlags: [
      'A follow-up call offering to recover money from an earlier scam',
      'Any request for more gift cards to "process the refund"',
      'Demand for remote access to your computer',
      'A new fee or "tax" to release your own money',
    ],
    whatToDo: [
      'Stop all contact — real refunds never require more payment',
      'Call your bank directly at the number on your card',
      'Never give remote access or buy more gift cards',
      'Report at reportfraud.ftc.gov and ic3.gov',
    ],
    sources: [
      { name: 'FTC — Refund and recovery scams', url: 'https://consumer.ftc.gov/articles/refund-and-recovery-scams' },
      { name: 'AARP — Gift card scams', url: 'https://www.aarp.org/money/scams-fraud/info-2019/gift-cards.html' },
    ],
  },
];

// ─── Lookup helpers ─────────────────────────────────────────────────────────

const CATEGORY_META: Record<Category, { label: string; icon: typeof Phone }> = {
  phone: { label: 'Phone call', icon: Phone },
  text: { label: 'Text message', icon: MessageSquare },
  email: { label: 'Email', icon: Mail },
  'in-person': { label: 'In person', icon: User },
  online: { label: 'Online', icon: Globe },
  mail: { label: 'Postal mail', icon: Inbox },
};

const SEVERITY_META: Record<
  Severity,
  { label: string; badge: string; dot: string }
> = {
  high: {
    label: 'High severity',
    badge:
      'bg-red-100 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-200 dark:border-red-900/60',
    dot: 'bg-red-500',
  },
  medium: {
    label: 'Medium severity',
    badge:
      'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-900/60',
    dot: 'bg-amber-500',
  },
  low: {
    label: 'Low severity',
    badge:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-800',
    dot: 'bg-slate-400',
  },
};

const REGION_LABEL: Record<Region, string> = {
  nationwide: 'Nationwide',
  'state-specific': 'State-specific',
  international: 'International',
};

// ─── Alert card ─────────────────────────────────────────────────────────────

function AlertCard({ alert }: { alert: ScamAlert }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const CategoryIcon = CATEGORY_META[alert.category].icon;
  const severity = SEVERITY_META[alert.severity];

  const handleShare = async () => {
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}/scam-alerts#${alert.id}`
        : `/scam-alerts#${alert.id}`;
    const shareText = `Scam alert from TekSure: ${alert.title}. Read more: ${url}`;
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Clipboard blocked — fail quietly
    }
  };

  const formattedDate = new Date(alert.datePublished + 'T00:00:00').toLocaleDateString(
    'en-US',
    { month: 'short', day: 'numeric', year: 'numeric' },
  );

  return (
    <Card
      id={alert.id}
      className="scroll-mt-24 border-2 transition-shadow hover:shadow-md"
    >
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-start gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
            aria-hidden="true"
          >
            <CategoryIcon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className={`border text-xs font-semibold uppercase tracking-wide ${severity.badge}`}
              >
                <span
                  className={`mr-1.5 inline-block h-2 w-2 rounded-full ${severity.dot}`}
                  aria-hidden="true"
                />
                {severity.label}
              </Badge>
              <Badge variant="outline" className="text-xs font-medium">
                {CATEGORY_META[alert.category].label}
              </Badge>
              <Badge variant="outline" className="text-xs font-medium">
                {REGION_LABEL[alert.region]}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Reported {formattedDate}
              </span>
            </div>
            <CardTitle className="text-lg sm:text-xl leading-snug">
              {alert.title}
            </CardTitle>
          </div>
          <BookmarkButton
            type="tool"
            slug={`scam-alert-${alert.id}`}
            title={alert.title}
            url={`/scam-alerts#${alert.id}`}
            size="sm"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            How it works
          </h3>
          <p className="text-base leading-relaxed">{alert.howItWorks}</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-5 text-base font-semibold text-red-800 transition-colors hover:bg-red-100 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-950/70"
        >
          {open ? 'Hide details' : 'See red flags and what to do'}
          <ChevronDown
            className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div className="grid gap-5 md:grid-cols-2 pt-2">
            <div className="rounded-xl border border-red-200 bg-red-50/60 p-4 dark:border-red-900/60 dark:bg-red-950/20">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-red-800 dark:text-red-200">
                Red flags
              </h3>
              <ul className="space-y-2">
                {alert.redFlags.map((flag) => (
                  <li key={flag} className="flex gap-2 text-base leading-relaxed">
                    <AlertTriangle
                      className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/20">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
                What to do
              </h3>
              <ul className="space-y-2">
                {alert.whatToDo.map((step) => (
                  <li key={step} className="flex gap-2 text-base leading-relaxed">
                    <Check
                      className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Sources
              </h3>
              <ul className="space-y-1.5">
                {alert.sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base text-[#2A5FCC] underline underline-offset-2 hover:text-[#234FB0] dark:text-blue-300"
                    >
                      {src.name}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          <Button
            asChild
            variant="outline"
            className="min-h-14 text-base"
          >
            <a
              href="https://reportfraud.ftc.gov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag className="mr-2 h-5 w-5" aria-hidden="true" />
              Report this type
              <ExternalLink className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={handleShare}
            className="min-h-14 text-base"
          >
            <Share2 className="mr-2 h-5 w-5" aria-hidden="true" />
            {copied ? 'Link copied!' : 'Share with family'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ScamAlertFeed() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | Category>('all');
  const [severity, setSeverity] = useState<'all' | Severity>('all');
  const [region, setRegion] = useState<'all' | Region>('all');
  const [dateRange, setDateRange] = useState<DateRange>('all');

  const filteredAlerts = useMemo(() => {
    const now = new Date('2026-04-23T00:00:00').getTime();
    const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    const MONTH_MS = 30 * 24 * 60 * 60 * 1000;

    return ALERTS.filter((a) => {
      if (category !== 'all' && a.category !== category) return false;
      if (severity !== 'all' && a.severity !== severity) return false;
      if (region !== 'all' && a.region !== region) return false;

      if (dateRange !== 'all') {
        const published = new Date(a.datePublished + 'T00:00:00').getTime();
        const delta = now - published;
        if (dateRange === 'week' && delta > WEEK_MS) return false;
        if (dateRange === 'month' && delta > MONTH_MS) return false;
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = [
          a.title,
          a.howItWorks,
          a.redFlags.join(' '),
          a.whatToDo.join(' '),
          a.category,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
  }, [search, category, severity, region, dateRange]);

  const trendingAlerts = useMemo(
    () =>
      [...ALERTS]
        .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
        .filter((a) => a.severity === 'high')
        .slice(0, 3),
    [],
  );

  const resetFilters = () => {
    setSearch('');
    setCategory('all');
    setSeverity('all');
    setRegion('all');
    setDateRange('all');
  };

  const relatedTools = [
    { to: '/tools/is-this-real', label: 'Is This Real?', desc: 'Paste a message and get an instant check' },
    { to: '/tools/scam-iq-test', label: 'Scam IQ Test', desc: 'Test your scam-spotting skills' },
    { to: '/tools/scam-simulator', label: 'Scam Simulator', desc: 'Practice spotting scams safely' },
    { to: '/tools/refund-and-return-helper', label: 'Refund & Return Helper', desc: 'Step-by-step if you already paid' },
    { to: '/tools/social-media-safety', label: 'Social Media Safety', desc: 'Lock down your Facebook and Instagram' },
  ];

  const faqs = [
    {
      q: 'How often is this feed updated?',
      a: 'We add new alerts every week, usually on Fridays. We also revisit older alerts when the FTC, FBI, or AARP post fresh reports. Scroll through or use the "this week" filter to see what\'s newest.',
    },
    {
      q: 'What if a scam I experienced isn\'t listed here?',
      a: 'You can still report it. The FTC takes all reports at reportfraud.ftc.gov, and the FBI\'s Internet Crime Complaint Center is at ic3.gov. Reporting helps investigators — even if you don\'t get your money back, you may help stop the next victim.',
    },
    {
      q: 'Can I report one to TekSure so you add it to the feed?',
      a: 'Yes. Post a note in our community at /community/ask with what happened (no personal info needed). We read every post and use them to decide which scams to write up next.',
    },
    {
      q: 'Who writes these alerts?',
      a: 'The TekSure team summarizes each alert in plain language from public reports by the FTC, FBI IC3, AARP Fraud Watch, BBB Scam Tracker, and official agency advisories. We link every source so you can dig into the original if you want more detail.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Current Scam Alerts — What's Hitting Seniors Right Now | TekSure"
        description="A weekly-updated feed of 30+ scams targeting seniors: Medicare swaps, grandparent deepfakes, fake IRS calls, tech support pop-ups, package texts, and more. Plain-language walkthroughs, red flags, and what to do — with FTC, FBI, and AARP sources."
        path="/scam-alerts"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-amber-500 text-white px-4 pt-24 pb-16 sm:pt-28">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <AlertTriangle className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Current Scam Alerts
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            What&apos;s hitting seniors right now. Updated weekly.
          </p>
          <p className="mt-4 text-sm text-white/75 max-w-xl mx-auto">
            Summaries from the FTC, FBI IC3, AARP Fraud Watch, and BBB Scam Tracker — in plain
            English, with red flags and what to do.
          </p>
        </div>
      </section>

      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* ── Trending card (sticky on desktop) ────────────────────────────── */}
        <section aria-labelledby="trending-heading">
          <Card className="border-2 border-amber-300 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/50">
                  <TrendingUp
                    className="h-5 w-5 text-amber-700 dark:text-amber-300"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle id="trending-heading" className="text-lg sm:text-xl">
                  Most reported this week
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {trendingAlerts.map((alert, i) => (
                  <li key={alert.id} className="flex items-start gap-3 text-base">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">
                      {i + 1}
                    </span>
                    <a
                      href={`#${alert.id}`}
                      className="font-medium text-foreground underline-offset-2 hover:underline"
                    >
                      {alert.title}
                    </a>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* ── Filters ──────────────────────────────────────────────────────── */}
        <section aria-labelledby="filters-heading" className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="filters-heading" className="text-2xl font-bold">
              Browse alerts
            </h2>
            <p className="text-sm text-muted-foreground">
              Showing <strong>{filteredAlerts.length}</strong> of {ALERTS.length} alerts
            </p>
          </div>

          <div className="rounded-2xl border-2 bg-card p-4 sm:p-6 space-y-4 shadow-sm">
            {/* Category pill row */}
            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  active={category === 'all'}
                  onClick={() => setCategory('all')}
                  label="All"
                />
                {(Object.keys(CATEGORY_META) as Category[]).map((c) => {
                  const Icon = CATEGORY_META[c].icon;
                  return (
                    <FilterPill
                      key={c}
                      active={category === c}
                      onClick={() => setCategory(c)}
                      label={CATEGORY_META[c].label}
                      icon={<Icon className="h-4 w-4" aria-hidden="true" />}
                    />
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="severity"
                  className="mb-1.5 block text-sm font-semibold text-muted-foreground"
                >
                  Severity
                </label>
                <Select
                  value={severity}
                  onValueChange={(v) => setSeverity(v as 'all' | Severity)}
                >
                  <SelectTrigger id="severity" className="min-h-14 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All severities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="date-range"
                  className="mb-1.5 block text-sm font-semibold text-muted-foreground"
                >
                  Date
                </label>
                <Select
                  value={dateRange}
                  onValueChange={(v) => setDateRange(v as DateRange)}
                >
                  <SelectTrigger id="date-range" className="min-h-14 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All time</SelectItem>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="region"
                  className="mb-1.5 block text-sm font-semibold text-muted-foreground"
                >
                  Region
                </label>
                <Select
                  value={region}
                  onValueChange={(v) => setRegion(v as 'all' | Region)}
                >
                  <SelectTrigger id="region" className="min-h-14 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All regions</SelectItem>
                    <SelectItem value="nationwide">Nationwide</SelectItem>
                    <SelectItem value="state-specific">State-specific</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="search"
                  className="mb-1.5 block text-sm font-semibold text-muted-foreground"
                >
                  Search
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Try: Medicare, text, IRS…"
                    className="min-h-14 pl-10 text-base"
                  />
                </div>
              </div>
            </div>

            {(category !== 'all' ||
              severity !== 'all' ||
              region !== 'all' ||
              dateRange !== 'all' ||
              search.trim()) && (
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  onClick={resetFilters}
                  className="min-h-11 text-sm"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* ── Alert list ──────────────────────────────────────────────────── */}
        <section aria-labelledby="alerts-heading" className="space-y-4">
          <h2 id="alerts-heading" className="sr-only">
            Alerts
          </h2>

          {filteredAlerts.length === 0 ? (
            <Card className="border-2 border-dashed">
              <CardContent className="py-12 text-center space-y-3">
                <p className="text-lg font-semibold">No alerts match those filters</p>
                <p className="text-muted-foreground">
                  Try clearing a filter or widening the date range.
                </p>
                <Button onClick={resetFilters} className="min-h-14 text-base">
                  Clear all filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
          )}
        </section>

        {/* ── Subscribe stub ──────────────────────────────────────────────── */}
        <section aria-labelledby="subscribe-heading">
          <Card className="border-2 border-[#2A5FCC]/30 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 dark:border-blue-900/40">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#2A5FCC]/10 p-2 dark:bg-blue-900/40">
                  <BellRing
                    className="h-5 w-5 text-[#2A5FCC] dark:text-blue-300"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle id="subscribe-heading" className="text-lg sm:text-xl">
                  Get these weekly in your inbox
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base">
                A short Friday email with the newest scam alerts, red flags, and what to do.
                Free. No ads. Easy to unsubscribe.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="subscribe-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="subscribe-email"
                  type="email"
                  placeholder="your.name@example.com"
                  className="min-h-14 text-base flex-1"
                  disabled
                />
                <Button
                  type="submit"
                  className="min-h-14 text-base bg-[#2A5FCC] hover:bg-[#234FB0]"
                  disabled
                >
                  Sign me up
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Email signup is coming soon. In the meantime, you can bookmark this page or
                follow our <Link to="/weekly-tips" className="underline underline-offset-2">Weekly Tips</Link>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Sources + disclaimer ────────────────────────────────────────── */}
        <section aria-labelledby="sources-heading">
          <Alert className="border-slate-300 bg-slate-50 dark:bg-slate-900/40">
            <AlertTitle id="sources-heading" className="text-base font-bold">
              Where these alerts come from
            </AlertTitle>
            <AlertDescription className="mt-2 space-y-2 text-sm leading-relaxed">
              <p>
                Sources: FTC Consumer Advice, FBI Internet Crime Complaint Center (IC3),
                AARP Fraud Watch Network, BBB Scam Tracker, and official advisories from
                agencies like the SSA, IRS, VA, HUD, and state attorneys general.
              </p>
              <p>
                We summarize from public reports. If you were targeted, report at{' '}
                <a
                  href="https://reportfraud.ftc.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-[#2A5FCC] dark:text-blue-300"
                >
                  reportfraud.ftc.gov
                </a>{' '}
                or{' '}
                <a
                  href="https://www.ic3.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-[#2A5FCC] dark:text-blue-300"
                >
                  ic3.gov
                </a>
                . For free personal support, call AARP Fraud Watch at{' '}
                <strong>1-877-908-3360</strong>.
              </p>
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Related tools ────────────────────────────────────────────────── */}
        <section aria-labelledby="related-heading" className="space-y-4">
          <h2 id="related-heading" className="text-2xl font-bold">
            Keep going — related tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.to}
                to={tool.to}
                className="block rounded-xl border-2 bg-card p-4 transition-colors hover:border-[#2A5FCC] hover:bg-[#2A5FCC]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5FCC]"
              >
                <p className="text-base font-semibold mb-1">{tool.label}</p>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="space-y-4">
          <h2 id="faq-heading" className="text-2xl font-bold">
            Questions people ask
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {item.q.startsWith('Can I report') ? (
                    <>
                      Yes. Post a note in our community at{' '}
                      <Link
                        to="/community/ask"
                        className="underline underline-offset-2 text-[#2A5FCC] dark:text-blue-300"
                      >
                        /community/ask
                      </Link>{' '}
                      with what happened (no personal info needed). We read every post and use
                      them to decide which scams to write up next.
                    </>
                  ) : (
                    item.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ─── Filter pill helper ─────────────────────────────────────────────────────

function FilterPill({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5FCC] focus-visible:ring-offset-2 ${
        active
          ? 'border-[#2A5FCC] bg-[#2A5FCC] text-white'
          : 'border-border bg-card text-foreground hover:border-[#2A5FCC] hover:text-[#2A5FCC]'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
