import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function OutlookForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outlook for Seniors | TekSure" description="Master Outlook email + calendar. Plain-English guide for senior Outlook users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outlook for Seniors</h1>
          <p className="text-lg text-muted-foreground">Email + calendar + contacts in one.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outlook vs others</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email + calendar + contacts unified.</li>
              <li>Better than Gmail for those who use Microsoft.</li>
              <li>Free Outlook.com or paid via Microsoft 365.</li>
              <li>Works with @outlook.com, @hotmail.com, @msn.com.</li>
              <li>Also any Gmail/Yahoo address.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compose + reply email.</li>
              <li>Add attachment.</li>
              <li>Add to calendar (events + appointments).</li>
              <li>Add contacts.</li>
              <li>Search inbox.</li>
              <li>Coverage of basic needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calendar key feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create event from email — drag email to calendar.</li>
              <li>Reminders 15 min before.</li>
              <li>Recurring events (medication, appointments).</li>
              <li>Share calendar with spouse.</li>
              <li>Doctor appointments saved.</li>
              <li>Birthdays + anniversaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → larger font sizes.</li>
              <li>Reading pane (split inbox + email).</li>
              <li>Auto-archive old emails.</li>
              <li>Focused vs Other inbox (auto-sorts important).</li>
              <li>Spam filter excellent.</li>
              <li>2-Factor Authentication on.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free vs paid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Outlook.com</strong> — FREE web version.</li>
              <li><strong>Microsoft 365 ($70/yr)</strong> — full desktop app + Office.</li>
              <li>Free version covers most senior needs.</li>
              <li>Paid for those who use Word/Excel daily.</li>
              <li>Family Plan $100/yr — share with 5.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple users</h3>
            <p className="text-sm text-muted-foreground">Apple Mail + Apple Calendar work great if iPhone user. Built into iPhone, iPad, Mac. iCloud syncs all 3. Don&apos;t need Outlook unless used at work. Apple Mail simpler interface for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
