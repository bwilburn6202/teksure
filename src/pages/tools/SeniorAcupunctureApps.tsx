import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorAcupunctureApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Acupuncture Apps | TekSure" description="Find acupuncturists. Senior alternative medicine apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Acupuncture</h1>
          <p className="text-lg text-muted-foreground">Alternative medicine.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find practitioner</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NCCAOM.org find.</li><li>Senior verified board.</li><li>Free directory.</li><li>Local search.</li><li>Read reviews.</li><li>Worth research.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost + insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$200/visit.</li><li>Some Medicare covers chronic pain.</li><li>Senior ask doctor.</li><li>Insurance varies.</li><li>FSA/HSA eligible.</li><li>Worth exploring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Conditions helped</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chronic pain.</li><li>Arthritis.</li><li>Senior back pain.</li><li>Headaches.</li><li>Studies-backed for some.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Doctor consult first</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discuss with primary.</li><li>Senior medication interactions.</li><li>Blood thinner concerns.</li><li>Communicate openly.</li><li>Worth discussion.</li><li>Safe usually.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Acupressure DIY</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free YouTube tutorials.</li><li>Senior at-home self-care.</li><li>Less effective than acupuncture.</li><li>Free.</li><li>Worth learning basics.</li><li>Daily practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tai Chi instead</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free YouTube classes.</li><li>Senior balance + meditation.</li><li>Studies-proven.</li><li>Daily practice.</li><li>Better falls prevention.</li><li>Worth trying first.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Tai Chi free + acupuncture if helps = senior alternative</h3><p className="text-sm text-muted-foreground">Senior alternative medicine: try free Tai Chi YouTube first for balance + chronic pain. Acupuncture $50-$200/visit if want — Medicare may cover chronic pain. NCCAOM.org find verified practitioner. Doctor consult first. Worth multiple modalities.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
