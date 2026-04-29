import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, AlertTriangle } from 'lucide-react';

export default function AiBeginnerCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ChatGPT for Beginners — How to Actually Use AI | TekSure" description="Everyone's talking about AI. Here's plain-English guidance — what it is, what to ask, what to never trust, and how to use it without getting fooled." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Beginner Coach</h1>
          <p className="text-lg text-muted-foreground">ChatGPT, Claude, Gemini — what they are, and what they're actually for.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What "AI" is, really</h2>
            <p className="text-sm">An AI like ChatGPT is a typing assistant that has read most of the internet. You ask it a question, it writes an answer in normal English. It can also help you write emails, summarize long documents, and explain things in simpler words.</p>
            <p className="text-sm mt-2"><strong>What it isn't:</strong> A real person. A search engine. A doctor. A lawyer. It guesses confidently, even when wrong.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick one. They're all similar.</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChatGPT</strong> — most popular. Free at chatgpt.com or in the app store.</li>
              <li><strong>Claude</strong> — known for clear writing and longer documents. Free at claude.ai.</li>
              <li><strong>Google Gemini</strong> — built into Google. Free at gemini.google.com.</li>
              <li><strong>Microsoft Copilot</strong> — built into Windows and Edge. Free.</li>
            </ul>
            <p className="text-sm mt-3">Sign up with your email. The free version is plenty for everyday tasks.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">10 things AI is genuinely great for</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Explain something simply.</strong> "Explain Medicare Part D in plain English to someone over 70."</li>
              <li><strong>Write a tough email.</strong> "Help me write a polite email to my landlord about a broken stove."</li>
              <li><strong>Summarize a long article.</strong> Paste in the article. "Summarize this in 5 bullet points."</li>
              <li><strong>Fix a recipe.</strong> "I'm out of buttermilk. What can I substitute in pancakes?"</li>
              <li><strong>Translate.</strong> "Translate 'where is the pharmacy' to Italian."</li>
              <li><strong>Plan a trip.</strong> "I have 3 days in Charleston, SC. What should a 70-year-old see?"</li>
              <li><strong>Brainstorm.</strong> "Give me 10 birthday gift ideas for my 8-year-old grandson who likes dinosaurs."</li>
              <li><strong>Decode jargon.</strong> Paste in a confusing letter from your insurance. "What is this saying in plain English?"</li>
              <li><strong>Help with grief, anxiety, or stress.</strong> A patient listener — but not a substitute for a real therapist.</li>
              <li><strong>Spot scams.</strong> Paste in a suspicious email. "Does this look like a scam?"</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Things to NOT trust without checking</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Medical advice.</strong> AI gets symptoms confused. Real doctors only.</li>
                  <li><strong>Legal advice.</strong> Don't decide a will or contract from an AI. Lawyer up.</li>
                  <li><strong>Specific phone numbers, addresses, store hours.</strong> AI sometimes invents these. Check on Google.</li>
                  <li><strong>News from this week.</strong> Many AIs only know what was true before their training cutoff.</li>
                  <li><strong>Tax filing details.</strong> Use IRS.gov or a tax pro.</li>
                  <li><strong>Anything where being wrong has consequences.</strong> AI is a starting point, not the final word.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to ask a good question</h2>
            <p className="text-sm mb-2">Just type like you're talking to a smart friend. The clearer you are, the better the answer.</p>
            <p className="text-sm font-semibold mt-3">Bad question:</p>
            <p className="text-sm bg-destructive/10 p-3 rounded">"Tell me about cooking."</p>
            <p className="text-sm font-semibold mt-3">Good question:</p>
            <p className="text-sm bg-green-100 dark:bg-green-950/20 p-3 rounded">"I'm cooking dinner for my husband and me. We have chicken thighs, rice, and broccoli. What's a simple recipe that takes under 30 minutes?"</p>
            <p className="text-sm mt-3">If the first answer isn't quite right, just say so. Type "shorter please" or "make this less spicy" or "explain that part more". It learns from your follow-ups in the same conversation.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy — what to NOT type in</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your full Social Security number.</li>
              <li>Your bank account or credit card numbers.</li>
              <li>Your home address (if you don't want it associated with the account).</li>
              <li>Confidential medical records.</li>
              <li>Anything you wouldn't put on a postcard.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">AI services may use your conversations to improve their systems. Most have a setting to turn that off — look in Settings → Data.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The best way to learn</h3>
            <p className="text-sm text-muted-foreground">Just play with it for 10 minutes. Ask it the question you've always wondered. Try writing one email together. The first time it surprises you, you'll get it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
