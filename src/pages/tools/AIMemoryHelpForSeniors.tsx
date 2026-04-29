import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function AIMemoryHelpForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Memory Help for Seniors | TekSure" description="AI organizes life memories. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Memory Help</h1>
          <p className="text-lg text-muted-foreground">Capture life stories. Organize photos.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI for memoirs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell ChatGPT: &quot;Help me write my life story.&quot;</li>
              <li>Asks questions guides through chapters.</li>
              <li>You speak — voice-to-text input.</li>
              <li>AI structures into narrative.</li>
              <li>Edit + refine.</li>
              <li>Print as book — Shutterfly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo organization</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Photos AI</strong> — auto-faces + places.</li>
              <li><strong>Google Photos AI</strong> — searches by content.</li>
              <li>&quot;Find dog photos from 2015&quot;.</li>
              <li>Auto-creates Memories.</li>
              <li>Tag Aunt Sally — finds all of her.</li>
              <li>Removes duplicates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Genealogy with AI</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MyHeritage AI</strong> — animates old photos.</li>
              <li><strong>Ancestry AI</strong> — colorizes black + white.</li>
              <li><strong>Descendants AI</strong> — connects family trees.</li>
              <li>Dating old photos.</li>
              <li>Recognizing places + buildings.</li>
              <li>Translates old documents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family Q&amp;A</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell ChatGPT story details.</li>
              <li>Ask: &quot;Generate questions for my grandkids.&quot;</li>
              <li>Family interview prompts.</li>
              <li>&quot;What was Grandpa like at age 25?&quot;</li>
              <li>Helps family stories pass down.</li>
              <li>Voice-record sessions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice cloning concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI can clone voice from short audio.</li>
              <li>Don&apos;t share too much voice publicly.</li>
              <li>Family code word for emergencies.</li>
              <li>Be wary of voice scams.</li>
              <li>Dual-confirm requests.</li>
              <li>Otherwise — voice memories powerful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memorialize loved ones</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HereAfter AI — preserve your stories.</li>
              <li>Storyworth — weekly question prompts.</li>
              <li>Voice recordings combined into book.</li>
              <li>Grandkids access years from now.</li>
              <li>$100-500 for full project.</li>
              <li>Priceless legacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy first</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t feed AI sensitive info — SSN, passwords, medical details. AI learns from inputs. Stick to general life stories. Public-OK content. Voice recording with permission. Cloud storage of memories — encrypt. Your stories are precious — share with family, not internet companies. AI helps capture, family preserves.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
