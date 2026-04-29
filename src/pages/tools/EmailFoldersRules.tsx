import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Inbox } from 'lucide-react';

export default function EmailFoldersRules() {
  const [tab, setTab] = useState<'gmail' | 'outlook'>('gmail');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Folders & Rules — Gmail, Outlook | TekSure" description="Stop drowning in email. Plain-English steps to set up labels (Gmail) or rules (Outlook) so emails auto-file themselves." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Inbox className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Folders & Rules</h1>
          <p className="text-lg text-muted-foreground">Auto-file emails. Inbox stays clean.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('gmail')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'gmail' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📧 Gmail</button>
          <button onClick={() => setTab('outlook')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'outlook' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📨 Outlook</button>
        </div>

        {tab === 'gmail' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Gmail Labels (folders)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>In Gmail, click the gear icon → "See all settings" → "Labels".</li>
                <li>Click "Create new label". Name it ("Bills", "Family", "Volunteer").</li>
                <li>Save.</li>
              </ol>
              <h3 className="font-bold text-lg mt-4 mb-3">Auto-file with filters</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open an email from your electric company.</li>
                <li>Click the three dots → "Filter messages like this".</li>
                <li>Click "Create filter".</li>
                <li>Check "Apply the label" → pick "Bills".</li>
                <li>Check "Skip the Inbox" if you want it OUT of inbox.</li>
                <li>"Create filter".</li>
                <li>Repeat for each company.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'outlook' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Outlook Folders</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Right-click "Inbox" or your email → "New Folder".</li>
                <li>Name it ("Bills", "Family").</li>
              </ol>
              <h3 className="font-bold text-lg mt-4 mb-3">Auto-file with rules</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open an email.</li>
                <li>Right-click → "Rules" → "Create Rule".</li>
                <li>Check "From [sender]" → Move to folder → pick "Bills".</li>
                <li>OK.</li>
                <li>Confirm "Run this rule now on existing emails" if you want.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Useful folders to make</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Bills</strong> — every utility, credit card, insurance.</li>
              <li><strong>Receipts</strong> — Amazon, Apple, etc. Auto-files for taxes.</li>
              <li><strong>Travel</strong> — confirmations, tickets.</li>
              <li><strong>Family</strong> — emails from spouse, kids, siblings.</li>
              <li><strong>Newsletters</strong> — auto-skip inbox; read at your leisure.</li>
              <li><strong>Volunteer / Church</strong>.</li>
              <li><strong>Medical</strong> — patient portal notifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bulk unsubscribe</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Unroll.Me</strong> — free service that bulk-unsubscribes from newsletters.</li>
              <li><strong>Apple\'s "Hide My Email"</strong> — for new signups, generates fake email; instant unsubscribe by deleting.</li>
              <li><strong>Just hit "unsubscribe"</strong> at the bottom of every newsletter for 2 weeks. Saves dozens of emails per day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"Inbox Zero" challenge</h3>
            <p className="text-sm text-muted-foreground">For one week, try ending each day with an EMPTY inbox. Either reply, archive, delete, or label-and-archive every email. Combined with rules, takes about 15 min/day. Liberating.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
