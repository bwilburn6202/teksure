import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function GmailForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gmail for Seniors | TekSure" description="Master Gmail basics. Plain-English Gmail guide for senior email users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gmail for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most popular email. Free. Powerful.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 essential skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compose + send email.</li>
              <li>Reply + forward.</li>
              <li>Add attachment (paperclip icon).</li>
              <li>Search emails (top of inbox).</li>
              <li>Delete + archive (trash + checkmark icons).</li>
              <li>Covers 90% of email needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display Density → Comfortable.</li>
              <li>Settings → Theme → larger fonts.</li>
              <li>Reading pane on (split screen).</li>
              <li>Mark as read after viewing.</li>
              <li>Smart compose helps with sentences.</li>
              <li>Conversation view groups messages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spam filter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gmail spam filter excellent.</li>
              <li>Most scams auto-filtered.</li>
              <li>Suspicious — Report Spam button.</li>
              <li>Spam folder auto-deletes after 30 days.</li>
              <li>Trust + Verify before clicking links.</li>
              <li>Banking emails — type URL directly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Organize</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stars — important emails.</li>
              <li>Labels — categorize (color codes).</li>
              <li>Filters — auto-sort emails.</li>
              <li>Archive vs delete (archive keeps, delete removes).</li>
              <li>Use search instead of folders.</li>
              <li>15 GB free storage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior security</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong unique password (12+ chars).</li>
              <li>2-Step Verification ON (Settings).</li>
              <li>Recovery phone + email set.</li>
              <li>Don&apos;t click attachments from strangers.</li>
              <li>Verify sender before sending money.</li>
              <li>Phishing attempt — Report Phishing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other email options</h3>
            <p className="text-sm text-muted-foreground"><strong>Outlook</strong> — Microsoft. Use for Microsoft 365. <strong>Yahoo Mail</strong> — old but works. <strong>iCloud Mail</strong> — Apple users. <strong>ProtonMail</strong> — privacy. Gmail most popular but choose what you&apos;re comfortable with.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
