import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll } from 'lucide-react';

export default function StoicPhilosophySeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stoic Philosophy for Seniors | TekSure" description="Ancient wisdom for modern aging. Plain-English Stoicism guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scroll className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stoic Philosophy</h1>
          <p className="text-lg text-muted-foreground">2,000-year-old wisdom for aging gracefully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Core principles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Control what you can</strong> — your reactions. Accept what you can&apos;t.</li>
              <li><strong>Memento mori</strong> — &quot;Remember you must die.&quot; Live well now.</li>
              <li><strong>Negative visualization</strong> — picture losing what you have. Appreciate more.</li>
              <li><strong>Voluntary discomfort</strong> — small hardships build resilience.</li>
              <li><strong>Virtue is enough</strong> — wisdom, courage, justice, temperance.</li>
              <li><strong>Cosmic perspective</strong> — your problems small in big picture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Acceptance of aging + mortality = peace.</li>
              <li>Letting go of what you can&apos;t control.</li>
              <li>Wisdom over busyness.</li>
              <li>Helps with grief + loss.</li>
              <li>Reduces anxiety.</li>
              <li>Same as modern CBT therapy + meditation.</li>
              <li>Practical, not religious (compatible with any faith).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best books to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Meditations</strong> — Marcus Aurelius. Roman emperor&apos;s journal.</li>
              <li><strong>Letters from a Stoic</strong> — Seneca.</li>
              <li><strong>Discourses</strong> — Epictetus.</li>
              <li><strong>The Daily Stoic</strong> — Ryan Holiday. Modern translation, daily reading.</li>
              <li><strong>How to Be a Stoic</strong> — Massimo Pigliucci.</li>
              <li>All free at library / Libby app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily practices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Morning</strong> — preview day. What might go wrong? How will you respond?</li>
              <li><strong>Evening</strong> — review day. What did I do well? What can I improve?</li>
              <li><strong>When upset</strong> — &quot;Is this in my control?&quot; If no, accept.</li>
              <li><strong>Negative visualization</strong> — &quot;What if I lost my health/spouse/home?&quot; Appreciate now.</li>
              <li><strong>Memento mori coin</strong> — Daily Stoic sells $20 reminder coin.</li>
              <li>5 min/day shifts mindset over months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free podcasts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The Daily Stoic Podcast</strong> — Ryan Holiday.</li>
              <li><strong>Practical Stoicism</strong> — Tanner Campbell.</li>
              <li><strong>Stoic Meditations</strong> — Massimo Pigliucci.</li>
              <li><strong>The Sunday Stoic</strong> — weekly.</li>
              <li>Listen on walks.</li>
              <li>Free podcast apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Compatible with faith</h3>
            <p className="text-sm text-muted-foreground">Stoicism = practical, not religious. Many Christians, Jews, Muslims, Buddhists, atheists practice. Marcus Aurelius&apos; <em>Meditations</em> — most quoted philosophy book by spiritual leaders. Complements any faith. Adds practical resilience tools.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
