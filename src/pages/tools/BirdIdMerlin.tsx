import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function BirdIdMerlin() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bird ID with Merlin — Free Bird Identification App | TekSure" description="Hear a bird, see a bird, want to know what it is? Cornell\'s free Merlin app identifies birds by sight or by song. Genuinely magical." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bird ID with Merlin</h1>
          <p className="text-lg text-muted-foreground">The most beloved free app you\'ve never heard of.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What Merlin does</h2>
            <p className="text-sm">A free app from Cornell\'s Lab of Ornithology. It identifies birds three ways:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>By <strong>photo</strong> — point your camera, get the bird\'s name.</li>
              <li>By <strong>song</strong> — even more amazing. Hold up the phone in your backyard. As birds sing, the app names each one in real time. Like Shazam for birds.</li>
              <li>By <strong>questions</strong> — "what color was it?" "where were you?" — narrows it down.</li>
            </ul>
            <p className="text-sm mt-2">Many people who try the song-ID feature say it\'s the best free thing they\'ve installed in years.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (2 minutes)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Merlin Bird ID</strong> from the App Store or Play Store. Free, no ads, no signup.</li>
              <li>Open it. Tap "Get Bird Pack" — choose "US: Eastern", "US: Western", or your specific state. ~150-300 MB download. (Once downloaded, works offline.)</li>
              <li>That\'s it. You\'re ready.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use it</h2>
            <p className="font-semibold text-sm mt-2">Sound ID:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Tap "Sound ID" on the home screen.</li>
              <li>Tap the microphone — phone listens.</li>
              <li>As birds sing, names pop up in a list. Tap any one to see a photo, info, and the song you just heard.</li>
              <li>Works in your backyard, on a walk, even from the car (windows down).</li>
            </ol>
            <p className="font-semibold text-sm">Photo ID:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Tap "Photo ID".</li>
              <li>Take a photo or pick one from your camera roll.</li>
              <li>Frame the bird. Submit. Top guesses appear in seconds.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Companion apps from Cornell</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>eBird</strong> — log every bird you see. Cornell uses these reports for real research. Free.</li>
              <li><strong>Birds of the World</strong> — the encyclopedia. Free with eBird login.</li>
              <li><strong>BirdNET</strong> — competing free song-ID app from researchers. Often catches songs Merlin misses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why Cornell makes this free</h3>
            <p className="text-sm text-muted-foreground">It\'s one of the world\'s top bird research institutions. Merlin lets normal people enjoy birds AND helps train the AI that powers their research. A win-win — you get to know your backyard birds, they get research data.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
