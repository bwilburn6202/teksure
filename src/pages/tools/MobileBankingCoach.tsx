import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark } from 'lucide-react';

export default function MobileBankingCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Banking Coach — Deposit Checks, Move Money Safely | TekSure" description="Skip the bank line. Plain-English steps to use your bank\'s app — deposit checks, transfer money, set up alerts, and stay safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Landmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Banking Coach</h1>
          <p className="text-lg text-muted-foreground">Bank from the couch. Safer than you think.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why mobile banking is safe</h2>
            <p className="text-sm">Bank apps from real banks (Chase, Wells Fargo, Bank of America, Schwab, your local credit union) are encrypted, require fingerprint or Face ID to open, and lock if anyone tries to log in incorrectly. They\'re actually safer than logging into the bank website on a public computer.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install YOUR bank\'s app from the App Store or Play Store. CRITICAL — type your bank\'s name in the search bar; don\'t click ads.</li>
              <li>Verify it\'s the real one — check the developer name matches your bank, and the app has millions of downloads.</li>
              <li>Sign in with your usual online banking username and password.</li>
              <li>If asked, set up Face ID or fingerprint — much safer than typing your password each time.</li>
              <li>Turn ON two-factor authentication if not already.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mobile check deposit</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open the bank app.</li>
              <li>Look for "Deposit" or "Mobile Deposit" or "Deposit a Check".</li>
              <li>Pick the account it goes into.</li>
              <li>Type the amount.</li>
              <li>Sign the back of the check + write "For mobile deposit only at [bank name]".</li>
              <li>Take photo of FRONT of check. App auto-detects edges.</li>
              <li>Take photo of BACK.</li>
              <li>Tap Submit.</li>
              <li>Money usually appears in 1-3 business days.</li>
              <li>KEEP the paper check for 30 days, then destroy it. Just in case the deposit fails.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up alerts (do this today)</h2>
            <p className="text-sm mb-2">Alerts are the single best protection against fraud.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Every transaction over $1</strong> — text alert.</li>
              <li><strong>ATM withdrawals</strong> — text alert.</li>
              <li><strong>Login from new device.</strong></li>
              <li><strong>Failed login attempt.</strong></li>
              <li><strong>Low balance warning.</strong></li>
            </ul>
            <p className="text-sm mt-2">If a fraudulent charge appears, you know within 30 seconds. Reverse it before more happen.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other things you can do from the app</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Transfer between your own accounts.</li>
              <li>Pay bills (electric, water, credit card).</li>
              <li>Send money to people via Zelle (built into most US bank apps).</li>
              <li>Lock or unlock your debit card with one tap (huge if you misplace it).</li>
              <li>Order new checks.</li>
              <li>See past statements (usually 7+ years).</li>
              <li>Schedule wires (often with phone confirmation).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Stay safe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Never click on "your bank" texts</strong> — log in by opening the app yourself.</li>
              <li><strong>Real banks NEVER ask for your full PIN or password by text or phone.</strong></li>
              <li><strong>Don\'t download "bank tools" or "bank speedup" apps</strong> — fakes.</li>
              <li><strong>Don\'t bank on public Wi-Fi unless you really must.</strong> Use cellular instead.</li>
              <li><strong>If your phone is lost</strong> — call the bank IMMEDIATELY to lock the app. Then sign in to icloud.com/find or android.com/find to erase the phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">If your bank app is too small or hard to read — most have a "Big text" setting in the app\'s preferences. Or use your phone\'s system-wide big text (Settings → Display → Text Size).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
