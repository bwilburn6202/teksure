import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorChromePasswords() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Password Manager — Senior Guide" description="Save and manage passwords in Chrome safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chrome Passwords</h1>
          <p className="text-lg text-muted-foreground">Stop trying to remember passwords.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Save a password</h2><p>When you sign in to a site, Chrome asks Save? Tap Save. Done.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Auto-fill</h2><p>Next visit, Chrome fills your username and password. Sign in with one tap.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. View saved passwords</h2><p>Settings, Passwords. Use your phone PIN to peek at any saved password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Strong password generator</h2><p>When making a new account, Chrome offers a strong random password. Tap Use suggested.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Check for breaches</h2><p>Settings, Passwords, Check passwords. Chrome warns if any was leaked online.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sync across devices</h2><p>Sign in to Chrome with your Google account. Same passwords work on every device.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Saved passwords are encrypted with your Google account password. Only you can read them.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
