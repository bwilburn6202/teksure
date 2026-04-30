import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeeingAIAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Seeing AI App for Senior Vision Help | TekSure" description="Free Microsoft Seeing AI reads text, identifies objects. For low-vision seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Seeing AI</h1>
          <p className="text-lg text-muted-foreground">Free vision helper.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reads text aloud.</li><li>Identifies products by barcode.</li><li>Describes scenes.</li><li>Reads currency.</li><li>Identifies people in photos.</li><li>Free Microsoft app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Read prescription labels.</li><li>Read mail aloud.</li><li>Identify cans/jars.</li><li>Read menus.</li><li>Help with low vision.</li><li>Independence preserved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download free.</li><li>Point phone at text.</li><li>Listens — reads aloud.</li><li>No internet needed for some features.</li><li>Available iPhone + Android.</li><li>Bluetooth headphones nice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Short text — instant.</li><li>Document — full pages.</li><li>Product — barcode + text.</li><li>Person — describe + identify.</li><li>Scene — environment.</li><li>Each tab dedicated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Be My Eyes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app — alternative.</li><li>Live volunteer help.</li><li>Video call them.</li><li>They describe what camera sees.</li><li>Anonymous + free.</li><li>AI version too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Practice in good light.</li><li>Hold phone steady.</li><li>Use headphones.</li><li>Increase volume.</li><li>Add to home screen.</li><li>Show family how to use.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free + life-changing for low vision</h3><p className="text-sm text-muted-foreground">Microsoft Seeing AI is best free app for low-vision seniors. Reads pill bottles, identifies products, reads mail. Plus Be My Eyes connects to volunteers. Don&apos;t struggle reading small text — let phone read aloud. Independence-preserving technology, completely free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
