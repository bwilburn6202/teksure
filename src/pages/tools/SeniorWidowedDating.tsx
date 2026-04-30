import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorWidowedDating() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dating After Loss for Senior Widows + Widowers | TekSure" description="Tips for widowed seniors considering dating again. Online + in-person options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dating After Loss</h1>
          <p className="text-lg text-muted-foreground">For senior widows + widowers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you&apos;re ready</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No timeline — every person different.</li>
              <li>Some 6 months, some 5 years.</li>
              <li>Companionship is human need.</li>
              <li>Doesn&apos;t mean you didn&apos;t love spouse.</li>
              <li>Your kids may have opinions — listen but decide.</li>
              <li>Therapy/grief group may help first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-person opportunities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers — singles events.</li>
              <li>Religious communities.</li>
              <li>Continuing education classes.</li>
              <li>Volunteer organizations.</li>
              <li>Travel + tour groups.</li>
              <li>Social meetups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>OurTime — most popular 50+.</li>
              <li>SilverSingles — premium matchmaking.</li>
              <li>Match.com — broader age range.</li>
              <li>Stitch — friendship + dating for 50+.</li>
              <li>Read profiles thoroughly.</li>
              <li>Don&apos;t feel pressured.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk about your loss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Honest profile mention.</li>
              <li>Don&apos;t hide widow/widower status.</li>
              <li>Other widowed people understand.</li>
              <li>Be honest in early conversations.</li>
              <li>Photos with deceased spouse — choose carefully.</li>
              <li>Mentioning shows authenticity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Special considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult children may struggle with parent dating.</li>
              <li>Estate + inheritance discussions important.</li>
              <li>Health considerations.</li>
              <li>Living arrangements.</li>
              <li>Move slowly — no need to rush.</li>
              <li>Many widowed seniors find companionship.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-meeting safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Public place during day.</li>
              <li>Tell adult child + friend.</li>
              <li>Drive yourself or use Lyft.</li>
              <li>Limit to 1–2 hours first time.</li>
              <li>Trust your gut — leave if uncomfortable.</li>
              <li>Multiple meets before sharing private info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No shame in seeking love again</h3>
            <p className="text-sm text-muted-foreground">After spouse loss, many seniors feel guilty about wanting companionship. Your spouse would want you to be happy. Loving again doesn&apos;t diminish what you had. Whether it&apos;s a casual companion for movies + dinner, or a serious romantic partner, you deserve happiness. Take your time, be safe, and trust the process.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
