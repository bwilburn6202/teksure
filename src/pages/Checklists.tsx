import { useState, type ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import {
  Printer,
  ArrowLeft,
  Smartphone,
  PhoneOff,
  Heart,
  Plane,
  CalendarCheck,
  Sparkles,
  Monitor,
  ShieldAlert,
  Users,
  Headphones,
  ListChecks,
} from 'lucide-react';

/* ───────────────────────────── Types & Data ────────────────────────────── */

type ChecklistId =
  | 'new-phone-setup'
  | 'scam-response'
  | 'loved-one-passed'
  | 'before-travel'
  | 'monthly-maintenance'
  | 'yearly-cleanup'
  | 'new-computer'
  | 'identity-theft'
  | 'family-legacy'
  | 'remote-help-prep';

interface ChecklistSection {
  title: string;
  items: string[];
}

interface ChecklistMeta {
  id: ChecklistId;
  title: string;
  tagline: string;
  Icon: typeof Smartphone;
  /** Very light warm bg that prints cleanly in B&W */
  bg: string;
  /** Warm accent for borders/headings — different per checklist */
  accent: string;
  slug: string; // URL segment
  sections: ChecklistSection[];
}

const CHECKLISTS: ChecklistMeta[] = [
  {
    id: 'new-phone-setup',
    title: 'New Phone Setup Day',
    tagline: 'From the box to confident in a week.',
    Icon: Smartphone,
    bg: '#EFF6FF',
    accent: '#1D4ED8',
    slug: 'new-phone-setup',
    sections: [
      {
        title: 'Before you open the box',
        items: [
          'Charge the new phone to at least 50% while you set it up',
          'Keep the old phone nearby, charged, and unlocked',
          'Find and write down your Apple ID or Google account password',
          'Connect to your home WiFi (both phones on the same network)',
        ],
      },
      {
        title: 'Day 1 — setup',
        items: [
          'Follow the on-screen "hello" setup — take it slow',
          'Choose "Transfer from old phone" to copy contacts, photos, apps',
          'Set a 6-digit passcode you will actually remember',
          'Turn on Face ID or fingerprint — it is safer and faster',
          'Sign in to your Apple ID or Google account',
          'Turn on automatic iCloud or Google backup',
          'Install one essential app to confirm the app store works',
        ],
      },
      {
        title: 'First week',
        items: [
          'Make a test call to a family member',
          'Send a test text with a photo attached',
          'Open your email and confirm it arrives on the new phone',
          'Check that your photos copied over — scroll to the oldest one',
          'Put contacts for family on speed dial / favorites',
          'Erase the old phone only after everything is confirmed working',
        ],
      },
      {
        title: 'Keep near the phone',
        items: [
          'Case, screen protector, and charging cable — label the cable',
          'Write your Apple ID / Google email in a safe place at home',
        ],
      },
    ],
  },
  {
    id: 'scam-response',
    title: 'I Got a Scam Call or Text',
    tagline: 'Exactly what to do — right now.',
    Icon: PhoneOff,
    bg: '#FFF4E6',
    accent: '#B45309',
    slug: 'scam-response',
    sections: [
      {
        title: 'Right now — 30 seconds',
        items: [
          'Hang up. Stop texting back. Do not click any link',
          'Do not say "yes" or give your name, address, or card info',
          'Take a breath — real companies never demand immediate action',
        ],
      },
      {
        title: 'Next hour — if you gave them anything',
        items: [
          'If you gave a credit card: call the number on the back of the card. Freeze it',
          'If you gave a bank login: call the bank directly using the number on your statement',
          'If you gave a Social Security number: go to IdentityTheft.gov and file a report',
          'If you sent gift cards: call the gift card company and ask to freeze them',
          'If you let them onto your computer: unplug it from WiFi and call a trusted tech',
        ],
      },
      {
        title: 'Today',
        items: [
          'Change the password on any account they might have touched',
          'Turn on two-factor authentication for email and banking',
          'Tell one trusted family member what happened — out loud',
          'Write down the phone number, email, or link that was used',
        ],
      },
      {
        title: 'This week',
        items: [
          'Report the scam at ReportFraud.ftc.gov',
          'Report scam texts by forwarding to 7726 (SPAM)',
          'Check your credit report for new accounts you did not open',
          'Consider a credit freeze at all three bureaus — it is free',
        ],
      },
    ],
  },
  {
    id: 'loved-one-passed',
    title: 'My Loved One Passed Away',
    tagline: 'Digital account priorities — one step at a time.',
    Icon: Heart,
    bg: '#FDF2F8',
    accent: '#9D174D',
    slug: 'loved-one-passed',
    sections: [
      {
        title: 'First 48 hours — only if you can',
        items: [
          'Nothing here is urgent. Take the time you need first',
          'Do not close any accounts yet — you may need access to them',
          'Gather: death certificate (order 10+ copies), marriage certificate, will',
          'Find their phone, computer, and any password book or notebook',
        ],
      },
      {
        title: 'First week',
        items: [
          'Ask family not to post the death on social media until you are ready',
          'Check their email inbox for bill notices and subscription renewals',
          'Make a list of accounts you know about — bank, email, streaming, utilities',
          'Contact their bank before freezing accounts — ask about joint access',
        ],
      },
      {
        title: 'First month — big accounts',
        items: [
          'Social Security: call 1-800-772-1213 to report the death',
          'Pension or 401(k): contact the administrator',
          'Life insurance: file a claim with the death certificate',
          'Credit bureaus: request a "deceased" flag at Experian, Equifax, TransUnion',
          'DMV: cancel their driver license to prevent identity theft',
        ],
      },
      {
        title: 'Digital accounts — when you are ready',
        items: [
          'Apple ID: apple.com/legal/digital-legacy (needs a Legacy Contact key)',
          'Google: myaccount.google.com — Inactive Account Manager',
          'Facebook: facebook.com/help — Memorialize or delete',
          'Email (Gmail, Outlook): most keep mail for family with a death certificate',
          'Subscriptions (Netflix, Amazon, gym): cancel as recurring charges appear',
        ],
      },
      {
        title: 'You do not have to do this alone',
        items: [
          'Ask a trusted family member to sit with you during each call',
          'TekSure\'s Widowhood Tech Hub has scripts for each call',
        ],
      },
    ],
  },
  {
    id: 'before-travel',
    title: 'Before You Travel',
    tagline: 'Tech prep so nothing stresses you on the road.',
    Icon: Plane,
    bg: '#ECFEFF',
    accent: '#0E7490',
    slug: 'before-travel',
    sections: [
      {
        title: 'One week before',
        items: [
          'Back up your phone to iCloud or Google (plugged in, on WiFi, overnight)',
          'Download offline maps of your destination in Google Maps or Apple Maps',
          'Check your cell plan — call the carrier about international roaming',
          'Save boarding passes, hotel confirmations, and IDs to your wallet app',
          'Tell your bank and credit card company your travel dates',
          'Turn on "Find My" on every device you are bringing',
        ],
      },
      {
        title: 'Day of travel',
        items: [
          'Charge every device the night before — phone, watch, tablet, laptop',
          'Pack a charging cable and power brick in your carry-on, not checked bag',
          'Screenshot your hotel address and directions in case you lose signal',
          'Put your phone on airplane mode before takeoff, WiFi back on in the air',
        ],
      },
      {
        title: 'While traveling',
        items: [
          'Use the hotel WiFi — but never log in to bank or email on public WiFi',
          'Keep location sharing on with one family member — peace of mind',
          'Photograph your passport and keep a copy in your email',
        ],
      },
      {
        title: 'When you get home',
        items: [
          'Turn off international roaming on your phone',
          'Review your credit card charges for anything unfamiliar',
          'Back up the photos from your trip before they fill your storage',
        ],
      },
    ],
  },
  {
    id: 'monthly-maintenance',
    title: 'Monthly Tech Maintenance',
    tagline: 'Fifteen minutes. Once a month. Saves hours later.',
    Icon: CalendarCheck,
    bg: '#F0FDF4',
    accent: '#15803D',
    slug: 'monthly-maintenance',
    sections: [
      {
        title: 'Phone (5 minutes)',
        items: [
          'Install pending iOS or Android updates',
          'Delete 5 apps you have not opened in 90 days',
          'Clear photos you do not need — duplicates, screenshots, blurry shots',
          'Restart the phone — hold power and slide to power off, then back on',
        ],
      },
      {
        title: 'Computer (5 minutes)',
        items: [
          'Install pending Windows or macOS updates',
          'Empty the Trash / Recycle Bin',
          'Run a quick virus scan (Windows: Security; Mac: no action needed)',
          'Restart the computer fully — do not only close the lid',
        ],
      },
      {
        title: 'Accounts (5 minutes)',
        items: [
          'Review credit card charges — flag anything you do not recognize',
          'Cancel one subscription you are not actually using',
          'Check email inbox size — delete or archive older than 1 year',
          'Make sure two-factor is still on for your email and bank',
        ],
      },
    ],
  },
  {
    id: 'yearly-cleanup',
    title: 'Yearly Tech Cleanup',
    tagline: 'The once-a-year audit that keeps your digital life tidy.',
    Icon: Sparkles,
    bg: '#F5F3FF',
    accent: '#6D28D9',
    slug: 'yearly-cleanup',
    sections: [
      {
        title: 'Accounts & passwords',
        items: [
          'Change your email password — it unlocks everything else',
          'Change your banking passwords',
          'Remove old devices from your Apple ID or Google account',
          'Review "apps with access" in Google, Apple, Facebook — revoke strangers',
          'Confirm two-factor is on for email, bank, and cloud storage',
        ],
      },
      {
        title: 'Devices',
        items: [
          'Back up every device you own — phone, tablet, laptop',
          'Check battery health — replace if under 80%',
          'Update every device to the latest OS',
          'Wipe and donate any device you no longer use',
        ],
      },
      {
        title: 'Money & subscriptions',
        items: [
          'List every recurring charge from the last 12 months',
          'Cancel anything you did not use or forgot existed',
          'Check your credit report at AnnualCreditReport.gov (free, official)',
          'Freeze your credit at the three bureaus if you are not actively borrowing',
        ],
      },
      {
        title: 'Digital life',
        items: [
          'Back up photos to at least two places (cloud + external drive)',
          'Unsubscribe from 10 email lists you ignore',
          'Search your name on Google — see what a stranger would find',
          'Update your will or legacy contacts if anything changed',
        ],
      },
    ],
  },
  {
    id: 'new-computer',
    title: 'Setting Up a New Computer',
    tagline: 'From the box to ready-to-use — in order.',
    Icon: Monitor,
    bg: '#FEFCE8',
    accent: '#A16207',
    slug: 'new-computer',
    sections: [
      {
        title: 'Box opening',
        items: [
          'Plug the charger in before turning on — brand-new batteries are often low',
          'Keep the box and paperwork until everything works (for returns)',
          'Note the serial number on the bottom — photograph it for records',
        ],
      },
      {
        title: 'First hour',
        items: [
          'Follow the on-screen setup — region, language, keyboard',
          'Connect to your home WiFi',
          'Create a local user account with a strong password you can remember',
          'Sign in to your Apple ID (Mac) or Microsoft account (Windows)',
          'Set a passcode or fingerprint — do not skip this',
          'Install pending OS updates before anything else',
        ],
      },
      {
        title: 'First day',
        items: [
          'Install your web browser of choice (Chrome, Firefox, Edge, Safari)',
          'Sign in to email on the web — not through outdated desktop apps',
          'Download and sign in to your password manager',
          'Copy files from your old computer using a flash drive, iCloud, or OneDrive',
          'Print a test page to confirm the printer works',
          'Set up automatic backups — Time Machine (Mac) or File History (Windows)',
        ],
      },
      {
        title: 'First week',
        items: [
          'Customize the Dock / Start Menu with apps you actually use',
          'Bookmark 5 sites you visit every day',
          'Increase text size in System Settings if anything feels too small',
          'Wipe the old computer only after everything is confirmed working',
        ],
      },
    ],
  },
  {
    id: 'identity-theft',
    title: 'Identity Theft Response',
    tagline: 'The first 72 hours matter most. Here is the order.',
    Icon: ShieldAlert,
    bg: '#FEF2F2',
    accent: '#B91C1C',
    slug: 'identity-theft',
    sections: [
      {
        title: 'First hour',
        items: [
          'Do not panic. You have 72 hours to stop most of the damage',
          'Call the bank or card company with the fraudulent charge — freeze the card',
          'Change your email password first — it is the master key',
          'Change your bank password second — from a different device if possible',
        ],
      },
      {
        title: 'First 24 hours',
        items: [
          'File a report at IdentityTheft.gov — it creates your official recovery plan',
          'Place a fraud alert at one credit bureau (they notify the other two)',
          'Turn on two-factor authentication for email and banking',
          'Review the last 30 days of charges on every card and account',
          'Save every email, text, or letter from the thief — do not delete',
        ],
      },
      {
        title: 'First week',
        items: [
          'Freeze your credit at Experian, Equifax, and TransUnion — all three, all free',
          'File a police report if the thief used your physical identity',
          'Close any fraudulent accounts that were opened in your name',
          'Call the IRS if your Social Security number was used for tax fraud',
          'Notify the Social Security Administration if your SSN was exposed',
        ],
      },
      {
        title: 'First month',
        items: [
          'Pull free credit reports from all three bureaus and review line-by-line',
          'Dispute any account or charge that is not yours in writing',
          'Set up free credit monitoring (many banks offer this included)',
          'Review your IdentityTheft.gov recovery plan — check off each step',
        ],
      },
    ],
  },
  {
    id: 'family-legacy',
    title: 'Family Digital Legacy Plan',
    tagline: 'The conversation and the documents — before you need them.',
    Icon: Users,
    bg: '#FDF4FF',
    accent: '#A21CAF',
    slug: 'family-legacy',
    sections: [
      {
        title: 'The conversation',
        items: [
          'Pick a trusted person — usually a spouse, adult child, or close friend',
          'Tell them where your password book or password manager lives',
          'Tell them where the will and important papers are kept',
          'Tell them which bank you use and who your financial advisor is',
          'Walk them through unlocking your phone at least once',
        ],
      },
      {
        title: 'The documents',
        items: [
          'Write a will — free templates at your state\'s Attorney General site',
          'Name an Apple Legacy Contact — iPhone Settings > your name > Sign-In & Security',
          'Name a Google Inactive Account Manager — myaccount.google.com',
          'Set Facebook Legacy Contact — Settings > Memorialization',
          'Name a durable power of attorney for finances and healthcare',
        ],
      },
      {
        title: 'The accounts list',
        items: [
          'Bank and credit card accounts — names only, not passwords',
          'Email accounts (Gmail, Outlook) — with master password location',
          'Streaming, subscriptions, and auto-pays — so they can cancel',
          'Social media accounts — Facebook, Instagram, X, LinkedIn',
          'Digital photos — where they live and how to access them',
          'Cloud storage — iCloud, Google Drive, Dropbox, OneDrive',
        ],
      },
      {
        title: 'Where to keep all of this',
        items: [
          'A locked home safe — NOT a safe deposit box (hard to access after death)',
          'A sealed envelope with your lawyer',
          'A trusted password manager with emergency access enabled',
          'Review and update this every January 1 — set a recurring reminder',
        ],
      },
    ],
  },
  {
    id: 'remote-help-prep',
    title: 'Getting Help Remotely',
    tagline: 'Prep for a tech-support session that actually works.',
    Icon: Headphones,
    bg: '#F0F9FF',
    accent: '#075985',
    slug: 'remote-help-prep',
    sections: [
      {
        title: 'Before the call',
        items: [
          'Plug the device in — it should not die mid-session',
          'Write down exactly what is wrong, in your own words',
          'Note any error messages word-for-word, or take a photo of the screen',
          'Close apps you don\'t need — makes the screen easier to see',
          'Be in a quiet room with good WiFi',
          'Have your password manager or password book at hand',
        ],
      },
      {
        title: 'Have ready',
        items: [
          'A second device to read instructions from (phone or tablet)',
          'Pen and paper for writing down anything important',
          'The charger and cable for the device you need help with',
          'The WiFi password — sometimes they ask',
        ],
      },
      {
        title: 'During the session',
        items: [
          'Never share your bank password — a real tech will never need it',
          'Never send gift cards as payment — always a scam',
          'Ask the tech to go slowly and explain what they are doing',
          'Ask them to pause if you need to write something down',
          'It is okay to say "can you say that again, plainly?"',
        ],
      },
      {
        title: 'After the session',
        items: [
          'Write down what was done — for next time',
          'Restart the device once more to make sure everything still works',
          'Remove any screen-sharing tool the tech installed, if any',
          'Change the password for any account they touched on your behalf',
        ],
      },
    ],
  },
];

/* ────────────────────────── Print Layout Frame ─────────────────────────── */

/**
 * A full US-Letter (8.5"×11") printable page frame for checklists.
 * Items render with BIG checkboxes (20-24px) next to each action line, grouped
 * into sections like "Today", "This week", "This month". Prints edge-to-edge
 * with its own @page rule.
 */
function PrintFrame({
  checklist,
  children,
}: {
  checklist: ChecklistMeta;
  children: ReactNode;
}) {
  const onlineUrl = `teksure.com/checklists/${checklist.slug}`;
  const totalSteps = checklist.sections.reduce(
    (sum, s) => sum + s.items.length,
    0
  );
  return (
    <div className="checklist-outer">
      {/* Scoped CSS: sizes in inches/pt → true to print. */}
      <style>{`
        .checklist-outer { display: flex; justify-content: center; padding: 24px 12px 48px; }
        .checklist-page {
          width: 8.5in;
          min-height: 11in;
          padding: 0.55in 0.65in 0.5in;
          box-sizing: border-box;
          position: relative;
          color: #0f172a;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.25);
          border-radius: 4px;
          overflow: hidden;
        }
        .checklist-page h1 {
          font-size: 30pt;
          line-height: 1.05;
          margin: 0 0 4pt;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .checklist-page .tagline {
          font-size: 13.5pt;
          margin: 0 0 12pt;
          font-weight: 500;
          opacity: 0.85;
        }
        .checklist-page h2 {
          font-size: 14pt;
          margin: 12pt 0 4pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3pt 0 3pt 10pt;
          border-left: 4pt solid currentColor;
        }
        .checklist-page .section { margin-bottom: 6pt; }
        .checklist-page ul.items {
          list-style: none;
          padding: 0;
          margin: 4pt 0 0;
        }
        .checklist-page ul.items li {
          display: grid;
          grid-template-columns: 22pt 1fr;
          align-items: flex-start;
          column-gap: 10pt;
          padding: 4.5pt 0 4.5pt 4pt;
          border-top: 0.5pt solid rgba(15,23,42,0.12);
          font-size: 11.75pt;
          line-height: 1.38;
          font-weight: 500;
          color: #0f172a;
        }
        .checklist-page ul.items li:first-child { border-top: 0; }
        .checklist-page .checkbox {
          width: 18pt;
          height: 18pt;
          border: 1.25pt solid currentColor;
          border-radius: 3pt;
          margin-top: 2pt;
          background: rgba(255,255,255,0.4);
        }
        .checklist-page header.cl-head {
          display: flex;
          align-items: center;
          gap: 12pt;
          margin-bottom: 8pt;
        }
        .checklist-page header.cl-head .chip {
          font-size: 9.5pt;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 700;
          padding: 3pt 9pt;
          border-radius: 999pt;
          border: 1pt solid currentColor;
        }
        .checklist-page .steps-chip {
          font-size: 9.5pt;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          padding: 3pt 9pt;
          border-radius: 999pt;
          background: currentColor;
          color: #fff;
        }
        .checklist-page .steps-chip span { color: #fff; }
        .checklist-page .rule {
          height: 2pt;
          background: currentColor;
          opacity: 0.85;
          margin: 0 0 10pt;
          border-radius: 2pt;
        }
        .checklist-page .foot {
          position: absolute;
          left: 0.65in;
          right: 0.65in;
          bottom: 0.35in;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 9.5pt;
          color: rgba(15,23,42,0.7);
          border-top: 0.75pt solid rgba(15,23,42,0.25);
          padding-top: 5pt;
        }
        .checklist-page .foot .brand {
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #0f172a;
        }

        @page { size: letter; margin: 0; }
        @media print {
          html, body { background: #fff !important; }
          .no-print, nav, header.site-header, footer.site-footer { display: none !important; }
          .checklist-outer { padding: 0 !important; }
          .checklist-page {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            page-break-after: always;
          }
        }
      `}</style>

      <div
        className="checklist-page"
        style={{ backgroundColor: checklist.bg, color: checklist.accent }}
      >
        <header className="cl-head">
          <checklist.Icon style={{ width: 32, height: 32 }} aria-hidden />
          <span className="chip">TekSure Checklist</span>
          <span className="steps-chip" style={{ backgroundColor: checklist.accent }}>
            <span>{totalSteps} steps</span>
          </span>
        </header>

        <h1 style={{ color: '#0f172a' }}>{checklist.title}</h1>
        <p className="tagline" style={{ color: '#0f172a' }}>
          {checklist.tagline}
        </p>
        <div className="rule" />

        <div style={{ color: checklist.accent }}>{children}</div>

        <div className="foot">
          <span className="brand">TekSure</span>
          <span>
            Online version: <strong>{onlineUrl}</strong>
          </span>
          <span>Print &amp; check off as you go.</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────── Checklist Renderer ─────────────────────────── */

function ChecklistContent({ checklist }: { checklist: ChecklistMeta }) {
  return (
    <>
      {checklist.sections.map((section) => (
        <div className="section" key={section.title}>
          <h2>{section.title}</h2>
          <ul className="items">
            {section.items.map((item, i) => (
              <li key={i}>
                <span className="checkbox" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────── Thumbnail Preview ─────────────────────────── */

function ChecklistThumb({
  checklist,
  onOpen,
}: {
  checklist: ChecklistMeta;
  onOpen: () => void;
}) {
  const { Icon } = checklist;
  const totalSteps = checklist.sections.reduce(
    (sum, s) => sum + s.items.length,
    0
  );
  // Show a short preview: first 3–4 items of the first section
  const previewItems = checklist.sections[0].items.slice(0, 4);
  return (
    <div
      className="group relative rounded-2xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col"
      style={{
        backgroundColor: checklist.bg,
        borderColor: `${checklist.accent}33`,
      }}
    >
      <div className="p-5 flex-1">
        <div
          className="flex items-center justify-between gap-2 mb-3"
          style={{ color: checklist.accent }}
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
            <Icon className="h-4 w-4" />
            Checklist
          </div>
          <span
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: checklist.accent }}
          >
            {totalSteps} steps
          </span>
        </div>
        <h3 className="text-lg font-extrabold leading-tight mb-1 text-slate-900">
          {checklist.title}
        </h3>
        <p className="text-sm text-slate-700 mb-4">{checklist.tagline}</p>
        <ul className="space-y-1.5">
          {previewItems.map((line, i) => (
            <li key={i} className="flex gap-2 text-xs text-slate-700">
              <span
                className="mt-0.5 h-3 w-3 shrink-0 rounded-sm border"
                style={{ borderColor: checklist.accent }}
                aria-hidden
              />
              <span className="line-clamp-1">{line}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-2 p-3 border-t bg-white/60 backdrop-blur-sm">
        <span className="text-xs text-slate-600">8.5 × 11 • Printable</span>
        <Button
          size="sm"
          onClick={onOpen}
          className="gap-1.5"
          style={{ backgroundColor: checklist.accent, color: 'white' }}
        >
          <Printer className="h-3.5 w-3.5" />
          Print checklist
        </Button>
      </div>
    </div>
  );
}

/* ────────────────────────────── The Page ───────────────────────────────── */

export default function Checklists() {
  const [selectedId, setSelectedId] = useState<ChecklistId | null>(null);
  const selected = selectedId
    ? CHECKLISTS.find((c) => c.id === selectedId) ?? null
    : null;

  const handlePrint = () => window.print();

  return (
    <>
      <SEOHead
        title="Printable Checklists — One Step at a Time | TekSure"
        description="Do-this-now printable checklists for common tech situations. Tape one to the fridge. Keep one by the phone. No jargon — only the next step, and the one after that."
        path="/checklists"
      />

      {/* Nav hidden when printing */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb (non-print) */}
        <div className="container max-w-6xl pt-4 px-4 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Checklists' }]} />
        </div>

        {selected ? (
          <>
            {/* Toolbar — hidden on print */}
            <div className="print:hidden sticky top-0 z-10 bg-background/90 backdrop-blur border-b">
              <div className="container max-w-5xl flex items-center justify-between py-3 px-4">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedId(null)}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All checklists
                </Button>
                <div className="text-sm text-muted-foreground hidden md:block">
                  Preview at real size — prints exactly like you see it.
                </div>
                <Button onClick={handlePrint} className="gap-2">
                  <Printer className="h-4 w-4" />
                  Print this checklist
                </Button>
              </div>
            </div>

            {/* The printable checklist */}
            <PrintFrame checklist={selected}>
              <ChecklistContent checklist={selected} />
            </PrintFrame>

            <p className="print:hidden text-center text-sm text-muted-foreground pb-8 px-4">
              Tip: in the print dialog, choose <strong>Letter</strong>, margins{' '}
              <strong>None</strong>, and enable <strong>Background graphics</strong>{' '}
              to keep the color tint — or turn it off for a pure black-and-white
              copy.
            </p>
          </>
        ) : (
          <>
            {/* Hero */}
            <section className="border-b py-14 print:hidden">
              <div className="container max-w-3xl text-center px-4">
                <ListChecks className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                  Printable Checklists — Just Check the Boxes
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                  Do-this-now action lists. Print. Tape to the fridge. Check
                  them off with a pen.
                </p>
                <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
                  Different from our Reference Cards (which are info-dense).
                  These are the next step, and the one after that.
                </p>
              </div>
            </section>

            {/* Grid */}
            <section className="container max-w-6xl py-12 px-4 print:hidden">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CHECKLISTS.map((checklist) => (
                  <ChecklistThumb
                    key={checklist.id}
                    checklist={checklist}
                    onOpen={() => setSelectedId(checklist.id)}
                  />
                ))}
              </div>

              <div className="mt-12 rounded-2xl border bg-muted/40 p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-2">
                  Reference Cards vs. Checklists
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Reference Cards</strong> are what-to-know — pin them
                  up so you can <em>look</em> at them. <strong>Checklists</strong>{' '}
                  are what-to-do — print them, and <em>work through</em> them.
                  Both live on paper, both are free forever, both fit on one
                  page.
                </p>
              </div>
            </section>
          </>
        )}
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
