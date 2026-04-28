import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Inbox, Filter, ChevronRight } from 'lucide-react';

type Service = 'gmail' | 'apple' | 'outlook';

interface ServiceGuide {
  name: string;
  setup: { title: string; steps: string[] }[];
  cleanups: { title: string; detail: string }[];
  unsubscribe: string;
  scheduleSend: string;
}

const GUIDES: Record<Service, ServiceGuide> = {
  gmail: {
    name: 'Gmail (in a web browser, iPhone, or Android)',
    setup: [
      {
        title: 'Make a "Read later" label for newsletters',
        steps: [
          'Open Gmail in a web browser (gmail.com).',
          'In the left sidebar, scroll down and click "More" then "Create new label".',
          'Name it "Read later" and click Create.',
          'Open a newsletter you receive often.',
          'Click the three-dot menu at the top of the email and pick "Filter messages like these".',
          'Click "Create filter" at the bottom.',
          'Check "Skip the Inbox (Archive it)" and "Apply the label: Read later".',
          'Check "Also apply filter to matching conversations" so old newsletters move too.',
          'Click "Create filter". New newsletters now skip the inbox and land in Read later.',
        ],
      },
      {
        title: 'Flag emails from family with a star',
        steps: [
          'Open an email from a family member.',
          'Click the three-dot menu at the top, then "Filter messages like these".',
          'Confirm their email address is in the From field.',
          'Click "Create filter".',
          'Check "Star it" and "Always mark it as important".',
          'Click "Create filter". Family emails now stand out at the top of your inbox.',
        ],
      },
    ],
    cleanups: [
      { title: 'Newsletter filter', detail: 'Use the Read later label above. Once a week, open the label and skim. Delete what you do not want, archive what you read.' },
      { title: 'Family VIP', detail: 'Star + mark as important for spouse, kids, grandkids. Their emails rise to the top and never get lost in promotions.' },
      { title: 'Archive vs delete', detail: 'Archive (the box-with-arrow icon) hides the email but keeps it forever — searchable any time. Delete (the trash can) sends it to Trash for 30 days, then it is gone. When in doubt, archive.' },
    ],
    unsubscribe: 'Gmail shows a small "Unsubscribe" link at the top of most newsletters, next to the sender name. Click it. Gmail asks the sender to remove you. Do this five times a day for a week and your inbox calms down. For senders that ignore the request, create a filter that sends them straight to Trash.',
    scheduleSend: 'Compose a new email. Instead of clicking the blue Send button, click the small arrow next to it. Pick "Schedule send" and choose a day and time. Useful for birthday wishes, follow-ups, or sending after the recipient is awake.',
  },
  apple: {
    name: 'Apple Mail (Mac and iPhone)',
    setup: [
      {
        title: 'Set family as VIP (Mac and iPhone)',
        steps: [
          'On iPhone: open Mail and tap an email from your family member.',
          'Tap their name at the top of the email.',
          'Tap "Add to VIP".',
          'On Mac: open Mail, click an email from family, hover over their name in the From line, click the small arrow, pick "Add to VIPs".',
          'A new VIP mailbox appears in the sidebar (Mac) or above Inbox (iPhone) — only emails from those people.',
        ],
      },
      {
        title: 'Filter newsletters using Mail Rules (Mac only)',
        steps: [
          'Open Mail on a Mac. Click Mail in the top menu, then Settings, then the Rules tab.',
          'Click "Add Rule". Give it a description like "Newsletters to Read Later".',
          'Set the condition: "From" contains the newsletter address (for example, "newsletter@").',
          'Set the action: "Move Message to mailbox" → pick or make a mailbox called "Read Later".',
          'Click OK. Click "Apply" when asked to run it on existing mail.',
          'Note: iPhone Mail does not have rules. Set rules on the Mac and they sync to iCloud Mail accounts.',
        ],
      },
      {
        title: 'iPhone-only option: filter the inbox',
        steps: [
          'Open Mail on iPhone.',
          'Tap the small filter icon at the bottom-left of the inbox.',
          'Tap the blue text that says "Filtered by".',
          'Pick "VIP" — only family shows.',
          'Or pick "Unread" to focus on what you have not read.',
        ],
      },
    ],
    cleanups: [
      { title: 'Newsletter filter', detail: 'Mac Mail Rules → send newsletters to a "Read Later" mailbox. iPhone alone cannot do this — set the rule on a Mac, or switch the account to iCloud Mail and use iCloud.com web rules.' },
      { title: 'Family VIP', detail: 'Add spouse, kids, grandkids as VIP. The VIP mailbox shows their messages only — much calmer than scrolling the full inbox.' },
      { title: 'Archive vs delete', detail: 'Swipe left on an email. The blue "Archive" button keeps the email in All Mail forever (searchable). The red "Trash" button sends it to Trash for 30 days, then it is gone. Default to archive when unsure.' },
    ],
    unsubscribe: 'Apple Mail shows an "Unsubscribe" banner at the top of many newsletters. Tap it and confirm. For tougher senders, create a Mail Rule on a Mac that moves their emails straight to Trash. On iCloud.com you can also block a sender from the gear icon → Rules.',
    scheduleSend: 'On iPhone (iOS 16 and later): tap and hold the upward arrow Send icon. A menu appears with "Send Later" — pick a date and time. On Mac: write the email, click the small arrow next to the Send button, pick "Send Later". Helpful for late-night writing you do not want delivered until morning.',
  },
  outlook: {
    name: 'Outlook.com / Microsoft 365',
    setup: [
      {
        title: 'Make a folder and rule for newsletters',
        steps: [
          'Open Outlook in a web browser (outlook.com) or the desktop app.',
          'In the left sidebar, right-click "Folders" and pick "Create new folder".',
          'Name it "Read Later".',
          'Open a newsletter. Click the three-dot menu at the top and pick "Create rule".',
          'Pick "From [sender name]" and set the destination to "Read Later".',
          'Click OK. To handle more conditions, click "More options" and add subject keywords like "Newsletter" or "Weekly Digest".',
          'Tick the box that says apply rule to existing messages, so older newsletters move too.',
        ],
      },
      {
        title: 'Flag emails from family',
        steps: [
          'Open an email from a family member.',
          'Click the three-dot menu and pick "Create rule".',
          'Click "More options" at the bottom.',
          'Under "From", confirm the family member.',
          'Under "Do all of the following", add: "Mark with importance" → "High" and "Flag the message".',
          'Save. Their emails now show with a red flag at the top of the inbox.',
        ],
      },
      {
        title: 'Turn on Focused Inbox',
        steps: [
          'Click the gear icon (top-right) → "View all Outlook settings".',
          'Pick "Mail" → "Layout" → "Focused Inbox".',
          'Choose "Sort messages into Focused and Other".',
          'Outlook now splits the inbox into two tabs. Family and important mail land in Focused. Newsletters and promotions go to Other.',
        ],
      },
    ],
    cleanups: [
      { title: 'Newsletter filter', detail: 'Use the Read Later folder rule. Or turn on Focused Inbox so newsletters auto-sort into Other. Combine both for the calmest inbox.' },
      { title: 'Family VIP', detail: 'Outlook does not have a "VIP" name, but you can flag + mark High Importance for family senders. Same effect — their emails rise to the top with a red flag.' },
      { title: 'Archive vs delete', detail: 'The Archive folder keeps emails forever and is fully searchable. The Deleted Items folder holds emails for 30 days, then they are removed. When unsure, archive.' },
    ],
    unsubscribe: 'Outlook shows a one-click "Unsubscribe" link at the top of most newsletters. Click it and confirm. For senders that ignore it, right-click the email and pick "Block" → the sender goes to Junk forever. Microsoft also has a "Sweep" tool (top of the inbox) that can delete every email from a sender at once.',
    scheduleSend: 'Compose a new email. Click the small arrow next to the Send button. Pick "Schedule send". Choose a date and time. Outlook holds the email and sends it at that moment. Works in both the web version and the desktop app.',
  },
};

const SERVICES: { id: Service; label: string }[] = [
  { id: 'gmail',   label: 'Gmail' },
  { id: 'apple',   label: 'Apple Mail (Mac + iPhone)' },
  { id: 'outlook', label: 'Outlook.com / Microsoft 365' },
];

export default function EmailOrganization() {
  const [service, setService] = useState<Service>('gmail');
  const guide = GUIDES[service];

  return (
    <>
      <SEOHead
        title="Email Organization for Seniors"
        description="Calm an overflowing inbox. Set up filters, labels, VIP family flags, and schedule send for Gmail, Apple Mail, and Outlook. Plain-English steps."
        path="/tools/email-organization"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Inbox className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Email Organization</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tame an overflowing inbox. Filter newsletters, flag family, archive what you read, and send email when the time is right.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Email Organization' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your email service</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {SERVICES.map(s => (
                  <button key={s.id} onClick={() => setService(s.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      service === s.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{s.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-3">{guide.name}</Badge>

              {guide.setup.map((section, idx) => (
                <div key={idx} className="mb-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Filter className="h-3 w-3" /> {section.title}
                  </p>
                  <ol className="space-y-2">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Three must-do cleanups</p>
              <div className="space-y-3">
                {guide.cleanups.map((c, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Mail className="h-3 w-3" /> Unsubscribe from newsletters you no longer read
              </p>
              <p className="text-sm">{guide.unsubscribe}</p>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Schedule send — for the right time of day</p>
              <p className="text-sm">{guide.scheduleSend}</p>
            </CardContent>
          </Card>

          <Card className="border-amber-500/40 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on Unroll.me and other "mass unsubscribe" services</p>
              <p className="text-xs text-muted-foreground">
                Unroll.me is a third-party service that bundles your newsletters into one daily digest. It works, but here is the catch: in 2017 the parent company was caught selling user email data (including receipts from Lyft trips) to outside buyers. They settled with the FTC in 2019. The company says practices have changed, but giving any third party full read-access to your inbox is a privacy risk worth thinking about. Gmail, Apple Mail, and Outlook all have built-in filters and one-click unsubscribe links that do the same job without handing your inbox to a stranger. Stick with the built-in tools when you can.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A weekly five-minute habit</p>
              <p className="text-xs text-muted-foreground">
                Once a week, on a Sunday morning with coffee: open your Read Later folder, archive what you read, delete what you did not. Click unsubscribe on three newsletters you no longer open. After a month, the inbox feels lighter. After three months, it stays that way on its own.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/email-spam-manager" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Spam Manager</p>
                <p className="text-xs text-muted-foreground mt-0.5">Block spam and keep junk out for good.</p>
              </Link>
              <Link to="/tools/email-migration" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Migration</p>
                <p className="text-xs text-muted-foreground mt-0.5">Move from one email service to another.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot phishing and fraud in your inbox.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: archive freely. Storage is plentiful, and Search will find anything you ever needed within seconds.
          </p>

          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" size="sm">
              <Link to="/tools">Back to all tools</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
