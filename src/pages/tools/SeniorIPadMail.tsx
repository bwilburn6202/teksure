import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorIPadMail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mail on iPad — Senior Guide" description="Read and send email from the Mail app on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mail on iPad</h1>
          <p className="text-lg text-muted-foreground">Email made simple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Add your account</h2><p>Open Settings. Tap Mail, then Accounts. Tap Add Account. Pick Gmail, Yahoo, or Outlook.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read messages</h2><p>Tap the Mail app. Tap a message to open it. Pinch to make text bigger if needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Reply</h2><p>Tap the curved arrow at the bottom. Type your reply. Tap the blue arrow to send.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. New message</h2><p>Tap the square-with-pencil icon. Add a recipient, subject, and message. Tap send.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete junk</h2><p>Swipe left on a message and tap Delete. Or tap Trash icon when the message is open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Attach a photo</h2><p>While writing, tap the photo icon above the keyboard. Pick a photo to attach.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a sender looks suspicious, do not tap any links. Delete the message or report as spam.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
