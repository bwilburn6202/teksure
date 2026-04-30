import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function FEMAAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FEMA App for Seniors | TekSure" description="The FEMA app provides disaster alerts, shelter locations, and survival info. Free for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FEMA App</h1>
          <p className="text-lg text-muted-foreground">Free disaster alerts and survival info.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What the FEMA app does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free official US government emergency app.</li>
              <li>Real-time weather + disaster alerts.</li>
              <li>Shelter locations during disasters.</li>
              <li>Step-by-step survival info for emergencies.</li>
              <li>Apply for federal disaster assistance.</li>
              <li>Available iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;FEMA&quot; in app store.</li>
              <li>Verify it&apos;s official: published by FEMA.</li>
              <li>Download free.</li>
              <li>Allow notifications + location access.</li>
              <li>Add up to 5 locations to monitor.</li>
              <li>Family member zip codes too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alerts you&apos;ll get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tornado warnings.</li>
              <li>Hurricane evacuation orders.</li>
              <li>Flash flood alerts.</li>
              <li>Wildfire warnings.</li>
              <li>Severe storm alerts.</li>
              <li>Earthquake notifications (where applicable).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disaster prep info inside app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>What to do before disaster strikes.</li>
              <li>What to do during the event.</li>
              <li>What to do after.</li>
              <li>Emergency kit checklists.</li>
              <li>Family communication plans.</li>
              <li>Specific guides for each disaster type.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply for aid in app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If FEMA disaster declared in your area.</li>
              <li>Apply for individual assistance through app.</li>
              <li>Check status anytime.</li>
              <li>Faster than calling phone hotline.</li>
              <li>Document damage with photos.</li>
              <li>Track inspector visits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other essential safety apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Red Cross First Aid — free emergency reference.</li>
              <li>Red Cross Emergency — disaster alerts + tips.</li>
              <li>Red Cross Hurricane / Tornado / Earthquake apps.</li>
              <li>Local emergency management apps (state-specific).</li>
              <li>NWS (National Weather Service) Now app.</li>
              <li>All free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Install before you need it</h3>
            <p className="text-sm text-muted-foreground">The worst time to install the FEMA app is during a disaster — internet may be down. Install it today, set up your locations, and enable notifications. The 10 minutes spent setting up could give you 30+ minutes warning of a tornado that lets you find shelter. Add your home, your kids&apos; addresses, and any vacation home you visit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
