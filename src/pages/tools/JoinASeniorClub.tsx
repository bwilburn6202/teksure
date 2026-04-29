import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

export default function JoinASeniorClub() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Join a Senior Club | TekSure" description="Find local senior clubs, classes, and groups. Plain-English guide to community for 60+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Join a Senior Club</h1>
          <p className="text-lg text-muted-foreground">Free or cheap social life — already in your town.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local senior centers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Almost every town has one.</li>
              <li>Free or under $5 lunch most days.</li>
              <li>Classes: tech, art, fitness, dance, languages.</li>
              <li>Card games, movie nights, day trips.</li>
              <li>Tax help (AARP Tax-Aide) February-April.</li>
              <li>Find at <strong>eldercare.acl.gov</strong> or call 1-800-677-1116.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifelong learning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OLLI (Osher Lifelong Learning)</strong> — university classes for 50+. $50-300/year unlimited.</li>
              <li><strong>Road Scholar</strong> — educational travel.</li>
              <li><strong>Coursera/edX</strong> — free college classes online.</li>
              <li><strong>GetSetUp</strong> — live online classes for seniors. Many free.</li>
              <li><strong>Khan Academy</strong> — free.</li>
              <li><strong>Senior Planet</strong> — AARP-affiliated tech classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Social clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rotary, Lions, Kiwanis</strong> — service clubs, mixed ages.</li>
              <li><strong>VFW, American Legion</strong> — veterans + family.</li>
              <li><strong>Garden clubs</strong> — local, often free.</li>
              <li><strong>Bridge clubs</strong> — almost every town.</li>
              <li><strong>Bowling leagues</strong> — senior leagues common.</li>
              <li><strong>Golf groups</strong> — senior tee times cheaper.</li>
              <li><strong>Pickleball</strong> — exploding popularity, all skill levels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online community</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP Online Community</strong> — forums by topic.</li>
              <li><strong>Reddit r/AskOldPeople, r/Retirement</strong> — friendly.</li>
              <li><strong>Facebook groups</strong> — search &quot;[your town] seniors&quot;.</li>
              <li><strong>Meetup.com</strong> — filter for 50+ groups.</li>
              <li><strong>Nextdoor</strong> — local neighborhood.</li>
              <li><strong>SilverSneakers GO</strong> — fitness community + classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try 3 before judging</h3>
            <p className="text-sm text-muted-foreground">First visit feels awkward — that&apos;s normal. Try 3 different visits before deciding it&apos;s &quot;not for me.&quot; Most clubs welcome new members + assign a buddy. Show up with a smile and a question.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
