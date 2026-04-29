import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function MediaLiteracySeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Media Literacy for Seniors | TekSure" description="Spot algorithms + bias + clickbait. Plain-English media literacy guide for seniors online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Media Literacy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t be the algorithm&apos;s pawn.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How algorithms work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Social media shows you content that triggers EMOTIONS.</li>
              <li>Outrage + fear = high engagement = served more.</li>
              <li>Calm reasonable content = less shown.</li>
              <li>Result: feed feels more extreme than reality.</li>
              <li>Especially during election years.</li>
              <li>"Filter bubbles" — only see one side.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Resist the manipulation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t engage with rage-bait — it amplifies.</li>
              <li>Read article BEFORE reacting / sharing.</li>
              <li>Click outside your "side" sometimes.</li>
              <li>Search opposing arguments — strengthens own.</li>
              <li>Limit social media to 30 min/day.</li>
              <li>Notice when media makes you angry — pause + breathe.</li>
              <li>Real life rarely as polarized as feed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Source bias check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AllSides.com</strong> — rates news sources Left/Center/Right.</li>
              <li><strong>Ad Fontes Media Bias Chart</strong> — visual map.</li>
              <li><strong>Media Bias/Fact Check</strong> — searchable database.</li>
              <li>Try reading 1 left + 1 right + 1 center on big stories.</li>
              <li>Truth often in middle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stop scams using these skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Senator says SS will end" — verify on AP.</li>
              <li>"Doctor: don&apos;t take this medication" — search original study.</li>
              <li>"FREE government program ending Friday" — usually scam.</li>
              <li>Same skills protect against scams + misinformation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>News Literacy Project</strong> — newslit.org. Free. Designed for adults. 5-min lessons. <strong>AARP scam alerts</strong> — free email. <strong>Stanford History Education Group</strong> — free media literacy courses.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
