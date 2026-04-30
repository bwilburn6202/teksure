import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function DrumsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drums for Seniors | TekSure" description="Start drumming at any age. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drums for Seniors</h1>
          <p className="text-lg text-muted-foreground">Coordination + cardio. Surprisingly senior-friendly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why drumming?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coordination + memory.</li>
              <li>Light cardio.</li>
              <li>Stress release.</li>
              <li>Brain new pathways.</li>
              <li>Studies — slows dementia.</li>
              <li>Group drumming = social.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hand drum</strong> ($30-50) — bongos, djembe.</li>
              <li><strong>Cajón box</strong> ($75-200) — sit on it.</li>
              <li><strong>Practice pad</strong> ($30) — quiet.</li>
              <li><strong>Electronic drums</strong> ($300+) — quiet w/ headphones.</li>
              <li><strong>Drumsticks</strong> ($10).</li>
              <li>Apartment-friendly options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drum circles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most cities have drum circles.</li>
              <li>Free, beginner-welcome.</li>
              <li>Senior centers often host.</li>
              <li>Bring own drum or borrow.</li>
              <li>Beat goes around — anyone joins.</li>
              <li>Great social, fun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drumeo</strong> — best paid online ($30/mo).</li>
              <li><strong>Stephen Taylor</strong> — YouTube.</li>
              <li><strong>Mike Johnston</strong> — YouTube.</li>
              <li><strong>Free Drum Lessons</strong> — beginner.</li>
              <li>Local lesson — $30-50.</li>
              <li>Library — drumming books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit while drumming OK.</li>
              <li>Adjustable height stool.</li>
              <li>Drumsticks — lighter weight.</li>
              <li>Hand drums easier on joints.</li>
              <li>Practice short sessions 15-20 min.</li>
              <li>Stop if shoulder pain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drumming for dementia</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Studies — improves cognition.</li>
              <li>Rhythm = brain stimulation.</li>
              <li>Group drumming = social bond.</li>
              <li>Reduces agitation.</li>
              <li>Even simple beat helpful.</li>
              <li>Care facilities use therapeutically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why now?</h3>
            <p className="text-sm text-muted-foreground">Some seniors think drumming is for young rockers. Wrong. Drumming benefits exclusively brain + body. Hand drums quiet. Headphone drums silent. Apartment-friendly. Try drum circle in your city = free. After 90 days = surprisingly skilled. Senior bands always need drummer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
