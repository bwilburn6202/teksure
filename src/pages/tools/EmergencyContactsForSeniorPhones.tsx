import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';

export default function EmergencyContactsForSeniorPhones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Contacts Setup for Seniors | TekSure" description="Set up emergency contacts on senior phones. Lock screen access." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneCall className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-lg text-muted-foreground">Lock screen access.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why important</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>EMTs find on locked phone.</li><li>Family alerted in crisis.</li><li>Senior unconscious help.</li><li>5 min set up.</li><li>Free.</li><li>Critical setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Medical ID</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Health app.</li><li>Medical ID tab.</li><li>Edit + Show on Lock Screen.</li><li>Add contacts.</li><li>Allergies + meds.</li><li>Senior critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Android Emergency Info</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Safety + Emergency.</li><li>Add contacts.</li><li>Medical info.</li><li>Lock screen accessible.</li><li>Senior similar feature.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SOS auto-text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5 clicks side iPhone.</li><li>Auto-texts emergency contacts.</li><li>Location shared.</li><li>Senior fall help.</li><li>Family knows.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Add 3-5 contacts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult children.</li><li>Spouse.</li><li>Trusted neighbor.</li><li>Doctor optional.</li><li>Senior network.</li><li>Update yearly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wallet card backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print contact list.</li><li>Wallet — physical.</li><li>If phone dies/lost.</li><li>Senior insurance.</li><li>Update yearly.</li><li>Free print.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">5-min Medical ID = senior critical</h3><p className="text-sm text-muted-foreground">5-min iPhone Medical ID setup = if senior unconscious, EMTs see allergies, meds, family contacts on locked phone. Plus SOS 5-click auto-texts family with location. Most critical senior phone setup. Don&apos;t skip. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
