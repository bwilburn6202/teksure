import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function GooglePrivacyDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Privacy Dashboard Walkthrough | TekSure" description="myaccount.google.com walkthrough. Plain-English steps to lock down what Google tracks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Privacy Dashboard</h1>
          <p className="text-lg text-muted-foreground">10 minutes. Big privacy gain.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start here</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>myaccount.google.com</strong>.</li>
              <li>Sign in.</li>
              <li>Click <strong>Privacy &amp; Personalization</strong>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Activity controls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Web &amp; App Activity</strong> — auto-delete every 3 months.</li>
              <li><strong>Location History</strong> — turn OFF (it&apos;s OFF by default 2024+).</li>
              <li><strong>YouTube History</strong> — auto-delete every 3 months OR off.</li>
              <li>Each setting has a slider. Pick "Auto-delete after 3 months".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ad personalization</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Privacy &amp; Personalization → Ad personalization.</li>
              <li>Toggle "Personalized ads" OFF.</li>
              <li>Generic ads instead — same volume, less creepy.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy Checkup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Privacy Checkup</strong> button — Google walks you through everything.</li>
              <li>Reviews each setting + suggests changes.</li>
              <li>Best 5 minutes you can spend annually.</li>
              <li>Run every 6 months (Google adds new tracking sometimes).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Third-party app access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Security → "Third-party apps with account access".</li>
              <li>Review each. Remove ones you don&apos;t recognize.</li>
              <li>Some apps you signed in with Google still have access.</li>
              <li>Removing kicks them out (can re-grant later if needed).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Inactive Account Manager</h3>
            <p className="text-sm text-muted-foreground">While here — set up <strong>Inactive Account Manager</strong>. After 3-18 months of inactivity, Google notifies trusted contact + lets them download your data. Critical for digital legacy. See /tools/digital-legacy-planner.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
