import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  RotateCcw,
  ShoppingCart,
  Smartphone,
  Repeat,
  AlertCircle,
  ShieldAlert,
  Plane,
  Utensils,
  Ticket,
  Store,
  Stethoscope,
  CheckCircle2,
  ChevronLeft,
  Phone,
  FileText,
  Copy,
  ExternalLink,
  Flag,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
  XCircle,
  ListChecks,
  MessageSquare,
  CreditCard,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { useToast } from '@/hooks/use-toast';

/* ── Types ─────────────────────────────────── */
type ScenarioId =
  | 'online-purchase'
  | 'app-store'
  | 'google-play'
  | 'forgot-cancel'
  | 'billing-error'
  | 'scam-charge'
  | 'stolen-card'
  | 'travel'
  | 'restaurant'
  | 'event-ticket'
  | 'in-person-return'
  | 'medical-bill';

interface ResourceLink {
  label: string;
  url: string;
  note?: string;
}

interface Scenario {
  id: ScenarioId;
  emoji: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  headerBlurb: string;
  steps: { title: string; description: string }[];
  tips?: string[];
  resources?: ResourceLink[];
}

/* ── Scenario data ─────────────────────────── */
const SCENARIOS: Scenario[] = [
  /* ── 1. Online purchase ── */
  {
    id: 'online-purchase',
    emoji: '',
    icon: ShoppingCart,
    title: 'Online purchase',
    tagline: 'Amazon, eBay, Walmart, Target, Etsy — item never came, broken, or wrong.',
    headerBlurb:
      'Most big online stores have a self-serve return path in your account. The trick is knowing where to click — and what words to use if the first request gets denied.',
    steps: [
      {
        title: 'Find the order in your account',
        description:
          'On Amazon, go to "Your Account" → "Your Orders" → find the specific item. On eBay it\'s "My eBay" → "Purchases." On Walmart/Target, sign in and open "Order history."',
      },
      {
        title: 'Click "Return or replace items"',
        description:
          'Every major store has a button like this next to each order. If you don\'t see it, the return window may have closed — but keep reading, you still have options.',
      },
      {
        title: 'Pick the reason that fits best',
        description:
          'Common reasons: "arrived damaged," "wrong item sent," "item description was inaccurate," "no longer needed." If the item was defective or wrong, pick a seller-fault reason — it usually means free return shipping.',
      },
      {
        title: 'Choose refund to original payment (not store credit)',
        description:
          'Amazon and others will often push "Amazon credit" because it\'s faster for them. Pick the option that goes back to your credit card, PayPal, or bank. Credit card refunds give you the most protection later.',
      },
      {
        title: 'Print the return label or choose a drop-off',
        description:
          'Amazon often offers free drop-off at UPS, Kohl\'s, Whole Foods, or Staples with no box needed. Walmart and Target let you return items in-store. Keep the drop-off receipt until the refund lands.',
      },
      {
        title: 'Track the refund timeline',
        description:
          'Most refunds post 3–5 business days after the store receives the item. Amazon sometimes refunds on scan at a drop-off location. Check your card statement, not your email — emails can be delayed.',
      },
      {
        title: 'If denied, escalate inside the same app',
        description:
          'Use "Contact Us" chat or phone. Have your order number ready. Say: "I\'d like to speak with a supervisor about a denied return." Stay polite and firm. Escalation almost always moves things forward.',
      },
    ],
    tips: [
      'Keep screenshots of the listing (especially the photos and description) before contacting support — some sellers edit listings after the fact.',
      'On eBay, if the seller refuses, open an "Item Not As Described" case in the Resolution Center. eBay usually sides with buyers.',
      'Etsy sellers are often small businesses — a friendly message first usually solves it faster than opening a case.',
    ],
    resources: [
      { label: 'Amazon Returns Center', url: 'https://www.amazon.com/returns', note: 'Start any return here' },
      { label: 'eBay Resolution Center', url: 'https://resolutioncenter.ebay.com' },
      { label: 'Walmart Returns & Refunds', url: 'https://www.walmart.com/help/article/returns-refunds/' },
      { label: 'Target Return Policy', url: 'https://www.target.com/c/return-policy/-/N-4sr9x' },
      { label: 'Etsy Help — Refunds', url: 'https://help.etsy.com/hc/en-us/articles/115013328108' },
    ],
  },

  /* ── 2. App Store ── */
  {
    id: 'app-store',
    emoji: '',
    icon: Smartphone,
    title: 'App Store purchase (Apple)',
    tagline: 'Accidental tap, kid charged you, subscription you didn\'t mean to buy.',
    headerBlurb:
      'Apple almost always refunds accidental App Store purchases if you report them within a few days. You don\'t call Apple for this — you use a special web page.',
    steps: [
      {
        title: 'Open reportaproblem.apple.com on a computer or phone browser',
        description:
          'This is the only place to request App Store refunds. Not the App Store app, not iTunes. Use Safari, Chrome, or any browser and type reportaproblem.apple.com.',
      },
      {
        title: 'Sign in with your Apple ID',
        description:
          'Use the same Apple ID that was charged — usually the one on the device where the purchase happened. If you share Family Sharing, the purchase may be under a family member\'s ID.',
      },
      {
        title: 'Find the charge and click "Report"',
        description:
          'You\'ll see a list of recent purchases. Click the one you want refunded, then click "Report a Problem" next to it.',
      },
      {
        title: 'Pick the reason that fits',
        description:
          'Common reasons: "I didn\'t authorize this purchase," "The item doesn\'t work as expected," "My child made this purchase." Then write one or two honest sentences — Apple reviews these by hand.',
      },
      {
        title: 'Wait up to 48 hours for a decision',
        description:
          'Apple usually replies by email within two days. Accidental purchases and first-time requests are almost always approved. The refund goes back to your original payment method.',
      },
    ],
    tips: [
      'If the charge was an in-app subscription, also cancel the subscription: Settings → tap your name → Subscriptions. A refund doesn\'t cancel it automatically.',
      'If Apple denies the refund, you can reply to the email and ask for a supervisor review. Persistence helps.',
    ],
    resources: [
      { label: 'Report a Problem (Apple)', url: 'https://reportaproblem.apple.com', note: 'Official Apple refund page' },
      { label: 'Manage your Apple subscriptions', url: 'https://support.apple.com/en-us/HT202039' },
    ],
  },

  /* ── 3. Google Play ── */
  {
    id: 'google-play',
    emoji: '',
    icon: Smartphone,
    title: 'Google Play purchase',
    tagline: 'App, game, or in-app charge on an Android phone.',
    headerBlurb:
      'Google Play has a two-tier refund window: within 48 hours is automatic for most purchases. After that it takes a few more clicks — but it\'s still doable.',
    steps: [
      {
        title: 'Go to play.google.com',
        description:
          'Open a browser on your computer or phone and go to play.google.com. Make sure you\'re signed in with the Google account that made the purchase.',
      },
      {
        title: 'Click your profile picture → "Payments & subscriptions" → "Budget & order history"',
        description:
          'Find the charge in the list. If you don\'t see it there, it may be under a different Google account.',
      },
      {
        title: 'Within 48 hours? Click "Refund"',
        description:
          'If the purchase is under 48 hours old, there\'s usually a simple "Refund" button. One click and the money goes back to your original payment method.',
      },
      {
        title: 'After 48 hours? Click "Request a refund"',
        description:
          'Explain briefly why you want the refund (accidental purchase, kid purchase, doesn\'t work, etc.). Google reviews by hand.',
      },
      {
        title: 'After 7 days? Contact the app\'s developer directly',
        description:
          'Google\'s self-serve window closes at 7 days. After that, you\'ll see a "Contact developer" option. Every app\'s Play Store listing has a developer email near the bottom.',
      },
      {
        title: 'Still no luck? Dispute with your credit card',
        description:
          'If the app is clearly a scam or didn\'t deliver what was promised, you can call your credit card company and open a dispute. Reference your Play order ID.',
      },
    ],
    resources: [
      { label: 'Google Play order history', url: 'https://play.google.com/store/account/orderhistory' },
      { label: 'Google Play refund policies', url: 'https://support.google.com/googleplay/answer/2479637' },
    ],
  },

  /* ── 4. Forgot-to-cancel subscription ── */
  {
    id: 'forgot-cancel',
    emoji: '',
    icon: Repeat,
    title: 'Subscription I forgot to cancel',
    tagline: 'Streaming, magazine, gym, free trial that auto-renewed.',
    headerBlurb:
      'You have more options than companies want you to think. "I thought I canceled" and "I didn\'t know this was auto-renewing" are valid reasons for a refund — and for a credit card dispute if the company won\'t help.',
    steps: [
      {
        title: 'Contact the merchant first — ask politely',
        description:
          'Many companies will quietly refund the most recent charge if you ask once. Call or use their chat. Say: "I didn\'t intend to renew. Could you refund the most recent charge and cancel the subscription?"',
      },
      {
        title: 'Cancel the subscription so it doesn\'t charge again',
        description:
          'Get this in writing — an email confirmation or chat transcript. Some companies keep billing even after you "cancel," so save proof.',
      },
      {
        title: 'If they say no, escalate to a supervisor',
        description:
          'Stay calm. Say: "I understand the policy. I\'m asking for a one-time courtesy refund because I didn\'t intend to renew. Can I speak with a supervisor?" Many give in at this step.',
      },
      {
        title: 'Still no? File a credit card dispute',
        description:
          'Under the Fair Credit Billing Act, you have 60 days from the statement date to dispute a charge. Call the number on the back of your card and say: "I\'d like to dispute a charge for a subscription I did not authorize to renew."',
      },
      {
        title: 'Keep the records',
        description:
          'Save the cancellation email, the dispute reference number, and any call notes (who you talked to, what they said, and when). This protects you if the charge ever returns.',
      },
    ],
    tips: [
      'Free-trial traps: reminders go to the email you signed up with, which is often an old or unused address. Check there first.',
      'Apps bought through Apple or Google: cancel on your phone, not on the app\'s website. See the App Store / Google Play scenarios.',
      'Some state laws (California, New York, Illinois) require "easy cancel" — one-click cancellation for online sign-ups.',
    ],
    resources: [
      { label: 'CFPB — How to dispute charges', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-i-have-a-problem-or-complaint-with-my-credit-card-bill-en-62/' },
      { label: 'FTC — Unwanted subscriptions', url: 'https://consumer.ftc.gov/articles/negative-option-offers' },
      { label: 'TekSure Subscription Auditor', url: '/tools/subscription-auditor' },
    ],
  },

  /* ── 5. Billing error ── */
  {
    id: 'billing-error',
    emoji: '',
    icon: AlertCircle,
    title: 'Billing error',
    tagline: 'Charged twice, wrong amount, or a charge you don\'t recognize.',
    headerBlurb:
      'A mystery charge isn\'t always a scam — companies use surprising billing names. But a real billing error is one of the strongest refund cases there is. Banks are required by law to investigate.',
    steps: [
      {
        title: 'Google the charge name exactly as it appears',
        description:
          'Many legitimate companies bill under odd names. "STUDIOS ALL DAY" has shown up as Amazon Prime Video. "SXM*SIRIUSXM" is SiriusXM. Look up the name in quotes — you\'ll often find forum posts explaining it.',
      },
      {
        title: 'Check with family who share the card',
        description:
          'Before calling the bank, ask anyone else on the account. Family Sharing, kids\' game purchases, and spouse subscriptions often explain the "mystery."',
      },
      {
        title: 'Call the number on the back of your card',
        description:
          'If you still can\'t identify the charge, call your bank or credit card company. Ask to "dispute a charge" or "report an unauthorized transaction." They\'ll open a case — and issue a provisional credit during the investigation.',
      },
      {
        title: 'For duplicate charges, call the merchant first',
        description:
          'A duplicate is usually a payment processor glitch. The merchant can reverse it within minutes. If they won\'t, go back to step 3.',
      },
      {
        title: 'For wrong amount, get it in writing',
        description:
          'Take a photo of the receipt. If the charge is higher than the receipt, the merchant has to refund the difference. If they refuse, dispute it with the card.',
      },
      {
        title: 'Consider reissuing the card if it\'s likely a scam',
        description:
          'If the charge came out of nowhere, request a new card number. Your bank can send one in 3–7 days and the old number stops working — stopping any follow-up charges.',
      },
    ],
    resources: [
      { label: 'FTC — Dispute a credit card charge', url: 'https://consumer.ftc.gov/articles/disputing-credit-card-charges' },
      { label: 'What\'s that charge? (community database)', url: 'https://whatsthatcharge.com' },
      { label: 'Report fraud to the FTC', url: 'https://reportfraud.ftc.gov' },
    ],
  },

  /* ── 6. Scam charge ── */
  {
    id: 'scam-charge',
    emoji: '',
    icon: ShieldAlert,
    title: 'Scam charge',
    tagline: 'Unauthorized purchase, fake invoice, or someone used your card.',
    headerBlurb:
      "You are not on the hook for charges you didn't authorize. Federal law caps your liability at $50 for credit cards (often $0 with zero-liability policies). Speed matters — the faster you report, the stronger your protection.",
    steps: [
      {
        title: 'Call your card company immediately',
        description:
          'Use the number on the back of the card — do NOT use any number from a suspicious email or text. Say the exact words: "I have an unauthorized charge and I need to report fraud." Not "dispute." Fraud triggers stronger protection.',
      },
      {
        title: 'Have the card reissued',
        description:
          'Ask them to cancel the current card and send a new one. The scammer can\'t charge again on the old number. Most banks overnight replacements for fraud cases.',
      },
      {
        title: 'Check every other account',
        description:
          'Log into your bank, credit card, PayPal, Venmo, Zelle, and Apple Pay / Google Pay. Look at transactions for the last 60 days. If you find other unfamiliar charges, report each one.',
      },
      {
        title: 'Change passwords on key accounts',
        description:
          'Start with email, then bank, then Amazon. Use a strong, unique password (or a password manager). Turn on two-factor authentication wherever you can.',
      },
      {
        title: 'Report to the FTC',
        description:
          'File at reportfraud.ftc.gov. Keep the confirmation number. Your bank may ask for it, and it helps law enforcement track scam patterns.',
      },
      {
        title: 'Consider a credit freeze',
        description:
          'If someone used your card, they may have other information too. A credit freeze (free, at all three bureaus) blocks new accounts being opened in your name.',
      },
    ],
    tips: [
      'Fake-invoice scams often arrive by email with a PDF attachment. Call the company directly using a number from their real website — never the number on the invoice itself.',
      'If the scammer called you and pressured you into "refunding" them, that\'s a refund scam. The money you sent is likely gone, but call your bank anyway — act fast.',
    ],
    resources: [
      { label: 'Report Fraud to the FTC', url: 'https://reportfraud.ftc.gov' },
      { label: 'FBI IC3 (internet crime)', url: 'https://www.ic3.gov' },
      { label: 'Free Credit Freeze — Equifax', url: 'https://www.equifax.com/personal/credit-report-services/credit-freeze/' },
      { label: 'Free Credit Freeze — Experian', url: 'https://www.experian.com/freeze/center.html' },
      { label: 'Free Credit Freeze — TransUnion', url: 'https://www.transunion.com/credit-freeze' },
    ],
  },

  /* ── 7. Stolen card ── */
  {
    id: 'stolen-card',
    emoji: '',
    icon: CreditCard,
    title: 'Stolen or lost card',
    tagline: 'Physical card missing, or you know the number was stolen.',
    headerBlurb:
      'Move fast. Every minute a stolen card is active is another minute of possible charges. The faster you call, the more protection you have.',
    steps: [
      {
        title: 'Call the card company right now',
        description:
          'Use the number on a recent statement, your online account, or the back of another card from the same bank. Tell them: "My card is stolen. Please freeze it and issue a new one."',
      },
      {
        title: 'Ask them to report it as FRAUD, not a dispute',
        description:
          'Fraud means someone else used it. That wording triggers the strongest protections. "Dispute" is for when you recognize the merchant but disagree with the charge.',
      },
      {
        title: 'Request a new card number, not just a new card',
        description:
          'Some banks re-issue the same number with a new expiration — that won\'t stop the thief. Ask specifically for a NEW card number.',
      },
      {
        title: 'Review the last 60 days of charges',
        description:
          'Go line by line. Dispute every unfamiliar one. If it happened on one card, check ALL your cards and bank accounts — thieves often test multiple numbers.',
      },
      {
        title: 'Freeze your credit at all three bureaus',
        description:
          'Equifax, Experian, TransUnion. It\'s free, takes 5 minutes each, and stops anyone from opening new accounts in your name. You can unfreeze anytime.',
      },
      {
        title: 'File a police report if needed',
        description:
          'For large losses, insurance claims, or identity theft, a police report helps. Get a case number and save it with your records.',
      },
    ],
    tips: [
      'If the card had recurring charges (streaming, utilities, subscriptions), update those with the new number. Missed payments from unreported cards can trigger late fees.',
      'Apple Pay, Google Pay, and Samsung Pay use "virtual" card numbers — even if your phone is stolen and unlocked, the real card number isn\'t exposed.',
    ],
    resources: [
      { label: 'Free Annual Credit Report', url: 'https://www.annualcreditreport.com', note: 'Check for new accounts in your name' },
      { label: 'Identity Theft Recovery Plan (FTC)', url: 'https://www.identitytheft.gov' },
      { label: 'Report Fraud to the FTC', url: 'https://reportfraud.ftc.gov' },
    ],
  },

  /* ── 8. Travel ── */
  {
    id: 'travel',
    emoji: '',
    icon: Plane,
    title: 'Travel / airline / hotel',
    tagline: 'Canceled flight, changed plans, hotel overcharged.',
    headerBlurb:
      'Airlines do not get to keep your money when they cancel on you — federal rules require a full refund, not just a credit. Knowing the exact rule makes the call much shorter.',
    steps: [
      {
        title: 'Know the 24-hour rule for flights',
        description:
          'U.S. Department of Transportation: any flight booked directly with a U.S. airline, for travel to or from the U.S., is fully refundable within 24 hours of booking — regardless of fare type. No exceptions. If they say otherwise, they\'re wrong.',
      },
      {
        title: 'Flight canceled or significantly changed? Demand a refund, not a credit',
        description:
          'Under DOT rules, if the airline cancels or "significantly changes" your flight, you\'re entitled to a full cash refund. Say: "I understand federal rules require a refund, not a voucher. Please process the refund to my original form of payment."',
      },
      {
        title: 'Hotel: check the cancellation window',
        description:
          'Most hotels allow penalty-free cancellation up to 24–72 hours before check-in. Always cancel via the confirmation email or hotel app so you have timestamped proof. Get a cancellation number.',
      },
      {
        title: 'Booked through a third party (Expedia, Booking)?',
        description:
          'They handle your refund, not the hotel. Expect slower service. If the third party refuses and the hotel would have refunded directly, dispute the charge with your credit card.',
      },
      {
        title: 'Trip insurance: file the claim fast',
        description:
          'Most policies require claims within 20–30 days of the covered event. You\'ll need receipts, a reason the trip was canceled, and documentation (medical note, cancellation notice, etc.).',
      },
      {
        title: 'Escalate to DOT if the airline stalls',
        description:
          'If an airline refuses a refund you\'re entitled to, file a complaint at transportation.gov/airconsumer. DOT takes these seriously and airlines know it — many respond within days of a DOT inquiry.',
      },
    ],
    tips: [
      'Credit card "trip protection" benefits may cover what the airline won\'t. Check your card\'s travel benefits page.',
      'Basic Economy / saver fares are usually non-refundable BUT the 24-hour rule still applies.',
      'Hotel resort fees, parking, and daily "service fees" are often negotiable at checkout — ask politely.',
    ],
    resources: [
      { label: 'DOT Aviation Consumer Complaint', url: 'https://www.transportation.gov/airconsumer/file-consumer-complaint' },
      { label: 'DOT — Refunds', url: 'https://www.transportation.gov/individuals/aviation-consumer-protection/refunds' },
      { label: 'U.S. DOT 24-hour rule explained', url: 'https://www.transportation.gov/individuals/aviation-consumer-protection/tarmac-delay-rule' },
    ],
  },

  /* ── 9. Restaurant / service ── */
  {
    id: 'restaurant',
    emoji: '',
    icon: Utensils,
    title: 'Restaurant or service',
    tagline: 'Tip charged twice, wrong food, poor service you already paid for.',
    headerBlurb:
      'Restaurants and in-person services are almost always handled in person, not by phone. Your most powerful move is to speak to the manager, calmly, while still on-site or the same day.',
    steps: [
      {
        title: 'Ask for the manager, not the server',
        description:
          'Servers can\'t remove charges on their own. Managers can. Stay calm, speak plainly: "There\'s a problem with my bill I\'d like to resolve."',
      },
      {
        title: 'Be specific about what you want',
        description:
          'Vague complaints get vague answers. Say exactly: "I was charged $15 for a dish I sent back," or "My tip was added twice — once by me on the slip and once auto-charged."',
      },
      {
        title: 'For double-tip charges, show the receipt',
        description:
          'This is a common error. The auto-gratuity on large groups sometimes doesn\'t zero out the tip line. Compare the receipt to your card statement — most managers will reverse it on the spot.',
      },
      {
        title: 'Didn\'t get resolved in person? Email the GM',
        description:
          'Most restaurants have a general manager email or a corporate contact form. Be polite, include photos of the receipt and bill, and ask for a specific amount back. Expect a reply within a week.',
      },
      {
        title: 'Last resort: credit card chargeback',
        description:
          'If the business refuses and the charge is clearly wrong, call your card company. "Services not as described" is a valid dispute code. You\'ll need the receipt and a brief written explanation.',
      },
    ],
    tips: [
      'Yelp and Google reviews are NOT refund channels. Many businesses ignore online rants but respond to direct, polite complaints.',
      'For delivery apps (DoorDash, Uber Eats), use the in-app "Help" or "Report an issue" — refunds are automatic for missing items if reported quickly.',
      'Photograph the meal and the receipt before you leave the table. It makes every follow-up conversation faster.',
    ],
  },

  /* ── 10. Concert / event ticket ── */
  {
    id: 'event-ticket',
    emoji: '',
    icon: Ticket,
    title: 'Concert or event ticket',
    tagline: 'Show canceled, rescheduled, or you can\'t make it.',
    headerBlurb:
      'Canceled events: you\'re owed a refund. Rescheduled events: you usually have a refund option IF you ask. Buyer\'s remorse: harder, but not impossible.',
    steps: [
      {
        title: 'Event canceled? Refund is automatic',
        description:
          'Ticketmaster, AXS, SeatGeek, and most platforms refund to your original payment method automatically within 30 days of a cancellation. Check your card — no action needed most of the time.',
      },
      {
        title: 'Rescheduled event? Log in and look for a refund option',
        description:
          'Rescheduled shows often have a hidden refund window — usually 30 days from the announcement. Open your ticket in the platform\'s app, look for "Refund" or "Request refund." If you don\'t see it, call support.',
      },
      {
        title: 'Can\'t make it? Try selling first',
        description:
          'Most major platforms let you list your ticket for resale in-app. You set the price. This is often faster than a refund fight and may get you close to face value.',
      },
      {
        title: 'Bought from a third-party reseller?',
        description:
          'StubHub, Vivid Seats, etc. each have their own guarantee. Canceled events: refund in 7–10 days. Poor seats or fake tickets: file a claim immediately, with photos.',
      },
      {
        title: 'Scam tickets? Dispute with your card',
        description:
          'If the tickets don\'t scan at the venue or you never received them, file a credit card dispute the same day. Take a photo of the "denied entry" message from the venue.',
      },
    ],
    tips: [
      'Never buy tickets from a random Facebook post or text — fake tickets are everywhere. Use Ticketmaster, AXS, StubHub, or the venue\'s official site only.',
      'Keep every confirmation email until AFTER the show. Platforms sometimes delete old records from your account.',
    ],
    resources: [
      { label: 'Ticketmaster Refund Help', url: 'https://help.ticketmaster.com/hc/en-us/categories/360001775451-Refunds' },
      { label: 'StubHub FanProtect Guarantee', url: 'https://www.stubhub.com/promise/' },
    ],
  },

  /* ── 11. In-person store return ── */
  {
    id: 'in-person-return',
    emoji: '',
    icon: Store,
    title: 'In-person store return',
    tagline: 'Best Buy, Walmart, Target, Costco, Home Depot — bring it back.',
    headerBlurb:
      'Return policies vary a lot by store and product. Know the window, bring what you can, and don\'t assume "final sale" means no options — sometimes it\'s negotiable at the manager level.',
    steps: [
      {
        title: 'Check the receipt or order email for the return window',
        description:
          'Target: 90 days for most items (120 days with REDcard). Walmart: 90 days. Best Buy: 15 days standard, 60 days for My Best Buy Plus/Total members, 14–60 for electronics. Costco: lifetime except electronics (90 days). Apple: 14 days.',
      },
      {
        title: 'Bring the original packaging if you have it',
        description:
          'For electronics especially, missing packaging may mean a restocking fee (usually 15%) or refusal. If you opened it, keep the box — even if flattened — until you\'re sure you\'re keeping the item.',
      },
      {
        title: 'No receipt? Try these options',
        description:
          'Most stores can look up purchases by card number, phone number, or your store-account email. Worst case, they may offer store credit at the current lowest selling price.',
      },
      {
        title: 'Gift receipt? Use it instead',
        description:
          'Gift receipts hide the price but prove the purchase. Bring the item and gift receipt — you\'ll usually get store credit at the full original price.',
      },
      {
        title: '"Final sale" items? Ask politely',
        description:
          'Clearance and final-sale items are technically non-returnable — but if the item is defective, many managers will swap or refund as a courtesy. The worst they can say is no.',
      },
      {
        title: 'Know your electronics rules',
        description:
          'Opened computers, tablets, and cell phones often have shorter windows (14–15 days) and a restocking fee. Video games and movies are often "exchange only" once opened.',
      },
    ],
    tips: [
      'Costco is legendary for returns — even months or years later, especially for non-electronics. "Just try it" is real advice there.',
      'Trader Joe\'s accepts returns on food you didn\'t like, no receipt needed. Most stores will match their niceness — worth asking.',
      'Some stores (Home Depot, Lowe\'s) will take plant returns for up to a year with proof of purchase.',
    ],
    resources: [
      { label: 'Target Return Policy', url: 'https://www.target.com/c/return-policy/-/N-4sr9x' },
      { label: 'Walmart Return Policy', url: 'https://www.walmart.com/help/article/return-policy/' },
      { label: 'Best Buy Return Policy', url: 'https://www.bestbuy.com/site/help-topics/return-exchange-policy/pcmcat260800050014.c' },
      { label: 'Costco Return Policy', url: 'https://customerservice.costco.com/app/answers/answer_view/a_id/1191' },
    ],
  },

  /* ── 12. Medical bill ── */
  {
    id: 'medical-bill',
    emoji: '',
    icon: Stethoscope,
    title: 'Medical bill',
    tagline: 'Duplicate charge, in-network visit billed as out-of-network, surprise bill.',
    headerBlurb:
      'Medical billing errors are common — studies estimate 30–80% of bills contain mistakes. Don\'t pay until you understand exactly what you\'re being charged for. You have more room to push back than you think.',
    steps: [
      {
        title: 'Request a fully itemized bill',
        description:
          'The summary bill isn\'t enough. Call the hospital billing office and ask for an "itemized statement" — every charge line, with the CPT code for each service. By law, they have to provide it.',
      },
      {
        title: 'Compare the itemized bill to your insurance EOB',
        description:
          'EOB = Explanation of Benefits, from your insurance. It shows what was billed, what was covered, and what you owe. Match it line-by-line to the hospital bill. Common errors: duplicate charges, services you didn\'t receive, wrong dates.',
      },
      {
        title: 'Call insurance first — was it processed in-network?',
        description:
          'If you were at an in-network facility but got a bill as out-of-network, this is often a coding error. Ask insurance to reprocess. The federal No Surprises Act (2022) protects you from most out-of-network surprise bills.',
      },
      {
        title: 'Call the provider\'s billing office with specific corrections',
        description:
          'Say: "The charge on line X is for [service] but I received [different service]. Please correct and re-bill." Get the rep\'s name and a confirmation number.',
      },
      {
        title: 'If denied, appeal in writing',
        description:
          'Every insurance denial has an appeal deadline (usually 60–180 days). Write a clear letter stating the claim number, why it should be covered, and what you\'re asking for. Include medical records if relevant.',
      },
      {
        title: 'Consider a medical billing advocate',
        description:
          'For big bills, a professional advocate (National Association of Healthcare Advocates) can review your bills and negotiate. Some charge a percentage of savings, others a flat fee.',
      },
    ],
    tips: [
      'Medical credit cards (CareCredit etc.) have promo rates that balloon to 20%+ retroactively if not paid in full by the deadline. Read the fine print before signing.',
      'The No Surprises Act (effective 2022) limits what you can be billed for emergency care and out-of-network care at in-network facilities.',
      'Nonprofit hospitals are required by law to offer financial assistance. Ask for the "charity care" or "financial assistance" application.',
    ],
    resources: [
      { label: 'CMS — No Surprises Act', url: 'https://www.cms.gov/nosurprises' },
      { label: 'CFPB — Medical Debt', url: 'https://www.consumerfinance.gov/consumer-tools/medical-debt/' },
      { label: 'Patient Advocate Foundation', url: 'https://www.patientadvocate.org' },
      { label: 'Dollar For — Charity Care Help (free)', url: 'https://dollarfor.org' },
      { label: 'TekSure EOB Decoder', url: '/tools/eob-decoder' },
    ],
  },
];

/* ── FAQ data ──────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'What if the company is out of business?',
    a: 'Call your credit card company and explain. Under the Fair Credit Billing Act, you can still dispute charges for goods or services you never received — even if the company has closed. You have up to 60 days from the statement date. If you paid with a debit card, the protections are weaker, but ask your bank anyway — many offer similar courtesies. For bankruptcies, you can also file a claim with the bankruptcy court, though payouts can take years.',
  },
  {
    q: 'How long should I wait for a refund before escalating?',
    a: 'As a rule: 5 business days for most returns (starting when the item is received back). 10 business days for a refund promised after a support case. 30 days for travel refunds under DOT rules. If those windows pass, call or chat once more — ask for a supervisor and a reference number. If the second contact doesn\'t resolve it, escalate to your credit card company.',
  },
  {
    q: 'Can I get a refund on a gift card I bought?',
    a: 'Generally no — most stores treat gift cards as final sale. The exceptions: if the card was defective, never activated, or if you bought it as part of a scam (someone told you to buy cards as payment — that\'s a scam and you should call the card issuer immediately). For scam cases, contact the gift card company within 24 hours — they sometimes freeze unspent balances.',
  },
  {
    q: 'What if I\'m on a fixed income and can\'t wait for a refund?',
    a: 'When you file a credit card dispute, the card company issues a PROVISIONAL credit right away — money back in your account during the investigation. If the dispute is resolved in your favor, the provisional credit becomes permanent. Your bank is required to start this process within a few days of your complaint. Call, don\'t email — ask specifically for a provisional credit while the dispute is investigated.',
  },
  {
    q: 'The company says "all sales final" — do I still have options?',
    a: 'Yes, several. "All sales final" is a store policy, not a law. Your credit card\'s consumer protections (Fair Credit Billing Act) override store policies for things like defective products or services not delivered as described. You can also complain to the BBB, your state AG, or the FTC. Final-sale policies are strongest for clearance items in new condition — they\'re weakest for defective or misrepresented goods.',
  },
  {
    q: 'What if the refund lands on a closed card?',
    a: 'By law, your bank has to forward the refund to you — either by check or to a new card. Call your bank, give them the refund amount and merchant, and ask how they\'ll route it. Keep the original dispute case number in case the merchant refuses the second time.',
  },
  {
    q: 'Can I dispute a charge I paid months ago?',
    a: 'Credit card disputes have a 60-day window from the statement date for most kinds of disputes. After that, the bank has more discretion but is no longer required to help. For fraud (unauthorized charges), the window is usually longer — up to a year in many cases. Call as soon as you notice — they\'ll tell you what still applies.',
  },
];

/* ── Letter template ──────────────────────── */
const LETTER_TEMPLATE = `[Your Name]
[Your Address]
[City, State ZIP]
[Your Email] · [Your Phone]

[Date]

[Company Name]
Billing / Customer Service
[Company Address]

Re: Refund Request — Account / Order #[ORDER OR ACCOUNT NUMBER]

To whom it may concern,

On [DATE], I was charged $[AMOUNT] for [ITEM OR SERVICE] (order / reference #[NUMBER]). This charge is [incorrect / unauthorized / for goods never received / for a service not delivered as described].

Specifically: [ONE OR TWO SENTENCES DESCRIBING WHAT HAPPENED]

I am requesting a full refund of $[AMOUNT] to my original payment method within 15 business days of the date of this letter.

If this matter is not resolved by [DATE 15 DAYS OUT], I will file a formal dispute with my credit card company under the Fair Credit Billing Act and submit complaints to:
  - The Better Business Bureau (bbb.org)
  - The [YOUR STATE] Attorney General\'s consumer protection office
  - The Federal Trade Commission (reportfraud.ftc.gov)

I have attached copies of the receipt, order confirmation, and any related correspondence.

Thank you for your prompt attention to this matter.

Sincerely,
[Your Name]
`;

/* ── Golden script ────────────────────────── */
const GOLDEN_SCRIPT_LINES = [
  {
    speaker: 'You',
    line: '"Hi, my name is [Your Name] and my account number is [number]. I\'m calling because I need a refund."',
  },
  {
    speaker: 'You',
    line: '"I was charged $[amount] on [date] for [item/service]. I\'d like a full refund because [specific reason: item was defective, service wasn\'t delivered, I was double-charged, etc.]."',
  },
  {
    speaker: 'You',
    line: '[Pause and let them speak. Don\'t interrupt. Write down their name.]',
  },
  {
    speaker: 'If they say no',
    line: '"I understand that\'s your policy. I\'d like to speak to a supervisor about making an exception in this case, please."',
  },
  {
    speaker: 'If the supervisor says no',
    line: '"I understand. I\'ll need to file a dispute with my credit card company under the Fair Credit Billing Act. Before we end the call, please give me the reference number for this conversation."',
  },
  {
    speaker: 'Before hanging up',
    line: '"Can I have the case or reference number for this call? And what\'s your full name again?"',
  },
];

/* ── Never-do card ────────────────────────── */
const NEVER_DO = [
  'Never pay a company up front to "process your refund." Real refunds are always free.',
  'Never give remote access to anyone claiming they need to "install software" to refund you. That\'s a scam — they\'ll empty your accounts.',
  'Never click links in emails or texts claiming to be refund notifications. Go directly to the company\'s website instead.',
  'Never send gift cards, crypto, or wire money to "resolve" a refund issue. Real refunds never ask for payment in those forms.',
  'Never share your full Social Security Number for a refund. A legitimate refund doesn\'t require your SSN.',
  'Never share your full card number to a caller who says they\'re "calling to refund you." If a refund is owed, it goes back to the original card automatically.',
  'Never rush. Scammers push urgency. Real companies will give you time to think.',
];

/* ── Escalation ladder ────────────────────── */
const ESCALATION_LADDER = [
  { step: 'Talk to the merchant directly', detail: 'Phone, chat, or email. Most refunds happen here. Save the reference number.' },
  { step: 'Escalate to a supervisor or store manager', detail: 'Politely but firmly ask for the next level up. Many disputes move at this step.' },
  { step: 'File a BBB complaint at bbb.org', detail: 'Companies track their BBB rating — many respond within a week of a complaint.' },
  { step: 'Open a credit card dispute', detail: 'Call the number on the back of your card. Federal law (FCBA) gives you 60 days from the statement.' },
  { step: 'Contact your State Attorney General', detail: 'Each state has a consumer protection office. They investigate patterns of misconduct.' },
  { step: 'Small claims court', detail: 'Usually under $5,000–$10,000 depending on state. No lawyer needed. Filing fees are low.' },
  { step: 'Class action awareness', detail: 'Check classaction.org to see if a case is already underway for the company — you may be entitled to opt in.' },
];

/* ── External resources ───────────────────── */
const GLOBAL_RESOURCES: ResourceLink[] = [
  { label: 'Federal Trade Commission — Report Fraud', url: 'https://reportfraud.ftc.gov', note: 'The main federal channel for scams and fraud.' },
  { label: 'CFPB — Submit a Complaint', url: 'https://www.consumerfinance.gov/complaint/', note: 'For banks, cards, loans, credit bureaus, debt collectors.' },
  { label: 'DOT — Aviation Consumer Complaint', url: 'https://www.transportation.gov/airconsumer/file-consumer-complaint', note: 'For airline refund disputes.' },
  { label: 'Better Business Bureau', url: 'https://www.bbb.org', note: 'Lookup and complaints.' },
  { label: 'State Attorneys General Directory', url: 'https://www.naag.org/find-my-ag/', note: 'Find your state\'s consumer protection office.' },
  { label: 'USA.gov — State Consumer Protection', url: 'https://www.usa.gov/state-consumer', note: 'Alternate directory by state.' },
];

/* ── Main component ────────────────────────── */
export default function RefundAndReturnHelper() {
  const [selectedId, setSelectedId] = useState<ScenarioId | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const selected = selectedId ? SCENARIOS.find(s => s.id === selectedId) ?? null : null;

  function handleSelect(id: ScenarioId) {
    setSelectedId(id);
    setCheckedSteps({});
    setTimeout(() => {
      const el = document.getElementById('refund-detail');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function handleReset() {
    setSelectedId(null);
    setCheckedSteps({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleStep(key: string) {
    setCheckedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleCopy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: `${label} copied`,
        description: 'Paste it into an email, a text document, or a print dialog.',
      });
    } catch {
      toast({
        title: 'Could not copy',
        description: 'Try selecting the text manually and copying with Ctrl+C (or Cmd+C on Mac).',
        variant: 'destructive',
      });
    }
  }

  const checkedCount = selected
    ? selected.steps.filter((_, i) => checkedSteps[`${selected.id}-${i}`]).length
    : 0;

  return (
    <>
      <SEOHead
        title="Refund & Return Helper | TekSure"
        description="A step-by-step walkthrough for getting refunds from online purchases, subscriptions, billing errors, scam charges, travel, medical bills, and in-person returns. Written for real people, not lawyers."
        path="/tools/refund-and-return-helper"
      />
      <main id="main-content" className="container py-10 sm:py-12 min-h-[80vh] max-w-3xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="refund-and-return-helper"
              title="Refund & Return Helper"
              url="/tools/refund-and-return-helper"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg mb-5">
            <div className="relative">
              <DollarSign className="h-12 w-12" aria-hidden="true" />
              <RotateCcw className="h-5 w-5 absolute -bottom-1 -right-1 bg-white text-emerald-700 rounded-full p-0.5 border-2 border-white" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Getting Your Money Back — A Step-by-Step Guide
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You paid for something that's broken, unused, or a scam. Here's how to get refunded — without the runaround.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <Badge variant="secondary" className="text-sm">No login needed</Badge>
            <Badge variant="secondary" className="text-sm">Plain English</Badge>
            <Badge variant="secondary" className="text-sm">12 common situations</Badge>
          </div>
        </div>

        {/* ── Encouragement banner ── */}
        {!selected && (
          <Alert className="mb-8 border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
            <Lightbulb className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
            <AlertTitle className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
              You have more options than companies want you to think.
            </AlertTitle>
            <AlertDescription className="text-base text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
              Federal laws, credit card protections, and a few plain-spoken phone calls resolve most refund problems. Pick the situation below and we'll walk you through it.
            </AlertDescription>
          </Alert>
        )}

        {/* ── Scenario picker ── */}
        {!selected && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              What happened?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {SCENARIOS.map(s => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelect(s.id)}
                    className="group text-left w-full rounded-2xl border-2 border-border bg-card hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all p-5 min-h-[7.5rem]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-3xl leading-none" aria-hidden="true">
                        {s.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                          <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Detail view ── */}
        {selected && (
          <div id="refund-detail">
            {/* Back button */}
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReset}
              className="mb-4 gap-2 text-base"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              Pick a different situation
            </Button>

            {/* Detail header */}
            <Card className="mb-6 border-2 border-emerald-300 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-5xl leading-none" aria-hidden="true">
                    {selected.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-emerald-900 dark:text-emerald-200">
                      {selected.title}
                    </h2>
                    <p className="text-base text-emerald-900/90 dark:text-emerald-100/90 mb-2 font-medium">
                      {selected.tagline}
                    </p>
                    <p className="text-base text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed">
                      {selected.headerBlurb}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Steps */}
            <Card className="mb-6 border-2">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    Your step-by-step walkthrough
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {checkedCount} of {selected.steps.length} done
                  </span>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Tick each one off as you finish. You can stop at any step that solves the problem — no need to do them all.
                </p>
                <ol className="space-y-3">
                  {selected.steps.map((step, i) => {
                    const key = `${selected.id}-${i}`;
                    const checked = !!checkedSteps[key];
                    return (
                      <li key={key}>
                        <label
                          htmlFor={key}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors min-h-[4rem] ${
                            checked
                              ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-800'
                              : 'bg-background border-border hover:bg-muted/40'
                          }`}
                        >
                          <Checkbox
                            id={key}
                            checked={checked}
                            onCheckedChange={() => toggleStep(key)}
                            className="mt-1 h-5 w-5"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white font-bold text-xs">
                                {i + 1}
                              </span>
                              <span className={`text-base font-semibold leading-snug ${checked ? 'text-emerald-900 dark:text-emerald-100' : 'text-foreground'}`}>
                                {step.title}
                              </span>
                            </div>
                            <p className={`text-base leading-relaxed pl-8 ${checked ? 'text-emerald-900/90 dark:text-emerald-100/90' : 'text-muted-foreground'}`}>
                              {step.description}
                            </p>
                          </div>
                        </label>
                      </li>
                    );
                  })}
                </ol>
              </CardContent>
            </Card>

            {/* Tips */}
            {selected.tips && selected.tips.length > 0 && (
              <Card className="mb-6 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-900 dark:text-amber-200">
                    <Lightbulb className="h-6 w-6" aria-hidden="true" />
                    Quick Tips
                  </h3>
                  <ul className="space-y-3">
                    {selected.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-base text-amber-900 dark:text-amber-100 leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Per-scenario resources */}
            {selected.resources && selected.resources.length > 0 && (
              <Card className="mb-6">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                    Useful links for this situation
                  </h3>
                  <ul className="space-y-3">
                    {selected.resources.map((r, i) => {
                      const isExternal = /^https?:\/\//i.test(r.url) || r.url.startsWith('mailto:') || r.url.startsWith('sms:');
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowUpRight className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                            {isExternal ? (
                              <a
                                href={r.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                              >
                                {r.label}
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              </a>
                            ) : (
                              <Link to={r.url} className="text-base font-semibold text-primary hover:underline">
                                {r.label}
                              </Link>
                            )}
                            {r.note && <p className="text-sm text-muted-foreground mt-0.5">{r.note}</p>}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Action row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" onClick={handleReset} className="gap-2 min-h-14 text-base">
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                Pick a different situation
              </Button>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
         * Universal resource section — always visible underneath
         * ───────────────────────────────────────────────────────────── */}

        {/* ── Golden Script ── */}
        <Card className="mb-6 border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-200">
              <Phone className="h-6 w-6" aria-hidden="true" />
              The Golden Script — what to actually say on the phone
            </h3>
            <p className="text-base text-blue-900/80 dark:text-blue-100/80 mb-5 leading-relaxed">
              Polite but firm wins refunds. Read this out loud once before you call — it gets you in the right tone.
            </p>
            <ol className="space-y-4">
              {GOLDEN_SCRIPT_LINES.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-600 text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-blue-900/70 dark:text-blue-100/70 uppercase tracking-wide mb-1">
                      {line.speaker}
                    </p>
                    <p className="text-base text-blue-900 dark:text-blue-100 leading-relaxed italic">
                      {line.line}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-5 border-t border-blue-200 dark:border-blue-800">
              <Button
                variant="outline"
                onClick={() =>
                  handleCopy(
                    GOLDEN_SCRIPT_LINES.map((l, i) => `${i + 1}. ${l.speaker}: ${l.line}`).join('\n\n'),
                    'Golden script',
                  )
                }
                className="gap-2 min-h-12"
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy the script
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ── Credit card dispute rules (FCBA) ── */}
        <Card className="mb-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" aria-hidden="true" />
              Credit card dispute rules — know your rights
            </h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              The Fair Credit Billing Act (FCBA) is a federal law that protects credit card users. Here's what it actually gives you:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>60 days from the statement date</strong> to dispute most charges. After that, disputes become harder.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>Provisional credit</strong> — your money goes back during the investigation. Ask for it by name.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>Put it in writing</strong> — most card companies accept online forms, a letter, or a bank chat. Keep the confirmation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>The bank has to investigate</strong> and reach a decision usually within 90 days. If they don't, the provisional credit becomes permanent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>You can't be punished</strong> for disputing. The card company can't report the disputed amount as late, and your credit score is protected during the investigation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base leading-relaxed"><strong>Debit cards have weaker protections</strong> under a different law (EFTA). Still worth disputing — but credit cards are safer for online purchases.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Never do this ── */}
        <Card className="mb-6 border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-900 dark:text-red-200">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              Never do these — refund scams to avoid
            </h3>
            <p className="text-base text-red-900/80 dark:text-red-100/80 mb-4 leading-relaxed">
              Scammers prey on people trying to get refunds. If anyone asks you to do one of these, stop immediately.
            </p>
            <ul className="space-y-3">
              {NEVER_DO.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-red-900 dark:text-red-100 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── Escalation ladder ── */}
        <Card className="mb-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Flag className="h-6 w-6 text-primary" aria-hidden="true" />
              The escalation ladder
            </h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Start at the top. Most refunds resolve by step 2 or 3. The bottom steps are rarely needed — but it's good to know they exist.
            </p>
            <ol className="space-y-3">
              {ESCALATION_LADDER.map((rung, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl border-2 border-border bg-background">
                  <span className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-foreground">{rung.step}</p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-1">{rung.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* ── Template letter ── */}
        <Card className="mb-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
              Template letter — for written disputes
            </h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Written letters work. They create a paper trail, trigger formal response timelines, and look serious. Fill in the bracketed parts and send by email (ask for a read receipt) or certified mail.
            </p>
            <div className="rounded-xl border-2 border-border bg-muted/30 p-4 mb-4">
              <pre className="text-sm sm:text-base whitespace-pre-wrap font-mono text-foreground leading-relaxed">
{LETTER_TEMPLATE}
              </pre>
            </div>
            <Button
              variant="outline"
              onClick={() => handleCopy(LETTER_TEMPLATE, 'Template letter')}
              className="gap-2 min-h-12"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy the letter template
            </Button>
          </CardContent>
        </Card>

        {/* ── Global resources ── */}
        <Card className="mb-6">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
              Official complaint channels
            </h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              These are government and nonprofit complaint hubs. Filing here creates a formal record and sometimes prompts company action.
            </p>
            <ul className="space-y-3">
              {GLOBAL_RESOURCES.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowUpRight className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      {r.label}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {r.note && <p className="text-sm text-muted-foreground mt-0.5">{r.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── FAQ ── */}
        <Card className="mb-6">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
              Questions people ask us
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold min-h-14">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* ── Related tools ── */}
        <Card className="mb-6 border-2 border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20 dark:border-emerald-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              Related TekSure tools
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                to="/tools/is-this-real"
                className="block rounded-xl border-2 border-border bg-background hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors p-4 min-h-[4.5rem]"
              >
                <p className="font-semibold text-base mb-1">Is This Real?</p>
                <p className="text-sm text-muted-foreground">Verify emails, deals, texts, and photos before you act.</p>
              </Link>
              <Link
                to="/tools/scam-simulator"
                className="block rounded-xl border-2 border-border bg-background hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors p-4 min-h-[4.5rem]"
              >
                <p className="font-semibold text-base mb-1">Scam Simulator</p>
                <p className="text-sm text-muted-foreground">Practice spotting scams in a safe, fake environment.</p>
              </Link>
              <Link
                to="/tools/subscription-auditor"
                className="block rounded-xl border-2 border-border bg-background hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors p-4 min-h-[4.5rem]"
              >
                <p className="font-semibold text-base mb-1">Subscription Auditor</p>
                <p className="text-sm text-muted-foreground">Find forgotten subscriptions quietly draining your account.</p>
              </Link>
              <Link
                to="/guides?category=Safety"
                className="block rounded-xl border-2 border-border bg-background hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors p-4 min-h-[4.5rem]"
              >
                <p className="font-semibold text-base mb-1">Safety Guides</p>
                <p className="text-sm text-muted-foreground">Deep-dive articles on scams, fraud, and staying safe online.</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── Golden closer ── */}
        <Card className="border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
          <CardContent className="p-5 flex gap-3">
            <Lightbulb className="h-6 w-6 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-200 mb-1">One last thing</p>
              <p className="text-base text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
                Being polite works better than being angry. Every rep you talk to has the power to escalate your request — or quietly drop it. Stay calm, stick to the facts, write down names and case numbers, and keep asking until you get the answer you need. The law is on your side more often than you might think.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
