import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorVoiceMemo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Memos for Seniors — TekSure" description="Record memos, journal aloud, capture stories — Apple Voice Memos and alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Memos for Seniors</h1>
          <p className="text-lg text-muted-foreground">Capture thoughts. Tell your story.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice Memos (iPhone)</h2><p>FREE built in. Tap red button to record. Save forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Recorder (Pixel)</h2><p>FREE. Auto-transcribes recordings. Search by spoken keyword.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy Voice Recorder</h2><p>FREE Android. Senior-friendly with big buttons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love them</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Capture grandchildren&apos;s voices</li><li>Audio memoirs</li><li>Doctor visit notes</li><li>Recipe instructions from family</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save important ones</h2><p>Email to yourself. Or save to iCloud/Google Drive. Don&apos;t lose family voices.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">StoryCorps</h2><p>FREE. Record interviews with family. Saved in Library of Congress.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Record stories from your parents NOW. Their voices fade once they&apos;re gone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
