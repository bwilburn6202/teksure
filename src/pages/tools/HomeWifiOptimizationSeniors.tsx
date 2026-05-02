import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function HomeWifiOptimizationSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Wifi Optimization for Seniors | TekSure" description="Faster home wifi. Senior router + mesh guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Wifi</h1>
          <p className="text-lg text-muted-foreground">Senior faster internet.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Position router</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Center of home.</li><li>Off the floor.</li><li>Away from microwave.</li><li>Senior simple fix.</li><li>Free.</li><li>Improves speed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mesh wifi</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Eero, Nest Wifi.</li><li>$200-$500 set.</li><li>Whole-home coverage.</li><li>Senior dead zones gone.</li><li>App management.</li><li>Worth large homes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test speed</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fast.com free.</li><li>Test from each room.</li><li>Senior find weak spots.</li><li>Speedtest.net.</li><li>Free.</li><li>Show ISP if slow.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Restart routine</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Unplug router monthly.</li><li>Wait 30 seconds.</li><li>Plug back.</li><li>Senior fixes most issues.</li><li>Free.</li><li>Schedule reminder.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Replace old</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Router 5+ years = old.</li><li>WiFi 6 worth upgrade.</li><li>$100-$200.</li><li>Senior speed huge.</li><li>Buy own vs ISP rental.</li><li>Save monthly fee.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ISP help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Call if persistent slow.</li><li>Senior request tech.</li><li>Free service.</li><li>May upgrade modem.</li><li>Negotiate price.</li><li>Threaten cancel.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Mesh wifi = senior whole-home</h3><p className="text-sm text-muted-foreground">$200 mesh wifi set (Eero/Nest) = senior whole-home coverage no dead zones. Plus center-position router + monthly restart + replace 5+ year routers. Test fast.com per room. Buy own router save ISP rental. Most senior internet upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
