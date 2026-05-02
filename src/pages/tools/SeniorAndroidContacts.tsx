import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorAndroidContacts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contacts on Android — Senior Guide" description="Manage your contacts on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contacts on Android</h1>
          <p className="text-lg text-muted-foreground">Keep family and doctors handy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Contacts</h2><p>Tap the colorful person icon, or open the Phone app and tap Contacts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add a person</h2><p>Tap the plus button. Type a name and number. Tap Save.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Add a photo</h2><p>Open the contact, tap Edit, tap the camera. A face makes finding them faster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mark favorites</h2><p>Tap the star on a contact. Favorites appear at the top of the Phone app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Search</h2><p>Pull down at the top. Type a name. Faster than scrolling a long list.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Synced everywhere</h2><p>Contacts save to your Google account — same list on every Android device you sign into.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Add ICE (In Case of Emergency) for a family member. First responders can find it without your password.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
