import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function GratitudeAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gratitude Apps for Seniors | TekSure" description="Daily gratitude journaling apps for senior wellness. Mood improvement + reflection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gratitude Apps</h1>
          <p className="text-lg text-muted-foreground">Daily reflection improves mood.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Research-backed benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily gratitude practice improves mood.</li>
              <li>Reduces depression symptoms.</li>
              <li>Better sleep.</li>
              <li>Lower blood pressure.</li>
              <li>Improved relationships.</li>
              <li>Just 5 minutes a day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Gratitude — popular app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with optional premium.</li>
              <li>Daily prompts.</li>
              <li>Photo + text entries.</li>
              <li>Beautiful interface.</li>
              <li>Browse old entries to recall good times.</li>
              <li>Available iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Five Minute Journal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Famous structured journal format.</li>
              <li>5 minutes morning + 5 minutes evening.</li>
              <li>3 things grateful for + 3 today&apos;s wins.</li>
              <li>App + physical book version.</li>
              <li>$5 app, $30 book.</li>
              <li>Most popular gratitude format.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY in Notes app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create &quot;Gratitude&quot; note in Apple Notes / Google Keep.</li>
              <li>Add date + 3 things grateful for daily.</li>
              <li>Free — no app needed.</li>
              <li>Same benefit as paid apps.</li>
              <li>Build the habit first.</li>
              <li>Upgrade only if you want fancier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Counters retirement isolation feelings.</li>
              <li>Notice good things despite health issues.</li>
              <li>Stronger family relationships through awareness.</li>
              <li>Meaning + purpose in daily life.</li>
              <li>Combat news-induced anxiety.</li>
              <li>Accept aging with positivity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair with morning coffee</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Habit stack — coffee + gratitude.</li>
              <li>5 minutes after first sip.</li>
              <li>Same place, same time.</li>
              <li>Easier to build.</li>
              <li>Cued by familiar action.</li>
              <li>Add to morning routine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DIY Notes app first</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t pay for a gratitude app yet. Open your phone&apos;s Notes app right now. Type today&apos;s date. Write 3 things you&apos;re grateful for. Repeat tomorrow. After a week of this free practice, decide if you want a fancier app. Most seniors find the simple Notes approach works perfectly. Free, no learning curve, full benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
