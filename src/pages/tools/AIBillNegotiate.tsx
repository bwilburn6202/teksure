import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function AIBillNegotiate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Bill Negotiation Help | TekSure" description="ChatGPT-drafted scripts for negotiating cable, phone, medical bills. Plain-English approach. Save $500-2,000/year." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Bill Negotiation</h1>
          <p className="text-lg text-muted-foreground">Save $500-2,000/year — talking less.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use ChatGPT to draft scripts</h2>
            <p className="text-sm">Tell AI: "Write me a script to negotiate my cable bill down. Current bill $180/mo. I&apos;ve been customer 8 years. New customer rate is $99/mo. Goal: match new customer rate."</p>
            <p className="text-sm mt-2">AI generates word-for-word script. You read it on the call. They reduce bill.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bills you can usually negotiate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cable / internet</strong> — annually. Save $20-100/mo.</li>
              <li><strong>Cell phone</strong> — annually.</li>
              <li><strong>Insurance</strong> — auto, home, every 1-2 years.</li>
              <li><strong>Credit card APR</strong> — call + ask, often lower.</li>
              <li><strong>Medical bills</strong> — almost ALWAYS negotiable. Save 20-60%.</li>
              <li><strong>Subscription services</strong> — Netflix, Sirius XM.</li>
              <li><strong>Gym memberships</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Magic phrases to try</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"I&apos;ve been a customer X years. I&apos;ve seen your new-customer rates. Can you match those?"</li>
              <li>"I&apos;m looking at switching to [competitor]. What can you do to keep me?"</li>
              <li>"That&apos;s outside my budget. What can you do?"</li>
              <li>"I&apos;d like to speak with retention department, please."</li>
              <li>"I&apos;ll give you a yes / no answer in 5 minutes — I just need your best offer."</li>
              <li>Silent = powerful. Don&apos;t fill silence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical bill negotiation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask for itemized bill — review for errors.</li>
              <li>Ask for "self-pay rate" — often 30-50% off.</li>
              <li>Apply for "financial assistance" — most hospitals required by IRS.</li>
              <li>Ask for payment plan — interest-free.</li>
              <li>Get medical bill negotiation services (Resolve, RIP Medical Debt) for big bills.</li>
              <li>Don&apos;t pay first bill — usually negotiable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Service that does it for you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rocket Money</strong> — $4-12/mo. Negotiates bills + cancels subscriptions.</li>
              <li><strong>Trim</strong> — similar service.</li>
              <li>Often save 5-15% — they keep 30-40% of savings.</li>
              <li>OR: do it yourself with AI script. Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Once a year</h3>
            <p className="text-sm text-muted-foreground">Set 1 day a year (your birthday?) — call all major bills. AI script + 30 minutes per call. Save $500-1,500/year. Best ROI of any annual chore.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
