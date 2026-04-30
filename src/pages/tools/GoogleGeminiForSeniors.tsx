import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function GoogleGeminiForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Gemini for Seniors | TekSure" description="Free Google AI assistant. Gemini guide for senior tasks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Gemini</h1>
          <p className="text-lg text-muted-foreground">Free Google AI.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google&apos;s ChatGPT.</li><li>Gemini.google.com.</li><li>Free version solid.</li><li>$20/mo Advanced.</li><li>Built into Pixel phones.</li><li>Senior alternative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free conversations.</li><li>Image generation.</li><li>Photo editing.</li><li>Email writing help.</li><li>Connects to Gmail.</li><li>Senior productivity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gmail integration</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Write me email to landlord.&quot;</li><li>Drafts in Gmail.</li><li>Edit + send.</li><li>Senior letter help.</li><li>Free.</li><li>Saves time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs ChatGPT</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Both free.</li><li>Both excellent.</li><li>Try both.</li><li>Pick favorite.</li><li>Use for different tasks.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Image creation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free image generation.</li><li>&quot;Create cartoon dog.&quot;</li><li>Senior creative fun.</li><li>Save image.</li><li>Send to grandkids.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Use Google account.</li><li>Speak voice queries.</li><li>Long conversations.</li><li>Refine answers.</li><li>Verify important info.</li><li>Free + powerful.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Try ChatGPT + Gemini both</h3><p className="text-sm text-muted-foreground">Both ChatGPT and Gemini have free versions. Same Google account already logged in. Try both for a week. Each excels different tasks. Many seniors use both. Free productivity revolution. Don&apos;t skip — these tools transform daily life.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
