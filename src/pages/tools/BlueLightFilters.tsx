import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function BlueLightFilters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blue Light Filters — Built-in Free Setup | TekSure" description="Reduce eye strain + improve sleep. Plain-English steps for Night Shift, Night Light, blue light glasses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blue Light Filters</h1>
          <p className="text-lg text-muted-foreground">Free. Built-in. 30 seconds.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone / iPad — Night Shift</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Display &amp; Brightness → Night Shift.</li>
              <li>Schedule → "Sunset to Sunrise".</li>
              <li>Color temperature slider — drag toward Warmer.</li>
              <li>Auto-warms screen at sunset, returns morning.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac — Night Shift</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>System Settings → Displays → Night Shift.</li>
              <li>Schedule → Sunset to Sunrise.</li>
              <li>Slider toward warmer.</li>
              <li>Same idea, different menu.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows — Night Light</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Display → Night light.</li>
              <li>Toggle ON.</li>
              <li>Schedule → Sunset to Sunrise.</li>
              <li>Slider for strength.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — Night Light / Comfort View</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display → Night Light.</li>
              <li>Schedule + intensity.</li>
              <li>Pixel calls it "Night Light". Samsung calls it "Comfort View" or "Eye Comfort Shield".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Blue light glasses — research mixed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2024 Cochrane review found weak evidence for blue light glasses.</li>
              <li>BUT — many people SAY they help with eye strain.</li>
              <li>If you want to try, $20 from Amazon is fine. $80 brands no better.</li>
              <li>Real benefit might be the screen breaks they remind you to take.</li>
              <li>Built-in screen filters are free + work as well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sleep impact</h3>
            <p className="text-sm text-muted-foreground">Blue light suppresses melatonin. Dim screens 2 hrs before bed. Better — read paper book or use Kindle (e-ink) at bedtime. iPad/iPhone with Night Shift on is OK but not as good.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
