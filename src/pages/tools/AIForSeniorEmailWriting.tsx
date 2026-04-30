import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function AIForSeniorEmailWriting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI for Senior Email Writing | TekSure" description="Use AI to draft emails. Senior email writing with ChatGPT/Gemini." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Email Writing</h1>
          <p className="text-lg text-muted-foreground">Difficult emails — solved.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When AI helps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Complaint to company.</li><li>Polite decline invitation.</li><li>HOA letter.</li><li>Insurance claim.</li><li>Doctor follow-up.</li><li>Sympathy notes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to ask</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Write polite email to landlord about leaky faucet.&quot;</li><li>Add details.</li><li>Specify tone.</li><li>AI drafts.</li><li>You edit + send.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Refine</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Make it shorter.&quot;</li><li>&quot;More polite.&quot;</li><li>&quot;Add deadline.&quot;</li><li>AI revises.</li><li>Senior crafts perfect tone.</li><li>Better than first try.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Always edit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Read before sending.</li><li>Add personal touch.</li><li>Check facts.</li><li>Don&apos;t sound robotic.</li><li>Senior voice authentic.</li><li>AI = starting point.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t share SSN/passwords in prompt.</li><li>AI may train on it.</li><li>Generic details ok.</li><li>Senior boundary.</li><li>Use chat history off.</li><li>OpenAI privacy settings.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best for</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Complaints — assertive but polite.</li><li>Resignations.</li><li>Apologies — striking right tone.</li><li>Sympathy — sensitive language.</li><li>Senior emotional emails.</li><li>AI helps tone.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">AI = senior email confidence</h3><p className="text-sm text-muted-foreground">Many seniors avoid difficult emails — paralyzed by tone. Free ChatGPT or Gemini drafts perfect tone in seconds. &quot;Polite but firm complaint to internet provider.&quot; Senior edits + sends. No more avoiding emails. Take back power.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
