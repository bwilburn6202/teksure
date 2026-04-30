import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function BankOfAmericaAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bank of America App for Seniors | TekSure" description="BofA Mobile app guide. Erica AI assistant, mobile deposit, secure banking for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bank of America App</h1>
          <p className="text-lg text-muted-foreground">Mobile banking + Erica assistant.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Bank of America Mobile from app store.</li>
              <li>Sign in with online banking credentials.</li>
              <li>Enable biometric login (Face ID / fingerprint).</li>
              <li>Set up alerts in Settings.</li>
              <li>Test by checking balance.</li>
              <li>Add bank phone number to contacts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Erica — virtual assistant</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap Erica icon in app.</li>
              <li>Ask: &quot;What&apos;s my balance?&quot;</li>
              <li>&quot;When did I last pay electric bill?&quot;</li>
              <li>&quot;Show me last month&apos;s spending.&quot;</li>
              <li>Erica answers in seconds.</li>
              <li>Free, built-in, helpful for quick checks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mobile check deposit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Deposit Checks.&quot;</li>
              <li>Endorse check + write &quot;For Mobile Deposit Only.&quot;</li>
              <li>Photograph front and back.</li>
              <li>Enter amount.</li>
              <li>Funds typically available next business day.</li>
              <li>Keep check 14 days then shred.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bill pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay credit cards, utilities, mortgages.</li>
              <li>Schedule recurring payments.</li>
              <li>Set autopay reminders.</li>
              <li>Free service — no fees.</li>
              <li>Never miss a bill again.</li>
              <li>Replaces writing checks + mailing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel notice + card lock</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Travel notice — tell bank you&apos;ll be away.</li>
              <li>Prevents declined cards in hotels/restaurants.</li>
              <li>Card lock — instantly disable lost/stolen card.</li>
              <li>Unlock when found.</li>
              <li>Both in app menu.</li>
              <li>Saves call to customer service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior security tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Enable 2-step verification.</li>
              <li>Set up text alerts for ALL transactions over $100.</li>
              <li>Use app biometric login — not password each time.</li>
              <li>Never share login codes by phone.</li>
              <li>Check transaction history weekly.</li>
              <li>Notify bank immediately if suspicious activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Erica saves customer service calls</h3>
            <p className="text-sm text-muted-foreground">Most senior questions about banking — &quot;what&apos;s my balance?&quot; &quot;when did social security deposit?&quot; — Erica answers instantly without holding on customer service. Just type or speak the question. Combined with mobile deposit and bill pay, the BofA app eliminates 90% of in-person banking visits. Set up account alerts as your fraud-detection system.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
