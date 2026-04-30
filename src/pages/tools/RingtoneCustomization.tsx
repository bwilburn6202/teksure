import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function RingtoneCustomization() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ringtone Customization for Seniors | TekSure" description="Custom phone tones. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Custom Ringtones</h1>
          <p className="text-lg text-muted-foreground">Hear better. Know who&apos;s calling.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why custom?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hear better with familiar tones.</li>
              <li>Loud + clear ringtones for hearing.</li>
              <li>Different tone per family member.</li>
              <li>Know if important without looking.</li>
              <li>Identify call without phone in hand.</li>
              <li>Custom = fun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — change ringtone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Sounds &amp; Haptics&quot;.</li>
              <li>&quot;Ringtone&quot;.</li>
              <li>Choose from list.</li>
              <li>Tap to preview.</li>
              <li>Press Back to save.</li>
              <li>Volume slider higher.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — change ringtone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Sounds&quot;.</li>
              <li>&quot;Phone ringtone&quot;.</li>
              <li>Pick from list.</li>
              <li>Or tap &quot;+&quot; to add custom.</li>
              <li>Browse phone&apos;s music.</li>
              <li>Set as default.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Per-contact tones</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Contacts.</li>
              <li>Tap contact (e.g., daughter).</li>
              <li>Edit, then &quot;Ringtone&quot;.</li>
              <li>Different tone for each.</li>
              <li>&quot;Mom&apos;s tone&quot; — recognize instantly.</li>
              <li>Or text tone too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly choices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Loud, clear tones — &quot;Old Phone&quot;.</li>
              <li>Familiar songs — your generation.</li>
              <li>Avoid: muffled or quiet tones.</li>
              <li>Avoid: 8-bit electronic.</li>
              <li>Vibrate + tone for hearing-impaired.</li>
              <li>Test in noisy environment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free ringtone sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built-in phone (best).</li>
              <li><strong>Zedge</strong> — free app, thousands.</li>
              <li><strong>Free Ringtones for iPhone</strong>.</li>
              <li>YouTube — convert songs.</li>
              <li>Apple iTunes — buy 30 sec ringtone $1.</li>
              <li>Avoid sketchy ringtone sites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hearing-impaired tips</h3>
            <p className="text-sm text-muted-foreground">Vibrate-only doesn&apos;t work for many seniors. Set vibrate + tone. Bedside speaker amplifier (CapTel, Clarity). Smart watch buzzes wrist when phone rings — Apple Watch. Light flash setting (iPhone Settings → Accessibility → Audio/Visual). Multiple alerts ensure don&apos;t miss calls.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
