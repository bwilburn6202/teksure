import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorEmergencyKitDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Digital Emergency Kit | TekSure" description="Digital go-bag — files + apps to have ready for emergencies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Emergency Kit</h1>
          <p className="text-lg text-muted-foreground">Files + apps ready for emergencies.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents in cloud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Driver&apos;s license — front + back photo.</li>
              <li>Passport — photo of info page.</li>
              <li>Medicare + insurance cards.</li>
              <li>Social Security card (carefully).</li>
              <li>Birth certificate scan.</li>
              <li>Marriage license, will, POA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to store</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iCloud Drive (encrypted).</li>
              <li>Google Drive (use 2FA).</li>
              <li>Dropbox personal vault.</li>
              <li>Bitwarden secure notes for sensitive.</li>
              <li>Don&apos;t put SSN in plain documents.</li>
              <li>Family member access if you&apos;re incapacitated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical info ready</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Health Medical ID set up.</li>
              <li>Medication list with doses.</li>
              <li>Doctors + pharmacy phone numbers.</li>
              <li>Allergies + conditions.</li>
              <li>Recent labs + tests.</li>
              <li>Emergency contacts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps to install before need</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FEMA — disaster info.</li>
              <li>Red Cross First Aid.</li>
              <li>Red Cross Emergency.</li>
              <li>Local utility outage map.</li>
              <li>Weather app with severe alerts.</li>
              <li>Banking apps for quick fund access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cash + access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$200 cash hidden in safe.</li>
              <li>Apple Pay set up for digital payments.</li>
              <li>Multiple credit cards backed up.</li>
              <li>Bank app PIN saved separately.</li>
              <li>Emergency fund accessible.</li>
              <li>Family member knows location of safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family communication plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Group text with all family.</li>
              <li>Out-of-state &quot;hub&quot; contact.</li>
              <li>Find My / Life360 sharing.</li>
              <li>Code word for &quot;I&apos;m safe.&quot;</li>
              <li>Annual family emergency plan review.</li>
              <li>Practice + verify everyone knows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Photograph documents this week</h3>
            <p className="text-sm text-muted-foreground">Take 30 minutes this week. Photograph every important document. Save to iCloud or Google Drive in a folder called &quot;Important Documents.&quot; Share access with trusted adult child. If house burns down, gets flooded, or you&apos;re injured, your important docs are accessible. This single action is one of the most underrated senior preparation steps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
