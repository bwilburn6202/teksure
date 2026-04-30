import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { StickyNote } from 'lucide-react';

export default function GoogleKeepForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Keep for Senior Note-Takers | TekSure" description="Free notes app from Google. Better than paper notebooks for senior organization." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <StickyNote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Keep</h1>
          <p className="text-lg text-muted-foreground">Free notes app on Android + web.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sticky note-style organization.</li>
              <li>Color-coded notes.</li>
              <li>Photos + voice notes.</li>
              <li>Checklists.</li>
              <li>Free with Google account.</li>
              <li>Syncs across devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grocery lists.</li>
              <li>Medication reminders.</li>
              <li>Doctor questions.</li>
              <li>Important info to remember.</li>
              <li>Daily todos.</li>
              <li>Recipe ideas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice + photo notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speak note — auto-transcribed.</li>
              <li>Photo of physical document.</li>
              <li>Search text within photos.</li>
              <li>Drawing/handwriting if you prefer.</li>
              <li>Many input methods.</li>
              <li>Use what works for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reminders + alarms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set reminder on note.</li>
              <li>Time-based or location-based.</li>
              <li>&quot;Remind me at 8am.&quot;</li>
              <li>&quot;Remind me when I get to grocery store.&quot;</li>
              <li>Phone alerts you.</li>
              <li>Best free reminder system.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share grocery list with spouse.</li>
              <li>Both can edit in real time.</li>
              <li>Add items as you remember.</li>
              <li>No more lost paper lists.</li>
              <li>Family caregiving lists.</li>
              <li>Multiple shared notes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs Apple Notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Notes — for Apple devices.</li>
              <li>Google Keep — works everywhere.</li>
              <li>Including Windows + Chromebook.</li>
              <li>Cross-platform households use Keep.</li>
              <li>Google account needed.</li>
              <li>Free + reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free shopping list with spouse</h3>
            <p className="text-sm text-muted-foreground">Best feature: shared grocery list with spouse. Both add items in real time. As you grocery shop, items checked off update spouse&apos;s view. No more &quot;did you get the milk?&quot; calls. Free, easy, transformative for senior couples managing household together.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
