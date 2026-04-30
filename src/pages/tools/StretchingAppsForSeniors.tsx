import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function StretchingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stretching Apps for Seniors | TekSure" description="Daily stretching for senior flexibility. Best apps + free YouTube routines." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stretching Apps</h1>
          <p className="text-lg text-muted-foreground">Maintain flexibility daily.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why daily stretching</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Maintains range of motion.</li>
              <li>Reduces injury risk.</li>
              <li>Eases arthritis pain.</li>
              <li>Improves balance.</li>
              <li>10 minutes daily makes huge difference.</li>
              <li>Senior bodies need this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stretchly — free, popular.</li>
              <li>Flex — variety of routines.</li>
              <li>Bend — daily stretch reminders.</li>
              <li>StretchIt — paid, high quality.</li>
              <li>Apple Fitness+ — has stretch sessions.</li>
              <li>Most have free options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yoga With Adriene — gentle stretches.</li>
              <li>Senior Shape Fitness.</li>
              <li>HASfit senior stretching.</li>
              <li>Free — endless content.</li>
              <li>Cast to TV for big screen.</li>
              <li>10-minute morning routines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior areas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hamstrings — sitting tight.</li>
              <li>Hip flexors — sitting tight.</li>
              <li>Lower back — daily attention.</li>
              <li>Shoulders + chest — posture.</li>
              <li>Calves — leg day.</li>
              <li>Ankles + wrists — daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stretching safely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never bounce.</li>
              <li>Hold 15-30 seconds.</li>
              <li>Slight tension, never pain.</li>
              <li>Breathe normally.</li>
              <li>Warm up first (5-min walk).</li>
              <li>Stop if sharp pain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make it routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same time daily.</li>
              <li>Habit-stack with morning coffee.</li>
              <li>Or right before bed.</li>
              <li>10-15 minutes is enough.</li>
              <li>Apple Watch nudges you.</li>
              <li>Build over weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Yoga With Adriene morning</h3>
            <p className="text-sm text-muted-foreground">Most senior-friendly stretching: search YouTube for &quot;Yoga With Adriene morning stretch.&quot; 10-minute gentle routine. Cast to TV. Do daily for one month — feel difference. Free, easy, transformative for senior flexibility. No app needed. Adriene is loved by millions for gentle, encouraging style.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
