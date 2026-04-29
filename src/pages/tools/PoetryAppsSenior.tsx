import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Feather } from 'lucide-react';

export default function PoetryAppsSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Poetry Apps for Seniors | TekSure" description="Discover + write poetry. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Feather className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Poetry for Seniors</h1>
          <p className="text-lg text-muted-foreground">Read + write. Tiny daily habit.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Read poetry apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Poetry Foundation</strong> — FREE, classic + modern.</li>
              <li><strong>Poems</strong> — daily poem.</li>
              <li><strong>The Poetry Daily</strong>.</li>
              <li><strong>Poets.org</strong> — Academy of American Poets.</li>
              <li><strong>InstaPoems</strong> — Instagram poetry.</li>
              <li>Library — poetry books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite poets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mary Oliver — nature + simple.</li>
              <li>Wendell Berry — farming, age.</li>
              <li>Billy Collins — accessible.</li>
              <li>Robert Frost — classic.</li>
              <li>Maya Angelou — life + age.</li>
              <li>Ted Kooser — Pulitzer winner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Write your own</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t need rhyme.</li>
              <li>Free verse welcomed.</li>
              <li>Short — 4-12 lines fine.</li>
              <li>Specific details — &quot;blue chair&quot; not &quot;chair&quot;.</li>
              <li>Show emotions, don&apos;t describe.</li>
              <li>Cut every other word.</li>
              <li>Read aloud after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Poetry forms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Haiku</strong> — 3 lines, 5/7/5 syllables.</li>
              <li><strong>Cinquain</strong> — 5 lines, varying syllables.</li>
              <li><strong>Free verse</strong> — no rules.</li>
              <li><strong>Sonnet</strong> — 14 lines (advanced).</li>
              <li><strong>Acrostic</strong> — first letters spell word.</li>
              <li><strong>Letter poem</strong> — to someone you love.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Notes — quick capture.</li>
              <li><strong>Word a Day</strong> apps.</li>
              <li><strong>Daily Prompts</strong> from Writers Digest.</li>
              <li>What did I see today?</li>
              <li>What did I miss in my life?</li>
              <li>Grandchild&apos;s eyes.</li>
              <li>Rainy window memories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share + community</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email poems to family.</li>
              <li>Local poetry clubs — library.</li>
              <li>Senior centers — poetry circles.</li>
              <li>Open mic nights.</li>
              <li>Write into family photo book.</li>
              <li>Book of your poems printed for kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Poetry + dementia</h3>
            <p className="text-sm text-muted-foreground">Reading rhyme + rhythm soothes dementia patients. Familiar poems from youth bring memories. Write simple verses for a loved one. Print + frame. Many care facilities use poetry therapy. Just 3 minutes/day = mood lift. Costs nothing. Available everywhere.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
