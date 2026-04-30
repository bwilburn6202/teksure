import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function MetronomeTunerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Metronome and Tuner Apps for Seniors | TekSure" description="Best free metronome and instrument tuner apps for senior musicians." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Metronome + Tuner Apps</h1>
          <p className="text-lg text-muted-foreground">Free apps every musician needs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why every musician needs these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Metronome keeps you on time — like a steady drum.</li>
              <li>Tuner ensures instrument sounds right.</li>
              <li>No more borrowed or expensive devices.</li>
              <li>Free apps now better than $30 dedicated devices.</li>
              <li>Always with you — phone in pocket.</li>
              <li>Make practice more effective.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free metronomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pro Metronome — most popular, free with ads.</li>
              <li>Soundbrenner Metronome — beautiful interface, free.</li>
              <li>Metronome Beats — simple + reliable.</li>
              <li>Google Metronome — search &quot;metronome&quot; in Google.</li>
              <li>All work on iPhone + Android.</li>
              <li>No need to buy dedicated metronome anymore.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free tuners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GuitarTuna — guitar, ukulele, bass, violin.</li>
              <li>Most accurate free tuner available.</li>
              <li>BOSS Tuner — pro-quality, free.</li>
              <li>insTuner — chromatic for any instrument.</li>
              <li>Fender Tune — guitar, bass, ukulele.</li>
              <li>All work via phone microphone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to tune your guitar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open GuitarTuna — point phone toward guitar.</li>
              <li>Pluck the lowest (thickest) string.</li>
              <li>App shows current note + target.</li>
              <li>Turn tuning peg until needle centers.</li>
              <li>Repeat for all 6 strings.</li>
              <li>Re-check first string — tuning affects others.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Using a metronome</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start slow — 60 BPM (beats per minute).</li>
              <li>Tap or click on each beat.</li>
              <li>Speed up gradually as you get comfortable.</li>
              <li>Most songs are 80–140 BPM.</li>
              <li>Steady tempo beats fast tempo.</li>
              <li>Use for practice, not performance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other useful music apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ultimate Guitar — chord library, tabs for thousands of songs.</li>
              <li>Anytune — slow down songs to learn parts.</li>
              <li>Chordify — auto-detect chords in any song.</li>
              <li>iReal Pro — backing tracks for jamming.</li>
              <li>Tonebridge — guitar tone effects.</li>
              <li>All free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">GuitarTuna for tuning, Pro Metronome for time</h3>
            <p className="text-sm text-muted-foreground">If you play guitar, ukulele, or any string instrument: download GuitarTuna (free). It&apos;s replaced the need for $30 clip-on tuners for most players. For metronome, Pro Metronome (free) does everything you need. Both apps would have cost $50+ in dedicated devices a decade ago. Now they&apos;re free in your pocket.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
