import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, AlertTriangle } from 'lucide-react';

export default function PhoneRepairCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Repair Coach — Fix or Replace? | TekSure" description="Cracked screen, dying battery, broken camera? Plain-English guide to phone repair: where to go, what it costs, and when you should just replace." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Repair Coach</h1>
          <p className="text-lg text-muted-foreground">Cracked, slow, or dying — fix it or replace it?</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">First — back up your phone</h2>
            <p className="text-sm">Before any repair: back up to iCloud or Google. Repair sometimes wipes the phone. Settings → tap your name → iCloud → "iCloud Backup" → "Back Up Now". Or for Android: Settings → Google → Backup → "Back up now".</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common repairs and rough costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cracked screen, iPhone:</strong> $150-$400 at Apple. $80-$200 at local repair shops.</li>
              <li><strong>Battery replacement, iPhone:</strong> $69-$119 at Apple. $50-$80 at local shops.</li>
              <li><strong>Battery, Android:</strong> $50-$120.</li>
              <li><strong>Charging port:</strong> $50-$100 (worth doing before replacing the phone).</li>
              <li><strong>Water damage:</strong> Sometimes fixable, sometimes not. $80 diagnostic. Often $200+ to repair.</li>
              <li><strong>Camera lens:</strong> $80-$200.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to get repairs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Store / Apple Authorized Service</strong> — Genuine parts, 1-year warranty on repair. More expensive.</li>
              <li><strong>Best Buy Geek Squad</strong> — Authorized Apple repair. Often same-day. Reliable.</li>
              <li><strong>uBreakiFix (Samsung partner)</strong> — Authorized Samsung. Good for Android.</li>
              <li><strong>Local independent shop</strong> — cheaper, faster. Quality varies — ask for warranty (90 days minimum).</li>
              <li><strong>Carrier store</strong> (Verizon, T-Mobile, AT&T) — basic repairs only, push you to upgrade.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Decision tree: repair vs replace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Phone is 1-3 years old + repair is under $150:</strong> Repair.</li>
              <li><strong>Phone is 4+ years old + repair is over $150:</strong> Probably replace. Apple stops supporting iPhones after about 6 years.</li>
              <li><strong>Multiple things broken:</strong> Replace.</li>
              <li><strong>Battery only is the issue:</strong> ALWAYS replace battery. Phone feels new again.</li>
              <li><strong>Cracked screen but works fine:</strong> A $20 case + $10 screen protector can extend life if you can\'t fix it now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Watch out for repair scams</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Demands you pay before any diagnosis.</li>
                  <li>Won\'t give a written estimate.</li>
                  <li>"Found more problems" once they have the phone — get a second opinion.</li>
                  <li>"Cheap" online repairs that ship your phone overseas — sometimes phones never come back.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save money on a replacement</h3>
            <p className="text-sm text-muted-foreground"><strong>Apple Certified Refurbished</strong> — same warranty as new, $50-$200 cheaper. <strong>Amazon Renewed</strong> — slightly cheaper. <strong>Verizon, AT&T, T-Mobile trade-in</strong> — gives credit toward a new phone but read the fine print on monthly payments. <strong>Don\'t pre-pay for an "iPhone 17" rumor</strong> — buy current models that are proven.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
