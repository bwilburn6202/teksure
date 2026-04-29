import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function LocalTvCordCutting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cord Cutting — Save $1,500/yr | TekSure" description="Drop cable. Plain-English steps from $200/mo cable to $20-30/mo streaming + free antenna." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cord Cutting</h1>
          <p className="text-lg text-muted-foreground">$200/mo cable → $20-30/mo streaming.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recommended setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Antenna ($30-100)</strong> — local NBC, CBS, ABC, FOX, PBS free. See /tools/antenna-picks.</li>
              <li><strong>Roku/FireTV/AppleTV ($30-150)</strong> — turns any TV into smart TV.</li>
              <li><strong>Pick 1-2 streamers</strong>:
                <ul className="list-disc pl-5 mt-1">
                  <li>Disney+ Hulu ESPN+ bundle — $15/mo.</li>
                  <li>Netflix — $15-25/mo.</li>
                  <li>Paramount+ — $8-13/mo (CBS classics).</li>
                  <li>Apple TV+ — $10/mo.</li>
                  <li>Max — $10-17/mo.</li>
                </ul>
              </li>
              <li><strong>FREE add-ons</strong> — Pluto, Tubi, Roku Channel, Library Hoopla.</li>
            </ol>
            <p className="text-sm mt-3">Total: $25-50/mo. Save $1,500-2,000/year.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you NEED live cable channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube TV</strong> — $73/mo. Best alternative to cable. Same channels, better DVR.</li>
              <li><strong>Hulu + Live TV</strong> — $77/mo. Bundle with Disney/ESPN.</li>
              <li><strong>Sling TV</strong> — $40/mo. Smaller channel selection. Cheaper.</li>
              <li><strong>FuboTV</strong> — $80/mo. Sports-heavy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cancellation tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Set up new system FIRST. Test for a week.</li>
              <li>Find your local cable office address.</li>
              <li>Call to cancel — they&apos;ll try retention deals. Listen — half off for 1 year may delay decision.</li>
              <li>Return cable boxes IN PERSON (avoid late-fee fights).</li>
              <li>Get receipt for returned equipment.</li>
              <li>Check next 2 months&apos; statements for surprise charges.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Internet only</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask your cable company for "internet-only" plan. Often $50-80/mo without TV.</li>
              <li>Negotiate every 12 months — say "I&apos;ll switch" for retention deal.</li>
              <li>Or switch to fiber (AT&amp;T, Verizon FiOS, Frontier) — often cheaper.</li>
              <li>Or 5G home internet (T-Mobile, Verizon) — $50/mo, no installer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior moment to give grandkids</h3>
            <p className="text-sm text-muted-foreground">Have a tech-savvy adult kid set up streaming for you. 2 hours saves you $1,500/year. Best ROI gift either of you ever made. After 3 weeks, the new system feels normal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
