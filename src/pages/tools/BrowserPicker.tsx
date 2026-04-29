import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const BROWSERS = [
  { name: 'Safari (Mac/iPhone)', cost: 'FREE, built in', best: 'Apple users. Best battery life on Mac. Best privacy controls. Tightly integrated with iCloud password sync.', good: 'You\'re probably already using it.' },
  { name: 'Google Chrome', cost: 'FREE', best: 'Most popular. Works the same on every device. Huge extension library. If you use Gmail and Google Docs, this is the path of least friction.', good: 'Heavy on memory — slow PCs feel it.' },
  { name: 'Microsoft Edge', cost: 'FREE, built into Windows', best: 'Default Windows browser. Built-in Read Aloud feature is fantastic for older eyes. Tab grouping is nice.', good: 'Built on Chrome\'s engine — most Chrome extensions work.' },
  { name: 'Firefox', cost: 'FREE', best: 'Best privacy out of the box. Independent (not owned by Apple/Google/Microsoft). Strong ad blocking.', good: 'Recommended if you care about not being tracked.' },
  { name: 'Brave', cost: 'FREE', best: 'Built-in ad and tracker blocker — sites load 2-3x faster. Aggressive privacy stance.', good: 'Same engine as Chrome, all extensions work.' },
  { name: 'Arc', cost: 'FREE (Mac/Windows/iPhone)', best: 'New design — vertical tabs, "spaces" for different projects. Polarizing but loved by fans.', good: 'Worth trying if Chrome feels stale.' },
];

export default function BrowserPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Browser Picker — Safari, Chrome, Edge, Firefox | TekSure" description="The browser is where you spend the most time online. Plain-English picks — what each one is good at, and which is right for you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Browser Picker</h1>
          <p className="text-lg text-muted-foreground">The window to the internet. Pick the right one.</p>
        </div>

        <div className="space-y-3 mb-6">
          {BROWSERS.map(b => (
            <Card key={b.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{b.name}</h3>
                  <span className="text-sm font-semibold text-primary">{b.cost}</span>
                </div>
                <p className="text-sm mb-1">{b.best}</p>
                <p className="text-sm text-muted-foreground">{b.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free extensions worth installing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>uBlock Origin</strong> — best free ad blocker. Cleaner pages, fewer pop-ups, faster sites.</li>
              <li><strong>Bitwarden / 1Password</strong> — auto-fills your saved passwords.</li>
              <li><strong>Honey or Capital One Shopping</strong> — auto-applies coupon codes when you check out.</li>
              <li><strong>Web Reader / Mercury Reader</strong> — strips ads off articles for clean reading.</li>
              <li><strong>Dark Reader</strong> — makes any website have a dark mode if you find white screens too bright.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Settings to change once</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Make text bigger:</strong> Hold <kbd className="bg-muted px-1.5 py-0.5 rounded">Ctrl</kbd> (or <kbd className="bg-muted px-1.5 py-0.5 rounded">⌘</kbd> on Mac) and tap <kbd className="bg-muted px-1.5 py-0.5 rounded">+</kbd> several times. <kbd className="bg-muted px-1.5 py-0.5 rounded">-</kbd> to shrink. <kbd className="bg-muted px-1.5 py-0.5 rounded">0</kbd> to reset.</li>
              <li><strong>Permanent zoom:</strong> Settings → Appearance → "Page zoom" → 125% or 150%.</li>
              <li><strong>Default to Reader Mode</strong> on long articles (Safari and Edge both have a "reader" icon in the address bar).</li>
              <li><strong>Block pop-ups:</strong> Settings → Privacy → "Block pop-ups" — usually on by default but verify.</li>
              <li><strong>Clear history regularly</strong> — keeps things speedy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t over-think it</h3>
            <p className="text-sm text-muted-foreground">Whatever browser you\'re comfortable with is the right one. Switching browsers is a real hassle (passwords, bookmarks, history). The single biggest win — install <strong>uBlock Origin</strong> as an extension. Whatever browser you use becomes 30% faster and far less annoying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
