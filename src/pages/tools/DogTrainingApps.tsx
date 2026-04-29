import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dog } from 'lucide-react';

const APPS = [
  { name: 'Pupford', cost: 'FREE / $19/mo', best: 'Beginner training course.', good: 'Best beginner.' },
  { name: 'Puppr', cost: 'FREE / $20/mo', best: 'Tricks + obedience video.', good: 'Best videos.' },
  { name: 'Dogo', cost: 'FREE / $40/yr', best: 'Step-by-step tricks.', good: 'Best tricks.' },
  { name: 'GoodPup', cost: '$30-40/wk', best: 'Live trainer 1-on-1.', good: 'Best live.' },
  { name: 'YouTube', cost: 'FREE', best: 'Zak George, Kikopup.', good: 'Best free.' },
];

export default function DogTrainingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dog Training Apps for Seniors | TekSure" description="Best apps to train senior dogs. Plain-English picker." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dog Training Apps</h1>
          <p className="text-lg text-muted-foreground">Train at home. Bond closer.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First commands to teach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit — easiest, foundation.</li>
              <li>Stay — safety + control.</li>
              <li>Come — recall lifesaver.</li>
              <li>Down — calm down.</li>
              <li>Leave it — drop dangerous items.</li>
              <li>Heel — leash walking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior trainer tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>5-10 minute sessions only.</li>
              <li>Multiple sessions per day.</li>
              <li>Positive reinforcement only.</li>
              <li>Treats first, then praise.</li>
              <li>Same words always.</li>
              <li>Family members all consistent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior dog comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Soft training treats (chew).</li>
              <li>Short distance work.</li>
              <li>Avoid jumping commands.</li>
              <li>Lower volume voice.</li>
              <li>More patience needed.</li>
              <li>Joint-friendly tricks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pulling on leash</strong> — &quot;loose leash&quot; method.</li>
              <li><strong>Barking</strong> — interrupt + redirect.</li>
              <li><strong>Jumping on guests</strong> — ignore + reward sit.</li>
              <li><strong>Potty issues</strong> — schedule + outside reward.</li>
              <li><strong>Separation anxiety</strong> — gradual practice.</li>
              <li>Find specific YouTube videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Petco / PetSmart — group classes ($120).</li>
              <li>Local trainer — Yelp / Nextdoor.</li>
              <li>Boarding + training combo.</li>
              <li>Senior centers — pet visit programs.</li>
              <li>Veterinarian referrals.</li>
              <li>Free shelter classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Old dogs, new tricks</h3>
            <p className="text-sm text-muted-foreground">Yes — old dogs CAN learn new tricks. Slower pace, more patience. Trick training keeps senior dogs mentally sharp + physically active. Bond strengthens. Free + builds purpose for both. Brain stays young.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
