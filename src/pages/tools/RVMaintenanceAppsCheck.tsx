import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function RVMaintenanceAppsCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV Maintenance Apps for Senior RVers | TekSure" description="Track RV maintenance, find repair shops, mobile mechanic apps for senior RV owners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Maintenance Apps</h1>
          <p className="text-lg text-muted-foreground">Keep your RV running.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV Life Pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Includes maintenance tracking.</li>
              <li>Schedule oil changes, tire rotations.</li>
              <li>Reminder alerts.</li>
              <li>Service history log.</li>
              <li>$59/year (also includes Trip Wizard).</li>
              <li>Comprehensive RV management.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV Service Reviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find reputable RV repair shops.</li>
              <li>Read reviews before choosing.</li>
              <li>Free app.</li>
              <li>Filter by RV type + service.</li>
              <li>Especially helpful in unfamiliar areas.</li>
              <li>Avoid bad shops.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mobile RV mechanics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mobile RV Tech app — find mobile mechanics.</li>
              <li>They come to your campsite.</li>
              <li>No need to drive RV to shop.</li>
              <li>Especially helpful for big RVs.</li>
              <li>Often more expensive than shops.</li>
              <li>Worth it for breakdowns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roadside assistance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Good Sam Roadside — RV-specific, $109/year.</li>
              <li>AAA RV/Premier — RV included on top tier.</li>
              <li>Coach-Net — full-time RVer choice.</li>
              <li>Tire help, towing, lockouts.</li>
              <li>Not all roadside services handle RVs.</li>
              <li>Verify before signing up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY repair resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YouTube — search RV model + issue.</li>
              <li>RV.org — comprehensive online manual.</li>
              <li>Reddit r/GoRVing — community help.</li>
              <li>Manufacturer YouTube channels.</li>
              <li>Many seniors learn basic repairs.</li>
              <li>Saves significant money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-trip checklist apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RV Checklist Pro — comprehensive checklist.</li>
              <li>Departure + arrival checklists.</li>
              <li>Helps prevent forgotten steps.</li>
              <li>Forgetting awning down or steps up = damage.</li>
              <li>Free + paid versions.</li>
              <li>Habit-building tool.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Roadside coverage is non-negotiable</h3>
            <p className="text-sm text-muted-foreground">Before any extended RV trip, get RV-specific roadside coverage. Good Sam Roadside ($109/year) is the most popular for casual RVers. Coach-Net for full-timers. Generic AAA usually won&apos;t handle big RVs. One tow truck call without coverage can cost $1,500+. The annual fee pays for itself the first time you need help in the middle of nowhere.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
