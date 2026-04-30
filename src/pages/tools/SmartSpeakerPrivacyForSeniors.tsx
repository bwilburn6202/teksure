import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldOff } from 'lucide-react';

export default function SmartSpeakerPrivacyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Speaker Privacy for Seniors | TekSure" description="Alexa + Google Home listen. Senior privacy settings guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Speaker Privacy</h1>
          <p className="text-lg text-muted-foreground">Limit listening.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Are they listening?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wait for &quot;Alexa&quot;/&quot;Hey Google.&quot;</li><li>Then record.</li><li>Light comes on.</li><li>Senior aware.</li><li>Mostly trustworthy.</li><li>Configurable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Delete recordings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alexa app — Privacy.</li><li>Delete all history.</li><li>Or auto-delete monthly.</li><li>Senior peace.</li><li>Google Home same.</li><li>Set auto-delete.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mute mic button</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Top of speaker.</li><li>Press to mute.</li><li>Light turns red.</li><li>Senior 100% sure offline.</li><li>For sensitive talks.</li><li>Press again to enable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t in bedroom</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior sensitive.</li><li>Living room ok.</li><li>Kitchen ok.</li><li>Bedroom debatable.</li><li>Senior comfort.</li><li>Each chooses.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice ID</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Recognizes who speaks.</li><li>Personal results.</li><li>Calendar correct.</li><li>Senior accuracy.</li><li>Setup voice profile.</li><li>Adult kid ID also.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Disable purchasing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Voice purchases off.</li><li>Senior accidental orders.</li><li>Set PIN required.</li><li>Or disable entirely.</li><li>Settings — Voice Purchasing.</li><li>Senior protection.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">5-min privacy check protects senior</h3><p className="text-sm text-muted-foreground">5-min Alexa privacy check: auto-delete recordings monthly, disable voice purchasing, mute button when sensitive. Most seniors set + forget. Adult kid does once. Privacy preserved while keeping smart speaker convenience. Worth doing today.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
