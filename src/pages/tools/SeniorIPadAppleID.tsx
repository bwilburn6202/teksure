import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

export default function SeniorIPadAppleID() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple ID on iPad — Senior Guide" description="Set up and protect your Apple ID." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple ID on iPad</h1>
          <p className="text-lg text-muted-foreground">Your account for everything Apple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Create one free</h2><p>Settings, Sign in. Tap Create Apple ID. Use an email you check often.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Strong password</h2><p>At least 8 characters, mixed case, a number. Write it down somewhere safe at home.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Two-Factor Authentication</h2><p>Always on for new accounts. A 6-digit code is sent during sign-in. Stops most break-ins.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Trusted phone number</h2><p>Add a backup number. Helpful if you lose your iPad and need to recover the account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Recovery contact</h2><p>Add a family member as your recovery contact. They can help if you forget the password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Spot scams</h2><p>Apple never calls or texts you about your Apple ID. Hang up if anyone says so.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Your Apple ID controls iCloud, App Store, FaceTime, Messages and more. Guard it like a key.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
