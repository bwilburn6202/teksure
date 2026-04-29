import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export default function KidSafeYouTube() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kid-Safe YouTube Setup | TekSure" description="YouTube Kids vs YouTube. Plain-English guide to safer video for grandkids — restricted mode, content filters, and approved channels." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Youtube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kid-Safe YouTube</h1>
          <p className="text-lg text-muted-foreground">Filter the internet&apos;s wild west.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube Kids vs YouTube</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube Kids</strong> — separate app. Filtered library. 4 age levels. Free.</li>
              <li><strong>Regular YouTube</strong> — even with "restricted mode", lots slips through.</li>
              <li>Recommendation: Kids app for under-10. Real YouTube only with adult co-watching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup YouTube Kids</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download "YouTube Kids" app.</li>
              <li>Set up parent profile with your Google login + PIN.</li>
              <li>Add child profile — name, age range.</li>
              <li>Pick content level: "Preschool" (4 and under), "Younger" (5-8), "Older" (9-12).</li>
              <li>Or "Approved Content Only" — you pick exact channels/videos.</li>
              <li>Search OFF for under-7 (recommended).</li>
              <li>Timer — auto-locks after X minutes.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Approved channels for grandparents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sesame Street</strong> (preschool, classic).</li>
              <li><strong>Bluey</strong> (preschool, gentle Australian dog family).</li>
              <li><strong>SciShow Kids</strong> (5-12, science).</li>
              <li><strong>National Geographic Kids</strong>.</li>
              <li><strong>Mr. Rogers&apos; Neighborhood</strong> (timeless).</li>
              <li><strong>Storyline Online</strong> (celebrities reading kids books).</li>
              <li><strong>Khan Academy Kids</strong>.</li>
              <li><strong>Crash Course Kids</strong> (8-14, science).</li>
              <li><strong>Daniel Tiger&apos;s Neighborhood</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Channels to AVOID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Unboxing" videos — pure consumerism, kids beg for stuff.</li>
              <li>YouTube "Shorts" — addictive scroll like TikTok.</li>
              <li>Random "kids&apos; songs" channels — many are AI-generated, weird, sometimes inappropriate.</li>
              <li>Anything with "(NEW!)" or clickbait thumbnails.</li>
              <li>Mom/dad "challenge" channels — often staged for views.</li>
              <li>Toy review channels — manipulative advertising.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better than YouTube</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PBS Kids app</strong> — free, ad-free, all educational.</li>
              <li><strong>Common Sense Media list of best apps</strong>.</li>
              <li><strong>Disney+ / Apple TV+</strong> — paid but quality controls.</li>
              <li><strong>Library Hoopla / Kanopy Kids</strong> — free with library card.</li>
              <li><strong>Audiobook apps</strong> (Libby, Storyline Online) — let imagination work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to parents</h3>
            <p className="text-sm text-muted-foreground">Different families have different rules. Before letting grandkids watch — ask "what does your mom/dad let you watch?" Then add to the approved list yourself. Avoids "Mom never lets me watch this!" complaints.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
