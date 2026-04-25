import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, ChevronRight, ChevronLeft, CheckCircle2, Copy, Check, Lightbulb, Inbox, Trash2, Archive, Star, Search, Ban, FolderOpen, type LucideIcon } from 'lucide-react';

interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  emoji?: string;
  description: string;
}

const STEPS: Step[] = [
  { id: 1, icon: Mail, title: 'Choose your email service', description: 'Tell us what email app you use so we can give you the right instructions.' },
  { id: 2, icon: Search, title: 'Find old bulk emails', description: 'Use search to find newsletters, promotions, and notifications cluttering your inbox.' },
  { id: 3, icon: Ban, title: 'Unsubscribe from newsletters', description: 'Stop future emails arriving from senders you don\'t want.' },
  { id: 4, icon: Archive, title: 'Archive old emails', description: 'Move old emails out of your inbox without deleting them.' },
  { id: 5, icon: Trash2, title: 'Empty trash & spam', description: 'Permanently remove emails you\'ve already deleted to free up space.' },
  { id: 6, icon: Star, title: 'Organize what\'s left', description: 'Star important emails and create folders for the things you want to keep.' },
  { id: 7, icon: CheckCircle2, title: 'You\'re done!', description: 'Your inbox should feel much cleaner now. Here are tips to keep it that way.' },
];

type EmailService = 'gmail' | 'outlook' | 'apple';

interface SearchQuery {
  label: string;
  query: string;
  description: string;
  service: EmailService[];
}

const SEARCH_QUERIES: SearchQuery[] = [
  {
    label: 'Unread older than 1 year',
    query: 'is:unread older_than:1y',
    description: 'Shows all unread emails older than a year — usually safe to delete in bulk.',
    service: ['gmail'],
  },
  {
    label: 'Promotions & deals',
    query: 'category:promotions',
    description: 'All promotional emails Gmail has automatically sorted.',
    service: ['gmail'],
  },
  {
    label: 'Large attachments',
    query: 'has:attachment larger:5mb',
    description: 'Emails with big attachments that take up the most space.',
    service: ['gmail'],
  },
  {
    label: 'Social notifications',
    query: 'category:social',
    description: 'Facebook, Twitter, LinkedIn and other social media notifications.',
    service: ['gmail'],
  },
  {
    label: 'Old emails (2+ years)',
    query: 'older_than:2y',
    description: 'All emails more than two years old.',
    service: ['gmail'],
  },
  {
    label: 'Unread older than 1 year',
    query: 'isread:no received:<2025-01-01',
    description: 'Unread emails from before 2025 — usually safe to clear out.',
    service: ['outlook'],
  },
  {
    label: 'Large emails',
    query: 'size:>5000000',
    description: 'Emails over 5MB that are taking up space.',
    service: ['outlook'],
  },
  {
    label: 'Newsletters',
    query: 'subject:newsletter OR subject:unsubscribe',
    description: 'Likely newsletter emails based on common subject line words.',
    service: ['outlook', 'apple'],
  },
  {
    label: 'Order confirmations',
    query: 'subject:order OR subject:confirmation OR subject:receipt',
    description: 'Old order and booking confirmations you no longer need.',
    service: ['gmail', 'outlook', 'apple'],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      className="ml-2 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
    >
      {copied ? <><Check className="h-3 w-3" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy</>}
    </button>
  );
}

const GMAIL_INSTRUCTIONS = {
  unsubscribe: [
    'Open the newsletter or promotional email.',
    'Scroll to the very bottom of the email.',
    'Click the small "Unsubscribe" link (usually in tiny grey text).',
    'Follow any instructions on the page that opens (usually just one click).',
    'Repeat for each newsletter you no longer want.',
    'Tip: Gmail also shows an "Unsubscribe" button at the top of some emails — click that for a quicker route.',
  ],
  archive: [
    'Tick the checkbox next to emails you want to archive (top-left of each email).',
    'To select all on the page: tick the checkbox at the very top of the list.',
    'Click "Select all conversations that match this search" if prompted.',
    'Click the Archive button (box with a down arrow) in the toolbar.',
    'Archived emails are stored in "All Mail" — not deleted, just out of your inbox.',
  ],
  emptyTrash: [
    'In the left sidebar, click "More" then "Trash".',
    'At the top, click "Empty Trash now".',
    'Confirm when asked.',
    'Also go to "Spam" in the sidebar and click "Delete all spam messages now".',
  ],
  organize: [
    'To star an email: click the  icon to the left of any email.',
    'To create a label (like a folder): click the three dots on an email → "Label as" → "Create new".',
    'Drag emails into labels in the left sidebar.',
    'Use "Filters and blocked addresses" in Settings to auto-sort future emails.',
  ],
};

const OUTLOOK_INSTRUCTIONS = {
  unsubscribe: [
    'Open the email you want to unsubscribe from.',
    'Look for an "Unsubscribe" link at the top of the email (Outlook adds this automatically to many).',
    'Or scroll to the bottom of the email and click the "Unsubscribe" link there.',
    'Confirm if asked on the page that opens.',
  ],
  archive: [
    'Select emails by ticking their checkboxes.',
    'Right-click a selected email → "Archive".',
    'Or drag emails to the "Archive" folder in the left panel.',
    'Archived emails stay saved but leave your inbox.',
  ],
  emptyTrash: [
    'Right-click "Deleted Items" in the left sidebar.',
    'Click "Empty folder".',
    'Confirm when prompted.',
    'Also right-click "Junk Email" and choose "Empty folder".',
  ],
  organize: [
    'Right-click an email → "Move to" → "New folder" to create a folder.',
    'Drag emails into folders in the left panel.',
    'Right-click a folder → "Create rule" to auto-sort future emails.',
    'Flag important emails by clicking the flag icon.',
  ],
};

const APPLE_INSTRUCTIONS = {
  unsubscribe: [
    'Open the email.',
    'Tap "Unsubscribe" at the top of the email (Apple Mail adds this for most newsletters).',
    'Confirm "Unsubscribe" in the pop-up.',
    'The email will also be moved to your Junk folder.',
  ],
  archive: [
    'Swipe left on an email to reveal Archive.',
    'Or open the email and tap the Archive button (box with arrow) at the bottom.',
    'To archive multiple: tap "Edit" → select emails → tap "Archive".',
  ],
  emptyTrash: [
    'Tap "Mailboxes" to go back to the main screen.',
    'Tap "Trash".',
    'Tap "Edit" → "Select All" → "Delete".',
    'Also empty "Junk" the same way.',
  ],
  organize: [
    'Tap and hold an email → "Move Message" to move to a folder.',
    'Create folders via the Edit button on the Mailboxes screen.',
    'Flag important emails by tapping the flag icon.',
    'Use "Filter" (funnel icon) to quickly view unread or flagged emails.',
  ],
};

function InstructionList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
          <span className="text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function EmailDeclutter() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<EmailService | null>(null);

  const filteredQueries = service
    ? SEARCH_QUERIES.filter(q => q.service.includes(service))
    : [];

  const instructions =
    service === 'gmail' ? GMAIL_INSTRUCTIONS
    : service === 'outlook' ? OUTLOOK_INSTRUCTIONS
    : service === 'apple' ? APPLE_INSTRUCTIONS
    : GMAIL_INSTRUCTIONS;

  const gmailSearchUrl = (query: string) =>
    `https://mail.google.com/mail/u/0/#search/${encodeURIComponent(query)}`;
  const outlookSearchUrl = () => `https://outlook.live.com/mail/0/inbox`;

  const goNext = () => setStep(s => Math.min(s + 1, STEPS.length));
  const goPrev = () => setStep(s => Math.max(s - 1, 1));

  const currentStep = STEPS[step - 1];
  const progress = Math.round(((step - 1) / (STEPS.length - 1)) * 100);

  return (
    <>
      <SEOHead
        title="Email Declutter Tool — TekSure"
        description="Clean up your email inbox step by step. Works with Gmail, Outlook, and Apple Mail — no sign-in required."
      path="/tools/email-declutter"
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Email Declutter Tool</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A simple, step-by-step guide to cleaning up your inbox — no sign-in required, nothing automated. Just easy instructions.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step} of {STEPS.length}</span>
              <span>{progress}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Step dots */}
            <div className="flex justify-between mt-2">
              {STEPS.map(s => (
                <button
                  key={s.id}
                  onClick={() => {
                    if (s.id === 1 || service) setStep(s.id);
                  }}
                  className={`w-7 h-7 rounded-full text-xs font-medium transition-all flex items-center justify-center ${
                    s.id < step
                      ? 'bg-primary text-primary-foreground'
                      : s.id === step
                      ? 'bg-primary/20 border-2 border-primary text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                  title={s.title}
                >
                  {s.id < step ? <CheckCircle2 className="h-4 w-4" /> : s.id}
                </button>
              ))}
            </div>
          </div>

          {/* Step card */}
          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><currentStep.icon className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Step {step}</p>
                  <h2 className="text-xl font-bold">{currentStep.title}</h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{currentStep.description}</p>

              {/* ── STEP 1: Choose service ── */}
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {([
                    { value: 'gmail', label: 'Gmail', icon: Mail, desc: 'Google\'s email service. Used at gmail.com.' },
                    { value: 'outlook', label: 'Outlook / Hotmail', icon: Inbox, desc: 'Microsoft\'s email. Used at outlook.com, hotmail.com, live.com.' },
                    { value: 'apple', label: 'Apple Mail', icon: FolderOpen, desc: 'Built-in email on iPhone, iPad, and Mac.' },
                  ] as const).map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setService(opt.value); setStep(2); }}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        service === opt.value
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-border hover:border-primary/40 hover:bg-muted'
                      }`}
                    >
                      <div className="flex justify-center mb-2"><opt.icon className="h-7 w-7 text-primary" /></div>
                      <div className="font-semibold text-sm">{opt.label}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-snug">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              )}

              {/* ── STEP 2: Find bulk emails ── */}
              {step === 2 && service && (
                <div className="space-y-4">
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                    <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      {service === 'gmail'
                        ? 'Copy any search query below and paste it into the Gmail search bar at the top of your inbox.'
                        : service === 'outlook'
                        ? 'Copy any search query and paste it into the Outlook search box at the top.'
                        : 'Use the search icon in Apple Mail and type the phrase shown below.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {filteredQueries.map((q, i) => (
                      <div key={i} className="p-4 rounded-lg border border-border bg-muted/30">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="font-medium text-sm">{q.label}</span>
                          <Badge variant="outline" className="text-xs">{service}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 mb-2">{q.description}</p>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 bg-background border border-border rounded px-3 py-1.5 text-xs font-mono break-all">
                            {q.query}
                          </code>
                          <CopyButton text={q.query} />
                        </div>
                        {service === 'gmail' && (
                          <a
                            href={gmailSearchUrl(q.query)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                          >
                            <Search className="h-3 w-3" /> Open in Gmail
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP 3: Unsubscribe ── */}
              {step === 3 && service && (
                <div>
                  <InstructionList items={instructions.unsubscribe} />
                  <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Tip:</strong> Don't rush — unsubscribing from 5–10 newsletters now will save you hundreds of emails over the next year.
                    </p>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Archive ── */}
              {step === 4 && service && (
                <div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-4">
                    <Archive className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Archiving is safe</strong> — it removes emails from your inbox but keeps them saved. You can always search for them later.
                    </p>
                  </div>
                  <InstructionList items={instructions.archive} />
                </div>
              )}

              {/* ── STEP 5: Empty trash ── */}
              {step === 5 && service && (
                <div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-4">
                    <Trash2 className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <strong>Warning:</strong> Emptying trash is permanent. Make sure you don't need anything in there before proceeding.
                    </p>
                  </div>
                  <InstructionList items={instructions.emptyTrash} />
                </div>
              )}

              {/* ── STEP 6: Organize ── */}
              {step === 6 && service && (
                <div>
                  <InstructionList items={instructions.organize} />
                  <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      <strong>Idea:</strong> Create just 3–4 folders to start with — something like "Bills", "Family", "Work", and "To Read".
                    </p>
                  </div>
                </div>
              )}

              {/* ── STEP 7: Done ── */}
              {step === 7 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center py-4">
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground">Great work! Here are some habits to keep your inbox tidy going forward:</p>

                  <div className="grid gap-3">
                    {[
                      { icon: Inbox, tip: 'Aim for "Inbox Zero" — process each email once: reply, archive, or delete.', color: 'text-blue-600' },
                      { icon: Trash2, tip: 'If you haven\'t opened an email in a week, you probably don\'t need it.', color: 'text-red-500' },
                      { icon: Star, tip: 'Star or flag emails that need action, then clear the star once done.', color: 'text-yellow-500' },
                      { icon: Mail, tip: 'Unsubscribe immediately any time a newsletter arrives that you didn\'t ask for.', color: 'text-primary' },
                    ].map(({ icon: Icon, tip, color }, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg border border-border bg-muted/30">
                        <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                        <p className="text-sm text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-2">
                    <Button onClick={() => { setStep(1); setService(null); }} variant="outline">
                      Start over with a different email
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation */}
              {step < 7 && (
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <Button variant="outline" onClick={goPrev} className="gap-2">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                  )}
                  {step > 1 && (
                    <Button onClick={goNext} className="gap-2 flex-1 sm:flex-none sm:ml-auto">
                      {step === 6 ? 'Finish' : 'Next step'} <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick tips sidebar */}
          {step > 1 && step < 7 && (
            <Card className="mt-4 border-dashed border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Did you know?</strong> The average person receives over 100 emails a day. Spending 15 minutes on this tool now could save you hours every month.
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

    </>
  );
}
