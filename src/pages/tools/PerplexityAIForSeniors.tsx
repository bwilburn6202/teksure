import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function PerplexityAIForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Perplexity AI for Seniors | TekSure" description="AI search with sources. Perplexity replaces Google for senior research." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Perplexity AI</h1>
          <p className="text-lg text-muted-foreground">AI search with sources.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AI search engine.</li><li>Cites sources for claims.</li><li>Better than Google for research.</li><li>Free version solid.</li><li>$20/month Pro.</li><li>Senior fact-check helper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Health questions with sources.</li><li>News summary cited.</li><li>Travel research.</li><li>Replaces 20 Google searches.</li><li>One question = full answer.</li><li>Trustworthy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs ChatGPT</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Perplexity — research + cite.</li><li>ChatGPT — conversation + creative.</li><li>Use both.</li><li>Both free versions.</li><li>Senior tools different.</li><li>Different jobs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior examples</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Side effects of drug X?&quot;</li><li>&quot;Hotels in Sedona under $200?&quot;</li><li>&quot;Best Medicare plan in Florida?&quot;</li><li>Cited answers.</li><li>Click sources.</li><li>Senior verified.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Perplexity.ai or app.</li><li>Free no-login or sign up.</li><li>Type questions.</li><li>Read answers.</li><li>Click sources.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verify sources clicked.</li><li>AI can be wrong.</li><li>Don&apos;t replace doctor.</li><li>Health questions advisory only.</li><li>Senior critical thinking.</li><li>Use as research helper.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Perplexity = senior research upgrade</h3><p className="text-sm text-muted-foreground">Free Perplexity.ai answers senior questions with cited sources. Better than Google for research. &quot;Hotels in Naples under $200?&quot; gets actual list with prices + links. Verify sources for important decisions. Most under-used senior research tool.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
