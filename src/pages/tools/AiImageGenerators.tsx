import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const PICKS = [
  { name: 'ChatGPT Plus (DALL-E 3)', cost: '$20/mo', best: 'Easiest. Just describe what you want — "A watercolor painting of a sunflower field at sunset". Get an image.', good: 'Best for first-timers.' },
  { name: 'Google Gemini Imagen', cost: 'Free with Gemini', best: 'Free image generation. Solid quality.', good: 'Best free option.' },
  { name: 'Microsoft Copilot (DALL-E)', cost: 'Free', best: 'Same DALL-E engine as ChatGPT, free in Copilot.', good: 'Best free DALL-E.' },
  { name: 'Midjourney', cost: '$10-60/mo', best: 'Most artistic results. Used by professional designers. Steeper learning curve (lives in Discord).', good: 'For serious creative work.' },
  { name: 'Adobe Firefly', cost: 'Free with Adobe Creative Cloud', best: 'Trained on legal/owned images only. Safe for commercial use.', good: 'Best for businesses.' },
  { name: 'Apple Image Playground', cost: 'Free with iOS 18+', best: 'Built into iPhone. Cartoon-style images. Family-safe.', good: 'Best for iPhone users to start.' },
];

export default function AiImageGenerators() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Image Generators — DALL-E, Midjourney, Free Options | TekSure" description="Type a description, get a picture. Plain-English picks for AI image tools — free options first, when paid is worth it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Image Generators</h1>
          <p className="text-lg text-muted-foreground">Type "watercolor cat at sunset" — get a picture in 10 seconds.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Fun things to make</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Custom birthday card images for grandkids.</li>
              <li>Holiday illustrations for the family newsletter.</li>
              <li>"Imagine our dog as a knight" — pet portraits.</li>
              <li>Custom backgrounds for video calls.</li>
              <li>Posters for senior center events.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Writing good prompts</h2>
            <p className="text-sm mb-2">More detail = better images. Try this format:</p>
            <p className="text-sm italic bg-muted/50 p-3 rounded">"[Subject], [setting], [style], [mood]"</p>
            <p className="text-sm mt-3"><strong>Examples:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"A golden retriever puppy, in a sunlit kitchen, watercolor painting style, cheerful"</li>
              <li>"An elderly couple holding hands at a beach, photorealistic, soft warm sunset"</li>
              <li>"A birthday cake with 90 candles, cartoon style, bright colors, party setting"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Important warnings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Don\'t generate images of real people without permission</strong> — especially celebrities or public figures.</li>
              <li><strong>AI images can\'t be copyrighted</strong> in the US — anyone can use yours; you can\'t legally use someone else\'s commercially.</li>
              <li><strong>Recognize AI images</strong> — strange hands/teeth, weird text, "smooth" backgrounds. Many photos shared online today are AI-made.</li>
              <li><strong>Adobe Firefly</strong> is the safest if you\'re selling anything (only trained on legal images).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Open Microsoft Copilot at copilot.microsoft.com (free, no signup needed for some). Type "Make me an image of a cat reading a newspaper". 30 seconds. Magic moment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
