import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function CallerIdVerification() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Is This Call Real? Caller ID Verification Guide | TekSure" description="Scammers can fake any phone number — even your bank's. Here's how to tell if a call is real and how to verify safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Is This Call Real?</h1>
          <p className="text-lg text-muted-foreground">Caller ID can be faked. Here's how to tell — and verify safely.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">The big secret</h2>
                <p className="text-sm">Scammers can make ANY name and number show on your caller ID. "Bank of America", "Apple", "IRS", "Local Police", even your own family's name and number — all fakeable. This is called <strong>spoofing</strong>.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚩 Red flags during a call</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>They say there's an emergency, fraud, or warrant — and you must act <strong>right now</strong>.</li>
              <li>They tell you not to hang up, not to talk to family, or not to tell the bank.</li>
              <li>They ask for passwords, PINs, Social Security numbers, or codes you just got by text.</li>
              <li>They ask you to "verify" your account by reading information back.</li>
              <li>They ask you to move money "to a safe account" or buy gift cards.</li>
              <li>They threaten to send police, cut your power, or arrest you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">The safe way to verify ANY call</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li><strong>Hang up.</strong> A real bank, doctor, or government agency will NEVER pressure you to stay on the line.</li>
                  <li>Wait 30 seconds — scammers sometimes hold the line open hoping you'll dial.</li>
                  <li>Find the company's real number yourself: the back of your card, a bill, or by typing the company name into Google.</li>
                  <li>Call that number. Ask if anyone there was just trying to reach you.</li>
                  <li>If the call was real, they\'ll connect you. If it wasn\'t — you just dodged a scam.</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common spoofed callers</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>"Your bank" about fraud:</strong> Hang up. Call the number on the back of your card.</li>
              <li><strong>"Medicare" or "Social Security":</strong> They mail you, they don't call. Hang up. Real number for SSA: 1-800-772-1213.</li>
              <li><strong>"IRS":</strong> Always mails first. Real number: 1-800-829-1040.</li>
              <li><strong>"Microsoft / Apple support":</strong> Apple and Microsoft do not call you. Hang up.</li>
              <li><strong>"Police" or "court":</strong> Hang up. Call your local police non-emergency line yourself.</li>
              <li><strong>"Power company":</strong> Hang up. Look up your utility's real number on a paper bill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Trust your gut</h3>
            <p className="text-sm text-muted-foreground">If a call feels off — pushy, scary, urgent, or asking for money — it almost always IS off. There's nothing rude about hanging up. A real business will not be insulted by a callback.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
