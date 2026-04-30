import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, MapPin, Mic, Camera, Bell, Contact, HardDrive } from 'lucide-react';

interface PermItem {
  icon: any;
  name: string;
  what: string;
  who: string;
  iphone: string;
  android: string;
}

const PERMS: PermItem[] = [
  { icon: MapPin, name: 'Location', what: 'Apps that know where you are.', who: 'Maps and weather need this. Most games and shopping apps don\'t.',
    iphone: 'Settings → Privacy & Security → Location Services. Turn off any app that doesn\'t need it. For Maps, set to "While Using".',
    android: 'Settings → Location → App location permissions. Set most apps to "Allow only while using" or "Don\'t allow".' },
  { icon: Mic, name: 'Microphone', what: 'Apps that can listen to you.', who: 'Phone calls, voice notes, video calls, dictation. NOT shopping, news, or game apps.',
    iphone: 'Settings → Privacy & Security → Microphone. Turn OFF for any app you don\'t recognize.',
    android: 'Settings → Security & privacy → Privacy → Permission manager → Microphone. Turn off anything suspicious.' },
  { icon: Camera, name: 'Camera', what: 'Apps that can use your camera.', who: 'Camera, FaceTime, Zoom, Messages, banking (for check deposit). Few others need it.',
    iphone: 'Settings → Privacy & Security → Camera. Turn off everything you don\'t use the camera in.',
    android: 'Settings → Security & privacy → Privacy → Permission manager → Camera.' },
  { icon: Contact, name: 'Contacts', what: 'Apps that can read your address book.', who: 'Phone, Messages, WhatsApp. Most other apps DON\'T need this — they often grab it just to send invitations.',
    iphone: 'Settings → Privacy & Security → Contacts. Be very picky — turn off anything that\'s not a messaging app.',
    android: 'Settings → Security & privacy → Privacy → Permission manager → Contacts.' },
  { icon: Bell, name: 'Notifications', what: 'Apps that buzz, ding, or pop up alerts.', who: 'Decide what you really want to see. Most apps over-notify.',
    iphone: 'Settings → Notifications → tap each app → turn off "Allow Notifications" for ones you don\'t need.',
    android: 'Settings → Notifications → App notifications. Turn off any app that pesters you.' },
  { icon: HardDrive, name: 'Photos', what: 'Apps that can see all your photos.', who: 'Most apps only need a photo when YOU pick one. They don\'t need full access.',
    iphone: 'Settings → Privacy & Security → Photos. Change "All Photos" to "Selected Photos" or "None" for apps that don\'t need everything.',
    android: 'Settings → Security & privacy → Privacy → Permission manager → Photos and videos.' },
];

export default function AppPermissionsReset() {
  const [phone, setPhone] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="App Permissions Reset Coach — Take Back Your Privacy | TekSure" description="Apps quietly track your location, listen to your microphone, and read your photos. Reset them all in 10 minutes — for iPhone or Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">App Permissions Reset</h1>
          <p className="text-lg text-muted-foreground">Take back the access apps quietly took. 10 minutes, big win.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-1">Why this matters</h2>
            <p className="text-sm text-muted-foreground">When you install an app, it asks for permission once and you usually tap "Allow". Years later, dozens of apps have access to your location, mic, contacts, and photos — many you don't even use anymore. This page walks through each kind of permission so you can clean it up.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-6">
          <button onClick={() => setPhone('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${phone === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone steps</button>
          <button onClick={() => setPhone('android')} className={`flex-1 p-3 rounded-lg border-2 ${phone === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android steps</button>
        </div>

        <div className="space-y-4">
          {PERMS.map(p => {
            const Icon = p.icon;
            return (
              <Card key={p.name}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.what}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3"><strong>Who actually needs it:</strong> {p.who}</p>
                  <div className="bg-muted/40 p-3 rounded text-sm">
                    <p className="font-semibold mb-1">{phone === 'iphone' ? 'iPhone' : 'Android'} steps:</p>
                    <p>{phone === 'iphone' ? p.iphone : p.android}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-6 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">If you turn something off and an app stops working, you can always turn it back on. Nothing breaks permanently.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
