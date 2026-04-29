import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

const APPS = [
  { name: 'StoryWorth', cost: '$99/yr', best: 'Weekly emailed prompt → write or speak answer → year-end hardcover book of your life. Senior favorite gift.', good: 'Best overall.' },
  { name: 'Remento', cost: '$99/yr', best: 'Like StoryWorth but uses video — record stories with phone. Family makes book.', good: 'Best video.' },
  { name: 'MyHeritage Stories', cost: 'FREE / $300/yr', best: 'AI prompts + photo restoration. Tied to family tree.', good: 'Best with genealogy.' },
  { name: 'Day One Journal', cost: 'FREE / $35/yr', best: 'Beautiful private journal. Photos + writing.', good: 'Best private journal.' },
  { name: 'Pen + paper', cost: 'FREE', good: 'Notebook is timeless. Date each entry. Family discovers later.', best: 'Best traditional.' },
  { name: 'Memoir-writing classes (OLLI, library)', cost: 'FREE-$200', best: 'Group classes at libraries, OLLI, community colleges. Peer feedback.', good: 'Best for community.' },
];

export default function MemoirWritingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memoir Writing Apps for Seniors | TekSure" description="StoryWorth, Remento, journal apps. Plain-English picks for capturing your life stories for grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memoir Writing Apps</h1>
          <p className="text-lg text-muted-foreground">Capture your stories for grandkids.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">StoryWorth (most popular)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Family member buys subscription as gift.</li>
              <li>Each week, you receive a prompt by email — "Tell me about your wedding day."</li>
              <li>Write OR voice-record your answer. Add photos.</li>
              <li>Family sees responses (private).</li>
              <li>End of year — beautiful hardcover book printed.</li>
              <li>Often given Christmas / Mother&apos;s Day.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY prompts (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Earliest memory.</li>
              <li>How parents met.</li>
              <li>Favorite teacher / mentor.</li>
              <li>First job.</li>
              <li>Wedding day or biggest love.</li>
              <li>Birth of children.</li>
              <li>Hardest year + how you got through.</li>
              <li>Proudest moment.</li>
              <li>Recipes / family traditions.</li>
              <li>Lessons you wish you&apos;d learned earlier.</li>
              <li>Notebook + 1 prompt a week = 50+ stories in 1 year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice-recorded life stories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Voice Memos (iPhone)</strong> — built-in. Record, save.</li>
              <li><strong>Otter.ai</strong> — records + auto-transcribes voice to text. Free for 5 hours.</li>
              <li><strong>StoryCorps app</strong> — free. Interview a loved one, archive in Library of Congress.</li>
              <li>Voice recordings preserve TONE. Family treasures decades later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The biggest gift</h3>
            <p className="text-sm text-muted-foreground">After a parent&apos;s death, families regret not having more stories. Photos, recipes, voice recordings — these become priceless. Spend 30 min/week. Future grandkids will thank you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
