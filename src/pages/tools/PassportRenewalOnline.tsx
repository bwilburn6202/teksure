import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function PassportRenewalOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Renewal Online — Photo App, Forms | TekSure" description="Renew your US passport from home. Plain-English steps, photo apps, fees, and timing — including online renewal (now in beta)." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport Renewal Online</h1>
          <p className="text-lg text-muted-foreground">Renew at home, photo and all.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online renewal (now in beta)</h2>
            <p className="text-sm">As of 2024+, the State Department offers <strong>online passport renewal</strong> at <strong>travel.state.gov</strong>. Eligible if:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Your most recent passport was issued at age 25+, AND was valid 10 years (not 5).</li>
              <li>Issued within the last 15 years.</li>
              <li>You have not changed your name.</li>
              <li>You don\'t need a new passport for a trip in the next 8 weeks (online is slower).</li>
            </ul>
            <p className="text-sm mt-2">If eligible, the whole process is online — even photo upload.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Standard mail-in (most common)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download <strong>DS-82 form</strong> at travel.state.gov. Fill it out.</li>
              <li>Get a 2x2" passport photo (apps below or pharmacy).</li>
              <li>Mail in: form + old passport + photo + check ($130 in 2025).</li>
              <li>$60 extra for expedited (3-5 weeks instead of 6-8).</li>
              <li>Old passport returned separately to you.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Passport photo apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Passport Photo Online</strong> — $7-9. Take selfie at home, app crops to spec, mails or emails.</li>
              <li><strong>Persofoto</strong> — similar, ~$10.</li>
              <li><strong>iVisa Photos</strong> — $8.</li>
              <li><strong>Walgreens / CVS / Costco / Walmart photo</strong> — $13-17 in person, takes 5 min.</li>
              <li><strong>USPS</strong> — many post offices take photos for $15.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>2 x 2 inch (51 x 51 mm).</li>
              <li>Color, glossy or matte.</li>
              <li>Plain white or off-white background.</li>
              <li>Recent (within 6 months).</li>
              <li>Full face, neutral expression OR natural smile.</li>
              <li>Eyes open, no glasses.</li>
              <li>No hats (religious head coverings OK with letter).</li>
              <li>Normal everyday clothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common pitfalls</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Smiling too big with teeth showing — often rejected.</li>
              <li>Glasses (banned since 2016).</li>
              <li>Background too dark or shadowed.</li>
              <li>Photo too old (over 6 months).</li>
              <li>Old passport not enclosed (DS-82 requires it).</li>
              <li>Wrong fee — check current at travel.state.gov.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to renew</h3>
            <p className="text-sm text-muted-foreground">Many countries require 6 months validity AT the time of travel. So if your passport expires in October and you\'re flying to Europe in May, you\'re cutting it close. Renew when 9-12 months remain.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
