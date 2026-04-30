import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trash2, ChevronRight, ExternalLink, Search } from 'lucide-react';

interface AccountInfo {
  service: string;
  category: string;
  whatHappens: string;
  steps: string[];
  url: string;
  tip?: string;
}

const ACCOUNTS: AccountInfo[] = [
  {
    service: 'Facebook',
    category: 'Social',
    whatHappens: 'Permanent delete after a 30-day grace period. Your photos, posts, friend list — gone. Messenger conversations stay with the other person but with no name.',
    steps: [
      'Settings & Privacy → Settings → "Your Facebook information".',
      '"Deactivation and deletion" → "Delete account".',
      'Enter your password and confirm.',
      'Wait 30 days without logging in. Logging in cancels the deletion.',
    ],
    url: 'https://www.facebook.com/help/delete_account',
    tip: 'Download your data first: Settings → "Your Facebook information" → "Download your information". Saves all your photos and posts before they are gone.',
  },
  {
    service: 'Instagram',
    category: 'Social',
    whatHappens: '30 days to change your mind. After that, photos, followers, comments — all gone. Your username becomes available for someone else.',
    steps: [
      'Open instagram.com on a computer (cannot delete from the app).',
      'instagram.com/accounts/remove/request/permanent → log in.',
      'Pick a reason → enter password.',
      'Click "Permanently delete my account".',
    ],
    url: 'https://www.instagram.com/accounts/remove/request/permanent',
  },
  {
    service: 'X / Twitter',
    category: 'Social',
    whatHappens: 'Account deactivates immediately. Permanent delete after 30 days. Tweets disappear from search; archives might persist on archive.org.',
    steps: [
      'Settings and Support → Settings and privacy → "Your account".',
      'Tap "Deactivate account".',
      'Confirm. Account is gone in 30 days unless you log back in.',
    ],
    url: 'https://help.x.com/en/managing-your-account/how-to-deactivate-x-account',
  },
  {
    service: 'TikTok',
    category: 'Social',
    whatHappens: '30-day grace period. Videos, comments, followers, drafts — deleted. Your username is held for 30 days then released.',
    steps: [
      'Profile → Settings → Manage account → Delete account.',
      'Enter your password or get a code by phone/email.',
      'Confirm.',
    ],
    url: 'https://support.tiktok.com/en/account-and-privacy/account-information/deleting-an-account',
  },
  {
    service: 'LinkedIn',
    category: 'Social',
    whatHappens: 'Account closed after 14 days; some search engines may still show old data for months. Recommendations and endorsements you wrote stay on others\' profiles unless they delete them.',
    steps: [
      'linkedin.com → "Me" → Settings & Privacy → Account preferences → Account management → Close account.',
      'Pick a reason → enter password.',
      'Confirm.',
    ],
    url: 'https://www.linkedin.com/help/linkedin/answer/a1378964',
  },
  {
    service: 'Snapchat',
    category: 'Social',
    whatHappens: 'Account deactivated immediately. Permanently deleted after 30 days. All snaps, friends, memories — gone.',
    steps: [
      'accounts.snapchat.com → log in → "Delete My Account".',
      'Enter password and confirm.',
    ],
    url: 'https://accounts.snapchat.com/accounts/delete_account',
  },
  {
    service: 'Amazon',
    category: 'Shopping',
    whatHappens: 'Closes account, removes order history, reviews, lists, Kindle library. CANNOT be undone — and existing Kindle e-books become unreadable.',
    steps: [
      'amazon.com → "Help" → "Cancel my account or Subscriptions".',
      'Pick "Permanently delete my account and data".',
      'Pick a reason → confirm.',
    ],
    url: 'https://www.amazon.com/gp/help/customer/contact-us/',
    tip: 'Download Kindle e-books to a Kindle device or cloud reader BEFORE deleting — once the account is gone, the books cannot be re-downloaded.',
  },
  {
    service: 'eBay',
    category: 'Shopping',
    whatHappens: 'Closes account but keeps record of past transactions for legal reasons. Feedback you left for others stays. Active listings get cancelled.',
    steps: [
      'eBay Help → "Closing your account".',
      'Sign in → fill out the form → submit.',
      'eBay reviews and confirms within 7 days.',
    ],
    url: 'https://www.ebay.com/help/account/changing-account-settings/closing-your-ebay-account',
  },
  {
    service: 'Netflix',
    category: 'Streaming',
    whatHappens: 'Account closes immediately. Watch history kept for 10 months in case you come back. Profiles and recommendations gone.',
    steps: [
      'netflix.com → Account → "Cancel Membership".',
      'Confirm.',
    ],
    url: 'https://help.netflix.com/en/node/407',
  },
  {
    service: 'Spotify',
    category: 'Streaming',
    whatHappens: 'Free or paid — both can be closed. Playlists you made are gone. People who follow your playlists lose them too.',
    steps: [
      'support.spotify.com → "Close account".',
      'Sign in and follow the prompts.',
      'Email confirmation seals it.',
    ],
    url: 'https://support.spotify.com/us/article/close-account/',
  },
  {
    service: 'Google',
    category: 'Big platform',
    whatHappens: 'Deletes Gmail, Google Drive, YouTube, Google Photos, Calendar, Contacts — everything tied to that one Google account. Your @gmail.com address can never be re-used by anyone.',
    steps: [
      'myaccount.google.com → Data & Privacy → "Delete your Google Account".',
      'Read what gets deleted (it is a long list).',
      'Type your email to confirm.',
    ],
    url: 'https://myaccount.google.com/deleteaccount',
    tip: 'Use Google Takeout (takeout.google.com) FIRST to download a zip of all your photos, emails, and contacts. Save it somewhere safe before deleting.',
  },
  {
    service: 'Apple ID',
    category: 'Big platform',
    whatHappens: 'Deletes everything iCloud — photos, contacts, notes. Past App Store and iTunes purchases become unreachable. iMessage stops working from your phone number.',
    steps: [
      'privacy.apple.com → "Request to delete your account".',
      'Sign in. Pick a reason.',
      'Apple emails confirmation. Process takes up to 7 days.',
    ],
    url: 'https://privacy.apple.com/account-delete',
    tip: 'BACK UP your iPhone first via iCloud or to a computer, and DOWNLOAD photos to a hard drive. Apple ID deletion is the most aggressive — most things are unrecoverable.',
  },
  {
    service: 'PayPal',
    category: 'Money',
    whatHappens: 'Closes account. Past transactions kept by PayPal for IRS and audit reasons. Linked banks and cards detached.',
    steps: [
      'paypal.com → Settings → "Close your account".',
      'Withdraw any balance first.',
      'Confirm.',
    ],
    url: 'https://www.paypal.com/us/cshelp/article/how-do-i-close-my-paypal-account-help186',
  },
  {
    service: 'Venmo',
    category: 'Money',
    whatHappens: 'Account closes after final balance withdraws. Transaction history kept for legal/tax purposes.',
    steps: [
      'Profile → Settings → Account → Close My Venmo Account.',
      'Confirm withdraw of any balance.',
    ],
    url: 'https://help.venmo.com/hc/en-us/articles/210410947-How-can-I-close-my-Venmo-account-',
  },
  {
    service: 'Uber',
    category: 'Travel',
    whatHappens: 'Account is hidden for 30 days, then permanently deleted. Riders cannot rate or contact you afterwards. Saved addresses and payment methods removed.',
    steps: [
      'Help → "Account and payment options" → "Account settings".',
      '"Delete your Uber account" → confirm.',
    ],
    url: 'https://www.uber.com/us/en/about/account-deletion/',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(ACCOUNTS.map(a => a.category)))];

export default function AccountDeletionWizard() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<string>('All');

  const filtered = ACCOUNTS.filter(a => {
    if (cat !== 'All' && a.category !== cat) return false;
    if (!query) return true;
    return a.service.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <SEOHead
        title="Account Deletion Wizard"
        description="Permanently delete a Facebook, Google, Apple, Amazon, Netflix, or other account. Step-by-step instructions, what gets erased, what to back up first."
        path="/tools/account-deletion-wizard"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <Trash2 className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Account Deletion Wizard</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Permanently close accounts you do not use anymore. Step-by-step links — and what to back up first.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Account Deletion Wizard' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Facebook, Amazon, Netflix..." className="pl-9" />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCat(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      cat === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{filtered.length} {filtered.length === 1 ? 'service' : 'services'}</p>

          <div className="space-y-3">
            {filtered.map(a => (
              <Card key={a.service} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{a.service}</p>
                    <Badge variant="outline">{a.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>What happens:</strong> {a.whatHappens}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Steps</p>
                  <ol className="space-y-1.5 mb-3">
                    {a.steps.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  {a.tip && (
                    <div className="p-2 rounded bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs">
                      <strong className="text-amber-700 dark:text-amber-300">Back up first:</strong>{' '}
                      <span className="text-amber-700 dark:text-amber-300">{a.tip}</span>
                    </div>
                  )}

                  <a href={a.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                    Official deletion page <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <Card className="border-border bg-muted/30">
              <CardContent className="p-5 text-sm text-muted-foreground">No matches. Try a different search or pick "All".</CardContent>
            </Card>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Remove yourself from people-search sites.</p>
              </Link>
              <Link to="/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Closing accounts after a death.</p>
              </Link>
              <Link to="/tools/email-migration" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Email Migration</p>
                <p className="text-xs text-muted-foreground mt-0.5">Move off old email before closing.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: download your data from each service before deleting. Most services have a "Download my data" option in account settings.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
