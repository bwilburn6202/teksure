import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Inbox } from 'lucide-react';

export default function EmailOrganizingBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Organizing Basics — Inbox Zero | TekSure" description="Tame a 5,000-email inbox in one afternoon. Plain-English steps for Gmail, Outlook, and Apple Mail." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Inbox className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Organizing Basics</h1>
          <p className="text-lg text-muted-foreground">From 5,000 unread to 50 — in one afternoon.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The 4-folder system</h2>
            <p className="text-sm">Forget complicated folders. Use these four:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
              <li><strong>Inbox</strong> — only things you still need to act on.</li>
              <li><strong>Receipts</strong> — orders, taxes, warranties.</li>
              <li><strong>Personal</strong> — family, friends, doctors.</li>
              <li><strong>Reference</strong> — anything you might want later.</li>
            </ul>
            <p className="text-sm mt-2">Everything else → archive or delete.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — bulk unsubscribe (15 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search inbox for "unsubscribe".</li>
              <li>Sort by sender — find the loudest senders first.</li>
              <li>Open one email. Scroll bottom. Click "Unsubscribe".</li>
              <li>If unsubscribe is hidden — block the sender instead.</li>
              <li>Goal: cut 80% of new mail going forward.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — bulk delete (10 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gmail</strong> — search "older_than:1y is:unread" → Select all → Delete.</li>
              <li><strong>Outlook</strong> — sort by date → click first message → Shift-click oldest → Delete.</li>
              <li><strong>Apple Mail</strong> — Edit → Select All → Delete.</li>
              <li>Old unread = not important. Trash without guilt.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — search instead of file</h2>
            <p className="text-sm">You don&apos;t need 50 folders. Email search works perfectly. Type sender name or keyword in search bar — find anything in seconds. Saves hours of filing.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — daily routine (5 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open inbox once or twice a day. NOT all day.</li>
              <li>Each email — answer, archive, or delete. No "I&apos;ll look at it later".</li>
              <li>If it takes under 2 minutes — do it now.</li>
              <li>If longer — schedule it on calendar, archive email.</li>
              <li>Inbox empty = done.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free helpers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Unroll.Me</strong> — free, scans inbox, mass-unsubscribes. (Note — they sell anonymized data.)</li>
              <li><strong>Clean Email</strong> — $9/mo. Cleans much faster than manual.</li>
              <li><strong>Apple Hide My Email</strong> — generates throwaway addresses for sign-ups, kills spam at the source.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The "two-second rule"</h3>
            <p className="text-sm text-muted-foreground">If you can answer or decide in under 2 seconds — do it. The rest of the time, your hands move faster than your brain. Trust the impulse to delete.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
