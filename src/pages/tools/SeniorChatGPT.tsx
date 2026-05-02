import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function SeniorChatGPT() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ChatGPT for Seniors — Senior Guide" description="Use ChatGPT to ask questions in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ChatGPT</h1>
          <p className="text-lg text-muted-foreground">An AI helper that answers like a person.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free version</h2><p>Visit chatgpt.com or get the app. Free to use, sign-up optional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Ask questions</h2><p>Type a question. ChatGPT answers in plain English. Works for almost anything.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Be specific</h2><p>Ask Show me a 5-minute pasta recipe under 400 calories. The more detail, the better.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Speak instead</h2><p>Tap the microphone in the app. Talk to ChatGPT. It speaks back too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Verify health info</h2><p>Always check medical advice with a real doctor. ChatGPT can be wrong.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Privacy</h2><p>Don't share Social Security or bank details. Conversations may be used for training.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Great for plain-language explanations. Ask Explain my Medicare summary like I'm 70.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
