import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function ChatGptForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ChatGPT for Seniors — Plain English Guide | TekSure" description="What ChatGPT is, how to use it safely, and the everyday questions seniors love asking. Plain-English starter guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ChatGPT for Seniors</h1>
          <p className="text-lg text-muted-foreground">An AI helper that answers anything, plainly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">ChatGPT is a free website (and app) where you type a question and an AI writes an answer in seconds. Like a 24/7 patient assistant. It can also speak out loud and listen to your voice.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>chatgpt.com</strong> or download "ChatGPT" app from App Store/Play Store.</li>
              <li>Free version is plenty. No need to pay $20/mo unless you use it daily.</li>
              <li>Sign up with email OR use as guest.</li>
              <li>Type a question. Get an answer.</li>
              <li>Tap the speaker icon to hear it spoken aloud.</li>
              <li>Tap microphone to talk instead of type.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Things seniors love asking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Explain Medicare Part B in simple terms."</li>
              <li>"What can I cook with chicken thighs and rice?"</li>
              <li>"Help me write a thank-you note to my doctor."</li>
              <li>"What does this medical letter mean?" (paste the letter)</li>
              <li>"Translate this to Spanish for my neighbor."</li>
              <li>"What&apos;s a good gift for a 5-year-old grandson?"</li>
              <li>"Make me a 7-day meal plan for diabetes."</li>
              <li>"Help me draft an email to my landlord."</li>
              <li>"What size A/C unit do I need for a 12&apos;×15&apos; room?"</li>
              <li>"Read me a bedtime story." (it makes one up)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Important safety notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NOT a doctor. NOT a lawyer. NOT a financial advisor. Use for general info — verify with a real pro.</li>
              <li>Sometimes makes up facts (called "hallucinating"). Always cross-check important info.</li>
              <li>Never share Social Security number, bank accounts, or full credit cards.</li>
              <li>Don&apos;t enter your full address or family members&apos; full names.</li>
              <li>It&apos;s fine to share your zip code, age, general health condition.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pro tip — be specific</h2>
            <p className="text-sm">Bad: "How do I lose weight?"</p>
            <p className="text-sm">Good: "I&apos;m 72, have arthritic knees, walk 30 min/day. What 3 small diet changes can help me lose 10 pounds in 3 months?"</p>
            <p className="text-sm mt-2">More context = much better answer.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free AI assistants worth trying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Gemini</strong> (gemini.google.com) — free. Good at images. Reads your Gmail (with permission).</li>
              <li><strong>Claude</strong> (claude.ai) — free. Best at long writing. Polite + careful.</li>
              <li><strong>Microsoft Copilot</strong> (copilot.microsoft.com) — free. Built into Windows + Edge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Just try it</h3>
            <p className="text-sm text-muted-foreground">First ChatGPT question is the hardest. Open it, type "Tell me a joke about cats", and you&apos;re started. After 5 questions, you&apos;ll know what it&apos;s good at — and bad at.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
