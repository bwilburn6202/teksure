import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';

export default function AppleAccessibilityHelplineSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Accessibility Helpline for Seniors | TekSure" description="Free Apple senior phone support. Don't suffer alone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneCall className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Accessibility</h1>
          <p className="text-lg text-muted-foreground">Free senior helpline.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">1-877-204-3930</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Apple support.</li><li>For accessibility needs.</li><li>Senior questions welcome.</li><li>Patient + thorough.</li><li>Don&apos;t need AppleCare.</li><li>Save number.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior questions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone setup.</li><li>iPad questions.</li><li>Mac help.</li><li>Apple Watch.</li><li>Senior anything Apple.</li><li>Walk-throughs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vision/hearing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Setup VoiceOver.</li><li>Set up hearing aids.</li><li>Live Captions.</li><li>Magnifier.</li><li>Senior accessibility specialty.</li><li>Best Apple support.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wait time</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5-15 min usually.</li><li>Less than regular.</li><li>Senior priority.</li><li>Call US business hours.</li><li>Worth wait.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Save in contacts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add 1-877-204-3930.</li><li>Name &quot;Apple Help.&quot;</li><li>Senior easy access.</li><li>Crisis ready.</li><li>Free always.</li><li>Don&apos;t suffer alone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Store walk-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Genius Bar appointment.</li><li>Free book online.</li><li>Senior in-person help.</li><li>Take device + ID.</li><li>Today at Apple too.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Save 1-877-204-3930 = senior gold</h3><p className="text-sm text-muted-foreground">Save 1-877-204-3930 Apple Accessibility Helpline in senior contacts. Free, patient, thorough Apple support. Don&apos;t need AppleCare. Setup, questions, troubleshoot — all free. Plus Apple Store free Genius Bar appointments. Senior never suffer alone.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
