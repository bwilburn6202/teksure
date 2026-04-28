import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, AlertTriangle } from 'lucide-react';

type App = 'gmail' | 'apple' | 'outlook';

interface AppGuide {
  name: string;
  topButton: { title: string; detail: string };
  bottomLink: string[];
  spam: string;
  block: string;
}

const GUIDES: Record<App, AppGuide> = {
  gmail: {
    name: 'Gmail (web, iPhone, Android)',
    topButton: {
      title: 'Built-in Unsubscribe button at the top',
      detail: 'Open the email. Next to the sender name at the top, look for a blue "Unsubscribe" link. One tap and Gmail removes you. Works on most legitimate marketing senders because Gmail reads a hidden header in the email.',
    },
    bottomLink: [
      'If the top button is not there, scroll all the way to the bottom of the email.',
      'Look for tiny gray text that says "Unsubscribe" or "Manage preferences".',
      'Tap it. A web page opens — confirm by clicking "Yes, unsubscribe".',
      'Legitimate US senders must include this link by law (the CAN-SPAM Act).',
    ],
    spam: 'Open the email → tap the three dots (More) at the top right → "Report spam". This trains Gmail and protects others. Stronger than deleting, which leaves the sender free to keep emailing.',
    block: 'Open the email → tap the three dots next to the sender name → "Block [sender name]". Future emails go straight to spam.',
  },
  apple: {
    name: 'Apple Mail (iPhone, iPad, Mac)',
    topButton: {
      title: 'Built-in Unsubscribe banner at the top',
      detail: 'Open the email. A small blue banner near the top reads "This message is from a mailing list. Unsubscribe." Tap "Unsubscribe" — Apple Mail handles the rest. No web page, no extra clicks.',
    },
    bottomLink: [
      'If no banner shows, scroll to the very bottom of the email.',
      'Tap the "Unsubscribe" link in the small print.',
      'A Safari page opens — confirm your choice on that page.',
      'Honest senders unsubscribe you within 10 business days (federal rule).',
    ],
    spam: 'Open the email → tap the flag icon at the bottom → "Move to Junk". On Mac, drag the email to the Junk folder in the sidebar. Teaches Apple Mail to filter that sender.',
    block: 'Tap the sender name at the top of the email → "Block this Contact" → confirm. Future emails are marked or sent to trash based on your Mail settings.',
  },
  outlook: {
    name: 'Outlook (web, Windows, iPhone, Android)',
    topButton: {
      title: 'Built-in Unsubscribe link at the top',
      detail: 'Open the email. Below the sender name, Outlook shows an "Unsubscribe" link for senders that supplied the standard header. One click and Outlook handles the request for you.',
    },
    bottomLink: [
      'If no link shows up top, scroll to the bottom of the email.',
      'Tap the small "Unsubscribe" text in the footer.',
      'Confirm on the page that opens.',
      'For US senders, this link is required by federal law and must work for at least 30 days.',
    ],
    spam: 'Open the email → tap the three dots at the top → "Report" → "Report junk" (or "Report phishing" if it looks like a scam). Outlook moves it to Junk and reports the sender to Microsoft.',
    block: 'Open the email → tap the three dots → "Block" → confirm. The sender is added to your Blocked Senders list.',
  },
};

export default function EmailUnsubscribeFlow() {
  const [app, setApp] = useState<App>('gmail');
  const guide = GUIDES[app];

  return (
    <>
      <SEOHead
        title="Email Unsubscribe Flow"
        description="Stop the flood of junk email the right way. Use the built-in Unsubscribe button in Gmail, Apple Mail, or Outlook, mark scams as spam, and block senders for good."
        path="/tools/email-unsubscribe-flow"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Email Unsubscribe Flow</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Cut down the junk in your inbox the safe way. Real unsubscribe links, the spam button, and what to do with scam mail.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Email Unsubscribe Flow' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Never click "Unsubscribe" inside a scam email</p>
                <p className="text-xs text-muted-foreground">
                  Scammers put fake "Unsubscribe" links in their emails. Clicking confirms your address is real and active — which means more scam mail, not less. Replying does the same. If the email looks suspicious, do not unsubscribe and do not reply. Mark it as spam (or phishing) and block the sender. That is the safe path.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your email app</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'gmail' as App,   label: 'Gmail' },
                  { id: 'apple' as App,   label: 'Apple Mail' },
                  { id: 'outlook' as App, label: 'Outlook' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setApp(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      app === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{guide.name}</Badge>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Try this first</p>
              <div className="p-3 rounded-lg border border-border mb-4">
                <p className="font-medium text-sm">{guide.topButton.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{guide.topButton.detail}</p>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">If no top button — use the link at the bottom of the email</p>
              <ol className="space-y-2 mb-4">
                {guide.bottomLink.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mark as spam (do not delete)</p>
              <p className="text-xs text-muted-foreground mb-4">{guide.spam}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Block the sender</p>
              <p className="text-xs text-muted-foreground">{guide.block}</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Why deleting is not enough</p>
              <p className="text-xs text-muted-foreground">
                Deleting an email tells your email app nothing. The same sender shows up tomorrow. Marking as spam teaches the filter — Gmail, Apple, and Outlook all use spam reports to protect millions of other inboxes. One spam click does more good than a hundred deletes.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/email-organization" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Organization</p>
                <p className="text-xs text-muted-foreground mt-0.5">Folders, filters, and a calmer inbox.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot the warning signs in a suspicious email.</p>
              </Link>
              <Link to="/tools/email-spam-manager" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Spam Manager</p>
                <p className="text-xs text-muted-foreground mt-0.5">Train your spam filter for the long haul.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
