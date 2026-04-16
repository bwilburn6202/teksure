import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, CheckCircle, Circle, ArrowRight } from 'lucide-react';

type PhoneType = 'iphone' | 'android' | null;
interface Step { id: string; title: string; description: string; iphone?: string; android?: string; }

const STEPS: Step[] = [
  { id: 'charge', title: 'Charge your phone to at least 50%', description: 'Setup can take a while and uses a lot of battery. Plug in your phone and wait until it reaches at least 50% before starting.' },
  { id: 'wifi', title: 'Connect to Wi-Fi', description: 'You will need an internet connection. Connect to your home Wi-Fi network during setup. This is faster and free (unlike using cellular data).' },
  { id: 'account', title: 'Sign in with your account', description: 'You will be asked to sign in or create an account.', iphone: 'Use your Apple ID. If you do not have one, tap "Create a free Apple ID." Write down your password.', android: 'Use your Google account (Gmail address). If you do not have one, tap "Create account." Write down your password.' },
  { id: 'transfer', title: 'Transfer data from your old phone', description: 'Both iPhone and Android offer easy transfer tools.', iphone: 'Place your old iPhone next to the new one. A "Quick Start" screen appears automatically. Follow the on-screen instructions.', android: 'During setup, you will see "Copy apps & data." Tap it, then connect to your old phone via cable or Wi-Fi. Follow the prompts.' },
  { id: 'lock', title: 'Set up a screen lock', description: 'This protects all your data if your phone is lost or stolen.', iphone: 'Settings → Face ID & Passcode. Set a 6-digit passcode and enroll Face ID.', android: 'Settings → Security → Screen Lock. Choose PIN (at least 6 digits) and set up fingerprint if available.' },
  { id: 'updates', title: 'Install software updates', description: 'Your new phone may not have the latest software.', iphone: 'Settings → General → Software Update → Download and Install.', android: 'Settings → System → System Update → Check for Update.' },
  { id: '2fa', title: 'Turn on two-factor authentication', description: 'This is the single most important security step.', iphone: 'Settings → [your name] → Password & Security → Two-Factor Authentication → Turn On.', android: 'myaccount.google.com → Security → 2-Step Verification → Get Started.' },
  { id: 'findmy', title: 'Turn on Find My Phone', description: 'If your phone is ever lost or stolen, you can locate it, lock it, or erase it remotely.', iphone: 'Settings → [your name] → Find My → Find My iPhone → Turn On. Also turn on "Send Last Location."', android: 'Settings → Security → Find My Device → Turn On. Also visit android.com/find to test it.' },
  { id: 'backup', title: 'Set up automatic backups', description: 'This ensures your photos, contacts, and settings are always saved.', iphone: 'Settings → [your name] → iCloud → iCloud Backup → Turn On.', android: 'Settings → System → Backup → Turn on "Back up to Google Drive."' },
  { id: 'emergency', title: 'Add emergency contacts', description: 'In an emergency, first responders can see your emergency contacts and medical info from your lock screen.', iphone: 'Open the Health app → Medical ID → Edit → Add Emergency Contact.', android: 'Settings → Safety & Emergency → Emergency Contacts → Add Contact.' },
];

export default function NewPhoneSetup() {
  const [phoneType, setPhoneType] = useState<PhoneType>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setCompleted(s => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const progress = Math.round((completed.size / STEPS.length) * 100);
  return (
    <>
      <SEOHead title="New Phone Setup Checklist" description="Step-by-step checklist for setting up a new iPhone or Android phone the right way." path="/tools/new-phone-setup" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Smartphone className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">New Phone Setup Checklist</h1><p className="text-muted-foreground">Set up your new phone the right way — step by step</p></div>
        {!phoneType ? (
          <div className="flex gap-4 justify-center"><Button size="lg" onClick={() => setPhoneType('iphone')} className="gap-2">iPhone / iPad</Button><Button size="lg" variant="outline" onClick={() => setPhoneType('android')} className="gap-2">Android</Button></div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6"><Badge variant="outline">{phoneType === 'iphone' ? 'iPhone' : 'Android'}</Badge><span className="text-sm font-medium">{completed.size}/{STEPS.length} complete ({progress}%)</span></div>
            <div className="h-2 rounded-full bg-muted mb-8 overflow-hidden"><div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} /></div>
            <div className="space-y-3">{STEPS.map(step => (
              <Card key={step.id} className={`cursor-pointer transition-all ${completed.has(step.id) ? 'border-green-500/30 bg-green-50/50 dark:bg-green-950/20' : ''}`} onClick={() => toggle(step.id)}>
                <CardContent className="p-4 flex gap-3">
                  <div className="mt-0.5">{completed.has(step.id) ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Circle className="h-5 w-5 text-muted-foreground" />}</div>
                  <div><h3 className={`font-medium ${completed.has(step.id) ? 'line-through text-muted-foreground' : ''}`}>{step.title}</h3><p className="text-sm text-muted-foreground mt-1">{step.description}</p>{(phoneType === 'iphone' && step.iphone) && <p className="text-sm mt-2 bg-muted/50 rounded-lg p-3"><strong>iPhone:</strong> {step.iphone}</p>}{(phoneType === 'android' && step.android) && <p className="text-sm mt-2 bg-muted/50 rounded-lg p-3"><strong>Android:</strong> {step.android}</p>}</div>
                </CardContent>
              </Card>
            ))}</div>
            {completed.size === STEPS.length && <div className="text-center mt-8 p-6 rounded-xl bg-green-500/10 border border-green-500/30"><CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" /><h2 className="text-lg font-bold">Your phone is all set up!</h2><p className="text-sm text-muted-foreground">You have completed all the important setup steps.</p></div>}
          </div>
        )}
      </div></main>
      <Footer />
    </>
  );
}
