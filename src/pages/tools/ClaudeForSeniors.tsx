import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function ClaudeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Claude AI for Seniors | TekSure" description="ChatGPT alternative — often better. Plain-English Claude AI guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Claude AI for Seniors</h1>
          <p className="text-lg text-muted-foreground">Smarter. Safer. Better at writing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Claude vs ChatGPT</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Claude</strong> — better at writing, more careful, more honest.</li>
              <li><strong>ChatGPT</strong> — more popular, more features, image generation.</li>
              <li>Both have free versions.</li>
              <li>Both at chat-style websites.</li>
              <li>Try both — pick favorite.</li>
              <li>Many use Claude for writing, ChatGPT for everything else.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to <strong>claude.ai</strong>.</li>
              <li>Sign up with email (free).</li>
              <li>Type question in chat box.</li>
              <li>Read response.</li>
              <li>Ask follow-ups.</li>
              <li>Like having very patient tutor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Claude does well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Writing letters, emails, complaints.</li>
              <li>Explaining medical / legal documents.</li>
              <li>Editing your writing — keeps your voice.</li>
              <li>Long-form analysis (Wikipedia article level).</li>
              <li>Coding / spreadsheet help.</li>
              <li>Honest about what it doesn&apos;t know.</li>
              <li>Won&apos;t make up facts as confidently as ChatGPT.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-useful tasks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Edit your memoir chapter.</li>
              <li>Explain insurance policy.</li>
              <li>Translate medical jargon.</li>
              <li>Help write toast for grandchild&apos;s wedding.</li>
              <li>Plan trip itinerary.</li>
              <li>Decode tax notice.</li>
              <li>Compare 2 products.</li>
              <li>Summarize long article.</li>
              <li>Help with crosswords (in moderation).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free vs paid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free</strong> — limited daily messages. Plenty for most.</li>
              <li><strong>Pro $20/mo</strong> — 5x more messages, better model, file uploads.</li>
              <li>Most seniors don&apos;t need paid.</li>
              <li>Try free for month before paying.</li>
              <li>Both versions good quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy + safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t share: SSN, Medicare#, passwords.</li>
              <li>Don&apos;t enter banking / credit info.</li>
              <li>Use generic descriptions when describing situations.</li>
              <li>Conversations may be used to improve AI (opt out in settings).</li>
              <li>Same caution as posting on Facebook.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voice mode + apps</h3>
            <p className="text-sm text-muted-foreground">Claude has phone app — speak instead of type. ChatGPT same. Easier for seniors with arthritis. Like having conversation with smart friend. Apple, Google, Samsung all building AI into phones. AI = future of senior tech support. Gets easier every year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
