import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function StitchAppFor50Plus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stitch App for Senior Friendship + Dating | TekSure" description="Stitch app — companionship + activities for 50+. Not just dating, also friendship." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stitch</h1>
          <p className="text-lg text-muted-foreground">Friendship + dating for 50+.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Stitch?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Made for 50+ — companionship app.</li>
              <li>Not just romantic — also friendship.</li>
              <li>Find activity partners for events.</li>
              <li>Local meetups + events.</li>
              <li>Verified user system.</li>
              <li>Australia-based but global.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beyond dating</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find walking buddies.</li>
              <li>Travel companions.</li>
              <li>Movie + concert buddies.</li>
              <li>Restaurant friends.</li>
              <li>Less pressure than romantic dating.</li>
              <li>Many find lasting friendships.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verification process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stricter than typical apps.</li>
              <li>Fights scammers + fake profiles.</li>
              <li>Identity verification required.</li>
              <li>Builds trust in community.</li>
              <li>Higher safety than open dating apps.</li>
              <li>Premium-feeling verification.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free basic version.</li>
              <li>Premium $20/month.</li>
              <li>Premium unlocks unlimited messages.</li>
              <li>Premium = Verified status.</li>
              <li>Lower than OurTime/SilverSingles.</li>
              <li>30-day free trial often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these users</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Just want friends + companions.</li>
              <li>Travel solo and want occasional companion.</li>
              <li>Recent move to new city.</li>
              <li>Recently divorced/widowed.</li>
              <li>Open to either friendship or dating.</li>
              <li>Less pressure than dating-only apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other friendship apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bumble BFF — friendship mode.</li>
              <li>Meetup.com — group events.</li>
              <li>Nextdoor — neighbors.</li>
              <li>Senior Planet — events.</li>
              <li>OLLI lifelong learning.</li>
              <li>Friendship matters as much as romance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Loneliness is a health issue</h3>
            <p className="text-sm text-muted-foreground">Studies show loneliness is as harmful as smoking 15 cigarettes daily. For widowed or divorced seniors, finding companionship — romantic or friendly — is genuinely health-positive. Stitch&apos;s verification system makes it safer than typical apps. Try the free version first. Whether seeking dates, friends, or activity partners, you deserve community.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
