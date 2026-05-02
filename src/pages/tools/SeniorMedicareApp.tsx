import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SeniorMedicareApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare App — Senior Guide" description="Use the official Medicare app on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare App</h1>
          <p className="text-lg text-muted-foreground">Carry your Medicare card on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Download official</h2><p>Search What's covered in the App Store or Play Store. Made by Medicare.gov directly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign in</h2><p>Use your Medicare.gov account. Or create one with your Medicare number.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Show your card</h2><p>Tap My Card. Show the digital card at the doctor — works just like the paper one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Check what's covered</h2><p>Search any test, drug, or procedure. See if Medicare covers it before you go.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Premiums and deductibles</h2><p>See what you owe and when. Avoid surprises at the end of the year.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware copycats</h2><p>Only download from official app stores. Some scam apps look real but steal info.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Medicare never calls or emails for your card number. Hang up if anyone says they're from Medicare and asks.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
