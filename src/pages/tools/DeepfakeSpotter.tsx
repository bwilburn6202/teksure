import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function DeepfakeSpotter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Deepfake Spotter — Detect AI-Made Videos & Photos | TekSure" description="That viral video may be AI. Plain-English signs of fake images, fake videos, and fake voices — and what to do when you spot one." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Deepfake Spotter</h1>
          <p className="text-lg text-muted-foreground">Half of viral videos in 2025 are AI-made. Here\'s how to tell.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🖼️ Signs of an AI-made photo</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hands</strong> — extra fingers, fused fingers, bent wrong way. AI still struggles with hands.</li>
              <li><strong>Teeth</strong> — too even, too white, weird gaps.</li>
              <li><strong>Earrings/jewelry</strong> — mismatched (one earring different from other).</li>
              <li><strong>Background text</strong> — gibberish, slightly wrong logos.</li>
              <li><strong>Eyes</strong> — pupils not round, reflections don\'t match.</li>
              <li><strong>Hair edges</strong> — too smooth, no individual strands.</li>
              <li><strong>Skin</strong> — too smooth, no pores.</li>
              <li><strong>Background</strong> — soft "painted" look, weird perspective.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🎬 Signs of a deepfake video</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lip-sync slightly off</strong> — voice doesn\'t quite match mouth movement.</li>
              <li><strong>Skin texture wrong at certain angles</strong>.</li>
              <li><strong>Face doesn\'t match the lighting</strong> of the rest of the scene.</li>
              <li><strong>Facial expressions don\'t match the words</strong>.</li>
              <li><strong>Edges around face flicker</strong>.</li>
              <li><strong>Eye blinks unnatural</strong> — too rare or too even.</li>
              <li><strong>Politicians/celebrities saying things</strong> they\'d never say. Search the news to verify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🗣️ Signs of an AI voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Slightly robotic cadence</strong>.</li>
              <li><strong>No background noise or breathing</strong>.</li>
              <li><strong>Says "your grandson" not your grandson\'s NAME</strong>.</li>
              <li><strong>Refuses to talk freely</strong> — sticks to short urgent script.</li>
              <li><strong>Won\'t say a family safe-word</strong> when asked. (See our Safe-Word Kit.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to do when in doubt</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Verify on Google</strong>. Type the news headline + "fact check". Snopes, FactCheck.org, PolitiFact.</li>
              <li><strong>Reverse-image-search</strong> any photo you receive. Right-click → "Search Google for image".</li>
              <li><strong>For "my grandchild needs money" calls</strong> — hang up. Call the real grandchild on their normal number. Or ask for the family safe-word.</li>
              <li><strong>For political claims</strong> — wait 24 hours. Real shocking news will be everywhere; a fake video is often debunked within a day.</li>
              <li><strong>Don\'t share what you can\'t verify</strong>. Sharing fakes spreads them.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools to help</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Content Credentials (c2pa.org)</strong> — emerging standard. "C" icon on photos shows AI-generated or edited.</li>
              <li><strong>Deepware Scanner</strong> — free, scans video for deepfake signs.</li>
              <li><strong>InVID Verify</strong> — browser tool for journalists to verify videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best defense — slow down</h3>
            <p className="text-sm text-muted-foreground">Almost every fake video is designed to make you ANGRY or SCARED. Both emotions cause snap-shares. If a post triggers strong feelings, pause 5 minutes. Verify before sharing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
