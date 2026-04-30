import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cog } from 'lucide-react';

export default function SeniorDrivingAssist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Driver Assistance Tech | TekSure" description="Driver assistance features that help senior drivers. Lane keep, blind spot, automatic braking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Driver Assistance Tech</h1>
          <p className="text-lg text-muted-foreground">Features that help senior drivers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most useful features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup camera — REQUIRED on 2018+ cars.</li>
              <li>Blind spot monitoring.</li>
              <li>Lane departure warning.</li>
              <li>Automatic emergency braking.</li>
              <li>Adaptive cruise control.</li>
              <li>Cross-traffic alert.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup camera retrofit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add to older car — $100–$300.</li>
              <li>Wireless versions easier install.</li>
              <li>Auto Trucks at most installers.</li>
              <li>Especially valuable for grandchildren safety.</li>
              <li>Must-have feature.</li>
              <li>Install professionally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Blind spot mirrors (cheap fix)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10 stick-on mirrors.</li>
              <li>No tech, no install.</li>
              <li>See vehicles in blind spots.</li>
              <li>Cheap + effective.</li>
              <li>Better than nothing.</li>
              <li>Most senior cars benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CarPlay + Android Auto</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Connect phone to car display.</li>
              <li>Larger map view.</li>
              <li>Voice commands.</li>
              <li>Music + podcasts via car speakers.</li>
              <li>Calls hands-free.</li>
              <li>Most cars 2018+ have it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to consider new car</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Current car 15+ years old.</li>
              <li>No backup camera.</li>
              <li>Frequent fender-benders.</li>
              <li>Difficulty with controls.</li>
              <li>Adaptive cruise reduces fatigue.</li>
              <li>Safety pays for itself.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly cars</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subaru Forester — high seating, great visibility.</li>
              <li>Toyota Camry — reliable + standard safety.</li>
              <li>Hyundai Sonata — easy controls.</li>
              <li>Kia Soul — easy entry, big windows.</li>
              <li>AARP&apos;s annual senior car ratings worth checking.</li>
              <li>Drive several before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Backup camera most important</h3>
            <p className="text-sm text-muted-foreground">If your car is from 2017 or earlier and lacks a backup camera, retrofitting one ($150–$300 with installation) is the most important senior driver upgrade. Stops backup accidents that often involve children. Most other safety features are nice-to-have but backup camera is essential. Many states now require for new cars and inspection.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
