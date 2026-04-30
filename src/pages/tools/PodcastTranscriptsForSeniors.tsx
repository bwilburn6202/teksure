import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function PodcastTranscriptsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Podcast Transcripts for Seniors | TekSure" description="Read podcasts when can't hear. Senior transcript apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Podcast Transcripts</h1>
          <p className="text-lg text-muted-foreground">Read instead of listen.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Podcasts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-transcripts iOS 17.4+.</li><li>Tap show notes.</li><li>Free.</li><li>Senior read along.</li><li>Search text.</li><li>Hard-of-hearing helper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spotify</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto transcripts most podcasts.</li><li>Free.</li><li>Read while listen.</li><li>Senior follow easier.</li><li>Search keywords.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Otter.ai uploads</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Upload any audio.</li><li>Free 600 min/mo.</li><li>Transcribes.</li><li>Senior unbearably long podcasts.</li><li>Skim faster.</li><li>Search.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hearing-impaired access.</li><li>Skim long podcasts.</li><li>Search topics.</li><li>Senior catch missed words.</li><li>Hyperlinked.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Snip + share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save best quotes.</li><li>Send to family.</li><li>Senior memory aid.</li><li>Spotify + Apple support.</li><li>Free.</li><li>Discussion starter.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Speed up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1.25-1.5x faster.</li><li>Save time.</li><li>Senior comfort speed.</li><li>Some prefer slow.</li><li>Free.</li><li>Customize.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free transcripts = senior podcast access</h3><p className="text-sm text-muted-foreground">Apple Podcasts + Spotify auto-transcripts most podcasts now. Senior hearing-impaired read along. Free. Search keywords. Skim faster. Plus Otter.ai uploads for ones without transcripts. Most senior accessibility feature available. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
