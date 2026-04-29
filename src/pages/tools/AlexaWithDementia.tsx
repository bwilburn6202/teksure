import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function AlexaWithDementia() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa for Dementia Patients | TekSure" description="How voice assistants help dementia. Plain-English caregiver guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa with Dementia</h1>
          <p className="text-lg text-muted-foreground">Voice helps when memory + tech fails.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Alexa helps dementia</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Voice = familiar interaction.</li>
              <li>No buttons / interfaces to learn.</li>
              <li>Always available — they ask same question 5x = 5 patient answers.</li>
              <li>Family can &quot;Drop In&quot; remote check-ins.</li>
              <li>Reduces caregiver burden.</li>
              <li>Some studies show comfort effect.</li>
              <li>Routines automate forgotten tasks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Echo Show 8 = best (screen + voice).</li>
              <li>Place in main living area.</li>
              <li>Caregiver sets up routines.</li>
              <li>Caregiver enables Drop In.</li>
              <li>Disable purchasing (avoid scams).</li>
              <li>Disable Alexa Voice Shopping.</li>
              <li>Set wake time alarms = morning routine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful daily routines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Good morning&quot; → time, weather, day, breakfast prompt.</li>
              <li>&quot;Take medicine&quot; reminder at 8am, 2pm, 8pm.</li>
              <li>&quot;What day is it?&quot; — Alexa announces.</li>
              <li>&quot;Where is my caregiver?&quot; — calls them.</li>
              <li>&quot;Goodnight&quot; → lights off, alarm set.</li>
              <li>Reminders for meals + activities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drop In feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family member calls Echo without senior accepting.</li>
              <li>Like intercom — instant connection.</li>
              <li>Visual confirmation senior is okay.</li>
              <li>Reassuring conversation.</li>
              <li>Reduces lonely + agitation.</li>
              <li>One-touch from family phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Limits + cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Severe dementia — Alexa may confuse.</li>
              <li>Best for early to mid stages.</li>
              <li>Privacy — Alexa records (delete in app).</li>
              <li>Disable purchasing = critical.</li>
              <li>Lock down account access.</li>
              <li>Place out of cooking range (water/grease).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Alternative: RAZ Memory Phone</h3>
            <p className="text-sm text-muted-foreground">For severe dementia — RAZ Memory Cell Phone $210 + $40/mo. ONE screen with photos of contacts. Family controls. Often better than Alexa for advanced dementia. See /tools/raz-mobility-phones. Combine: RAZ phone + Alexa = comprehensive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
