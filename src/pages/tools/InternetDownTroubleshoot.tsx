import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { WifiOff } from 'lucide-react';

export default function InternetDownTroubleshoot() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Internet Down — Troubleshoot Step by Step | TekSure" description="No internet? Plain-English steps to find the cause: modem, router, ISP outage, or just one device. Most fixes free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <WifiOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Internet Down — Fix</h1>
          <p className="text-lg text-muted-foreground">Step-by-step diagnosis. Most issues fix in 5 minutes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Check the obvious</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Modem light: should be solid green/blue. If red/blinking — issue.</li>
              <li>Wi-Fi enabled on the device? Settings → Wi-Fi.</li>
              <li>Just ONE device or ALL devices? If just one → that device\'s problem. If all → modem/router or ISP.</li>
              <li>Check ISP outage: <strong>downdetector.com</strong> — search your ISP. Massive spike = ISP-wide issue.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Power cycle (the magic fix)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Unplug the MODEM (not router) from power.</li>
              <li>Unplug the ROUTER from power.</li>
              <li>Wait 30 seconds.</li>
              <li>Plug in MODEM first. Wait 60 seconds for it to fully boot — green/blue solid lights.</li>
              <li>Plug in ROUTER. Wait 60 seconds.</li>
              <li>Test internet on phone or computer.</li>
            </ol>
            <p className="text-sm mt-3">Fixes 70-80% of internet issues.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Check connections</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Coax cable to modem — finger-tight.</li>
              <li>Ethernet from modem to router — fully clicked in.</li>
              <li>Power cables — fully seated.</li>
              <li>Phone line (if DSL) — same.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — Restart the device</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Phone — toggle airplane mode on/off, or restart.</li>
              <li>Computer — full restart.</li>
              <li>Smart TV / Roku — unplug 30 sec, plug in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 5 — Call ISP</h2>
            <p className="text-sm">If above don\'t fix it:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Call ISP support number on bill.</li>
              <li>Tell them: "I\'ve power cycled the modem and router. Internet is still down."</li>
              <li>They run remote diagnostics. Often see issues like "modem not registered" or "outage in your area".</li>
              <li>If equipment is bad, they\'ll send replacement free.</li>
              <li>If outage — they tell you ETA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why is internet SLOW (vs out)?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Run speed test at <strong>fast.com</strong> — see actual speed.</li>
              <li>Compare to your plan (paying for 100 Mbps but getting 20?).</li>
              <li>Wired vs Wi-Fi — wired should be near plan speed.</li>
              <li>Old router (5+ years) — replace.</li>
              <li>Bandwidth hogs — kid streaming 4K + Zoom + downloads = jam.</li>
              <li>Distance from router — closer = faster Wi-Fi.</li>
              <li>(See our Internet Speed Test tool.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip — backup internet</h3>
            <p className="text-sm text-muted-foreground">If internet is critical (medical alert, work-from-home), set up "phone hotspot" backup OR pay $5-10/month for a 5G mobile hotspot device. Saves you when ISP has 12-hour outage.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
