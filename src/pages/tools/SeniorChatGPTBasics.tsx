import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function SeniorChatGPTBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ChatGPT for Seniors — TekSure" description="A senior-friendly intro to ChatGPT — what it does, how to use it safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ChatGPT for Seniors</h1>
          <p className="text-lg text-muted-foreground">A friendly AI helper.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free version</h2><p>Visit chat.openai.com. Sign up with email. Free version handles most senior needs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it does</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Explains anything in plain English</li><li>Helps write letters or emails</li><li>Translates languages</li><li>Suggests recipes</li><li>Plans trips</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How to ask</h2><p>Type a question in plain words. Like talking to a smart friend. No special syntax.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice mode</h2><p>App on iPhone or Android. Tap the microphone — speak instead of type.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAFETY</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Never share Social Security number</li><li>Never share passwords or bank info</li><li>Don&apos;t trust medical advice — call your doctor</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><p>Claude, Gemini, Perplexity — all do similar things. Free versions available.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ask &ldquo;Explain like I&apos;m 70&rdquo; for clearer, slower answers without jargon.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
