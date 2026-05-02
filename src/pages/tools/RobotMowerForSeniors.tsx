import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function RobotMowerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Mowers for Seniors | TekSure" description="Senior arthritis-friendly robotic lawn mowers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Mowers</h1>
          <p className="text-lg text-muted-foreground">Senior auto-mowing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Husqvarna</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$1,500-$3,500.</li><li>Best brand.</li><li>Boundary wire setup.</li><li>Senior auto-cuts daily.</li><li>Quiet operation.</li><li>Worth large yard.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Worx Landroid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$800-$2,000.</li><li>Cheaper option.</li><li>Senior smaller yards.</li><li>Wifi control.</li><li>Solid quality.</li><li>Worth considering.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No more push mower.</li><li>Senior arthritis fix.</li><li>Lawn always trim.</li><li>Quiet — neighbors happy.</li><li>Time saved.</li><li>Worth long-term.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup work</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Boundary wire install.</li><li>Pro install $300.</li><li>Senior or DIY.</li><li>One-time work.</li><li>Years of mowing saved.</li><li>Newer GPS models no wire.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Or hire mower</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$80 weekly mowing.</li><li>$1,500-$4,000/year.</li><li>Senior cheaper short-term.</li><li>Robot pays back 2-3 years.</li><li>Compare math.</li><li>Both senior options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Battery + charging</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-returns to charge.</li><li>Daily mowing OK.</li><li>Senior set + forget.</li><li>Phone app control.</li><li>Reliable.</li><li>5-year battery.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$1,500 robot mower = senior arthritis fix</h3><p className="text-sm text-muted-foreground">$1,500-$3,500 robot mower = senior arthritis fix. No more push mower. Lawn always trim. Pays back 2-3 years vs hiring. Or hire weekly $30-$80 if cheaper short-term. Senior big yards = robot. Small yards = hire.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
