import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SeniorSmartLights() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Lights — Senior Guide" description="Light up your home by voice and phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Lights</h1>
          <p className="text-lg text-muted-foreground">Turn on lights without getting up.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Easy bulbs</h2><p>Philips Hue or TP-Link Kasa. Screw in any standard lamp. About $15-30 each.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pair with app</h2><p>Get the bulb's app. Sign up. Phone finds the bulb on your Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Voice control</h2><p>Link to Alexa or Google Home. Then Hey Google, turn off bedroom light.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Schedules</h2><p>Set lights to come on at sunset. Off at bedtime. Saves you crossing the room.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Away mode</h2><p>Lights turn on randomly while you're traveling. Looks like someone's home.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip dimmer switches</h2><p>If your switch is wired with a dimmer, get a new switch — smart bulbs don't work with dimmers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Smart plugs are simpler — turn any lamp into smart light without changing the bulb.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
