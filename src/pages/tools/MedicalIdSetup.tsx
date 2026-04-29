import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse, AlertTriangle } from 'lucide-react';

export default function MedicalIdSetup() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical ID Setup — Emergency Info on Your Lock Screen | TekSure" description="If you collapse, paramedics can read your meds, allergies, and emergency contacts right from your locked phone — if you set this up. Step-by-step for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical ID Setup</h1>
          <p className="text-lg text-muted-foreground">15 minutes that could save your life.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">If you fall, faint, or are in an accident, paramedics know to check your phone. Both iPhones and Android phones can show your meds, allergies, blood type, and emergency contacts — even when locked, with no PIN needed.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — Medical ID</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open the <strong>Health</strong> app (white with a pink heart).</li>
                <li>Tap your photo or initials in the top right corner.</li>
                <li>Tap <strong>Medical ID</strong>.</li>
                <li>Tap <strong>Get Started</strong> or <strong>Edit</strong> in the top right.</li>
                <li>Fill in: name, date of birth, medical conditions (diabetes, heart, etc.), allergies, medications you take, blood type, organ donor status.</li>
                <li>Add Emergency Contacts — usually a spouse and one or two adult children.</li>
                <li><strong>VERY IMPORTANT:</strong> Turn ON "Show When Locked" — otherwise paramedics can't see it.</li>
                <li>Also turn ON "Share During Emergency Call" — this sends your info if you dial 911.</li>
                <li>Tap Done.</li>
              </ol>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">How paramedics see it:</p>
                <p>From the lock screen, swipe up or press the side button to see Emergency. They tap "Medical ID" — your info appears. No passcode needed.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Emergency Information</h3>
              <p className="text-sm mb-3">The exact menu names vary slightly by phone. The two most common paths:</p>
              <p className="font-semibold text-sm mt-3">Most Android phones (Pixel, Motorola, OnePlus):</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Open <strong>Settings</strong>.</li>
                <li>Tap <strong>Safety & emergency</strong>.</li>
                <li>Tap <strong>Medical info</strong> (or "Emergency information").</li>
                <li>Fill in name, blood type, allergies, medications, address, organ donor.</li>
                <li>Go back, tap <strong>Emergency contacts</strong> — add your spouse and adult children.</li>
                <li>Make sure <strong>"Show on lock screen"</strong> is turned on.</li>
              </ol>
              <p className="font-semibold text-sm mt-4">Samsung Galaxy:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Safety and emergency → Medical info.</li>
                <li>Same fields as above. Turn on "Show on Lock screen".</li>
                <li>Also explore "Send SOS messages" — press the side button 5 times to text emergency contacts your location.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Update it once a year</h3>
                <p className="text-sm text-muted-foreground">Medications change. Phone numbers change. Set a reminder for every January (or your birthday) to open Medical ID and double-check everything.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For caregivers</h3>
            <p className="text-sm text-muted-foreground">If you help an aging parent — set this up on their phone too. Use a recent photo, list every medication exactly, and add yourself as the emergency contact. ER nurses look for this first thing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
