import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Landmark,
  Building2,
  Smartphone,
  Camera,
  Send,
  Bell,
  Lock,
  Fingerprint,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  ExternalLink,
  Lightbulb,
  HelpCircle,
  FileText,
  ArrowRight,
  Users,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Banking App Setup
 * ------------------------------------------------------------
 * Senior-friendly walkthrough for Chase, Wells Fargo, Bank of
 * America, Capital One, US Bank, Citi, and credit union apps.
 * Covers enrollment, biometric login, day-one tasks, mobile
 * check deposit, Zelle (with scam warnings), transfer limits,
 * eStatements, 2FA, alerts, phishing defense, and real scam
 * scripts — plus an FAQ.
 * ────────────────────────────────────────────────────────────── */

type BankId = 'chase' | 'wells' | 'boa' | 'capital-one' | 'us-bank' | 'citi' | 'credit-union';

interface BankInfo {
  id: BankId;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  appName: string;
  enroll: string;
  download: string;
  biometric: string;
  firstDay: string[];
  mobileDeposit: string;
  zelle: string;
  transferLimits: string;
  eStatements: string;
  fraudPhone: string;
  support: { label: string; url: string };
}

const BANKS: BankInfo[] = [
  {
    id: 'chase',
    name: 'Chase Bank',
    shortName: 'Chase',
    tagline: 'Largest U.S. bank by assets — full-featured app, wide ATM network.',
    color: 'text-blue-700',
    appName: 'Chase Mobile',
    enroll: 'Open chase.com in a web browser on a desktop or laptop first. Click "Sign in" in the top right, then "Not enrolled? Sign up now." You will need your account number (on a paper statement or the bottom of a check), your Social Security number, and your date of birth. Create a username at least 8 characters long and a password with letters, numbers, and a symbol. Chase will text or email a 6-digit code to confirm it is you.',
    download: 'On iPhone, open the App Store and search for "Chase Mobile." On Android, open the Google Play Store and search for the same. The official app is made by "JPMorgan Chase." Look for the blue octagon logo. Tap "Get" or "Install" — the app is free.',
    biometric: 'Open Chase Mobile and sign in with your username and password. Tap the person icon at the bottom right, then "Profile & settings." Tap "Security" then "Face ID" (iPhone) or "Fingerprint" (Android). Slide the switch on and confirm with your face or finger. From now on, you can sign in without typing your password.',
    firstDay: [
      'Check your balance on the home screen — it is the big number at the top.',
      'Tap "Accounts" to see recent transactions. Scroll to spot anything you do not recognize.',
      'Tap the menu (three lines) → "Profile & settings" → "Manage alerts" and turn on: low balance alert, large transaction over $200, and sign-in from a new device.',
      'Tap "Pay & transfer" → "Pay bills" → "Add a payee" to set up automatic bill pay for your electric, cable, or water bill.',
    ],
    mobileDeposit: 'Tap "Pay & transfer" → "Deposit checks." Pick the account to deposit into, type the amount, and sign the back of the paper check including the words "For Mobile Deposit Only to Chase." Hold your phone flat above the check on a dark, solid surface in bright light. Tap the shutter for the front, then flip the check and tap again for the back. Review and tap "Deposit." Most checks post the same business day; funds may be available by the next morning. Deposit limit is usually $10,000 per day for most customers.',
    zelle: 'Tap "Pay & transfer" → "Send money with Zelle." The first time, agree to the terms and confirm your email and phone number. To send money, pick a contact or type their email or mobile number, enter the amount, and confirm. Money moves within minutes and CANNOT be taken back. Only send to people you know in person. Chase will never ask you to send yourself money with Zelle to "verify" or "protect" your account.',
    transferLimits: 'Zelle: $2,000 per day, $16,000 per 30 days for standard checking. Chase QuickPay to external accounts: $25,000 per day with 3-day delivery. Wire transfer: up to $250,000 per day but requires a visit or phone call for first-time recipients.',
    eStatements: 'Tap your account → "Account services" → "Paperless." Agree to the terms and pick which accounts. You will get an email each month when a new statement is ready. Save or print the PDF for your records — tax time is easier when they are in one folder.',
    fraudPhone: '1-800-935-9935 (Chase Fraud Services, 24/7)',
    support: { label: 'Chase Customer Service', url: 'https://www.chase.com/digital/customer-service' },
  },
  {
    id: 'wells',
    name: 'Wells Fargo',
    shortName: 'Wells Fargo',
    tagline: 'Large national bank with strong branch and ATM coverage out West.',
    color: 'text-red-700',
    appName: 'Wells Fargo Mobile',
    enroll: 'Go to wellsfargo.com on a computer. Click "Enroll" in the top right. You will need your account or debit card number, your Social Security number, and your date of birth. Choose a username (no spaces) and a password with at least one capital letter, one number, and one symbol. Wells Fargo will send a 6-digit security code by text or email.',
    download: 'Open the App Store (iPhone) or Play Store (Android) and search for "Wells Fargo Mobile." Make sure the maker is "Wells Fargo Bank." The icon is a red and yellow stagecoach. Tap Install. Skip anything called "Wells Fargo Jobs" or third-party "Wells helper" apps.',
    biometric: 'Open Wells Fargo Mobile, sign in, and tap the menu (three lines) → "Security Center." Tap "Sign-on with face" or "Sign-on with fingerprint." Slide the switch on. Hold your phone up so the camera sees you, or place your finger on the sensor. Now a face or fingerprint gets you in without a password.',
    firstDay: [
      'Check your balance on the "Accounts" tab — the available balance is what you can actually spend.',
      'Tap an account to see the last 90 days of transactions. Look for anything you do not recognize.',
      'Tap "Menu" → "Manage alerts." Turn on: balance under $100, debit card purchase over $100, new sign-on, and password change.',
      'Tap "Pay & Transfer" → "Bill Pay" to schedule your first payment. Adding a payee takes about a minute.',
    ],
    mobileDeposit: 'Tap "Deposit" at the bottom of the app. Pick the account, type the amount. Sign the back of the check and write "For mobile deposit only at Wells Fargo." Lay the check flat on a dark surface in good light, hold the phone directly above, and let the app auto-capture both sides. Review and submit. Funds are typically available the next business day. Daily limit is $2,500 for most customers, $5,000 for longer-standing customers.',
    zelle: 'Tap "Pay & Transfer" → "Send Money with Zelle." On first use, register your email or phone and agree to the terms. To send, pick a saved recipient or type their email or phone number, enter an amount, and confirm. Sent money usually lands in minutes and is final — there is no refund from Wells Fargo for a Zelle you sent to the wrong person or a scammer. Only send to people you trust.',
    transferLimits: 'Zelle: $3,500 per day, $20,000 per 30 days. SurePay / internal transfer: $25,000 per day. Wire transfer: $100,000 per day online for domestic, more in branch. ATM withdrawal: $1,010 per day standard.',
    eStatements: 'Tap your account → "Statements & documents" → "Delivery preferences." Switch to "Online only." You will get an email each month. Statements stay available for 7 years — more than enough for taxes and any account history you need.',
    fraudPhone: '1-800-869-3557 (Wells Fargo Fraud, 24/7)',
    support: { label: 'Wells Fargo Help', url: 'https://www.wellsfargo.com/help/' },
  },
  {
    id: 'boa',
    name: 'Bank of America',
    shortName: 'Bank of America',
    tagline: 'Broad reach, good app, strong Erica virtual assistant for balance questions.',
    color: 'text-rose-700',
    appName: 'Bank of America Mobile Banking',
    enroll: 'Open bankofamerica.com on a computer. Click "Enroll" under the sign-in box. You will need your Social Security number or Tax ID, plus either your account number or debit card number. Create a User ID (your email works) and a Passcode that uses at least one letter, one number, and one symbol. Confirm with a code sent to your phone or email.',
    download: 'In the App Store or Play Store, search for "Bank of America." The official app is by "Bank of America" (not "BofA Prepaid" or any third-party wallet app). The icon is a red flag and blue square. Tap Install.',
    biometric: 'Open the app and sign in. Tap "Menu" in the top left → "Settings" → "Security Center" → "Face ID" or "Fingerprint." Slide it on and confirm. The next sign-in only needs your face or finger.',
    firstDay: [
      'The home screen shows your balance at the top. Tap the account name to see transaction history.',
      'Tap "Menu" → "Alerts" → "Manage alerts." Turn on: low balance, debit card used, large deposit, and sign-in from a new device.',
      'Try Erica, the built-in assistant. Tap the microphone icon and say "What did I spend on groceries last month?" Erica pulls up the answer.',
      'Tap "Pay & Transfer" → "Bill Pay" to add your first biller. Bank of America mails paper checks on your behalf if a company does not accept electronic payment.',
    ],
    mobileDeposit: 'Tap "Deposit" at the bottom of the home screen. Select the account and type the amount. Endorse the back of the check and add "For mobile deposit only at BofA." Place the check on a dark, flat surface with bright light. The app guides you to take a photo of the front, then the back. Review and submit. Most mobile deposits clear the same day; large checks may hold for 1–2 business days. Daily limit is $2,500 for most accounts, $10,000 for Preferred Rewards members.',
    zelle: 'Tap "Pay & Transfer" → "Zelle." First time, enroll with your email or U.S. mobile number. To send money, pick a contact, type the amount, and confirm. Zelle is instant and final — once it is sent, Bank of America cannot pull it back. If anyone — a "deputy," a "tech support agent," a "Bank of America fraud officer" — asks you to send yourself money through Zelle, that is a scam. Hang up and call the number on the back of your card.',
    transferLimits: 'Zelle: $3,500 per day, $20,000 per week for most. Internal transfer: up to $10,000 per day online. ATM: $1,000 per day. Wire: up to $1 million per day for eligible Merrill customers online.',
    eStatements: 'Tap your account → "Account & settings" → "Paperless." Choose statements, notices, and tax documents. Agree. Statements are kept for 7 years so you can download old ones when you need them.',
    fraudPhone: '1-800-432-1000 (Bank of America Fraud, 24/7)',
    support: { label: 'Bank of America Help Center', url: 'https://www.bankofamerica.com/customer-service/' },
  },
  {
    id: 'capital-one',
    name: 'Capital One',
    shortName: 'Capital One',
    tagline: 'Strong online bank and credit card — higher savings rates than big banks.',
    color: 'text-orange-700',
    appName: 'Capital One Mobile',
    enroll: 'Go to capitalone.com on a computer. Click "Sign In" → "Set up online access." You will need your Social Security number, date of birth, and your account or card number. Create a username and password. Capital One will send a one-time code to your phone for verification.',
    download: 'Search for "Capital One Mobile" in the App Store or Play Store. The maker is "Capital One Services." Red and blue logo. Tap Install.',
    biometric: 'Open the app and sign in. Tap the person icon → "Profile & Settings" → "Sign-in & Security." Tap "Face ID" or "Fingerprint" and slide on. Confirm with your face or finger. Done — you can skip typing next time.',
    firstDay: [
      'Balance is on the home card for each account — credit cards show what you owe, checking shows what you have.',
      'Tap an account → "Recent transactions" to scan the last month for anything unfamiliar.',
      'Tap the person icon → "Alerts" — turn on: low balance, purchase over $100, card used without the card (online), and payment posted.',
      'For credit cards, tap "Rewards" to see your cash back balance and set up auto-redeem each month to your checking account.',
    ],
    mobileDeposit: 'Tap "Deposit" at the bottom. Pick a 360 Checking or Savings account, type the amount, and endorse the back of the check — sign your name and add "For mobile deposit at Capital One only." Take a clear photo of the front, then flip and take one of the back. Submit. Funds typically post within a few hours; larger checks may take until the next business day. Daily limit starts at $5,000 for most customers.',
    zelle: 'Tap the menu → "Send money with Zelle." Register your email or phone number the first time. Pick a recipient, type the amount, and send. The money is gone for good once it sends — Capital One cannot claw it back. Never send Zelle to a stranger who contacted you; that includes people claiming to be from "Capital One Fraud." Real fraud reps do not ask you to move money.',
    transferLimits: 'Zelle: $2,500 per day, $10,000 per 30 days. External transfers: $5,000 per day, $10,000 per month. ATM: $1,000 per day. Wire: must be requested by phone.',
    eStatements: 'Tap the person icon → "Profile & Settings" → "Paperless." Turn it on for each account. Capital One keeps 7 years of statements online. Download to PDF any time.',
    fraudPhone: '1-800-427-9428 (Capital One Fraud, 24/7)',
    support: { label: 'Capital One Help Center', url: 'https://www.capitalone.com/support-center/' },
  },
  {
    id: 'us-bank',
    name: 'U.S. Bank',
    shortName: 'U.S. Bank',
    tagline: 'Fifth-largest U.S. bank — strong in the Midwest and West.',
    color: 'text-indigo-700',
    appName: 'U.S. Bank Mobile Banking',
    enroll: 'Visit usbank.com on a computer and click "Enroll" in the top right. You will need your Social Security number, account or debit card number, and date of birth. Pick a User ID that is not your email or Social Security number, and a password with at least 8 characters including a number and a symbol. Confirm by one-time code sent to your registered phone.',
    download: 'In the App Store or Play Store, search for "U.S. Bank." The maker is "U.S. Bank National Association." Dark blue logo with a shield. Tap Install.',
    biometric: 'Open the app, sign in, and tap the menu (three lines) → "Settings" → "Biometrics." Slide "Face ID" or "Fingerprint" on and confirm.',
    firstDay: [
      'Balance and recent activity show on the home screen for each account.',
      'Tap an account → "Transactions" to review the last 90 days.',
      'Tap "Menu" → "Alerts" → turn on low balance, large withdrawal, sign-in from a new device, and debit card used.',
      'Tap "Pay" → "Pay bills" to add a payee. Add your electric company first — it is the most common auto-pay.',
    ],
    mobileDeposit: 'Tap "Deposit checks" on the home screen. Choose the account, enter the amount, and endorse the back — sign and add "For U.S. Bank mobile deposit only." Place on a solid dark surface under bright light, hold phone flat and directly above, and take both photos. Submit. Funds are typically available the next business day. Daily limit is $2,500 for most accounts; higher for Platinum customers.',
    zelle: 'Tap "Pay" → "Send money with Zelle." Register your U.S. mobile or email. Pick a recipient and amount, and tap Send. Final and immediate — only send to people you personally know. The second someone tells you to send Zelle to fix a problem on your account, it is a scam.',
    transferLimits: 'Zelle: $2,000 per day, $10,000 per 30 days. External ACH: $10,000 per day. Wire: depends on account level, usually up to $50,000 per day online.',
    eStatements: 'Tap the account → "Manage alerts & statements" → "Go paperless." Agree. Statements are kept for 7 years. You will get an email when each month\'s is ready.',
    fraudPhone: '1-800-USBANKS (1-800-872-2657) or the number on the back of your card.',
    support: { label: 'U.S. Bank Customer Service', url: 'https://www.usbank.com/customer-service/' },
  },
  {
    id: 'citi',
    name: 'Citibank',
    shortName: 'Citi',
    tagline: 'Global bank with strong card rewards and 24/7 phone support.',
    color: 'text-teal-700',
    appName: 'Citi Mobile',
    enroll: 'Go to citi.com on a computer. Click "Sign On" → "Register." You will need your card, account, or loan number, your Social Security number, and your date of birth. Create a User ID and password — the password needs 8–50 characters with letters, numbers, and a symbol. Citi verifies by one-time code sent to your registered phone.',
    download: 'Search "Citi Mobile" in the App Store or Play Store. Maker is "Citigroup, Inc." Blue logo with a red arc. Tap Install. Do not install any third-party "Citi helper" app — Citi only has one official app.',
    biometric: 'Open Citi Mobile, sign in, and tap the person icon → "Profile & Settings" → "Manage Security Center" → "Enable Quick Access with Face ID or Fingerprint." Slide on and confirm.',
    firstDay: [
      'Your balances show on the account cards on the home screen. Tap to dig into each account.',
      'Review the last month of activity on each account.',
      'Tap the menu → "Alerts" — turn on: balance under your threshold, large purchase, new device sign-in, and address change.',
      'For credit cards, tap "Rewards" to see points and set up auto-redemption as a statement credit so the points never expire.',
    ],
    mobileDeposit: 'Tap "Deposit" at the bottom. Pick the checking or savings account, enter the amount, and endorse the back of the check — sign and write "For Citi mobile deposit only." Take the front photo, flip and take the back. Review and submit. Funds are generally available the next business day. Daily limit is $2,000 for basic accounts, higher for Citigold customers.',
    zelle: 'Tap "Pay & Transfer" → "Zelle." Enroll with your email or phone the first time. Send money by picking a recipient and typing an amount. Every Zelle is instant and cannot be reversed. Citi will never ask you to Zelle yourself to "move funds to a safe account."',
    transferLimits: 'Zelle: $2,000 per day, $16,000 per 30 days for basic; higher for Citigold and Priority. Internal Citi transfer: $10,000 per day. Wire: $50,000+ per day depending on account tier.',
    eStatements: 'Tap the account → "Account Details" → "Paperless." Agree to electronic statements. Citi stores up to 7 years of statements in the app.',
    fraudPhone: '1-800-950-5114 (Citi Fraud Early Warning, 24/7)',
    support: { label: 'Citi Customer Service', url: 'https://www.citi.com/customer-service' },
  },
  {
    id: 'credit-union',
    name: 'Credit Unions (Navy Federal, PenFed, local CUs)',
    shortName: 'Credit Union',
    tagline: 'Member-owned, nonprofit — usually better rates and lower fees than big banks.',
    color: 'text-green-700',
    appName: 'Varies: Navy Federal Credit Union, PenFed Mobile, or your local CU app',
    enroll: 'Every credit union uses its own enrollment page. Start at the credit union\'s website on a computer — never click a link in a text or email that claims to be from your credit union. You will need your member number (on your statement or share account card) and your Social Security number. Pick a username and password, then verify with a code sent to your phone.',
    download: 'Search the App Store or Play Store for the exact name of your credit union — for example, "Navy Federal" or "PenFed" or "[Your City] Credit Union." Confirm the maker name matches your credit union before installing. If multiple apps share a name, the official one is linked from your credit union\'s website.',
    biometric: 'Most credit union apps have a "Quick Sign-On" or "Touch ID / Face ID" toggle inside Settings. Sign in first with your password, then find the biometrics switch in Settings or Security and turn it on.',
    firstDay: [
      'Balance shows on the home screen — savings, checking, any loans you have.',
      'Tap each account to see the last 30–90 days of activity.',
      'Find Alerts in Settings and enable: low balance, large debit, sign-in from new device. If your credit union does not offer email alerts, ask them about text alerts.',
      'Set up bill pay if available. Many local credit unions use a service called "iPay" or "CheckFree" for bill pay — the first setup takes 5 minutes.',
    ],
    mobileDeposit: 'Tap "Deposit check" (exact wording varies). Pick an account, enter the amount, and endorse the back with your signature plus "For mobile deposit to [Credit Union Name] only." Lay the check flat on a dark surface in bright light, take a photo of each side, and submit. Availability varies by credit union — commonly the next business day. Daily limits range from $1,000 to $10,000 based on membership length.',
    zelle: 'Many credit unions offer Zelle through their app; some offer a similar service called Popmoney. Follow the enrollment prompts — you register with email or phone, and money moves the same way. The scam rules apply everywhere: Zelle or Popmoney transfers are final. Your credit union will never ask you to move money to "protect" it.',
    transferLimits: 'Limits vary — Navy Federal Zelle is $3,000 per day, $15,000 per month. Many local credit unions cap daily Zelle at $1,000–$2,500. Ask yours directly.',
    eStatements: 'Most credit unions have a Paperless or eStatement setting under Account Services or Settings. Enable to save paper and access statements online. Most credit unions store statements for 7 years.',
    fraudPhone: 'Use the number on the back of your debit card or your credit union\'s member services line. Navy Federal: 1-888-842-6328. PenFed: 1-800-247-5626.',
    support: { label: 'Find your credit union — NCUA locator', url: 'https://mapping.ncua.gov/' },
  },
];

/* ── Universal security info ──────────────────────────────────── */

interface SecurityItem {
  title: string;
  body: string;
  icon: LucideIcon;
}

const TWO_FA_EXPLAINER: SecurityItem[] = [
  {
    title: 'What 2FA is, in plain English',
    body: 'Two-factor authentication ("2FA") means you need TWO things to sign in — your password plus a one-time 6-digit code texted to your phone. Even if a criminal steals your password, they still cannot get in without your phone. Every bank app in this guide supports 2FA, and every one of them should have it turned on.',
    icon: Lock,
  },
  {
    title: 'Turn on 2FA for every bank',
    body: 'Inside the bank\'s app, go to Settings → Security. Look for "Two-factor authentication," "Enhanced Security," or "One-Time Passcodes." Pick "Text message" as the delivery method and confirm your phone number. You will get a test code. Save backup codes somewhere safe (not on your phone) in case you lose your phone.',
    icon: ShieldCheck,
  },
  {
    title: 'Use biometric login too',
    body: 'Face ID (iPhone) or Fingerprint (Android) is extra protection. Your face or finger unlocks the app on your phone only — if the phone is lost or stolen, the thief cannot sign in. Turn it on in each bank app\'s Security settings after you enable 2FA.',
    icon: Fingerprint,
  },
];

const ALERTS_TO_TURN_ON: SecurityItem[] = [
  {
    title: 'Low balance alert',
    body: 'Get a text or email whenever your balance drops below an amount you pick ($100 is common). This catches withdrawals you did not make and keeps you from accidentally overdrafting.',
    icon: Bell,
  },
  {
    title: 'Large transaction alert',
    body: 'Any purchase or withdrawal over a threshold you pick (try $100 or $200) triggers an immediate alert. This is the single best fraud-detection alert you can turn on.',
    icon: AlertTriangle,
  },
  {
    title: 'Sign-in from new device',
    body: 'If anyone signs into your account from a phone, tablet, or computer the bank has not seen before, you get a text instantly. If you did not sign in moments ago, that is fraud — change your password and call the bank.',
    icon: Smartphone,
  },
  {
    title: 'Debit card purchase',
    body: 'Some banks let you alert on every debit card purchase. It sounds like a lot of texts, but you will spot a fake charge within minutes instead of days.',
    icon: Bell,
  },
];

const PASSWORD_RULES = [
  'Use at least 12 characters — longer is always stronger.',
  'Mix uppercase letters, lowercase letters, numbers, and a symbol like ! or #.',
  'Never reuse your bank password anywhere else. If any site you used the password on gets hacked, your bank is at risk too.',
  'Avoid names, birthdays, pet names, or anything a stranger could find on Facebook.',
  'Use a passphrase — four random words with spaces or dashes, like "coffee-lamp-orchid-forty-7" — easier to remember and very hard to crack.',
  'Consider a password manager (1Password, Bitwarden, or Apple\'s built-in Passwords app) so you do not have to remember every password.',
];

const PHISHING_RULES = [
  'Never click a link in an email or text that says it is from your bank. Open the bank app directly or type the web address yourself.',
  'Real bank emails address you by name — "Dear Mr. Smith" — not "Dear Customer."',
  'Real banks do not ask for your password, PIN, full Social Security number, or one-time code by email, text, or phone. Ever.',
  'Your caller ID can be faked. If a "bank" call feels off, hang up and dial the number on the back of your card.',
  'Hover over links (on a computer) or long-press (on a phone) to see the real web address. chase.com is real; chase-secure-login.net is a scam.',
  'Check the email sender. Real Chase emails come from @chase.com — not @chase-support.com or @jpmorgan-secure.co.',
];

/* ── Mobile check deposit deep dive ──────────────────────────── */

const MOBILE_DEPOSIT_TIPS: SecurityItem[] = [
  {
    title: 'Lighting is everything',
    body: 'Stand near a window during the day, or turn on the brightest overhead light you have. No shadows — if your phone throws a shadow on the check, move or use a flashlight held to the side. The app rejects dark, blurry photos.',
    icon: Camera,
  },
  {
    title: 'Put the check on a dark, flat surface',
    body: 'A dark wood table, a black countertop, or a piece of black paper works. The contrast helps the app find the edges of the check. Never hold the check in your hand — it will move and the photo will blur.',
    icon: FileText,
  },
  {
    title: 'Endorse both sides the right way',
    body: 'Flip the check over. In the top part on the back (marked "Endorse here"), sign your name exactly as it appears on the front. Under your signature, write "For Mobile Deposit Only at [Your Bank]." Many banks reject checks without this line — they started requiring it in 2018.',
    icon: CheckCircle2,
  },
  {
    title: 'Hold the phone flat and steady',
    body: 'Hold the phone directly above the check, about 6–10 inches away, so the phone is parallel to the table. Most apps auto-capture when the check is centered and in focus. If it does not auto-capture, move closer or farther until the edges show in green.',
    icon: Smartphone,
  },
  {
    title: 'Keep the paper check for 30–60 days',
    body: 'After your mobile deposit posts, write "Deposited [date] via mobile" on the front of the check and put it in a safe folder for 30–60 days. If the deposit is ever reversed or questioned, you still have the paper. After 60 days of normal activity, shred the check — never toss it in the trash uncut.',
    icon: Lock,
  },
  {
    title: 'Never deposit the same check twice',
    body: 'Depositing one check at two banks — or re-submitting after it posts — is check fraud. The banks notice within days, and you will owe the money back plus fees. If the app seems to have failed, wait 10 minutes and check the pending list before trying again.',
    icon: XCircle,
  },
];

/* ── Scam scripts ────────────────────────────────────────────── */

interface ScamExample {
  title: string;
  script: string;
  howToSpot: string;
}

const SCAM_SCRIPTS: ScamExample[] = [
  {
    title: 'The "Chase Fraud Department" call',
    script: '"Hello, this is Michael from Chase Fraud Services. We detected a $1,200 charge in Miami on your debit card. Did you authorize this? No? Okay, to protect your account, I need you to move your balance to a new, secure account. I\'ll stay on the line while you send it via Zelle."',
    howToSpot: 'Real fraud departments NEVER ask you to send yourself money, move funds to a "safe account," or share a one-time code. They cancel your card and issue a new one. Hang up and call the number on the back of your card.',
  },
  {
    title: 'The "verify your account" text',
    script: '"Wells Fargo Alert: Unusual activity detected. Tap the link to verify your account now: wellsfargo-security[dot]com/verify. Failure to respond within 2 hours will result in account lockout."',
    howToSpot: 'The real Wells Fargo domain is wellsfargo.com. Hyphens, "security," "verify," or "login" in the middle of the domain are red flags. Never tap bank links in texts — open the bank app yourself.',
  },
  {
    title: 'The one-ring callback',
    script: 'Your phone rings once from an 876, 268, or 473 area code. You call back — it charges $5 per minute like a 900 number while a "bank officer" keeps you on the line asking security questions.',
    howToSpot: 'Look up unfamiliar area codes before calling back. 876 is Jamaica, 268 is Antigua, 473 is Grenada — all international pay-per-minute numbers. Do not return calls to numbers you do not recognize.',
  },
  {
    title: 'The gift card request',
    script: '"Your account has been frozen due to unpaid federal taxes. To unfreeze it, pay the balance in Apple gift cards or Target gift cards. Purchase $500 and read me the codes on the back — I\'ll credit your account immediately."',
    howToSpot: 'No bank, no IRS, no police officer, no utility company — nobody real — asks for payment in gift cards. Ever. The moment a caller says "gift cards," hang up.',
  },
  {
    title: 'The Zelle reversal scam',
    script: '"Hi, this is Jessica from Bank of America fraud. Somebody tried to Zelle $900 from your account. To reverse it, send $900 to your OWN phone number using Zelle, and we\'ll cancel the original."',
    howToSpot: 'You can\'t Zelle yourself to "cancel" anything. Sending Zelle to your own phone number sends it to whatever account that number is registered to — which is probably the scammer\'s account. Hang up and call the bank directly.',
  },
  {
    title: 'The "login from new device" panic text',
    script: '"New sign-in from Chicago, IL detected on your Citi account. If this wasn\'t you, reply NO. (Then the scammer calls you pretending to be Citi fraud, asking you to confirm your one-time code.)"',
    howToSpot: 'Real bank texts don\'t ask you to reply or share codes by phone. Open the Citi app and check if anything is actually wrong. Never share a one-time code with anyone who calls you — banks do not need your codes; the codes are FOR you.',
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

interface FaqItem {
  q: string;
  a: string;
}

const FAQ: FaqItem[] = [
  {
    q: 'Is mobile banking actually safe?',
    a: 'Yes — and in many ways safer than paper. Banks use strong encryption and multi-step verification, and they are federally required to refund unauthorized charges if you report them within 60 days of your statement. Your biggest risks are scammers tricking YOU, not the app itself. Turn on 2FA, use biometric login, watch for phishing, and never share one-time codes with anyone.',
  },
  {
    q: 'What if my phone is lost or stolen?',
    a: 'Sign in to your bank from any computer and change your password — this signs the app out on all devices. Then call the bank fraud number. Your bank can flag the account and watch for unusual activity. Because the app uses biometric login (and your Face ID or fingerprint does not match the thief), they cannot get in even with your phone in hand. Using "Find My iPhone" or "Find My Device" on Android, you can also remote-wipe the phone.',
  },
  {
    q: 'Does Zelle have buyer protection like a credit card?',
    a: 'No. This is the single biggest thing to understand. Zelle is a way to send cash — like handing someone a twenty-dollar bill. Once it is sent, it is final. If you paid for something that never arrived or was fake, the bank will not refund you. Zelle is for paying people you know in person (family, friends, your landlord, your babysitter) — never strangers, never online sellers, never anyone who pressures you.',
  },
  {
    q: 'Can I still go in person after I set up the app?',
    a: 'Absolutely. Branches and tellers are still there for every customer. Many seniors use the app for balance checks and deposits at home but still visit the branch for cash, cashier\'s checks, or anything complicated. The bank does not penalize you for using the branch.',
  },
  {
    q: 'What if I forget my password and type it wrong 5 times?',
    a: 'Every bank locks the account temporarily after 3–5 wrong attempts to prevent attacks. Usually the lockout lifts in 15–30 minutes. If you cannot wait, tap "Forgot password" in the app — the bank texts you a reset code, and you pick a new password. You can also call customer service (the number on the back of your card) and they will reset it after confirming your identity.',
  },
  {
    q: 'What should I do the moment I think my account is compromised?',
    a: 'Open the bank app and change your password. Sign out of all devices in Security Settings. Call the bank fraud number on the back of your card to freeze the account and reissue cards. Review recent transactions and dispute anything you did not make — banks give you 60 days from the statement. Change your email password too, since that is how criminals often get into bank accounts. Our Refund & Return Helper walks through the full recovery steps.',
  },
  {
    q: 'Should I use a fingerprint or Face ID instead of a password?',
    a: 'Use both. Your password is your primary identity; Face ID or Fingerprint is a convenient shortcut on your specific phone. If the phone is lost, your password still protects you on any new device.',
  },
  {
    q: 'Is it safe to use bank apps on public Wi-Fi (coffee shop, airport)?',
    a: 'It is safer than it used to be — bank apps encrypt traffic from end to end. But to be extra safe, use your phone\'s cellular data (turn off Wi-Fi for a moment), or install a VPN. Never sign into the bank from a public computer at a library or hotel business center.',
  },
];

/* ── Main component ──────────────────────────────────────────── */

export default function BankingAppSetup() {
  const [selectedBank, setSelectedBank] = useState<BankId>('chase');

  const bank = useMemo<BankInfo>(
    () => BANKS.find((b) => b.id === selectedBank) ?? BANKS[0],
    [selectedBank],
  );

  return (
    <>
      <SEOHead
        title="Banking App Setup — Chase, Wells Fargo, Bank of America, and more"
        description="Senior-friendly walkthrough for setting up Chase, Wells Fargo, Bank of America, Capital One, U.S. Bank, Citi, and credit union apps. Covers biometric login, mobile check deposit, Zelle scams, alerts, and what to do if your account is compromised."
        path="/tools/banking-app-setup"
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="banking-app-setup"
                title="Banking App Setup"
                url="/tools/banking-app-setup"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Money · Setup & Security</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
              Banking App Setup, Made Safe and Simple
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Set up Chase, Wells Fargo, Bank of America, Capital One, U.S. Bank, Citi, or your credit union app — with confidence.
              Mobile check deposit, Zelle safety, alerts, and the scams every bank customer should know.
            </p>
          </div>
        </section>

        {/* Bank picker */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick your bank</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Tap the card for your bank to see enrollment, biometric login, day-one tasks, mobile deposit, Zelle setup, transfer limits, and eStatement enrollment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BANKS.map((b) => {
              const isActive = b.id === selectedBank;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    setSelectedBank(b.id);
                    if (typeof window !== 'undefined') {
                      const el = document.getElementById('bank-details');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  aria-pressed={isActive}
                  className={[
                    'min-h-14 text-left p-5 rounded-xl border-2 transition-colors',
                    isActive
                      ? 'bg-primary/10 border-primary'
                      : 'bg-background border-border hover:border-primary/40',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <div className={['p-2 rounded-lg bg-muted', b.color].join(' ')}>
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold leading-tight">{b.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-1">
                        {b.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected bank detail */}
        <section id="bank-details" className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge variant="secondary" className="text-sm">Setup guide</Badge>
              <Badge variant="outline" className="text-sm">App: {bank.appName}</Badge>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">{bank.name} — step by step</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              {bank.tagline}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-primary" />
                    1. Enroll in online banking
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.enroll}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    2. Download the app
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.download}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-primary" />
                    3. Turn on biometric (Face or Fingerprint) login
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.biometric}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    4. Day one — what to do first
                  </h3>
                  <ul className="space-y-2">
                    {bank.firstDay.map((t) => (
                      <li key={t} className="flex gap-2 text-base md:text-lg leading-relaxed">
                        <span className="text-primary shrink-0" aria-hidden="true">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    5. Mobile check deposit
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.mobileDeposit}</p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Send className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    6. Zelle — with scam warnings
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.zelle}</p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Learn more about messaging scams on our{' '}
                    <Link to="/tools/social-media-safety" className="text-primary underline font-medium">
                      Social Media — Safe &amp; Sane
                    </Link>{' '}
                    guide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    7. Transfer limits to know
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.transferLimits}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    8. Enroll in eStatements
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{bank.eStatements}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-background">
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Report fraud 24/7</div>
                    <div className="text-lg font-semibold">{bank.fraudPhone}</div>
                  </div>
                </div>
                <div className="flex-1" />
                <Button asChild variant="outline" size="lg" className="min-h-14 text-base gap-2">
                  <a href={bank.support.url} target="_blank" rel="noopener noreferrer">
                    {bank.support.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Universal: 2FA + Alerts + Password + Phishing */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-primary" />
            Universal security — do these for EVERY bank
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Whatever bank you use, these settings and habits matter. Spend 10 minutes on each one and you have done more than most customers ever will.
          </p>

          {/* 2FA */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Turn on two-factor authentication (2FA)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {TWO_FA_EXPLAINER.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-base leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alerts */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Alert types every customer should enable</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {ALERTS_TO_TURN_ON.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-base leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Password rules */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Password rules that actually work</h3>
          <Card className="mb-10">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {PASSWORD_RULES.map((rule) => (
                  <li key={rule} className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Phishing / Real vs phishing */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary" />
            Real bank emails vs. phishing
          </h3>
          <Card className="mb-4 bg-red-50 dark:bg-red-950/20 border-red-500/40">
            <CardContent className="p-6">
              <p className="text-base md:text-lg leading-relaxed font-medium mb-3">
                Never click a link inside a &quot;bank&quot; email or text. Open the app yourself instead.
              </p>
              <ul className="space-y-3">
                {PHISHING_RULES.map((rule) => (
                  <li key={rule} className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <ShieldAlert className="w-5 h-5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-3 mb-2">
            <Button asChild variant="outline" size="lg" className="min-h-14 text-base gap-2">
              <Link to="/tools/is-this-real">
                <ShieldCheck className="w-5 h-5" />
                Check if a message is real
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-14 text-base gap-2">
              <Link to="/tools/email-spam-manager">
                <Mail className="w-5 h-5" />
                Clean up scam emails
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-14 text-base gap-2">
              <Link to="/tools/refund-and-return-helper">
                <Users className="w-5 h-5" />
                What to do if you were scammed
              </Link>
            </Button>
          </div>
        </section>

        {/* Mobile check deposit deep dive */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Camera className="w-7 h-7 text-primary" />
              Mobile check deposit — step-by-step
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              The single biggest complaint with mobile deposits is a blurry photo. These six habits fix that for any bank.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {MOBILE_DEPOSIT_TIPS.map((tip) => (
                <Card key={tip.title}>
                  <CardContent className="p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <tip.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold text-lg">{tip.title}</h3>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed">{tip.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
              <CardContent className="p-5 flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">Quick Tip</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Write &quot;For Mobile Deposit Only at [Your Bank]&quot; on the back of every check you deposit with the app.
                    Without this line, many banks will reject the deposit — and you will have to mail the check or take it to a branch.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real scam scripts */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <ShieldAlert className="w-7 h-7 text-red-700 dark:text-red-400" />
            Real bank scam scripts — know them, avoid them
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            These are actual messages and calls reported to the FTC and AARP. Scammers reuse these scripts because they work.
            Read them now and you will recognize the next one in your phone.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {SCAM_SCRIPTS.map((scam) => (
              <Card key={scam.title} className="bg-red-50/60 dark:bg-red-950/15 border-red-500/30">
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-400" />
                    {scam.title}
                  </h3>
                  <blockquote className="border-l-4 border-red-500/60 pl-4 italic text-base md:text-lg leading-relaxed">
                    {scam.script}
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-base mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-700 dark:text-green-400" />
                      How to spot it
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">{scam.howToSpot}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Frequently asked questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              The questions nearly everyone asks after setting up their first bank app.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FAQ.map((item) => (
                <Card key={item.q}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Related tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">Check if a message is real</h3>
                <p className="text-base leading-relaxed">
                  Paste a suspicious text or email and find out whether it is a phishing attempt.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full min-h-14 text-base">
                  <Link to="/tools/is-this-real">Open tool</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">Email spam manager</h3>
                <p className="text-base leading-relaxed">
                  Clean your inbox of bank-impersonator emails and set up filters.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full min-h-14 text-base">
                  <Link to="/tools/email-spam-manager">Open tool</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">Refund &amp; Return Helper</h3>
                <p className="text-base leading-relaxed">
                  Walkthroughs for disputing unauthorized charges and recovering from scams.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full min-h-14 text-base">
                  <Link to="/tools/refund-and-return-helper">Open tool</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
