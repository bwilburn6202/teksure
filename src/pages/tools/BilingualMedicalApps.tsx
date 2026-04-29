import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

const APPS = [
  { name: 'Doctolib en Español', cost: 'FREE', best: 'Doctor finder + appointment booking. Spanish UI.', good: 'Best appointment.' },
  { name: 'Solv (multilingual)', cost: 'FREE', best: 'Same-day urgent care + telehealth. Spanish + Mandarin.', good: 'Best urgent care.' },
  { name: 'Apple Health (Salud)', cost: 'FREE', best: 'Switch language to Spanish. Records + prescriptions translated.', good: 'Best for iPhone.' },
  { name: 'iTranslate / Google Translate', cost: 'FREE', best: 'Translate prescriptions, instructions in real-time.', good: 'Best translator.' },
  { name: 'CarePartners Mobile', cost: 'FREE', best: 'Spanish caregiver support + senior care info.', good: 'Best caregiver.' },
];

export default function BilingualMedicalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bilingual Medical Apps | Aplicaciones Médicas Bilingües | TekSure" description="Spanish + English healthcare apps. Plain-English picks (and Spanish) for medical translation, telehealth, and finding bilingual doctors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bilingual Medical Apps</h1>
          <p className="text-lg text-muted-foreground">Aplicaciones médicas bilingües.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal law — free interpreters</h2>
            <p className="text-sm">Federal law (Title VI, Civil Rights Act) requires hospitals/clinics that get federal funding to provide FREE interpreters in any language you need. ALL major hospitals, FQHCs, and Medicare-accepting offices.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>"I need an interpreter, please" — bring you one or video.</li>
              <li>Don&apos;t accept "your family member can interpret" — that violates federal law for medical visits.</li>
              <li>Most ERs have phone-interpreter service available 24/7.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find Spanish-speaking doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Insurance directory</strong> — filter by Spanish-speaking.</li>
              <li><strong>Zocdoc</strong> — search "Spanish-speaking" + your zip.</li>
              <li><strong>Healthgrades</strong> — language filter.</li>
              <li><strong>Local Latino health clinic / FQHC</strong> — almost always bilingual.</li>
              <li><strong>NAHN (National Association of Hispanic Nurses)</strong> — finder.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip care due to language</h3>
            <p className="text-sm text-muted-foreground">Idioma no debe ser barrera para atención médica. Pide intérprete — es tu derecho federal. La salud es lo primero.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
