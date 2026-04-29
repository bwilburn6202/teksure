import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function CochlearImplantBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cochlear Implants for Seniors | TekSure" description="When hearing aids aren't enough. Plain-English cochlear implant guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cochlear Implants</h1>
          <p className="text-lg text-muted-foreground">Restore hearing when aids stop working.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When considered</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Severe-to-profound hearing loss.</li>
              <li>Hearing aids no longer help enough.</li>
              <li>Speech understanding under 50% with aids.</li>
              <li>Can&apos;t hear phone calls clearly.</li>
              <li>Stopped going out due to inability to converse.</li>
              <li>Most candidates have lost hearing 5-10+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Surgery — inner ear implant.</li>
              <li>External processor on ear (like hearing aid).</li>
              <li>Bypasses damaged cochlea.</li>
              <li>Stimulates auditory nerve directly.</li>
              <li>Brain learns to interpret signals.</li>
              <li>3-6 months for full benefit.</li>
              <li>Many seniors regain telephone hearing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cochlear Americas</strong> — most popular US.</li>
              <li><strong>MED-EL</strong> — Austrian, high-quality.</li>
              <li><strong>Advanced Bionics</strong> — Sonova-owned.</li>
              <li>Implant lasts 30+ years.</li>
              <li>Processors upgrade every 5-7 years.</li>
              <li>Audiologist + surgeon team picks brand.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost + insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Total cost: $30,000-100,000.</li>
              <li>Medicare covers if criteria met.</li>
              <li>Out-of-pocket: $1,000-5,000 typical.</li>
              <li>Private insurance also covers.</li>
              <li>VA benefits cover for eligible vets.</li>
              <li>NIH clinical trials sometimes free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Risks + considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Surgery — 2-4 hour outpatient.</li>
              <li>Risk of infection, dizziness, taste changes.</li>
              <li>Loss of any natural hearing remaining.</li>
              <li>Can&apos;t MRI without removing magnet.</li>
              <li>Daily charging + maintenance.</li>
              <li>Re-learning to hear — therapy required.</li>
              <li>Most age 60-90+ excellent results.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Find specialists</h3>
            <p className="text-sm text-muted-foreground">Major hospitals have cochlear implant teams. <strong>House Ear Institute</strong>, <strong>Mass Eye + Ear</strong>, <strong>Vanderbilt</strong> are top centers. Ask audiologist for referral. Many seniors say best decision they made — &quot;heard my granddaughter&apos;s voice for first time in 15 years.&quot;</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
