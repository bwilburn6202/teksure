import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ThumbsDown } from 'lucide-react';

export default function PainTrackingAppsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pain Tracking Apps for Seniors | TekSure" description="Track chronic pain. Senior pain management apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ThumbsDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pain Tracking</h1>
          <p className="text-lg text-muted-foreground">Senior chronic pain.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PainScale free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>0-10 scale.</li><li>Body location.</li><li>Senior triggers.</li><li>Doctor share.</li><li>Patterns visible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Curable</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$70/year.</li><li>Mind-body chronic pain.</li><li>Senior alternative.</li><li>Studies-backed.</li><li>Free trial.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health journaling</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in iOS 17.2+.</li><li>Mood + pain.</li><li>Senior automatic.</li><li>Trends visible.</li><li>Free.</li><li>Doctor share.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why track</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Identify triggers.</li><li>Doctor visit prep.</li><li>Senior med effectiveness.</li><li>Insurance documentation.</li><li>Patterns.</li><li>Worth daily 30 sec.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PT exercises apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bob and Brad YouTube free.</li><li>Senior PT exercises.</li><li>Daily routine.</li><li>Manage chronic pain.</li><li>Free.</li><li>Effective.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance documentation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pain logs help disability claims.</li><li>Senior approval easier.</li><li>Document daily.</li><li>Photo proof.</li><li>Worth time.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free PainScale + Bob and Brad = senior pain mgmt</h3><p className="text-sm text-muted-foreground">Free PainScale app daily 30-sec log + free Bob and Brad YouTube PT exercises = senior chronic pain management. Doctor share patterns. Insurance documentation if disability claim. Apple Health journal also free. Most senior pain support free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
