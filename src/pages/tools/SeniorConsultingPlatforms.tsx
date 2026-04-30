import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorConsultingPlatforms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Consulting Platforms for Senior Professionals | TekSure" description="Monetize your career experience. Catalant, GLG, YourEncore for retired senior consultants." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Consulting</h1>
          <p className="text-lg text-muted-foreground">Get paid for decades of expertise.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YourEncore</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Network for retired STEM professionals.</li>
              <li>Pharma, biotech, R&amp;D consulting.</li>
              <li>Match your expertise with companies.</li>
              <li>Hourly rate $100-$500.</li>
              <li>Part-time flexible.</li>
              <li>Mostly virtual.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GLG (Gerson Lehrman)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Expert network for analysts.</li>
              <li>Hour-long phone consultations.</li>
              <li>$300-$1,500/hour rates.</li>
              <li>Hedge funds + investors hire.</li>
              <li>Strict ethical guidelines.</li>
              <li>Senior executives sought.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other expert networks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Catalant — project-based.</li>
              <li>Toptal — top 3% talent.</li>
              <li>Clarity.fm — phone advice marketplace.</li>
              <li>Upwork — broader freelancing.</li>
              <li>BoardProspects — board service.</li>
              <li>Each different niche.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these professionals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Retired executives.</li>
              <li>Specialized engineers.</li>
              <li>Healthcare professionals.</li>
              <li>Legal experts.</li>
              <li>Financial advisors.</li>
              <li>Academia + research.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SCORE volunteering</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Volunteer mentor for small businesses.</li>
              <li>SBA-supported.</li>
              <li>Free for businesses.</li>
              <li>Use your business expertise.</li>
              <li>Many seniors love this.</li>
              <li>Not paid but rewarding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Update LinkedIn profile.</li>
              <li>Apply to 2-3 platforms.</li>
              <li>Build profile with expertise.</li>
              <li>Get reviews after first projects.</li>
              <li>Network at industry events.</li>
              <li>Patient — projects come slowly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Decades of experience = valuable</h3>
            <p className="text-sm text-muted-foreground">Your career experience has tremendous value to companies + investors. Senior consultants on these platforms often earn $50K-$250K+/year working part-time. YourEncore for STEM, GLG for finance/strategy, Catalant for projects. Pick 1-2 platforms matching your background. Apply. Patience — first project takes months. Then steady income.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
