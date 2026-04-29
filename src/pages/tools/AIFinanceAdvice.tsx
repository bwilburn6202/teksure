import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function AIFinanceAdvice() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Finance Advice for Seniors | TekSure" description="AI for money decisions. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Finance Help</h1>
          <p className="text-lg text-muted-foreground">Smart questions. Smarter answers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Good AI use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Understand investment terms.</li>
              <li>Tax form questions.</li>
              <li>Compare CDs, savings rates.</li>
              <li>Estate planning concepts.</li>
              <li>Social Security strategies.</li>
              <li>Budget creation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-yellow-700">Don&apos;t use AI for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Specific investment recommendations.</li>
              <li>Tax filing without verification.</li>
              <li>Insurance product picks.</li>
              <li>Annuity decisions.</li>
              <li>Estate plan execution.</li>
              <li>Use real CFP (Certified Financial Planner).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Explain Roth vs Traditional IRA.&quot;</li>
              <li>&quot;What does RMD mean?&quot;</li>
              <li>&quot;Compare bonds vs CDs.&quot;</li>
              <li>&quot;Help me budget on $3,000/mo.&quot;</li>
              <li>&quot;How does Medicare Part B work?&quot;</li>
              <li>&quot;Explain reverse mortgage risks.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best AI for finance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChatGPT</strong> — general explanations.</li>
              <li><strong>Claude</strong> — comprehensive answers.</li>
              <li><strong>Perplexity</strong> — cites sources.</li>
              <li><strong>Microsoft Copilot</strong> — links to articles.</li>
              <li>Verify dates — info ages quickly.</li>
              <li>Tax law changes annually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real advisor still essential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CFP for specific advice.</li>
              <li>Fee-only fiduciary best.</li>
              <li>$200-300/hr.</li>
              <li>One-time consult $500-1500.</li>
              <li>Avoid commission-based.</li>
              <li>NAPFA.org — find fee-only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free senior resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP Foundation Finances.</li>
              <li>Financial Planning Association free clinics.</li>
              <li>VITA tax help (Volunteer Income Tax Assistance).</li>
              <li>SHIP — State Health Insurance Programs.</li>
              <li>Public library finance books.</li>
              <li>Bogleheads.org community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AI scam watch</h3>
            <p className="text-sm text-muted-foreground">Some &quot;AI financial apps&quot; — actually scams. AI in real apps (Mint, Personal Capital) — legit. Standalone &quot;Get rich with AI&quot; — scam. Crypto AI bots = scam. Stock-picking AI = scam. Free legitimate AI: ChatGPT, Claude, Gemini. Anything promising guaranteed returns = lying. Skepticism is the senior&apos;s best friend.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
