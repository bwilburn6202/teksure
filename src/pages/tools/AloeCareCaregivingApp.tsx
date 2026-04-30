import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function AloeCareCaregivingApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aloe Care Health for Senior Caregivers | TekSure" description="Smart medical alert with caregiver app. Aloe Care for families monitoring senior parents." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aloe Care Health</h1>
          <p className="text-lg text-muted-foreground">Medical alert + family caregiver app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What makes it different</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medical alert + caregiver coordination.</li>
              <li>Family app shows senior&apos;s activity.</li>
              <li>Voice-activated — no button to press.</li>
              <li>&quot;Help, help&quot; voice command.</li>
              <li>Air quality + temperature monitoring.</li>
              <li>Newer style of alert system.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mobile Companion — $40/month.</li>
              <li>Smart Hub Total Care — $50/month.</li>
              <li>Equipment $99–$300 one-time.</li>
              <li>No contracts.</li>
              <li>Try 30 days risk-free.</li>
              <li>Premium for fall detection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family caregiver app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See parent&apos;s motion (activity).</li>
              <li>Get alerts for unusual patterns.</li>
              <li>Multiple family members access same dashboard.</li>
              <li>Coordinate care across siblings.</li>
              <li>Hub doubles as voice-activated 2-way speaker.</li>
              <li>Adult children love this for distant parents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice activation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Say &quot;help, help&quot; — connects to monitoring.</li>
              <li>No need to press button.</li>
              <li>Works if you can&apos;t reach a button.</li>
              <li>2-way voice through hub.</li>
              <li>Talk to monitoring agent + family.</li>
              <li>Critical innovation for arthritic seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other caregiver-focused options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lively (formerly GreatCall).</li>
              <li>CarePredict — wearable activity tracker.</li>
              <li>SilverShield — affordable family monitoring.</li>
              <li>Apple Find My + Health Sharing — free.</li>
              <li>Each has different family interaction features.</li>
              <li>Many families use Apple ecosystem free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these situations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Multiple adult children sharing care.</li>
              <li>Long-distance caregiving.</li>
              <li>Senior who refuses to wear pendant.</li>
              <li>Voice activation preferred over button.</li>
              <li>Family wants daily activity insight.</li>
              <li>Worth the higher price for these needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If your parent refuses pendant</h3>
            <p className="text-sm text-muted-foreground">Many seniors refuse to wear medical alert pendants. Aloe Care&apos;s voice-activated &quot;help, help&quot; option works without any wearable. Just say it, monitor responds. Especially helpful for proud seniors who view pendants as making them look frail. The caregiver coordination features also help adult children worried from afar without daily check-in calls.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
