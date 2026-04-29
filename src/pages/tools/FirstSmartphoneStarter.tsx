import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function FirstSmartphoneStarter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="First Smartphone Starter for Seniors | TekSure" description="Never had a smartphone? Plain-English step-by-step first 30 days guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">First Smartphone</h1>
          <p className="text-lg text-muted-foreground">Day 1 to Day 30 — gentle introduction.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick the right phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone SE</strong> ($429) — small, simple, latest software.</li>
              <li><strong>iPhone 15</strong> ($800) — best long-term.</li>
              <li><strong>Samsung Galaxy A35</strong> ($380) — Android equivalent.</li>
              <li>Get same phone as family member — they help with questions.</li>
              <li>Avoid super-cheap phones — slow + frustrating.</li>
              <li>Larger screen better for senior eyes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day 1 setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have family member or store help.</li>
              <li>Set up Apple ID / Google account — write password down.</li>
              <li>Connect to home WiFi.</li>
              <li>Add 5 emergency contacts.</li>
              <li>Set Medical ID (Apple Health).</li>
              <li>Increase text size — Settings → Display.</li>
              <li>Set ringtone louder.</li>
              <li>Don&apos;t add apps yet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 1: 5 basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make + receive calls.</li>
              <li>Text messages.</li>
              <li>Take photos.</li>
              <li>Use camera flash for flashlight.</li>
              <li>Lock + unlock phone.</li>
              <li>That&apos;s it. Master these first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 2: Voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Siri&quot; (iPhone) / &quot;Hey Google&quot; (Android).</li>
              <li>Voice typing instead of typing.</li>
              <li>Voice memos.</li>
              <li>Phone call by saying &quot;Call [name].&quot;</li>
              <li>Voice search Google.</li>
              <li>Easier than typing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 3: Communication</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email check.</li>
              <li>FaceTime / video calls with family.</li>
              <li>Photos shared via text.</li>
              <li>Group texts for family chat.</li>
              <li>Voice memo to send instead of typing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 4: Practical apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Maps for directions.</li>
              <li>Weather.</li>
              <li>Bank app.</li>
              <li>Pharmacy app.</li>
              <li>1-2 useful apps only — don&apos;t overload.</li>
              <li>Add more over months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common worries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;I&apos;ll break it&quot; — get hard case + screen protector.</li>
              <li>&quot;I&apos;ll forget password&quot; — set fingerprint / Face ID.</li>
              <li>&quot;I&apos;ll click wrong thing&quot; — Apple/Google undo most actions.</li>
              <li>&quot;Scams will get me&quot; — don&apos;t click links in texts.</li>
              <li>Family helps — let them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Senior Planet</strong> — free senior tech classes. <strong>OATS / Older Adults Technology Services</strong> — free training. <strong>Library</strong> — many offer 1-on-1 phone help. <strong>AARP TEK</strong> — courses + workshops. <strong>Apple stores</strong> — free Today at Apple sessions. Senior tech help is everywhere — use it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
