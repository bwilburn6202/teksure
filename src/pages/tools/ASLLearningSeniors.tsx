import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function ASLLearningSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Learn ASL for Senior Beginners | TekSure" description="American Sign Language for hearing seniors. Plain-English learning guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Learn ASL</h1>
          <p className="text-lg text-muted-foreground">Help with hearing loss + connect with deaf community.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors learn ASL</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Communicate with deaf grandchild/family.</li>
              <li>Backup for hearing loss progression.</li>
              <li>Volunteer at deaf school/community.</li>
              <li>Brain exercise.</li>
              <li>Useful when hearing aids fail.</li>
              <li>Many beautiful expressive aspects.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free learning resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lifeprint.com</strong> — free ASL course Dr. Bill Vicars. GOLD standard.</li>
              <li><strong>Bill Vicars YouTube</strong> — videos free.</li>
              <li><strong>Sign Language 101</strong> — free site.</li>
              <li><strong>ASL Bloom app</strong> — free with purchase.</li>
              <li><strong>SignSchool</strong> — free interactive.</li>
              <li>Free + thorough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paid apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lingvano</strong> — Duolingo for ASL. $50/yr.</li>
              <li><strong>The ASL App</strong> — $5. Reference dictionary.</li>
              <li><strong>SignSchool Premium</strong> — varied.</li>
              <li>Cheap for beginners — free works fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start simple</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Alphabet (fingerspelling).</li>
              <li>Numbers 1-100.</li>
              <li>Common phrases (hello, please, thank you, sorry).</li>
              <li>Family signs (mom, dad, sister, brother).</li>
              <li>Food signs.</li>
              <li>Question words.</li>
              <li>Practice daily 10-15 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Community college ASL classes — affordable.</li>
              <li>Library Deaf Coffee gatherings.</li>
              <li>Local Deaf community Meetup groups.</li>
              <li>Senior centers occasional workshops.</li>
              <li>Deaf church services welcome new signers.</li>
              <li>Practice with deaf community = essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Live captioning helps too</h3>
            <p className="text-sm text-muted-foreground">Modern phones auto-caption conversations. iPhone Live Captions, Android Live Transcribe — both free. Useful in noisy restaurants. Combine ASL learning + auto-captions = senior hearing-loss toolkit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
