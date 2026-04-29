import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function AISeniorSearch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Search vs Google for Seniors | TekSure" description="Perplexity, ChatGPT, Google AI. Plain-English picks for AI-powered search that gives real answers — not 10 ad-filled links." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Search for Seniors</h1>
          <p className="text-lg text-muted-foreground">Real answers. No ads.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best AI search engines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Perplexity AI</strong> (perplexity.ai) — best for FACTUAL questions. Cites sources. Free.</li>
              <li><strong>ChatGPT</strong> — conversational. Best for questions about anything.</li>
              <li><strong>Google AI Overviews</strong> — top of Google results. Free.</li>
              <li><strong>Bing Chat / Copilot</strong> — Microsoft AI search.</li>
              <li><strong>Claude</strong> (claude.ai) — best for thoughtful answers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why AI beats Google for some things</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"What&apos;s the best non-stick pan under $50?" — AI summarizes 50 reviews instantly.</li>
              <li>"Side effects of Lisinopril vs Losartan?" — clear answer, no ad spam.</li>
              <li>"Explain this letter from IRS." — paste in, get plain English.</li>
              <li>"Best Italian restaurants near [zip]" — curated, not paid.</li>
              <li>"How do I do [specific task]?" — clear steps without 5 ads first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Google still wins</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local businesses + hours.</li>
              <li>Maps + directions.</li>
              <li>News (latest).</li>
              <li>Specific images.</li>
              <li>Shopping comparison.</li>
              <li>Anything time-sensitive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Explain this in plain English: [paste medical jargon]."</li>
              <li>"What does this mean: [paste IRS letter]."</li>
              <li>"Translate this Spanish prescription label."</li>
              <li>"Best buys for [specific need]."</li>
              <li>"Senior discount available at [store]?"</li>
              <li>"Compare Medicare Part D plans for [city]."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify medical, legal, financial</h2>
            <p className="text-sm">AI can be wrong — confidently. For ANYTHING medical, legal, or financial:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Cross-check with real source (CDC, NIH, IRS, official sites).</li>
              <li>Confirm with doctor / lawyer / financial advisor.</li>
              <li>Don&apos;t self-treat / self-file based on AI alone.</li>
              <li>AI = research helper, not replacement for professionals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voice search</h3>
            <p className="text-sm text-muted-foreground">All these AI assistants have voice mode. Talk to them while cooking / driving / bedside. ChatGPT app has best voice mode currently. Better than typing for hands-busy moments.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
