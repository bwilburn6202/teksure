import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type, Eye } from 'lucide-react';

export default function BigTextDisplayCoach() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  const tweaks = [
    { name: 'Make text bigger', why: 'Hard to read messages, web pages, or app menus? Bump up the font.' },
    { name: 'Bold all text', why: 'Thicker letters are easier on tired eyes than thin ones.' },
    { name: 'Increase contrast', why: 'Makes the line between buttons and backgrounds sharper.' },
    { name: 'Reduce motion', why: 'Stops the bouncy animations that can cause dizziness.' },
    { name: 'Bigger app icons', why: 'Tap targets get bigger so you don\'t hit the wrong app.' },
    { name: 'Dark Mode', why: 'White text on a dark background is easier in low light and saves eye strain.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big Text & Display Coach — Make Your Phone Easier to See | TekSure" description="Six free settings that make any phone easier on aging eyes. Step-by-step for iPhone and Android — no apps to install." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Big Text & Display Coach</h1>
          <p className="text-lg text-muted-foreground">Six settings that make your phone much easier to read.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Before you start</h2>
            <p className="text-sm">All of these are FREE and built into your phone. Nothing to download. You can change any setting back at any time.</p>
            <ul className="text-sm mt-2 list-disc pl-5">
              {tweaks.map((t, i) => <li key={i}><strong>{t.name}</strong> — {t.why}</li>)}
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6 space-y-4 text-sm">
              <div><h3 className="font-bold">Make text bigger</h3><p>Settings → Display & Brightness → Text Size. Drag the slider to the right.</p></div>
              <div><h3 className="font-bold">Even bigger text</h3><p>Settings → Accessibility → Display & Text Size → Larger Text. Turn on "Larger Accessibility Sizes" — slider goes way further.</p></div>
              <div><h3 className="font-bold">Bold all text</h3><p>Settings → Display & Brightness → turn on <strong>Bold Text</strong>.</p></div>
              <div><h3 className="font-bold">Increase contrast</h3><p>Settings → Accessibility → Display & Text Size → turn on <strong>Increase Contrast</strong> and <strong>Differentiate Without Color</strong>.</p></div>
              <div><h3 className="font-bold">Reduce motion</h3><p>Settings → Accessibility → Motion → turn on <strong>Reduce Motion</strong>.</p></div>
              <div><h3 className="font-bold">Bigger app icons</h3><p>Settings → Display & Brightness → Display Zoom → choose <strong>Larger Text</strong>.</p></div>
              <div><h3 className="font-bold">Dark Mode</h3><p>Settings → Display & Brightness → tap <strong>Dark</strong>. (Or set "Automatic" so it switches at sunset.)</p></div>
              <div><h3 className="font-bold">Bonus: triple-click magnifier</h3><p>Settings → Accessibility → Zoom → turn on. Triple-tap the screen with three fingers to zoom in on anything.</p></div>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6 space-y-4 text-sm">
              <div><h3 className="font-bold">Make text bigger</h3><p>Settings → Display → Font size. Drag the slider. (On Samsung: Display → Font size and style.)</p></div>
              <div><h3 className="font-bold">Bigger overall (icons too)</h3><p>Settings → Display → Display size. Slide right.</p></div>
              <div><h3 className="font-bold">Bold all text</h3><p>Settings → Accessibility → Text and display → turn on <strong>Bold text</strong>.</p></div>
              <div><h3 className="font-bold">Increase contrast</h3><p>Settings → Accessibility → Text and display → turn on <strong>High contrast text</strong>.</p></div>
              <div><h3 className="font-bold">Reduce motion</h3><p>Settings → Accessibility → Text and display → <strong>Remove animations</strong>.</p></div>
              <div><h3 className="font-bold">Dark theme</h3><p>Settings → Display → Dark theme. (Or pull down from the top of the screen — there's usually a Dark Mode toggle.)</p></div>
              <div><h3 className="font-bold">Bonus: magnifier</h3><p>Settings → Accessibility → Magnification → turn on. Triple-tap the screen to zoom in.</p></div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Eye className="w-6 h-6 text-muted-foreground shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Don't forget your computer</h3>
                <p className="text-sm text-muted-foreground">On a Mac: System Settings → Accessibility → Display. On Windows: Settings → Accessibility → Text size. Same idea, even bigger payoff for long sessions.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
