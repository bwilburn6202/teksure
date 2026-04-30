import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorTechClassesOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tech Classes Online | TekSure" description="Free online tech classes for seniors. SeniorNet + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tech Classes</h1>
          <p className="text-lg text-muted-foreground">Online learning options.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">GetSetUp</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>By + for seniors.</li><li>$15/mo or free Medicare Advantage.</li><li>Live classes.</li><li>Senior-paced.</li><li>Best senior tech.</li><li>Senior teachers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SeniorPlanet</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free AARP-backed.</li><li>Online classes.</li><li>Senior tech focused.</li><li>Beginner welcome.</li><li>Seniorplanet.org.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Support official.</li><li>Senior Tech Help.</li><li>Cyber-Seniors.</li><li>Free + abundant.</li><li>Search any topic.</li><li>Pause + replay.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cyber-Seniors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free 1-on-1 with college students.</li><li>Senior intergenerational.</li><li>Tech help free.</li><li>Cyberseniors.org.</li><li>Worth applying.</li><li>Hour weekly often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OATS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Older Adults Technology Services.</li><li>AARP partnership.</li><li>Free senior classes.</li><li>OATS.org.</li><li>Local + online.</li><li>Trusted nonprofit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library senior classes.</li><li>Senior centers.</li><li>Community college.</li><li>Free or cheap.</li><li>In-person better some.</li><li>Friends made.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free SeniorPlanet + Cyber-Seniors</h3><p className="text-sm text-muted-foreground">Free SeniorPlanet AARP-backed + Cyber-Seniors 1-on-1 with college students = best free senior tech learning. GetSetUp paid but often free Medicare Advantage. Plus library + community college. Don&apos;t pay for senior tech learning — abundant free options.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
