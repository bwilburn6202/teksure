import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorAndroidGmail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gmail on Android — Senior Guide" description="Use Gmail on your Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gmail on Android</h1>
          <p className="text-lg text-muted-foreground">Email made simple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Gmail</h2><p>Tap the red and white envelope icon. Sign in with your Google account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read messages</h2><p>The inbox shows newest at top. Tap a message to open it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Reply</h2><p>Tap the curved arrow. Type your reply. Tap the paper airplane to send.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. New message</h2><p>Tap the colorful pencil-circle button at the bottom right.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete junk</h2><p>Swipe a message left to delete, or right to archive.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Spam protection</h2><p>Gmail blocks most junk automatically. Spam folder is in the menu — empty monthly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never click links from unknown senders. If a bank email looks odd, open the bank app instead.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
