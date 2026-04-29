import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export default function AssistedLivingTechCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Assisted Living Tech Check | TekSure" description="Touring assisted living? Plain-English checklist for tech facilities matter — wifi, video calls, accessibility." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Assisted Living Tech Check</h1>
          <p className="text-lg text-muted-foreground">Tech matters. Ask before signing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wifi questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Is wifi free + included? (Should be.)</li>
              <li>Speeds in apartment? (Test on tour — should be 25+ Mbps.)</li>
              <li>Does it cover whole apartment, common areas?</li>
              <li>Can residents have their own router? (Allows secure private network.)</li>
              <li>How many devices can connect?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Communication tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Video calling room/area for family calls?</li>
              <li>Tech support staff (or just IT volunteer)?</li>
              <li>Help with new devices?</li>
              <li>iPad / tablet rental?</li>
              <li>Phone services — landline OR cellular?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pull cords / emergency buttons in apartment.</li>
              <li>How quickly do staff respond? (Ideally under 5 min.)</li>
              <li>Wearable medical alert systems supported?</li>
              <li>Door sensors for wandering?</li>
              <li>Cameras in common areas (NOT private rooms).</li>
              <li>Smoke + CO detectors checked monthly?</li>
              <li>Backup generators?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Activities + entertainment tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Movie theater / TV lounge with closed captions?</li>
              <li>Smart TV in apartment?</li>
              <li>Streaming services included?</li>
              <li>Tech classes (computer + smartphone basics)?</li>
              <li>Karaoke night, music memory programs?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family communication</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family portal / app (see meds, activities, photos)?</li>
              <li>Video monitoring for memory care unit (with consent)?</li>
              <li>Easy way to schedule visits?</li>
              <li>Updates pushed to family by email/text?</li>
              <li>Some good ones: "MyAge", "August Health", "Caremerge".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip the tour</h3>
            <p className="text-sm text-muted-foreground">Marketing brochures lie. Visit. Stay 2 hours. Eat a meal. Talk to current residents alone (without sales staff). Tech is real — sales pitch isn&apos;t. Trust your eyes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
