import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function GunSafeBiometric() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Biometric Gun Safes for Senior Owners | TekSure" description="Best biometric gun safes for senior firearm owners. Safe storage with quick fingerprint access." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Biometric Gun Safes</h1>
          <p className="text-lg text-muted-foreground">Quick access. Secure storage.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why biometric safes for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fingerprint opens in 2 seconds.</li>
              <li>No combination to remember at night.</li>
              <li>Backup PIN code + key.</li>
              <li>Stops grandkids from accessing.</li>
              <li>Reduces firearm accident risk.</li>
              <li>Required by law in some states.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick-access pistol safes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vaultek MX — $200, top-rated.</li>
              <li>SentrySafe Quick Access — $100.</li>
              <li>RPNB Mounted — $80, smaller budget option.</li>
              <li>Fits 1–2 pistols.</li>
              <li>Mounts under desk or in nightstand.</li>
              <li>Battery operated — keypad backlit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Long gun safes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SecureIt Agile — modular, $400+.</li>
              <li>Stack-On Tactical — affordable, $300.</li>
              <li>Liberty Centurion — budget option.</li>
              <li>Holds 8–24 long guns.</li>
              <li>Some include biometric, some keypad/key.</li>
              <li>Bolt to floor for security.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up biometric</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Register multiple fingerprints.</li>
              <li>Both index fingers of each hand.</li>
              <li>Re-register every few months — fingerprints change.</li>
              <li>Spouse can also be enrolled.</li>
              <li>Test daily — make sure it works.</li>
              <li>Always have backup PIN as well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trigger locks (alternative)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$15–$40 per lock.</li>
              <li>Cheaper than safe.</li>
              <li>Less secure than safe.</li>
              <li>Combination or key.</li>
              <li>Better than nothing.</li>
              <li>Project ChildSafe — free locks from many police.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior firearm safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual checkup — clean + inspect.</li>
              <li>Concealed carry training refreshers.</li>
              <li>Reassess as eyesight + reflexes change.</li>
              <li>Talk to family about your firearms.</li>
              <li>Consider whether home defense still needed.</li>
              <li>Local shops offer senior-friendly classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vaultek MX is the gold standard</h3>
            <p className="text-sm text-muted-foreground">If you keep a pistol for home defense, the Vaultek MX ($200) is widely considered the best biometric quick-access safe. Opens in under 2 seconds with fingerprint. Three backup methods — PIN, key, and Vaultek app. Reliable battery life. The peace of mind of safe storage that opens fast when needed is worth every dollar.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
