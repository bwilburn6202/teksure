import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function AppleTVSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple TV Setup for Seniors | TekSure" description="Apple TV box setup for seniors. Streaming made simple." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple TV Setup</h1>
          <p className="text-lg text-muted-foreground">Streaming on any TV.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What is Apple TV</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Small black box ($129+).</li><li>Plugs into TV.</li><li>Streams Netflix, Disney+, etc.</li><li>Plus Apple TV+ shows.</li><li>Better than smart TV apps.</li><li>Senior-friendly remote.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug HDMI into TV.</li><li>Plug power cord.</li><li>Hold remote near iPhone.</li><li>iPhone setup auto-fills wifi.</li><li>Sign in Apple ID.</li><li>15 minutes done.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One remote for everything.</li><li>Voice search — &quot;find Yellowstone.&quot;</li><li>iPhone screen mirror.</li><li>FaceTime on big screen.</li><li>Reduces senior tech complexity.</li><li>One device.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice search</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hold mic button.</li><li>Say show name.</li><li>Apple TV finds.</li><li>Plays in any app.</li><li>No typing on screen.</li><li>Senior big win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mirror iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Show photos on TV.</li><li>FaceTime on big screen.</li><li>Watch any phone video.</li><li>Big-screen photos with grandkids visiting.</li><li>Easy share.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple TV+ ($10/mo)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in subscription.</li><li>Original shows.</li><li>Ted Lasso, Severance.</li><li>Free 3-month trial.</li><li>Cancel anytime.</li><li>Senior worth trying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple TV box = senior remote sanity</h3><p className="text-sm text-muted-foreground">Tired of 4 remotes + slow smart TV? Apple TV box ($129) replaces all. One remote, voice search, mirror iPhone. Streaming all in one place. Many seniors say this single device most simplified their entertainment. Worth it.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
