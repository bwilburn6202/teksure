import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function OutlookBasicsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outlook Basics for Seniors | TekSure" description="Microsoft Outlook senior guide. Plain-English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outlook Basics</h1>
          <p className="text-lg text-muted-foreground">Microsoft email. Calendar + contacts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outlook vs Gmail</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Outlook — Microsoft / Hotmail.</li>
              <li>Gmail — Google.</li>
              <li>Both free.</li>
              <li>Outlook integrates Office.</li>
              <li>Gmail more popular for personal.</li>
              <li>Pick one. Stick with it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to outlook.com.</li>
              <li>Or download app.</li>
              <li>Sign in or create account.</li>
              <li>@outlook.com or @hotmail.com.</li>
              <li>Free forever.</li>
              <li>15GB storage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Send email</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click &quot;New mail&quot;.</li>
              <li>Type recipient email.</li>
              <li>Subject line.</li>
              <li>Type message.</li>
              <li>Click &quot;Send&quot;.</li>
              <li>Cc / Bcc for multiple.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Organize inbox</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Focused&quot; — important emails.</li>
              <li>&quot;Other&quot; — promotions, etc.</li>
              <li>Create folders for organizing.</li>
              <li>&quot;Right-click&quot; email for options.</li>
              <li>Rules auto-sort emails.</li>
              <li>Sweep cleans newsletters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calendar built-in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click calendar icon left side.</li>
              <li>Add appointments.</li>
              <li>Reminders alerts.</li>
              <li>Share calendar with family.</li>
              <li>Reminder email day before.</li>
              <li>Sync with phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make text larger — Settings &gt; Display.</li>
              <li>Mark spam — &quot;Junk&quot; option.</li>
              <li>Block sender option.</li>
              <li>Star important emails.</li>
              <li>Search bar finds anything.</li>
              <li>Phishing report button.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Outlook scams</h3>
            <p className="text-sm text-muted-foreground">Common: &quot;Your Outlook account will be suspended&quot; emails — fake. Microsoft never asks for password via email. &quot;Click here to verify&quot; = scam. Report → mark as junk + phishing. 2FA on account essential. Recovery email + phone updated. Outlook spam filter excellent — trust junk folder.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
