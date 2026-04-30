import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function CaringBridgeForSeniorFamilies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CaringBridge for Senior Families | TekSure" description="Free health updates platform. Senior caregiver communication." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CaringBridge</h1>
          <p className="text-lg text-muted-foreground">Free health updates.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free nonprofit site.</li><li>Health journey blog.</li><li>Update once — many see.</li><li>Senior family informed.</li><li>Donations support.</li><li>Trusted decades.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When useful</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cancer treatment.</li><li>Surgery recovery.</li><li>Chronic illness.</li><li>Hospital stays.</li><li>Senior journey shared.</li><li>Family + friends follow.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One update reaches all.</li><li>No 50 phone calls.</li><li>Caregiver energy saved.</li><li>Privacy controlled.</li><li>Emotional support gathered.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Public or private.</li><li>Invite-only options.</li><li>Senior choice.</li><li>HIPAA respected.</li><li>Controlled sharing.</li><li>Trusted org.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>caringbridge.org.</li><li>Free signup.</li><li>Create site for senior.</li><li>Invite family + friends.</li><li>Post updates.</li><li>Senior or caregiver writes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior emotional</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family supportive comments.</li><li>Senior reads encouragement.</li><li>Connection during illness.</li><li>Less isolation.</li><li>Healing power.</li><li>Free + powerful.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free CaringBridge = senior journey support</h3><p className="text-sm text-muted-foreground">Free CaringBridge for senior cancer/surgery/chronic illness journey. One update reaches family. Privacy controlled. Caregiver energy saved. Senior reads encouragement comments — emotional healing. Trusted nonprofit decades. Best free senior health journey platform.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
