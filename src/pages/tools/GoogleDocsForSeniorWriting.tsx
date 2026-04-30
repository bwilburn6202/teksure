import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function GoogleDocsForSeniorWriting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Docs for Senior Writing | TekSure" description="Free word processor. Google Docs senior writing guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Docs</h1>
          <p className="text-lg text-muted-foreground">Free word processor.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love it</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free always.</li><li>Auto-saves.</li><li>Never lose work.</li><li>Access any device.</li><li>Share with family.</li><li>Print easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice typing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tools → Voice typing.</li><li>Speak naturally.</li><li>Punctuation by voice.</li><li>Senior easier than keyboard.</li><li>Free + good accuracy.</li><li>Game changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Big text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Increase zoom.</li><li>16-18pt font.</li><li>Easy on eyes.</li><li>Print smaller.</li><li>Senior accessibility.</li><li>Free feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Share + collaborate</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Send link to family.</li><li>They edit + comment.</li><li>Real-time changes.</li><li>Resume letters together.</li><li>Senior family help.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Templates</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Resume.</li><li>Letters.</li><li>Newsletters.</li><li>Project planning.</li><li>Senior starter.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Word</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Docs — free, web.</li><li>Word — $7/mo.</li><li>Senior frugal.</li><li>Docs sufficient most.</li><li>Compatible files.</li><li>Free + good.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Google Docs = senior writing</h3><p className="text-sm text-muted-foreground">Free Google Docs replaces $7/mo Word. Voice typing for arthritis hands. Big text for eyes. Auto-save no lost work. Share with family. Senior most useful free productivity tool. Use for letters, memoirs, lists, anything.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
