import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SpeechToTextSeniorPro() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Speech to Text Pro for Seniors | TekSure" description="Voice typing apps + dictation for senior arthritis hands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Speech to Text Pro</h1>
          <p className="text-lg text-muted-foreground">Senior voice typing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone built-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap mic on keyboard.</li><li>Speak naturally.</li><li>Punctuation by voice.</li><li>Senior fast typing.</li><li>Free.</li><li>Multi-language.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Gboard</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Android default.</li><li>Excellent dictation.</li><li>Continuous listening.</li><li>Senior easy.</li><li>Free.</li><li>Multi-language.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice commands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;period&quot;, &quot;comma&quot;.</li><li>&quot;new line&quot;, &quot;new paragraph&quot;.</li><li>&quot;question mark&quot;.</li><li>Senior natural.</li><li>Practice habit.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Otter.ai</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free 600 min/mo.</li><li>Records + transcribes.</li><li>Senior meeting notes.</li><li>Doctor visits.</li><li>Family interviews.</li><li>Search transcripts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dragon by Nuance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200 software.</li><li>Professional dictation.</li><li>Senior writers/lawyers.</li><li>Most accurate.</li><li>Mac + Windows.</li><li>Worth professionals.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Arthritis hands.</li><li>Fast typing replacement.</li><li>Long emails.</li><li>Senior memoir.</li><li>Free + powerful.</li><li>Game-changer.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free iPhone mic = senior typing replacement</h3><p className="text-sm text-muted-foreground">Free iPhone keyboard microphone = senior typing replacement. Speak emails, texts, anything. Punctuation by voice. Plus Otter.ai free 600 min/mo for meetings + doctor visits transcribed. Most senior arthritis-friendly tech upgrade. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
