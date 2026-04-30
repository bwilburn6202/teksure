import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function EmergencyContactPlan() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Emergency Contact Plan for Seniors | TekSure" description="Build a family emergency contact plan. Phone trees, ICE contacts, out-of-state contacts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Contact Plan</h1>
          <p className="text-lg text-muted-foreground">Who to call when things go wrong.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a written plan matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone may die or be lost.</li>
              <li>Stress makes you forget numbers.</li>
              <li>Family can find each other after disaster.</li>
              <li>First responders know who to call.</li>
              <li>Reduces panic in actual emergency.</li>
              <li>Takes 30 minutes to set up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ICE contacts on phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ICE = In Case of Emergency.</li>
              <li>Add &quot;ICE — [Name]&quot; in your phone contacts.</li>
              <li>First responders look for ICE entries.</li>
              <li>List 1–3 ICE contacts.</li>
              <li>Spouse, adult child, close friend.</li>
              <li>Tell them they&apos;re your ICE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Medical ID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Health app — tap profile icon.</li>
              <li>Tap &quot;Medical ID.&quot;</li>
              <li>Add medical conditions, medications, allergies.</li>
              <li>List emergency contacts.</li>
              <li>Toggle &quot;Show When Locked&quot; ON.</li>
              <li>First responders see without unlocking phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android Emergency Info</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Emergency information.</li>
              <li>Add medical info + emergency contacts.</li>
              <li>Accessible from lock screen.</li>
              <li>First responders find by tapping &quot;Emergency&quot;.</li>
              <li>Pixel + Samsung have similar features.</li>
              <li>Set up takes 5 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Out-of-state contact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designate one out-of-state relative or friend.</li>
              <li>During regional disaster, local lines jam.</li>
              <li>Out-of-state calls often work better.</li>
              <li>Everyone calls THIS person to relay messages.</li>
              <li>FEMA recommends this strategy.</li>
              <li>Make sure they know they&apos;re the contact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wallet contact card</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print emergency contact info on card.</li>
              <li>Keep in wallet behind ID.</li>
              <li>List: ICE contacts, doctor, blood type.</li>
              <li>Important medications + allergies.</li>
              <li>Insurance carrier + policy numbers.</li>
              <li>If phone dead, paper still works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up Medical ID today</h3>
            <p className="text-sm text-muted-foreground">If you do nothing else, open the Health app on your iPhone (or Settings on Android) and set up Medical ID with at least one emergency contact and your medical conditions. Toggle &quot;Show When Locked&quot; ON. If you&apos;re ever in an accident and unconscious, paramedics can immediately see who to call and what conditions to be aware of. This is the single most important emergency prep step every senior should take this week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
