import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorWindowsEmail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email on Windows — Senior Guide" description="Read and send email on a Windows PC." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email on Windows</h1>
          <p className="text-lg text-muted-foreground">Use Outlook or Gmail in a browser.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Outlook app</h2><p>The new Outlook is built into Windows 11. Click Start, search Outlook.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Gmail in a browser</h2><p>Visit gmail.com. Sign in. Bookmark the page for quick access.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Compose</h2><p>Click New mail or Compose. Add the email address, subject, and message.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Attach files</h2><p>Click the paper-clip icon. Pick the file from your folders. It uploads with the message.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Spam folder</h2><p>Check the spam or junk folder once a week. Real messages sometimes land there.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Phishing warnings</h2><p>If a sender asks for a password, ignore it. Real banks never email you a sign-in form.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Hover (don't click) over a link to preview where it goes. Suspicious URLs are easy to spot.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
