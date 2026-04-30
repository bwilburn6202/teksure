import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SiriFamilyGroupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Family Sharing for Seniors | TekSure" description="Share apps + storage + Apple One with family. Senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Family Sharing</h1>
          <p className="text-lg text-muted-foreground">Share apps + storage.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it shares</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App Store purchases.</li><li>iCloud storage.</li><li>Apple Music.</li><li>Apple TV+.</li><li>Apple One.</li><li>Books + iCloud+.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid pays Apple One.</li><li>Senior parent gets benefits.</li><li>Save $$/year.</li><li>Same purchases.</li><li>Each privacy preserved.</li><li>Senior win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Apple ID.</li><li>Family Sharing.</li><li>Set Up Family.</li><li>Invite via email/text.</li><li>Up to 6 members.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find My family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See family locations.</li><li>If allowed.</li><li>Senior + adult kid mutual.</li><li>Worried family check.</li><li>Privacy respected.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo album shared</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family photo album.</li><li>Everyone adds.</li><li>Senior sees grandkid pics auto.</li><li>Free.</li><li>Best feature.</li><li>Better than Facebook.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Cash family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Send money family.</li><li>Free.</li><li>Senior allowance to grandkids.</li><li>iMessage send.</li><li>No bank app.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family Sharing = senior + family savings</h3><p className="text-sm text-muted-foreground">Adult kid pays $20/mo Apple One = senior parent gets iCloud, Apple Music, Apple TV+. Plus shared photo album showing grandkids. Plus Find My if mutual. Senior + family $200+/yr saved. Most under-used Apple senior family feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
