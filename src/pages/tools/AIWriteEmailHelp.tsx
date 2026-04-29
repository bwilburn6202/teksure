import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function AIWriteEmailHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Help Writing Emails | TekSure" description="Use ChatGPT to write better emails. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Email Helper</h1>
          <p className="text-lg text-muted-foreground">Write professional emails in seconds.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When AI helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Complaint letter to company.</li>
              <li>Insurance dispute appeal.</li>
              <li>Wedding / event response.</li>
              <li>Sympathy / condolence letter.</li>
              <li>Sensitive family discussion.</li>
              <li>Letter to landlord.</li>
              <li>Recommendation letter.</li>
              <li>Appeal of denied benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 free AI tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChatGPT</strong> — chat.openai.com. Free version great.</li>
              <li><strong>Claude</strong> — claude.ai. Often better writing.</li>
              <li><strong>Gemini</strong> — gemini.google.com. Free.</li>
              <li>All free for moderate use.</li>
              <li>Try each — pick favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to ask</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell it: who it&apos;s to + what you want + tone.</li>
              <li>Example: &quot;Write polite but firm letter to landlord about broken AC, expecting repair within 5 days.&quot;</li>
              <li>Say &quot;short&quot; or &quot;keep it 3 paragraphs.&quot;</li>
              <li>Specify formal/informal.</li>
              <li>Mention key facts to include.</li>
              <li>Ask for revisions: &quot;more polite,&quot; &quot;more direct.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Help me write thank you to grandkid for graduation gift.&quot;</li>
              <li>&quot;Draft a complaint to insurance about denied claim.&quot;</li>
              <li>&quot;Write a sympathy email to friend who lost spouse.&quot;</li>
              <li>&quot;Help me decline an invitation politely.&quot;</li>
              <li>&quot;Draft email asking for refund from broken product.&quot;</li>
              <li>&quot;Help me write to my Senator about [issue].&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Always edit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI gives DRAFT. You make it yours.</li>
              <li>Read carefully — sometimes wrong facts.</li>
              <li>Add personal details.</li>
              <li>Change words that don&apos;t sound like you.</li>
              <li>Cut unnecessary parts.</li>
              <li>Best AI usage = collaboration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t share these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Social Security number.</li>
              <li>Bank account / credit card.</li>
              <li>Medicare number.</li>
              <li>Passwords.</li>
              <li>Anything you wouldn&apos;t put on Facebook.</li>
              <li>Use generic identifiers when explaining.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voice typing</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t want to type prompt? Use phone&apos;s voice typing — microphone icon on keyboard. Speak your request, AI responds. Faster than typing for many seniors. Works on phone + tablet versions of ChatGPT/Claude/Gemini.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
