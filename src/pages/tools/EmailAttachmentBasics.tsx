import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Paperclip } from 'lucide-react';

export default function EmailAttachmentBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Attachments — Plain English | TekSure" description="Send + receive email attachments safely. Plain-English guide. Photos, documents, big files." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Paperclip className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Attachments</h1>
          <p className="text-lg text-muted-foreground">Send. Receive. Safely.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Send an attachment (iPhone/Apple Mail)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Mail → New email.</li>
              <li>Tap inside body → tap arrow above keyboard.</li>
              <li>Tap paperclip icon.</li>
              <li>Pick: Photo Library, Files, Camera.</li>
              <li>Select photo / document.</li>
              <li>Send.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Send an attachment (Gmail)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Gmail → Compose new email.</li>
              <li>Tap paperclip icon at top.</li>
              <li>Pick file from photos / drive / Files.</li>
              <li>Send.</li>
              <li>Files over 25MB go to Google Drive automatically.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big files (over 25MB)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iCloud Mail Drop</strong> — auto-handles up to 5GB.</li>
              <li><strong>Google Drive link</strong> — share via link.</li>
              <li><strong>WeTransfer.com</strong> — free, no account, up to 2GB.</li>
              <li><strong>Dropbox / OneDrive</strong> — share files via link.</li>
              <li>Don&apos;t try emailing 100 photos as attachments — fails.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Receive carefully</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER open attachments from strangers — virus risk.</li>
              <li>NEVER open .zip, .exe, .rar from unknown senders.</li>
              <li>If "from a friend" but unexpected — call them to confirm.</li>
              <li>Email viruses spread by hijacked accounts.</li>
              <li>iPhone Safari + Mail handle most malware automatically — but still be careful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common file types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>.pdf</strong> — documents, safe.</li>
              <li><strong>.jpg / .png / .heic</strong> — photos.</li>
              <li><strong>.docx</strong> — Word document. Open with Word, Google Docs.</li>
              <li><strong>.xlsx</strong> — Excel spreadsheet.</li>
              <li><strong>.mov / .mp4</strong> — video.</li>
              <li><strong>.zip</strong> — folder of files (be careful).</li>
              <li><strong>.exe</strong> — program (DON&apos;T open from email).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Drag-and-drop on computer</h3>
            <p className="text-sm text-muted-foreground">On computer, easier to drag a file directly into email window. Or use "Send to" right-click menu. Faster than navigating menus.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
