import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDot } from 'lucide-react';

export default function PickleballForBeginnerSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pickleball for Beginner Seniors | TekSure" description="Pickleball is hottest senior sport. How to start playing as 65+ beginner." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CircleDot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pickleball</h1>
          <p className="text-lg text-muted-foreground">America&apos;s fastest-growing senior sport.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why pickleball</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easier than tennis on body.</li>
              <li>Smaller court = less running.</li>
              <li>Lower-impact paddle sport.</li>
              <li>Highly social — doubles standard.</li>
              <li>Quick learning curve.</li>
              <li>Senior community thriving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find courts + groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Places to Play app — find courts.</li>
              <li>Pickleball.com directory.</li>
              <li>Senior center courts often.</li>
              <li>YMCA + community centers.</li>
              <li>Many parks now have pickleball.</li>
              <li>Drop-in play common.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter equipment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beginner paddle $30-$50.</li>
              <li>Pickleball balls $10/pack.</li>
              <li>Court shoes — non-marking.</li>
              <li>Visor or hat.</li>
              <li>Total starter cost $80.</li>
              <li>Many borrow gear at senior centers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beginner lessons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most parks offer free clinics.</li>
              <li>YMCA group lessons.</li>
              <li>Senior center beginner classes.</li>
              <li>YouTube tutorials abundant.</li>
              <li>Find a friend who plays.</li>
              <li>Game basic enough for grandkids to learn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps to track</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>DUPR — pickleball ratings system.</li>
              <li>Track your skill level (2.0-5.0).</li>
              <li>Find similar-skill players.</li>
              <li>Pickleball Brackets — tournaments.</li>
              <li>Free apps.</li>
              <li>Senior players love community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Injury prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stretch before playing.</li>
              <li>Proper court shoes.</li>
              <li>Stay hydrated.</li>
              <li>Don&apos;t overexert first time.</li>
              <li>Watch for ankle sprains.</li>
              <li>Build up gradually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hottest senior social activity</h3>
            <p className="text-sm text-muted-foreground">Pickleball isn&apos;t just exercise — it&apos;s become a major senior social activity. Many seniors play 3-5 times weekly + make life-long friends. Free or low-cost in most areas. $50 paddle is cheapest senior activity that genuinely transforms lives. Try one drop-in session at local rec center.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
