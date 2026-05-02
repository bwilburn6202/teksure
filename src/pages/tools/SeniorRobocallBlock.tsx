import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function SeniorRobocallBlock() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Block Robocalls — Senior Guide" description="Stop spam calls on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Block Robocalls</h1>
          <p className="text-lg text-muted-foreground">Stop the spam calls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Silence Unknown Callers</h2><p>iPhone — Settings, Phone, Silence Unknown Callers. Strangers go straight to voicemail.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Spam filtering</h2><p>Android — Phone app, Settings, Caller ID & spam. Turn on filter spam calls.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Block one number</h2><p>Open the call. Tap the i icon. Scroll down, tap Block this Caller.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Carrier tools</h2><p>Verizon Call Filter, AT&T ActiveArmor, T-Mobile Scam Shield — free apps from your carrier.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Do Not Call list</h2><p>Visit donotcall.gov. Add your number. Won't stop scammers but reduces legit telemarketers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Don't engage</h2><p>If you answer a robo, hang up. Don't press buttons or speak — they confirm a working number.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Robocalls cannot steal money unless you give information. Just hang up and you stay safe.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
