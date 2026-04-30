import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function DementiaWanderingPrevention() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dementia Wandering Prevention | TekSure" description="Prevent wandering. Plain-English guide to GPS trackers, locks, alerts for dementia care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wandering Prevention</h1>
          <p className="text-lg text-muted-foreground">60% of dementia patients wander. Prepare ahead.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GPS tracking devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AngelSense GPS</strong> — wearable. Senior-specific. $30/mo.</li>
              <li><strong>Apple Watch</strong> — fall detection + family sharing. $200+.</li>
              <li><strong>Tile / Apple AirTag</strong> — attach to clothes/keys. $25-30 one-time.</li>
              <li><strong>GPS SmartSole</strong> — hidden in shoe insole. $300 + $30/mo.</li>
              <li><strong>Theora Care GPS</strong> — caregiver-monitored.</li>
              <li><strong>Project Lifesaver</strong> — local police program. FREE in many counties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Door alarms + locks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Door alarms</strong> — magnetic, $20. Beep when door opens.</li>
              <li><strong>Smart locks</strong> — log when door opens. App alerts.</li>
              <li><strong>Door knob covers</strong> — confuse but allow caregiver.</li>
              <li><strong>Childproof locks</strong> high on door.</li>
              <li><strong>Stop signs on doors</strong> — visual cue.</li>
              <li><strong>Velcro stripe across door</strong> — confuses.</li>
              <li>Don&apos;t lock from outside — fire hazard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical ID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MedicAlert + Alzheimer&apos;s Association Wandering Support</strong> — $35 + $40/yr.</li>
              <li>Bracelet engraved &quot;Alzheimer&apos;s/Dementia&quot; + emergency contact.</li>
              <li>ID card in wallet always.</li>
              <li>Photo + medication list at home for police.</li>
              <li>Recent photo (yearly update).</li>
              <li>Iron-on labels in jackets/clothes with name + phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce wandering triggers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily routine — same wake/eat/bed times.</li>
              <li>Address &quot;lost&quot; feelings calmly.</li>
              <li>Daily exercise — reduces restlessness.</li>
              <li>Avoid overstimulation (loud places, crowds).</li>
              <li>Address basic needs — hungry, bathroom, tired.</li>
              <li>Avoid asking &quot;Why are you leaving?&quot; — redirect gently.</li>
              <li>&quot;Sundowning&quot; (late afternoon agitation) — distract with quiet activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If they wander</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call 911 immediately. Don&apos;t wait.</li>
              <li>Tell dispatcher: &quot;dementia, vulnerable adult.&quot;</li>
              <li>Provide recent photo.</li>
              <li>Search nearby first (90% found within 1.5 miles).</li>
              <li>Check water — they may head to known water bodies.</li>
              <li>Have neighbor contacts ready.</li>
              <li>Most found within 24 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Project Lifesaver</h3>
            <p className="text-sm text-muted-foreground">Many counties offer FREE GPS bracelet for residents with dementia/autism/wandering. Police search uses radio tracker — finds in 30 min average. Call sheriff&apos;s office. Search &quot;[your county] Project Lifesaver&quot;. Lifesaver.org has list.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
