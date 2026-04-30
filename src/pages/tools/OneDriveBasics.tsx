import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function OneDriveBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OneDrive Basics for Seniors | TekSure" description="Microsoft cloud storage. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OneDrive Basics</h1>
          <p className="text-lg text-muted-foreground">Microsoft cloud. 5GB free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is OneDrive?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Microsoft cloud storage.</li>
              <li>5GB free.</li>
              <li>Files accessible anywhere.</li>
              <li>Built into Windows.</li>
              <li>Backs up automatically.</li>
              <li>Like iCloud or Google Drive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup on Windows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>OneDrive icon in taskbar (cloud).</li>
              <li>Sign in with Microsoft account.</li>
              <li>Choose folders to backup.</li>
              <li>Documents + Pictures default.</li>
              <li>Cloud icon green = synced.</li>
              <li>Auto-sync constantly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storage tiers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>5GB free.</li>
              <li>100GB — $20/yr.</li>
              <li>1TB with Microsoft 365 — $70/yr.</li>
              <li>365 includes Word, Excel, etc.</li>
              <li>Best value for most.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Access from phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>OneDrive app — App Store / Play.</li>
              <li>Sign in with Microsoft.</li>
              <li>All your files visible.</li>
              <li>View, edit, share.</li>
              <li>Photos auto-backup option.</li>
              <li>Works offline cached.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share files</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click file.</li>
              <li>&quot;Share&quot;.</li>
              <li>Type email address.</li>
              <li>Or copy link.</li>
              <li>Set view-only or edit.</li>
              <li>Set expiration date.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior best uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo backup automatic.</li>
              <li>Important documents.</li>
              <li>Tax records.</li>
              <li>Medical records.</li>
              <li>Family video archive.</li>
              <li>Recipes.</li>
              <li>Will + estate documents (encrypted).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family backup access</h3>
            <p className="text-sm text-muted-foreground">Critical for seniors: trusted family member should have access if you can&apos;t. Add as &quot;Trusted Contact&quot;. Or share password manager with locked OneDrive password. They access in emergency. Photos preserved generations. Documents accessible. Without this — family loses everything if cloud account locked. Plan ahead.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
