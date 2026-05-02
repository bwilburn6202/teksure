import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorEmailBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Basics for Seniors — TekSure" description="How seniors send, receive, and organize email safely with Gmail or Outlook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Basics for Seniors</h1>
          <p className="text-lg text-muted-foreground">The basics, clearly explained.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pick a free email</h2><p>Gmail (Google) or Outlook (Microsoft). Both free forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Send a message</h2><p>Tap Compose or pencil. Enter recipient, subject, message. Tap Send arrow.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Attach a photo</h2><p>Tap paper-clip icon. Pick photo from your phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spam filter</h2><p>Both Gmail and Outlook auto-block spam. Check spam folder weekly for important messages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for scams</h2><p>If an email asks for money, password, or social security — delete and call the company directly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save important emails</h2><p>Tap star or flag. Find them later in &ldquo;Starred&rdquo; folder.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make font bigger — Settings → Display → Text Size.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
