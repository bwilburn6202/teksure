import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Printer,
  BookmarkIcon,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Phone,
  FileText,
  HardDrive,
  Image as ImageIcon,
  Smartphone,
  Download,
  ExternalLink,
  ArrowRight,
  BookOpen,
  LifeBuoy,
  Scale,
  DollarSign,
  HandHeart,
  Sparkles,
  Info,
  HelpCircle,
  Users,
  Mail,
  ChevronRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ──────────────────────────────────────────────────────────────────────────
 * Grief Tech Helper
 * ------------------------------------------------------------------------
 * A gentle, senior-friendly guide for people handling a loved one's digital
 * life after death — accounts, photos, devices, and final wishes. Written
 * with care. No timers. No jokes. No pressure.
 * ──────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────── Data ───────────────────────────────────── */

interface UrgentStep {
  title: string;
  detail: string;
  icon: typeof Phone;
}

const urgentSteps: UrgentStep[] = [
  {
    title: 'Notify the primary phone carrier',
    detail:
      "You can forward calls to a family member, suspend the line, or keep it running if the voicemail and number hold meaning for the family. There is no wrong choice.",
    icon: Phone,
  },
  {
    title: 'Tell the banks you know about',
    detail:
      "A quick call to each bank lets them flag the account. They will mail paperwork to the executor. You do not need to close anything in the first week.",
    icon: DollarSign,
  },
  {
    title: 'Cancel recurring subscriptions that auto-bill',
    detail:
      "Netflix, Amazon, gym apps, streaming services, newspapers. Use the card statement from the last three months as your map. Cancel what the family will not use.",
    icon: FileText,
  },
  {
    title: 'Secure their phone — never guess the passcode',
    detail:
      "After 10 wrong attempts an iPhone can erase itself, and Android devices often lock for an hour. If you know the code, plug the phone in and keep it safe. If you do not, leave it alone until you read the Apple or Google sections below.",
    icon: Smartphone,
  },
  {
    title: 'Notify Social Security Administration',
    detail:
      "The funeral home usually handles this, but verify by calling 1-800-772-1213. This stops future benefit checks and starts survivor benefits for a spouse.",
    icon: Info,
  },
  {
    title: 'Order 10 to 15 certified death certificates',
    detail:
      "Nearly every bank, insurance company, and government agency wants an original. The funeral home orders these through the county vital records office. It is better to have too many than too few.",
    icon: FileText,
  },
];

/* ── Account walkthrough data ────────────────────────────────────────── */

interface AccountEntry {
  id: string;
  name: string;
  options: { label: string; detail: string }[];
  paperwork: string;
  timeline: string;
  officialLink?: { label: string; href: string };
  note?: string;
}

const accounts: AccountEntry[] = [
  {
    id: 'apple',
    name: 'Apple (iCloud, Photos, iMessage)',
    options: [
      {
        label: 'Digital Legacy (if set up)',
        detail:
          "If your loved one added a Legacy Contact in Settings → Apple ID before they passed, you already have an access key. Pair it with a death certificate and Apple will give you their iCloud photos, notes, files, and messages.",
      },
      {
        label: 'Without a Legacy Contact',
        detail:
          "You will need a court order naming you the personal representative of the estate. Apple's legal process is slow but it does work. File through their online request form.",
      },
    ],
    paperwork: 'Death certificate, Legacy Contact access key (if available), or court order naming you the estate representative.',
    timeline: 'With a Legacy Contact: 2 to 4 weeks. Without: often 2 to 4 months.',
    officialLink: {
      label: 'Apple Digital Legacy Request',
      href: 'https://support.apple.com/en-us/HT212360',
    },
  },
  {
    id: 'google',
    name: 'Google (Gmail, Photos, Drive, YouTube)',
    options: [
      {
        label: 'Inactive Account Manager (if set up)',
        detail:
          "If your loved one set this up (at myaccount.google.com/inactive), the account will automatically share with you after a period of inactivity. Check your email — they may have named you already.",
      },
      {
        label: 'Request access to a deceased person\'s account',
        detail:
          "Google has a formal process. You upload a death certificate and proof of your relationship. Google decides case by case whether to release data, close the account, or do both.",
      },
    ],
    paperwork: 'Death certificate, your government ID, and the email address in question. Google may ask for a power of attorney or court order for full content access.',
    timeline: '1 to 3 months, sometimes longer for full data release.',
    officialLink: {
      label: 'Google Deceased Person\'s Account request',
      href: 'https://support.google.com/accounts/troubleshooter/6357590',
    },
  },
  {
    id: 'facebook',
    name: 'Facebook',
    options: [
      {
        label: 'Memorialize',
        detail:
          "Facebook changes the name on the profile to 'Remembering [Name].' Friends can still post memories, and the profile stays visible. Nothing gets deleted. This is the most common choice.",
      },
      {
        label: 'Delete the account',
        detail:
          "Facebook removes the profile entirely. Only immediate family can request this. Once deleted, the content cannot be recovered — download what you want first.",
      },
    ],
    paperwork: 'Death certificate or obituary link, proof you are immediate family (birth certificate, marriage certificate, or similar).',
    timeline: 'Memorialization: 1 to 2 weeks. Deletion: 2 to 4 weeks.',
    officialLink: {
      label: 'Facebook memorialization request',
      href: 'https://www.facebook.com/help/1017717331640041',
    },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    options: [
      {
        label: 'Memorialize',
        detail:
          "The profile is frozen in place. New followers, comments, and likes are turned off. Existing posts stay visible to the people who already followed.",
      },
      {
        label: 'Delete',
        detail:
          "The entire profile disappears, along with all photos and captions. Download any posts you want to keep before requesting deletion.",
      },
    ],
    paperwork: 'Death certificate, proof of immediate family relationship (birth or marriage certificate), and a copy of your ID.',
    timeline: '2 to 4 weeks.',
    officialLink: {
      label: 'Instagram Help — report a deceased person',
      href: 'https://help.instagram.com/264154560391256',
    },
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    options: [
      {
        label: 'Remove the profile',
        detail:
          "LinkedIn offers a memorialization-style 'hollowed profile' or full removal. There is no option to transfer or access the account content.",
      },
    ],
    paperwork: 'Member\'s name, URL of the profile, the date of passing, link to an obituary, and your relationship.',
    timeline: '2 to 6 weeks.',
    officialLink: {
      label: 'LinkedIn deceased member request',
      href: 'https://www.linkedin.com/help/linkedin/ask/ts-rdmlp',
    },
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    options: [
      {
        label: 'Deactivate only',
        detail:
          "X will deactivate the account when an immediate family member or estate representative asks. There is no way for the family to access tweets, DMs, or followers.",
      },
    ],
    paperwork: 'Death certificate, your government ID, and proof of family relationship.',
    timeline: '3 to 6 weeks.',
    note: "Save tweets and DMs by downloading their data archive first — if you have access to the login.",
  },
  {
    id: 'email',
    name: 'Email (Gmail, Outlook, Yahoo, AOL)',
    options: [
      {
        label: 'Provider access forms',
        detail:
          "Each provider has its own form and bar for access. Gmail uses the Google form above. Microsoft uses the 'Next of Kin' process. Yahoo historically closes accounts but does not release content. AOL releases content with a court order.",
      },
    ],
    paperwork: 'Death certificate plus — depending on the provider — power of attorney, court order, or estate executor papers.',
    timeline: '1 to 4 months. Email is often the hardest category.',
  },
  {
    id: 'microsoft',
    name: 'Microsoft account (Outlook, Xbox, OneDrive)',
    options: [
      {
        label: 'Next of Kin process',
        detail:
          "Microsoft's Next of Kin process releases data on a data DVD or shuts down the account. It requires a court order in most cases, plus a will or proof you are the executor.",
      },
    ],
    paperwork: 'Will, probate letter, or court order naming you as executor, plus death certificate and a copy of your ID.',
    timeline: '3 to 6 months.',
    note: "This process is thorough but can feel slow. A call to Microsoft's estate line speeds things along if you hit a wall.",
  },
  {
    id: 'amazon',
    name: 'Amazon',
    options: [
      {
        label: 'Close the account',
        detail:
          "Amazon closes the account when you call customer service and provide a death certificate. Kindle books, Prime Video, and Audible do not transfer to a new person.",
      },
    ],
    paperwork: 'Death certificate, order or account email, and proof of your relationship or executor status.',
    timeline: '1 to 3 weeks.',
    note: "Cancel Subscribe & Save items before closing the account, otherwise they keep shipping to the home.",
  },
  {
    id: 'banking',
    name: 'Banking & credit cards',
    options: [
      {
        label: 'Each bank has an estate department',
        detail:
          "Call each bank. Ask for the estate department — not a regular branch. They walk you through freezing accounts, paying final bills, and transferring funds to the estate or a beneficiary.",
      },
    ],
    paperwork: 'Death certificate, your executor documents or power of attorney, and a government-issued ID. Expect to mail certified copies.',
    timeline: 'Initial hold: days. Full transfer: 2 to 6 months depending on the estate.',
    note: "Joint accounts usually transfer to the surviving owner faster. Solo accounts almost always go through probate.",
  },
  {
    id: 'medical',
    name: 'Medical portals (MyChart, etc.)',
    options: [
      {
        label: 'Request access through the hospital system',
        detail:
          "Each hospital system has a release-of-information office. HIPAA allows access to a deceased patient's records for 50 years. The executor signs a form and requests records on paper or portal access.",
      },
    ],
    paperwork: 'Death certificate, executor papers or next-of-kin declaration, and a records request form from the hospital.',
    timeline: '30 to 60 days.',
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency wallets',
    options: [
      {
        label: 'Custodial exchange (Coinbase, Kraken, Gemini)',
        detail:
          "These work like banks — there is an estate process. Call their support line, submit death certificate and executor papers, and they transfer the holdings to a beneficiary or the estate.",
      },
      {
        label: 'Self-custody wallet (hardware device, MetaMask, etc.)',
        detail:
          "Without the seed phrase (a list of 12 or 24 words) or the private key, the funds cannot be recovered. Search desks, safes, filing cabinets, password managers, and safety deposit boxes. If you find a seed phrase, act promptly — move the funds to a new wallet or a custodial exchange.",
      },
    ],
    paperwork: 'For exchanges: death certificate, executor papers, ID, and often a notarized letter. For self-custody: the seed phrase itself.',
    timeline: 'Exchanges: 1 to 3 months. Self-custody without the phrase: usually permanent loss.',
    note: "If your loved one mentioned 'crypto' at some point, check their email for names like Coinbase, Binance, Ledger, or Trezor. A wallet you did not know about is a common surprise.",
  },
];

/* ── Printable checklist items ───────────────────────────────────────── */

const printableChecklist: { section: string; items: string[] }[] = [
  {
    section: 'First 30 days',
    items: [
      'Order 10 to 15 certified death certificates',
      'Notify Social Security Administration (1-800-772-1213)',
      'Call primary phone carrier',
      'Cancel auto-bill subscriptions (check last 3 statements)',
      'Secure their phone — do not guess the passcode',
      'Notify banks and credit card companies',
      'Notify life insurance, pension, and employer',
      'Keep all mail; do not throw anything away yet',
    ],
  },
  {
    section: 'Digital accounts',
    items: [
      'Apple — file a Digital Legacy request',
      'Google — file an Inactive Account or deceased account request',
      'Facebook — memorialize or delete',
      'Instagram — memorialize or delete',
      'LinkedIn — request profile removal',
      'Twitter / X — deactivate',
      'Email providers — file access requests',
      'Microsoft account — Next of Kin process',
      'Amazon — close account',
      'Medical portals — request records',
      'Cryptocurrency — check for seed phrases',
    ],
  },
  {
    section: 'Save memories first',
    items: [
      'Download Google Takeout (all Google data)',
      'Request Apple Legacy for photos and videos',
      'Facebook — Download your information',
      'Instagram — Download your data',
      'Save voicemails and texts before closing the phone line',
      'Record a voice memo of any voicemails you want to keep',
      'Scan or photograph printed photos',
    ],
  },
  {
    section: 'Physical devices',
    items: [
      'Back up phone contents before wiping',
      'Back up computer contents before wiping',
      'Reset smart speakers through their app',
      'Reset tablets',
      'Check external hard drives and USB sticks for memories',
      'Check drawers, safes, and filing cabinets for written passwords',
      'Keep paper letters and journals — do not recycle',
    ],
  },
  {
    section: 'Fraud watch',
    items: [
      'Watch for obituary scammers calling about debts',
      'Watch for inheritance scams by email',
      'Watch for fake utility calls',
      'Never send gift cards or wire transfers to strangers',
      'Freeze the deceased\'s credit with all three bureaus',
    ],
  },
  {
    section: 'Legal & financial',
    items: [
      'File the deceased\'s final tax return',
      'Transfer titles (car, home, investment accounts)',
      'Review estate documents with an attorney',
      'Identify transfer-on-death accounts',
      'Close business accounts if applicable',
    ],
  },
];

/* ────────────────────────── The Page ────────────────────────────────── */

export default function GriefTechHelper() {
  const [activeAccount, setActiveAccount] = useState<string>(accounts[0].id);

  const handlePrint = () => window.print();

  const selectedAccount = useMemo(
    () => accounts.find((a) => a.id === activeAccount) ?? accounts[0],
    [activeAccount],
  );

  return (
    <>
      <SEOHead
        title="After a Loved One Passes — The Digital Side | TekSure"
        description="A gentle, plain-English guide to handling accounts, photos, devices, and final wishes after someone you love passes away. No timeline. No pressure. Written for families."
        path="/tools/grief-tech-helper"
      />

      {/* Print-specific styles for the checklist */}
      <style>{`
        @media print {
          body { background: #ffffff !important; }
          .gt-no-print { display: none !important; }
          .gt-print-only { display: block !important; }
          .gt-print-page {
            padding: 0.6in 0.6in 0.5in;
            color: #0f172a;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          }
          .gt-print-page h1 { font-size: 22pt; margin: 0 0 4pt; }
          .gt-print-page h2 {
            font-size: 13pt; margin: 14pt 0 6pt;
            border-bottom: 1pt solid #cbd5e1; padding-bottom: 3pt;
          }
          .gt-print-page ul { list-style: none; padding: 0; margin: 0; }
          .gt-print-page li {
            display: flex; gap: 10pt; align-items: flex-start;
            font-size: 11pt; line-height: 1.45; margin: 3pt 0;
          }
          .gt-print-page .gt-box {
            width: 12pt; height: 12pt; border: 1pt solid #334155;
            flex-shrink: 0; margin-top: 3pt; border-radius: 2pt;
          }
          .gt-print-tag {
            font-size: 10.5pt; color: #475569; margin-bottom: 12pt;
          }
        }
        .gt-print-only { display: none; }
      `}</style>


      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container max-w-5xl pt-4 px-4 gt-no-print">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Grief & Digital Aftercare' },
            ]}
          />
        </div>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="gt-no-print relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-slate-100 to-violet-50 dark:from-violet-950/40 dark:via-slate-900 dark:to-violet-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.18),transparent_60%)]" />
          <div className="relative container max-w-5xl mx-auto px-4 pt-10 pb-12">
            <div className="flex items-center gap-3 text-violet-700 dark:text-violet-300 text-sm font-bold uppercase tracking-widest mb-4">
              <Heart className="h-5 w-5" fill="currentColor" />
              <span>Grief & Digital Aftercare</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 leading-tight">
              After a Loved One Passes — The Digital Side
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              There&apos;s no rush. Here&apos;s how to handle accounts, memories, and devices
              when you&apos;re ready.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BookmarkButton
                type="tool"
                slug="grief-tech-helper"
                title="Grief & Digital Aftercare"
                url="/tools/grief-tech-helper"
              />
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrint}
                className="gap-2 min-h-14 text-base"
              >
                <Printer className="h-5 w-5" />
                Print the one-page checklist
              </Button>
            </div>
          </div>
        </section>

        {/* ── Opening care card ─────────────────────────────────────── */}
        <section className="gt-no-print container max-w-4xl mx-auto px-4 -mt-4 relative z-10">
          <Card className="border-2 border-violet-200 dark:border-violet-900 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center">
                  <HandHeart className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Handling this tech work is an act of love.
                  </h2>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    There is no timeline. Come back whenever you&apos;re ready. Save this
                    page to a bookmark, work through one section at a time, and leave
                    the rest for another day. Your loved one&apos;s digital life will be
                    here waiting for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Section 1 — First 30 Days ─────────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={1}
            title="The first 30 days — only if something is urgent"
            subtitle="If you are in the first few weeks, focus on these. Everything else can wait."
          />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {urgentSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-11 h-11 rounded-lg bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-violet-700 dark:text-violet-300" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100">
                          {step.title}
                        </h3>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Alert className="mt-6 border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/60">
            <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            <AlertTitle className="text-base font-bold text-amber-900 dark:text-amber-200">
              A gentle note about phones
            </AlertTitle>
            <AlertDescription className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
              If you do not know the passcode, do not guess. Too many wrong attempts
              can wipe the phone permanently. Call the carrier instead — they can
              suspend the line while you figure out your next step.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Section 2 — Account-by-account walkthrough ─────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={2}
            title="Account-by-account walkthrough"
            subtitle="Each platform handles this differently. Pick one at a time."
          />

          <div className="mt-6">
            <Tabs value={activeAccount} onValueChange={setActiveAccount}>
              <TabsList className="flex flex-wrap h-auto gap-1.5 bg-slate-100 dark:bg-slate-900 p-2 mb-6">
                {accounts.map((a) => (
                  <TabsTrigger
                    key={a.id}
                    value={a.id}
                    className="min-h-14 text-base px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white"
                  >
                    {a.name.split(' (')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {accounts.map((a) => (
                <TabsContent key={a.id} value={a.id} className="mt-0">
                  <Card className="border-violet-200 dark:border-violet-900">
                    <CardContent className="p-6 md:p-8 space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {a.name}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {a.options.map((opt, i) => (
                          <div
                            key={i}
                            className="border-l-4 border-violet-300 dark:border-violet-700 pl-4 py-1"
                          >
                            <div className="flex items-start gap-2 mb-1">
                              <Badge variant="outline" className="text-xs bg-violet-50 border-violet-300 text-violet-900 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-200">
                                Option {i + 1}
                              </Badge>
                              <h4 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100">
                                {opt.label}
                              </h4>
                            </div>
                            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                              {opt.detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div>
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                            <FileText className="h-4 w-4" />
                            Paperwork needed
                          </div>
                          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                            {a.paperwork}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                            <Clock className="h-4 w-4" />
                            Typical timeline
                          </div>
                          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                            {a.timeline}
                          </p>
                        </div>
                      </div>

                      {a.note && (
                        <div className="rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900 p-4 flex gap-3">
                          <Info className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                          <p className="text-base text-violet-900 dark:text-violet-100 leading-relaxed">
                            {a.note}
                          </p>
                        </div>
                      )}

                      {a.officialLink && (
                        <div>
                          <a
                            href={a.officialLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base font-semibold text-violet-700 dark:text-violet-300 hover:underline min-h-14"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {a.officialLink.label}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ── Section 3 — Saving Memories ───────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={3}
            title="Saving the memories first"
            subtitle="Before you close any account, download what you want to keep. You cannot get it back after."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <MemoryCard
              icon={ImageIcon}
              title="Photos from the cloud"
              detail="Download photos and videos from iCloud, Google Photos, Amazon Photos, and Dropbox before closing any account. These are often the first thing families wish they had saved."
            />
            <MemoryCard
              icon={Download}
              title="Google Takeout"
              detail="Google has a single tool that packages everything — email, photos, Drive, Calendar, YouTube history — into a downloadable zip. Search for 'Google Takeout' if you have login access."
            />
            <MemoryCard
              icon={Heart}
              title="Apple Legacy Request"
              detail="If they set up a Legacy Contact, you can request a full download of their photos, notes, and files. This is the gentlest way to save years of iPhone memories."
            />
            <MemoryCard
              icon={Users}
              title="Facebook — Download Your Information"
              detail="Under Settings → Your Facebook Information, you can pull a zip of every post, photo, comment, and message. Do this before memorializing or deleting."
            />
            <MemoryCard
              icon={Phone}
              title="Texts and voicemails"
              detail="iPhone: screenshot important texts or use iMazing to save a full backup. Android: use Google's built-in backup or SMS Backup & Restore. Save voicemails through the phone app's share button before closing the line."
            />
            <MemoryCard
              icon={BookmarkIcon}
              title="Voice recordings"
              detail="Listen to their voicemail greeting one more time before the line closes. You can record it off a second phone's speaker, or ask the carrier if they offer voicemail export. Voices are irreplaceable."
            />
            <MemoryCard
              icon={FileText}
              title="Social media posts"
              detail="Each platform offers a data download. Apps like PastBook can turn a Facebook or Instagram archive into a printed book. Printing important posts through your browser also works."
            />
            <MemoryCard
              icon={Mail}
              title="Emails worth keeping"
              detail="Forward important emails to your own address before email access closes. Letters they wrote, trip confirmations, work history — these often hold unexpected meaning later."
            />
          </div>
        </section>

        {/* ── Section 4 — Physical Devices ──────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={4}
            title="Physical devices"
            subtitle="Save memories first. Then decide: keep, pass on, or wipe and donate."
          />

          <Alert className="mt-6 border-rose-300 bg-rose-50 dark:bg-rose-950/20 dark:border-rose-900/60">
            <ShieldAlert className="h-5 w-5 text-rose-700 dark:text-rose-300" />
            <AlertTitle className="text-base font-bold text-rose-900 dark:text-rose-200">
              Before you wipe anything, save memories
            </AlertTitle>
            <AlertDescription className="text-base text-rose-900/90 dark:text-rose-100/90 leading-relaxed">
              A factory reset erases everything. Go through Section 3 first. If a
              device belonged to a parent or spouse, many families find that keeping
              it in a drawer for a year — without wiping it — feels right.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <MemoryCard
              icon={Smartphone}
              title="Phones"
              detail="Back up to the cloud or a computer. Then, if donating or selling, factory reset through Settings → General → Reset (iPhone) or Settings → System → Reset (Android). Remove the SIM card first."
            />
            <MemoryCard
              icon={HardDrive}
              title="Computers"
              detail="Pull photos, documents, and browser bookmarks off first. A USB drive or an external hard drive works. Then factory reset if you plan to donate."
            />
            <MemoryCard
              icon={Sparkles}
              title="Smart speakers (Echo, Google Home)"
              detail="Reset through the Alexa or Google Home app. This unlinks the account and wipes voice history. Donate locally or recycle through Best Buy."
            />
            <MemoryCard
              icon={FileText}
              title="Tablets"
              detail="Same process as phones. iPad uses Settings → General → Reset. Android tablets vary by brand, but the reset option is always under Settings → System."
            />
            <MemoryCard
              icon={HardDrive}
              title="External hard drives and USB sticks"
              detail="Check each one before recycling. Old drives often hold the only copies of scanned family photos, home movies, or early digital pictures from the 2000s."
            />
            <MemoryCard
              icon={BookmarkIcon}
              title="Printed photos"
              detail="Scan them with your phone using Google PhotoScan (free) before storing them in a box. Having a digital backup means the memories survive a flood or a move."
            />
            <MemoryCard
              icon={Lock}
              title="Paper passwords"
              detail="Check desk drawers, safes, wallets, Bible covers, and filing cabinets. Many older adults keep a small notebook of passwords. Once found, that one notebook solves most account access problems."
            />
            <MemoryCard
              icon={BookOpen}
              title="Letters and journals"
              detail="Save physical letters, journals, yearbooks, and appointment calendars. These are irreplaceable. Store them in acid-free boxes if they hold real meaning."
            />
          </div>
        </section>

        {/* ── Section 5 — Helping Yourself ──────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={5}
            title="Helping yourself through the tech-side grief"
            subtitle="Grief and technology meet in unexpected ways. Here's help."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <LifeBuoy className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Grief support (free)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-base text-slate-700 dark:text-slate-300">
                  <ResourceRow
                    label="GriefShare"
                    detail="Support groups at churches nationwide — non-denominational welcome"
                    href="https://www.griefshare.org"
                  />
                  <ResourceRow
                    label="Hospice Foundation of America"
                    detail="Bereavement articles and local hospice grief groups"
                    href="https://hospicefoundation.org"
                  />
                  <ResourceRow
                    label="SAMHSA Helpline"
                    detail="1-800-662-HELP — free, confidential, 24/7, in English and Spanish"
                    href="tel:18006624357"
                  />
                  <ResourceRow
                    label="AARP Grief & Loss"
                    detail="Articles and support for widows, widowers, and adult children"
                    href="https://www.aarp.org/home-family/friends-family/info-2018/grief-loss.html"
                  />
                </ul>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <HandHeart className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Tech-grief that hits hard
                  </h3>
                </div>
                <ul className="space-y-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Their phone texts you.</strong>{' '}
                    Usually a forwarded text from a new number after the line was re-issued.
                    You can block the number, or call your own carrier to confirm.
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Photos memories.</strong>{' '}
                    iPhone and Google Photos surface old photos in notifications. Turn
                    off &quot;Memories&quot; in Photo settings if those are painful. You can turn
                    them back on later.
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Facebook reminders.</strong>{' '}
                    Memorializing a Facebook profile stops birthday reminders to friends.
                    That relieves friends from the panic of wishing a happy birthday to
                    someone who has passed.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Muting reminders without deleting
                  </h3>
                </div>
                <ul className="space-y-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  <li>• Turn off Facebook birthday reminders for their profile.</li>
                  <li>• Archive their name in your Contacts instead of deleting — you keep the number without the daily reminder.</li>
                  <li>• Hide their photos in the Photos app using Face ID removal (iPhone) or Group Exclusions (Google Photos).</li>
                  <li>• Mute their old texts thread without deleting — the history stays, the notifications stop.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    When family disagrees
                  </h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  One sibling wants to memorialize. Another wants to delete. Both are
                  grieving. A helpful middle path: download everything first (photos,
                  posts, videos), then memorialize. The content is saved for anyone who
                  wants it later, and the public profile stops showing up in feeds. No
                  one loses anything.
                </p>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Journaling the loss
                  </h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  Writing helps. The app Day One (free tier, works on iPhone and
                  Android) saves entries by date and lets you add photos. A plain paper
                  notebook works as well as any app. There is no wrong way to journal —
                  only showing up.
                </p>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <HandHeart className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Finding a therapist
                  </h3>
                </div>
                <ul className="space-y-2 text-base text-slate-700 dark:text-slate-300">
                  <ResourceRow
                    label="Psychology Today therapist finder"
                    detail="Search by insurance, zip code, and grief specialty"
                    href="https://www.psychologytoday.com/us/therapists"
                  />
                  <ResourceRow
                    label="SAMHSA treatment locator"
                    detail="findtreatment.gov — free federal directory"
                    href="https://findtreatment.gov"
                  />
                  <ResourceRow
                    label="Talkspace / BetterHelp"
                    detail="Online therapy if in-person feels like too much"
                    href="https://www.talkspace.com"
                  />
                  <ResourceRow
                    label="Soaring Spirits widowed groups"
                    detail="Support groups specifically for widows and widowers"
                    href="https://soaringspirits.org"
                  />
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Section 6 — Fraud Watch ───────────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={6}
            title="Fraud watch — scammers target grieving families"
            subtitle="People who read obituaries for a living. Be ready."
          />

          <Alert className="mt-6 border-rose-300 bg-rose-50 dark:bg-rose-950/20 dark:border-rose-900/60">
            <ShieldAlert className="h-5 w-5 text-rose-700 dark:text-rose-300" />
            <AlertTitle className="text-base font-bold text-rose-900 dark:text-rose-200">
              The single biggest red flag
            </AlertTitle>
            <AlertDescription className="text-base text-rose-900/90 dark:text-rose-100/90 leading-relaxed">
              Anyone asking you to pay with a <strong>gift card or wire transfer</strong> is a
              scammer. No legitimate company, utility, or government agency asks for those.
              When in doubt, hang up and call the company back on a number from their
              official website.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <FraudCard
              title="Obituary scammers"
              detail="A caller claims your loved one owed a debt and demands payment. They read the obituary and know details. Real creditors write letters — not unsolicited phone calls. Hang up, and call the company back directly."
            />
            <FraudCard
              title="Inheritance scams"
              detail="An email or letter says your loved one inherited money from a stranger abroad. They need a processing fee. This is always a scam. Real inheritances do not charge you up front."
            />
            <FraudCard
              title="Fake utility calls"
              detail="A caller claims the electricity or gas is about to be shut off unless you pay today. Utilities never threaten over the phone. Call the utility back on the number from a recent bill to verify."
            />
            <FraudCard
              title="Romance scams on social media"
              detail="A widow or widower posts publicly, and a stranger reaches out with sympathy. Over months, they ask for money. Block anyone who asks for money before you have met them in person."
            />
          </div>

          <div className="mt-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 md:p-6">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
              Freeze the deceased&apos;s credit
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Contact all three credit bureaus — Equifax, Experian, and TransUnion —
              and ask them to place a <strong>&quot;deceased alert&quot;</strong> on the file. This stops
              identity thieves from opening new accounts in their name. Each bureau
              has a deceased-persons form online.
            </p>
          </div>
        </section>

        {/* ── Section 7 — Legal & Financial Tie-ins ─────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14">
          <SectionHeader
            number={7}
            title="Legal & financial tie-ins"
            subtitle="A quick map. For real decisions, talk to an estate attorney or CPA."
          />

          <div className="mt-6 space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Executor tasks
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      The executor named in the will handles paying final bills,
                      closing accounts, distributing assets, and filing final taxes.
                      Ask the estate attorney for a full executor checklist — every
                      state is different.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Final tax return
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      The deceased&apos;s final Form 1040 is due April 15 of the year after
                      they passed. A CPA or tax software (TurboTax, H&amp;R Block) handles
                      this. The executor signs in their name. If there was income in
                      their estate after death, that may require a separate Form 1041.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Estate vs. probate
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      An <strong>estate</strong> is everything they owned. <strong>Probate</strong> is the
                      court process that transfers their estate to heirs. Probate
                      takes months to a year. Assets with named beneficiaries
                      (retirement accounts, life insurance, transfer-on-death bank
                      accounts) usually skip probate entirely. A legal-aid organization
                      can help if you cannot afford an attorney — search &quot;legal aid&quot; plus
                      your county name.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <HandHeart className="h-6 w-6 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Transfer-on-death accounts
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      Bank accounts, brokerage accounts, and even some car titles can
                      have a &quot;transfer-on-death&quot; (TOD) beneficiary. When one exists,
                      the account transfers directly to the named person, no court
                      involved. Ask each bank and brokerage whether a TOD was on file.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Preventive CTA ────────────────────────────────────────── */}
        <section className="gt-no-print container max-w-4xl mx-auto px-4 pt-14">
          <Card className="border-2 border-violet-300 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-slate-50 dark:from-violet-950/30 dark:to-slate-950/30">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Don&apos;t want your family to go through this?
                  </h2>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    The kindest thing you can do for your family is to set up your own
                    digital legacy today. Takes about 30 minutes.
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                      <span>Set up an <strong>Apple Legacy Contact</strong> in Settings → Apple ID → Legacy Contact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                      <span>Set up <strong>Google Inactive Account Manager</strong> at myaccount.google.com/inactive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                      <span>Name a <strong>Facebook Legacy Contact</strong> in Settings → Memorialization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-0.5" />
                      <span>Fill out our free <strong>Digital Will Template</strong> to record it all in one place</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild size="lg" className="gap-2 min-h-14 text-base bg-violet-600 hover:bg-violet-700">
                      <Link to="/tools/digital-will-template">
                        <FileText className="h-5 w-5" />
                        Open the Digital Will Template
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Gentle note card ──────────────────────────────────────── */}
        <section className="gt-no-print container max-w-4xl mx-auto px-4 pt-10">
          <Card className="border-violet-200 dark:border-violet-900 bg-violet-50/60 dark:bg-violet-950/20">
            <CardContent className="p-6 md:p-8 text-center">
              <Heart className="h-8 w-8 text-violet-700 dark:text-violet-300 mx-auto mb-3" fill="currentColor" />
              <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto">
                You don&apos;t have to do it all. Skip sections. Come back. Take breaks.
                This is grief, not a project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="gt-no-print container max-w-4xl mx-auto px-4 pt-14">
          <SectionHeader
            number={8}
            title="Common questions"
          />

          <Accordion type="single" collapsible className="mt-6 space-y-3">
            <AccordionItem value="q1" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                Do I have to close all the accounts?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                No. Many social media accounts can be memorialized and left in place
                for years. That means the profile stays visible to friends, no one new
                can sign in, and the content is preserved. Only banks, credit cards,
                and recurring-bill accounts really need to be closed promptly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                What if I don&apos;t know all their accounts?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Start with the banks and credit cards. Their statements will show every
                recurring charge from the last three months — streaming services,
                apps, gyms, subscriptions, and other billers. The card statements and
                the first page of their email inbox together usually reveal 90% of
                what they had.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                Is cryptocurrency really gone without the seed phrase?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                For self-custody wallets, almost always yes. Without the 12- or
                24-word recovery phrase (or the private key), no one — including the
                wallet company — can recover the funds. For custodial exchanges like
                Coinbase, the family can recover funds through an estate process.
                Check email for the names of any exchanges before assuming loss.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                Can I read their emails?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                This is legally gray. Federal law and provider terms of service often
                prohibit accessing someone else&apos;s email without permission, even
                after death. If you know the login, pulling account data (via Google
                Takeout or an Apple Legacy Request) is usually safer than logging in
                as them. For anything sensitive, talk to an estate attorney.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                How long does all this take?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Months. Sometimes a full year. That is normal. The paperwork for
                banks, Social Security, insurance, and estate settlement moves slowly.
                Big tech platforms take weeks to months. Give yourself grace, and
                remember nothing on this page is urgent after the first 30 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border rounded-lg px-4 border-slate-200 dark:border-slate-800">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-left hover:no-underline min-h-14">
                What about their smart home devices?
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Smart speakers, thermostats, and doorbells are tied to an account
                (usually Amazon, Google, or Apple). When you close or transfer that
                account, the devices stop working. If a surviving spouse uses them,
                have them add the spouse to the account before closing anything.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── Related Tools / Links ─────────────────────────────────── */}
        <section className="gt-no-print container max-w-5xl mx-auto px-4 pt-14 pb-20">
          <SectionHeader
            number={9}
            title="Related TekSure tools"
            subtitle="Helpful companions to this page."
          />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <RelatedLinkCard
              title="Digital Will Template"
              description="A free, printable template your loved ones will thank you for. List accounts, devices, and wishes — in under an hour."
              href="/tools/digital-will-template"
              icon={FileText}
            />
            <RelatedLinkCard
              title="Emergency Info Card"
              description="A printable card of medications, allergies, and emergency contacts. Keep it in a wallet and on the fridge."
              href="/tools/emergency-info-card"
              icon={Heart}
            />
            <RelatedLinkCard
              title="Caregiver Toolkit"
              description="A full set of tools and guides for caring for an aging parent or spouse."
              href="/toolkits/caregiver"
              icon={HandHeart}
            />
            <RelatedLinkCard
              title="Family Tech Guides"
              description="Senior-friendly guides written for families handling tech together."
              href="/guides?category=family"
              icon={Users}
            />
          </div>
        </section>

        {/* ── Printable Checklist (print-only view) ─────────────────── */}
        <div className="gt-print-only gt-print-page">
          <h1>Digital Aftercare Checklist</h1>
          <p className="gt-print-tag">
            TekSure.com — a gentle map for handling a loved one&apos;s digital life. No timeline. Come back anytime.
          </p>
          {printableChecklist.map((section) => (
            <div key={section.section}>
              <h2>{section.section}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <div className="gt-box" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

    </>
  );
}

/* ─────────────────── Helper subcomponents ──────────────────────────── */

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-violet-600 text-white font-extrabold flex items-center justify-center text-base md:text-lg">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function MemoryCard({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof ImageIcon;
  title: string;
  detail: string;
}) {
  return (
    <Card className="border-slate-200 dark:border-slate-800">
      <CardContent className="p-5 md:p-6">
        <div className="flex gap-3 items-start">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center">
            <Icon className="h-5 w-5 text-violet-700 dark:text-violet-300" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {detail}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ResourceRow({
  label,
  detail,
  href,
}: {
  label: string;
  detail: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block py-1 hover:bg-violet-50 dark:hover:bg-violet-950/30 rounded-md px-1"
      >
        <div className="flex items-start gap-2">
          <ChevronRight className="h-4 w-4 text-violet-600 shrink-0 mt-1" />
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">
              {label}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {detail}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

function FraudCard({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <Card className="border-rose-200 dark:border-rose-900/60">
      <CardContent className="p-5 md:p-6">
        <div className="flex gap-3 items-start">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-rose-700 dark:text-rose-300" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {detail}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RelatedLinkCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: typeof FileText;
}) {
  return (
    <Link
      to={href}
      className="group block rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-700 transition-colors p-5 md:p-6 bg-card"
    >
      <div className="flex gap-3 items-start">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center">
          <Icon className="h-5 w-5 text-violet-700 dark:text-violet-300" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100 group-hover:text-violet-700 dark:group-hover:text-violet-300">
            {title}
            <ArrowRight className="inline-block ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </h3>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
