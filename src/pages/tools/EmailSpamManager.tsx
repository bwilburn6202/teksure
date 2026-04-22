import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Mail,
  Trash2,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Ban,
  Filter,
  Inbox,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  ListChecks,
  Link as LinkIcon,
  Flag,
  UserPlus,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Data — per-provider instructions
// ─────────────────────────────────────────────────────────────────────────────

type Step = { title: string; detail: string };

interface ProviderSection {
  /** Key identifier — used for tab state */
  id: string;
  /** Human-readable section title */
  title: string;
  steps: Step[];
}

interface Provider {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  /** Official support site to link out to */
  support: { label: string; url: string };
  sections: {
    unsubscribe: ProviderSection;
    markSpam: ProviderSection;
    block: ProviderSection;
    filter: ProviderSection;
    safeSenders: ProviderSection;
  };
}

const PROVIDERS: Provider[] = [
  // ── GMAIL ────────────────────────────────────────────────────────────────
  {
    id: 'gmail',
    name: 'Gmail',
    tagline: 'Google email — @gmail.com',
    emoji: '📧',
    support: { label: 'Gmail Help Center', url: 'https://support.google.com/mail' },
    sections: {
      unsubscribe: {
        id: 'unsubscribe',
        title: 'Unsubscribe the right way',
        steps: [
          { title: 'Open the email you want to stop getting', detail: 'Tap or click the message so it fills the screen. This works on the Gmail app (phone) and gmail.com (computer).' },
          { title: 'Look at the very top of the message', detail: 'Right next to the sender\'s name, Gmail often shows a blue "Unsubscribe" link. That\'s Gmail\'s own safe unsubscribe — use this one if you see it.' },
          { title: 'Tap or click "Unsubscribe"', detail: 'A small box will pop up asking to confirm. Tap "Unsubscribe" again. You should stop getting emails from that sender within a few days.' },
          { title: 'If there\'s no blue Unsubscribe link', detail: 'Scroll to the very bottom of the email. Look for small gray text that says "Unsubscribe" or "Manage preferences." Only use this if you actually remember signing up with this company.' },
          { title: 'When in doubt, mark as spam instead', detail: 'If you don\'t recognize the sender at all, do NOT click their unsubscribe link — it tells scammers your address is real. Use the spam button (next section) instead.' },
        ],
      },
      markSpam: {
        id: 'markSpam',
        title: 'Mark as spam / rescue good mail',
        steps: [
          { title: 'To mark as spam (phone app)', detail: 'Open the email → tap the 3 dots in the top-right → tap "Report spam." The message moves to your Spam folder and Gmail learns from it.' },
          { title: 'To mark as spam (computer)', detail: 'Open the email → click the stop-sign icon labeled "Report spam" at the top of the message. Or select the message from your inbox list and click the same icon.' },
          { title: 'Rescue a good email from Spam', detail: 'Open the "Spam" folder in the left sidebar (computer) or menu (app). Open the email → tap "Not spam." The message moves back to your inbox and Gmail stops filtering that sender.' },
          { title: 'Check your Spam folder weekly', detail: 'Good emails sometimes get filtered by mistake — bills, appointment reminders, messages from family. Take 60 seconds once a week to scroll through Spam before it auto-deletes after 30 days.' },
        ],
      },
      block: {
        id: 'block',
        title: 'Block a sender completely',
        steps: [
          { title: 'Open any email from the sender', detail: 'Does not matter which one — as long as it\'s from the address you want to block.' },
          { title: 'Tap the 3 dots (phone) or arrow (computer) next to the sender\'s name', detail: 'On the app it\'s three vertical dots in the top right. On the computer it\'s a small down-arrow next to the reply button.' },
          { title: 'Choose "Block [sender name]"', detail: 'This sends every future email from that exact address straight to Spam — you won\'t see them in your inbox again.' },
          { title: 'To unblock later', detail: 'Go to Settings → Filters and Blocked Addresses → find the address → click "Unblock." Only needed if you change your mind.' },
        ],
      },
      filter: {
        id: 'filter',
        title: 'Create a filter (auto-label newsletters)',
        steps: [
          { title: 'Open Gmail on a computer', detail: 'Filters are easier to create on the desktop version than in the phone app. Go to gmail.com.' },
          { title: 'Click the gear icon → "See all settings"', detail: 'The gear is in the top-right corner.' },
          { title: 'Click "Filters and Blocked Addresses" tab', detail: 'Then click "Create a new filter."' },
          { title: 'In the "From" field, type a keyword or address', detail: 'For a simple newsletter filter, type the word unsubscribe in the "Has the words" field — newsletters almost always contain it.' },
          { title: 'Click "Create filter"', detail: 'On the next screen, check "Skip the Inbox" and "Apply the label" — click "New label" and call it Newsletters.' },
          { title: 'Click "Create filter" to save', detail: 'Now all newsletters go to a "Newsletters" folder instead of crowding your inbox. Check it whenever you want — not every 5 minutes.' },
        ],
      },
      safeSenders: {
        id: 'safeSenders',
        title: 'Safe senders list (important mail always arrives)',
        steps: [
          { title: 'Add the address to your Contacts', detail: 'Gmail treats anyone in your Contacts as a safe sender. Open an email from them → click the 3 dots → "Add [name] to Contacts list."' },
          { title: 'Create a "never send to spam" filter', detail: 'Go to Settings (gear) → Filters and Blocked Addresses → Create new filter. Type the email in the "From" field → "Create filter" → check "Never send it to Spam" → Create.' },
          { title: 'Do this for doctors, banks, and family', detail: 'Especially useful for appointment reminders, billing statements, and grandkids\' emails that sometimes get filtered.' },
        ],
      },
    },
  },
  // ── OUTLOOK / HOTMAIL ─────────────────────────────────────────────────────
  {
    id: 'outlook',
    name: 'Outlook / Hotmail',
    tagline: 'Microsoft email — @outlook.com, @hotmail.com, @live.com, @msn.com',
    emoji: '📨',
    support: { label: 'Outlook Help', url: 'https://support.microsoft.com/en-us/outlook' },
    sections: {
      unsubscribe: {
        id: 'unsubscribe',
        title: 'Unsubscribe the right way',
        steps: [
          { title: 'Open the email', detail: 'Use outlook.com on a computer, or the Outlook app on your phone.' },
          { title: 'Look for "Unsubscribe" at the top of the message', detail: 'Outlook often adds a small blue "Unsubscribe" link just below the sender\'s name — this is Outlook\'s built-in safe unsubscribe. Use this one when you see it.' },
          { title: 'Click or tap "Unsubscribe"', detail: 'Confirm when the box pops up. You may keep getting emails for a few days while the sender processes the request.' },
          { title: 'If no blue link appears', detail: 'Scroll to the bottom of the email for a small "Unsubscribe" link. Only click it if you recognize the sender.' },
          { title: 'Never click unsubscribe from unknown senders', detail: 'Scammers use fake unsubscribe links to confirm your email is real, or to trick you into giving your password. Use the Junk (spam) button instead.' },
        ],
      },
      markSpam: {
        id: 'markSpam',
        title: 'Mark as junk / rescue good mail',
        steps: [
          { title: 'To mark as junk (computer)', detail: 'Right-click the email in your inbox → choose "Mark as junk." Or open the email and click "Junk" at the top.' },
          { title: 'To mark as junk (phone app)', detail: 'Open the email → tap the 3 dots in the top-right → tap "Move to Junk." Outlook starts filtering similar messages automatically.' },
          { title: 'Rescue good mail from Junk', detail: 'Click the "Junk Email" folder in the left sidebar → open the email → click "Not junk" at the top. The message returns to your inbox.' },
          { title: 'Check Junk weekly', detail: 'Outlook\'s junk filter is aggressive — bills and appointment reminders can end up there. A 60-second check keeps you from missing anything important.' },
        ],
      },
      block: {
        id: 'block',
        title: 'Block a sender completely',
        steps: [
          { title: 'Open an email from the sender', detail: 'Any email from the address you want to stop seeing.' },
          { title: 'Click the 3 dots (computer) or top-right menu (phone)', detail: 'On the computer it\'s three dots at the top-right of the message. On the phone app, tap the 3 dots in the top right.' },
          { title: 'Choose "Block" or "Block sender"', detail: 'Every future email from that address goes directly to Junk — you won\'t see them in your inbox.' },
          { title: 'To unblock', detail: 'Settings (gear icon) → View all Outlook settings → Mail → Junk email → Blocked senders and domains. Remove the address from the list.' },
        ],
      },
      filter: {
        id: 'filter',
        title: 'Create a rule (auto-sort mail)',
        steps: [
          { title: 'Use outlook.com on a computer', detail: 'Rules are easier to set up on the desktop than on the phone.' },
          { title: 'Open an email from the sender you want to sort', detail: 'For example, a newsletter you like but don\'t want cluttering your inbox.' },
          { title: 'Click the 3 dots at the top of the email → "Create rule"', detail: 'Outlook pre-fills the sender\'s address for you.' },
          { title: 'Choose where the mail should go', detail: 'Pick or create a folder like "Newsletters" or "Shopping." Check the box for "Move to" and pick the folder.' },
          { title: 'Click "OK" to save', detail: 'From now on, every email from that sender skips the inbox and goes straight to that folder.' },
        ],
      },
      safeSenders: {
        id: 'safeSenders',
        title: 'Safe senders list (important mail always arrives)',
        steps: [
          { title: 'Open Settings → Mail → Junk email', detail: 'Click the gear icon in the top-right → "View all Outlook settings" → Mail → Junk email.' },
          { title: 'Under "Safe senders and domains," click "Add"', detail: 'Type the email address of someone important (your doctor, bank, family member).' },
          { title: 'Press Enter → click "Save"', detail: 'Outlook will never send mail from that address to Junk, even if it looks promotional.' },
          { title: 'Tip: add the whole domain', detail: 'For example, add "@chase.com" to accept all mail from Chase Bank. Only do this for senders you fully trust.' },
        ],
      },
    },
  },
  // ── YAHOO ──────────────────────────────────────────────────────────────────
  {
    id: 'yahoo',
    name: 'Yahoo Mail',
    tagline: '@yahoo.com, @ymail.com',
    emoji: '💜',
    support: { label: 'Yahoo Mail Help', url: 'https://help.yahoo.com/kb/mail' },
    sections: {
      unsubscribe: {
        id: 'unsubscribe',
        title: 'Unsubscribe the right way',
        steps: [
          { title: 'Open the email on yahoo.com or the Yahoo Mail app', detail: 'Both work the same way for unsubscribing.' },
          { title: 'Scroll to the very bottom of the email', detail: 'Look for small gray text that says "Unsubscribe," "Opt out," or "Manage email preferences."' },
          { title: 'Only click if you remember signing up', detail: 'Real companies honor unsubscribe requests. Scammers use fake unsubscribe links to confirm your email is active.' },
          { title: 'Confirm the unsubscribe page', detail: 'Some senders ask you to click one more button to confirm. Check the web address at the top — it should match the company\'s real website.' },
          { title: 'Not sure? Use the spam button', detail: 'When you don\'t recognize the sender, the spam button is always safer than any unsubscribe link.' },
        ],
      },
      markSpam: {
        id: 'markSpam',
        title: 'Mark as spam / rescue good mail',
        steps: [
          { title: 'To mark as spam', detail: 'Open the email → click the "Spam" button at the top (a little shield icon). On the phone app, tap the 3 dots → "Mark as Spam."' },
          { title: 'Multiple at once', detail: 'In your inbox list, check the box next to each spam email → click the Spam button once to report them all.' },
          { title: 'Rescue good mail from Spam folder', detail: 'Click "Spam" in the left sidebar → open the email → click "Not Spam" at the top. The message goes back to your inbox.' },
          { title: 'Spam auto-deletes after 30 days', detail: 'Yahoo empties the Spam folder monthly. Check it weekly so you don\'t lose anything important.' },
        ],
      },
      block: {
        id: 'block',
        title: 'Block a sender completely',
        steps: [
          { title: 'Open Settings → More Settings → Security and privacy', detail: 'Click the gear icon in the top-right → "More Settings" at the bottom → "Security and privacy" in the left menu.' },
          { title: 'Find "Blocked addresses"', detail: 'Click "Add" and type the full email address you want to block.' },
          { title: 'Save', detail: 'Yahoo now automatically deletes any future mail from that address — it won\'t even reach your Spam folder.' },
          { title: 'To unblock', detail: 'Same page — click the "X" next to any blocked address.' },
        ],
      },
      filter: {
        id: 'filter',
        title: 'Create a filter (auto-sort mail)',
        steps: [
          { title: 'Open Settings → More Settings → Filters', detail: 'Gear icon top-right → "More Settings" → "Filters" in the left menu.' },
          { title: 'Click "Add new filters"', detail: 'Give the filter a name like "Newsletters."' },
          { title: 'Set the rule', detail: 'Under "From," type a keyword like a sender\'s email, or use the "Subject" field for topics. You can also match any message containing "unsubscribe."' },
          { title: 'Choose a folder', detail: 'Under "Move to," create or pick a folder like "Newsletters" or "Shopping deals."' },
          { title: 'Save', detail: 'From now on, matching emails skip your inbox automatically.' },
        ],
      },
      safeSenders: {
        id: 'safeSenders',
        title: 'Safe senders list (important mail always arrives)',
        steps: [
          { title: 'Yahoo uses your Contacts as the safe list', detail: 'Emails from anyone in your Yahoo Contacts won\'t be marked as spam.' },
          { title: 'Add an important sender to Contacts', detail: 'Open an email from them → click the person-icon next to their name → "Add to Contacts."' },
          { title: 'For extra safety: create a filter', detail: 'Settings → Filters → New filter → match the sender\'s address → move to "Inbox" (not "Spam"). This forces Yahoo to always deliver it.' },
        ],
      },
    },
  },
  // ── APPLE / iCLOUD ────────────────────────────────────────────────────────
  {
    id: 'icloud',
    name: 'Apple iCloud Mail',
    tagline: '@icloud.com, @me.com, @mac.com',
    emoji: '🍎',
    support: { label: 'iCloud Mail Support', url: 'https://support.apple.com/icloud-mail' },
    sections: {
      unsubscribe: {
        id: 'unsubscribe',
        title: 'Unsubscribe the right way',
        steps: [
          { title: 'Open Mail on your iPhone, iPad, or Mac', detail: 'The built-in Mail app connects to your @icloud.com address.' },
          { title: 'Look for the banner at the top of the email', detail: 'When Mail recognizes a real newsletter, it shows a blue "Unsubscribe" banner just below the sender\'s name. This is the safest way to unsubscribe.' },
          { title: 'Tap "Unsubscribe" in the banner', detail: 'Mail handles the rest — no clicking links inside the message itself. You should stop getting messages in 5-10 days.' },
          { title: 'If no banner shows', detail: 'Scroll to the bottom of the email for a regular unsubscribe link. Only use it if you actually signed up with this sender.' },
          { title: 'Turn on "Protect Mail Activity"', detail: 'Settings → Mail → Privacy Protection → turn on "Protect Mail Activity." This hides your email\'s open status from spammers so they can\'t tell which addresses are active.' },
        ],
      },
      markSpam: {
        id: 'markSpam',
        title: 'Mark as junk / rescue good mail',
        steps: [
          { title: 'On iPhone or iPad', detail: 'Open the email → tap the flag icon at the bottom → tap "Move to Junk." Mail learns from this over time.' },
          { title: 'On Mac', detail: 'Click the email → click the thumb-down "Junk" icon at the top of the Mail window. Or right-click the message → "Move to Junk."' },
          { title: 'On iCloud.com (any computer)', detail: 'Open the message → click the flag with slash icon at the top to report it as junk.' },
          { title: 'Rescue mail from Junk', detail: 'Open the Junk mailbox → open the message → tap/click "Not Junk" (or "Move to Inbox"). Mail stops filtering that sender.' },
          { title: 'Check Junk weekly', detail: 'Apple\'s filter is aggressive. Appointment reminders and shipping updates sometimes end up there.' },
        ],
      },
      block: {
        id: 'block',
        title: 'Block a sender completely',
        steps: [
          { title: 'On iPhone or iPad', detail: 'Open the email → tap the sender\'s name at the top → tap "Block this Contact." Every future email from them will be moved to the Trash automatically.' },
          { title: 'On Mac Mail', detail: 'Open the message → click the down-arrow next to the sender\'s name → "Block Contact."' },
          { title: 'On iCloud.com', detail: 'Go to Settings (gear icon) → Rules → create a new rule: "If the sender is [address] then move to Trash."' },
          { title: 'To unblock', detail: 'iPhone/iPad: Settings → Mail → Blocked. Remove anyone you want to hear from again.' },
        ],
      },
      filter: {
        id: 'filter',
        title: 'Create a rule on iCloud.com',
        steps: [
          { title: 'Sign in at iCloud.com → Mail', detail: 'Rules can only be created on iCloud.com, not in the Mail app. Use any computer browser.' },
          { title: 'Click the gear icon → "Rules"', detail: 'Then click "Add a Rule."' },
          { title: 'Set the condition', detail: 'Example: "If a message is from [sender address]" or "If the subject contains [word]."' },
          { title: 'Set the action', detail: 'Choose "Move to Folder" and create a folder called "Newsletters" or "Shopping."' },
          { title: 'Click "Done" to save', detail: 'Matching emails now skip your inbox on every device — iPhone, iPad, Mac, and web.' },
        ],
      },
      safeSenders: {
        id: 'safeSenders',
        title: 'Safe senders list (important mail always arrives)',
        steps: [
          { title: 'Add the sender to your Contacts', detail: 'iCloud Mail trusts anyone in your Contacts app. Open an email → tap the sender\'s name → "Create New Contact" or "Add to Existing Contact."' },
          { title: 'Create a "never mark as junk" rule', detail: 'On iCloud.com → gear → Rules → Add Rule. Set "If from [address]" → "Move to Inbox." This forces delivery even if Apple\'s filter disagrees.' },
          { title: 'Use Hide My Email for shopping', detail: 'If you have iCloud+, "Hide My Email" creates a random alias that forwards to your real address. Use it for shopping sites — if one gets spammy, you delete the alias instead of changing your email.' },
        ],
      },
    },
  },
  // ── AOL ────────────────────────────────────────────────────────────────────
  {
    id: 'aol',
    name: 'AOL Mail',
    tagline: '@aol.com',
    emoji: '📪',
    support: { label: 'AOL Help', url: 'https://help.aol.com/products/aol-mail' },
    sections: {
      unsubscribe: {
        id: 'unsubscribe',
        title: 'Unsubscribe the right way',
        steps: [
          { title: 'Open the email at aol.com or in the AOL app', detail: 'AOL Mail works very similarly to Yahoo — it\'s owned by the same company.' },
          { title: 'Scroll to the bottom of the email', detail: 'Look for small gray text that says "Unsubscribe" or "Email preferences."' },
          { title: 'Only click if you recognize the sender', detail: 'Use the unsubscribe link only for mail from companies you remember signing up with. For unknown senders, use the Spam button instead.' },
          { title: 'Confirm if asked', detail: 'Some senders make you click one more button. Check that the website address at the top of your browser matches the company\'s real name.' },
        ],
      },
      markSpam: {
        id: 'markSpam',
        title: 'Mark as spam / rescue good mail',
        steps: [
          { title: 'To mark as spam', detail: 'Open the email → click the "Spam" button at the top of the message. On mobile, tap the 3 dots → "Mark as Spam."' },
          { title: 'Multiple at once', detail: 'Check the box next to each spam email in your inbox list → click the Spam button once.' },
          { title: 'Rescue from Spam folder', detail: 'Click "Spam" in the left sidebar → open the email → click "Not Spam." The message returns to your inbox.' },
          { title: 'Empty Spam once a month', detail: 'AOL keeps old spam messages. Clearing the folder monthly keeps your account tidy.' },
        ],
      },
      block: {
        id: 'block',
        title: 'Block a sender completely',
        steps: [
          { title: 'Open Options → Mail Settings', detail: 'Click "Options" in the top-right of aol.com → "Mail Settings."' },
          { title: 'Click "Spam Settings" in the left menu', detail: 'Then look for the "Block Sender" section.' },
          { title: 'Add the address', detail: 'Type the full email address you want to block → click "Add."' },
          { title: 'Save', detail: 'AOL automatically deletes all future mail from that sender.' },
        ],
      },
      filter: {
        id: 'filter',
        title: 'Create a filter (auto-sort mail)',
        steps: [
          { title: 'Go to Options → Mail Settings → Filter Settings', detail: 'Click "Options" in the top-right of aol.com.' },
          { title: 'Click "Create a Filter"', detail: 'Give it a name like "Newsletters."' },
          { title: 'Set the rule', detail: 'Match the sender, subject, or a keyword in the email body.' },
          { title: 'Choose a folder', detail: 'Under "Move to folder," pick or create one like "Newsletters" or "Bills."' },
          { title: 'Save the filter', detail: 'Matching mail now skips your inbox automatically.' },
        ],
      },
      safeSenders: {
        id: 'safeSenders',
        title: 'Safe senders list (important mail always arrives)',
        steps: [
          { title: 'Add important senders to Contacts', detail: 'Open an email from them → click the person-icon next to their name → "Add Contact."' },
          { title: 'Create a "never mark as spam" filter', detail: 'Settings → Filter Settings → New Filter → match the sender\'s address → "Move to Inbox."' },
          { title: 'Great for your doctor, bank, and family', detail: 'AOL\'s filter is strict — anyone important should be in your Contacts so their mail always reaches you.' },
        ],
      },
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ content
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What if I unsubscribed and they still email me?',
    a: 'Legitimate companies have up to 10 business days by law (the CAN-SPAM Act) to process an unsubscribe request. If the emails keep coming after 2 weeks, it\'s either being ignored (report it as spam) or the sender is a scammer who never meant to honor it in the first place. Use the spam button — your email provider learns over time and filters similar messages automatically.',
  },
  {
    q: 'Can spammers see that I opened the email?',
    a: 'Yes, often. Most marketing and scam emails contain a tiny invisible image called a "tracking pixel." When the image loads, it tells the sender your address is active. That\'s why you sometimes get MORE spam after opening a message. To block it: on iPhone turn on Settings → Mail → Privacy Protection → Protect Mail Activity. In Gmail, images are proxied automatically. In Outlook, go to Settings → Mail → General and turn on "Block external images."',
  },
  {
    q: 'Is it safer to use a separate email for shopping?',
    a: 'Yes — and highly recommended. Create one free email address just for online shopping, loyalty programs, and anything non-essential. Keep your main email for family, your bank, your doctor, and taxes. If the shopping address gets overloaded with spam, you can simply abandon it and make a new one — without losing important contacts.',
  },
  {
    q: 'What\'s a disposable email?',
    a: 'A temporary, throwaway email address that forwards to your real one — or self-destructs after a few hours. Apple\'s "Hide My Email" (built into iCloud+) creates a random address for any site you sign up with, and you can delete it anytime. Free alternatives include SimpleLogin and addy.io. Great for "claim your free sample" sites or one-time downloads where you don\'t want to hand over your real address.',
  },
  {
    q: 'Why does good mail end up in my spam folder?',
    a: 'Spam filters make educated guesses based on words, sender reputation, and patterns. Sometimes they guess wrong — especially for appointment reminders, small-business newsletters, or anyone who emails you for the first time. The fix: add important senders to your Contacts (Yahoo, AOL, iCloud) or create a "never send to spam" filter (Gmail, Outlook). Check your spam folder once a week to catch any that slip through.',
  },
  {
    q: 'Is it bad to have thousands of unread emails?',
    a: 'Not technically — your email still works fine. But it can make real messages hard to find and makes it harder to spot a scam hiding in the noise. A 15-minute cleanup with the weekly routine (next section up) gets things manageable without deleting anything important.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const SECTION_META: Array<{
  key: keyof Provider['sections'];
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
}> = [
  { key: 'unsubscribe', label: 'Unsubscribe the right way', Icon: XCircle, accent: 'text-amber-600' },
  { key: 'markSpam',    label: 'Mark as spam / rescue good mail', Icon: Flag, accent: 'text-red-600' },
  { key: 'block',       label: 'Block a sender', Icon: Ban, accent: 'text-red-700' },
  { key: 'filter',      label: 'Create a filter / rule', Icon: Filter, accent: 'text-blue-600' },
  { key: 'safeSenders', label: 'Safe senders list', Icon: UserPlus, accent: 'text-green-600' },
];

export default function EmailSpamManager() {
  const [selected, setSelected] = useState<Provider | null>(null);
  const [activeSection, setActiveSection] = useState<keyof Provider['sections']>('unsubscribe');

  const openProvider = (p: Provider) => {
    setSelected(p);
    setActiveSection('unsubscribe');
    // Scroll to top of content when switching provider
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Clean Up Your Inbox — Email Spam Manager"
        description="A plain-English guide to unsubscribing, blocking, and organizing email. Step-by-step for Gmail, Outlook, Yahoo, iCloud, and AOL — without deleting anything important."
        path="/tools/email-spam-manager"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-amber-900/40 border-b border-amber-200/60 dark:border-amber-900/40 py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="p-4 bg-amber-500/15 rounded-2xl ring-1 ring-amber-500/20">
                    <Mail className="h-10 w-10 text-amber-700 dark:text-amber-300" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 bg-white dark:bg-zinc-900 rounded-full border border-amber-300">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-amber-400/60 text-amber-800 dark:text-amber-200 bg-white/50 dark:bg-amber-950/40">
                    Guide + Tool
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Clean Up Your Inbox
                  </h1>
                </div>
              </div>
              <BookmarkButton
                type="tool"
                slug="email-spam-manager"
                title="Clean Up Your Inbox"
                url="/tools/email-spam-manager"
              />
            </div>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Unsubscribe, block, and organize — without deleting anything important. Pick your email provider below and we'll walk you through every step.
            </p>
          </div>
        </section>

        {/* ── PROVIDER PICKER ───────────────────────────────────────────── */}
        {!selected && (
          <section className="container max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Which email do you use?</h2>
            <p className="text-base text-muted-foreground mb-6">
              Tap your provider to get step-by-step instructions for your exact email. Not sure which one? Look at the part of your email after the "@" symbol.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROVIDERS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => openProvider(p)}
                  className="text-left group"
                >
                  <Card className="min-h-[140px] cursor-pointer hover:border-amber-500 hover:shadow-md transition-all h-full">
                    <CardContent className="p-5 flex items-start gap-4 h-full">
                      <div className="text-4xl shrink-0" aria-hidden>{p.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>

            {/* Golden rules — shown on the picker page too */}
            <GoldenRulesCard />
          </section>
        )}

        {/* ── PROVIDER DETAIL ───────────────────────────────────────────── */}
        {selected && (
          <section className="container max-w-4xl mx-auto px-4 py-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { setSelected(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mb-6 min-h-11"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Pick a different email
            </Button>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl" aria-hidden>{selected.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-bold">{selected.name}</h2>
            </div>
            <p className="text-muted-foreground mb-8">{selected.tagline}</p>

            {/* Section picker buttons */}
            <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Topic">
              {SECTION_META.map(({ key, label, Icon }) => {
                const active = activeSection === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveSection(key)}
                    className={`inline-flex items-center gap-2 px-4 min-h-11 rounded-full border text-sm font-medium transition-colors
                      ${active
                        ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                        : 'bg-white dark:bg-zinc-900 border-border hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Active section steps */}
            <ProviderSectionSteps section={selected.sections[activeSection]} />

            {/* Official support link */}
            <Card className="mt-6 bg-muted/40">
              <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Need more help from {selected.name}?</h4>
                  <p className="text-sm text-muted-foreground">The official help site has screenshots and short videos.</p>
                </div>
                <Button asChild variant="outline" className="min-h-11 shrink-0">
                  <a href={selected.support.url} target="_blank" rel="noopener noreferrer">
                    Open {selected.support.label} <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Golden rules — also show on detail page */}
            <GoldenRulesCard />
          </section>
        )}

        {/* ── SHARED SECTIONS (always visible under the picker / detail) ── */}
        <section className="container max-w-4xl mx-auto px-4 pb-12 space-y-10">
          <RedFlagsCard />
          <PromotionalEmailsCard />
          <WeeklyRoutineCard />
          <FaqCard />
          <RelatedToolsCard />
        </section>
      </main>

      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function ProviderSectionSteps({ section }: { section: ProviderSection }) {
  return (
    <Card className="border-2 border-amber-200/70 dark:border-amber-900/40">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-amber-600" />
          {section.title}
        </h3>
        <ol className="space-y-4">
          {section.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div
                aria-hidden
                className="flex-shrink-0 h-9 w-9 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-base"
              >
                {i + 1}
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-semibold text-base mb-1">{step.title}</h4>
                <p className="text-base text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function GoldenRulesCard() {
  const rules: Array<{ icon: React.ComponentType<{ className?: string }>; color: string; text: string }> = [
    {
      icon: XCircle,
      color: 'text-red-600',
      text: 'Never click links inside a spam email — not even to "unsubscribe." Real unsubscribe links only help when you actually recognize the sender.',
    },
    {
      icon: XCircle,
      color: 'text-red-600',
      text: 'Never reply "STOP" or "REMOVE" to a spam text or email. It confirms your address is real and you\'ll get MORE spam.',
    },
    {
      icon: CheckCircle2,
      color: 'text-green-600',
      text: 'Only use unsubscribe links for senders you DO remember signing up with (your bank, a store you shop at, a newsletter you wanted).',
    },
    {
      icon: ShieldCheck,
      color: 'text-green-600',
      text: 'When in doubt, mark it as spam. Your email provider learns from this and filters similar messages automatically.',
    },
    {
      icon: ShieldAlert,
      color: 'text-amber-600',
      text: 'Never give passwords, Social Security numbers, or card details in reply to an email — no matter how official it looks.',
    },
  ];

  return (
    <Card className="mt-8 border-2 border-amber-300/70 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-amber-600" />
          <h3 className="text-xl font-bold">The golden rules</h3>
        </div>
        <ul className="space-y-3">
          {rules.map((r, i) => {
            const Icon = r.icon;
            return (
              <li key={i} className="flex gap-3 items-start">
                <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${r.color}`} />
                <p className="text-base leading-relaxed">{r.text}</p>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

function RedFlagsCard() {
  const flags = [
    { title: 'Urgency or threats', detail: '"Your account will be closed in 24 hours" — real companies don\'t use countdown timers to scare you into acting.' },
    { title: 'Generic greetings', detail: '"Dear Customer" or "Hello User" — your bank and Amazon know your name. Scammers often don\'t.' },
    { title: 'Mismatched sender address', detail: 'Email says it\'s from Apple, but the actual address is "apple-support@randomsite.com." Always check the full address, not just the display name.' },
    { title: 'Requests for passwords, SSN, or payment info', detail: 'No real company will ever ask for this by email. Ever. Delete it.' },
    { title: 'Spelling and grammar mistakes', detail: 'Big companies have editors. If the email reads like it was written in a hurry by someone who doesn\'t speak English well, it\'s suspicious.' },
    { title: 'Suspicious attachments', detail: 'Unexpected PDFs, .zip files, or Word documents from strangers can contain viruses. Don\'t open them.' },
    { title: 'Links that don\'t match the sender', detail: 'Hover your mouse over a link (computer) or press and hold (phone) — the real address appears. If it doesn\'t match the company name, it\'s a scam.' },
  ];

  return (
    <Card className="border-red-300/70 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <h3 className="text-xl font-bold text-red-900 dark:text-red-200">Red flags that mean "phishing scam"</h3>
        </div>
        <p className="text-base text-muted-foreground mb-4">
          If an email has ANY of these, treat it as a scam. Don\'t click anything — mark it as spam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flags.map((f, i) => (
            <div key={i} className="flex gap-3">
              <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-base">{f.title}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 rounded-lg bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900/40 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-base mb-1">Not sure about a specific link?</p>
            <p className="text-base text-muted-foreground">
              Paste it into our{' '}
              <Link to="/tools/phishing-scanner" className="text-amber-700 dark:text-amber-300 underline font-medium">
                Phishing Scanner
              </Link>
              {' '}to check for warning signs before you click.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PromotionalEmailsCard() {
  return (
    <Card className="border-2 border-blue-200/60 dark:border-blue-900/40">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Inbox className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold">What about promotional emails I actually want?</h3>
        </div>
        <p className="text-base text-muted-foreground mb-5">
          You don\'t have to unsubscribe from everything. Here\'s how to keep newsletters and deals without cluttering your main inbox.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/40 border border-border">
            <p className="font-semibold text-base mb-1 flex items-center gap-2">
              <span>📧</span> Gmail Promotions tab
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Gmail automatically sorts deals and newsletters into a "Promotions" tab. Turn it on under Settings → Inbox → Categories. Check the tab when you feel like browsing — not every time the phone buzzes.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/40 border border-border">
            <p className="font-semibold text-base mb-1 flex items-center gap-2">
              <span>🎯</span> Outlook Focused Inbox
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Outlook splits your mail into "Focused" (important) and "Other" (everything else). Enable under View → Show Focused Inbox. Promotions land in "Other" so they don\'t interrupt you.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/40 border border-border">
            <p className="font-semibold text-base mb-1 flex items-center gap-2">
              <span>📁</span> "Newsletters" folder
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Works in every provider. Create a folder called "Newsletters" and a filter/rule that moves anything with "unsubscribe" in the body into it. Your inbox stays clean; you can still read newsletters when you want.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WeeklyRoutineCard() {
  const tasks = [
    { title: 'Delete last week\'s newsletters', detail: 'Open your Newsletters or Promotions folder → select all → delete. If you didn\'t read them by now, you never will.' },
    { title: 'Check your Spam / Junk folder', detail: 'Scroll through for false positives — bills, appointment reminders, family messages. Click "Not spam" on anything that shouldn\'t be there.' },
    { title: 'Unsubscribe from 2–3 lists', detail: 'Pick the ones that keep annoying you. Use the official unsubscribe link if you remember signing up; otherwise mark as spam.' },
    { title: 'Archive what you want to keep', detail: 'For emails you might need later (receipts, travel confirmations, medical info) — hit Archive, not Delete. It hides them from your inbox but keeps them searchable.' },
    { title: 'Block one persistent sender', detail: 'If the same address keeps finding its way in, take 30 seconds to block it. Future-you will be grateful.' },
  ];

  return (
    <Card className="border-2 border-green-300/60 dark:border-green-900/40 bg-green-50/30 dark:bg-green-950/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <ListChecks className="h-5 w-5 text-green-700 dark:text-green-400" />
          <h3 className="text-xl font-bold">5-minute weekly cleanup routine</h3>
        </div>
        <p className="text-base text-muted-foreground mb-5">
          Pick a day — Sunday afternoon is a good one. Five minutes a week beats an hour of dread once a year.
        </p>

        <ol className="space-y-3">
          {tasks.map((t, i) => (
            <li key={i} className="flex gap-3 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-border">
              <div
                aria-hidden
                className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm"
              >
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-base">{t.title}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function FaqCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Common questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold min-h-14">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

function RelatedToolsCard() {
  const related: Array<{ to: string; label: string; desc: string; Icon: React.ComponentType<{ className?: string }> }> = [
    { to: '/tools/phishing-scanner', label: 'Phishing Scanner', desc: 'Paste a suspicious link to check for warning signs before you click.', Icon: LinkIcon },
    { to: '/tools/is-this-real', label: 'Is This Real?', desc: 'Quick check on whether a message, call, or email is a scam.', Icon: ShieldCheck },
    { to: '/tools/safe-link-checker', label: 'Safe Link Checker', desc: 'See where a short link really leads before you tap it.', Icon: LinkIcon },
    { to: '/guides?category=safety', label: 'Safety guides', desc: 'Browse our plain-English guides on staying safe online.', Icon: ShieldAlert },
  ];

  return (
    <Card className="border-2 border-amber-200/60 dark:border-amber-900/40">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Related tools and guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {related.map(({ to, label, desc, Icon }) => (
            <Link
              key={to}
              to={to}
              className="block p-4 rounded-lg border border-border hover:border-amber-400 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 transition-colors min-h-14"
            >
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-base">{label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
