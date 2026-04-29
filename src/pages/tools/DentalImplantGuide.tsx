import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function DentalImplantGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dental Implants Guide for Seniors | TekSure" description="Implants, cost, alternatives. Plain-English honest take on dental implants for seniors — $30K decisions made simple." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dental Implants Guide</h1>
          <p className="text-lg text-muted-foreground">Honest. Plain-English. Big-money decision.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real costs (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Single implant + crown</strong> — $4,000-6,000.</li>
              <li><strong>All-on-4 (full arch)</strong> — $20,000-35,000 per arch.</li>
              <li><strong>Implant-supported denture</strong> — $5,000-15,000.</li>
              <li><strong>Bone graft (often needed)</strong> — $500-3,000 extra per site.</li>
              <li><strong>CT scan + planning</strong> — $300-1,000.</li>
              <li>Insurance covers little to none. Medicare doesn&apos;t cover.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bridge</strong> — $1,000-3,500. Permanent. Anchors to teeth on either side.</li>
              <li><strong>Partial denture</strong> — $500-2,000. Removable.</li>
              <li><strong>Full denture</strong> — $1,500-3,500. Removable. Lasts 7-10 years.</li>
              <li><strong>Mini-implants</strong> — $500-1,500 each. Smaller. Hold dentures in place.</li>
              <li><strong>Don&apos;t replace</strong> — back tooth often unnecessary if not chewing function.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dental schools</strong> — students do work at 30-50% off, supervised.</strong></li>
              <li><strong>Mexico / Costa Rica dental tourism</strong> — 50-70% savings, but research carefully.</li>
              <li><strong>Costco hearing/dental</strong> — some Costcos have implant pricing for members.</li>
              <li><strong>"Smile clubs" / In-house dental plans</strong> — $200-500/yr replaces insurance, big discount.</li>
              <li><strong>Dental discount plans</strong> — Aetna Vital, Careington — 10-50% off.</li>
              <li><strong>FSA/HSA</strong> — pay with pre-tax dollars.</li>
              <li><strong>Negotiate</strong> — many dentists discount cash payments 5-15%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smoking + diabetes lower implant success.</li>
              <li>Bone density decreases with age — bone graft often needed.</li>
              <li>Healing slower at 70+.</li>
              <li>4-9 month total timeline (extraction → graft → implant → crown).</li>
              <li>Maintain oral hygiene faithfully.</li>
              <li>Consider quality-of-life vs cost — eating + smiling matter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get 3 quotes</h3>
            <p className="text-sm text-muted-foreground">Implant prices vary 50%+ between dentists. Get 3 quotes for any work over $3,000. Beware "limited time" pricing pressure. Beware "free consultation" that pivots to expensive treatment plan. Honest dentists give clear written estimates.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
