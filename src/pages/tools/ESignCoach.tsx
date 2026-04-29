import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pen, ShieldCheck } from 'lucide-react';

export default function ESignCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="e-Sign Coach — DocuSign, Adobe Sign, Apple Markup | TekSure" description="Asked to sign a document by email? Don't print, scan, fax. Plain-English steps to sign electronically — for free, in 2 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">e-Sign Coach</h1>
          <p className="text-lg text-muted-foreground">Sign documents on your phone or computer. No printer needed.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Are e-signatures legally binding?</h2>
            <p className="text-sm">Yes. The federal "ESIGN Act" of 2000 made electronic signatures equal to ink-on-paper for most purposes. Banks, lawyers, real estate, doctors, and government forms all accept them. (A few exceptions: wills and certain court documents still need wet ink.)</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Path 1 — Someone sent you a DocuSign or Adobe Sign email</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the email. Look for a "Review Document" or "Sign Here" button.</li>
              <li>Tap it. The document opens in your browser — no app needed.</li>
              <li>It walks you through page by page. Yellow tabs show where to sign or initial.</li>
              <li>Tap the yellow tab → it asks how to make your signature: type your name, draw with your finger, or upload an image.</li>
              <li>"Type" is fine and legal — it picks a fancy script font.</li>
              <li>When all tabs are done, tap "Finish" or "Submit".</li>
              <li>You'll get an email with a copy of the signed document. Save it.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Path 2 — They emailed a PDF asking you to sign</h2>
            <p className="text-sm mb-3">Use your phone or computer's built-in signing tool — free.</p>
            <p className="font-semibold mt-3 text-sm">📱 iPhone / iPad:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open the PDF in Mail or Files.</li>
              <li>Tap the markup icon (pen tip in a circle) at the top.</li>
              <li>Tap the + → "Signature" → draw with your finger. (Saved for next time.)</li>
              <li>Drag the signature to the right spot. Tap Done.</li>
              <li>Email it back as a reply.</li>
            </ol>
            <p className="font-semibold mt-3 text-sm">🤖 Android:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open the PDF in Google Drive (free).</li>
              <li>Tap the pencil icon at the bottom.</li>
              <li>Pick "Drawing" → draw your signature with your finger.</li>
              <li>Save and share back.</li>
            </ol>
            <p className="font-semibold mt-3 text-sm">🍎 Mac:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open the PDF in Preview.</li>
              <li>Click the markup toolbar icon (pencil tip in a circle).</li>
              <li>Click the signature icon → "Create Signature" → use your trackpad or hold a hand-signed paper to your camera.</li>
              <li>Drag the signature onto the PDF.</li>
            </ol>
            <p className="font-semibold mt-3 text-sm">🪟 Windows:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open the PDF in Microsoft Edge (free).</li>
              <li>Click the "Draw" toolbar button (a pencil icon).</li>
              <li>Sign with your mouse, trackpad, or stylus.</li>
              <li>Save the file with "Save As".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Stay safe</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Never sign a document you didn't expect — pause and verify with the sender by phone.</li>
                  <li>DocuSign and Adobe Sign emails should ONLY come from docusign.net or adobesign.com. Hover over the sender to check.</li>
                  <li>Read the document fully before signing, just like a paper one.</li>
                  <li>The "signed copy" email is your proof — save it in a folder by year.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free tools (no signup)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>DocuSign Free</strong> — 3 free sends per month if YOU need others to sign.</li>
              <li><strong>Adobe Acrobat Reader (free)</strong> — let's you sign PDFs without a subscription.</li>
              <li><strong>HelloSign</strong> — 3 free signs/month from your end.</li>
              <li><strong>Apple's Markup</strong> and <strong>Microsoft Edge's PDF tools</strong> — totally free, built into your devices.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
