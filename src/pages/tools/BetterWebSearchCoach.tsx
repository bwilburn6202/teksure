import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function BetterWebSearchCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Better Web Search Coach — Find Real Answers Fast | TekSure" description="Stop scrolling through bad results. Plain-English Google tricks, source evaluation, and DuckDuckGo for privacy-conscious searching." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Better Web Search Coach</h1>
          <p className="text-lg text-muted-foreground">Get to real answers without 10 ads first.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Search like a librarian</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Use quotes</strong> for exact phrases: "best Italian restaurant in Pittsburgh"</li>
              <li><strong>Add a dash to exclude:</strong> garden hose -metal</li>
              <li><strong>Search a specific site:</strong> site:cdc.gov flu vaccine</li>
              <li><strong>File type:</strong> medication list filetype:pdf</li>
              <li><strong>Time-filter:</strong> click "Tools" → "Past year" / "Past month".</li>
              <li><strong>Image search:</strong> Google Images. Right-click any photo → "Search Google for image" to find where else it appears (great for spotting fake profile pictures).</li>
              <li><strong>Add "Reddit" to the end</strong> of any product question — real user opinions instead of paid review farms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick a privacy-friendly engine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>DuckDuckGo</strong> — doesn\'t track your searches. Same web results. Make it your default.</li>
              <li><strong>Startpage</strong> — gives you Google results without tracking.</li>
              <li><strong>Brave Search</strong> — independent, privacy-friendly.</li>
              <li><strong>Google</strong> — most accurate but tracks everything. Use signed-out for privacy.</li>
              <li><strong>Bing / Microsoft Copilot</strong> — strong AI assistant.</li>
              <li><strong>Perplexity AI</strong> — returns answers with citations. Great for research.</li>
              <li><strong>ChatGPT Search</strong> — talkative, with sources.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Evaluating what you find</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Who wrote this?</strong> — bio, credentials. Beware "wellness coach" giving medical advice.</li>
              <li><strong>What\'s the .domain?</strong> — .gov and .edu most reliable. .com varies wildly.</li>
              <li><strong>Date</strong> — old article on rapidly-changing topic (medications, tech) can be wrong.</li>
              <li><strong>Sources</strong> — does it cite real studies or just say "research shows"?</li>
              <li><strong>Cross-check</strong> — search the same question on 2-3 different sites. Consensus is reassuring.</li>
              <li><strong>Check Snopes, FactCheck.org, PolitiFact</strong> for "did you hear..." claims.</li>
              <li><strong>AllSides.com</strong> — labels news outlets Left/Center/Right.</li>
              <li><strong>Ground News</strong> — same headline reported by multiple outlets side-by-side.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid clicking the first thing</h2>
            <p className="text-sm">First 1-3 results are usually <strong>ads</strong>, marked "Sponsored". Skip them — you\'ll often pay more (the advertiser is paying for the click). Real organic results start below.</p>
            <p className="text-sm mt-2">For shopping: search the product name, then go DIRECTLY to the manufacturer\'s website. Skip ads pretending to be the brand.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For medical questions</h3>
            <p className="text-sm text-muted-foreground">Prefer .gov / hospital-affiliated sites: <strong>medlineplus.gov</strong>, <strong>cdc.gov</strong>, <strong>nih.gov</strong>, <strong>mayoclinic.org</strong>. Skip random .com health sites with too many ads. Better still — message your doctor through the patient portal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
