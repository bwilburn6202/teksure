import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function Local311Apps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Local 311 & City Service Apps | TekSure" description="Report a pothole, missed trash pickup, broken streetlight. Plain-English guide to 311 apps and how cities want you to report problems." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Local 311 & City Apps</h1>
          <p className="text-lg text-muted-foreground">Get the city to fix it. Report from your phone.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What 311 is</h2>
            <p className="text-sm">A non-emergency number/app for reporting city issues. Most US cities offer it. Used for:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li>Potholes.</li>
              <li>Missed trash pickup.</li>
              <li>Broken streetlight.</li>
              <li>Abandoned vehicles.</li>
              <li>Illegal dumping.</li>
              <li>Graffiti.</li>
              <li>Stray animals.</li>
              <li>Loud / nuisance complaints (non-emergency).</li>
              <li>Fallen trees blocking roads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to find your city\'s app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Search your city\'s App Store</strong> — most cities have a "[City Name] 311" or "[City Name] Connect" app.</li>
              <li><strong>Big cities</strong> with established apps:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>NYC 311.</li>
                  <li>Boston 311.</li>
                  <li>Chicago 311.</li>
                  <li>LA 311 (MyLA311).</li>
                  <li>SF311.</li>
                  <li>Philly311.</li>
                  <li>Seattle Find It Fix It.</li>
                </ul>
              </li>
              <li><strong>If your city has no app</strong> — call 311 (or local non-emergency number) or use city website "Report a problem".</li>
              <li><strong>SeeClickFix</strong> — used by 300+ small cities. Universal app.</li>
              <li><strong>Nextdoor</strong> sometimes routes reports to city.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to report effectively</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Take a photo with location data (most phones add GPS automatically).</li>
              <li>Pick the right category — wrong category goes to wrong department.</li>
              <li>Describe specifically: "Pothole 6 inches deep in middle lane of Maple Ave between 5th and 6th street, expanding daily".</li>
              <li>Include nearest landmark / cross street.</li>
              <li>Save the case number for follow-up.</li>
              <li>Report from a different phone if you don\'t hear back in a week.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use other apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Emergency (fire, life-threatening) → 911</strong>.</li>
              <li><strong>Power outage → utility\'s app</strong> (e.g., FPL, Duke Energy).</li>
              <li><strong>Water leak in street → water department</strong>.</li>
              <li><strong>Crime in progress → 911</strong>.</li>
              <li><strong>Suspicious activity (non-urgent) → local police non-emergency</strong>.</li>
              <li><strong>USPS issues → file complaint at usps.com</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Many cities require multiple complaints to act on a pothole or streetlight. Tell neighbors. The 5th report on a pothole gets it fixed faster than the 1st.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
