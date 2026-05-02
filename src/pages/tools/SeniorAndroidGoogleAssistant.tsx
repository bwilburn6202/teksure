import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorAndroidGoogleAssistant() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Assistant — Senior Guide" description="Talk to your Android phone with Google Assistant." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Assistant</h1>
          <p className="text-lg text-muted-foreground">Hands-free help on Android.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Wake it up</h2><p>Say Hey Google or Ok Google. The phone starts listening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set a timer</h2><p>Hey Google, set a 15-minute timer. Great while cooking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Make a call</h2><p>Hey Google, call my daughter. Works if her name is in your contacts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Send a text</h2><p>Hey Google, text Bob I will be late. Read back before sending.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Reminders</h2><p>Hey Google, remind me to take my medicine at 8 AM. Done.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Translate</h2><p>Hey Google, how do you say thank you in Spanish? Hear it spoken aloud.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pause Voice Match in Settings if you do not want phone always listening.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
