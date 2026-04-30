import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function CaregiverAppCareCoordinationForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Care Coordination Apps for Seniors | TekSure" description="Family caregiver coordination. Senior care team apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Care Coordination</h1>
          <p className="text-lg text-muted-foreground">Family caregiver apps.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CareZone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Med list + reminders.</li><li>Doctor appointments.</li><li>Family share.</li><li>Senior + caregivers.</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lotsa Helping Hands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + bigger groups.</li><li>Multi-task help.</li><li>Calendar shared.</li><li>Family + neighbors.</li><li>Senior community.</li><li>Crisis-ready.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Caring Village</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family caregiving app.</li><li>Free.</li><li>Multiple family members.</li><li>Senior comprehensive.</li><li>Document storage.</li><li>Care plan.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family group text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free messaging.</li><li>Daily updates.</li><li>Senior simpler.</li><li>No app to learn.</li><li>Photos shared.</li><li>Most accessible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Document storage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Drive shared folder.</li><li>Medical records.</li><li>POA documents.</li><li>Insurance cards.</li><li>Senior accessible to caregivers.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior dignity</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior consents.</li><li>Privacy preferences.</li><li>What to share.</li><li>Senior in driver seat.</li><li>Caregivers support.</li><li>Don&apos;t override autonomy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free CareZone = senior care team</h3><p className="text-sm text-muted-foreground">Free CareZone or Lotsa Helping Hands = family caregiver coordination. Med list, appointments, tasks shared. Multiple family members aligned. Plus shared Google Drive for documents. Senior consents to sharing. Best free senior care team setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
