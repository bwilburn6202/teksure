import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorWifiCallingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wi-Fi Calling for Seniors — TekSure" description="Make calls anywhere with Wi-Fi — even with no cell signal." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wi-Fi Calling</h1>
          <p className="text-lg text-muted-foreground">Calls work anywhere with Wi-Fi.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why use it</h2><p>Bad cell signal in your house? Wi-Fi calling fixes that. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone setup</h2><p>Settings → Cellular → Wi-Fi Calling → On.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android setup</h2><p>Settings → Connections → Wi-Fi Calling → On.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel use</h2><p>Use in foreign hotels with free Wi-Fi. Free calls home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Same number</h2><p>Same as your regular phone number. People call you normally.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">All major carriers support it</h2><p>Verizon, AT&amp;T, T-Mobile, Consumer Cellular. Free service.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set address in carrier app for 911 routing — emergency services find you faster.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
