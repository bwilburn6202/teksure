import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const AIS = [
  { name: 'ChatGPT (OpenAI)', cost: 'Free; $20/mo Plus; $200/mo Pro', best: 'Most well-known. Largest user base. Best for general writing, summaries, simple coding, and conversation.', good: 'Free version is genuinely useful.' },
  { name: 'Claude (Anthropic)', cost: 'Free; $20/mo Pro', best: 'Best at long-document analysis and clear writing. Often produces more thoughtful, balanced answers. Less prone to confidently wrong responses.', good: 'Best for serious writing tasks.' },
  { name: 'Google Gemini', cost: 'Free; $20/mo Advanced', best: 'Built into Google Search and Gmail. Real-time info from web. Strong at math and visual analysis.', good: 'Best if you live in Google ecosystem.' },
  { name: 'Microsoft Copilot', cost: 'Free; $20/mo Pro', best: 'Built into Windows, Edge, Office 365. Tightly integrates with Word, Excel, Outlook.', good: 'Best for Office users.' },
  { name: 'Apple Intelligence', cost: 'Free with iOS 18+ on iPhone 15 Pro+', best: 'Built into iPhone. Summarizes email, helps write, generates images. Privacy-focused.', good: 'Best for Apple users (limited devices).' },
  { name: 'Perplexity AI', cost: 'Free; $20/mo Pro', best: 'AI search with citations — cites sources for every answer. Best for research.', good: 'Best for fact-checking AI claims.' },
];

export default function AiComparisonCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Comparison Coach — ChatGPT vs Claude vs Gemini | TekSure" description="Confused about AI options? Plain-English comparison of ChatGPT, Claude, Gemini, Copilot, Apple Intelligence — what each is best at." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Comparison Coach</h1>
          <p className="text-lg text-muted-foreground">Pick the right AI for the job. (Free is plenty for most.)</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Bottom line</h2>
            <p className="text-sm">For most everyday tasks, the FREE versions of any of these are more than enough. Pay for premium only if you use AI heavily for work or want longer / faster responses.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {AIS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Match AI to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Translate this email"</strong> → any of them.</li>
              <li><strong>"Help me write a difficult letter"</strong> → Claude is excellent.</li>
              <li><strong>"What\'s the latest news on X?"</strong> → Gemini or Perplexity (real-time web).</li>
              <li><strong>"Summarize this 50-page document"</strong> → Claude.</li>
              <li><strong>"Help me with this Excel formula"</strong> → Microsoft Copilot inside Excel.</li>
              <li><strong>"Help me research, with sources"</strong> → Perplexity.</li>
              <li><strong>Quick question, instant answer</strong> → Apple Intelligence (Siri) on newer iPhones.</li>
              <li><strong>Generate images</strong> → ChatGPT Plus, Gemini, or DALL-E.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy notes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>All AIs may use your conversations to improve their model — unless you turn it off.</li>
              <li>Don\'t share Social Security, bank info, medical records, or passwords.</li>
              <li>Apple Intelligence and Microsoft Copilot for Business have stronger privacy guarantees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try them all</h3>
            <p className="text-sm text-muted-foreground">All have free versions. Try the same question on 2-3 AIs and see which answers you like better. Many people stick with whatever they tried first — but real differences exist.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
