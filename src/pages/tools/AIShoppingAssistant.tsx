import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function AIShoppingAssistant() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Shopping Assistant for Seniors | TekSure" description="AI helps compare + decide. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Shopping Helper</h1>
          <p className="text-lg text-muted-foreground">Smart purchases. Save money + time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compare products: &quot;Best electric razor under $200?&quot;</li>
              <li>Read product reviews: &quot;Summarize Yelp reviews for X.&quot;</li>
              <li>Find alternatives: &quot;What&apos;s like Y but cheaper?&quot;</li>
              <li>Negotiate: &quot;Help me reply to seller about price.&quot;</li>
              <li>Decide: &quot;Pros + cons of buying X.&quot;</li>
              <li>Senior-specific recommendations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ChatGPT example</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;I&apos;m 70 years old. I need a new phone.&quot;</li>
              <li>&quot;Important: large screen, easy to use, loud.&quot;</li>
              <li>&quot;Budget $400.&quot;</li>
              <li>&quot;Recommend top 3 with reasons.&quot;</li>
              <li>AI compares + ranks.</li>
              <li>Add: &quot;Where to buy + best price?&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best AI for shopping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChatGPT-4</strong> — premium info ($20/mo).</li>
              <li><strong>Claude AI</strong> — good for analysis.</li>
              <li><strong>Google Gemini</strong> — connects search.</li>
              <li><strong>Microsoft Copilot</strong> — built into Windows.</li>
              <li><strong>Perplexity</strong> — cited sources.</li>
              <li>Free tiers exist for all.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honey + browser</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Honey — auto-applies coupons.</li>
              <li>Camelizer — Amazon price history.</li>
              <li>Rakuten — cashback.</li>
              <li>Capital One Shopping.</li>
              <li>Built-in Google Chrome / Firefox.</li>
              <li>Save 10-20% average.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify AI suggestions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI sometimes wrong — verify.</li>
              <li>Check current price on website.</li>
              <li>Read recent reviews yourself.</li>
              <li>Ask AI: &quot;Cite your sources.&quot;</li>
              <li>Watch for outdated info.</li>
              <li>Trust + verify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific search</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add &quot;for seniors&quot; or &quot;65+&quot;.</li>
              <li>&quot;Senior-friendly&quot; — gets adapted recommendations.</li>
              <li>&quot;Easy to use&quot; — simplified options.</li>
              <li>&quot;Large display&quot; — easier reading.</li>
              <li>&quot;Reliable&quot; — long-lasting.</li>
              <li>AI tailors based on your needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skepticism healthy</h3>
            <p className="text-sm text-muted-foreground">AI sometimes recommends sponsored products. Sometimes outdated. Sometimes wrong. AI is research starting point, not final word. Cross-reference with Consumer Reports, Wirecutter, NYTimes Wirecutter. Local store advice — still valuable. Family member opinion. AI helps narrow choices, doesn&apos;t eliminate research.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
