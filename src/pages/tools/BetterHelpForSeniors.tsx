import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function BetterHelpForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="BetterHelp for Senior Therapy | TekSure" description="Online therapy for seniors. BetterHelp + alternatives guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BetterHelp Online Therapy</h1>
          <p className="text-lg text-muted-foreground">Therapy from home.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Online therapy platform.</li><li>Match with licensed therapist.</li><li>Video, phone, text, messaging.</li><li>$240-$360/month.</li><li>No insurance accepted.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>From home.</li><li>No driving to therapist.</li><li>Match in 24-48 hours.</li><li>Switch easily.</li><li>Multiple session types.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare covers in-network.</li><li>Psychology Today directory.</li><li>Sliding-scale clinics.</li><li>Senior centers offer counseling.</li><li>Often free or low-cost.</li><li>Try first if uninsured.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Talkspace</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Similar to BetterHelp.</li><li>Some insurance accepted.</li><li>Slightly cheaper.</li><li>Same online format.</li><li>Senior alternative.</li><li>Compare both.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to use therapy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Loss of spouse.</li><li>Retirement transition.</li><li>Anxiety, depression.</li><li>Family conflict.</li><li>Health diagnosis.</li><li>Senior life changes huge.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Read terms carefully.</li><li>HIPAA-protected sessions.</li><li>Encryption used.</li><li>Cancel anytime.</li><li>Senior reasonable.</li><li>Trust-based.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Don&apos;t suffer alone</h3><p className="text-sm text-muted-foreground">Mental health crucial in senior years. Loss, transition, isolation common. BetterHelp ($240+/month) convenient if Medicare doesn&apos;t cover. But check Medicare Advantage first — often covers therapy. Senior centers offer counseling cheap or free. Don&apos;t suffer alone — help available.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
