import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function PublicChargingSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Public Charging Safety — Is Airport USB Safe? | TekSure" description="The FBI warned about 'juice jacking' — public USB charging stations can hide hackers. Here's the real risk and how to charge safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Public Charging Safety</h1>
          <p className="text-lg text-muted-foreground">Airport, hotel, mall — what's safe and what's not.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-2">The risk: "juice jacking"</h2>
            <p className="text-sm mb-2">A USB cable carries both power AND data. In rare cases, a public USB port can be tampered with so plugging in your phone lets a hacker copy your photos, contacts, or install spy software.</p>
            <p className="text-sm">The FBI warned about this in 2023. Real attacks are rare — but the fix is simple, so why risk it.</p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">✅ Always safe</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Wall outlets</strong> with your own charger plug. The wall socket can't see your data.</li>
                  <li><strong>Your own portable battery pack.</strong> Best $20 you'll ever spend on travel safety.</li>
                  <li><strong>Wireless charging pads</strong> — they only carry power, not data.</li>
                  <li>Your phone\'s own car charger plugged into a 12V "cigarette lighter" socket.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">⚠️ Be careful with</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Public USB ports</strong> at airports, hotels, gyms, gate areas.</li>
                  <li><strong>USB ports in rental cars.</strong></li>
                  <li><strong>"Free" charging cables</strong> handed out as promotional gifts.</li>
                  <li>Random cables you find lying around — they can have chips inside.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you MUST use a public USB</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>If your phone asks "Trust this computer?"</strong> — tap "Don't trust" or "Charge only".</li>
              <li>Turn the phone OFF before plugging in. It can charge while off.</li>
              <li>Buy a "USB data blocker" — a small adapter (around $8) that lets power through but blocks data. Put it between the public port and your cable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The simple rule</h3>
            <p className="text-sm">Bring a small wall charger and a portable battery pack on every trip. You'll never need to use a sketchy public port — and your phone will last all day.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
