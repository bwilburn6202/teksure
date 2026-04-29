import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export default function FactCheckingTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fact-Checking Tools for Seniors | TekSure" description="Snopes, FactCheck.org, AP Fact Check. Plain-English picks for verifying news + viral claims." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fact-Checking Tools</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t spread fake news.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trusted fact-check sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Snopes.com</strong> — oldest + biggest. Searchable.</li>
              <li><strong>FactCheck.org</strong> — Annenberg Public Policy Center. Nonpartisan.</li>
              <li><strong>AP Fact Check</strong> — Associated Press. Just facts.</li>
              <li><strong>PolitiFact</strong> — Truth-O-Meter ratings.</li>
              <li><strong>Reuters Fact Check</strong> — international.</li>
              <li><strong>USA Today Fact Check</strong>.</li>
              <li>Search any 2-3 of these to verify claims.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reverse image search</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save photo. Go to <strong>images.google.com</strong>. Click camera icon. Upload.</li>
              <li>See if image is OLD, fake, or AI-generated.</li>
              <li>Many viral photos = decade-old + repurposed.</li>
              <li>Some viral photos = AI-generated (look at hands + eyes).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot fake news</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ALL CAPS HEADLINES — usually fake.</li>
              <li>"They don&apos;t want you to know" — clickbait.</li>
              <li>Source you&apos;ve never heard of — verify on Wikipedia.</li>
              <li>Story too perfectly fits your beliefs — bias trap.</li>
              <li>Photo with no source — could be old or fake.</li>
              <li>Article requires you to share to read — fake.</li>
              <li>"BREAKING" but no major news has it — likely fake.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before sharing — verify</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search Snopes + 1-2 others.</li>
              <li>Check date — many "new" stories are years old.</li>
              <li>Check if AP / Reuters has it.</li>
              <li>Check publication — credible?</li>
              <li>If in doubt — DON&apos;T share.</li>
              <li>30 seconds prevents spreading misinformation to your network.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior responsibility</h3>
            <p className="text-sm text-muted-foreground">Studies show seniors share 7x more misinformation than young people. NOT because seniors are gullible — because they&apos;re online + trust their friends. Slow down. Verify. Set example for grandkids.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
