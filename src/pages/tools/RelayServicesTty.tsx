import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const SERVICES = [
  { name: 'CapTel', what: 'Captioned phone — call anyone; their words appear on the screen as captions.', good: 'Best home option. Free + free phone if you qualify (hearing-impaired adults).' },
  { name: 'ClearCaptions', what: 'Same idea. Free phone for hearing-impaired.', good: 'Alternative to CapTel.' },
  { name: 'CaptionCall', what: 'Free captioned phone with installation help.', good: 'Free for hearing-impaired adults.' },
  { name: 'IP Relay (free)', what: 'Type your message; relay operator speaks it to the other person, then types back what they say. Available via apps.', good: 'For total deafness or severe hearing loss.' },
  { name: 'Video Relay Service (VRS)', what: 'For ASL users. Sign to interpreter who relays voice to other person.', good: 'For Deaf community.' },
  { name: 'Live Captions on iPhone (iOS 16+)', what: 'Real-time captions on ANY call, even FaceTime. Free, built in.', good: 'Best modern option for iPhone users.' },
  { name: 'Live Caption on Pixel + Samsung', what: 'Same idea on Android.', good: 'Best for Android.' },
];

export default function RelayServicesTty() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Relay Services & TTY — Hearing-Impaired Phone Help | TekSure" description="Hearing-impaired? Captioned phones, IP Relay, and live captions on smartphones. Plain-English picks for free phone services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Relay Services & TTY</h1>
          <p className="text-lg text-muted-foreground">Make every phone call accessible. Mostly free.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Federal funding</h2>
            <p className="text-sm">All these services are funded by FCC for hearing-impaired Americans. The phones are free if you qualify. The service is free. Includes training and installation help.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm">{s.what}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to qualify (most providers)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Hearing loss that affects phone use.</li>
              <li>One-page certification from any audiologist or doctor.</li>
              <li>Mail / scan certification.</li>
              <li>Provider sends free phone in 1-3 weeks.</li>
              <li>Free installation help available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For dual sensory loss (vision + hearing)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Sprint Accessibility Network</strong> — phone with high-contrast keypad + captions.</li>
              <li><strong>iCanConnect</strong> — federal program for low-income with combined vision/hearing loss. Free equipment and training.</li>
              <li>Apply at <strong>icanconnect.org</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick win for any iPhone user with hearing loss</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings → Accessibility → Live Captions → ON.</li>
              <li>For phone calls: settings → Phone → Live Captions during call → ON.</li>
              <li>Now ANY call shows real-time text on screen.</li>
              <li>FaceTime, regular calls, voicemails — all captioned.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hearing aids + phone</h3>
            <p className="text-sm text-muted-foreground">"MFi hearing aids" (Made for iPhone) pair to iPhone for direct streaming. Phone calls go straight to hearing aids — clearer than holding phone to ear. Most modern hearing aids support this.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
