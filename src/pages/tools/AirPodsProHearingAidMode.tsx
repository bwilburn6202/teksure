import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function AirPodsProHearingAidMode() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirPods Pro as Hearing Aid for Seniors | TekSure" description="Use AirPods Pro 2 as FDA-approved hearing aids. Senior setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirPods Pro Hearing Aid</h1>
          <p className="text-lg text-muted-foreground">$249 vs $5,000 hearing aids.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FDA approved 2024</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AirPods Pro 2 only.</li><li>FDA cleared as hearing aid.</li><li>Mild-moderate loss.</li><li>$249 retail.</li><li>Game changer for seniors.</li><li>Discreet — looks normal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 18+.</li><li>Settings → Accessibility → Audio.</li><li>Hearing Aid Mode.</li><li>Take hearing test in app.</li><li>Customizes to your hearing.</li><li>10 minutes done.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Conversation Boost.</li><li>Live Listen — phone as mic.</li><li>Background noise reduction.</li><li>Phone calls + music too.</li><li>Multi-purpose.</li><li>Senior win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs traditional aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Traditional aids $3,000-$7,000.</li><li>AirPods $249.</li><li>For mild loss.</li><li>Severe = need real aids.</li><li>Many seniors first try AirPods.</li><li>Insurance may cover real aids.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Battery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>6 hours per charge.</li><li>30 hours with case.</li><li>USB-C charging.</li><li>Senior all-day use possible.</li><li>Replace every 2-3 years.</li><li>Battery degrades.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Limitations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mild-moderate only.</li><li>Not for severe loss.</li><li>Need iPhone.</li><li>In ears all day uncomfortable.</li><li>Different shape than aids.</li><li>Senior trial period worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$249 hearing test before $5,000</h3><p className="text-sm text-muted-foreground">If senior with mild hearing loss, AirPods Pro 2 ($249) FDA-approved hearing aid is huge upgrade. Discreet. Phone calls + hearing aid + music in one. Test before $5,000 traditional. Many seniors find AirPods sufficient. Massive 2024 senior tech advance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
