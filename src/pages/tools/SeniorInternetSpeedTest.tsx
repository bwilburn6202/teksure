import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorInternetSpeedTest() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Internet Speed Tests for Seniors — TekSure" description="Check your internet speed — fast.com, Speedtest, Google speed test." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Internet Speed Tests</h1>
          <p className="text-lg text-muted-foreground">Are you getting what you pay for?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">fast.com</h2><p>FREE. Owned by Netflix. Just visit. Speed appears instantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speedtest by Ookla</h2><p>FREE. Most popular. App or website.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Speed Test</h2><p>Search &ldquo;internet speed test&rdquo; on Google. Built-in test.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you need</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>50 Mbps for streaming HD</li><li>100+ Mbps for 4K + multiple devices</li><li>200+ Mbps for video calls + streaming + smart home</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slow Wi-Fi fixes</h2><p>Restart router monthly. Move closer. Eliminate distance and walls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Negotiate</h2><p>Test below paid speed? Call provider. Often $10-$30/month bill reduction.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test Wi-Fi at different times. Slow at 7 PM = neighborhood capacity issue.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
