import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SeniorTutorialResources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tech Tutorial Resources | TekSure" description="Best free + paid resources for seniors learning technology. SeniorPlanet, GetSetUp, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tech Resources</h1>
          <p className="text-lg text-muted-foreground">Where to learn at any pace.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Planet (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free senior-focused tech classes.</li>
              <li>Online + in-person.</li>
              <li>By + for seniors 60+.</li>
              <li>SeniorPlanet.org.</li>
              <li>Topics: smartphone, social media, online safety.</li>
              <li>Funded by AARP.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GetSetUp</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Live Zoom classes for seniors.</li>
              <li>Free + paid options.</li>
              <li>Many topics — tech, fitness, hobbies.</li>
              <li>Senior teachers.</li>
              <li>Smaller class sizes.</li>
              <li>Interactive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library tech help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most libraries offer free tech tutoring.</li>
              <li>One-on-one appointments.</li>
              <li>Bring your phone, laptop.</li>
              <li>Patient librarian help.</li>
              <li>Senior-specific programs often.</li>
              <li>Free + local.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube tutorials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search any tech question + &quot;senior&quot; or &quot;beginner.&quot;</li>
              <li>Visual learning — see exact taps.</li>
              <li>Pause + replay.</li>
              <li>Channels: Tech Help With AYS, OK Boomer Tech.</li>
              <li>Free, infinite content.</li>
              <li>Best free resource ever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple + Google support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple — free Today at Apple sessions in stores.</li>
              <li>Apple Support app — chat with experts free.</li>
              <li>Google Help Center extensive.</li>
              <li>Microsoft Store free workshops.</li>
              <li>All free, professional help.</li>
              <li>Walk-ins welcome.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tech tutors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hire local tech-savvy person.</li>
              <li>Often $25-$50/hour.</li>
              <li>One-on-one focused help.</li>
              <li>Find via Care.com, Nextdoor.</li>
              <li>Worth it for setup + crisis help.</li>
              <li>Building trust over time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior Planet first</h3>
            <p className="text-sm text-muted-foreground">For comprehensive senior tech learning, Senior Planet (free, AARP-funded) is the best resource. Online + in-person classes covering everything from email basics to advanced apps. Combined with library tutoring and YouTube videos, you have unlimited free learning. No need to pay for tech support — quality help is free for those who seek it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
