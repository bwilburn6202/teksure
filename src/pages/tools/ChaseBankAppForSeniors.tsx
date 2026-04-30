import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function ChaseBankAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chase Bank App for Seniors | TekSure" description="Use Chase Mobile app safely. Mobile deposit, transfers, alerts for senior banking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chase Mobile App</h1>
          <p className="text-lg text-muted-foreground">Bank from anywhere safely.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Chase Mobile app from app store.</li>
              <li>Sign in with Chase.com username + password.</li>
              <li>Set up Touch ID / Face ID for quick access.</li>
              <li>Enable account alerts in Settings.</li>
              <li>Add 2-Step Verification.</li>
              <li>Test sign in to make sure works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mobile deposit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph check with phone — no bank trip.</li>
              <li>Tap Deposit Checks in app.</li>
              <li>Photograph front + back of check.</li>
              <li>Endorse with &quot;For Mobile Deposit Only&quot; + sign.</li>
              <li>Enter amount.</li>
              <li>Funds available next business day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Account alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Profile + Settings → Alerts.</li>
              <li>Get text/email when transactions occur.</li>
              <li>Catches fraudulent charges fast.</li>
              <li>Set low balance + high transaction alerts.</li>
              <li>ATM withdrawal alerts.</li>
              <li>Critical for fraud detection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Zelle for transfers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Send money to family + friends.</li>
              <li>Built into Chase app.</li>
              <li>Free, fast — minutes to recipient.</li>
              <li>Use email or phone number to send.</li>
              <li>WARNING: Cannot reverse — only send to people you know.</li>
              <li>Common scam target — verify recipient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size.</li>
              <li>Voice transactions via Apple Pay.</li>
              <li>Simple visual layout.</li>
              <li>Find ATM nearby — built-in map.</li>
              <li>Card lock toggle if card lost.</li>
              <li>Schedule recurring bill payments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay safe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never share Chase login or codes.</li>
              <li>Chase NEVER calls asking for codes/passwords.</li>
              <li>If suspicious, hang up + call number on card.</li>
              <li>Don&apos;t login on public WiFi without VPN.</li>
              <li>Check bank statements monthly minimum.</li>
              <li>Add adult child as authorized user if helpful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mobile deposit changes everything</h3>
            <p className="text-sm text-muted-foreground">If you receive paper checks (Social Security, pension, dividend), mobile deposit eliminates trips to the bank. Photograph the check, deposit it, done. Funds available next business day. Combined with account alerts that catch fraud instantly, the Chase app turns banking from a chore into a simple morning task.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
