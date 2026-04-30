import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function AppleNotesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Notes for Seniors | TekSure" description="Use Apple Notes for everything — lists, reminders, photos, scans. Senior tutorial." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Notes</h1>
          <p className="text-lg text-muted-foreground">Free + powerful + on every Apple device.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take notes by typing or voice.</li>
              <li>Photograph documents to save.</li>
              <li>Scan documents (PDF).</li>
              <li>Lists with checkboxes.</li>
              <li>Free, syncs across devices.</li>
              <li>Already on every iPhone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grocery lists.</li>
              <li>Medication tracker.</li>
              <li>Doctor notes.</li>
              <li>Recipe collection.</li>
              <li>Important phone numbers.</li>
              <li>Daily journal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Scan documents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap camera icon.</li>
              <li>&quot;Scan Documents.&quot;</li>
              <li>Auto-detects edges.</li>
              <li>Save as PDF.</li>
              <li>Email to doctor, lawyer, family.</li>
              <li>Replaces actual scanner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice dictation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap microphone on keyboard.</li>
              <li>Speak — words appear.</li>
              <li>Easier than typing.</li>
              <li>Capture thoughts quickly.</li>
              <li>Edit later if needed.</li>
              <li>Best feature for arthritic hands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lock private notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap lock icon on note.</li>
              <li>Set password or Face ID.</li>
              <li>For SSN, account numbers.</li>
              <li>Protect sensitive info.</li>
              <li>Don&apos;t put bank passwords.</li>
              <li>Use password manager for those.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sync everywhere</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone, iPad, Mac all see same notes.</li>
              <li>iCloud syncs automatically.</li>
              <li>Web access via iCloud.com.</li>
              <li>No extra cost (uses iCloud).</li>
              <li>Same Apple ID = same notes.</li>
              <li>Share notes with family member.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use what you already have</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t install Notion, Evernote, or fancy note apps. Apple Notes (already on your iPhone) does 95% of what those do for free. Voice dictation, document scanning, photo notes, sync across devices, password protection. Most seniors find Apple Notes more than sufficient. Less is more.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
