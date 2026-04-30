import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function UspsMailForwardHold() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USPS Mail Forwarding & Hold Coach | TekSure" description="Going on vacation? Moving? Plain-English steps to forward mail or hold mail with USPS — done online in 5 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USPS Mail Forwarding & Hold</h1>
          <p className="text-lg text-muted-foreground">Vacation or moving? 5-minute online setup.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📅 Hold Mail (vacation)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>USPS.com → Track & Manage → Hold Mail</strong>.</li>
              <li>Enter your address and verify identity (driver\'s license + SSN, or in-person at post office).</li>
              <li>Pick start and end dates (3-30 days).</li>
              <li>Pick: "Carrier delivers all on end date" OR "I\'ll pick up at PO".</li>
              <li>Submit. Free.</li>
              <li>Confirmation by email.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📦 Mail Forwarding (moving)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>moversguide.usps.com</strong>.</li>
              <li>Pay $1.10 verification fee (proves identity, prevents fraud).</li>
              <li>Old address + new address + start date.</li>
              <li>Choose individual or whole-household forward.</li>
              <li>Forwarding lasts 12 months for first-class mail. Periodicals 60 days. Junk mail not forwarded.</li>
            </ol>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded"><strong>Watch for fake USPS sites</strong> — only use usps.com or moversguide.usps.com. Many scam sites charge $40 for the same $1.10 service. Type the URL yourself.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏠 USPS Informed Delivery</h2>
            <p className="text-sm">Free service that emails you photos of mail BEFORE it arrives. Perfect for "did my SSA letter come?" questions. (See our USPS Informed Delivery tool.) Especially useful when you\'re on vacation and have a hold — the photos still come, you can ask a neighbor to grab anything urgent.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PO Box vs home delivery</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>PO Box</strong> — $20-200/year depending on size and location. More private (your home address isn\'t known).</li>
              <li><strong>Use for online shopping privacy</strong> — many seniors use a PO Box for everything except packages.</li>
              <li><strong>UPS Store mailbox</strong> — $20-30/month. Get a real street address (not PO Box). Accepts UPS, FedEx, Amazon. Notifies you of arrivals.</li>
              <li><strong>Anytime Mailbox</strong> — virtual address. They scan letters, you read online. $10-20/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Travel tip</h3>
            <p className="text-sm text-muted-foreground">For travel longer than 30 days, do mail forwarding to a child\'s house OR a UPS Store. Hold-mail max is 30 days. After that, mail piles up and signals "no one home" to thieves.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
