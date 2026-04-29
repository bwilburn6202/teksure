import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function WordForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microsoft Word for Seniors | TekSure" description="Master Word basics. Plain-English Word guide for seniors writing letters + memoirs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Word for Seniors</h1>
          <p className="text-lg text-muted-foreground">Letters + memoirs + lists. Step by step.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 essential skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Open + Save</strong> — basics.</li>
              <li><strong>Type + edit</strong> — copy/paste, undo (Ctrl+Z).</li>
              <li><strong>Format</strong> — bold, italic, font size.</li>
              <li><strong>Headings</strong> — for memoirs/long docs.</li>
              <li><strong>Print or PDF</strong> — share.</li>
              <li>That covers 90% of senior needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Increase default font size to 14 or 16pt.</li>
              <li>Increase Word display zoom (View → Zoom → 150%).</li>
              <li>Enable spelling + grammar check.</li>
              <li>Auto-save (saves every 10 min).</li>
              <li>Dictate by voice — Home → Dictate icon.</li>
              <li>Read Aloud — Review → Read Aloud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Templates save time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File → New — search templates.</li>
              <li>Letters, resumes, flyers, certificates.</li>
              <li>Memorial programs.</li>
              <li>Holiday letters.</li>
              <li>Family newsletters.</li>
              <li>Type over template text.</li>
              <li>Don&apos;t start from blank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice typing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Microsoft 365 Word has Dictate.</li>
              <li>Click Dictate icon (Home tab).</li>
              <li>Speak — text appears.</li>
              <li>Say &quot;period,&quot; &quot;comma,&quot; &quot;new paragraph.&quot;</li>
              <li>Easier than typing.</li>
              <li>Edit afterwards.</li>
              <li>Big help for arthritic hands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free Word alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Word Online</strong> — FREE at office.com.</li>
              <li><strong>Google Docs</strong> — FREE at docs.google.com.</li>
              <li><strong>LibreOffice Writer</strong> — FREE download.</li>
              <li>All open .docx files.</li>
              <li>Most seniors don&apos;t need full Microsoft 365.</li>
              <li>$70/yr or use free version.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Microsoft Support</strong> — support.microsoft.com. Free tutorials. <strong>YouTube</strong> — &quot;Word for beginners.&quot; <strong>Library classes</strong> — many libraries teach Word free. <strong>Senior Planet</strong> — free senior tech classes. Don&apos;t struggle alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
