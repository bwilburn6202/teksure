import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function PhoneTrackingFamily() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Tracking Family for Seniors | TekSure" description="Family location sharing. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Tracking Family</h1>
          <p className="text-lg text-muted-foreground">Find each other. Peace of mind.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why share location?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family knows where you are.</li>
              <li>Help if emergency.</li>
              <li>Find if dementia patient wanders.</li>
              <li>Senior trips — see safely arrived.</li>
              <li>Reverse — see grandkids&apos; arrival.</li>
              <li>Mutual = consent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Family Sharing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find My iPhone.</li>
              <li>Settings → [Your Name] → Family Sharing.</li>
              <li>Add family members.</li>
              <li>Approve location sharing.</li>
              <li>Each sees others on map.</li>
              <li>FREE built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Maps Family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Google Maps app.</li>
              <li>Profile picture, then &quot;Location sharing&quot;.</li>
              <li>Choose &quot;Until you turn it off&quot; or time-limited.</li>
              <li>Pick family member.</li>
              <li>Notifications when arriving + leaving.</li>
              <li>Works iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Life360 (most popular)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE basic / $8-15/mo premium.</li>
              <li>Family members see each other live.</li>
              <li>Driving alerts (speeding, hard braking).</li>
              <li>Crash detection.</li>
              <li>Daily check-ins.</li>
              <li>Senior-friendly + comprehensive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For dementia patients</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple AirTag</strong> — keychain, $30.</li>
              <li><strong>Tile</strong> — alternative tracker.</li>
              <li><strong>Samsung SmartTag</strong> — Android.</li>
              <li><strong>GPS smart watch</strong> ($50-200).</li>
              <li>Pin to clothing if not phone.</li>
              <li>Critical for wandering risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Only consent — don&apos;t install secretly.</li>
              <li>Discuss what to share.</li>
              <li>Pause when needed (medical visits).</li>
              <li>Mutual = both can see each other.</li>
              <li>Trust + transparency.</li>
              <li>Disable anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to enable</h3>
            <p className="text-sm text-muted-foreground">Long road trips. Solo travel. Hospital visits. Mall outings (large parking). Grandkid pickups. Outdoor activities. Whenever family feels concerned. Senior agrees first. Empowering, not surveilling. Many seniors love seeing where kids + grandkids are throughout day. Bonding effect.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
