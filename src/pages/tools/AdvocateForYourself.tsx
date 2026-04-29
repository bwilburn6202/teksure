import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function AdvocateForYourself() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Advocate for Yourself in Healthcare | TekSure" description="Doctors are busy. Be your own advocate. Plain-English plan to get the care you need without being &quot;difficult&quot;." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Advocate for Yourself</h1>
          <p className="text-lg text-muted-foreground">Polite + persistent works.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Magic phrases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"I want to make sure I understand. Can you explain that again?"</li>
              <li>"What are the alternatives?"</li>
              <li>"What if I do nothing?"</li>
              <li>"I&apos;d like a second opinion. Can you transfer my records?"</li>
              <li>"I&apos;m concerned. I&apos;d like further testing."</li>
              <li>"I don&apos;t feel right. I want to be sure."</li>
              <li>"Please document my concern in my chart."</li>
              <li>"What&apos;s your back-up plan if this doesn&apos;t work?"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you&apos;re dismissed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"It&apos;s just aging" / "It&apos;s in your head" — push back. "What tests would rule out [condition]?"</li>
              <li>Document EVERYTHING. Date, who said what, what was decided.</li>
              <li>Send follow-up message via patient portal — creates paper trail.</li>
              <li>If still ignored, request "see another doctor" or change practices.</li>
              <li>Bring a family member to next visit — different doctor energy.</li>
              <li>Patient ombudsman exists at most large hospitals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In the hospital</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ask hospitalists their name + role</strong> — multiple specialists may be involved.</li>
              <li><strong>Ask for whiteboard updates</strong> — daily plan, who&apos;s on team.</li>
              <li><strong>Hand-washing</strong> — ask EVERY person before touching you. They can&apos;t get offended.</li>
              <li><strong>Ask "Can I have copies?"</strong> for every test result.</li>
              <li><strong>Refusal is OK</strong> — you have right to refuse any test, treatment.</li>
              <li><strong>Family member should stay</strong> — patient advocates beat 4-day rotation of doctors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire an advocate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Patient advocate (private)</strong> — $100-200/hr. AdvoConnection.com directory.</li>
              <li><strong>Hospital ombudsman</strong> — free, on staff at most hospitals.</li>
              <li><strong>State Long-Term Care Ombudsman</strong> — free for nursing home issues.</li>
              <li><strong>Senior Medicare Patrol</strong> — free help with billing questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Polite + persistent wins</h3>
            <p className="text-sm text-muted-foreground">"Difficult" patients get worse care. "Engaged" patients with documented concerns get BETTER care. Same energy — different label. Politely say "I want to understand" 4 times if needed. Don&apos;t apologize for asking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
