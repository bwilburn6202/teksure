import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenLine } from 'lucide-react';

export default function AILetterDrafting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Letter + Email Drafting | TekSure" description="Use ChatGPT to draft real letters. Plain-English templates for landlord, doctor, insurance, complaint, sympathy letters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenLine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Letter Drafting</h1>
          <p className="text-lg text-muted-foreground">Get help saying things right.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best letter prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Insurance dispute</strong> — "Help me write a letter to insurance company appealing denial of [treatment]."</li>
              <li><strong>Medical records request</strong> — "Letter requesting my medical records from [hospital]."</li>
              <li><strong>Landlord</strong> — "Polite letter asking for repair of [issue]."</li>
              <li><strong>Doctor concern</strong> — "Letter to doctor explaining [symptoms] before appointment."</li>
              <li><strong>Sympathy / condolence</strong> — "Sympathy note for friend whose mother died."</li>
              <li><strong>Thank-you</strong> — for nurse, family, neighbor.</li>
              <li><strong>Complaint</strong> — utility, business, government.</li>
              <li><strong>Government</strong> — congressman, IRS, Social Security.</li>
              <li><strong>Refund request</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to prompt well</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Tell AI: WHO + WHAT + WHEN + WHY.</li>
              <li>Specify TONE: "polite + firm" / "warm + brief" / "formal".</li>
              <li>Specify LENGTH: "2 short paragraphs" / "1 page".</li>
              <li>Read draft. Edit YOUR voice in.</li>
              <li>Ask "make it shorter" / "warmer" / "more direct".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Example prompt</h2>
            <p className="text-sm">"Help me write a polite letter to my homeowner&apos;s insurance company. They denied my claim for water damage from a burst pipe in January. The pipe damage caused $8,000 in flooring damage. I have receipts + photos. The denial letter says &apos;not covered&apos; without explanation. Please write a 1-page appeal asking them to reconsider, requesting a written explanation of the denial, and reminding them of my 8-year clean claim history."</p>
            <p className="text-sm mt-3">AI generates draft. You edit + sign.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t share these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Full Social Security number.</li>
              <li>Full credit card number.</li>
              <li>Bank account number.</li>
              <li>Full home address (zip code OK).</li>
              <li>Family members&apos; full names.</li>
              <li>Replace specific details with [PLACEHOLDER] in prompt, fill in after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best free AI letter drafters</h3>
            <p className="text-sm text-muted-foreground"><strong>ChatGPT</strong> (chat.openai.com) — most popular. <strong>Claude</strong> (claude.ai) — best at warm + thoughtful letters. <strong>Google Gemini</strong> — free. <strong>Microsoft Copilot</strong> — free, built into Word. ALL free for letter drafting needs.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
