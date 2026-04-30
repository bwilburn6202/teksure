import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const SERVICES = [
  { name: 'Proton Mail', cost: 'Free 1GB; $5/mo Plus', best: 'Best privacy email. Swiss-based. End-to-end encrypted by default. Founded by CERN scientists.', good: 'Free tier is generous.' },
  { name: 'Tutanota', cost: 'Free 1GB; $4/mo', best: 'German-based, encrypted. Subject lines too (most services don\'t encrypt subjects).', good: 'Strong free tier.' },
  { name: 'Apple Mail (iCloud Mail with Hide My Email)', cost: 'Free with Apple ID', best: 'Apple\'s "Hide My Email" — generates fake addresses that forward to you. Hide your real email from sites that track.', good: 'iCloud+ paid tier ($1/mo) adds unlimited Hide My Email.' },
  { name: 'Fastmail', cost: '$5/mo', best: 'Australian. Privacy-friendly without subscription overload. Power-user features.', good: 'Excellent for those who want a real email address (not a Gmail).' },
  { name: 'Gmail with privacy settings tightened', cost: 'FREE', best: 'Default Gmail tracks a lot but you can turn off ad personalization, search history, etc.', good: 'See myaccount.google.com/data-and-privacy.' },
];

export default function PrivacyEmailPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Privacy Email Picker — ProtonMail, Tutanota, Apple Hide My Email | TekSure" description="Tired of email being scanned? Plain-English picks for private email — Proton, Tutanota, Apple Hide My Email." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Privacy Email Picker</h1>
          <p className="text-lg text-muted-foreground">Email that\'s not scanned for ads.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why it might matter</h2>
            <p className="text-sm">Gmail and Yahoo scan email content to target ads. Many people don\'t care; some do. If you discuss medical, financial, or legal matters by email — privacy-focused services may be worth it.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple\'s Hide My Email — easiest privacy boost</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>If you have an Apple ID, you already have it.</li>
              <li>When signing up for any service, tap "Sign in with Apple".</li>
              <li>You can choose "Hide My Email" — Apple makes a fake email like xyz@privaterelay.appleid.com.</li>
              <li>Emails to that address forward to your real inbox.</li>
              <li>You can delete the fake address anytime — instant unsubscribe forever.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Email aliases (privacy without changing email)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SimpleLogin (free, ProtonMail-owned)</strong> — generates aliases. Different alias for each service. Disable any anytime.</li>
              <li><strong>AnonAddy / addy.io</strong> — same idea.</li>
              <li><strong>Bitwarden Email Forwarding</strong> — built into Bitwarden\'s premium tier.</li>
              <li><strong>iCloud+ Hide My Email</strong> — see above.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Realistic recommendation</h3>
            <p className="text-sm text-muted-foreground">For most people, switching from Gmail to ProtonMail is overkill. Keep Gmail, but USE Apple\'s Hide My Email or SimpleLogin for any service that asks for your email. That gives you 80% of the privacy benefit with no learning curve.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
