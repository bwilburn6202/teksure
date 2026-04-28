import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail, ChevronRight, ExternalLink, ArrowRight, CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

type FromProvider = 'aol' | 'yahoo' | 'hotmail' | 'msn' | 'comcast' | 'other';
type ToProvider = 'gmail' | 'outlook' | 'icloud';

interface MigrationStep {
  title: string;
  detail: string;
  link?: { label: string; href: string };
}

const PROVIDER_LABEL: Record<FromProvider | ToProvider, string> = {
  aol: 'AOL Mail',
  yahoo: 'Yahoo Mail',
  hotmail: 'Hotmail',
  msn: 'MSN Mail',
  comcast: 'Comcast / Xfinity Email',
  other: 'Another email provider',
  gmail: 'Gmail (Google)',
  outlook: 'Outlook.com (Microsoft)',
  icloud: 'iCloud Mail (Apple)',
};

const FROM_OPTIONS: { id: FromProvider; sub: string }[] = [
  { id: 'aol',     sub: 'name@aol.com' },
  { id: 'yahoo',   sub: 'name@yahoo.com or @ymail.com' },
  { id: 'hotmail', sub: 'name@hotmail.com' },
  { id: 'msn',     sub: 'name@msn.com or @live.com' },
  { id: 'comcast', sub: 'name@comcast.net' },
  { id: 'other',   sub: 'Earthlink, Verizon, AT&T, work email, etc.' },
];

const TO_OPTIONS: { id: ToProvider; sub: string }[] = [
  { id: 'gmail',   sub: 'Free, works on every phone, syncs with Android' },
  { id: 'outlook', sub: 'Free, syncs with Windows + Office' },
  { id: 'icloud',  sub: 'Free if you have an iPhone or Mac' },
];

function newAccountSteps(to: ToProvider): MigrationStep[] {
  const m: Record<ToProvider, MigrationStep[]> = {
    gmail: [
      { title: 'Open gmail.com on a computer', detail: 'A computer is easier than a phone for the setup. You can switch to your phone after.' },
      { title: 'Click "Create account"', detail: 'Pick "For my personal use".' },
      { title: 'Pick a username and password', detail: 'Try "firstname.lastname" or "firstname.middlename" first. Add numbers only if you have to. Use a passphrase — see Password Health Check below.' },
      { title: 'Add a recovery phone and recovery email', detail: 'Use your spouse\'s or adult child\'s email as the recovery. This is what saves you if you ever get locked out.', link: { label: 'Password Health Check', href: '/tools/password-health' } },
      { title: 'Skip the optional offers', detail: 'Google will offer you premium storage and other extras. You do not need any of them.' },
    ],
    outlook: [
      { title: 'Open outlook.com on a computer', detail: 'Computer is easier than phone for setup.' },
      { title: 'Click "Create free account"', detail: 'Pick a username — Microsoft will tell you if it is taken.' },
      { title: 'Pick a strong passphrase', detail: 'Four random words plus a couple digits — see Password Health Check.', link: { label: 'Password Health Check', href: '/tools/password-health' } },
      { title: 'Add recovery info', detail: 'Add a phone number and a backup email — both will save you if you forget the password.' },
      { title: 'Skip Microsoft 365 upsells', detail: 'You do not need a paid plan to use Outlook for free.' },
    ],
    icloud: [
      { title: 'On your iPhone or iPad: Settings → tap your name', detail: 'If you do not have an Apple ID, set one up now: Settings → "Sign in to your iPhone".' },
      { title: 'Tap "iCloud" → turn on "Mail"', detail: 'It will create your @icloud.com address based on your Apple ID.' },
      { title: 'Pick your @icloud.com address', detail: 'You only get this choice once. Pick something simple — first name plus last name, no numbers if you can avoid it.' },
      { title: 'Done — open the Mail app to use it', detail: 'iCloud Mail does not have a website you log into the same way as Gmail. The Mail app on iPhone, iPad, and Mac is how you read it.' },
    ],
  };
  return m[to];
}

function importContactsSteps(from: FromProvider, to: ToProvider): MigrationStep[] {
  const fromLabel = PROVIDER_LABEL[from];
  const toLabel = PROVIDER_LABEL[to];

  const exportSteps: MigrationStep[] = [];

  if (from === 'aol') {
    exportSteps.push({
      title: `Export contacts from ${fromLabel}`,
      detail: 'Sign in at mail.aol.com → Contacts (left side) → Tools → "Export". Save the .csv file to your computer.',
    });
  } else if (from === 'yahoo') {
    exportSteps.push({
      title: `Export contacts from ${fromLabel}`,
      detail: 'Sign in at yahoo.com → Contacts → "Actions" → "Export". Choose Yahoo CSV. Save to your computer.',
    });
  } else if (from === 'hotmail' || from === 'msn') {
    exportSteps.push({
      title: `Export contacts from ${fromLabel}`,
      detail: 'Sign in at outlook.com → People (icon in the left bar) → "Manage" → "Export contacts". Pick "Outlook CSV" and save.',
    });
  } else if (from === 'comcast') {
    exportSteps.push({
      title: `Export contacts from ${fromLabel}`,
      detail: 'Sign in at xfinity.com/email → Address Book → top-right menu → "Export Contacts". Save the .csv file.',
    });
  } else {
    exportSteps.push({
      title: 'Export your old contacts as a .csv file',
      detail: 'Look in your old email\'s settings or address book for "Export". Save a .csv file to your computer. If you cannot find it, search the provider\'s help site for "export contacts".',
    });
  }

  if (to === 'gmail') {
    exportSteps.push({
      title: `Import the .csv into ${toLabel}`,
      detail: 'Open contacts.google.com → "Import" (left side) → "Select file" → pick the .csv you saved → Import.',
      link: { label: 'Google Contacts', href: 'https://contacts.google.com' },
    });
  } else if (to === 'outlook') {
    exportSteps.push({
      title: `Import the .csv into ${toLabel}`,
      detail: 'Sign in at outlook.com → People → "Manage" → "Import contacts" → select your .csv file.',
      link: { label: 'Outlook People', href: 'https://outlook.live.com/people' },
    });
  } else {
    exportSteps.push({
      title: `Import the .csv into ${toLabel}`,
      detail: 'iCloud Mail does not have a one-click contact importer. The simplest path: import the .csv into Google Contacts first, then iCloud will pull them in if you sign that Google account into your iPhone.',
    });
  }

  return exportSteps;
}

function importMailSteps(from: FromProvider, to: ToProvider): MigrationStep[] {
  if (to === 'gmail') {
    return [
      {
        title: `Tell Gmail to pull your old ${PROVIDER_LABEL[from]} mail`,
        detail: 'In Gmail (on a computer), click the gear icon → "See all settings" → "Accounts and Import" → "Import mail and contacts". Enter your old email address and password when asked. Gmail will pull in everything from the last 30 days, then keep pulling new mail for the next 30 days while you tell people.',
        link: { label: 'Gmail import help', href: 'https://support.google.com/mail/answer/164640' },
      },
      {
        title: 'Wait — this can take a few hours',
        detail: 'Gmail does this in the background. Check back tomorrow. Your old emails will appear under a label called "imported".',
      },
    ];
  }
  if (to === 'outlook') {
    return [
      {
        title: `Connect your old ${PROVIDER_LABEL[from]} account to Outlook`,
        detail: 'In Outlook on the web → gear icon → "View all Outlook settings" → "Mail" → "Sync email" → "Add a connected account". Enter your old email and password.',
        link: { label: 'Outlook help', href: 'https://support.microsoft.com/en-us/office/add-or-remove-an-email-alias-in-outlook-com-459b1989-356d-40fa-a689-8f285b13f1f2' },
      },
    ];
  }
  return [
    {
      title: `Add ${PROVIDER_LABEL[from]} to the Mail app on your iPhone`,
      detail: 'Settings → Mail → Accounts → Add Account → pick your provider, sign in. The Mail app will show both inboxes side by side. iCloud does not "import" — it keeps your old account connected so you can still read it.',
    },
  ];
}

function tellPeopleSteps(): MigrationStep[] {
  return [
    {
      title: 'Set up forwarding from the old account',
      detail: 'Sign in to your old email one more time. Find Settings → Forwarding → "Forward all incoming mail to <new address>". This catches anything you forget to update.',
    },
    {
      title: 'Set up an auto-reply (vacation responder) on the old account',
      detail: 'Same settings page — turn on a vacation reply that says: "I have moved to <new address> — please update your contacts." Anyone who emails the old address will hear back automatically.',
    },
    {
      title: 'Update the email on your most-used accounts',
      detail: 'Banking, Amazon, Apple/Google ID, Medicare, AARP, Netflix, doctor portals. Sign into each, change the email on file. About 10 minutes for the top accounts.',
    },
    {
      title: 'Tell family and close friends in a single email',
      detail: 'Send one message from the new address — "I changed my email — please use <new address> from now on." Send it to your family list and a few close friends.',
    },
    {
      title: 'Wait 60 days, then close the old account (optional)',
      detail: 'After two months, almost no real mail will arrive at the old address. If you are paying for it (some Comcast / AOL accounts), now you can close it. If it is free, leaving it forwarding is fine.',
    },
  ];
}

interface Plan {
  setup: MigrationStep[];
  contacts: MigrationStep[];
  mail: MigrationStep[];
  tell: MigrationStep[];
}

export default function EmailMigration() {
  const [from, setFrom] = useState<FromProvider | null>(null);
  const [to, setTo] = useState<ToProvider | null>(null);

  const plan: Plan | null = (from && to) ? {
    setup:    newAccountSteps(to),
    contacts: importContactsSteps(from, to),
    mail:     importMailSteps(from, to),
    tell:     tellPeopleSteps(),
  } : null;

  const sections: { id: string; label: string; emoji: string; steps: MigrationStep[] }[] = plan ? [
    { id: 'setup',    label: '1. Make the new account',          emoji: '✉️', steps: plan.setup },
    { id: 'contacts', label: '2. Bring your contacts over',      emoji: '👥', steps: plan.contacts },
    { id: 'mail',     label: '3. Bring your old emails over',    emoji: '📥', steps: plan.mail },
    { id: 'tell',     label: '4. Tell people and forward',       emoji: '📣', steps: plan.tell },
  ] : [];

  return (
    <>
      <SEOHead
        title="Email Migration Helper"
        description="A free, plain-English walkthrough for moving from AOL, Yahoo, Hotmail, Comcast, or any old email to a modern free account at Gmail, Outlook, or iCloud — without losing your contacts or old messages."
        path="/tools/email-migration"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Email Migration Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Move off AOL, Yahoo, or any old email — without losing a single contact or message.
            </p>
            <p className="text-sm text-muted-foreground mt-3">About 30 minutes today, plus a little waiting in the background.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Email Migration Helper' }]} />

          {!plan ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-3">1. Where is your email today?</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {FROM_OPTIONS.map(o => (
                      <button key={o.id} onClick={() => setFrom(o.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          from === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                        }`}>
                        <p className="font-medium text-sm">{PROVIDER_LABEL[o.id]}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{o.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {from && (
                  <div>
                    <p className="text-sm font-semibold mb-3">2. Where do you want to move to?</p>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {TO_OPTIONS.map(o => (
                        <button key={o.id} onClick={() => setTo(o.id)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            to === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}>
                          <p className="font-medium text-sm">{PROVIDER_LABEL[o.id]}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{o.sub}</p>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Not sure? Most people pick Gmail — it works on every phone and computer.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline">{PROVIDER_LABEL[from!]}</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <Badge>{PROVIDER_LABEL[to!]}</Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => { setFrom(null); setTo(null); }}>Change</Button>
                </CardContent>
              </Card>

              {/* Skip-ahead nav */}
              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skip ahead</p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    {sections.map(s => (
                      <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span>{s.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {sections.map(section => (
                <section key={section.id} id={section.id} className="mb-8 scroll-mt-24">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span>{section.emoji}</span>{section.label}
                  </h2>
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <ol className="space-y-3">
                        {section.steps.map((s, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                            <div className="flex-1">
                              <p className="font-semibold">{s.title}</p>
                              <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                              {s.link && (
                                s.link.href.startsWith('/') ? (
                                  <Link to={s.link.href}
                                    className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                    {s.link.label} <ChevronRight className="h-3 w-3" />
                                  </Link>
                                ) : (
                                  <a href={s.link.href} target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                    {s.link.label} <ExternalLink className="h-3 w-3" />
                                  </a>
                                )
                              )}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </section>
              ))}

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Watch out for fake "email migration" calls</p>
                    <p className="text-muted-foreground">
                      Scammers know people are leaving AOL and Yahoo. If anyone calls or emails you offering to "help migrate your email" or claiming your old account "will be deleted" — it is a scam. Real email companies do not call you. Do this yourself with the steps above.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-300 bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-5 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Done? One last thing.</p>
                    <p className="text-muted-foreground">
                      After you migrate, run a Password Health Check on your new account password — and turn on 2-factor authentication. Email is the master key to almost every other account.
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-3">
                      <Link to="/tools/password-health">Password Health Check</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/email-spam-manager" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Spam Manager</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tame the new inbox after you switch.</p>
              </Link>
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health Check</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make sure your new password is safe.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check those "your account will be deleted" emails.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: keep the old address forwarding for at least 60 days. That is how long it takes for stragglers to update.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
