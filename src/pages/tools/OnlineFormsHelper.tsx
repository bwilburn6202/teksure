import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ChevronRight, AlertTriangle } from 'lucide-react';

type Topic = 'autofill' | 'tricky-fields' | 'errors' | 'safety';

const SECTIONS: Record<Topic, { title: string; tips: { title: string; detail: string }[] }> = {
  autofill: {
    title: 'Autofill — type once, fill forever',
    tips: [
      { title: 'iPhone: Settings → Safari → AutoFill', detail: 'Turn on "Use Contact Info" with your own contact card. Now your name, address, email auto-suggest in any web form.' },
      { title: 'iPhone: Save credit cards securely', detail: 'Same Settings → Safari → AutoFill → "Saved Credit Cards" → add your cards. Face ID required to use them. No more typing 16 digits.' },
      { title: 'Android: Settings → Google → Autofill', detail: 'Pick "Autofill with Google". Add your name, address, payment info once. Gboard suggests filling automatically.' },
      { title: 'Mac/Windows: Use the browser\'s built-in', detail: 'Chrome → Settings → Autofill. Edge → Settings → Profiles → Personal info. Once filled out, every form on every site is one click.' },
      { title: 'Save passwords too', detail: 'iCloud Keychain (iPhone), Google Password Manager (Android/Chrome), Edge Wallet (Windows). Password manager is one of the biggest time-savers in tech.' },
    ],
  },
  'tricky-fields': {
    title: 'Tricky fields decoded',
    tips: [
      { title: 'Date format: MM/DD/YYYY', detail: 'US default. 06/15/2024 = June 15, 2024. Some sites want 06-15-2024 — usually they tell you. If it errors, try with dashes.' },
      { title: 'Phone number — all digits, no spaces', detail: 'Most US forms accept (555) 555-5555 OR 555-555-5555 OR 5555555555. They will reformat automatically. If it errors, try plain 10 digits.' },
      { title: 'Zip code — 5 OR 9 digits', detail: 'Both work for most. The 9-digit version (12345-6789) is on the back of your driver\'s license.' },
      { title: 'Required vs optional', detail: 'Required fields have an asterisk (*) or red label. Skip the rest if you do not want to share.' },
      { title: '"Don\'t collect for now" → uncheck', detail: 'Forms often default-check boxes asking for marketing emails. Read each checkbox carefully and uncheck what you do not want.' },
    ],
  },
  errors: {
    title: 'When the form errors',
    tips: [
      { title: 'Read the red text carefully', detail: 'It tells you which field is wrong. Scroll up to the field — the form remembers what you typed.' },
      { title: 'Refresh blanks on the form', detail: 'Tap the back button → forward again. Most browsers re-fill the form with what you typed. Reload (refresh) usually clears it.' },
      { title: '"Session expired" — log back in', detail: 'Long forms time out after 30 minutes. Save progress as you go if the form has a "Save Draft" option.' },
      { title: 'Browser back button — risky', detail: 'On long forms, hitting back can wipe what you typed. Use Tab to move forward; only use back if you know the form supports it.' },
      { title: 'Stuck? Print the form and mail it', detail: 'Most major US forms (passport, IRS, SSA) still accept paper. If online keeps failing, paper is a valid fallback.' },
    ],
  },
  safety: {
    title: 'Safety check before submitting',
    tips: [
      { title: 'Look at the URL one more time', detail: 'Before typing personal info, glance at the address bar. Real Capital One is capitalone.com — not capital0ne.com or capital-one-secure.com.' },
      { title: 'Look for the lock icon', detail: 'No lock = the form is not encrypted. Skip anything financial or medical. (Most sites have a lock now; missing one is a red flag.)' },
      { title: 'Check the privacy policy', detail: 'Click the "Privacy Policy" link at the bottom. Skim for "we sell your data". If it says yes, find another site.' },
      { title: 'Avoid forms reached from email links', detail: 'Phishing 101: an email links to a real-looking form on a fake site. Type the real URL into the browser yourself.' },
      { title: 'Save the confirmation', detail: 'After submitting, screenshot the confirmation page. Email yourself a copy. If something goes wrong, you have a record.' },
    ],
  },
};

const TABS: { id: Topic; label: string }[] = [
  { id: 'autofill',     label: 'Autofill' },
  { id: 'tricky-fields', label: 'Tricky fields' },
  { id: 'errors',       label: 'Form errors' },
  { id: 'safety',       label: 'Safety' },
];

export default function OnlineFormsHelper() {
  const [tab, setTab] = useState<Topic>('autofill');
  const section = SECTIONS[tab];

  return (
    <>
      <SEOHead
        title="Online Forms Helper"
        description="Make filling out long online forms easier. Autofill setup, tricky-field decoder, error recovery, and safety checks before submitting personal info."
        path="/tools/online-forms-helper"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Forms Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Long online forms got easier. Set up autofill once, decode tricky fields, recover from errors.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Forms Helper' }]} />

          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  tab === t.id ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {t.label}
              </button>
            ))}
          </div>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="font-semibold text-base mb-3">{section.title}</p>
              <div className="space-y-3">
                {section.tips.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">If the form is asking for sensitive info — pause</p>
                <p className="text-muted-foreground">
                  Social Security number, credit card, bank account number? Take an extra 30 seconds to verify the URL is real, the lock icon is there, and you arrived at the form by typing the URL yourself (not by clicking a link in an email). When in doubt, call the company.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health Check</p>
                <p className="text-xs text-muted-foreground mt-0.5">Strong passphrase before filling forms.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check that "verify your account" email.</p>
              </Link>
              <Link to="/tools/online-shopping-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Shopping Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the form is on a checkout page.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: spend 5 minutes setting up autofill once. You will save 30 minutes the next time you fill out a long form.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
