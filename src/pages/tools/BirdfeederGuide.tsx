import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function BirdfeederGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bird Feeder Guide for Seniors | TekSure" description="Best bird feeders + foods. Plain-English picks for backyard birding. Smart cameras included." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bird Feeder Guide</h1>
          <p className="text-lg text-muted-foreground">Watch nature. Best therapy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best feeders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tube feeder</strong> — for finches, chickadees. $20-40.</li>
              <li><strong>Hopper / house feeder</strong> — most birds. $30-70.</li>
              <li><strong>Suet cage</strong> — woodpeckers, nuthatches. $5-15.</li>
              <li><strong>Hummingbird feeder</strong> — sugar water 4:1. $10-25.</li>
              <li><strong>Squirrel-proof</strong> — Brome Squirrel Buster. $50-100. Worth it.</li>
              <li><strong>Smart bird feeder camera</strong> — Bird Buddy ($200), Netvue Birdfy ($170). Photo every visitor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best food</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Black oil sunflower seeds</strong> — universal. 80% of birds eat it. $15-25 / 20 lb at Costco.</li>
              <li><strong>Nyjer (thistle)</strong> — finches only.</li>
              <li><strong>Suet cake</strong> — winter only (melts summer).</li>
              <li><strong>Sugar water 4:1</strong> — hummingbirds. NO red dye.</li>
              <li><strong>Mealworms</strong> — bluebirds. Live or dried.</li>
              <li>SKIP: bread (bad for birds), uncooked rice (myth, but they prefer real food).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Window feeder — birds 12 inches from your eye.</li>
              <li>Pole + baffle — keeps squirrels off.</li>
              <li>Easy-fill design — top-load is best.</li>
              <li>Bird bath — birds need water.</li>
              <li>Position 5-10 feet from window — birds avoid death from window strikes.</li>
              <li>Window decals prevent strikes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bird-watching apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Merlin Bird ID</strong> — free. ID by photo OR song.</li>
              <li><strong>eBird</strong> — log sightings. Citizen science.</li>
              <li><strong>Audubon Bird Guide</strong> — free field guide.</li>
              <li>See /tools/bird-id-apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mental health win</h3>
            <p className="text-sm text-muted-foreground">Studies show watching birds 5-10 min/day reduces stress + depression. Free natural therapy at home. Senior-favorite hobby for good reason. $50 setup = years of joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
