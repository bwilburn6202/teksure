import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clipboard } from 'lucide-react';

export default function AppointmentTrackingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Appointment Tracking for Seniors | TekSure" description="Track medical + family appointments. Senior never miss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clipboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Appointment Tracking</h1>
          <p className="text-lg text-muted-foreground">Senior never miss.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">MyChart auto-add</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hospital appointments sync.</li><li>iPhone Calendar.</li><li>Senior auto.</li><li>Reminders set.</li><li>Free.</li><li>Best practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share calendar</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid sees senior appointments.</li><li>Reminds + drives.</li><li>Senior independence preserved.</li><li>Free Apple/Google share.</li><li>Caregiver helpful.</li><li>5-min setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Doctor list</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Notes app — list all doctors.</li><li>Phone numbers.</li><li>Specialists.</li><li>Senior reference.</li><li>Family + senior accessible.</li><li>Update yearly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel time</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone calculates.</li><li>Reminds when leave.</li><li>Senior never late.</li><li>Free Calendar feature.</li><li>Auto-traffic.</li><li>Best for nervous travelers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Confirm calls</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some doctors require.</li><li>24-hour confirm.</li><li>Senior set reminder.</li><li>Or auto-text confirms.</li><li>Don&apos;t miss confirmation.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cancellation lists</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many specialists waitlist.</li><li>Get cancellation slot.</li><li>Senior earlier appointments.</li><li>Just ask.</li><li>Free.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">MyChart + family share = senior never miss</h3><p className="text-sm text-muted-foreground">MyChart auto-syncs hospital appointments to iPhone Calendar. Family-shared calendar so adult kid sees + reminds. Travel time auto-alerts when leave. Senior never miss. Free + automatic. Most senior calendar setup. Family helps.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
